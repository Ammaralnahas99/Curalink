import { StorageVerificationService } from "./chunk-PIKMBWPH.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-A3KYGHL3.js";
import "./chunk-CJ4Z3CIK.js";
import { AeListService, ConfirmComponent, DevicesService, FilterGeneratorComponent, MatOption, MatSelect } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, PermissionService, environment } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, Globalvar, HttpErrorHandler, KeycloakService, MatDialog, NgClass, ViewContainerRef, __decorate, cloneDeep_default, forkJoin, hasIn_default, j4care, map } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\storage-verification\storage-verification.component.html
var storage_verification_component_default = `<div class="main_content queues monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <div class="block">\r
          <h2 class="pointer" (click)="openedBlock = 'monitor'" i18n="@@storage_verification">Storage Verification</h2>\r
          <div class="block_content" *ngIf="openedBlock === 'monitor'">\r
            <div class="filter_line">\r
              <div class="filter_block">\r
                <filter-generator [schema]="filterSchema" filterIdTemplate="storage-verification-filter" [model]="filterObject" (submit)="onSubmit($event)" (onChange)="onFormChange($event)"></filter-generator>\r
                <div class="filter">\r
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
                        <input type="text"  i18n-placeholder="@@placeholder.interval" placeholder="Interval" [(ngModel)]="interval">\r
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
              <div class="filter_block">\r
                <div class="filter single_block" [permission]="{id:'action-monitoring->external_retrieve-all_action',param:'visible'}">\r
                  <div class="filter_block">\r
                    <div class="line">\r
                      <div (click)="downloadCsv()" class="w45percent csv_button"><span class="custom_icon csv_icon"></span><span class="text" i18n="@@download_csv">Download CSV</span></div>\r
                      <mat-select [(ngModel)]="allAction"  i18n-placeholder="@@placeholder.all_actions" placeholder="All actions" (selectionChange)="allActionChanged($event)" floatPlaceholder="never">\r
                        <mat-option value="{{actions.value}}" *ngFor="let actions of allActionsOptions">{{actions.label}}</mat-option>\r
                      </mat-select>\r
                    </div>\r
                  </div>\r
                  <div class="filter_block">\r
                    <div class="line">\r
                      <!--   <div class="checkbox_button pull-left" [ngClass]="{'active':batchGrouped}"><mat-checkbox [(ngModel)]="batchGrouped" (ngModelChange)="storageVerifications = [];filterObject.offset = 0" i18n="@@batch_id_grouped">Batch ID grouped</mat-checkbox></div>  -->\r
                      <label for="checkbox" class="checkbox_button pull-left"   [ngClass]="{'active':batchGrouped}">\r
                        <input id="checkbox" [(ngModel)]="batchGrouped" (ngModelChange)="storageVerifications = [];filterObject.offset = 0" type="checkbox">\r
                        <span i18n="@@batch_id_grouped">Batch ID grouped</span>\r
                      </label>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div>\r
              <div class="left_arrow arrow"  *ngIf="storageVerifications && storageVerifications.length && storageVerifications.length > 0" [ngClass]="{'active':filterObject.offset > 0}" (click)="prev()"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
              <div class="right_arrow arrow" *ngIf="storageVerifications && storageVerifications.length && storageVerifications.length > 0" [ngClass]="{'active':moreTasks}" (click)="next()"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
              <table-generator *ngIf="!batchGrouped && tableConfigNormal && storageVerifications && storageVerifications.length && storageVerifications.length > 0" [config]="tableConfigNormal" [stringifyDetailAttributes]="true" [models]="storageVerifications" ></table-generator>\r
              <table-generator *ngIf="batchGrouped && tableConfigGrouped && storageVerifications && storageVerifications.length && storageVerifications.length > 0" [config]="tableConfigGrouped" [stringifyDetailAttributes]="true" [models]="storageVerifications" ></table-generator>\r
            </div>\r
          </div>\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\monitoring\storage-verification\storage-verification.component.scss
var storage_verification_component_default2 = "/* src/app/monitoring/storage-verification/storage-verification.component.scss */\n";

// src/app/monitoring/storage-verification/storage-verification.component.ts
var _a;
var StorageVerificationComponent = (_a = class {
  constructor(cfpLoadingBar, mainservice, aeListService, httpErrorHandler, service, dialog, viewContainerRef, permissionService, deviceService, _keycloakService) {
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.aeListService = aeListService;
    this.httpErrorHandler = httpErrorHandler;
    this.service = service;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.permissionService = permissionService;
    this.deviceService = deviceService;
    this._keycloakService = _keycloakService;
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
    this.openedBlock = "monitor";
    this.triggerFilterSchema = [];
    this.triggerFilterSchemaHidden = [];
    this.triggerFilterObject = {};
    this.showFilter = false;
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
    forkJoin(this.aeListService.getAets().pipe(map(aet => this.permissionService.filterAetDependingOnUiConfig(aet, "internal"))), this.service.getDevices()).subscribe(response => {
      this.localAET = j4care.extendAetObjectWithAlias(response[0]).map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      });
      this.devices = response[1].filter(dev => dev.hasArcDevExt).map(device => {
        return {
          value: device.dicomDeviceName,
          text: device.dicomDeviceName
        };
      });
      this.initSchema();
    });
    this.onFormChange(this.filterObject);
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
  initSchema() {
    this.filterSchema = j4care.prepareFlatFilterObject(this.service.getFilterSchema(this.devices, this.localAET, "COUNT " + (this.count || this.count == 0 ? this.count : "") + ""), 3);
    this.filterObject["orderby"] = "-updatedTime";
    this.triggerFilterSchema = j4care.prepareFlatFilterObject([...Globalvar.STUDY_FILTER_SCHEMA(this.localAET, [], []).filter((filter, i) => {
      return i < 14 && filter.filterKey != "limit";
    }), ...[{
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }, {
      tag: "select",
      options: [{
        value: "DB_RECORD_EXISTS",
        text: "DB_RECORD_EXISTS",
        title: "Check for existence of DB records"
      }, {
        value: "OBJECT_EXISTS",
        text: "OBJECT_EXISTS",
        title: "check if object exists on Storage System"
      }, {
        value: "OBJECT_SIZE",
        text: "OBJECT_SIZE",
        title: "check size of object on Storage System"
      }, {
        value: "OBJECT_FETCH",
        text: "OBJECT_FETCH",
        title: "Fetch object from Storage System"
      }, {
        value: "OBJECT_CHECKSUM",
        text: "OBJECT_CHECKSUM",
        title: "recalculate checksum of object on Storage System"
      }, {
        value: "S3_MD5SUM",
        text: "S3_MD5SUM",
        title: "Check MD5 checksum of object on S3 Storage System"
      }],
      showStar: true,
      filterKey: "storageVerificationPolicy",
      description: "Verification Policy",
      placeholder: "Verification Policy"
    }, {
      tag: "checkbox",
      filterKey: "storageVerificationUpdateLocationStatus",
      text: "Update location",
      description: "Update Location DB"
    }, {
      tag: "checkbox",
      filterKey: "storageVerificationFailed",
      text: "Failed verification",
      description: "Failed storage verification"
    }, {
      tag: "button",
      text: "TRIGGER",
      description: "TRIGGER"
    }]]);
    this.triggerFilterSchemaHidden = j4care.prepareFlatFilterObject([...Globalvar.STUDY_FILTER_SCHEMA(this.localAET, [], [], true), ...Globalvar.STUDY_FILTER_SCHEMA(this.localAET, [], []).filter((filter, i) => {
      return i > 13 && filter.filterKey != "limit";
    })], 3);
    this.setTableSchemas();
  }
  toggleAutoRefresh() {
    this.timer.started = !this.timer.started;
    if (this.timer.started) {
      this.getCounts(true);
      this.refreshInterval = setInterval(() => {
        this.getCounts(true);
      }, this.interval * 1e3);
    } else {
      clearInterval(this.refreshInterval);
    }
  }
  onTriggerSubmit(object) {
    console.log("this.triggerFilterObject", this.triggerFilterObject);
    this.cfpLoadingBar.start();
    if (this.triggerFilterObject["aet"]) {
      let filter = Object.assign({}, this.triggerFilterObject);
      let aet = filter["aet"];
      delete filter["aet"];
      this.service.scheduleStorageVerification(filter, aet).subscribe(res => {
        this.cfpLoadingBar.complete();
        this.mainservice.showMsg("Storage Verification scheduled successfully!");
        setTimeout(() => {
          this.filterObject["batchID"] = filter["batchID"] || this.service.getUniqueID();
          this.batchGrouped = true;
          this.openedBlock = "monitor";
          this.getCounts(true);
        }, 500);
      }, err => {
        this.cfpLoadingBar.complete();
        this.httpErrorHandler.handleError(err);
      });
    } else {
      this.mainservice.showError("Aet is required!");
      this.cfpLoadingBar.complete();
    }
  }
  onSubmit(object) {
    if (hasIn_default(object, "id") && hasIn_default(object, "model")) {
      if (object.id === "submit") {
        let filter = Object.assign({}, this.filterObject);
        if (filter["limit"]) {
          filter["limit"]++;
        }
        this.getTasks(filter);
        this.getCounts(false);
      } else {
        let filter = Object.assign({}, this.filterObject);
        delete filter["limit"];
        delete filter["offset"];
        this.getVerificationCounts(filter);
      }
    }
  }
  getVerificationCounts(filter) {
    this.cfpLoadingBar.start();
    this.service.getSorageVerificationsCount(filter).subscribe(count => {
      try {
        this.count = count.count;
      } catch (e) {
        this.count = "";
      }
      this.initSchema();
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.initSchema();
      this.httpErrorHandler.handleError(err);
    });
  }
  uploadCsv() {}
  allActionChanged(e) {
    let text = "Are you sure, you want to " + Globalvar.getActionText(this.allAction) + " all matching tasks?";
    let filter = Object.assign({}, this.filterObject);
    delete filter.limit;
    delete filter.offset;
    this.confirm({
      content: text
    }).subscribe(ok => {
      if (ok) {
        switch (this.allAction) {
          case "cancel":
            this.cfpLoadingBar.start();
            this.service.cancelAll(this.filterObject).subscribe(res => {
              this.cfpLoadingBar.complete();
              if (hasIn_default(res, "count")) {
                this.mainservice.showMsg("" + res.count + " tasks canceled successfully!");
              } else {
                this.mainservice.showMsg("Tasks canceled successfully!");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
          case "reschedule":
            this.deviceService.selectParametersForMatching(res => {
              if (res) {
                this.cfpLoadingBar.start();
                if (hasIn_default(res, "schema_model.newDeviceName") && res.schema_model.newDeviceName != "") {
                  filter["newDeviceName"] = res.schema_model.newDeviceName;
                }
                if (hasIn_default(res, "schema_model.scheduledTime") && res.schema_model.scheduledTime != "") {
                  filter["scheduledTime"] = res.schema_model.scheduledTime;
                }
                this.service.rescheduleAll(filter).subscribe(res2 => {
                  this.cfpLoadingBar.complete();
                  if (hasIn_default(res2, "count")) {
                    this.mainservice.showMsg("" + res2.count + " tasks rescheduled successfully!");
                  } else {
                    this.mainservice.showMsg("Tasks rescheduled successfully!");
                  }
                }, err => {
                  this.cfpLoadingBar.complete();
                  this.httpErrorHandler.handleError(err);
                });
              }
            }, this.devices);
            break;
          case "delete":
            this.cfpLoadingBar.start();
            this.service.deleteAll(this.filterObject).subscribe(res => {
              this.cfpLoadingBar.complete();
              if (hasIn_default(res, "deleted")) {
                this.mainservice.showMsg("" + res.deleted + " tasks deleted successfully!");
              } else {
                this.mainservice.showMsg("Tasks deleted successfully!");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
        }
        this.cfpLoadingBar.complete();
      }
      this.allAction = "";
      this.allAction = void 0;
    });
  }
  getCounts(getTasks) {
    let filters = Object.assign({}, this.filterObject);
    if (!this.tableHovered && getTasks) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = 0;
        filter["limit"]++;
      }
      this.getTasks(filter);
    }
    Object.keys(this.statusValues).forEach(status => {
      filters.status = status;
      this.statusValues[status].loader = true;
      this.service.getSorageVerificationsCount(filters).subscribe(count => {
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
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "500px"
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
      if (ok) {
        semicolon = true;
      }
      let token;
      this._keycloakService.getToken().subscribe(response => {
        if (!this.mainservice.global.notSecure) {
          token = response.token;
        }
        let filterClone = cloneDeep_default(this.filterObject);
        delete filterClone.offset;
        delete filterClone.limit;
        if (!this.mainservice.global.notSecure) {
          j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&access_token=${token}&${this.mainservice.param(filterClone)}`, "storage_verification.csv");
        } else {
          j4care.downloadFile(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver?accept=text/csv${semicolon ? ";delimiter=semicolon" : ""}&${this.mainservice.param(filterClone)}`, "storage_verification.csv");
        }
      });
    });
  }
  next() {
    if (this.moreTasks) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 + this.filterObject["limit"] * 1;
        filter["limit"]++;
      }
      this.getTasks(filter);
    }
  }
  prev() {
    if (this.filterObject["offset"] > 0) {
      let filter = Object.assign({}, this.filterObject);
      if (filter["limit"]) {
        this.filterObject["offset"] = filter["offset"] = filter["offset"] * 1 - this.filterObject["limit"] * 1;
        filter["limit"]++;
      }
      this.getTasks(filter);
    }
  }
  getTasks(filter) {
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.getSorageVerifications(filter, this.batchGrouped).subscribe(res => {
      $this.cfpLoadingBar.complete();
      if (!environment.production) {
        if (this.batchGrouped) {
          res = [{
            "batchID": "testbatch",
            "tasks": {
              "scheduled": "708"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"]
          }, {
            "batchID": "testbatch",
            "tasks": {
              "scheduled": "521",
              "in-process": "5",
              "completed": "182"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:44:30.503+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"],
            "processingStartTimeRange": ["2022-03-24T19:44:16.034+0100", "2022-03-24T19:44:30.503+0100"],
            "processingEndTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:44:30.348+0100"]
          }, {
            "batchID": "testbatch",
            "tasks": {
              "scheduled": "400",
              "in-process": "3",
              "completed": "305"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:44:51.821+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"],
            "processingStartTimeRange": ["2022-03-24T19:44:16.034+0100", "2022-03-24T19:44:51.634+0100"],
            "processingEndTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:44:51.821+0100"]
          }, {
            "batchID": "testbatch",
            "tasks": {
              "scheduled": "151",
              "in-process": "4",
              "completed": "553"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:45:08.561+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"],
            "processingStartTimeRange": ["2022-03-24T19:44:16.034+0100", "2022-03-24T19:45:08.561+0100"],
            "processingEndTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:45:08.561+0100"]
          }, {
            "batchID": "testbatch",
            "tasks": {
              "scheduled": "11",
              "in-process": "5",
              "completed": "692"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:43:17.517+0100", "2022-03-24T19:45:26.909+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"],
            "processingStartTimeRange": ["2022-03-24T19:44:16.034+0100", "2022-03-24T19:45:26.636+0100"],
            "processingEndTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:45:26.582+0100"]
          }, {
            "batchID": "testbatch",
            "tasks": {
              "completed": "708"
            },
            "dicomDeviceName": ["devj4c"],
            "LocalAET": ["DEVJ4C"],
            "createdTimeRange": ["2022-03-24T19:43:16.534+0100", "2022-03-24T19:43:18.785+0100"],
            "updatedTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:45:28.264+0100"],
            "scheduledTimeRange": ["2022-03-24T19:43:16.513+0100", "2022-03-24T19:43:16.513+0100"],
            "processingStartTimeRange": ["2022-03-24T19:44:16.034+0100", "2022-03-24T19:45:27.754+0100"],
            "processingEndTimeRange": ["2022-03-24T19:44:16.195+0100", "2022-03-24T19:45:28.264+0100"]
          }];
        } else {
          res = [{
            "taskID": "3445",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:19:44.155+0100",
            "updatedTime": "2022-03-17T00:20:37.643+0100",
            "scheduledTime": "2022-03-17T00:19:44.153+0100",
            "processingStartTime": "2022-03-17T00:20:37.582+0100",
            "processingEndTime": "2022-03-17T00:20:37.643+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.226771377810260383099403728946437958202] of Study[uid=2.25.187439577464559836490772088259615969176] for OBJECT_CHECKSUM: - completed: 0, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.187439577464559836490772088259615969176",
            "SeriesInstanceUID": "2.25.226771377810260383099403728946437958202"
          }, {
            "taskID": "3444",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:18:44.058+0100",
            "updatedTime": "2022-03-17T00:19:37.676+0100",
            "scheduledTime": "2022-03-17T00:18:44.056+0100",
            "processingStartTime": "2022-03-17T00:19:37.622+0100",
            "processingEndTime": "2022-03-17T00:19:37.676+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.249319711441696008504058463592875912795] of Study[uid=2.25.283304145802740676259414951321571976120] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.283304145802740676259414951321571976120",
            "SeriesInstanceUID": "2.25.249319711441696008504058463592875912795",
            "completed": "1"
          }, {
            "taskID": "3443",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:18:44.033+0100",
            "updatedTime": "2022-03-17T00:19:37.667+0100",
            "scheduledTime": "2022-03-17T00:18:44.031+0100",
            "processingStartTime": "2022-03-17T00:19:37.581+0100",
            "processingEndTime": "2022-03-17T00:19:37.667+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.2133667457369353508175387852445334811] of Study[uid=2.25.187439577464559836490772088259615969176] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.187439577464559836490772088259615969176",
            "SeriesInstanceUID": "2.25.2133667457369353508175387852445334811",
            "completed": "1"
          }, {
            "taskID": "3442",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:17:43.978+0100",
            "updatedTime": "2022-03-17T00:18:37.741+0100",
            "scheduledTime": "2022-03-17T00:17:43.977+0100",
            "processingStartTime": "2022-03-17T00:18:37.612+0100",
            "processingEndTime": "2022-03-17T00:18:37.741+0100",
            "outcomeMessage": "Commit Storage of Series[uid=1.3.6.1.4.1.37873.1.20.289556855539230578455393093755395983231] of Study[uid=2.25.283304145802740676259414951321571976120] for OBJECT_CHECKSUM: - completed: 2, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.283304145802740676259414951321571976120",
            "SeriesInstanceUID": "1.3.6.1.4.1.37873.1.20.289556855539230578455393093755395983231",
            "completed": "2"
          }, {
            "taskID": "3441",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:16:43.925+0100",
            "updatedTime": "2022-03-17T00:17:37.672+0100",
            "scheduledTime": "2022-03-17T00:16:43.923+0100",
            "processingStartTime": "2022-03-17T00:17:37.608+0100",
            "processingEndTime": "2022-03-17T00:17:37.672+0100",
            "outcomeMessage": "Commit Storage of Series[uid=1.3.6.1.4.1.37873.1.20.247536570020359359774575642363475035667] of Study[uid=2.25.187439577464559836490772088259615969176] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.187439577464559836490772088259615969176",
            "SeriesInstanceUID": "1.3.6.1.4.1.37873.1.20.247536570020359359774575642363475035667",
            "completed": "1"
          }, {
            "taskID": "3437",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.795+0100",
            "updatedTime": "2022-03-17T00:08:38.627+0100",
            "scheduledTime": "2022-03-17T00:07:43.794+0100",
            "processingStartTime": "2022-03-17T00:08:37.701+0100",
            "processingEndTime": "2022-03-17T00:08:38.627+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.273526272782556061765155428536698740654] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 13, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.273526272782556061765155428536698740654",
            "completed": "13"
          }, {
            "taskID": "3440",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.845+0100",
            "updatedTime": "2022-03-17T00:08:38.086+0100",
            "scheduledTime": "2022-03-17T00:07:43.844+0100",
            "processingStartTime": "2022-03-17T00:08:37.902+0100",
            "processingEndTime": "2022-03-17T00:08:38.085+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.251585774989980495668716070036214323625] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.251585774989980495668716070036214323625",
            "completed": "1"
          }, {
            "taskID": "3439",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.829+0100",
            "updatedTime": "2022-03-17T00:08:37.976+0100",
            "scheduledTime": "2022-03-17T00:07:43.828+0100",
            "processingStartTime": "2022-03-17T00:08:37.886+0100",
            "processingEndTime": "2022-03-17T00:08:37.976+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.238791581884223303700761357580968487329] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.238791581884223303700761357580968487329",
            "completed": "1"
          }, {
            "taskID": "3438",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.812+0100",
            "updatedTime": "2022-03-17T00:08:37.968+0100",
            "scheduledTime": "2022-03-17T00:07:43.811+0100",
            "processingStartTime": "2022-03-17T00:08:37.809+0100",
            "processingEndTime": "2022-03-17T00:08:37.968+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.209893573848189194515701669039602952980] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.209893573848189194515701669039602952980",
            "completed": "1"
          }, {
            "taskID": "3436",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.778+0100",
            "updatedTime": "2022-03-17T00:08:37.944+0100",
            "scheduledTime": "2022-03-17T00:07:43.777+0100",
            "processingStartTime": "2022-03-17T00:08:37.666+0100",
            "processingEndTime": "2022-03-17T00:08:37.944+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.327325684233608589739237606483587820137] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 5, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.327325684233608589739237606483587820137",
            "completed": "5"
          }, {
            "taskID": "3435",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-17T00:07:43.761+0100",
            "updatedTime": "2022-03-17T00:08:37.870+0100",
            "scheduledTime": "2022-03-17T00:07:43.760+0100",
            "processingStartTime": "2022-03-17T00:08:37.596+0100",
            "processingEndTime": "2022-03-17T00:08:37.869+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.141591256152800607165594020100725939657] of Study[uid=2.25.4104151166269820755491054129106833506] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.4104151166269820755491054129106833506",
            "SeriesInstanceUID": "2.25.141591256152800607165594020100725939657",
            "completed": "1"
          }, {
            "taskID": "3434",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:49:43.545+0100",
            "updatedTime": "2022-03-16T23:50:37.762+0100",
            "scheduledTime": "2022-03-16T23:49:43.543+0100",
            "processingStartTime": "2022-03-16T23:50:37.703+0100",
            "processingEndTime": "2022-03-16T23:50:37.762+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.67588952459076364445128671815214566778] of Study[uid=2.25.121555613334906896240260346728609314963] for OBJECT_CHECKSUM: - completed: 20, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.121555613334906896240260346728609314963",
            "SeriesInstanceUID": "2.25.67588952459076364445128671815214566778",
            "completed": "20"
          }, {
            "taskID": "3433",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:49:43.502+0100",
            "updatedTime": "2022-03-16T23:50:37.754+0100",
            "scheduledTime": "2022-03-16T23:49:43.501+0100",
            "processingStartTime": "2022-03-16T23:50:37.687+0100",
            "processingEndTime": "2022-03-16T23:50:37.754+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.102902093042500596256409312998451421469] of Study[uid=2.25.121555613334906896240260346728609314963] for OBJECT_CHECKSUM: - completed: 20, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.121555613334906896240260346728609314963",
            "SeriesInstanceUID": "2.25.102902093042500596256409312998451421469",
            "completed": "20"
          }, {
            "taskID": "3432",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:49:43.478+0100",
            "updatedTime": "2022-03-16T23:50:37.729+0100",
            "scheduledTime": "2022-03-16T23:49:43.476+0100",
            "processingStartTime": "2022-03-16T23:50:37.670+0100",
            "processingEndTime": "2022-03-16T23:50:37.728+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.310794295704156880311613765816328504351] of Study[uid=2.25.121555613334906896240260346728609314963] for OBJECT_CHECKSUM: - completed: 15, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.121555613334906896240260346728609314963",
            "SeriesInstanceUID": "2.25.310794295704156880311613765816328504351",
            "completed": "15"
          }, {
            "taskID": "3431",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:49:43.453+0100",
            "updatedTime": "2022-03-16T23:50:37.720+0100",
            "scheduledTime": "2022-03-16T23:49:43.451+0100",
            "processingStartTime": "2022-03-16T23:50:37.654+0100",
            "processingEndTime": "2022-03-16T23:50:37.720+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.25108260755645824206528083729590597481] of Study[uid=2.25.121555613334906896240260346728609314963] for OBJECT_CHECKSUM: - completed: 15, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.121555613334906896240260346728609314963",
            "SeriesInstanceUID": "2.25.25108260755645824206528083729590597481",
            "completed": "15"
          }, {
            "taskID": "3430",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:49:43.428+0100",
            "updatedTime": "2022-03-16T23:50:37.678+0100",
            "scheduledTime": "2022-03-16T23:49:43.426+0100",
            "processingStartTime": "2022-03-16T23:50:37.611+0100",
            "processingEndTime": "2022-03-16T23:50:37.678+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.75312149585436102311774719227652836561] of Study[uid=2.25.121555613334906896240260346728609314963] for OBJECT_CHECKSUM: - completed: 1, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.121555613334906896240260346728609314963",
            "SeriesInstanceUID": "2.25.75312149585436102311774719227652836561",
            "completed": "1"
          }, {
            "taskID": "3429",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:48:43.357+0100",
            "updatedTime": "2022-03-16T23:49:37.685+0100",
            "scheduledTime": "2022-03-16T23:48:43.355+0100",
            "processingStartTime": "2022-03-16T23:49:37.612+0100",
            "processingEndTime": "2022-03-16T23:49:37.684+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.181896536013993857549222326511302072795] of Study[uid=2.25.239412065351115581560076770912136009244] for OBJECT_CHECKSUM: - completed: 4, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.239412065351115581560076770912136009244",
            "SeriesInstanceUID": "2.25.181896536013993857549222326511302072795",
            "completed": "4"
          }, {
            "taskID": "3428",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:46:43.296+0100",
            "updatedTime": "2022-03-16T23:47:37.679+0100",
            "scheduledTime": "2022-03-16T23:46:43.294+0100",
            "processingStartTime": "2022-03-16T23:47:37.610+0100",
            "processingEndTime": "2022-03-16T23:47:37.679+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.69012359711510693145798679449337647363] of Study[uid=2.25.113140863059576012295811363051304563895] for OBJECT_CHECKSUM: - completed: 0, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.113140863059576012295811363051304563895",
            "SeriesInstanceUID": "2.25.69012359711510693145798679449337647363"
          }, {
            "taskID": "3427",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:43:43.231+0100",
            "updatedTime": "2022-03-16T23:44:37.672+0100",
            "scheduledTime": "2022-03-16T23:43:43.229+0100",
            "processingStartTime": "2022-03-16T23:44:37.606+0100",
            "processingEndTime": "2022-03-16T23:44:37.672+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.238065245568528336746839137845588685441] of Study[uid=2.25.113140863059576012295811363051304563895] for OBJECT_CHECKSUM: - completed: 0, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.113140863059576012295811363051304563895",
            "SeriesInstanceUID": "2.25.238065245568528336746839137845588685441"
          }, {
            "taskID": "3426",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:40:43.174+0100",
            "updatedTime": "2022-03-16T23:41:37.679+0100",
            "scheduledTime": "2022-03-16T23:40:43.173+0100",
            "processingStartTime": "2022-03-16T23:41:37.655+0100",
            "processingEndTime": "2022-03-16T23:41:37.679+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.247978201123894924858372352311582041240] of Study[uid=2.25.113140863059576012295811363051304563895] for OBJECT_CHECKSUM: - completed: 0, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.113140863059576012295811363051304563895",
            "SeriesInstanceUID": "2.25.247978201123894924858372352311582041240"
          }, {
            "taskID": "3425",
            "dicomDeviceName": "devj4c",
            "queue": "StgVerTasks",
            "type": "STGVER",
            "status": "COMPLETED",
            "createdTime": "2022-03-16T23:40:43.150+0100",
            "updatedTime": "2022-03-16T23:41:37.671+0100",
            "scheduledTime": "2022-03-16T23:40:43.148+0100",
            "processingStartTime": "2022-03-16T23:41:37.613+0100",
            "processingEndTime": "2022-03-16T23:41:37.671+0100",
            "outcomeMessage": "Commit Storage of Series[uid=2.25.89503268592787656317516862088811784009] of Study[uid=2.25.113140863059576012295811363051304563895] for OBJECT_CHECKSUM: - completed: 0, failed: 0",
            "LocalAET": "DEVJ4C",
            "StudyInstanceUID": "2.25.113140863059576012295811363051304563895",
            "SeriesInstanceUID": "2.25.89503268592787656317516862088811784009"
          }];
        }
      }
      if (res && res.length > 0) {
        this.storageVerifications = res;
        $this.count = void 0;
        if (this.batchGrouped) {
          this.storageVerifications = res.map(taskObject => {
            if (hasIn_default(taskObject, "tasks")) {
              let taskPrepared = [];
              Globalvar.TASK_NAMES.forEach(task => {
                if (taskObject.tasks[task]) {
                  taskPrepared.push({
                    [task]: taskObject.tasks[task]
                  });
                }
              });
              taskObject.tasks = taskPrepared;
            }
            return taskObject;
          });
        }
      } else {
        $this.cfpLoadingBar.complete();
        $this.storageVerifications = [];
        this.mainservice.showMsg("No tasks found!");
      }
      this.moreTasks = res.length > this.filterObject["limit"];
      if (this.moreTasks) {
        this.storageVerifications.splice(this.storageVerifications.length - 1, 1);
      }
    }, err => {
      $this.storageVerifications = [];
      $this.cfpLoadingBar.complete();
      $this.httpErrorHandler.handleError(err);
    });
  }
  showDetails(e) {
    this.batchGrouped = false;
    this.filterObject["batchID"] = e.batchID;
    let filter = Object.assign({}, this.filterObject);
    if (filter["limit"]) {
      filter["limit"]++;
    }
    this.getTasks(filter);
  }
  onFormChange(filters) {
    this.setTableSchemas();
  }
  deleteAllTasks(filter) {
    this.service.deleteAll(filter).subscribe(res => {
      this.mainservice.showMsg("" + res.deleted + " tasks deleted successfully!");
      this.cfpLoadingBar.complete();
      let filters = Object.assign({}, this.filterObject);
      this.getTasks(filters);
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
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
  showTaskDetail(batch) {
    let filter = Object.assign({}, this.filterObject);
    filter["batchID"] = batch.batchID;
    this.filterObject.batchID = batch.batchID;
    this.batchGrouped = false;
    this.getTasks(filter);
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
            this.getTasks(filter);
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
    }, this.devices, true);
  }
  executeAll(mode) {
    this.confirm({
      content: "Are you sure you want to " + Globalvar.getActionText(mode) + " selected entries?"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        this.storageVerifications.forEach(match => {
          if (match.selected) {
            this.service[mode](match.taskID).subscribe(res => {
              console.log("execute result=", res);
            }, err => {
              this.httpErrorHandler.handleError(err);
            });
          }
        });
        setTimeout(() => {
          this.getTasks(this.storageVerifications[0].offset || 0);
          this.cfpLoadingBar.complete();
        }, 300);
      }
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
  type: AeListService
}, {
  type: HttpErrorHandler
}, {
  type: StorageVerificationService
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
StorageVerificationComponent = __decorate([Component({
  selector: "app-storage-verification",
  template: storage_verification_component_default,
  imports: [FilterGeneratorComponent, NgClass, FormsModule, MatProgressSpinner, PermissionDirective, MatSelect, TableGeneratorComponent, MatOption, MonitoringTabsComponent, CommonModule],
  standalone: true,
  styles: [storage_verification_component_default2]
})], StorageVerificationComponent);
export { StorageVerificationComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/