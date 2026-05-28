import { TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { AppService, Injectable, J4careHttpService, __decorate, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/metrics/metrics.service.ts
var _a;
var MetricsService = (_a = class {
  constructor($http, appService) {
    this.$http = $http;
    this.appService = appService;
    this.url = {
      METRICS_DESCRIPTORS: `${j4care.addLastSlash(this.appService.baseUrl)}metrics`,
      METRICS: name => `${j4care.addLastSlash(this.appService.baseUrl)}metrics/${name}`
    };
    this.getMetricsDescriptors = () => this.$http.get(this.url.METRICS_DESCRIPTORS);
    this.getMetrics = (name, params) => {
      return this.$http.get(`${this.url.METRICS(name)}${j4care.param(params)}`);
    };
    this.getFilterSchema = (nameDescriptors, binOptions) => [{
      tag: "html-select",
      type: "text",
      filterKey: "name",
      options: nameDescriptors,
      text: "Name",
      showSearchField: true,
      description: "Metrics Name",
      placeholder: "Metrics Name"
    }, {
      tag: "editable-select",
      type: "number",
      filterKey: "bin",
      min: 1,
      max: 60,
      options: binOptions,
      description: "Data bin size in minutes",
      placeholder: "Bin (min)"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      min: 1,
      text: "Limit",
      description: "Maximal number of returned data entries",
      placeholder: "Limit"
    }, {
      tag: "button",
      text: "SUBMIT",
      description: "Get Metrics"
    }];
  }
  getTableSchema(unit) {
    let unitString = "";
    if (unit) {
      unitString = `[${unit}]`;
    }
    return [new TableSchemaElement({
      type: "value",
      title: "Time",
      header: "Time",
      widthWeight: 1,
      pathToValue: "time"
    }), new TableSchemaElement({
      type: "value",
      title: "Count",
      header: "Count",
      widthWeight: 1,
      pathToValue: "count"
    }), new TableSchemaElement({
      type: "value",
      title: "Min" + unitString + "",
      header: "Min" + unitString + "",
      widthWeight: 1,
      pathToValue: "min"
    }), new TableSchemaElement({
      type: "value",
      header: "Avg" + unitString + "",
      title: "Avg" + unitString + "",
      widthWeight: 1,
      pathToValue: "avg"
    }), new TableSchemaElement({
      type: "value",
      header: "Max" + unitString + "",
      title: "Max" + unitString + "",
      widthWeight: 1,
      pathToValue: "max"
    })];
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}], _a);
MetricsService = __decorate([Injectable()], MetricsService);
export { MetricsService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/