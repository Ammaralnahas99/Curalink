import { DiffMonitorService } from "./chunk-XQPDGJ2C.js";
import { CsvUploadComponent } from "./chunk-IN4Z3BRU.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-A3KYGHL3.js";
import "./chunk-CJ4Z3CIK.js";
import { AeListService, ConfirmComponent, DevicesService, FilterGeneratorComponent, MatOption, MatSelect } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, PermissionService, Validators, environment } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, CommonModule, Component, Globalvar, HttpErrorHandler, KeycloakService, MatDialog, NgClass, ViewContainerRef, __decorate, cloneDeep_default, forkJoin, hasIn_default, j4care, map } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\diff-monitor\diff-monitor.component.html
var diff_monitor_component_default = `<div class="main_content queues monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="@@diff_monitoring">Diff Monitoring</h2>\r
        <div class="filter_line" (keyup)="keyUp($event)">\r
            <div class="filter_block">\r
                <filter-generator [schema]="filterSchema" [model]="filterObject" (submit)="onSubmit($event)" (onChange)="onFormChange($event)" [filterTreeHeight]="3"></filter-generator>\r
                <div class="filter" *ngIf="statusValues">\r
                    <div class="filter_block auto_reloader">\r
                        <table>\r
                            <tr *ngFor="let status of Object.keys(statusValues)" [ngClass]="{'gray':statusValues[status]?.count == '0','red':statusValues[status]?.count=='!'}">\r
                                <td>{{status}}:</td>\r
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
            <div class="filter single_block" [permission]="{id:'action-monitoring->diff_monitor-all_action',param:'visible'}">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <div (click)="downloadCsv()" class="w45percent csv_button"><span class="custom_icon csv_icon"></span><span class="text" i18n="@@download_csv">Download CSV</span></div>\r
                        <div (click)="uploadCsv()" class="w45percent csv_button"><span class="material-icons">file_upload</span><span class="text" i18n="@@upload_csv">Upload CSV</span></div>\r
                    </div>\r
                </div>\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <mat-select [(ngModel)]="allAction" i18n-placeholder="@@placeholder.all_actions" placeholder="All actions" (selectionChange)="allActionChanged($event)" floatPlaceholder="never">\r
                            <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsOptions">{{actions.label}}</mat-option>\r
                        </mat-select>\r
<!--                        <div class="checkbox_button pull-left" [ngClass]="{'active':batchGrouped}"><mat-checkbox [(ngModel)]="batchGrouped" (ngModelChange)="tasks = []" i18n="@@batch_id_grouped">Batch ID grouped</mat-checkbox></div>   -->\r
                        <label for="checkbox" class="checkbox_button pull-right"   [ngClass]="{'active':batchGrouped}">\r
                            <input id="checkbox" [(ngModel)]="batchGrouped" (ngModelChange)="tasks = []" type="checkbox">\r
                            <span i18n="@@batch_id_grouped">Batch ID grouped</span>\r
                        </label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div>\r
            <div class="left_arrow arrow"  *ngIf="tasks && tasks.length && tasks.length > 0" [ngClass]="{'active':filterObject.offset > 0}" (click)="prev()"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
            <div class="right_arrow arrow" *ngIf="tasks && tasks.length && tasks.length > 0" [ngClass]="{'active':moreTasks}" (click)="next()"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
            <table-generator *ngIf="!batchGrouped && tableConfigNormal && tasks && tasks.length && tasks.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigNormal" [models]="tasks" (tableMouseEnter)="tableMouseEnter()" (tableMouseLeave)="tableMouseLeave()"></table-generator>\r
            <table-generator *ngIf="batchGrouped && tableConfigGrouped && tasks && tasks.length && tasks.length > 0" [stringifyDetailAttributes]="true" [config]="tableConfigGrouped" [models]="tasks" (tableMouseEnter)="tableMouseEnter()" (tableMouseLeave)="tableMouseLeave()"></table-generator>\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\monitoring\diff-monitor\diff-monitor.component.scss
var diff_monitor_component_default2 = "/* src/app/monitoring/diff-monitor/diff-monitor.component.scss */\n";

// src/app/monitoring/diff-monitor/diff-monitor.component.ts
var _a;
var DiffMonitorComponent = (_a = class {
  constructor(service, mainservice, route, cfpLoadingBar, aeListService, httpErrorHandler, viewContainerRef, dialog, permissionService, deviceService, _keycloakService) {
    this.service = service;
    this.mainservice = mainservice;
    this.route = route;
    this.cfpLoadingBar = cfpLoadingBar;
    this.aeListService = aeListService;
    this.httpErrorHandler = httpErrorHandler;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.permissionService = permissionService;
    this.deviceService = deviceService;
    this._keycloakService = _keycloakService;
    this.filterObject = {};
    this.filterSchema = [];
    this.batchGrouped = false;
    this.tasks = [];
    this.statusValues = {};
    this.interval = 10;
    this.timer = {
      started: false,
      startText: "Start Auto Refresh",
      stopText: "Stop Auto Refresh"
    };
    this.Object = Object;
    this.filterTreeHeight = 3;
    this.tableHovered = false;
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
    this.service.statusValues().forEach(val => {
      this.statusValues[val.value] = {
        count: 0,
        loader: false
      };
    });
    this.filterObject = {
      limit: 20,
      offset: 0
    };
    forkJoin(this.aeListService.getAes().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "external"))), this.aeListService.getAets().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "internal"))), this.service.getDevices()).subscribe(response => {
      this.aes = j4care.extendAetObjectWithAlias(response[0]).map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      });
      this.aets = j4care.extendAetObjectWithAlias(response[1]).map(ae => {
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
      this.setTableSchema();
    });
    this.onFormChange(this.filterObject);
  }
  onFormChange(filters) {
    this.setTableSchema();
  }
  initSchema() {
    this.filterSchema = j4care.prepareFlatFilterObject(this.service.getFormSchema(this.aes, this.aets, "COUNT " + (this.count || this.count == 0 ? this.count : "") + "", this.devices), 3);
    if (this.urlParam) this.filterObject["orderby"] = "-updatedTime";
  }
  setTableSchema() {
    this.tableConfigNormal = {
      table: j4care.calculateWidthOfTable(this.service.getTableColumns(this, this.action, {
        filterObject: this.filterObject
      })),
      filter: this.filterObject
    };
    this.tableConfigGrouped = {
      table: j4care.calculateWidthOfTable(this.service.getTableBatchGroupedColumns(e => {
        this.showDetails(e);
      })),
      filter: this.filterObject
    };
  }
  allActionChanged(e) {
    let text = "Are you sure, you want to " + Globalvar.getActionText(this.allAction) + " all matching tasks?";
    let filter = Object.assign({}, this.filterObject);
    delete filter["limit"];
    delete filter["offset"];
    this.confirm({
      content: text
    }).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        switch (this.allAction) {
          case "cancel":
            this.service.cancelAll(this.filterObject).subscribe(res => {
              this.mainservice.showMsg("" + res.count + " tasks deleted successfully!");
              this.cfpLoadingBar.complete();
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
          case "reschedule":
            this.cfpLoadingBar.complete();
            this.deviceService.selectParametersForMatching(res => {
              if (res) {
                this.cfpLoadingBar.start();
                let filter2 = Object.assign({}, this.filterObject);
                if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
                  filter2["newDeviceName"] = res.schema_model.newDeviceName;
                }
                if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
                  filter2["scheduledTime"] = res.schema_model.scheduledTime;
                }
                delete filter2["limit"];
                delete filter2["offset"];
                this.service.rescheduleAll(filter2).subscribe(res2 => {
                  this.mainservice.showMsg("" + res2.count + " tasks rescheduled successfully!");
                  this.cfpLoadingBar.complete();
                }, err => {
                  this.cfpLoadingBar.complete();
                  this.httpErrorHandler.handleError(err);
                });
              }
            }, this.devices);
            break;
          case "delete":
            this.deleteAllTasks(this.filterObject);
            break;
        }
        this.cfpLoadingBar.complete();
      }
      this.allAction = "";
      this.allAction = void 0;
    });
  }
  onSubmit(e) {
    console.log("e", e);
    if (e.id) {
      if (e.id === "search") {
        let filter = Object.assign({}, this.filterObject);
        if (filter["limit"]) filter["limit"]++;
        this.getDiffTasks(filter);
      }
      if (e.id === "count") {
        let filter = Object.assign({}, this.filterObject);
        delete filter["limit"];
        delete filter["offset"];
        this.getDiffTasksCount(filter);
      }
    }
  }
  getDiffTasks(filter) {
    this.cfpLoadingBar.start();
    this.tasks = [];
    this.service.getDiffTask(filter, this.batchGrouped).subscribe(tasks => {
      if (!environment.production) {
        if (this.batchGrouped) {
          tasks = [{
            "batchID": "test2",
            "tasks": {
              "warning": "1"
            },
            "dicomDeviceName": ["dcm4chee-arc"],
            "LocalAET": ["DCM4CHEE"],
            "PrimaryAET": ["DCM4CHEE"],
            "SecondaryAET": ["DEVJ4C"],
            "comparefield": ["patient"],
            "checkMissing": ["false"],
            "checkDifferent": ["true"],
            "matches": 31,
            "different": 9,
            "createdTimeRange": ["2022-03-25T10:17:29.723-0600", "2022-03-25T10:17:29.723-0600"],
            "updatedTimeRange": ["2022-03-25T10:17:30.995-0600", "2022-03-25T10:17:30.995-0600"],
            "scheduledTimeRange": ["2022-03-25T10:17:29.721-0600", "2022-03-25T10:17:29.721-0600"],
            "processingStartTimeRange": ["2022-03-25T10:17:29.790-0600", "2022-03-25T10:17:29.790-0600"],
            "processingEndTimeRange": ["2022-03-25T10:17:30.994-0600", "2022-03-25T10:17:30.994-0600"]
          }, {
            "batchID": "2221712246",
            "tasks": {
              "warning": "1"
            },
            "dicomDeviceName": ["dcm4chee-arc"],
            "LocalAET": ["DCM4CHEE"],
            "PrimaryAET": ["DCM4CHEE"],
            "SecondaryAET": ["DEVJ4C"],
            "comparefield": ["patient"],
            "checkMissing": ["false"],
            "checkDifferent": ["true"],
            "matches": 31,
            "different": 9,
            "createdTimeRange": ["2022-03-17T12:02:47.661-0600", "2022-03-17T12:02:47.661-0600"],
            "updatedTimeRange": ["2022-03-17T12:02:49.070-0600", "2022-03-17T12:02:49.070-0600"],
            "scheduledTimeRange": ["2022-03-17T12:02:47.661-0600", "2022-03-17T12:02:47.661-0600"],
            "processingStartTimeRange": ["2022-03-17T12:02:47.691-0600", "2022-03-17T12:02:47.691-0600"],
            "processingEndTimeRange": ["2022-03-17T12:02:49.069-0600", "2022-03-17T12:02:49.069-0600"]
          }];
        } else {
          tasks = [{
            "taskID": "63",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "DiffTasks",
            "type": "DIFF",
            "status": "WARNING",
            "createdTime": "2022-03-17T12:02:47.661-0600",
            "updatedTime": "2022-03-17T12:02:49.070-0600",
            "scheduledTime": "2022-03-17T12:02:47.661-0600",
            "processingStartTime": "2022-03-17T12:02:47.691-0600",
            "processingEndTime": "2022-03-17T12:02:49.069-0600",
            "outcomeMessage": "31 studies compared, different: 9",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/diff/DEVJ4C/studies",
            "LocalAET": "DCM4CHEE",
            "PrimaryAET": "DCM4CHEE",
            "SecondaryAET": "DEVJ4C",
            "QueryString": "queue=true&batchID=2221712246&comparefield=patient&priority=0",
            "checkDifferent": true,
            "comparefield": "patient",
            "matches": 31,
            "different": 9
          }, {
            "taskID": "64",
            "dicomDeviceName": "dcm4chee-arc",
            "queue": "DiffTasks",
            "type": "DIFF",
            "status": "WARNING",
            "batchID": "2221712243",
            "createdTime": "2022-03-17T12:06:47.661-0600",
            "updatedTime": "2022-03-17T12:07:49.070-0600",
            "scheduledTime": "2022-03-17T12:08:47.661-0600",
            "processingStartTime": "2022-03-17T12:08:47.691-0600",
            "processingEndTime": "2022-03-17T12:08:49.069-0600",
            "outcomeMessage": "31 studies compared, different: 9",
            "RequesterUserID": "admin",
            "RequesterHostName": "192.168.0.87",
            "RequestURI": "http://shefki-lifebook:8080/dcm4chee-arc/aets/DCM4CHEE/dimse/DCM4CHEE/diff/DEVJ4C/studies",
            "LocalAET": "DCM4CHEE",
            "PrimaryAET": "DCM4CHEE",
            "SecondaryAET": "DEVJ4C",
            "QueryString": "queue=true&batchID=2221712246&comparefield=patient&priority=0",
            "checkDifferent": true,
            "comparefield": "patient",
            "matches": 31,
            "different": 8
          }];
        }
      }
      if (tasks && tasks.length && tasks.length > 0) {
        if (this.batchGrouped) {
          this.tasks = tasks.map(taskObject => {
            if (hasIn_default(taskObject, "tasks")) {
              let taskPrepared = [];
              Globalvar.TASK_NAMES.forEach(task => {
                if (taskObject.tasks[task]) taskPrepared.push({
                  [task]: taskObject.tasks[task]
                });
              });
              taskObject.tasks = taskPrepared;
            }
            return taskObject;
          });
        } else {
          this.tasks = tasks;
        }
        this.moreTasks = tasks.length > this.filterObject["limit"];
        if (this.moreTasks) this.tasks.splice(this.tasks.length - 1, 1);
      } else {
        this.mainservice.showMsg("No diff tasks found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  deleteAllTasks(filter) {
    this.service.deleteAll(filter).subscribe(res => {
      this.mainservice.showMsg("" + res.deleted + " tasks deleted successfully!");
      this.cfpLoadingBar.complete();
      let filters = Object.assign({}, this.filterObject);
      this.getDiffTasks(filters);
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  action(mode, match) {
    console.log("in action", mode, "match", match);
    if (mode && match && match.taskID) {
      this.confirm({
        content: "Are you sure you want to " + Globalvar.getActionText(mode) + " this task?"
      }).subscribe(ok => {
        if (ok) {
          switch (mode) {
            case "reschedule":
              this.deviceService.selectParameters(res => {
                if (res) {
                  this.cfpLoadingBar.start();
                  let filter = {};
                  if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
                    filter["newDeviceName"] = res.schema_model.newDeviceName;
                  }
                  if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
                    filter["scheduledTime"] = res.schema_model.scheduledTime;
                  }
                  this.service.reschedule(match.taskID, filter).subscribe(res2 => {
                    this.getDiffTasks(this.filterObject["offset"] || 0);
                    this.cfpLoadingBar.complete();
                    this.mainservice.showMsg("Task rescheduled successfully!");
                  }, err => {
                    this.cfpLoadingBar.complete();
                    this.httpErrorHandler.handleError(err);
                  });
                }
              }, this.devices);
              break;
            case "delete":
              this.cfpLoadingBar.start();
              this.service.delete(match.taskID).subscribe(res => {
                this.cfpLoadingBar.complete();
                this.getDiffTasks(this.filterObject["offset"] || 0);
                this.mainservice.showMsg("Task deleted successfully!");
              }, err => {
                this.cfpLoadingBar.complete();
                this.httpErrorHandler.handleError(err);
              });
              break;
            case "cancel":
              this.cfpLoadingBar.start();
              this.service.cancel(match.taskID).subscribe(res => {
                match.status = "CANCELED";
                this.cfpLoadingBar.complete();
                this.mainservice.showMsg("Task canceled successfully!");
              }, err => {
                this.cfpLoadingBar.complete();
                console.log("cancleerr", err);
                this.httpErrorHandler.handleError(err);
              });
              break;
            default:
              console.error("Not knowen mode=", mode);
          }
        }
      });
    }
  }
  getDiffTasksCount(filters) {
    this.cfpLoadingBar.start();
    this.service.getDiffTasksCount(filters).subscribe(res => {
      try {
        this.count = res.count;
      } catch (e) {
        this.count = "";
      }
      this.initSchema();
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  showDetails(e) {
    console.log("in show details", e);
    this.batchGrouped = false;
    this.filterObject["batchID"] = e.batchID;
    let filter = Object.assign({}, this.filterObject);
    if (filter["limit"]) filter["limit"]++;
    this.getDiffTasks(filter);
  }
  next() {
    if (this.moreTasks) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 + this.filterObject["limit"] * 1;
        filter["limit"]++;
      }
      this.getDiffTasks(filter);
    }
  }
  prev() {
    if (this.filterObject["offset"] > 0) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 - this.filterObject["limit"] * 1;
      this.getDiffTasks(filter);
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
  tableMouseEnter() {
    this.tableHovered = true;
  }
  tableMouseLeave() {
    this.tableHovered = false;
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
        delete filterClone["offset"];
        delete filterClone["limit"];
        if (!this.mainservice.global.notSecure) {
          j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&access_token=${token}&${this.mainservice.param(filterClone)}`, "diff.csv");
        } else {
          j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&${this.mainservice.param(filterClone)}`, "diff.csv");
        }
      });
    });
  }
  uploadCsv() {
    this.dialogRef = this.dialog.open(CsvUploadComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.aes = this.aes;
    this.dialogRef.componentInstance.params = {
      LocalAET: this.filterObject["LocalAET"] || "",
      PrimaryAET: this.filterObject["PrimaryAET"] || "",
      SecondaryAET: this.filterObject["SecondaryAET"] || "",
      batchID: this.filterObject["batchID"] || "",
      formSchema: [{
        tag: "input",
        type: "checkbox",
        filterKey: "semicolon",
        description: "Use semicolon as delimiter"
      }, {
        tag: "select",
        options: this.aets,
        showStar: true,
        filterKey: "LocalAET",
        description: "Local AET",
        placeholder: "Local AET",
        validation: Validators.required
      }, {
        tag: "select",
        options: this.aes,
        showStar: true,
        filterKey: "PrimaryAET",
        description: "Primary AET",
        placeholder: "Primary AET",
        validation: Validators.required
      }, {
        tag: "select",
        options: this.aes,
        showStar: true,
        filterKey: "SecondaryAET",
        description: "Secondary AET",
        placeholder: "Secondary AET",
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
        tag: "input",
        type: "checkbox",
        filterKey: "missing",
        description: "Check Missing"
      }, {
        tag: "input",
        type: "checkbox",
        filterKey: "different",
        description: "Check Different"
      }, {
        tag: "input",
        type: "text",
        filterKey: "comparefield",
        description: "Compare field",
        placeholder: "Compare field"
      }, {
        tag: "input",
        type: "checkbox",
        filterKey: "ForceQueryByStudyUID",
        description: "Force query by Study UID"
      }, {
        tag: "input",
        type: "text",
        filterKey: "SplitStudyDateRange",
        description: "Split Study Date Range",
        placeholder: "Split Study Date Range as per duration format"
      }, {
        tag: "input",
        type: "number",
        filterKey: "priority",
        description: "Priority",
        placeholder: "Priority"
      }, {
        tag: "input",
        type: "text",
        filterKey: "batchID",
        description: "Batch ID",
        placeholder: "Batch ID"
      }],
      prepareUrl: filter => {
        let clonedFilters = {};
        if (filter["missing"]) clonedFilters["missing"] = filter["missing"];
        if (filter["different"]) clonedFilters["different"] = filter["different"];
        if (filter["compareField"]) clonedFilters["compareField"] = filter["compareField"];
        if (filter["ForceQueryByStudyUID"]) clonedFilters["ForceQueryByStudyUID"] = filter["ForceQueryByStudyUID"];
        if (filter["SplitStudyDateRange"]) clonedFilters["SplitStudyDateRange"] = filter["SplitStudyDateRange"];
        if (filter["priority"]) clonedFilters["priority"] = filter["priority"];
        if (filter["batchID"]) clonedFilters["batchID"] = filter["batchID"];
        return `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${filter.LocalAET}/dimse/${filter.PrimaryAET}/diff/${filter.SecondaryAET}/studies/csv:${filter.field}${j4care.getUrlParams(clonedFilters)}`;
      }
    };
    this.dialogRef.afterClosed().subscribe(ok => {
      if (ok) {
        console.log("ok", ok);
      }
    });
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
  getCounts() {
    let filters = Object.assign({}, this.filterObject);
    if (!this.tableHovered) this.getDiffTasks(filters);
    Object.keys(this.statusValues).forEach(status => {
      filters["status"] = status;
      this.statusValues[status].loader = true;
      this.service.getDiffTasksCount(filters).subscribe(count => {
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
  keyUp(e) {
    console.log("e", e);
    if (e.which === 13) {
      this.getCounts();
    }
  }
  ngOnDestroy() {
    if (this.timer.started) {
      this.timer.started = false;
      clearInterval(this.refreshInterval);
    }
  }
}, _a.ctorParameters = () => [{
  type: DiffMonitorService
}, {
  type: AppService
}, {
  type: ActivatedRoute
}, {
  type: LoadingBarService
}, {
  type: AeListService
}, {
  type: HttpErrorHandler
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: PermissionService
}, {
  type: DevicesService
}, {
  type: KeycloakService
}], _a);
DiffMonitorComponent = __decorate([Component({
  selector: "diff-monitor",
  template: diff_monitor_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, NgClass, FormsModule, MatProgressSpinner, TableGeneratorComponent, MatSelect, MatOption, PermissionDirective, CommonModule],
  standalone: true,
  styles: [diff_monitor_component_default2]
})], DiffMonitorComponent);
export { DiffMonitorComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/