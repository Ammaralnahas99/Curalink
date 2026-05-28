import { QueuesService } from "./chunk-E64QNGI6.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-A3KYGHL3.js";
import "./chunk-CJ4Z3CIK.js";
import { AeListService, ConfirmComponent, DevicesService, FilterGeneratorComponent, MatOption, MatSelect } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, PermissionService, environment } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, CommonModule, Component, Globalvar, HttpErrorHandler, J4careHttpService, KeycloakService, MatDialog, NgClass, ReplaySubject, SelectDropdown, ViewContainerRef, __decorate, __spreadValues, forEach_default, hasIn_default, j4care, lodash_exports } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\queues\queues.component.html
var queues_component_default = `<div class="main_content queues monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="Title|Title of the Monitoring queues page@@queues">Queues</h2>\r
        <div class="filter_line">\r
            <div class="filter_block">\r
                <filter-generator [schema]="filterSchema" filterIdTemplate="monitoring-queues" [model]="filterObject" (submit)="onSubmit($event)" (onChange)="statusChange()" (onFilterLoadFinish)="filterLoadFinished = true" [filterTreeHeight]="3"></filter-generator>\r
                <div class="filter" (keyup)="filterKeyUp($event)"  *ngIf="filterLoadFinished">\r
                    <div class="filter_block auto_reloader" >\r
                        <table>\r
                            <tr *ngFor="let status of Object.keys(statusValues)" [ngClass]="{'gray':statusValues[status]?.count == '0','red':statusValues[status]?.count=='!'}">\r
                                <td>{{statusValues[status]?.text}}:</td>\r
                                <td *ngIf="!statusValues[status]?.loader">{{statusValues[status]?.count}}</td>\r
                                <td *ngIf="statusValues[status]?.loader"><i class="fa fa-circle-o-notch fa-spin dashboard_loader"></i></td>\r
                            </tr>\r
                        </table>\r
                        <div class="option_block">\r
                            <div class="interval_block">\r
                                <label i18n="@@interval">Interval:</label>\r
                                <input type="text"  i18n-placeholder="@@placeholder.interval" placeholder="Interval" [(ngModel)]="interval">\r
                                <span>s</span>\r
                            </div>\r
                            <button class="btn-default submit" (click)="toggleAutoRefresh()">\r
                                <div class="spinnter_container">\r
                                    <span *ngIf="!timer.started" class="glyphicon glyphicon-refresh"></span>\r
                                    <mat-progress-spinner *ngIf="timer.started" mode="indeterminate" [diameter]="20" ></mat-progress-spinner>\r
                                </div>\r
                                <span *ngIf="!timer.started" class="spinnter_text">{{timer.startText}}</span>\r
                                <span *ngIf="timer.started" class="spinnter_text">{{timer.stopText}}</span>\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="filter_line">\r
            <div class="filter single_block" [permission]="{id:'action-monitoring->queues-all_action',param:'visible'}">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <mat-select [(ngModel)]="allAction" class="w45percent pull-left"  i18n-placeholder="@@placeholder.all_actions" placeholder="All actions" (selectionChange)="allActionChanged($event)">\r
                            <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsOptions">{{actions.label}}</mat-option>\r
                        </mat-select>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
<!--        <button class="left_arrow arrow no_style"   i18n-title="@@title.preview_page" title="Preview page" *ngIf="_.size(matches) > 0" [disabled]="!hasNewer(matches)" [ngClass]="{'active':hasNewer(matches)}" (click)="search(newerOffset(matches))">\r
            <span class="glyphicon glyphicon glyphicon-chevron-left"></span>\r
        </button>\r
        <button class="right_arrow arrow no_style"  i18n-title="@@title.next_page" title="Next page" *ngIf="_.size(matches) > 0" [disabled]="!hasOlder(matches)" [ngClass]="{'active':hasOlder(matches)}" (click)="search(olderOffset(matches))">\r
            <span class="glyphicon glyphicon glyphicon-chevron-right"></span>\r
        </button>-->\r
        <div class="left_arrow arrow"  *ngIf="matches && matches.length && matches.length > 0" [ngClass]="{'active':filterObject.offset > 0}" (click)="prev()"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
        <div class="right_arrow arrow" *ngIf="matches && matches.length && matches.length > 0" [ngClass]="{'active':moreTasks}" (click)="next()"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
        <table-generator *ngIf="tableConfig && matches && matches.length && matches.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfig" [models]="matches"></table-generator>\r
       <!-- <table class="table table-bordered table-condensed" *ngIf="_.size(matches) > 0">\r
            <thead>\r
            <tr>\r
                <th>\r
                </th>\r
                <th  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                    <div class="action_block">\r
                        <div class="table-small-button shadow">\r
                            <input type="checkbox" (change)="checkAll($event)">\r
                        </div>\r
                        <a [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('cancel')" href=""  i18n-title="@@title.cancel_selected" title="Cancel selected">\r
                            <span class="glyphicon glyphicon-ban-circle"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('reschedule')" href=""  i18n-title="@@title.reschedule_selected" title="Reschedule selected">\r
                            <span class="glyphicon glyphicon-repeat"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" class="text-white table-small-button shadow" (click)="$event.preventDefault();executeAll('delete')" href=""  i18n-title="@@title.delete_selected" title="Delete selected">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </div>\r
                </th>\r
                <th i18n="Table Header|Header of the table in the queues page@@queue">Queue</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@study_uid">Study UID</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@status">Status</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@failures">Failures</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@created">Created</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@updated">Updated</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@scheduled">Scheduled</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@started">Started</th>\r
                <th i18n="Table Header|Header of the table in the queues page@@finished">Finished</th>\r
            </tr>\r
            </thead>\r
            <tbody>\r
            <ng-container *ngFor="let match of matches">\r
                <tr>\r
                    <td [attr.rowspan]="(match.showProperties ? 2 : 1)" [innerHtml]="match.offset+1+'.'"></td>\r
                    <td  (mouseenter)="tableMousEnter()" (mouseleave)="tableMousLeave()">\r
                        <div class="table-small-button shadow">\r
                            <input [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" type="checkbox" [(ngModel)]="match.checked">\r
                        </div>\r
                        <a class="table-small-button shadow" (click)="$event.preventDefault();match.showProperties = !match.showProperties" href=""  i18n-title="@@show_properties" title="Show Properties">\r
                            <span class="glyphicon glyphicon-list"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" *ngIf="((match.properties.status && match.properties.status === 'SCHEDULED') || (match.properties.status && match.properties.status === 'IN PROCESS'))"  (click)="$event.preventDefault();cancel(match)" href=""  i18n-title="@@title.cancel" title="Cancel">\r
                            <span class="glyphicon glyphicon-ban-circle"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" (click)="$event.preventDefault();reschedule(match)" href=""  i18n-title="@@title.reschedule" title="Reschedule">\r
                            <span class="glyphicon glyphicon-repeat"></span>\r
                        </a>\r
                        <a class="table-small-button shadow" [permission]="{id:'action-monitoring->queues-single_action',param:'visible'}" (click)="$event.preventDefault();delete(match)" href=""  i18n-title="@@title.delete" title="Delete">\r
                            <span class="glyphicon glyphicon-remove-circle"></span>\r
                        </a>\r
                    </td>\r
                    <td [innerHtml]="match.properties.queue"></td>\r
                    <td [innerHtml]="match.properties.StudyInstanceUID"></td>\r
                    <td [innerHtml]="match.properties.status"  title="{{match.properties.outcomeMessage}}"></td>\r
                    <td [innerHtml]="match.properties.failures" title="{{match.properties.errorMessage}}"></td>\r
                    <td [innerHtml]="match.properties.createdTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.updatedTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.scheduledTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.processingStartTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                    <td [innerHtml]="match.properties.processingEndTime | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                </tr>\r
                <tr *ngIf="match.showProperties">\r
                    <td colspan="10">\r
                        <table class="table table-bordered table-condensed attribute_list">\r
                            <tr *ngFor="let key of Object.keys(match.properties)">\r
                                <th [innerHtml]="key"></th>\r
                                <td *ngIf="key === 'createdTime' || key === 'updatedTime' || key === 'scheduledTime' || key === 'processingStartTime' || key === 'processingEndTime';else nodate_content" [innerHtml]="match.properties[key]| date:'yyyy-MM-dd HH:mm:ss'"></td>\r
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
        </table>-->\r
    </div>\r
</div>`;

