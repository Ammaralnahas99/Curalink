import { ConfirmComponent, FilterGeneratorComponent, StorageSystemsService } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, J4careHttpService, KeycloakService, MatDialog, NgClass, NgStyle, SelectDropdown, ViewContainerRef, __decorate, forEach_default, hasIn_default, isArray_default, j4care, keys_default, lodash_exports, values_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\storage-systems\storage-systems.component.html
var storage_systems_component_default = `<div class="main_content monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="@@storage_systems">Storage systems</h2>\r
        <div class="filter_line" (keyup)="filterKeyUp($event)">\r
            <div class="filter_block">\r
                <filter-generator [schema]="filterSchema" filterIdTemplate="storage-systems" [model]="filters" (submit)="search(0)" [filterTreeHeight]="2"></filter-generator>\r
            </div>\r
        </div>\r
        <table class="table table-bordered table-condensed" *ngIf="_.size(matches) > 0">\r
            <thead>\r
                <tr>\r
                    <th colspan="2">\r
                    </th>\r
                    <th i18n="@@storage_id">Storage ID</th>\r
                    <th i18n="@@storage_uri">Storage URI</th>\r
                    <th i18n="@@read_only">Read Only</th>\r
                    <th i18n="@@no_deletion_constraint">No Deletion Constraint</th>\r
                    <th i18n="@@storage_cluster_id">Storage Cluster ID</th>\r
                    <th i18n="@@ae_title">AE Title</th>\r
                    <th i18n="@@space_usable_total">Space ( Usable / Total )</th>\r
                    <th i18n="@@used">Used</th>\r
                    <th i18n="@@storage_duration">Storage Duration</th>\r
                    <th i18n="@@export_storage_id_external_retrieve_aet">Export Storage ID / External Retrieve AET</th>\r
                    <th i18n="@@deleter_storage_threshold">Deleter / Storage Threshold</th>\r
                    <th i18n="@@delete_studies_older_than">Delete Studies Older Than</th>\r
                    <th i18n="@@delete_studies_received_before">Delete Studies Received Before</th>\r
                    <th i18n="@@delete_studies_not_used_since">Delete Studies Not Used Since</th>\r
                </tr>\r
            </thead>\r
            <tbody>\r
                <ng-container *ngFor="let match of matches" >\r
                    <tr [attr.title]="match.properties.warning ? 'Deleter threshold	is bigger than usable space!':null">\r
                        <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
                        <td class="td_buttons">\r
                            <a (click)="$event.preventDefault();match.showProperties = !match.showProperties" href=""  i18n-title="@@show_properties" title="Show Properties">\r
                                <span class="glyphicon glyphicon-list"></span>\r
                            </a>\r
                            <a (click)="$event.preventDefault();changeLocationStatus(match)" href=""  i18n-title="@@change_status_of_location" title="Change status of location">\r
                                <span class="glyphicon glyphicon-retweet"></span>\r
                            </a>\r
                        </td>\r
                        <td [innerHtml]="match.properties.dcmStorageID"></td>\r
                        <td [innerHtml]="match.properties.dcmURI" ></td>\r
                        <td [innerHtml]="match.properties.dcmReadOnly || 'false'" ></td>\r
                        <td [innerHtml]="match.properties.dcmNoDeletionConstraint || 'false'" ></td>\r
                        <td [innerHtml]="match.properties.dcmStorageClusterID" ></td>\r
                        <td [innerHtml]="match.properties.dicomAETitle" ></td>\r
                        <td [ngClass]="{'error':match.properties.warning}">{{match.properties.usableSpace}} <span *ngIf="match.properties.usableSpace && match.properties.totalSpace">/</span> {{match.properties.totalSpace}}</td>\r
                        <td width="5%" class="used_space_bar">\r
                            <span [innerHtml]="match.properties.usedSpace + ' %' || ''"></span>\r
                            <div class="bar" [ngStyle]="{'width.%': match.properties.usedSpace}"></div>\r
                            <div *ngIf="match.properties.deleterThresholdProcent" class="marker" [ngStyle]="{'left.%': ( 100 - match.properties.deleterThresholdProcent )}"></div>\r
                        </td>\r
                        <td>{{match.properties.dcmStorageDuration || 'PERMANENT'}}</td>\r
                        <td>\r
                            <ng-container *ngIf="match.properties.dcmExportStorageID || match.properties.dcmExternalRetrieveAET">\r
                                <span>{{match.properties.dcmExportStorageID || '-'}}</span> /\r
                                <span>{{match.properties.dcmExternalRetrieveAET || '-'}}</span>\r
                            </ng-container>\r
                        </td>\r
                        <td [ngClass]="{'error':match.properties.warning}">\r
                            <ng-container *ngIf="match.properties.deleterThreshold || match.properties.storageThreshold">\r
                                <span *ngIf="match.properties.deleterThresholdProcent">\r
                                    {{match.properties.deleterThresholdProcent}} % ( {{match.properties.deleterThreshold}} )\r
                                </span>\r
                                <span *ngIf="!match.properties.deleterThresholdProcent">-</span>\r
                                /\r
                                <span>{{match.properties.storageThreshold || '-'}}</span>\r
                            </ng-container>\r
                        </td>\r
                        <td>\r
                            <ng-container *ngIf="match.properties.dcmDeleteStudiesOlderThan">\r
                                <span>{{match.properties.dcmDeleteStudiesOlderThan || '-'}}</span>\r
                            </ng-container>\r
                        </td>\r
                        <td>\r
                            <ng-container *ngIf="match.properties.dcmDeleteStudiesReceivedBefore">\r
                                <span>{{match.properties.dcmDeleteStudiesReceivedBefore || '-'}}</span>\r
                            </ng-container>\r
                        </td>\r
                        <td>\r
                            <ng-container *ngIf="match.properties.dcmDeleteStudiesNotUsedSince">\r
                                <span>{{match.properties.dcmDeleteStudiesNotUsedSince || '-'}}</span>\r
                            </ng-container>\r
                        </td>\r
                    </tr>\r
                    <tr *ngIf="match.showProperties">\r
                        <td colspan="15">\r
                            <table class="table table-bordered table-condensed attribute_list">\r
                                <ng-container *ngFor="let key of Object.keys(match.properties)">\r
                                    <tr *ngIf="key != 'warning'">\r
                                        <th [innerHtml]="key"></th>\r
                                        <td [innerHtml]="match.properties[key]"></td>\r
                                    </tr>\r
                                </ng-container>\r
                            </table>\r
                        </td>\r
                    </tr>\r
                    <tr [hidden]="true"></tr>\r
                </ng-container>\r
            </tbody>\r
        </table>\r
    </div>\r
</div>`;

