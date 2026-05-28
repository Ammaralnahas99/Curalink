import { TableService } from "./chunk-A3KYGHL3.js";
import { DevicesService, TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { AppService, HttpHeaders, Injectable, J4careHttpService, __decorate, concat_default, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/queues/queues.service.ts
var _a;
var QueuesService = (_a = class {
  constructor($http, mainservice, deviceService, tableService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.deviceService = deviceService;
    this.tableService = tableService;
    this.header = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  search(queueName, status, offset, limit, dicomDeviceName, createdTime, updatedTime, batchID, localAET, remoteAET, orderby, StudyInstanceUID) {
    return this.$http.get(this.url(queueName) + "?" + this.mainservice.param(this.queryParams(status, offset, limit, dicomDeviceName, createdTime, updatedTime, batchID, localAET, remoteAET, orderby, StudyInstanceUID)));
  }
  getCount(queueName, status, offset, limit, dicomDeviceName, createdTime, updatedTime, batchID, localAET, remoteAET, orderby, StudyInstanceUID) {
    return this.$http.get(this.url(queueName) + "/count?" + this.mainservice.param(this.queryParams(status, offset, limit, dicomDeviceName, createdTime, updatedTime, batchID, localAET, remoteAET, orderby, StudyInstanceUID)));
  }
  cancel(queueName, msgId) {
    return this.$http.post(this.url3(queueName, msgId, "cancel"), {}, this.header);
  }
  cancelAll(filter, queueName) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue/${queueName}/cancel${urlParam}`, {}, this.header);
  }
  reschedule(queueName, msgId, filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue/${queueName}/${msgId}/reschedule${urlParam}`, {}, this.header);
  }
  rescheduleAll(filter, queueName) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue/${queueName}/reschedule${urlParam}`, {}, this.header);
  }
  delete(queueName, msgId) {
    return this.$http.delete(this.url2(queueName, msgId));
  }
  deleteAll(filter, queueName) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue/${queueName}${urlParam}`, this.header);
  }
  url(queueName) {
    return `${j4care.addLastSlash(this.mainservice.baseUrl)}queue/${queueName}`;
  }
  url2(queueName, msgId) {
    return this.url(queueName) + "/" + msgId;
  }
  url3(queueName, msgId, command) {
    return this.url2(queueName, msgId) + "/" + command;
  }
  config(params) {
    console.log("paramsconfig", params);
    let header = new HttpHeaders({
      "Content-Type": "application/json"
    });
    header.append("params", params);
    return header;
  }
  queryParams(status, offset, limit, dicomDeviceName, createdTime, updatedTime, batchID, localAET, remoteAET, orderby, StudyInstanceUID) {
    let params = {
      offset,
      limit,
      dicomDeviceName,
      status: void 0,
      createdTime,
      updatedTime,
      batchID,
      localAET,
      remoteAET,
      StudyInstanceUID,
      orderby: void 0
    };
    if (orderby != "*") params.orderby = orderby;
    if (status != "*") params.status = status;
    return params;
  }
  getDevices() {
    return this.deviceService.getDevices();
  }
  sortValues() {
    return [{
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
    }];
  }
  statuses() {
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
  getFilterSchema(queueNames, devices, localAETs, remoteAETs, countText) {
    return [{
      tag: "html-select",
      options: queueNames.map(d => {
        return {
          text: d.description || d.name,
          value: d.name
        };
      }),
      filterKey: "queueName",
      showSearchField: true,
      description: "Queue Name",
      placeholder: "Queue"
    }, {
      tag: "select",
      options: this.sortValues(),
      filterKey: "orderby",
      description: "Sort",
      placeholder: "Sort"
    }, {
      tag: "select",
      options: this.statuses(),
      showStar: true,
      filterKey: "status",
      description: "Status",
      placeholder: "Status"
    }, {
      tag: "html-select",
      options: devices,
      showStar: true,
      showSearchField: true,
      filterKey: "dicomDeviceName",
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "label",
      text: "Page Size"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Limit"
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
      tag: "html-select",
      options: j4care.mapAetToDropdown(localAETs),
      showStar: true,
      showSearchField: true,
      filterKey: "localAET",
      placeholder: "Local AET",
      description: "Archive AE Title to filter by"
    }, {
      tag: "html-select",
      options: j4care.mapAetToDropdown(remoteAETs),
      showStar: true,
      showSearchField: true,
      filterKey: "remoteAET",
      placeholder: "Remote AET",
      description: "Remote AE Title to filter by"
    }, {
      tag: "input",
      type: "text",
      filterKey: "StudyInstanceUID",
      description: "Study Instance UID",
      placeholder: "Study Instance UID"
    }, {
      tag: "button",
      text: countText,
      id: "count",
      description: "Query only the count"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Maximal number of tasks in returned list"
    }, {
      tag: "dummy"
    }, {
      tag: "dummy"
    }];
  }
  getTableColumns($this, action, options) {
    return [new TableSchemaElement({
      type: "index",
      title: "#",
      description: "Index",
      calculatedWidth: "4%",
      pxWidth: 30
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
          id: "action-monitoring->queues-single_action",
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
          id: "action-monitoring->queues-single_action",
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
          id: "action-monitoring->queues-single_action",
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
          id: "action-monitoring->queues-single_action",
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
          id: "action-monitoring->queues-single_action",
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
          id: "action-monitoring->queues-single_action",
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
    }), ...this.tableService.getTableSchema(concat_default(["dicomDeviceName", "queue"], this.tableService.getTimeColumnBasedOnFilter(options.filterObject), ["processingStartTime_scheduledTime", "processingEndTime_processingStartTime", "LocalAET", "RemoteAET", "status", "failures", "batchID"]))];
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: DevicesService
}, {
  type: TableService
}], _a);
QueuesService = __decorate([Injectable()], QueuesService);
export { QueuesService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/