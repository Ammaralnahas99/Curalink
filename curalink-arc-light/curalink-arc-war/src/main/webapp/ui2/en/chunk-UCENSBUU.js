import { AppComponent, RetrieveMonitoringService } from "./chunk-6Y4BVX4A.js";
import { CsvUploadComponent } from "./chunk-IN4Z3BRU.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-A3KYGHL3.js";
import "./chunk-CJ4Z3CIK.js";
import { AeListService, ConfirmComponent, DevicesService, FilterGeneratorComponent, MatOption, MatSelect } from "./chunk-DJWZKPOC.js";
import "./chunk-PGYA2BHH.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, PermissionService, Validators, environment } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, CommonModule, Component, DatePipe, Globalvar, HttpErrorHandler, KeycloakService, MatDialog, NgClass, SelectDropdown, ViewContainerRef, __decorate, assignIn_default, cloneDeep_default, forkJoin, hasIn_default, j4care, lodash_exports, map } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\external-retrieve\retrieve-monitoring.component.html
var retrieve_monitoring_component_default = `<div class="main_content retrieve monitoring white_design">\r
  <monitoring-tabs></monitoring-tabs>\r
  <div class="tab-content">\r
    <h2 i18n="@@retrieve">Retrieve</h2>\r
    <div class="filter_line">\r
      <div class="filter_block">\r
        <filter-generator [schema]="filterSchema" [model]="filterObject" (submit)="onSubmit($event)" (onChange)="onFormChange($event)" (onFilterLoadFinish)="filterLoadFinished = true"></filter-generator>\r
        <div class="filter"  *ngIf="filterLoadFinished">\r
          <div class="filter_block auto_reloader">\r
            <table>\r
              <tr *ngFor="let status of Object.keys(statusValues)" [ngClass]="{'gray':statusValues[status]?.count == '0','red':statusValues[status]?.count=='!'}">\r
                <td>{{statusValues[status].text}}:</td>\r
                <td *ngIf="!statusValues[status]?.loader">{{statusValues[status]?.count}}</td>\r
                <td *ngIf="statusValues[status]?.loader"><i class="fa fa-circle-o-notch fa-spin dashboard_loader"></i></td>\r
              </tr>\r
            </table>\r
\r
            <div class="option_block">\r
              <div class="interval_block">\r
                <label i18n="@@interval">Interval:</label>\r
                <input type="text" i18n-placeholder="@@placeholder.interval" placeholder="Interval" [(ngModel)]="interval">\r
                <span>s</span>\r
              </div>\r
              <button class="btn-default submit" (click)="toggleAutoRefresh()">\r
                <div class="spinnter_container">\r
                  <span *ngIf="!timer.started" class="glyphicon glyphicon-refresh"></span>\r
                  <mat-progress-spinner *ngIf="timer.started" mode="indeterminate" [diameter]="20" ></mat-progress-spinner>\r
                </div>\r
                <span *ngIf="!timer.started">{{timer.startText}}</span>\r
                <span *ngIf="timer.started">{{timer.stopText}}</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="filter_line">\r
      <div class="filter single_block" [permission]="{id:'action-monitoring->external_retrieve-all_action',param:'visible'}">\r
          <div class="filter_block">\r
              <div class="line">\r
                <div (click)="downloadCsv()" class="w45percent csv_button"><span class="custom_icon csv_icon"></span><span class="text" i18n="@@download_csv">Download CSV</span></div>\r
                <div (click)="uploadCsv()" class="w45percent csv_button"><span class="material-icons">file_upload</span><span class="text" i18n="@@upload_csv">Upload CSV</span></div>\r
              </div>\r
          </div>\r
          <div class="filter_block">\r
            <div class="line">\r
              <mat-select class="pull-left" [(ngModel)]="allAction" i18n-placeholder="@@placeholder.all_actions" placeholder="All actions" (selectionChange)="allActionChanged($event)" floatPlaceholder="never">\r
                <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsOptions">{{actions.label}}</mat-option>\r
              </mat-select>\r
            <!--  <div class="checkbox_button" [ngClass]="{'active':batchGrouped}"><mat-checkbox [(ngModel)]="batchGrouped" (ngModelChange)="externalRetrieveEntries = []" i18n="@@batch_id_grouped">Batch ID grouped</mat-checkbox></div>  -->\r
              <label for="checkbox" class="checkbox_button pull-right"   [ngClass]="{'active':batchGrouped}">\r
                <input id="checkbox" [(ngModel)]="batchGrouped" (ngModelChange)="externalRetrieveEntries = []" type="checkbox">\r
                <span i18n="@@batch_id_grouped">Batch ID grouped</span>\r
              </label>\r
            </div>\r
          </div>\r
      </div>\r
    </div>\r
<!--    <ng-container *ngIf="_.size(externalRetrieveEntries) > 0">\r
      <button class="left_arrow arrow no_style"  i18n-title="@@title.preview_page" title="Preview page" [disabled]="!hasNewer(externalRetrieveEntries)" [ngClass]="{'active':hasNewer(externalRetrieveEntries)}" (click)="getTasks(newerOffset(externalRetrieveEntries))">\r
        <span class="glyphicon glyphicon glyphicon-chevron-left"></span>\r
      </button>\r
      <button class="right_arrow arrow no_style" i18n-title="@@title.next_page" title="Next page" [disabled]="!hasOlder(externalRetrieveEntries)" [ngClass]="{'active':hasOlder(externalRetrieveEntries)}" (click)="getTasks(olderOffset(externalRetrieveEntries))">\r
        <span class="glyphicon glyphicon glyphicon-chevron-right"></span>\r
      </button>\r
    </ng-container>-->\r
\r
    <div class="left_arrow arrow"  *ngIf="externalRetrieveEntries && externalRetrieveEntries.length && externalRetrieveEntries.length > 0" [ngClass]="{'active':filterObject.offset > 0}" (click)="prev()"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
    <div class="right_arrow arrow" *ngIf="externalRetrieveEntries && externalRetrieveEntries.length && externalRetrieveEntries.length > 0" [ngClass]="{'active':moreTasks}" (click)="next()"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
    <table-generator *ngIf="!batchGrouped && tableConfigNormal && externalRetrieveEntries && externalRetrieveEntries.length && externalRetrieveEntries.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigNormal" [models]="externalRetrieveEntries"></table-generator>\r
    <table-generator *ngIf="batchGrouped && tableConfigGrouped && externalRetrieveEntries && externalRetrieveEntries.length && externalRetrieveEntries.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigGrouped" [models]="externalRetrieveEntries"></table-generator>\r
\r
    <!--    <table class="table table-bordered table-condensed" *ngIf="_.size(externalRetrieveEntries) > 0">\r
          <thead>\r
          <tr *ngIf="batchGrouped">\r
            <th>\r
            </th>\r
            <th width="3%"></th>\r
            <th i18n="@@batch_id">Batch ID</th>\r
            <th i18n="@@queue_name">Queue Name</th>\r
            <th class="hideOn1200px" i18n="@@remote_aet">Remote AET</th>\r
            <th class="hideOn1100px" i18n="@@destination_aet">Destination AET</th>\r
            <th class="hideOn1100px" i18n="@@scheduled_time_range">Scheduled Time Range</th>\r
            <th class="hideOn1100px" i18n="@@processing_start_time_range">Processing Start Time Range</th>\r
            <th class="hideOn1100px" i18n="@@processing_end_time_range">Processing End Time Range</th>\r
            <th class="hideOn1100px" i18n="@@tasks">Tasks</th>\r
          </tr>\r
          <tr *ngIf="!batchGrouped">\r
            <th>\r
            </th>\r
              <th  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
              <div class="action_block">\r
                <div class="table-small-button shadow">\r
                  <input type="checkbox" (change)="checkAll($event)">\r
                </div>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" class="text-white" (click)="$event.preventDefault();executeAll('cancel')" href="" i18n-title="@@title.cancel_selected" title="Cancel selected">\r
                  <span class="glyphicon glyphicon-ban-circle"></span>\r
                </a>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" class="text-white" (click)="$event.preventDefault();executeAll('reschedule')" href="" i18n-title="@@title.reschedule_selected" title="Reschedule selected">\r
                  <span class="glyphicon glyphicon-repeat"></span>\r
                </a>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" class="text-white" (click)="$event.preventDefault();executeAll('delete')" href="" i18n-title="@@title.delete_selected" title="Delete selected">\r
                  <span class="glyphicon glyphicon-remove-circle"></span>\r
                </a>\r
              </div>\r
            </th>\r
            <th>Status</th>\r
            <th i18n="@@queue_name">Queue Name</th>\r
            <th class="hideOn1000px" i18n="@@study_instance_uid">Study Instance UID</th>\r
            <th class="hideOn1200px" i18n="@@remote_aet">Remote AET</th>\r
            <th class="hideOn1100px" i18n="@@destination_aet">Destination AET</th>\r
            <th class="hideMobile hideOn800px" i18n="@@scheduled">Scheduled</th>\r
            <th class="hideMobile hideOn1400px" i18n="@@started">Started</th>\r
            <th class="hideMobile" i18n="@@finished_approx">Finished / Approx.</th>\r
            <th class="hideMobile hideOn1200px" i18n-title="@@title.completed_remaining_failed" title="Completed / Remaining / Failed" i18n="@@comp_rem_failed">Comp. / Rem. / Failed</th>\r
            <th class="hideMobile hideOn1200px" i18n="@@inst_sec">Inst. / sec</th>\r
          </tr>\r
          </thead>\r
          <tbody>\r
          <ng-container *ngFor="let match of externalRetrieveEntries">\r
            <tr *ngIf="batchGrouped">\r
              <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
              <td  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                <a (click)="$event.preventDefault();match.showProperties = !match.showProperties" href="" i18n-title="@@show_properties" title="Show Properties">\r
                  <span class="glyphicon glyphicon-list"></span>\r
                </a>\r
                  <a class="text-white" (click)="$event.preventDefault();showTaskDetail(match)" href="" i18n-title="@@title.retrieve-monitoring.show_tasks_detail" title="Show tasks detail">\r
                      <span class="glyphicon glyphicon-list-alt"></span>\r
                  </a>\r
                <a [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" (click)="$event.preventDefault();deleteBatchedTask(match)" href="" i18n-title="@@title.delete_task_with_this_batchid" title="Delete Task with this BatchID">\r
                  <span class="glyphicon glyphicon-remove-circle"></span>\r
                </a>\r
              </td>\r
              <td [innerHtml]="match.properties.batchID" title="{{match.properties.batchID}}"></td>\r
              <td [innerHtml]="match.properties.dcmQueueName" title="{{match.properties.dcmQueueName}}"></td>\r
              <td [innerHtml]="match.properties.RemoteAET" class="hideOn1200px"></td>\r
              <td [innerHtml]="match.properties.DestinationAET" class="hideOn1100px"></td>\r
              <td [innerHtml]="match.properties.scheduledTimeRange" class="hideOn1100px"></td>\r
              <td [innerHtml]="match.properties.processingStartTimeRange" class="hideOn1100px"></td>\r
              <td [innerHtml]="match.properties.processingEndTimeRange" class="hideOn1100px"></td>\r
              <td class="hideOn1100px no-padding" width="30%"><stacked-progress [model]="match.properties.tasks"></stacked-progress></td>\r
            </tr>\r
            <tr *ngIf="!batchGrouped">\r
              <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
              <td  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                <div class="table-small-button shadow">\r
                  <input type="checkbox" [(ngModel)]="match.checked">\r
                </div>\r
                <a class="table-small-button shadow" (click)="$event.preventDefault();match.showProperties = !match.showProperties" href="" i18n-title="@@show_properties" title="Show Properties">\r
                  <span class="glyphicon glyphicon-list"></span>\r
                </a>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" *ngIf="((match.properties.status && match.properties.status === 'SCHEDULED') || (match.properties.status && match.properties.status === 'IN PROCESS'))" (click)="$event.preventDefault();cancel(match)" href="" i18n-title="@@title.cancel" title="Cancel">\r
                  <span class="glyphicon glyphicon-ban-circle"></span>\r
                </a>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}"  (click)="$event.preventDefault();reschedule(match)" href="" i18n-title="@@title.reschedule" title="Reschedule">\r
                  <span class="glyphicon glyphicon-repeat"></span>\r
                </a>\r
                <a class="table-small-button shadow" [permission]="{id:'action-monitoring->external_retrieve-single_action',param:'visible'}" (click)="$event.preventDefault();delete(match)" href="" i18n-title="@@title.delete" title="Delete">\r
                  <span class="glyphicon glyphicon-remove-circle"></span>\r
                </a>\r
              </td>\r
              <td [innerHtml]="match.properties.status" title="{{match.properties.outcomeMessage}}"></td>\r
              <td [innerHtml]="match.properties.queue" title="{{match.properties.queue}}"></td>\r
              <td [innerHtml]="match.properties.StudyInstanceUID" class="hideOn1000px"></td>\r
              <td [innerHtml]="match.properties.RemoteAET" class="hideOn1200px"></td>\r
              <td [innerHtml]="match.properties.DestinationAET" class="hideOn1100px"></td>\r
              <td class="hideMobile hideOn800px" [innerHtml]="match.properties.scheduledTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
              <td class="hideMobile hideOn1400px" [innerHtml]="match.properties.processingStartTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
              <td class="text-right hideMobile" *ngIf="match.properties.processingEndTime" [innerHtml]="match.properties.processingEndTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
              <td class="text-right hideMobile" *ngIf="!match.properties.processingEndTime" [innerHtml]="match.properties.approximatelyEndTime"></td>\r
              <td [innerHtml]="match.properties.taskState" class="text-right hideOn1200px" [ngClass]="{'failed':match.properties.failed > 0}"></td>\r
              <td [innerHtml]="match.properties.InstancePerSec" class="text-right hideOn1200px"></td>\r
            </tr>\r
            <tr *ngIf="match.showProperties">\r
              <td colspan="10">\r
                <table class="table table-bordered table-condensed attribute_list">\r
                  <tr *ngFor="let key of match.propertiesAttr | getKey">\r
                    <th [innerHtml]="key._KEY"></th>\r
                    <td *ngIf="key._KEY === 'createdTime' || key._KEY === 'updatedTime' || key._KEY === 'scheduledTime' || key._KEY === 'processingStartTime' || key._KEY === 'processingEndTime';else nodate_content" [innerHtml]="key._VALUE | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <ng-template #nodate_content>\r
                      <td [innerHtml]="key._VALUE"></td>\r
                    </ng-template>\r
                  </tr>\r
                </table>\r
              </td>\r
            </tr>\r
            <tr [hidden]="true"></tr>\r
          </ng-container>\r
          </tbody>\r
        </table>-->\r
  </div>\r
</div>`;