// angular:jit:style:inline:src\app\monitoring\storage-systems\storage-systems.component.ts;CiAgICAgICAgLnRkX2J1dHRvbnMgewogICAgICAgICAgICB3aWR0aDogNTVweDsKICAgICAgICB9CgogICAgICAgIC50ZF9idXR0b25zIGEgewogICAgICAgICAgICBwYWRkaW5nOiAycHg7CiAgICAgICAgfQogICAg
var storage_systems_component_default2 = "/* angular:styles/component:css;485f2d172daa6448770a79ee353db24b8f391e23057386f5713220e8da7acbd1;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\monitoring\\storage-systems\\storage-systems.component.ts */\n.td_buttons {\n  width: 55px;\n}\n.td_buttons a {\n  padding: 2px;\n}\n";

// src/app/monitoring/storage-systems/storage-systems.component.ts
var _a;
var StorageSystemsComponent = (_a = class {
  constructor($http, cfpLoadingBar, mainservice, service, viewContainerRef, dialog, httpErrorHandler) {
    this.$http = $http;
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.service = service;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.httpErrorHandler = httpErrorHandler;
    this.matches = [];
    this.exportTasks = [];
    this.filters = {
      offset: void 0,
      uriScheme: void 0,
      dicomAETitle: void 0,
      usage: void 0,
      usableSpaceBelow: void 0,
      usableSpaceBelowMode: "GB"
    };
    this._ = lodash_exports;
    this.Object = Object;
    this.filterSchema = [];
    this.statusesOFLocations = ["OK", "TO_DELETE", "FAILED_TO_DELETE", "MISSING_OBJECT", "FAILED_TO_FETCH_METADATA", "FAILED_TO_FETCH_OBJECT", "DIFFERING_OBJECT_SIZE", "DIFFERING_OBJECT_CHECKSUM", "DIFFERING_S3_MD5SUM", "FAILED_TO_DELETE2", "ORPHANED", "VERIFY_QSTAR_ACCESS_STATE", "QSTAR_ACCESS_STATE_NONE", "QSTAR_ACCESS_STATE_EMPTY", "QSTAR_ACCESS_STATE_UNSTABLE", "QSTAR_ACCESS_STATE_OUT_OF_CACHE", "QSTAR_ACCESS_STATE_OFFLINE", "QSTAR_ACCESS_STATE_ERROR_STATUS"];
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
    this.getAets();
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
  calculateUsableSpaceBelowFilter(filters) {
    if (filters.usableSpaceBelow) {
      switch (filters.usableSpaceBelowMode) {
        case "TB":
          filters.usableSpaceBelow = filters.usableSpaceBelow * 1e12;
          break;
        case "GB":
          filters.usableSpaceBelow = filters.usableSpaceBelow * 1e9;
          break;
        case "MB":
          filters.usableSpaceBelow = filters.usableSpaceBelow * 1e6;
          break;
      }
    }
    return filters;
  }
  changeLocationStatus(model) {
    console.log("model", model);
    let parameters = {
      content: "Change Status of the Location",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "From"
      }, {
        tag: "select",
        type: "text",
        options: this.statusesOFLocations.map(status => new SelectDropdown(status, status)),
        filterKey: "from",
        placeholder: "From"
      }], [{
        tag: "label",
        text: "To"
      }, {
        tag: "select",
        type: "text",
        options: this.statusesOFLocations.map(status => new SelectDropdown(status, status)),
        filterKey: "to",
        placeholder: "To"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SUBMIT"
    };
    this.confirm(parameters).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        console.log("ok", ok);
        if (j4care.hasSet(ok, "schema_model.from") && j4care.hasSet(ok, "schema_model.to") && j4care.hasSet(model, "properties.dcmStorageID")) {
          this.service.changeLocationStatus(model.properties.dcmStorageID, ok.schema_model).subscribe(res => {
            if (res && hasIn_default(res, "count")) {
              this.mainservice.showMsg("Count of corresponding operation:" + res.count + "");
            } else {
              this.mainservice.showMsg("Count of corresponding operation:" + 0 + "");
            }
            this.cfpLoadingBar.complete();
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        } else {
          this.cfpLoadingBar.complete();
        }
      }
    });
  }
  search(offset) {
    let $this = this;
    $this.cfpLoadingBar.start();
    let filters = Object.assign({}, this.filters);
    filters = this.calculateUsableSpaceBelowFilter(filters);
    delete filters.usableSpaceBelowMode;
    this.service.search(filters, offset).subscribe(res => {
      if (res && res.length > 0) {
        $this.matches = res.map((properties, index) => {
          if (properties.dcmNoDeletionConstraint || j4care.isSetInObject(properties, "deleterThreshold") && (j4care.isSetInObject(properties, "dcmExportStorageID") || j4care.isSetInObject(properties, "dcmExternalRetrieveAET"))) {
            properties.noDeleter = true;
          }
          if (hasIn_default(properties, "deleterThreshold") && hasIn_default(properties, "usableSpace")) {
            let deleterThreshold;
            properties.deleterThreshold.map((deleter, i) => {
              deleterThreshold = values_default(deleter)[0];
            });
            if (deleterThreshold && deleterThreshold > properties.usableSpace) {
              properties.warning = true;
            }
          }
          if (hasIn_default(properties, "deleterThreshold")) {
            properties.deleterThresholdProcent = properties.deleterThreshold.map((deleter, i) => {
              return (Math.round(parseInt(values_default(deleter)[0]) * 100 / properties.totalSpace * 100) / 100).toFixed(2);
            });
            properties.deleterThreshold = properties.deleterThreshold.map((deleter, i) => {
              if (keys_default(deleter)[0] != "") {
                return keys_default(deleter)[0] + ":" + $this.convertBtoGBorMB(values_default(deleter)[0]);
              } else {
                return $this.convertBtoGBorMB(values_default(deleter)[0]);
              }
            });
          }
          if (hasIn_default(properties, "usableSpace") && hasIn_default(properties, "totalSpace")) {
            properties.usedSpace = (Math.round((properties.totalSpace - properties.usableSpace) * 100 / properties.totalSpace * 100) / 100).toFixed(2);
          }
          if (hasIn_default(properties, "usableSpace")) {
            properties.usableSpace = $this.convertBtoGBorMB(properties.usableSpace);
          }
          if (hasIn_default(properties, "totalSpace")) {
            properties.totalSpace = $this.convertBtoGBorMB(properties.totalSpace);
          }
          if (hasIn_default(properties, "storageThreshold")) {
            properties.storageThreshold = $this.convertBtoGBorMB(properties.storageThreshold);
          }
          forEach_default(properties, (l, k) => {
            https: if (isArray_default(l)) {
              properties[k] = l.join(" | ");
            }
          });
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
        this.mainservice.showMsg("No storages found!");
      }
    }, err => {
      $this.cfpLoadingBar.complete();
      $this.matches = [];
      $this.httpErrorHandler.handleError(err);
    });
  }
  convertBtoGBorMB(value) {
    return j4care.convertBtoHumanReadable(value);
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
        format: "yy-mm-dd"
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
        if (parameters.result.date === void 0) {
          $this.mainservice.showError("\"Updated before\"-date was not set");
        } else {
          this.service.flush(parameters.result.select, parameters.result.date).subscribe(res => {
            console.log("resflush", res);
            $this.mainservice.showMsg("" + res.deleted + " queues deleted successfully!");
            $this.search(0);
            $this.cfpLoadingBar.complete();
          }, err => {
            $this.httpErrorHandler.handleError(err);
          });
        }
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
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  getAets() {
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}aets`).subscribe(response => {
      this.aets = j4care.extendAetObjectWithAlias(response);
      this.filterSchema = this.service.getFiltersSchema(this.aets);
    }, err => {
      console.log("error getting aets", err);
    });
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: StorageSystemsService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: HttpErrorHandler
}], _a);
StorageSystemsComponent = __decorate([Component({
  selector: "app-storage-systems",
  template: storage_systems_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, NgStyle, CommonModule],
  standalone: true,
  styles: [storage_systems_component_default2]
})], StorageSystemsComponent);
export { StorageSystemsComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/