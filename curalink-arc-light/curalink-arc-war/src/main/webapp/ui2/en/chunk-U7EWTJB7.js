import { StorageCommitmentService } from "./chunk-DRLXM5MG.js";
import { ConfirmComponent, FilterGeneratorComponent } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, DatePipe, HttpErrorHandler, KeycloakService, MatDialog, NgClass, ViewContainerRef, __decorate, hasIn_default, j4care, lodash_exports } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\storage-commitment\storage-commitment.component.html
var storage_commitment_component_default = `<div class="main_content monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="@@storage_commitments">Storage commitments</h2>\r
        <div class="filter_line" (keyup)="filterKeyUp($event)">\r
            <div class="filter_block">\r
                <filter-generator [schema]="filterSchema" filterIdTemplate="storage-commitment" [model]="filters" (submit)="search(0)"></filter-generator>\r
            </div>\r
        </div>\r
        <div class="filter_line">\r
            <div class="filter single_block">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <button class="submit btn-default pull-left" (click)="flushBefore()">Flush before</button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <ng-container *ngIf="_.size(matches) > 0">\r
            <button class="left_arrow arrow no_style"   i18n-title="@@title.preview_page" title="Preview page" [disabled]="!hasNewer(matches)" [ngClass]="{'active':hasNewer(matches)}" (click)="search(newerOffset(matches))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-left"></span>\r
            </button>\r
            <button class="right_arrow arrow no_style"  i18n-title="@@title.next_page" title="Next page" [disabled]="!hasOlder(matches)" [ngClass]="{'active':hasOlder(matches)}" (click)="search(olderOffset(matches))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-right"></span>\r
            </button>\r
        </ng-container>\r
        <table class="table table-bordered table-condensed" *ngIf="_.size(matches) > 0">\r
            <thead>\r
            <tr>\r
                <th colspan="2">\r
                </th>\r
                <th i18n="@@device_name">Device Name</th>\r
                <th i18n="@@status">Status</th>\r
                <th i18n="@@exporter_id">Exporter ID</th>\r
                <th i18n="@@requested">Requested</th>\r
                <th i18n="@@failures">Failures</th>\r
                <th i18n="@@created_time">Created time</th>\r
                <th i18n="@@updated_time">Updated time</th>\r
                <th i18n="@@transaction_uid">Transaction UID</th>\r
                <th i18n="@@study_uid">Study UID</th>\r
            </tr>\r
            </thead>\r
            <tbody>\r
            <ng-container *ngFor="let match of matches">\r
                <tr>\r
                    <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
                    <td>\r
                        <a (click)="$event.preventDefault();match.showProperties = !match.showProperties" href=""  i18n-title="@@show_properties" title="Show Properties">\r
                            <span class="glyphicon glyphicon-list"></span>\r
                        </a>\r
                        <a (click)="$event.preventDefault();delete(match)" href=""  i18n-title="@@title.delete" title="Delete">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </td>\r
                    <td [innerHtml]="match.properties.dicomDeviceName"></td>\r
                    <td [innerHtml]="match.properties.status" ></td>\r
                    <td [innerHtml]="match.properties.exporterID"></td>\r
                    <td [innerHtml]="match.properties.requested"></td>\r
                    <td [innerHtml]="match.properties.failures"></td>\r
                    <td [innerHtml]="match.properties.createdTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.updatedTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.transactionUID"></td>\r
                    <td [innerHtml]="match.properties.studyUID"></td>\r
                </tr>\r
                <tr *ngIf="match.showProperties">\r
                    <td colspan="11">\r
                        <table class="table table-bordered table-condensed attribute_list">\r
                            <tr *ngFor="let key of Object.keys(match.properties)">\r
                                <th [innerHtml]="key"></th>\r
                                <td *ngIf="key === 'createdTime' || key === 'updatedTime';else nodate_content" [innerHtml]="match.properties[key] | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                                <ng-template #nodate_content>\r
                                    <td [innerHtml]="match.properties[key]"></td>\r
                                </ng-template>\r
                            </tr>\r
                        </table>\r
                    </td>\r
                </tr>\r
                <tr [hidden]="true"></tr>\r
            </ng-container>\r
            </tbody>\r
        </table>\r
    </div>\r
</div>`;

