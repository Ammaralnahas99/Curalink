import { TableService } from "./chunk-A3KYGHL3.js";
import { DevicesService } from "./chunk-DJWZKPOC.js";
import { AppService, DatePipe, HttpHeaders, Injectable, J4careHttpService, Router, __decorate, concat_default, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/diff-monitor/diff-monitor.service.ts
var _a;
var DiffMonitorService = (_a = class {
  constructor(deviceService, mainservice, $http, dataPipe, router, tableService) {
    this.deviceService = deviceService;
    this.mainservice = mainservice;
    this.$http = $http;
    this.dataPipe = dataPipe;
    this.router = router;
    this.tableService = tableService;
    this.header = new HttpHeaders({
      "Content-Type": "application/json"
    });
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
  getFormSchema(aes, aets, countText, devices) {
    return [{
      tag: "html-select",
      options: devices,
      showStar: true,
      showSearchField: true,
      filterKey: "dicomDeviceName",
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "html-select",
      options: aets,
      showStar: true,
      showSearchField: true,
      filterKey: "LocalAET",
      description: "Local AET",
      placeholder: "Local AET"
    }, {
      tag: "html-select",
      options: aes,
      showStar: true,
      showSearchField: true,
      filterKey: "PrimaryAET",
      description: "Primary AET",
      placeholder: "Primary AET"
    }, {
      tag: "html-select",
      options: aes,
      showStar: true,
      showSearchField: true,
      filterKey: "SecondaryAET",
      description: "Secondary AET",
      placeholder: "Secondary AET"
    }, {
      tag: "checkbox",
      filterKey: "checkMissing",
      description: "Check Missing",
      text: "Check Missing"
    }, {
      tag: "checkbox",
      filterKey: "checkDifferent",
      description: "Check Different",
      text: "Check Different"
    }, {
      tag: "input",
      type: "text",
      filterKey: "comparefield",
      description: "Compare field",
      placeholder: "Compare field"
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
      text: "Page Size"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Page Size",
      placeholder: "Page Size"
    }, {
      tag: "button",
      text: countText,
      id: "count",
      description: "Query only the count"
    }, {
      tag: "button",
      text: "Search",
      id: "search",
      description: "Search Patients"
    }];
  }
  getTableColumns($this, action, options) {
    return [{
      type: "index",
      title: "#",
      description: "Index",
      widthWeight: 0.1,
      calculatedWidth: "4%",
      pxWidth: 30
    }, {
      type: "buttons",
      title: "",
      buttons: [{
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
          cssClass: "glyphicon glyphicon-ban-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "cancel", e);
        },
        title: "Cancel this task",
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
        title: "Reschedule this task"
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
        title: "Delete this task"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-eye-open",
          text: ""
        },
        click: e => {
          let queryParams = {
            taskID: e.taskID
          };
          if (e.batchID) {
            queryParams["batchID"] = e.batchID;
          }
          if (e.checkDifferent) {
            queryParams["different"] = e.checkDifferent;
          }
          if (e.comparefield) {
            queryParams["comparefield"] = e.comparefield;
          }
          if (e.checkMissing) {
            queryParams["missing"] = e.checkMissing;
          }
          this.router.navigate(["./study/diff"], {
            queryParams
          });
        }
      }],
      description: "Actions",
      widthWeight: 0.7,
      pxWidth: 105
    }, ...this.tableService.getTableSchema(concat_default(["dicomDeviceName", "queue"], this.tableService.getTimeColumnBasedOnFilter(options.filterObject), ["processingStartTime_scheduledTime", "processingEndTime_processingStartTime", "LocalAET", "PrimaryAET", "SecondaryAET", "comparefield", "matches", "status", "failures", "batchID"]))];
  }
  /*,{
              type:"model",
              title:$localize `:@@primary_aet:Primary AET`,
              key:"PrimaryAET",
              description: $localize `:@@aet_primary_c_find_scp:AE Title of the primary C-FIND SCP`,
              widthWeight:1,
              calculatedWidth:"20%"
          },{
              type:"model",
              title:$localize `:@@secondary_aet:Secondary AET`,
              key:"SecondaryAET",
              description: $localize `:@@ae_title_of_the_secondary_c_find_scp:AE Title of the secondary C-FIND SCP`,
              widthWeight:1,
              calculatedWidth:"20%",
              cssClass:"hideOn1100px"
          },{
              type:"model",
              title:$localize `:@@compare_field:Compare field`,
              key:"comparefield",
              description:$localize `:@@compare_attribute_set_id:Compare attribute set id`,
              widthWeight:1,
              calculatedWidth:"20%",
              cssClass:"hideOn1100px"
          },{
              type:"model",
              title:$localize `:@@status:Status`,
              key:"status",
              description:$localize `:@@status_of_tasks:Status of tasks`,
              widthWeight:1,
              calculatedWidth:"20%"
          },{
              type:"model",
              title:$localize `:@@batch_id:Batch ID`,
              key:"batchID",
              description:$localize `:@@batch_id:Batch ID`,
              widthWeight:1,
              calculatedWidth:"20%"
          },{
              type:"model",
              title:$localize `:@@created_time:Created time`,
              key:"createdTime",
              description:$localize `:@@list_compare_studies_tasks_which_were_created_between:list Compare Studies Tasks which were created between`,
              widthWeight:1,
              calculatedWidth:"20%",
              cssClass:"hideOn800px"
          },{
              type:"model",
              title:$localize `:@@updated_time:Updated time`,
              key:"updatedTime",
              description:$localize `:@@list_compare_studies_tasks_which_were_updated_between:list Compare Studies Tasks which were updated between`,
              widthWeight:1,
              calculatedWidth:"20%",
              cssClass:"hideOn800px"
          }*/
  getTableBatchGroupedColumns(showDetails) {
    return [{
      type: "index",
      title: "#",
      description: "Index",
      widthWeight: 0.1,
      calculatedWidth: "4%",
      pxWidth: 30
    }, {
      type: "buttons",
      title: "",
      buttons: [{
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-th-list",
          text: ""
        },
        click: e => {
          console.log("e", e);
          e.showAttributes = !e.showAttributes;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-list-alt",
          text: ""
        },
        click: e => {
          showDetails.apply(this, [e]);
        }
      }],
      description: "Index",
      widthWeight: 0.3,
      calculatedWidth: "6%"
    }, {
      type: "model",
      title: "Batch ID",
      key: "batchID",
      description: "Batch ID",
      widthWeight: 0.4,
      calculatedWidth: "20%"
    }, {
      type: "model",
      title: "Primary AET",
      key: "PrimaryAET",
      description: "AE Title of the primary C-FIND SCP",
      widthWeight: 1,
      calculatedWidth: "20%"
    }, {
      type: "model",
      title: "Secondary AET",
      key: "SecondaryAET",
      description: "AE Title of the secondary C-FIND SCP",
      widthWeight: 1,
      modifyData: data => data.join(", ") || data,
      calculatedWidth: "20%",
      cssClass: "hideOn1100px"
    }, {
      type: "model",
      title: "Scheduled Time Range",
      key: "scheduledTimeRange",
      description: "Scheduled Time Range",
      modifyData: data => this.stringifyRangeArray(data),
      widthWeight: 1.4,
      calculatedWidth: "20%",
      cssClass: "hideOn1100px"
    }, {
      type: "model",
      title: "Processing Start Time Range",
      key: "processingStartTimeRange",
      description: "Processing Start Time Range",
      widthWeight: 1.4,
      modifyData: data => this.stringifyRangeArray(data),
      calculatedWidth: "20%",
      cssClass: "hideOn1100px"
    }, {
      type: "model",
      title: "Processing end time range",
      key: "processingEndTimeRange",
      description: "Processing end time range",
      modifyData: data => this.stringifyRangeArray(data),
      widthWeight: 1.4,
      calculatedWidth: "20%",
      cssClass: "hideOn1100px"
    }, {
      type: "progress",
      title: "Tasks",
      description: "Tasks",
      key: "tasks",
      diffMode: true,
      widthWeight: 2,
      calculatedWidth: "30%",
      cssClass: "hideOn800px"
    }];
  }
  stringifyRangeArray(data) {
    try {
      return `${this.dataPipe.transform(data[0], "yyyy.MM.dd HH:mm:ss")} - ${this.dataPipe.transform(data[0], "yyyy.MM.dd HH:mm:ss")}`;
    } catch (e) {
      return data;
    }
  }
  getDevices() {
    return this.deviceService.getDevices();
  }
  getDiffTask(filters, batchGrouped) {
    let urlParam = this.mainservice.param(filters);
    urlParam = urlParam ? `?${urlParam}` : "";
    let url = `${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff${urlParam}`;
    if (batchGrouped) url = `${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/batch${urlParam}`;
    return this.$http.get(url);
  }
  getDiffTasksCount(filters) {
    let urlParam = this.mainservice.param(filters);
    urlParam = urlParam ? `?${urlParam}` : "";
    let url = `${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/count${urlParam}`;
    return this.$http.get(url);
  }
  cancelAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/cancel${urlParam}`, {}, this.header);
  }
  cancel(taskID) {
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/${taskID}/cancel`, {});
  }
  rescheduleAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/reschedule${urlParam}`, {}, this.header);
  }
  reschedule(taskID, filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/${taskID}/reschedule${urlParam}`, {});
  }
  deleteAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff${urlParam}`, this.header);
  }
  delete(taskID) {
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/diff/` + taskID);
  }
}, _a.ctorParameters = () => [{
  type: DevicesService
}, {
  type: AppService
}, {
  type: J4careHttpService
}, {
  type: DatePipe
}, {
  type: Router
}, {
  type: TableService
}], _a);
DiffMonitorService = __decorate([Injectable()], DiffMonitorService);
export { DiffMonitorService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/