// src/app/monitoring/external-retrieve/retrieve-monitoring.component.ts
var _a;
var RetrieveMonitoringComponent = (_a = class {
  constructor(cfpLoadingBar, mainservice, appComponent, route, aeListService, service, httpErrorHandler, dialog, viewContainerRef, permissionService, deviceService, _keycloakService) {
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.appComponent = appComponent;
    this.route = route;
    this.aeListService = aeListService;
    this.service = service;
    this.httpErrorHandler = httpErrorHandler;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.permissionService = permissionService;
    this.deviceService = deviceService;
    this._keycloakService = _keycloakService;
    this.isRole = user => {
      return false;
    };
    this._ = lodash_exports;
    this.datePipe = new DatePipe("us-US");
    this.timer = {
      started: false,
      startText: "Start Auto Refresh",
      stopText: "Stop Auto Refresh"
    };
    this.allActionsActive = [];
    this.allActionsOptions = [{
      value: "cancel",
      label: "Cancel all matching tasks"
    }, {
      value: "reschedule",
      label: "Reschedule all matching tasks"
    }, {
      value: "delete",
      label: "Delete all matching tasks"
    }];
    this.statusValues = {};
    this.interval = 10;
    this.tableHovered = false;
    this.Object = Object;
    this.batchGrouped = false;
    this.tableConfigNormal = {
      search: ""
    };
    this.tableConfigGrouped = {
      search: ""
    };
    this.moreTasks = false;
    this.filterLoadFinished = false;
  }
  ngOnInit() {
    this.initCheck(10);
  }
  initCheck(retries) {
    let $this = this;
    if (KeycloakService.keycloakAuth && KeycloakService.keycloakAuth.authenticated || hasIn_default(this.mainservice, "global.notSecure") && this.mainservice.global.notSecure) {
      this.route.queryParams.subscribe(params => {
        console.log("params", params);
        this.urlParam = Object.assign({}, params);
        this.init();
      });
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
    this.getQueueNames();
    this.appComponent.setServerTime();
    this.service.statusValues().forEach(val => {
      this.statusValues[val.value] = {
        count: 0,
        loader: false,
        text: val.text
      };
    });
    this.filterObject = {
      limit: 20,
      offset: 0
    };
    forkJoin(this.aeListService.getAes().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "external"))), this.aeListService.getAets().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "internal"))), this.service.getDevices()).subscribe(response => {
      this.remoteAET = this.destinationAET = j4care.extendAetObjectWithAlias(response[0]).map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      });
      this.localAET = j4care.extendAetObjectWithAlias(response[1]).map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      });
      this.devices = response[2].filter(dev => dev.hasArcDevExt).map(device => {
        return {
          value: device.dicomDeviceName,
          text: device.dicomDeviceName
        };
      });
      this.initSchema();
    });
    this.initExporters(2);
    this.onFormChange(this.filterObject);
  }
  toggleAutoRefresh() {
    this.timer.started = !this.timer.started;
    if (this.timer.started) {
      this.getCounts();
      this.refreshInterval = setInterval(() => {
        this.getCounts();
      }, this.interval * 1e3);
    } else clearInterval(this.refreshInterval);
  }
  tableMousEnter() {
    this.tableHovered = true;
  }
  tableMousLeave() {
    this.tableHovered = false;
  }
  getCounts() {
    let filters = Object.assign({}, this.filterObject);
    if (!this.tableHovered) this.getTasks(0);
    Object.keys(this.statusValues).forEach(status => {
      filters.status = status;
      this.statusValues[status].loader = true;
      this.service.getCount(filters).subscribe(count => {
        this.statusValues[status].loader = false;
        try {
          this.statusValues[status].count = count.count;
        } catch (e) {
          this.statusValues[status].count = "";
        }
      }, err => {
        this.statusValues[status].loader = false;
        this.statusValues[status].count = "!";
      });
    });
  }
  hasOlder(objs) {
    return objs && objs.length == this.filterObject.limit;
  }
  hasNewer(objs) {
    return objs && objs.length && objs[0].offset;
  }
  newerOffset(objs) {
    return Math.max(0, objs[0].offset - this.filterObject.limit * 1);
  }
  olderOffset(objs) {
    return objs[0].offset + this.filterObject.limit * 1;
  }
  initSchema() {
    this.filterSchema = this.service.getFilterSchema(this.localAET, this.destinationAET, this.remoteAET, this.devices, "COUNT " + (this.count || this.count == 0 ? this.count : "") + "", this.queueNames);
    if (this.urlParam) {
      assignIn_default(this.filterObject, this.urlParam);
      this.filterObject["limit"] = 20;
      this.filterObject["orderby"] = "-updatedTime";
    }
    this.setTableSchemas();
  }
  setTableSchemas() {
    this.tableConfigNormal = {
      table: j4care.calculateWidthOfTable(this.service.getTableSchema(this, this.action, {
        grouped: false,
        filterObject: this.filterObject
      })),
      filter: this.filterObject,
      search: "",
      showAttributes: false,
      calculate: false
    };
    this.tableConfigGrouped = {
      table: j4care.calculateWidthOfTable(this.service.getTableSchema(this, this.action, {
        grouped: true,
        filterObject: this.filterObject
      })),
      filter: this.filterObject,
      search: "",
      showAttributes: false,
      calculate: false
    };
  }
  action(mode, match) {
    switch (mode) {
      case "cancel-selected":
        this.executeAll("cancel");
        break;
      case "reschedule-selected":
        this.executeAll("reschedule");
        break;
      case "delete-selected":
        this.executeAll("delete");
        break;
      case "delete":
        this.delete(match);
        break;
      case "cancel":
        this.cancel(match);
        break;
      case "reschedule":
        this.reschedule(match);
        break;
      case "task-detail":
        this.showTaskDetail(match);
        break;
      case "delete-batched":
        this.deleteBatchedTask(match);
        break;
    }
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "510px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  downloadCsv() {
    this.confirm({
      content: "Do you want to use semicolon as delimiter?",
      cancelButton: "No",
      saveButton: "Yes",
      result: "yes"
    }).subscribe(ok => {
      let semicolon = false;
      if (ok) semicolon = true;
      let token;
      this._keycloakService.getToken().subscribe(response => {
        if (!this.mainservice.global.notSecure) {
          token = response.token;
        }
        let filterClone = cloneDeep_default(this.filterObject);
        delete filterClone.offset;
        delete filterClone.limit;
        if (!this.mainservice.global.notSecure) j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&access_token=${token}&${this.mainservice.param(filterClone)}`, "retrieve.csv");else j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&${this.mainservice.param(filterClone)}`, "retrieve.csv");
      });
    });
  }
  uploadCsv() {
    this.dialogRef = this.dialog.open(CsvUploadComponent, {
      height: "auto",
      width: "510px"
    });
    this.dialogRef.componentInstance.aes = this.remoteAET;
    this.dialogRef.componentInstance.params = {
      LocalAET: this.filterObject["LocalAET"] || "",
      RemoteAET: this.filterObject["RemoteAET"] || "",
      DestinationAET: this.filterObject["DestinationAET"] || "",
      batchID: this.filterObject["batchID"] || "",
      formSchema: [{
        tag: "range-picker-time",
        type: "text",
        filterKey: "scheduledTime",
        description: "Schedule at (if not set, schedule immediately)"
      }, {
        tag: "input",
        type: "checkbox",
        filterKey: "semicolon",
        description: "Use semicolon as delimiter"
      }, {
        tag: "select",
        options: this.remoteAET,
        showStar: true,
        filterKey: "LocalAET",
        description: "Local AET",
        placeholder: "Local AET",
        validation: Validators.required
      }, {
        tag: "select",
        options: this.remoteAET,
        showStar: true,
        filterKey: "RemoteAET",
        description: "Remote AET",
        placeholder: "Remote AET",
        validation: Validators.required
      }, {
        tag: "input",
        type: "number",
        filterKey: "field",
        description: "Field",
        placeholder: "Field",
        validation: [Validators.minLength(1), Validators.min(1)],
        defaultValue: 1
      }, {
        tag: "select",
        options: this.remoteAET,
        showStar: true,
        filterKey: "DestinationAET",
        description: "Destination AET",
        placeholder: "Destination AET",
        validation: Validators.required
      }, {
        tag: "select",
        options: this.queueNames,
        showStar: true,
        filterKey: "dcmQueueName",
        placeholder: "Queue Name",
        description: "Queue Name"
      }, {
        tag: "input",
        type: "text",
        filterKey: "batchID",
        description: "Batch ID",
        placeholder: "Batch ID"
      }],
      prepareUrl: filter => {
        let clonedFilters = {};
        if (filter["priority"]) clonedFilters["priority"] = filter["priority"];
        if (filter["batchID"]) clonedFilters["batchID"] = filter["batchID"];
        if (filter["dcmQueueName"]) clonedFilters["dcmQueueName"] = filter["dcmQueueName"];
        if (filter["scheduledTime"]) clonedFilters["scheduledTime"] = filter["scheduledTime"];
        return `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${filter.LocalAET}/dimse/${filter.RemoteAET}/studies/csv:${filter.field}/export/dicom:${filter.DestinationAET}${j4care.getUrlParams(clonedFilters)}`;
      }
    };
    this.dialogRef.afterClosed().subscribe(ok => {
      if (ok) {
        console.log("ok", ok);
      }
    });
  }
  allActionChanged(e) {
    let text = "Are you sure, you want to " + Globalvar.getActionText(this.allAction) + " all matching tasks?";
    let filter = Object.assign({}, this.filterObject);
    delete filter.limit;
    delete filter.offset;
    this.cfpLoadingBar.start();
    switch (this.allAction) {
      case "cancel":
        this.confirm({
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.service.cancelAll(this.filterObject).subscribe(res => {
              this.mainservice.showMsg("" + res.count + " tasks canceled successfully!");
              this.cfpLoadingBar.complete();
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
        });
        break;
      case "reschedule":
        this.deviceService.selectParametersForMatching(res => {
          if (res) {
            let filter2 = Object.assign({}, this.filterObject);
            if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
              filter2["newDeviceName"] = res.schema_model.newDeviceName;
            }
            if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
              filter2["scheduledTime"] = res.schema_model.scheduledTime;
            }
            if (hasIn_default(res, "schema_model.newQueueName") && res.schema_model.newQueueName != "") {
              filter2["newQueueName"] = res.schema_model.newQueueName;
            }
            this.service.rescheduleAll(filter2).subscribe(res2 => {
              this.cfpLoadingBar.complete();
              if (hasIn_default(res2, "count")) {
                this.mainservice.showMsg("" + res2.count + " tasks rescheduled successfully!");
              } else {
                this.mainservice.showMsg("Task rescheduled successfully!");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
        }, this.devices, true, this.queueNames);
        break;
      case "delete":
        this.confirm({
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.service.deleteAll(this.filterObject).subscribe(res => {
              this.mainservice.showMsgDeleteTasks(res);
              this.cfpLoadingBar.complete();
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
        });
        break;
    }
    this.cfpLoadingBar.complete();
    this.allAction = "";
    this.allAction = void 0;
  }
  deleteBatchedTask(batchedTask) {
    this.confirm({
      content: "Are you sure you want to delete all tasks of this batch?"
    }).subscribe(ok => {
      if (ok) {
        if (batchedTask.batchID) {
          let filter = Object.assign({}, this.filterObject);
          filter["batchID"] = batchedTask.batchID;
          delete filter["limit"];
          delete filter["offset"];
          this.service.deleteAll(filter).subscribe(res => {
            this.cfpLoadingBar.complete();
            if (hasIn_default(res, "count")) {
              this.mainservice.showMsg("" + res.count + " tasks deleted successfully!");
            } else {
              this.mainservice.showMsg("Task deleted successfully!");
            }
            this.getTasks(0);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        } else {
          this.mainservice.showError("Batch ID not found!");
        }
      }
    });
  }
  delete(match) {
    let $this = this;
    let parameters = {
      content: "Are you sure you want to delete this task?"
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.delete(match.taskID).subscribe(res => {
          $this.cfpLoadingBar.complete();
          $this.getTasks(match.offset || 0);
          this.mainservice.showMsg("Task deleted successfully!");
        }, err => {
          $this.cfpLoadingBar.complete();
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  cancel(match) {
    let $this = this;
    let parameters = {
      content: "Are you sure you want to cancel this task?"
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.cancel(match.taskID).subscribe(res => {
          match.status = "CANCELED";
          $this.cfpLoadingBar.complete();
          this.mainservice.showMsg("Task canceled successfully!");
        }, err => {
          $this.cfpLoadingBar.complete();
          console.log("cancleerr", err);
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  onFormChange(filters) {
    this.setTableSchemas();
  }
  reschedule(match) {
    let $this = this;
    this.deviceService.selectParameters(res => {
      if (res) {
        let filter = {};
        if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
          filter["newDeviceName"] = res.schema_model.newDeviceName;
        }
        if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
          filter["scheduledTime"] = res.schema_model.scheduledTime;
        }
        if (hasIn_default(res, "schema_model.newQueueName") && res.schema_model.newQueueName != "") {
          filter["newQueueName"] = res.schema_model.newQueueName;
        }
        $this.cfpLoadingBar.start();
        this.service.reschedule(match.taskID, filter).subscribe(res2 => {
          $this.getTasks(match.offset || 0);
          $this.cfpLoadingBar.complete();
          this.mainservice.showMsg("Task rescheduled successfully!");
        }, err => {
          $this.cfpLoadingBar.complete();
          $this.httpErrorHandler.handleError(err);
        });
      }
    }, this.devices, true, true, this.queueNames);
  }
  checkAll(event) {
    this.externalRetrieveEntries.forEach(match => {
      match.checked = event.target.checked;
    });
  }
  executeAll(mode) {
    this.confirm({
      content: "Are you sure you want to " + Globalvar.getActionText(mode) + " selected entries?"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        this.externalRetrieveEntries.forEach(match => {
          if (match.selected) {
            this.service[mode](match.taskID).subscribe(res => {
              console.log("execute result=", res);
            }, err => {
              this.httpErrorHandler.handleError(err);
            });
          }
        });
        setTimeout(() => {
          this.getTasks(this.externalRetrieveEntries[0].offset || 0);
          this.cfpLoadingBar.complete();
        }, 300);
      }
    });
  }
  onSubmit(object) {
    if (hasIn_default(object, "id") && hasIn_default(object, "model")) {
      this.filterObject = object.model;
      if (object.id === "count") {
        this.getCount();
      } else {
        this.getCounts();
      }
    }
  }
  showTaskDetail(task) {
    this.filterObject.batchID = task.batchID;
    this.batchGrouped = false;
    this.getTasks(0);
  }
  getTasks(offset) {
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.getExternalRetrieveEntries(this.filterObject, offset, this.batchGrouped).subscribe(res => {
      $this.cfpLoadingBar.complete();
      if (!environment.production) {
        if (this.batchGrouped) {
          res = [{
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "tasks": {
              "failed": "32"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - QIDO Study Instances", "ATS Prefetch NG - QIDO Study Series", "ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-03-15T01:20:51.548+0100", "2022-03-15T01:20:51.929+0100"],
            "updatedTimeRange": ["2022-03-15T19:39:00.706+0100", "2022-03-15T19:41:30.097+0100"],
            "scheduledTimeRange": ["2022-03-15T19:38:00.692+0100", "2022-03-15T19:41:00.721+0100"],
            "processingStartTimeRange": ["2022-03-15T19:39:00.584+0100", "2022-03-15T19:41:05.308+0100"],
            "processingEndTimeRange": ["2022-03-15T19:39:00.703+0100", "2022-03-15T19:41:29.900+0100"]
          }, {
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "tasks": {
              "warning": "2"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["ATS Prefetch NG - Series Thumbnails", "ATS Prefetch NG - Series WADO Metadata"],
            "createdTimeRange": ["2022-02-08T18:45:29.656+0100", "2022-02-08T18:45:29.664+0100"],
            "updatedTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.111+0100"],
            "scheduledTimeRange": ["2022-02-08T18:45:29.489+0100", "2022-02-08T18:45:29.489+0100"],
            "processingStartTimeRange": ["2022-02-08T18:45:48.149+0100", "2022-02-08T18:45:48.585+0100"],
            "processingEndTimeRange": ["2022-02-08T18:45:49.821+0100", "2022-02-08T18:45:50.110+0100"]
          }, {
            "batchID": "recreate-tasks-5.24.iuids",
            "tasks": {
              "warning": "9"
            },
            "dicomDeviceName": ["demoj4c"],
            "ExporterID": ["Export Objects to STORESCP"],
            "createdTimeRange": ["2021-09-24T16:17:16.929+0200", "2021-09-24T16:17:17.092+0200"],
            "updatedTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"],
            "scheduledTimeRange": ["2021-09-24T16:27:46.633+0200", "2021-09-24T16:27:46.633+0200"],
            "processingStartTimeRange": ["2021-09-24T16:27:46.765+0200", "2021-09-24T16:27:46.864+0200"],
            "processingEndTimeRange": ["2021-09-24T16:27:46.787+0200", "2021-09-24T16:27:46.884+0200"]
          }];
        } else {
          res = [{
            "taskID": "62",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.690-0600",
            "updatedTime": "2022-03-17T11:52:14.100-0600",
            "scheduledTime": "2022-03-17T11:52:05.689-0600",
            "processingStartTime": "2022-03-17T11:52:14.019-0600",
            "processingEndTime": "2022-03-17T11:52:14.100-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5732.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5732.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "61",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.683-0600",
            "updatedTime": "2022-03-17T11:52:14.013-0600",
            "scheduledTime": "2022-03-17T11:52:05.681-0600",
            "processingStartTime": "2022-03-17T11:52:13.869-0600",
            "processingEndTime": "2022-03-17T11:52:14.013-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775771.5705.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775771.5705.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "60",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.676-0600",
            "updatedTime": "2022-03-17T11:52:13.859-0600",
            "scheduledTime": "2022-03-17T11:52:05.675-0600",
            "processingStartTime": "2022-03-17T11:52:13.778-0600",
            "processingEndTime": "2022-03-17T11:52:13.859-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775771.5711.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775771.5711.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "59",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.670-0600",
            "updatedTime": "2022-03-17T11:52:13.770-0600",
            "scheduledTime": "2022-03-17T11:52:05.669-0600",
            "processingStartTime": "2022-03-17T11:52:13.692-0600",
            "processingEndTime": "2022-03-17T11:52:13.769-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775771.5714.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775771.5714.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "58",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.661-0600",
            "updatedTime": "2022-03-17T11:52:13.684-0600",
            "scheduledTime": "2022-03-17T11:52:05.660-0600",
            "processingStartTime": "2022-03-17T11:52:13.622-0600",
            "processingEndTime": "2022-03-17T11:52:13.683-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775771.5708.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775771.5708.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "57",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.653-0600",
            "updatedTime": "2022-03-17T11:52:13.614-0600",
            "scheduledTime": "2022-03-17T11:52:05.651-0600",
            "processingStartTime": "2022-03-17T11:52:13.549-0600",
            "processingEndTime": "2022-03-17T11:52:13.614-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5729.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5729.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "56",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.639-0600",
            "updatedTime": "2022-03-17T11:52:13.541-0600",
            "scheduledTime": "2022-03-17T11:52:05.638-0600",
            "processingStartTime": "2022-03-17T11:52:13.471-0600",
            "processingEndTime": "2022-03-17T11:52:13.540-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5717.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5717.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "55",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.631-0600",
            "updatedTime": "2022-03-17T11:52:13.463-0600",
            "scheduledTime": "2022-03-17T11:52:05.629-0600",
            "processingStartTime": "2022-03-17T11:52:13.384-0600",
            "processingEndTime": "2022-03-17T11:52:13.463-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5720.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5720.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "54",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.621-0600",
            "updatedTime": "2022-03-17T11:52:13.374-0600",
            "scheduledTime": "2022-03-17T11:52:05.620-0600",
            "processingStartTime": "2022-03-17T11:52:13.291-0600",
            "processingEndTime": "2022-03-17T11:52:13.373-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5726.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5726.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "53",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.614-0600",
            "updatedTime": "2022-03-17T11:52:13.280-0600",
            "scheduledTime": "2022-03-17T11:52:05.612-0600",
            "processingStartTime": "2022-03-17T11:52:13.185-0600",
            "processingEndTime": "2022-03-17T11:52:13.280-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775771.5702.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775771.5702.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "52",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.607-0600",
            "updatedTime": "2022-03-17T11:52:13.176-0600",
            "scheduledTime": "2022-03-17T11:52:05.606-0600",
            "processingStartTime": "2022-03-17T11:52:13.047-0600",
            "processingEndTime": "2022-03-17T11:52:13.176-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.6.1.4.1.5962.1.2.0.1175775772.5723.0] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.6.1.4.1.5962.1.2.0.1175775772.5723.0",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "51",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.596-0600",
            "updatedTime": "2022-03-17T11:52:13.031-0600",
            "scheduledTime": "2022-03-17T11:52:05.594-0600",
            "processingStartTime": "2022-03-17T11:52:12.770-0600",
            "processingEndTime": "2022-03-17T11:52:13.031-0600",
            "outcomeMessage": "Export STUDY[suid:1.3.12.2.1107.5.8.1.123456789.199507271758050705910] from DCM4CHEE to DCM4CHEE - completed:26",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.3.12.2.1107.5.8.1.123456789.199507271758050705910",
            "completed": "26",
            "statusCode": "0000"
          }, {
            "taskID": "50",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.588-0600",
            "updatedTime": "2022-03-17T11:52:12.764-0600",
            "scheduledTime": "2022-03-17T11:52:05.587-0600",
            "processingStartTime": "2022-03-17T11:52:12.718-0600",
            "processingEndTime": "2022-03-17T11:52:12.764-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.840.113701.4.1.6653.3.264] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.840.113701.4.1.6653.3.264",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "49",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.579-0600",
            "updatedTime": "2022-03-17T11:52:12.713-0600",
            "scheduledTime": "2022-03-17T11:52:05.576-0600",
            "processingStartTime": "2022-03-17T11:52:12.524-0600",
            "processingEndTime": "2022-03-17T11:52:12.712-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.840.113674.514.212.200] from DCM4CHEE to DCM4CHEE - completed:11",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.840.113674.514.212.200",
            "completed": "11",
            "statusCode": "0000"
          }, {
            "taskID": "48",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.567-0600",
            "updatedTime": "2022-03-17T11:52:12.516-0600",
            "scheduledTime": "2022-03-17T11:52:05.566-0600",
            "processingStartTime": "2022-03-17T11:52:11.394-0600",
            "processingEndTime": "2022-03-17T11:52:12.516-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.840.113674.1140.196.200] from DCM4CHEE to DCM4CHEE - completed:94",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.840.113674.1140.196.200",
            "completed": "94",
            "statusCode": "0000"
          }, {
            "taskID": "47",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.553-0600",
            "updatedTime": "2022-03-17T11:52:11.386-0600",
            "scheduledTime": "2022-03-17T11:52:05.549-0600",
            "processingStartTime": "2022-03-17T11:52:11.294-0600",
            "processingEndTime": "2022-03-17T11:52:11.386-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.840.113701.4.1.1.3.3477] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.840.113701.4.1.1.3.3477",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "46",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.542-0600",
            "updatedTime": "2022-03-17T11:52:11.288-0600",
            "scheduledTime": "2022-03-17T11:52:05.541-0600",
            "processingStartTime": "2022-03-17T11:52:11.067-0600",
            "processingEndTime": "2022-03-17T11:52:11.287-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.840.113674.1242.214.200] from DCM4CHEE to DCM4CHEE - completed:16",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.840.113674.1242.214.200",
            "completed": "16",
            "statusCode": "0000"
          }, {
            "taskID": "45",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.529-0600",
            "updatedTime": "2022-03-17T11:52:11.055-0600",
            "scheduledTime": "2022-03-17T11:52:05.527-0600",
            "processingStartTime": "2022-03-17T11:52:10.298-0600",
            "processingEndTime": "2022-03-17T11:52:11.055-0600",
            "outcomeMessage": "Export STUDY[suid:2.16.840.1.113662.4.8796818069641.798806497.93296077602350.10] from DCM4CHEE to DCM4CHEE - completed:42",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "2.16.840.1.113662.4.8796818069641.798806497.93296077602350.10",
            "completed": "42",
            "statusCode": "0000"
          }, {
            "taskID": "44",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "SCHEDULED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.522-0600",
            "updatedTime": "2022-03-17T11:52:10.292-0600",
            "scheduledTime": "2022-03-17T11:52:05.520-0600",
            "processingStartTime": "2022-03-17T11:52:09.775-0600",
            "processingEndTime": "2022-03-17T11:52:10.291-0600",
            "outcomeMessage": "Export STUDY[suid:2.16.840.1.113662.4.8796818069641.798806497.93296077602350.30] from DCM4CHEE to DCM4CHEE - completed:41",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "2.16.840.1.113662.4.8796818069641.798806497.93296077602350.30",
            "completed": "41",
            "statusCode": "0000"
          }, {
            "taskID": "43",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.508-0600",
            "updatedTime": "2022-03-17T11:52:09.768-0600",
            "scheduledTime": "2022-03-17T11:52:05.507-0600",
            "processingStartTime": "2022-03-17T11:52:09.661-0600",
            "processingEndTime": "2022-03-17T11:52:09.767-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.392.200036.9125.0.199212251200.28] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.392.200036.9125.0.199212251200.28",
            "completed": "1",
            "statusCode": "0000"
          }, {
            "taskID": "43",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "Retrieve",
            "type": "RETRIEVE",
            "status": "COMPLETED",
            "batchID": "2221711523",
            "createdTime": "2022-03-17T11:52:05.508-0600",
            "updatedTime": "2022-03-17T11:52:09.768-0600",
            "scheduledTime": "2022-03-17T11:52:05.507-0600",
            "processingStartTime": "2022-03-17T11:52:09.661-0600",
            "processingEndTime": "2022-03-17T11:52:09.767-0600",
            "outcomeMessage": "Export STUDY[suid:1.2.392.200036.9125.0.199212251200.28] from DCM4CHEE to DCM4CHEE - completed:1",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/query:DCM4CHEE/studies/export/dicom:DCM4CHEE",
            "LocalAET": "DCM4CHEE",
            "RemoteAET": "DCM4CHEE",
            "DestinationAET": "DCM4CHEE",
            "FindSCP": "DCM4CHEE",
            "StudyInstanceUID": "1.2.392.200036.9125.0.199212251200.28",
            "completed": "1",
            "statusCode": "0000"
          }];
        }
      }
      if (res && res.length > 0) {
        this.externalRetrieveEntries = res.map((properties, index) => {
          if (this.batchGrouped) {
            let propertiesAttr = Object.assign({}, properties);
            if (hasIn_default(properties, "tasks")) {
              let taskPrepared = [];
              Globalvar.TASK_NAMES.forEach(task => {
                if (properties.tasks[task]) taskPrepared.push({
                  [task]: properties.tasks[task]
                });
              });
              properties.tasks = taskPrepared;
            }
            j4care.stringifyArrayOrObject(properties, ["tasks"]);
            j4care.stringifyArrayOrObject(propertiesAttr, []);
            return properties;
          } else {
            if (hasIn_default(properties, "Modality")) {
              properties.Modality = properties.Modality.join(", ");
            }
            properties.taskState = (properties.completed ? properties.completed * 1 : 0) + " / " + (properties.remaining ? properties.remaining * 1 : 0) + " / " + (properties.warning ? properties.warning * 1 : 0) + " / " + (properties.failed ? properties.failed * 1 : 0);
            let endTime = properties.processingEndTime ? new Date(properties.processingEndTime) : this.mainservice.serverTime;
            try {
              properties.NumberOfInstances = properties.NumberOfInstances || (properties.completed ? properties.completed * 1 : 0) + (properties.remaining ? properties.remaining * 1 : 0) + (properties.failed ? properties.failed * 1 : 0);
              properties.InstancePerSec = Math.round((properties.completed ? properties.completed * 1 : 0) / (endTime.getTime() / 1e3 - new Date(properties.processingStartTime).getTime() / 1e3) * 100) / 100 || "-";
              if (!properties.processingEndTime) properties.approximatelyEndTime = Math.round(properties.remaining / properties.InstancePerSec * 100) / 100 ? `${this.secToMinSecString(properties.remaining / properties.InstancePerSec)}` : "-";
            } catch (e) {
              properties.InstancePerSec = "";
            }
            return properties;
          }
        });
        this.moreTasks = res.length > this.filterObject["limit"];
        if (this.moreTasks) this.externalRetrieveEntries.splice(this.externalRetrieveEntries.length - 1, 1);
        $this.count = void 0;
      } else {
        $this.cfpLoadingBar.complete();
        $this.externalRetrieveEntries = [];
        this.mainservice.showMsg("No tasks found!");
      }
    }, err => {
      $this.externalRetrieveEntries = [];
      $this.cfpLoadingBar.complete();
      $this.httpErrorHandler.handleError(err);
    });
  }
  /*    mscFormat(duration){
          if (duration > 999){
  
              let milliseconds: any = parseInt((((duration % 1000))).toString())
                  , seconds: any = parseInt(((duration / 1000) % 60).toString())
                  , minutes: any = parseInt(((duration / (1000 * 60)) % 60).toString())
                  , hours: any = parseInt(((duration / (1000 * 60 * 60))).toString());
              if (hours === 0){
                  if (minutes === 0){
                      return seconds.toString() + '.' + milliseconds.toString() + ' sec';
                  }else{
                      seconds = (seconds < 10) ? '0' + seconds : seconds;
                      return minutes.toString() + ':' + seconds.toString() + '.' + milliseconds.toString() + ' min';
                  }
              }else{
  
                  hours = (hours < 10) ? '0' + hours : hours;
                  minutes = (minutes < 10) ? '0' + minutes : minutes;
                  seconds = (seconds < 10) ? '0' + seconds : seconds;
  
                  return hours.toString() + ':' + minutes.toString() + ':' + seconds.toString() + '.' + milliseconds.toString() + ' h';
              }
          }else{
              return duration.toString() + ' ms';
      }*/
  next() {
    if (this.moreTasks) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 + this.filterObject["limit"] * 1;
        filter["limit"]++;
      }
      this.getTasks(filter.offset);
    }
  }
  prev() {
    if (this.filterObject["offset"] > 0) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 - this.filterObject["limit"] * 1;
      this.getTasks(filter.offset);
    }
  }
  secToMinSecString(rawSec) {
    let min;
    let sec;
    try {
      if (rawSec > 59) {
        min = parseInt((rawSec / 60).toString());
        sec = Math.round((rawSec / 60 - min) * 60);
        return `${min} min ${sec} s`;
      } else {
        return `${Math.round(rawSec)} s`;
      }
    } catch (e) {
      return "-";
    }
  }
  getCount() {
    this.cfpLoadingBar.start();
    this.service.getCount(this.filterObject).subscribe(count => {
      try {
        this.count = count.count;
      } catch (e) {
        this.count = "";
      }
      this.urlParam = {};
      this.initSchema();
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.initSchema();
      this.httpErrorHandler.handleError(err);
    });
  }
  initExporters(retries) {
    let $this = this;
    this.service.getExporters().subscribe(res => {
      $this.exporters = res;
      if (res && res[0] && res[0].id) {
        $this.exporterID = res[0].id;
      }
    }, res => {
      if (retries) $this.initExporters(retries - 1);
    });
  }
  getQueueNames() {
    this.service.getQueueNames().subscribe(names => {
      this.queueNames = names.filter(name => name.name.toLowerCase().indexOf("retrieve") > -1).sort((a, b) => {
        try {
          return parseInt(a.name.replace(/Retrieve/g, "")) - parseInt(b.name.replace(/Retrieve/g, ""));
        } catch (e) {
          return 1;
        }
      }).map(name => new SelectDropdown(name.name, name.description));
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  ngOnDestroy() {
    if (this.timer.started) {
      this.timer.started = false;
      clearInterval(this.refreshInterval);
    }
  }
}, _a.ctorParameters = () => [{
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: AppComponent
}, {
  type: ActivatedRoute
}, {
  type: AeListService
}, {
  type: RetrieveMonitoringService
}, {
  type: HttpErrorHandler
}, {
  type: MatDialog
}, {
  type: ViewContainerRef
}, {
  type: PermissionService
}, {
  type: DevicesService
}, {
  type: KeycloakService
}], _a);
RetrieveMonitoringComponent = __decorate([Component({
  selector: "retrieve-monitoring",
  template: retrieve_monitoring_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, FormsModule, MatProgressSpinner, PermissionDirective, MatSelect, MatOption, TableGeneratorComponent, CommonModule],
  standalone: true
})], RetrieveMonitoringComponent);
export { RetrieveMonitoringComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/