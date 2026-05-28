import { ExportService } from "./chunk-7G6ZMZ3C.js";
import { CsvUploadComponent } from "./chunk-IN4Z3BRU.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-A3KYGHL3.js";
import "./chunk-CJ4Z3CIK.js";
import { AeListService, ConfirmComponent, FilterGeneratorComponent, MatOption, MatSelect } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, PermissionService, Validators, environment } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, CommonModule, Component, Globalvar, HttpErrorHandler, J4careHttpService, KeycloakService, MatDialog, NgClass, ViewContainerRef, __decorate, cloneDeep_default, hasIn_default, j4care, lodash_exports, map } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\export\export.component.html
var export_component_default = `<div class="main_content monitoring export white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="@@export.export">Export</h2>\r
        <div class="filter_line">\r
        <div class="filter_block">\r
        <filter-generator [schema]="filterSchema" [model]="filterObject" (submit)="onSubmit($event)" (onChange)="onFormChange($event)" (onFilterLoadFinish)="filterLoadFinished = true"></filter-generator>\r
        <div class="filter" *ngIf="filterLoadFinished">\r
            <div class="filter_block auto_reloader">\r
                <table>\r
                    <tr *ngFor="let status of Object.keys(statusValues)" [ngClass]="{'gray':statusValues[status]?.count == '0','red':statusValues[status]?.count=='!'}">\r
                        <td>{{statusValues[status].text}}:</td>\r
                        <td *ngIf="!statusValues[status]?.loader">{{statusValues[status]?.count}}</td>\r
                        <td *ngIf="statusValues[status]?.loader"><i class="fa fa-circle-o-notch fa-spin dashboard_loader"></i></td>\r
                    </tr>\r
                </table>\r
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
        <div class="filter_line" [permission]="{id:'action-monitoring->export-all_action',param:'visible'}">\r
<!--            <div class="morefunctionblock">\r
                <div class="w45percent">\r
                    <mat-select [(ngModel)]="allAction" placeholder="All actions" (selectionChange)="allActionChanged($event)" floatPlaceholder="never">\r
                        <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsActive">{{actions.label}}</mat-option>\r
                    </mat-select>\r
                </div>\r
                <div class="w45percent csv_button"><span class="custom_icon csv_icon"></span>Download CSV</div>\r
            </div>-->\r
            <div class="filter single_block">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <div (click)="downloadCsv()" class="w45percent csv_button"><span class="custom_icon csv_icon"></span><span class="text" i18n="@@download_csv">Download CSV</span></div>\r
                        <div (click)="uploadCsv()" class="w45percent csv_button"><span class="material-icons">file_upload</span><span class="text" i18n="@@upload_csv">Upload CSV</span></div>\r
                    </div>\r
                </div>\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <mat-select class="pull-left"  [(ngModel)]="allAction" i18n-placeholder="@@placeholder.all_actions" placeholder="All actions" (selectionChange)="allActionChanged($event)" floatPlaceholder="never">\r
                            <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsOptions">{{actions.label}}</mat-option>\r
                        </mat-select>\r
<!--                        <div class="checkbox_button pull-right" [ngClass]="{'active':batchGrouped}"><mat-checkbox [(ngModel)]="batchGrouped" (ngModelChange)="bachChange($event)" i18n="@@batch_id_grouped">Batch ID grouped</mat-checkbox></div>-->\r
                        <label for="checkbox" class="checkbox_button pull-right"   [ngClass]="{'active':batchGrouped}">\r
                            <input id="checkbox" [(ngModel)]="batchGrouped" (ngModelChange)="batchChange($event)" type="checkbox">\r
                            <span i18n="@@batch_id_grouped">Batch ID grouped</span>\r
                        </label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
<!--        <ng-container *ngIf="batchGrouped">\r
            <button class="left_arrow arrow no_style"  i18n-title="@@title.preview_page" title="Preview page" *ngIf="_.size(matches) > 0" [disabled]="!hasNewer(externalRetrieveEntries)" [ngClass]="{'active':hasNewer(externalRetrieveEntries)}" (click)="getCounts(newerOffset(externalRetrieveEntries))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-left"></span>\r
            </button>\r
            <button class="right_arrow arrow no_style" i18n-title="@@title.next_page" title="Next page" *ngIf="_.size(matches) > 0" [disabled]="!hasOlder(externalRetrieveEntries)" [ngClass]="{'active':hasOlder(externalRetrieveEntries)}" (click)="getCounts(olderOffset(externalRetrieveEntries))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-right"></span>\r
            </button>\r
        </ng-container>\r
        <ng-container *ngIf="!batchGrouped">\r
            <button class="left_arrow arrow no_style"  i18n-title="@@title.preview_page" title="Preview page" *ngIf="_.size(matches) > 0"  [disabled]="!hasNewer(matches)" [ngClass]="{'active':hasNewer(matches)}" (click)="search(newerOffset(matches))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-left"></span>\r
            </button>\r
            <button class="right_arrow arrow no_style" i18n-title="@@title.next_page" title="Next page" *ngIf="_.size(matches) > 0" [disabled]="!hasOlder(matches)" [ngClass]="{'active':hasOlder(matches)}" (click)="search(olderOffset(matches))">\r
                <span class="glyphicon glyphicon glyphicon-chevron-right"></span>\r
            </button>\r
        </ng-container>-->\r
        <div class="left_arrow arrow"  *ngIf="matches && matches.length && matches.length > 0" [ngClass]="{'active':filterObject.offset > 0}" (click)="prev()"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
        <div class="right_arrow arrow" *ngIf="matches && matches.length && matches.length > 0" [ngClass]="{'active':moreTasks}" (click)="next()"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
        <table-generator *ngIf="!batchGrouped && tableConfigNormal && matches && matches.length && matches.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigNormal" [models]="matches"></table-generator>\r
        <table-generator *ngIf="batchGrouped && tableConfigGrouped && matches && matches.length && matches.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigGrouped" [models]="matches"></table-generator>\r
\r
        <!--<table class="table table-bordered table-condensed" *ngIf="_.size(matches) > 0">\r
            <thead>\r
            <tr *ngIf="batchGrouped">\r
                <th>\r
                </th>\r
                <th width="3%"></th>\r
                <th i18n="@@batch_id">Batch ID</th>\r
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
                <th (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                    <div class="action_block">\r
                        <div class="table-small-button shadow">\r
                            <input type="checkbox" (change)="checkAll($event)">\r
                        </div>\r
                        <a [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('cancel')" href="" i18n-title="@@title.cancel_selected" title="Cancel selected">\r
                            <span class="glyphicon glyphicon-ban-circle"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('reschedule')" href="" i18n-title="@@title.reschedule_selected" title="Reschedule selected">\r
                            <span class="glyphicon glyphicon-repeat"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('delete')" href="" i18n-title="@@title.delete_selected" title="Delete selected">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </div>\r
                </th>\r
                <th i18n="@@modality">Modality</th>\r
                <th i18n="@@study_uid">Study UID</th>\r
                <th i18n="@@nr_inst" i18n-title="@@title.export.number_of_instances" title="Number of instances">Nr.Inst. </th>\r
                <th i18n="@@exporter_id" i18n-title="@@title.export.export_task_id" title="Export Task ID">Exporter ID</th>\r
                <th i18n="@@status">Status</th>\r
                <th i18n="@@failures">Failures</th>\r
                <th i18n="@@queue_time" i18n-title="@@scheduled_time" title="Scheduled Time">Queue time</th>\r
                <th i18n="@@export_time" i18n-title="@@title.export.processing_duration" title="Processing duration">Export time</th>\r
                <th i18n="@@device_name">Device name</th>\r
            </tr>\r
            </thead>\r
            <tbody>\r
            <ng-container *ngFor="let match of matches">\r
                <tr *ngIf="batchGrouped">\r
                    <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
                    <td  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                        <a (click)="$event.preventDefault();match.showProperties = !match.showProperties" href="" i18n-title="@@show_properties" title="Show Properties">\r
                            <span class="glyphicon glyphicon-list"></span>\r
                        </a>\r
                        <a class="text-white" (click)="$event.preventDefault();showTaskDetail(match)" href="" i18n-title="@@title.export.show_tasks_detail" title="Show Tasks Detail">\r
                            <span class="glyphicon glyphicon-list-alt"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" (click)="$event.preventDefault();deleteBatchedTask(match)" href="" i18n-title="@@title.delete_task_with_this_batchid" title="Delete Task with this BatchID">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </td>\r
                    <td [innerHtml]="match.properties.batchID" title="{{match.properties.batchID}}"></td>\r
                    <td [innerHtml]="match.properties.RemoteAET" class="hideOn1200px"></td>\r
                    <td [innerHtml]="match.properties.DestinationAET" class="hideOn1100px"></td>\r
                    <td [innerHtml]="match.properties.scheduledTimeRange" class="hideOn1100px"></td>\r
                    <td [innerHtml]="match.properties.processingStartTimeRange" class="hideOn1100px"></td>\r
                    <td [innerHtml]="match.properties.processingEndTimeRange" class="hideOn1100px"></td>\r
                    <td class="hideOn1100px no-padding" width="30%"><stacked-progress [model]="match.properties.tasks"></stacked-progress></td>\r
                </tr>\r
                <tr *ngIf="!batchGrouped">\r
                    <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
                    <td (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                        <div class="table-small-button shadow">\r
                            <input type="checkbox" [(ngModel)]="match.checked">\r
                        </div>\r
                        <a class="table-small-button shadow" (click)="$event.preventDefault();match.showProperties = !match.showProperties" href="" i18n-title="@@show_properties" title="Show Properties">\r
                            <span class="glyphicon glyphicon-list"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" *ngIf="((match.properties.status && match.properties.status === 'SCHEDULED') || (match.properties.status && match.properties.status === 'IN PROCESS'))" (click)="$event.preventDefault();cancel(match)" href="" i18n-title="@@title.cancel" title="Cancel">\r
                            <span class="glyphicon glyphicon-ban-circle"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" (click)="$event.preventDefault();reschedule(match)" href="" i18n-title="@@title.reschedule" title="Reschedule">\r
                            <span class="glyphicon glyphicon-repeat"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->export-single_action',param:'visible'}" (click)="$event.preventDefault();delete(match)" href="" i18n-title="@@title.delete" title="Delete">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </td>\r
                    <td [innerHtml]="match.properties.Modality"></td>\r
                    <td [innerHtml]="match.properties.StudyInstanceUID"></td>\r
                    <td [innerHtml]="match.properties.NumberOfInstances" ></td>\r
                    <td [innerHtml]="match.properties.ExporterID"></td>\r
                    <td [innerHtml]="match.properties.status" title="{{match.properties.outcomeMessage}}"></td>\r
                    <td [innerHtml]="match.properties.failures" title="{{match.properties.errorMessage}}"></td>\r
                    <td class="text-right" [innerHtml]="getDifferenceTime(match.properties.scheduledTime,match.properties.processingStartTime)"></td>\r
                    <td class="text-right" [innerHtml]="getDifferenceTime(match.properties.processingStartTime,match.properties.processingEndTime,'sec')"></td>\r
                    <td [innerHtml]="match.properties.dicomDeviceName"></td>\r
                </tr>\r
                <tr *ngIf="match.showProperties">\r
                    <td colspan="11">\r
                        <table class="table table-bordered table-condensed attribute_list">\r
                            <tr *ngFor="let key of Object.keys(match.propertiesAttr)">\r
                                <th [innerHtml]="key"></th>\r
                                <td [innerHtml]="match.propertiesAttr[key]"></td>\r
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

// src/app/monitoring/export/export.component.ts
var _a;
var ExportComponent = (_a = class {
  constructor($http, cfpLoadingBar, mainservice, service, viewContainerRef, dialog, httpErrorHandler, route, aeListService, permissionService, _keycloakService) {
    this.$http = $http;
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.service = service;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.httpErrorHandler = httpErrorHandler;
    this.route = route;
    this.aeListService = aeListService;
    this.permissionService = permissionService;
    this._keycloakService = _keycloakService;
    this.matches = [];
    this.exportTasks = [];
    this.timer = {
      started: false,
      startText: "Start Auto Refresh",
      stopText: "Stop Auto Refresh"
    };
    this.statusValues = {};
    this.interval = 10;
    this.Object = Object;
    this.batchGrouped = false;
    this._ = lodash_exports;
    this.filterLoadFinished = false;
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
    this.allActionsActive = [];
    this.tableHovered = false;
    this.filterObject = {
      limit: 20,
      offset: 0
    };
    this.tableConfigNormal = {
      search: ""
    };
    this.tableConfigGrouped = {
      search: ""
    };
    this.moreTasks = false;
  }
  ngOnInit() {
    this.initCheck(10);
  }
  initCheck(retries) {
    let $this = this;
    if (KeycloakService.keycloakAuth && KeycloakService.keycloakAuth.authenticated || hasIn_default(this.mainservice, "global.notSecure") && this.mainservice.global.notSecure) {
      this.route.queryParams.subscribe(params => {
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
    this.route.queryParams.subscribe(params => {
      if (params && params["dicomDeviceName"]) {
        this.filterObject["dicomDeviceName"] = params["dicomDeviceName"];
        this.search(0);
      }
    });
    this.initExporters(1);
    this.getAets();
    this.service.statusValues().forEach(val => {
      this.statusValues[val.value] = {
        count: 0,
        loader: false,
        text: val.text
      };
    });
    this.statusChange();
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
  initSchema() {
    this.setFilterSchema();
    if (this.urlParam) {
      this.filterObject = this.urlParam;
      this.filterObject["limit"] = 20;
      this.filterObject["offset"] = 0;
      this.filterObject["orderby"] = "-updatedTime";
    }
    console.log("this.filterObject", this.filterObject);
    this.setTableSchemas();
  }
  setTableSchemas() {
    this.tableConfigNormal = {
      table: j4care.calculateWidthOfTable(this.service.getTableSchema(this, this.action, {
        grouped: false,
        getDifferenceTime: this.getDifferenceTime,
        filterObject: this.filterObject
      })),
      table_grouped: j4care.calculateWidthOfTable(this.service.getTableSchema(this, this.action, {
        grouped: true,
        getDifferenceTime: this.getDifferenceTime,
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
        getDifferenceTime: this.getDifferenceTime,
        filterObject: this.filterObject
      })),
      filter: this.filterObject,
      search: "",
      showAttributes: false,
      calculate: false
    };
  }
  setFilterSchema() {
    this.filterSchema = this.service.getFilterSchema(this.exporters, this.devices, "COUNT " + (this.count || this.count == 0 ? this.count : "") + "");
  }
  onFormChange(e) {
    console.log("e", e);
    this.statusChange();
    this.setTableSchemas();
  }
  // changeTest(e){
  //     console.log("changetest",e);
  //     this.filterObject.createdTime = e;
  // }
  filterKeyUp(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      this.search(0);
    }
  }
  confirm(confirmparameters, width) {
    width = width || "465px";
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
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
  onSubmit(object) {
    if (hasIn_default(object, "id") && hasIn_default(object, "model")) {
      if (object.id === "count") {
        this.getCount();
      } else {
        this.getCounts();
      }
    }
  }
  getCounts(offset) {
    let filters = Object.assign({}, this.filterObject);
    if (!this.tableHovered) this.search(0);
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
        if (!this.mainservice.global.notSecure) j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&access_token=${token}&${this.mainservice.param(filterClone)}`, "export.csv");else j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&${this.mainservice.param(filterClone)}`, "export.csv");
      });
    });
  }
  uploadCsv() {
    this.dialogRef = this.dialog.open(CsvUploadComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.params = {
      exporterID: this.exporterID || "",
      batchID: this.filterObject["batchID"] || "",
      formSchema: [{
        tag: "input",
        type: "checkbox",
        filterKey: "semicolon",
        description: "Use semicolon as delimiter"
      }, {
        tag: "range-picker-time",
        type: "text",
        filterKey: "scheduledTime",
        description: "Schedule at (if not set, schedule immediately)"
      },
      //scheduledTime
      {
        tag: "select",
        options: this.aets,
        showStar: true,
        filterKey: "LocalAET",
        description: "Local AET",
        placeholder: "Local AET",
        validation: Validators.required
      }, {
        tag: "select",
        options: this.exporters.map(exporter => {
          return {
            value: exporter.id,
            text: exporter.id
          };
        }),
        showStar: true,
        filterKey: "exporterID",
        description: "Exporter ID",
        placeholder: "Exporter ID",
        validation: Validators.required
      }, {
        tag: "input",
        type: "number",
        filterKey: "studyUIDField",
        description: "Study UID Field",
        placeholder: "Study UID Field",
        validation: [Validators.minLength(1), Validators.min(1)],
        defaultValue: 1
      }, {
        tag: "input",
        type: "number",
        filterKey: "seriesUIDField",
        description: "Series UID Field",
        placeholder: "Series UID Field",
        validation: [Validators.minLength(1), Validators.min(1)],
        defaultValue: null
      }, {
        tag: "input",
        type: "text",
        filterKey: "batchID",
        description: "Batch ID",
        placeholder: "Batch ID"
      }],
      prepareUrl: filter => {
        let clonedFilters = {};
        if (filter["batchID"]) clonedFilters["batchID"] = filter["batchID"];
        if (filter["scheduledTime"]) clonedFilters["scheduledTime"] = filter["scheduledTime"];
        return filter["seriesUIDField"] ? `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${filter.LocalAET}/rs/studies/csv:${filter.studyUIDField}/series/csv:${filter.seriesUIDField}/export/${filter.exporterID}${j4care.getUrlParams(clonedFilters)}` : `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${filter.LocalAET}/rs/studies/csv:${filter.studyUIDField}/export/${filter.exporterID}${j4care.getUrlParams(clonedFilters)}`;
      }
    };
    this.dialogRef.afterClosed().subscribe(ok => {
      if (ok) {
        console.log("ok", ok);
      }
    });
  }
  showTaskDetail(task) {
    this.filterObject.batchID = task.batchID;
    this.batchGrouped = false;
    this.search(0);
  }
  search(offset) {
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.search(this.filterObject, offset, this.batchGrouped).subscribe(res => {
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
            "taskID": "1913",
            "dicomDeviceName": "demoj4c",
            "queue": "Export3",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.518+0100",
            "updatedTime": "2022-03-15T19:44:09.218+0100",
            "scheduledTime": "2022-03-15T19:44:00.947+0100",
            "processingStartTime": "2022-03-15T19:44:04.725+0100",
            "processingEndTime": "2022-03-15T19:44:09.026+0100",
            "errorMessage": "Java heap space",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "XDS-PnR",
            "StudyInstanceUID": "2.25.253254299183063559800543717906499910894",
            "NumberOfInstances": "2079",
            "Modality": ["CT"]
          }, {
            "taskID": "1911",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.492+0100",
            "updatedTime": "2022-03-15T19:43:12.413+0100",
            "scheduledTime": "2022-03-15T19:43:00.654+0100",
            "processingStartTime": "2022-03-15T19:43:07.180+0100",
            "processingEndTime": "2022-03-15T19:43:12.201+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.253254299183063559800543717906499910894",
            "NumberOfInstances": "2079",
            "Modality": ["CT"]
          }, {
            "taskID": "1910",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.476+0100",
            "updatedTime": "2022-03-15T19:43:11.194+0100",
            "scheduledTime": "2022-03-15T19:43:00.643+0100",
            "processingStartTime": "2022-03-15T19:43:06.158+0100",
            "processingEndTime": "2022-03-15T19:43:10.799+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.253254299183063559800543717906499910894",
            "NumberOfInstances": "2079",
            "Modality": ["CT"]
          }, {
            "taskID": "1912",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.504+0100",
            "updatedTime": "2022-03-15T19:43:11.194+0100",
            "scheduledTime": "2022-03-15T19:43:00.644+0100",
            "processingStartTime": "2022-03-15T19:43:05.960+0100",
            "processingEndTime": "2022-03-15T19:43:10.799+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.253254299183063559800543717906499910894",
            "NumberOfInstances": "2079",
            "Modality": ["CT"]
          }, {
            "taskID": "1914",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.530+0100",
            "updatedTime": "2022-03-15T19:43:10.206+0100",
            "scheduledTime": "2022-03-15T19:43:00.643+0100",
            "processingStartTime": "2022-03-15T19:43:04.982+0100",
            "processingEndTime": "2022-03-15T19:43:09.786+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Instances",
            "StudyInstanceUID": "2.25.253254299183063559800543717906499910894",
            "NumberOfInstances": "2079",
            "Modality": ["CT"]
          }, {
            "taskID": "1917",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.572+0100",
            "updatedTime": "2022-03-15T19:41:30.097+0100",
            "scheduledTime": "2022-03-15T19:41:00.721+0100",
            "processingStartTime": "2022-03-15T19:41:05.308+0100",
            "processingEndTime": "2022-03-15T19:41:29.900+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.133790264388916295901178041223591125703",
            "NumberOfInstances": "310",
            "Modality": ["CT", "PR", "KO"]
          }, {
            "taskID": "1941",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.888+0100",
            "updatedTime": "2022-03-15T19:39:01.415+0100",
            "scheduledTime": "2022-03-15T19:38:01.384+0100",
            "processingStartTime": "2022-03-15T19:39:01.226+0100",
            "processingEndTime": "2022-03-15T19:39:01.414+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.229975568262236341440816121223809588447",
            "NumberOfInstances": "2958",
            "Modality": ["CT", "SR"]
          }, {
            "taskID": "1933",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.746+0100",
            "updatedTime": "2022-03-15T19:39:01.357+0100",
            "scheduledTime": "2022-03-15T19:38:01.344+0100",
            "processingStartTime": "2022-03-15T19:39:01.217+0100",
            "processingEndTime": "2022-03-15T19:39:01.356+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.150446237572158364218250943566632959728",
            "NumberOfInstances": "1007",
            "Modality": ["CT", "PR", "SR"]
          }, {
            "taskID": "1921",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.622+0100",
            "updatedTime": "2022-03-15T19:39:01.283+0100",
            "scheduledTime": "2022-03-15T19:38:01.259+0100",
            "processingStartTime": "2022-03-15T19:39:01.209+0100",
            "processingEndTime": "2022-03-15T19:39:01.281+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.38075169170603874823282185203405259704",
            "NumberOfInstances": "7",
            "Modality": ["PR", "DX"]
          }, {
            "taskID": "1915",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.548+0100",
            "updatedTime": "2022-03-15T19:39:01.221+0100",
            "scheduledTime": "2022-03-15T19:38:01.104+0100",
            "processingStartTime": "2022-03-15T19:39:01.192+0100",
            "processingEndTime": "2022-03-15T19:39:01.220+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Instances",
            "StudyInstanceUID": "2.25.133790264388916295901178041223591125703",
            "NumberOfInstances": "310",
            "Modality": ["CT", "PR", "KO"]
          }, {
            "taskID": "1925",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.667+0100",
            "updatedTime": "2022-03-15T19:39:01.221+0100",
            "scheduledTime": "2022-03-15T19:38:01.097+0100",
            "processingStartTime": "2022-03-15T19:39:01.176+0100",
            "processingEndTime": "2022-03-15T19:39:01.220+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.244811086690625888516433847572724695651",
            "NumberOfInstances": "3",
            "Modality": ["CR"]
          }, {
            "taskID": "1916",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.559+0100",
            "updatedTime": "2022-03-15T19:39:01.189+0100",
            "scheduledTime": "2022-03-15T19:38:01.062+0100",
            "processingStartTime": "2022-03-15T19:39:01.167+0100",
            "processingEndTime": "2022-03-15T19:39:01.188+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.133790264388916295901178041223591125703",
            "NumberOfInstances": "310",
            "Modality": ["CT", "PR", "KO"]
          }, {
            "taskID": "1919",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.597+0100",
            "updatedTime": "2022-03-15T19:39:01.180+0100",
            "scheduledTime": "2022-03-15T19:38:01.015+0100",
            "processingStartTime": "2022-03-15T19:39:01.159+0100",
            "processingEndTime": "2022-03-15T19:39:01.179+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Instances",
            "StudyInstanceUID": "2.25.38075169170603874823282185203405259704",
            "NumberOfInstances": "7",
            "Modality": ["PR", "DX"]
          }, {
            "taskID": "1920",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.610+0100",
            "updatedTime": "2022-03-15T19:39:01.170+0100",
            "scheduledTime": "2022-03-15T19:38:00.987+0100",
            "processingStartTime": "2022-03-15T19:39:01.142+0100",
            "processingEndTime": "2022-03-15T19:39:01.169+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.38075169170603874823282185203405259704",
            "NumberOfInstances": "7",
            "Modality": ["PR", "DX"]
          }, {
            "taskID": "1929",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.701+0100",
            "updatedTime": "2022-03-15T19:39:01.170+0100",
            "scheduledTime": "2022-03-15T19:38:00.975+0100",
            "processingStartTime": "2022-03-15T19:39:01.125+0100",
            "processingEndTime": "2022-03-15T19:39:01.169+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series Thumbnails",
            "StudyInstanceUID": "2.25.73758429535919582411283778014440169399",
            "NumberOfInstances": "3",
            "Modality": ["PR", "SR", "CR"]
          }, {
            "taskID": "1923",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.647+0100",
            "updatedTime": "2022-03-15T19:39:01.137+0100",
            "scheduledTime": "2022-03-15T19:38:00.911+0100",
            "processingStartTime": "2022-03-15T19:39:01.114+0100",
            "processingEndTime": "2022-03-15T19:39:01.136+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Instances",
            "StudyInstanceUID": "2.25.244811086690625888516433847572724695651",
            "NumberOfInstances": "3",
            "Modality": ["CR"]
          }, {
            "taskID": "1924",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.659+0100",
            "updatedTime": "2022-03-15T19:39:01.125+0100",
            "scheduledTime": "2022-03-15T19:38:00.877+0100",
            "processingStartTime": "2022-03-15T19:39:01.088+0100",
            "processingEndTime": "2022-03-15T19:39:01.124+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.244811086690625888516433847572724695651",
            "NumberOfInstances": "3",
            "Modality": ["CR"]
          }, {
            "taskID": "1942",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.896+0100",
            "updatedTime": "2022-03-15T19:39:01.099+0100",
            "scheduledTime": "2022-03-15T19:38:00.984+0100",
            "processingStartTime": "2022-03-15T19:39:00.860+0100",
            "processingEndTime": "2022-03-15T19:39:01.098+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.229975568262236341440816121223809588447",
            "NumberOfInstances": "2958",
            "Modality": ["CT", "SR"]
          }, {
            "taskID": "1927",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.684+0100",
            "updatedTime": "2022-03-15T19:39:01.099+0100",
            "scheduledTime": "2022-03-15T19:38:00.830+0100",
            "processingStartTime": "2022-03-15T19:39:01.063+0100",
            "processingEndTime": "2022-03-15T19:39:01.098+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Instances",
            "StudyInstanceUID": "2.25.73758429535919582411283778014440169399",
            "NumberOfInstances": "3",
            "Modality": ["PR", "SR", "CR"]
          }, {
            "taskID": "1928",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.692+0100",
            "updatedTime": "2022-03-15T19:39:01.074+0100",
            "scheduledTime": "2022-03-15T19:38:00.820+0100",
            "processingStartTime": "2022-03-15T19:39:01.029+0100",
            "processingEndTime": "2022-03-15T19:39:01.073+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.73758429535919582411283778014440169399",
            "NumberOfInstances": "3",
            "Modality": ["PR", "SR", "CR"]
          }, {
            "taskID": "1928",
            "dicomDeviceName": "demoj4c",
            "queue": "Export2",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.692+0100",
            "updatedTime": "2022-03-15T19:39:01.074+0100",
            "scheduledTime": "2022-03-15T19:38:00.820+0100",
            "processingStartTime": "2022-03-15T19:39:01.029+0100",
            "processingEndTime": "2022-03-15T19:39:01.073+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - QIDO Study Series",
            "StudyInstanceUID": "2.25.73758429535919582411283778014440169399",
            "NumberOfInstances": "3",
            "Modality": ["PR", "SR", "CR"]
          }];
        }
      }
      if (res && res.length > 0) {
        $this.matches = res.map((properties, index) => {
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
            $this.cfpLoadingBar.complete();
            return properties;
          } else {
            $this.cfpLoadingBar.complete();
            if (hasIn_default(properties, "Modality")) {
              properties.Modality = properties.Modality.join(",");
            }
            return properties;
          }
        });
        this.moreTasks = res.length > this.filterObject["limit"];
        if (this.moreTasks) this.matches.splice(this.matches.length - 1, 1);
      } else {
        $this.cfpLoadingBar.complete();
        $this.matches = [];
        this.mainservice.showMsg("No tasks found!");
      }
    }, err => {
      $this.cfpLoadingBar.complete();
      $this.matches = [];
      console.log("err", err);
    });
  }
  next() {
    if (this.moreTasks) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 + this.filterObject["limit"] * 1;
        filter["limit"]++;
      }
      this.search(filter.offset);
    }
  }
  prev() {
    if (this.filterObject["offset"] > 0) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 - this.filterObject["limit"] * 1;
      this.search(filter.offset);
    }
  }
  batchChange(e) {
    this.matches = [];
  }
  getCount() {
    this.cfpLoadingBar.start();
    this.service.getCount(this.filterObject).subscribe(count => {
      try {
        this.count = count.count;
        this.setFilterSchema();
      } catch (e) {
        this.count = "";
      }
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  statusChange() {}
  allActionChanged(e) {
    let text = "Are you sure, you want to " + Globalvar.getActionText(this.allAction) + " all matching tasks?";
    let filter = cloneDeep_default(this.filterObject);
    if (filter.status === "*") delete filter.status;
    if (filter.dicomDeviceName === "*") delete filter.dicomDeviceName;
    delete filter.limit;
    delete filter.offset;
    switch (this.allAction) {
      case "cancel":
        this.confirm({
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.cfpLoadingBar.start();
            this.service.cancelAll(filter).subscribe(res => {
              this.cfpLoadingBar.complete();
              if (hasIn_default(res, "count")) {
                this.mainservice.showMsg("" + (res.count || 0) + " tasks canceled successfully!");
              } else {
                this.mainservice.showMsg("Tasks canceled successfully!");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
          this.allAction = "";
          this.allAction = void 0;
        });
        break;
      case "reschedule":
        this.confirm({
          content: "Tasks reschedule",
          doNotSave: true,
          form_schema: [[[{
            tag: "label_large",
            text: text || "Change the exporter for all rescheduled tasks. To reschedule with the original exporters associated with the tasks, leave blank:"
          }], [{
            tag: "label",
            text: "Exporter ID"
          }, {
            tag: "select",
            options: this.exporters.map(exporter => {
              return {
                text: exporter.description || exporter.id,
                value: exporter.id
              };
            }),
            showStar: true,
            filterKey: "selectedExporter",
            description: "Exporter ID",
            placeholder: "Exporter ID"
          }], [{
            tag: "label_large",
            text: "Select device if you want to reschedule to an other device:"
          }], [{
            tag: "label",
            text: "Device"
          }, {
            tag: "multi-select",
            options: this.devices.map(device => {
              return {
                text: device.dicomDeviceName,
                value: device.dicomDeviceName
              };
            }),
            showStar: true,
            filterKey: "newDeviceName",
            description: "Device",
            placeholder: "Device"
          }], [{
            tag: "label",
            text: "Schedule at (if not set, schedule immediately)"
          }, {
            tag: "single-date-time-picker",
            type: "text",
            filterKey: "scheduledTime",
            description: "Schedule at (if not set, schedule immediately)"
          }]]],
          result: {
            schema_model: {}
          },
          saveButton: "SUBMIT"
        }, "520px").subscribe(ok => {
          if (ok) {
            this.cfpLoadingBar.start();
            if (hasIn_default(ok, "schema_model.newDeviceName") && ok.schema_model.newDeviceName != "") {
              filter["newDeviceName"] = ok.schema_model.newDeviceName;
            }
            if (hasIn_default(ok, "schema_model.scheduledTime") && ok.schema_model.scheduledTime != "") {
              filter["scheduledTime"] = ok.schema_model.scheduledTime;
            }
            this.service.rescheduleAll(filter, ok.schema_model.selectedExporter).subscribe(res => {
              this.cfpLoadingBar.complete();
              if (hasIn_default(res, "count")) {
                this.mainservice.showMsg("" + (res.count || 0) + " tasks rescheduled successfully!");
              } else {
                this.mainservice.showMsg("Tasks rescheduled successfully!");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
          this.allAction = "";
          this.allAction = void 0;
        });
        break;
      case "delete":
        this.confirm({
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.cfpLoadingBar.start();
            this.service.deleteAll(filter).subscribe(res => {
              this.cfpLoadingBar.complete();
              this.mainservice.showMsgDeleteTasks(res);
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
          this.allAction = "";
          this.allAction = void 0;
        });
        break;
      default:
        this.allAction = "";
        this.allAction = void 0;
    }
  }
  getDifferenceTime(starttime, endtime, mode) {
    let start = new Date(starttime).getTime();
    let end = new Date(endtime).getTime();
    if (!start || !end || end < start) {
      return null;
    } else {
      return this.msToTime(new Date(endtime).getTime() - new Date(starttime).getTime(), mode);
    }
  }
  checkAll(event) {
    this.matches.forEach(match => {
      match.checked = event.target.checked;
    });
  }
  rescheduleDialog(callBack, schema_model, title, text) {
    this.confirm({
      content: title || "Task reschedule",
      doNotSave: true,
      form_schema: this.service.getDialogSchema(this.exporters, this.devices, text),
      result: {
        schema_model: schema_model || {}
      },
      saveButton: "SUBMIT"
    }, "520px").subscribe(ok => {
      callBack.call(this, ok);
    });
  }
  executeAll(mode) {
    if (mode === "reschedule") {
      this.rescheduleDialog(ok => {
        if (ok) {
          this.cfpLoadingBar.start();
          let filter = {};
          let id;
          if (hasIn_default(ok, "schema_model.newDeviceName") && ok.schema_model.newDeviceName != "") {
            filter["newDeviceName"] = ok.schema_model.newDeviceName;
          }
          if (hasIn_default(ok, "schema_model.scheduledTime") && ok.schema_model.scheduledTime != "") {
            filter["scheduledTime"] = ok.schema_model.scheduledTime;
          }
          if (hasIn_default(ok, "schema_model.selectedExporter")) {
            id = ok.schema_model.selectedExporter;
          }
          this.matches.forEach((match, i) => {
            if (match.selected) {
              this.service.reschedule(match.taskID, id || match.ExporterID, filter).subscribe(res => {
                this.mainservice.showMsg("Task " + match.taskID + "\n rescheduled successfully!");
                if (this.matches.length === i + 1) {
                  this.cfpLoadingBar.complete();
                }
              }, err => {
                this.httpErrorHandler.handleError(err);
                if (this.matches.length === i + 1) {
                  this.cfpLoadingBar.complete();
                }
              });
            }
            if (this.matches.length === i + 1) {
              this.cfpLoadingBar.complete();
            }
          });
        }
        this.allAction = "";
        this.allAction = void 0;
      });
    } else {
      this.confirm({
        content: "Are you sure you want to " + Globalvar.getActionText(mode) + " selected entries?"
      }).subscribe(result => {
        if (result) {
          this.cfpLoadingBar.start();
          this.matches.forEach(match => {
            if (match.selected) {
              this.service[mode](match.taskID).subscribe(res => {
                console.log("Execute result", res);
                if (mode === "cancel") this.mainservice.showMsg("Task " + match.taskID + " canceled successfully!");else this.mainservice.showMsg("Task " + match.taskID + " deleted successfully!");
              }, err => {
                this.httpErrorHandler.handleError(err);
              });
            }
          });
          setTimeout(() => {
            this.search(this.matches[0].offset || 0);
            this.cfpLoadingBar.complete();
          }, 300);
        }
      });
    }
  }
  msToTime(duration, mode) {
    if (mode) if (mode === "sec") return (duration * 6 / 6e3).toFixed(4).toString() + " s";else return (duration / 6e4).toFixed(4).toString() + " min";
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
            this.mainservice.showMsg("" + res.count + " tasks deleted successfully!");
            this.cfpLoadingBar.complete();
            this.search(0);
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
      content: "Are you sure you want to delete this task?",
      result: {
        select: this.exporters
      },
      saveButton: "DELETE"
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.delete(match.taskID).subscribe(() => {
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
  cancel(match) {
    let $this = this;
    let parameters = {
      content: "Are you sure you want to cancel this task?",
      result: {
        select: this.exporters
      },
      saveButton: "YES"
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.cancel(match.taskID).subscribe(() => {
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
  reschedule(match) {
    this.rescheduleDialog(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        let filter = {};
        let id;
        if (hasIn_default(ok, "schema_model.newDeviceName") && ok.schema_model.newDeviceName != "") {
          filter["newDeviceName"] = ok.schema_model.newDeviceName;
        }
        if (hasIn_default(ok, "schema_model.scheduledTime") && ok.schema_model.scheduledTime != "") {
          filter["scheduledTime"] = ok.schema_model.scheduledTime;
        }
        if (hasIn_default(ok, "schema_model.selectedExporter")) {
          id = ok.schema_model.selectedExporter;
        }
        this.service.reschedule(match.taskID, id || match.ExporterID, filter).subscribe(res => {
          this.cfpLoadingBar.complete();
          if (hasIn_default(res, "count")) {
            this.mainservice.showMsg("" + (res.count || 0) + " tasks rescheduled successfully!");
          } else {
            this.mainservice.showMsg("Task rescheduled successfully!");
          }
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    }, {
      selectedExporter: match.ExporterID
    }, void 0, "Change the Exporter Id only if you want to reschedule to another exporter!");
  }
  hasOlder(objs) {
    return objs && objs.length === this.filterObject.limit;
  }
  hasNewer(objs) {
    return objs && objs.length && objs[0].offset;
  }
  newerOffset(objs) {
    return Math.max(0, objs[0].offset - this.filterObject.limit);
  }
  olderOffset(objs) {
    return objs[0].offset + this.filterObject.limit;
  }
  initExporters(retries) {
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}export`).subscribe(res => {
      $this.exporters = res;
      if (res && res[0] && res[0].id) {
        $this.exporterID = res[0].id;
      }
      $this.getDevices();
    }, res => {
      if (retries) $this.initExporters(retries - 1);
    });
  }
  getDevices() {
    this.cfpLoadingBar.start();
    this.service.getDevices().subscribe(devices => {
      this.cfpLoadingBar.complete();
      this.devices = devices.filter(dev => dev.hasArcDevExt);
      this.initSchema();
    }, err => {
      this.cfpLoadingBar.complete();
      console.error("Could not get devices", err);
    });
  }
  getAets() {
    this.aeListService.getAets().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "internal"))).subscribe(aets => {
      this.aets = aets.map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      });
    }, err => {
      console.error("Could not get aets", err);
    });
  }
  ngOnDestroy() {
    if (this.timer.started) {
      this.timer.started = false;
      clearInterval(this.refreshInterval);
    }
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: ExportService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: HttpErrorHandler
}, {
  type: ActivatedRoute
}, {
  type: AeListService
}, {
  type: PermissionService
}, {
  type: KeycloakService
}], _a);
ExportComponent = __decorate([Component({
  selector: "app-export",
  template: export_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, FormsModule, MatProgressSpinner, PermissionDirective, MatSelect, MatOption, TableGeneratorComponent, CommonModule],
  standalone: true
})], ExportComponent);
export { ExportComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/