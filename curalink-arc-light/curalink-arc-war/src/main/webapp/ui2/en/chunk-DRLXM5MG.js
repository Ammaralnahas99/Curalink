import { AppService, Injectable, J4careHttpService, __decorate, j4care } from "./chunk-V54BIW7M.js";

// src/app/monitoring/storage-commitment/storage-commitment.service.ts
var _a;
var StorageCommitmentService = (_a = class {
  constructor($http, mainservice) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.statusValue = [{
      value: "PENDING",
      text: "PENDING"
    }, {
      value: "COMPLETED",
      text: "COMPLETED"
    }, {
      value: "WARNING",
      text: "WARNING"
    }, {
      value: "FAILED",
      text: "FAILED"
    }];
    this.getExporters = () => this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}export`);
  }
  search(filters, offset) {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}stgcmt?${this.mainservice.param(this.queryParams(filters, offset))}`);
  }
  queryParams(filters, offset) {
    let filter = Object.assign({}, filters);
    filter.limit++;
    filter.offset = offset && offset != "" ? offset : 0;
    if (filter.status && filter.status === "*") {
      delete filter.status;
    }
    if (filter.ExporterID && filter.ExporterID === "*") {
      delete filter.ExporterID;
    }
    return filter;
  }
  flush(status, before) {
    let urlParam = this.mainservice.param({
      status,
      updatedBefore: before
    });
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}stgcmt?${urlParam}`);
  }
  delete(pk) {
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}stgcmt/${pk}`);
  }
  getFiltersSchema(exporters) {
    return [[[{
      tag: "html-select",
      options: exporters.map(d => {
        return {
          text: d.description || d.id,
          value: d.id
        };
      }),
      showStar: true,
      showSearchField: true,
      filterKey: "ExporterID",
      description: "Exporter ID",
      placeholder: "Exporter ID"
    }, {
      tag: "select",
      options: this.statusValue,
      filterKey: "status",
      showStar: true,
      description: "Status of tasks to filter by",
      placeholder: "Status"
    }], [{
      tag: "label",
      text: "Page Size"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Page Size"
    }]], [[{
      tag: "input",
      type: "text",
      filterKey: "StudyUID",
      description: "Study Instance UID",
      placeholder: "Study Instance UID"
    }, {
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }], [{
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Get Storage commitments"
    }, {
      tag: "dummy"
    }]]];
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}], _a);
StorageCommitmentService = __decorate([Injectable()], StorageCommitmentService);
export { StorageCommitmentService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/