// src/app/monitoring/storage-commitment/storage-commitment.component.ts
var _a;
var StorageCommitmentComponent = (_a = class {
  constructor(cfpLoadingBar, mainservice, service, viewContainerRef, dialog, httpErrorHandler) {
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.service = service;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.httpErrorHandler = httpErrorHandler;
    this.matches = [];
    this.exportTasks = [];
    this.Object = Object;
    this.filters = {
      ExporterID: void 0,
      offset: void 0,
      limit: 20,
      status: "*",
      StudyUID: void 0,
      updatedBefore: void 0,
      dicomDeviceName: void 0
    };
    this._ = lodash_exports;
    this.filterSchema = [];
  }
  ngOnInit() {
    this.initCheck(10);
  }
  initCheck(retries) {
    let $this = this;
    if (KeycloakService.keycloakAuth && KeycloakService.keycloakAuth.authenticated || hasIn_default(this.mainservice, "global.notSecure") && this.mainservice.global.notSecure) {
      this.init();
    } else {
      if (retries) {
        setTimeout(() => {
          $this.initCheck(retries - 1);
        }, 20);
      } else {
        this.init();
      }
    }
  }
  init() {
    this.initExporters(2);
  }
  filterKeyUp(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      this.search(0);
    }
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  search(offset) {
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.search(this.filters, offset).subscribe(res => {
      if (res && res.length > 0) {
        if (this.filters.limit < res.length) {
          res.pop();
        }
        $this.matches = res.map((properties, index) => {
          if (hasIn_default(properties, "Modality")) {
            properties.Modality = properties.Modality.join(",");
          }
          return {
            offset: offset + index,
            properties,
            showProperties: false
          };
        });
        $this.cfpLoadingBar.complete();
      } else {
        $this.cfpLoadingBar.complete();
        $this.matches = [];
        this.mainservice.showMsg("No tasks found!");
      }
    }, err => {
      $this.cfpLoadingBar.complete();
      $this.matches = [];
      $this.httpErrorHandler.handleError(err);
    });
  }
  getDifferenceTime(starttime, endtime) {
    let start = new Date(starttime).getTime();
    let end = new Date(endtime).getTime();
    if (!start || !end || end < start) {
      return null;
    } else {
      return this.msToTime(new Date(endtime).getTime() - new Date(starttime).getTime());
    }
  }
  msToTime(duration) {
    if (duration > 999) {
      let milliseconds = parseInt((duration % 1e3).toString()),
        seconds = parseInt((duration / 1e3 % 60).toString()),
        minutes = parseInt((duration / (1e3 * 60) % 60).toString()),
        hours = parseInt((duration / (1e3 * 60 * 60)).toString());
      if (hours === 0) {
        if (minutes === 0) {
          return seconds.toString() + "." + milliseconds.toString() + " sec";
        } else {
          seconds = seconds < 10 ? "0" + seconds : seconds;
          return minutes.toString() + ":" + seconds.toString() + "." + milliseconds.toString() + " min";
        }
      } else {
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + "." + milliseconds.toString() + " h";
      }
    } else {
      return duration.toString() + " ms";
    }
  }
  flushBefore() {
    let select = [{
      title: "PENDING",
      value: "PENDING",
      label: "PENDING"
    }, {
      title: "COMPLETED",
      value: "COMPLETED",
      label: "COMPLETED"
    }, {
      title: "WARNING",
      value: "WARNING",
      label: "WARNING"
    }, {
      title: "FAILED",
      value: "FAILED",
      label: "FAILED"
    }];
    let parameters = {
      content: "Select before date and status to delete all storage commitments",
      select,
      date: {
        placeholder: "Updated before",
        format: "yyyy-MM-dd",
        description: "Maximum update date of Storage Commitment Result to filter by"
      },
      result: {
        select: "PENDING",
        date: void 0
      },
      saveButton: "DELETE",
      saveButtonClass: "btn-danger"
    };
    let $this = this;
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        let formattedDate;
        let resultDate = j4care.extractDateTimeFromString(parameters.result.date);
        if (resultDate) {
          let resultDateTime = resultDate.firstDateTime;
          if (resultDateTime && resultDateTime.dateObject) formattedDate = j4care.formatDate(resultDateTime.dateObject, "yyyy-MM-dd");
        }
        this.service.flush(parameters.result.select, formattedDate).subscribe(res => {
          console.log("resflush", res);
          $this.mainservice.showMsg("" + res.deleted + " queues deleted successfully!");
          $this.search(0);
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  delete(match) {
    let $this = this;
    let parameters = {
      content: "Are you sure you want to delete this task?",
      result: "Ok",
      saveButton: "DELETE",
      saveButtonClass: "btn-danger"
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.delete(match.properties.transactionUID).subscribe(res => {
          $this.cfpLoadingBar.complete();
          $this.search(0);
          this.mainservice.showMsg("Task deleted successfully!");
        }, err => {
          $this.cfpLoadingBar.complete();
          console.log("cancleerr", err);
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  hasOlder(objs) {
    return objs && objs.length === this.filters.limit;
  }
  hasNewer(objs) {
    return objs && objs.length && objs[0].offset;
  }
  newerOffset(objs) {
    return Math.max(0, objs[0].offset - this.filters.limit);
  }
  olderOffset(objs) {
    return objs[0].offset + this.filters.limit;
  }
  initExporters(retries) {
    this.service.getExporters().subscribe(res => {
      this.exporters = res;
      this.filterSchema = this.service.getFiltersSchema(this.exporters);
      if (res && res[0] && res[0].id) {
        this.exporterID = res[0].id;
      }
    }, res => {
      if (retries) this.initExporters(retries - 1);
    });
  }
}, _a.ctorParameters = () => [{
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: StorageCommitmentService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: HttpErrorHandler
}], _a);
StorageCommitmentComponent = __decorate([Component({
  selector: "app-storage-commitment",
  template: storage_commitment_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, DatePipe, CommonModule],
  standalone: true
})], StorageCommitmentComponent);
export { StorageCommitmentComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/