// src/app/monitoring/queues/queues.component.ts
var _a;
var QueuesComponent = (_a = class {
  constructor($http, service, mainservice, cfpLoadingBar, viewContainerRef, dialog, httpErrorHandler, route, deviceService, aeListService, permissionService) {
    this.$http = $http;
    this.service = service;
    this.mainservice = mainservice;
    this.cfpLoadingBar = cfpLoadingBar;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.httpErrorHandler = httpErrorHandler;
    this.route = route;
    this.deviceService = deviceService;
    this.aeListService = aeListService;
    this.permissionService = permissionService;
    this.destroyed$ = new ReplaySubject(1);
    this.filterLoadFinished = false;
    this.matches = [];
    this.queues = [];
    this._ = lodash_exports;
    this.counText = "COUNT";
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
    this.statusValues = {};
    this.interval = 10;
    this.Object = Object;
    this.tableHovered = false;
    this.statuses = [{
      value: "SCHEDULED",
      text: "SCHEDULED",
      key: "scheduled"
    }, {
      value: "SCHEDULED FOR RETRY",
      text: "S. FOR RETRY",
      key: "scheduled-for-retry"
    }, {
      value: "IN PROCESS",
      text: "IN PROCESS",
      key: "in-process"
    }, {
      value: "COMPLETED",
      text: "COMPLETED",
      key: "completed"
    }, {
      value: "WARNING",
      text: "WARNING",
      key: "warning"
    }, {
      value: "FAILED",
      text: "FAILED",
      key: "failed"
    }, {
      value: "CANCELED",
      text: "CANCELED",
      key: "canceled"
    }];
    this.timer = {
      started: false,
      startText: "Start Auto Refresh",
      stopText: "Stop Auto Refresh"
    };
    this.filterObject = {
      status: void 0,
      orderby: void 0,
      queueName: void 0,
      dicomDeviceName: void 0,
      createdTime: void 0,
      updatedTime: void 0,
      batchID: void 0,
      localAET: void 0,
      remoteAET: void 0,
      StudyInstanceUID: void 0,
      limit: 20,
      offset: 0
    };
    this.filterSchema = [];
    this.tableConfig = {
      search: "",
      showAttributes: false
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
        if (this.urlParam["queueName"]) this.filterObject.queueName = this.urlParam["queueName"];
        if (this.urlParam["dicomDeviceName"]) this.filterObject.dicomDeviceName = this.urlParam["dicomDeviceName"];
        this.init();
      });
    } else {
      if (retries) {
        setTimeout(() => {
          $this.initCheck(retries - 1);
        }, 20);
      } else {
        this.route.queryParams.subscribe(params => {
          this.urlParam = Object.assign({}, params);
          if (this.urlParam["queueName"]) this.filterObject.queueName = this.urlParam["queueName"];
          this.init();
        });
        this.init();
      }
    }
    this.statusChange();
  }
  statusChange() {
    this.setTableSchema();
  }
  allActionChanged(e) {
    let text = "Are you sure, you want to " + Globalvar.getActionText(this.allAction) + " all matching tasks?";
    let filter = {
      dicomDeviceName: this.filterObject.dicomDeviceName && this.filterObject.status != "*" ? this.filterObject.dicomDeviceName : void 0,
      status: this.filterObject.status && this.filterObject.status != "*" ? this.filterObject.status : void 0,
      createdTime: this.filterObject.createdTime || void 0,
      updatedTime: this.filterObject.updatedTime || void 0,
      localAET: this.filterObject.localAET && this.filterObject.localAET != "*" ? this.filterObject.localAET : void 0,
      remoteAET: this.filterObject.remoteAET && this.filterObject.remoteAET != "*" ? this.filterObject.remoteAET : void 0
    };
    switch (this.allAction) {
      case "cancel":
        this.confirm({
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.cfpLoadingBar.start();
            this.service.cancelAll(filter, this.filterObject.queueName).subscribe(res => {
              this.mainservice.showMsg("" + res.count + " tasks in queue canceled successfully!");
              this.cfpLoadingBar.complete();
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
          content: text
        }).subscribe(ok => {
          if (ok) {
            this.deviceService.selectParametersForMatching(res => {
              if (res) {
                this.cfpLoadingBar.start();
                if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
                  filter["newDeviceName"] = res.schema_model.newDeviceName;
                }
                if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
                  filter["scheduledTime"] = res.schema_model.scheduledTime;
                }
                this.service.rescheduleAll(filter, this.filterObject.queueName).subscribe(res2 => {
                  this.mainservice.showMsg("" + res2.count + " tasks in queue rescheduled successfully!");
                  this.cfpLoadingBar.complete();
                }, err => {
                  this.cfpLoadingBar.complete();
                  this.httpErrorHandler.handleError(err);
                });
              }
            }, this.devices);
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
            this.service.deleteAll(filter, this.filterObject.queueName).subscribe(res => {
              this.mainservice.showMsg("" + (res.count || 0) + " tasks in queue deleted successfully!");
              this.cfpLoadingBar.complete();
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
          this.allAction = "";
          this.allAction = void 0;
        });
        break;
    }
  }
  /*    test(){
          this.deviceService.selectParameters((res)=>{
              console.log("j4carehelper select deviceres",res);
              if(res){
  
              }
          },
          this.devices.map(device=>{
              return {
                  text:device.dicomDeviceName,
                  value:device.dicomDeviceName
              }
          }));
      }*/
  init() {
    this.initQuery();
    this.statuses.forEach(status => {
      this.statusValues[status.value] = __spreadValues({
        count: 0,
        loader: false
      }, status);
    });
    this.setTableSchema();
  }
  setTableSchema() {
    this.tableConfig = {
      table: j4care.calculateWidthOfTable(this.service.getTableColumns(this, this.action, {
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
    }
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
    if (this.filterObject.queueName) {
      if (!this.tableHovered) this.search(0);
      Object.keys(this.statusValues).forEach(status => {
        this.statusValues[status].loader = true;
        this.service.getCount(this.filterObject.queueName, status, void 0, void 0, this.filterObject.dicomDeviceName, this.filterObject.createdTime, this.filterObject.updatedTime, this.filterObject.batchID, this.filterObject.localAET, this.filterObject.remoteAET, "", this.filterObject.StudyInstanceUID).subscribe(count => {
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
    } else {
      this.mainservice.showError("No Queue Name selected!");
    }
  }
  filterKeyUp(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      this.search(0);
    }
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
  search(offset) {
    let $this = this;
    if (this.filterObject.queueName) {
      $this.cfpLoadingBar.start();
      this.service.search(this.filterObject.queueName, this.filterObject.status, offset, this.filterObject.limit, this.filterObject.dicomDeviceName, this.filterObject.createdTime, this.filterObject.updatedTime, this.filterObject.batchID, this.filterObject.localAET, this.filterObject.remoteAET, this.filterObject.orderby, this.filterObject.StudyInstanceUID).subscribe(res => {
        if (!environment.production) {
          res = [{
            "taskID": "1910",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "SCHEDULED",
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
            "taskID": "1934",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.755+0100",
            "updatedTime": "2022-03-15T19:39:01.027+0100",
            "scheduledTime": "2022-03-15T19:38:00.942+0100",
            "processingStartTime": "2022-03-15T19:39:00.771+0100",
            "processingEndTime": "2022-03-15T19:39:01.026+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.150446237572158364218250943566632959728",
            "NumberOfInstances": "1007",
            "Modality": ["CT", "PR", "SR"]
          }, {
            "taskID": "1918",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.585+0100",
            "updatedTime": "2022-03-15T19:39:00.863+0100",
            "scheduledTime": "2022-03-15T19:38:00.873+0100",
            "processingStartTime": "2022-03-15T19:39:00.717+0100",
            "processingEndTime": "2022-03-15T19:39:00.861+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.133790264388916295901178041223591125703",
            "NumberOfInstances": "310",
            "Modality": ["CT", "PR", "KO"]
          }, {
            "taskID": "1922",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.634+0100",
            "updatedTime": "2022-03-15T19:39:00.781+0100",
            "scheduledTime": "2022-03-15T19:38:00.813+0100",
            "processingStartTime": "2022-03-15T19:39:00.688+0100",
            "processingEndTime": "2022-03-15T19:39:00.780+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.38075169170603874823282185203405259704",
            "NumberOfInstances": "7",
            "Modality": ["PR", "DX"]
          }, {
            "taskID": "1930",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.714+0100",
            "updatedTime": "2022-03-15T19:39:00.735+0100",
            "scheduledTime": "2022-03-15T19:38:00.741+0100",
            "processingStartTime": "2022-03-15T19:39:00.671+0100",
            "processingEndTime": "2022-03-15T19:39:00.734+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.73758429535919582411283778014440169399",
            "NumberOfInstances": "3",
            "Modality": ["PR", "SR", "CR"]
          }, {
            "taskID": "1926",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.675+0100",
            "updatedTime": "2022-03-15T19:39:00.729+0100",
            "scheduledTime": "2022-03-15T19:38:00.722+0100",
            "processingStartTime": "2022-03-15T19:39:00.657+0100",
            "processingEndTime": "2022-03-15T19:39:00.728+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.244811086690625888516433847572724695651",
            "NumberOfInstances": "3",
            "Modality": ["CR"]
          }, {
            "taskID": "1946",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.929+0100",
            "updatedTime": "2022-03-15T19:39:00.707+0100",
            "scheduledTime": "2022-03-15T19:38:00.700+0100",
            "processingStartTime": "2022-03-15T19:39:00.638+0100",
            "processingEndTime": "2022-03-15T19:39:00.705+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.186478623465738853816986648905599291667",
            "NumberOfInstances": "1",
            "Modality": ["CR"]
          }, {
            "taskID": "1938",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "batchID": "ATS Prefetch Priors on Store[2.25.253254299183063559800543717906499910894]",
            "failures": "11",
            "createdTime": "2022-03-15T01:20:51.863+0100",
            "updatedTime": "2022-03-15T19:39:00.706+0100",
            "scheduledTime": "2022-03-15T19:38:00.699+0100",
            "processingStartTime": "2022-03-15T19:39:00.594+0100",
            "processingEndTime": "2022-03-15T19:39:00.703+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.153656090606480794239864790187400375890",
            "NumberOfInstances": "1",
            "Modality": ["CR"]
          }, {
            "taskID": "1900",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-10T13:15:58.517+0100",
            "updatedTime": "2022-03-10T14:46:56.450+0100",
            "scheduledTime": "2022-03-10T14:45:56.415+0100",
            "processingStartTime": "2022-03-10T14:46:56.191+0100",
            "processingEndTime": "2022-03-10T14:46:56.449+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.3.6.1.4.1.37873.1.98.95913952367855087503341730515226595193",
            "NumberOfInstances": "2468",
            "Modality": ["CT"]
          }, {
            "taskID": "1905",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-10T13:18:21.966+0100",
            "updatedTime": "2022-03-10T14:35:56.325+0100",
            "scheduledTime": "2022-03-10T14:34:56.331+0100",
            "processingStartTime": "2022-03-10T14:35:56.193+0100",
            "processingEndTime": "2022-03-10T14:35:56.324+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.2.826.0.1.3680043.2.1352.10.168.123.110.2834470",
            "NumberOfInstances": "103",
            "Modality": ["MR"]
          }, {
            "taskID": "1889",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-05T16:48:56.337+0100",
            "updatedTime": "2022-03-05T18:05:56.300+0100",
            "scheduledTime": "2022-03-05T18:04:56.323+0100",
            "processingStartTime": "2022-03-05T18:05:56.213+0100",
            "processingEndTime": "2022-03-05T18:05:56.299+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.2.124.113532.12.10565.9380.20171220.90627.17583712",
            "NumberOfInstances": "0"
          }, {
            "taskID": "1895",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-03-05T16:48:56.559+0100",
            "updatedTime": "2022-03-05T18:05:56.299+0100",
            "scheduledTime": "2022-03-05T18:04:56.322+0100",
            "processingStartTime": "2022-03-05T18:05:56.170+0100",
            "processingEndTime": "2022-03-05T18:05:56.298+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.2.124.113532.80.22166.36561.20181217.113442.21320",
            "NumberOfInstances": "0"
          }, {
            "taskID": "1806",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-02-25T16:16:40.377+0100",
            "updatedTime": "2022-03-03T13:07:56.444+0100",
            "scheduledTime": "2022-03-03T13:06:56.437+0100",
            "processingStartTime": "2022-03-03T13:07:56.168+0100",
            "processingEndTime": "2022-03-03T13:07:56.443+0100",
            "errorMessage": "RESTEASY004655: Unable to invoke request: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.229975568262236341440816121223809588447",
            "NumberOfInstances": "2958",
            "Modality": ["CT", "SR"]
          }, {
            "taskID": "1757",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "FAILED",
            "failures": "11",
            "createdTime": "2022-02-25T15:59:25.587+0100",
            "updatedTime": "2022-02-25T17:16:11.921+0100",
            "scheduledTime": "2022-02-25T17:15:13.689+0100",
            "processingStartTime": "2022-02-25T17:16:11.125+0100",
            "processingEndTime": "2022-02-25T17:16:11.921+0100",
            "errorMessage": "HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.314099000311973995718493894996536932361",
            "NumberOfInstances": "0"
          }, {
            "taskID": "1572",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "batchID": "ATS Prefetch Priors on Store[1.2.276.0.37.1.406.201712.240110]",
            "createdTime": "2022-02-08T18:45:29.664+0100",
            "updatedTime": "2022-02-08T18:45:49.821+0100",
            "scheduledTime": "2022-02-08T18:45:29.489+0100",
            "processingStartTime": "2022-02-08T18:45:48.149+0100",
            "processingEndTime": "2022-02-08T18:45:49.821+0100",
            "outcomeMessage": "Query retrieved 1 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 3 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.109066430802510762536912094273354916506",
            "NumberOfInstances": "1",
            "Modality": ["KO"]
          }, {
            "taskID": "1372",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "createdTime": "2022-01-26T11:19:42.244+0100",
            "updatedTime": "2022-01-26T11:20:52.979+0100",
            "scheduledTime": "2022-01-26T11:20:42.243+0100",
            "processingStartTime": "2022-01-26T11:20:52.407+0100",
            "processingEndTime": "2022-01-26T11:20:52.979+0100",
            "outcomeMessage": "Query retrieved 1 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 3 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.3.12.2.1107.5.8.3.485251.834954.83838049.2020073010062484",
            "NumberOfInstances": "1",
            "Modality": ["KO"]
          }, {
            "taskID": "1349",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "failures": "2",
            "createdTime": "2022-01-26T11:05:57.309+0100",
            "updatedTime": "2022-01-26T11:10:30.402+0100",
            "scheduledTime": "2022-01-26T11:09:30.745+0100",
            "processingStartTime": "2022-01-26T11:10:29.889+0100",
            "processingEndTime": "2022-01-26T11:10:30.402+0100",
            "errorMessage": "HTTP 404 Not Found",
            "outcomeMessage": "Query retrieved 2 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 1 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.3.12.2.1107.5.8.3.485251.834954.83838049.2020073010062484",
            "NumberOfInstances": "27",
            "Modality": ["CT"]
          }, {
            "taskID": "1318",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "createdTime": "2022-01-21T15:29:10.379+0100",
            "updatedTime": "2022-01-21T15:30:32.111+0100",
            "scheduledTime": "2022-01-21T15:30:10.909+0100",
            "processingStartTime": "2022-01-21T15:30:29.868+0100",
            "processingEndTime": "2022-01-21T15:30:32.110+0100",
            "outcomeMessage": "Query retrieved 1 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 3 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "2.25.109066430802510762536912094273354916506",
            "NumberOfInstances": "1",
            "Modality": ["KO"]
          }, {
            "taskID": "1336",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "createdTime": "2022-01-21T15:29:11.011+0100",
            "updatedTime": "2022-01-21T15:30:31.941+0100",
            "scheduledTime": "2022-01-21T15:30:11.010+0100",
            "processingStartTime": "2022-01-21T15:30:29.898+0100",
            "processingEndTime": "2022-01-21T15:30:31.941+0100",
            "outcomeMessage": "Query retrieved 2 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 3 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.2.4.0.13.1.432252867.1552278.1",
            "NumberOfInstances": "1",
            "Modality": ["KO"]
          }, {
            "taskID": "1336",
            "dicomDeviceName": "demoj4c",
            "queue": "Export10",
            "type": "EXPORT",
            "status": "WARNING",
            "createdTime": "2022-01-21T15:29:11.011+0100",
            "updatedTime": "2022-01-21T15:30:31.941+0100",
            "scheduledTime": "2022-01-21T15:30:11.010+0100",
            "processingStartTime": "2022-01-21T15:30:29.898+0100",
            "processingEndTime": "2022-01-21T15:30:31.941+0100",
            "outcomeMessage": "Query retrieved 2 objects by Exporter ATS Prefetch NG - Series WADO Metadata, failed: 3 - HTTP 404 Not Found",
            "LocalAET": "DEMOJ4C",
            "ExporterID": "ATS Prefetch NG - Series WADO Metadata",
            "StudyInstanceUID": "1.2.4.0.13.1.432252867.1552278.1",
            "NumberOfInstances": "1",
            "Modality": ["KO"]
          }];
        }
        if (res && res.length > 0) {
          $this.cfpLoadingBar.complete();
          this.matches = res;
          this.moreTasks = res.length > this.filterObject["limit"];
          if (this.moreTasks) this.matches.splice(this.matches.length - 1, 1);
        } else {
          $this.matches = [];
          $this.cfpLoadingBar.complete();
          this.mainservice.showMsg("No tasks found!");
        }
      }, err => {
        console.log("err", err);
        $this.matches = [];
      });
    } else {
      this.mainservice.showError("No Queue Name selected!");
    }
  }
  getCount() {
    if (this.filterObject.queueName) {
      this.cfpLoadingBar.start();
      this.setFilters();
      this.service.getCount(this.filterObject.queueName, this.filterObject.status, void 0, void 0, this.filterObject.dicomDeviceName, this.filterObject.createdTime, this.filterObject.updatedTime, this.filterObject.batchID, this.filterObject.localAET, this.filterObject.remoteAET, "").subscribe(count => {
        try {
          this.counText = "COUNT " + count.count + "";
        } catch (e) {
          this.counText = "COUNT";
        }
        this.setFilters();
        this.cfpLoadingBar.complete();
      }, err => {
        this.cfpLoadingBar.complete();
        this.httpErrorHandler.handleError(err);
      });
    } else {
      this.mainservice.showError("No Queue Name selected!");
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
  cancel(match) {
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.cancel(this.filterObject.queueName, match.taskID).subscribe(function (res) {
      match.properties.status = "CANCELED";
      $this.cfpLoadingBar.complete();
    }, err => {
      $this.cfpLoadingBar.complete();
      $this.httpErrorHandler.handleError(err);
    });
  }
  reschedule(match) {
    let $this = this;
    this.deviceService.selectParameters(res => {
      if (res) {
        $this.cfpLoadingBar.start();
        let filter = {};
        if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
          filter["newDeviceName"] = res.schema_model.newDeviceName;
        }
        if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
          filter["scheduledTime"] = res.schema_model.scheduledTime;
        }
        this.service.reschedule(this.filterObject.queueName, match.taskID, filter).subscribe(res2 => {
          $this.search(0);
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.cfpLoadingBar.complete();
          $this.httpErrorHandler.handleError(err);
        });
      }
    }, this.devices);
  }
  checkAll(event) {
    console.log("in checkall", event.target.checked);
    this.matches.forEach(match => {
      match.checked = event.target.checked;
    });
  }
  delete(match) {
    let $this = this;
    this.confirm({
      content: "Are you sure you want to delete?"
    }).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.delete(this.filterObject.queueName, match.taskID).subscribe(res => {
          $this.search($this.matches[0].offset);
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.cfpLoadingBar.complete();
          $this.httpErrorHandler.handleError(err);
        });
      }
    }, err => {
      $this.cfpLoadingBar.complete();
      $this.httpErrorHandler.handleError(err);
    });
  }
  executeAll(mode) {
    this.confirm({
      content: "Are you sure you want to " + Globalvar.getActionText(mode) + " selected entries?"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        this.matches.forEach(match => {
          if (match.selected) {
            this.service[mode](this.filterObject.queueName, match.taskID).subscribe(res => {}, err => {
              this.httpErrorHandler.handleError(err);
            });
          }
        });
        setTimeout(() => {
          if (mode === "delete") {
            this.search(this.matches[0].offset || 0);
          } else {
            this.search(0);
          }
          this.cfpLoadingBar.complete();
        }, 300);
      }
    });
  }
  getQueueDescriptionFromName(queuename) {
    let description;
    forEach_default(this.queues, (m, i) => {
      if (m.name == queuename) {
        description = m.description;
      }
    });
    return description;
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
  initQuery() {
    let $this = this;
    this.cfpLoadingBar.start();
    this.getLocalAEs();
    this.getRemoteAEs();
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue`).subscribe(res => {
      $this.getDevices();
      $this.queues = res;
      if (!this.urlParam && !this.filterObject.queueName) this.filterObject.queueName = res[0].name;
      $this.cfpLoadingBar.complete();
    });
  }
  setFilters() {
    this.filterSchema = j4care.prepareFlatFilterObject(this.service.getFilterSchema(this.queues, this.devices, this.localAETs, this.remoteAETs, this.counText), 3);
    if (this.urlParam) {
      this.filterObject["queueName"] = this.filterObject["queueName"] || "Export";
      this.filterObject["orderby"] = this.filterObject["orderby"] || "-updatedTime";
    }
  }
  getDevices() {
    this.cfpLoadingBar.start();
    this.service.getDevices().subscribe(devices => {
      this.cfpLoadingBar.complete();
      this.devices = j4care.mapDevicesToDropdown(devices.filter(dev => dev.hasArcDevExt), device => new SelectDropdown(device.dicomDeviceName, device.dicomDeviceName, device.dicomDescription, device.dicomDescription ? `${device.dicomDescription} ( ${device.dicomDeviceName} )` : device.dicomDeviceName));
      this.setFilters();
      if (this.urlParam && Object.keys(this.urlParam).length > 0) this.search(0);
    }, err => {
      this.cfpLoadingBar.complete();
      console.error("Could not get devices", err);
    });
  }
  getRemoteAEs() {
    this.aeListService.getAes().subscribe(response => {
      this.remoteAETs = response;
    });
  }
  getLocalAEs() {
    this.aeListService.getAets().subscribe(response => {
      this.localAETs = response;
    });
  }
  ngOnDestroy() {
    if (this.timer.started) {
      this.timer.started = false;
      clearInterval(this.refreshInterval);
    }
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: QueuesService
}, {
  type: AppService
}, {
  type: LoadingBarService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: HttpErrorHandler
}, {
  type: ActivatedRoute
}, {
  type: DevicesService
}, {
  type: AeListService
}, {
  type: PermissionService
}], _a);
QueuesComponent = __decorate([Component({
  selector: "app-queues",
  template: queues_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, FormsModule, MatProgressSpinner, MatSelect, MatOption, PermissionDirective, TableGeneratorComponent, CommonModule],
  standalone: true
})], QueuesComponent);
export { QueuesComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/