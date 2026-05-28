import { TableService } from "./chunk-A3KYGHL3.js";
import { DevicesService, TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { AppService, DatePipe, HttpHeaders, Injectable, J4careHttpService, __decorate, cloneDeep_default, concat_default, hasIn_default, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/storage-verification/storage-verification.service.ts
var _a;
var StorageVerificationService = (_a = class {
  constructor($http, mainservice, dataPipe, deviceService, tableService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.dataPipe = dataPipe;
    this.deviceService = deviceService;
    this.tableService = tableService;
    this.header = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.cancel = taskID => this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/${taskID}/cancel`, {});
    this.delete = taskID => this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/${taskID}`);
    this.getDevices = () => this.deviceService.getDevices();
    this.scheduleStorageVerification = (param, aet) => this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${aet}/stgver/studies?${this.mainservice.param(param)}`, {});
    this.getUniqueID = () => this.mainservice.getUniqueID();
  }
  statusValues() {
    return [{
      value: "SCHEDULED",
      text: "SCHEDULED"
    }, {
      value: "SCHEDULED FOR RETRY",
      text: "S. FOR RETRY"
    }, {
      value: "IN PROCESS",
      text: "IN PROCESS"
    }, {
      value: "COMPLETED",
      text: "COMPLETED"
    }, {
      value: "WARNING",
      text: "WARNING"
    }, {
      value: "FAILED",
      text: "FAILED"
    }, {
      value: "CANCELED",
      text: "CANCELED"
    }];
  }
  getSorageVerifications(filter, batch) {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver${batch ? "/batch" : ""}?${this.mainservice.param(filter)}`);
  }
  getSorageVerificationsCount(filter) {
    let filterClone = cloneDeep_default(filter);
    delete filterClone.offset;
    delete filterClone.limit;
    delete filterClone.orderby;
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/count?${this.mainservice.param(filterClone)}`);
  }
  getTableSchema($this, action, options) {
    if (hasIn_default(options, "grouped") && options.grouped) {
      return [new TableSchemaElement({
        type: "index",
        title: "#",
        description: "Index",
        widthWeight: 0.2,
        calculatedWidth: "4%"
      }), new TableSchemaElement({
        type: "actions",
        title: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show details"
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-list-alt",
            text: ""
          },
          click: e => {
            console.log("e", e);
            action.call($this, "task-detail", e);
          },
          title: "Show Tasks Detail"
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-remove-circle",
            text: ""
          },
          click: e => {
            console.log("e", e);
            action.call($this, "delete-batched", e);
          },
          permission: {
            id: "action-monitoring->export-single_action",
            param: "visible"
          },
          title: "Delete Task with this BatchID"
        }],
        description: "Actions",
        pxWidth: 105
      }), new TableSchemaElement({
        type: "value",
        title: "Batch ID",
        pathToValue: "batchID",
        description: "Batch ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Device Name",
        pathToValue: "dicomDeviceName",
        description: "Device Name",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Local AET",
        pathToValue: "LocalAET",
        description: "Local AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Scheduled Time Range",
        pathToValue: "scheduledTimeRange",
        description: "Scheduled Time Range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Processing Start Time Range",
        pathToValue: "processingStartTimeRange",
        description: "Processing Start Time Range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Processing end time range",
        pathToValue: "processingEndTimeRange",
        description: "Processing end time range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "progress",
        title: "Tasks",
        pathToValue: "tasks",
        description: "Tasks",
        widthWeight: 1.5,
        cssClass: "no-padding",
        calculatedWidth: "20%"
      })];
    }
    return [new TableSchemaElement({
      type: "index",
      title: "#",
      description: "Index",
      widthWeight: 0.2,
      calculatedWidth: "4%"
    }), new TableSchemaElement({
      type: "actions",
      title: "",
      headerActions: [{
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-unchecked",
          text: ""
        },
        click: (models, config) => {
          models.forEach(m => {
            m.selected = true;
          });
          config.allSelected = true;
        },
        title: "Select",
        showIf: (e, config) => {
          return !config.allSelected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-check",
          text: ""
        },
        click: (models, config) => {
          models.forEach(m => {
            m.selected = false;
          });
          config.allSelected = false;
        },
        title: "Unselect",
        showIf: (e, config) => {
          return config.allSelected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-ban-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "cancel-selected", e);
        },
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        },
        title: "Cancel selected"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-repeat",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "reschedule-selected", e);
        },
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        },
        title: "Reschedule selected"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-remove-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "delete-selected", e);
        },
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        },
        title: "Delete selected"
      }],
      actions: [{
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-unchecked",
          text: ""
        },
        click: e => {
          e.selected = !e.selected;
        },
        title: "Select",
        showIf: (e, config) => {
          return !e.selected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-check",
          text: ""
        },
        click: e => {
          console.log("e", e);
          e.selected = !e.selected;
        },
        title: "Unselect",
        showIf: (e, config) => {
          return e.selected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-ban-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "cancel", e);
        },
        title: "Cancel this task",
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        },
        showIf: match => {
          return match.status && (match.status === "SCHEDULED" || match.status === "SCHEDULED FOR RETRY" || match.status === "IN PROCESS");
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-repeat",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "reschedule", e);
        },
        title: "Reschedule this task",
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-remove-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "delete", e);
        },
        permission: {
          id: "action-monitoring->storage_verification-single_action",
          param: "visible"
        },
        title: "Delete this task"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-th-list",
          text: ""
        },
        click: e => {
          console.log("e", e);
          e.showAttributes = !e.showAttributes;
        },
        title: "Show details"
      }],
      description: "Actions",
      pxWidth: 105
    }), ...this.tableService.getTableSchema(concat_default(["dicomDeviceName", "queue"], this.tableService.getTimeColumnBasedOnFilter(options.filterObject), ["processingStartTime_scheduledTime", "processingEndTime_processingStartTime", "LocalAET", "StorageID", "StgCmtPolicy", "completed_failed", "status", "failures", "batchID"]))];
  }
  getFilterSchema(devices, localAET, countText) {
    return [{
      tag: "html-select",
      options: devices,
      showStar: true,
      showSearchField: true,
      filterKey: "dicomDeviceName",
      description: "Device Name to filter by",
      placeholder: "Device Name"
    }, {
      tag: "html-select",
      options: localAET,
      showStar: true,
      showSearchField: true,
      filterKey: "LocalAET",
      description: "Archive AE Title to filter by",
      placeholder: "Archive AE Title"
    }, {
      tag: "input",
      type: "text",
      filterKey: "StudyInstanceUID",
      description: "Unique Identifier of the Study to filter by",
      placeholder: "Study Instance UID"
    }, {
      tag: "select",
      options: this.statusValues(),
      filterKey: "status",
      showStar: true,
      description: "Status of tasks to filter by",
      placeholder: "Status"
    }, {
      tag: "range-picker",
      filterKey: "createdTime",
      description: "Created Date"
    }, {
      tag: "range-picker",
      filterKey: "updatedTime",
      description: "Updated Date"
    }, {
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }, {
      tag: "select",
      options: [{
        value: "createdTime",
        text: "Sort by creation time (ASC)"
      }, {
        value: "-createdTime",
        text: "Sort by creation time (DESC)"
      }, {
        value: "updatedTime",
        text: "Sort by updated time (ASC)"
      }, {
        value: "-updatedTime",
        text: "Sort by updated time (DESC)"
      }, {
        value: "scheduledTime",
        text: "Sort by scheduled time (ASC)"
      }, {
        value: "-scheduledTime",
        text: "Sort by scheduled time (DESC)"
      }],
      filterKey: "orderby",
      description: "Sort",
      placeholder: "Sort"
    }, {
      tag: "label",
      text: "Limit"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Maximal number of tasks in returned list"
    }, {
      tag: "button",
      id: "count",
      text: countText,
      description: "Query only the count"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Maximal number of tasks in returned list"
    }];
  }
  stringifyRangeArray(data) {
    try {
      return `${this.dataPipe.transform(data[0], "yyyy.MM.dd HH:mm:ss")} - ${this.dataPipe.transform(data[0], "yyyy.MM.dd HH:mm:ss")}`;
    } catch (e) {
      return data;
    }
  }
  cancelAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/cancel${urlParam}`, {}, this.header);
  }
  rescheduleAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/reschedule${urlParam}`, {}, this.header);
  }
  reschedule(taskID, filters) {
    let urlParam = this.mainservice.param(filters);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver/${taskID}/reschedule${urlParam}`, {});
  }
  deleteAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/stgver${urlParam}`, this.header);
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: DatePipe
}, {
  type: DevicesService
}, {
  type: TableService
}], _a);
StorageVerificationService = __decorate([Injectable()], StorageVerificationService);
export { StorageVerificationService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/