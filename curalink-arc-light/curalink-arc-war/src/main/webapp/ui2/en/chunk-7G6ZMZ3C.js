import { TableService } from "./chunk-A3KYGHL3.js";
import { DevicesService, TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { AppService, HttpHeaders, Injectable, J4careHttpService, __decorate, cloneDeep_default, concat_default, hasIn_default, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/export/export.service.ts
var _a;
var ExportService = (_a = class {
  constructor($http, mainservice, deviceService, tableService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.deviceService = deviceService;
    this.tableService = tableService;
    this.header = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  search(filters, offset, batch) {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export${batch ? "/batch" : ""}?${this.mainservice.param(this.queryParams(filters, offset))}`);
    ;
  }
  getCount(filters) {
    let filterClone = cloneDeep_default(filters);
    delete filterClone.offset;
    delete filterClone.limit;
    delete filterClone.orderby;
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/count?${this.mainservice.param(this.paramWithoutLimit(filterClone))}`);
  }
  paramWithoutLimit(filters) {
    let clonedFilters = this.queryParams(filters, void 0);
    delete clonedFilters.limit;
    return clonedFilters;
  }
  queryParams(filters, offset) {
    let clonedFilters = cloneDeep_default(filters);
    clonedFilters.offset = offset && offset != "" ? offset : 0;
    if (clonedFilters.status && clonedFilters.status === "*") {
      delete clonedFilters.status;
    }
    if (clonedFilters.ExporterID && clonedFilters.ExporterID === "*") {
      delete clonedFilters.ExporterID;
    }
    if (clonedFilters.updatedTimeObject) {
      delete clonedFilters.updatedTimeObject;
    }
    if (clonedFilters.createdTimeObject) {
      delete clonedFilters.createdTimeObject;
    }
    return clonedFilters;
  }
  cancel(taskID) {
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/${taskID}/cancel`, {});
  }
  cancelAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/cancel${urlParam}`, {}, this.header);
  }
  delete(taskID) {
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/${taskID}`);
  }
  deleteAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export${urlParam}`, this.header);
  }
  reschedule(taskID, exporterID, filter) {
    filter = filter || "";
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/${taskID}/reschedule/${exporterID + urlParam}`, {});
  }
  rescheduleAll(filter, exporterID) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    let exporter = exporterID ? `/${exporterID}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/export/reschedule${exporter}${urlParam}`, {}, this.header);
  }
  downloadCsv(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    let header = new HttpHeaders({
      "Accept": "text/csv"
    });
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}/monitor/export${urlParam}`, header);
  }
  getDevices() {
    return this.deviceService.getDevices();
  }
  statusValues() {
    return [{
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
  }
  getDialogSchema(exporters, devices, text) {
    return [[[{
      tag: "label_large",
      text: text || "Change the exporter for all rescheduled tasks. To reschedule with the original exporters associated with the tasks, leave blank:"
    }], [{
      tag: "label",
      text: "Exporter ID"
    }, {
      tag: "select",
      options: exporters.map(exporter => {
        return {
          text: exporter.description,
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
      tag: "select",
      options: devices.map(device => {
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
    }]]];
  }
  getFilterSchema(exporters, devices, countText) {
    return [[[{
      tag: "multi-select",
      options: exporters.map(d => {
        return {
          text: d.description || d.id,
          value: d.id
        };
      }),
      showSearchField: true,
      filterKey: "ExporterID",
      description: "Exporter ID",
      placeholder: "Exporter ID"
    }, {
      tag: "html-select",
      options: devices.map(d => {
        return {
          text: d.dicomDeviceName,
          value: d.dicomDeviceName
        };
      }),
      showStar: true,
      showSearchField: true,
      filterKey: "dicomDeviceName",
      description: "Device Name to filter by",
      placeholder: "Device Name"
    }], [{
      tag: "label",
      text: "Limit"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Maximal number of tasks in returned list"
    }], [{
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }, {
      tag: "select",
      options: this.statusValues(),
      filterKey: "status",
      showStar: true,
      description: "Status of tasks to filter by",
      placeholder: "Status"
    }]], [[{
      tag: "range-picker",
      filterKey: "createdTime",
      description: "Created Date"
    }, {
      tag: "range-picker",
      filterKey: "updatedTime",
      description: "Updated Date"
    }], [{
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
      tag: "input",
      type: "text",
      filterKey: "StudyInstanceUID",
      description: "Unique Identifier of the Study to filter by",
      placeholder: "Study Instance UID"
    }], [{
      tag: "button",
      id: "count",
      text: countText,
      description: "Query only the count"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Maximal number of tasks in returned list"
    }]]];
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
        title: "Exporter ID",
        pathToValue: "ExporterID",
        description: "Exporter ID",
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
          id: "action-monitoring->export-single_action",
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
          id: "action-monitoring->export-single_action",
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
          id: "action-monitoring->export-single_action",
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
          id: "action-monitoring->export-single_action",
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
          id: "action-monitoring->export-single_action",
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
          id: "action-monitoring->export-single_action",
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
    }), ...this.tableService.getTableSchema(concat_default(["dicomDeviceName", "queue"], this.tableService.getTimeColumnBasedOnFilter(options.filterObject), ["processingStartTime_scheduledTime", "processingEndTime_processingStartTime", "LocalAET", "ExporterID", "Modality", "NumberOfInstances", "status", "failures", "batchID"]))];
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
ExportService = __decorate([Injectable()], ExportService);
export { ExportService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/