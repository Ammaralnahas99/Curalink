import { CustomDatePipe, DynamicPipe, TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { AppService, Injectable, __decorate, clone_default, get_default, hasIn_default, j4care } from "./chunk-V54BIW7M.js";

// src/app/table.service.ts
var _a;
var TableService = (_a = class {
  constructor(appService) {
    this.appService = appService;
  }
  /*
  * @param {(TableSchemaElementKey|MappedTableSchemaElement)[]} toReturnElements - array of strings containing the element key or array of mapped table schema elements in the form {key:elementKey,overwrite:TableSchemaElement} (TableSchemaElement object should contain only the values that you want to overwrite), (string and object form can be combined in the same array).
  * @return {TableSchemaElement[]} - Returns an array of selected TableSchemaElement-s based on the input
  * */
  getTableSchema(toReturnElements) {
    this.dateTimeFormat = hasIn_default(this.appService.global, "dateTimeFormat") ? this.appService.global["dateTimeFormat"] : void 0;
    this.personNameFormat = hasIn_default(this.appService.global, "personNameFormat") ? this.appService.global["personNameFormat"] : void 0;
    const allElements = {
      dicomDeviceName: new TableSchemaElement({
        type: "value",
        title: "Device Name",
        pathToValue: "dicomDeviceName",
        description: "Device Name",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      queue: new TableSchemaElement({
        type: "value",
        title: "Queue Name",
        pathToValue: "queue",
        description: "Queue Name",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      createdTime: new TableSchemaElement({
        type: "value",
        title: "Created time",
        pathToValue: "createdTime",
        description: "Created time",
        widthWeight: 1.4,
        calculatedWidth: "20%",
        pipe: new DynamicPipe(CustomDatePipe, [this.dateTimeFormat])
      }),
      createdDate: new TableSchemaElement({
        type: "value",
        title: "Created Date",
        pathToValue: "createdDate",
        description: "Created Date",
        widthWeight: 1,
        calculatedWidth: "20%",
        pipe: new DynamicPipe(CustomDatePipe, [this.dateTimeFormat])
      }),
      updateTime: new TableSchemaElement({
        type: "value",
        title: "Updated time",
        pathToValue: "updatedTime",
        description: "Updated time",
        widthWeight: 1.4,
        calculatedWidth: "20%"
      }),
      scheduledTime: new TableSchemaElement({
        type: "value",
        title: "Scheduled Time",
        pathToValue: "scheduledTime",
        description: "Scheduled Time",
        widthWeight: 1.4,
        calculatedWidth: "20%"
      }),
      processingStartTime_scheduledTime: new TableSchemaElement({
        type: "value",
        title: "Process Delay",
        description: "Process Delay",
        hook: data => {
          if (data) return j4care.getDifferenceTime(data["scheduledTime"], data["processingStartTime"]);
          return "";
        },
        widthWeight: 1.4,
        calculatedWidth: "20%"
      }),
      processingEndTime_processingStartTime: new TableSchemaElement({
        type: "value",
        title: "Process Time",
        description: "Process Time",
        hook: data => {
          if (data) return j4care.getDifferenceTime(data["processingStartTime"], data["processingEndTime"]);
          return "";
        },
        widthWeight: 1.4,
        calculatedWidth: "20%"
      }),
      LocalAET: new TableSchemaElement({
        type: "value",
        title: "Local AET",
        pathToValue: "LocalAET",
        description: "Local AET",
        widthWeight: 1,
        calculatedWidth: "20%",
        cssClass: "hideOn1100px"
      }),
      RemoteAET: new TableSchemaElement({
        type: "value",
        title: "Remote AET",
        pathToValue: "RemoteAET",
        description: "Remote AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      ExporterID: new TableSchemaElement({
        type: "value",
        title: "Exporter ID",
        pathToValue: "ExporterID",
        description: "Exporter ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      Modality: new TableSchemaElement({
        type: "value",
        title: "Modality",
        pathToValue: "Modality",
        description: "Modality",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }),
      NumberOfInstances: new TableSchemaElement({
        type: "value",
        header: "#I",
        pathToValue: "NumberOfInstances",
        headerDescription: "Number of Study Related Instances",
        widthWeight: 0.8,
        calculatedWidth: "20%"
      }),
      DestinationAET: new TableSchemaElement({
        type: "value",
        title: "Destination AET",
        pathToValue: "DestinationAET",
        description: "Destination AET",
        widthWeight: 1,
        calculatedWidth: "20%",
        cssClass: "hideOn1000px"
      }),
      remaining: new TableSchemaElement({
        type: "value",
        title: "#I",
        description: "Completed / Remaining / Warning / Failed",
        hook: data => {
          if (data) return `${data.completed || 0} / ${data.remaining || 0} / ${data.warning || 0} / ${data.failed || 0}`;
          return "";
        },
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      PrimaryAET: new TableSchemaElement({
        type: "value",
        title: "Primary AET",
        pathToValue: "PrimaryAET",
        description: "Primary AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      SecondaryAET: new TableSchemaElement({
        type: "value",
        title: "Secondary AET",
        pathToValue: "SecondaryAET",
        description: "Secondary AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      comparefield: new TableSchemaElement({
        type: "value",
        title: "compare",
        pathToValue: "comparefield",
        description: "compare",
        widthWeight: 1,
        calculatedWidth: "20%",
        cssClass: "hideOn800px"
      }),
      matches: new TableSchemaElement({
        type: "value",
        title: "#S",
        description: "Missing / Different",
        hook: data => `${data.missing || 0} / ${data.different || 0}`,
        widthWeight: 0.8,
        calculatedWidth: "20%"
      }),
      StorageID: new TableSchemaElement({
        type: "value",
        title: "Storage ID",
        pathToValue: "StorageID",
        description: "Storage ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      StgCmtPolicy: new TableSchemaElement({
        type: "value",
        title: "Stg.Ver.Policy",
        pathToValue: "StgCmtPolicy",
        description: "Stg.Ver.Policy",
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      completed_failed: new TableSchemaElement({
        type: "value",
        title: "#I",
        description: "Completed / Failed",
        hook: data => `${data.completed || 0} / ${data.failed || 0}`,
        widthWeight: 1,
        calculatedWidth: "20%"
      }),
      status: new TableSchemaElement({
        type: "value",
        title: "Status",
        pathToValue: "status",
        description: "Status",
        hoverHook: data => {
          if (hasIn_default(data, "outcomeMessage") && data.outcomeMessage != "") {
            return get_default(data, "outcomeMessage");
          }
          if (hasIn_default(data, "errorMessage") && data.errorMessage != "") {
            return get_default(data, "errorMessage");
          }
          return get_default(data, "status");
        },
        widthWeight: 0.9,
        calculatedWidth: "20%",
        cssClass: "hideOn1100px"
      }),
      failures: new TableSchemaElement({
        type: "value",
        title: "Failures",
        pathToValue: "failures",
        description: "Failures",
        hoverHook: data => {
          if (hasIn_default(data, "errorMessage")) {
            return data.errorMessage;
          }
          return get_default(data, "failures");
        },
        widthWeight: 0.8,
        calculatedWidth: "20%"
      }),
      batchID: new TableSchemaElement({
        type: "value",
        title: "Batch ID",
        pathToValue: "batchID",
        description: "Batch ID",
        widthWeight: 1,
        calculatedWidth: "20%",
        cssClass: "hideOn800px"
      }),
      id: new TableSchemaElement({
        type: "value",
        title: "Id",
        header: "Id",
        widthWeight: 1,
        pathToValue: "id"
      }),
      name: new TableSchemaElement({
        type: "value",
        title: "Name",
        header: "Name",
        widthWeight: 1.5,
        pathToValue: "name"
      })
    };
    if (toReturnElements) {
      let toBeReturnedElements = [];
      toReturnElements.forEach(element => {
        if (element) {
          if (typeof element === "string") {
            if (allElements[element]) {
              toBeReturnedElements.push(allElements[element]);
            }
          } else {
            if (element.key && allElements[element.key]) {
              if (element.overwrite) {
                let selectedElement = clone_default(allElements[element.key]);
                Object.keys(element.overwrite).forEach(optionKey => {
                  selectedElement[optionKey] = element.overwrite[optionKey];
                });
                toBeReturnedElements.push(selectedElement);
              } else {
                toBeReturnedElements.push(allElements[element.key]);
              }
            }
          }
        }
      });
      return toBeReturnedElements;
    }
    return Object.keys(allElements).map(k => allElements[k]);
  }
  stringifyRangeArray(data) {
    try {
      const pipe = new CustomDatePipe();
      return `${pipe.transform(data[0], this.dateTimeFormat)} - ${pipe.transform(data[1], this.dateTimeFormat)}`;
    } catch (e) {
      return data;
    }
  }
  getTimeColumnBasedOnFilter(filters) {
    if (j4care.is(filters, "orderby")) {
      if (filters.orderby.indexOf("updatedTime") > -1) {
        return ["updateTime"];
      }
      if (filters.orderby.indexOf("createdTime") > -1) {
        return ["createdTime"];
      }
      if (filters.orderby.indexOf("scheduledTime") > -1) {
        return ["scheduledTime"];
      }
      return ["updateTime", "createdTime", "scheduledTime"];
    }
  }
}, _a.ctorParameters = () => [{
  type: AppService
}], _a);
TableService = __decorate([Injectable({
  providedIn: "root"
})], TableService);
export { TableService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/