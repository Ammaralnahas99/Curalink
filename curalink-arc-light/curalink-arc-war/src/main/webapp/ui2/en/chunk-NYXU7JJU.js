import { MetricsService } from "./chunk-QLM4TDLB.js";
import { TableGeneratorComponent } from "./chunk-GHI7NEH6.js";
import "./chunk-CJ4Z3CIK.js";
import { FilterGeneratorComponent } from "./chunk-DJWZKPOC.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, SelectDropdown, __decorate, clone_default, hasIn_default, isEmpty_default, j4care, parseInt_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\monitoring\metrics\metrics.component.html
var metrics_component_default = `<div class="main_content retrieve monitoring white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <h2 i18n="@@metrics.metrics">Metrics</h2>\r
        <div class="filter_line">\r
            <div class="filter_block">\r
                <filter-generator [filterIdTemplate]="'metric'" [schema]="filterSchema" [model]="filterObject" (submit)="getMetrics($event)" (onChange)="onFormChange($event)"></filter-generator>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <table-generator *ngIf="tableConfig && metrics && metrics.length && metrics.length > 0" [config]="tableConfig" [models]="metrics"></table-generator>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\monitoring\metrics\metrics.component.scss
var metrics_component_default2 = "/* src/app/monitoring/metrics/metrics.component.scss */\n";

// src/app/monitoring/metrics/metrics.component.ts
var _a;
var MetricsComponent = (_a = class {
  constructor(service, httpErrorHandler, cfpLoadingBar, appService) {
    this.service = service;
    this.httpErrorHandler = httpErrorHandler;
    this.cfpLoadingBar = cfpLoadingBar;
    this.appService = appService;
    this.filterObject = {
      bin: 1
    };
  }
  ngOnInit() {
    this.getMetricsDescriptors();
  }
  onFormChange(e) {
    console.log("e", e);
    console.log("filterSchema", this.filterSchema);
    console.log("metricsDescriptors", this.metricsDescriptors);
    this.selectWrightMetricsDescriptor();
    this.setFilterSchema();
    this.setTableConfig();
  }
  selectWrightMetricsDescriptor() {
    if (hasIn_default(this.filterObject, "name") && this.filterObject["name"] != "") {
      if (!(this.selectedMetricsDescriptors && this.selectedMetricsDescriptors.dcmMetricsName === this.filterObject["name"])) {
        this.metricsDescriptors.forEach(descriptor => {
          if (descriptor.dcmMetricsName === this.filterObject["name"]) {
            this.selectedMetricsDescriptors = descriptor;
          }
        });
      }
    } else {
      this.selectedMetricsDescriptors = void 0;
    }
  }
  getMetrics(e) {
    if (hasIn_default(this.filterObject, "name") && this.filterObject["name"] != "") {
      let validation = this.validFilter();
      if (validation.valid) {
        this.cfpLoadingBar.start();
        let params = clone_default(this.filterObject);
        let name = params["name"];
        delete params["name"];
        this.service.getMetrics(name, params).subscribe(metrics => {
          let bin = parseInt_default(this.filterObject["bin"].toString()) || 1;
          let currentServerTime = new Date(this.appService.serverTime);
          this.metrics = metrics.map((metric, i) => {
            if (i != 0) {
              currentServerTime.setMinutes(currentServerTime.getMinutes() - bin);
            }
            if (!isEmpty_default(metric)) {
              return {
                time: j4care.formatDate(currentServerTime, "HH:mm"),
                avg: j4care.round(metric["avg"], 2),
                count: metric["count"],
                max: j4care.round(metric["max"], 2),
                min: j4care.round(metric["min"], 2)
              };
            } else {
              return {};
            }
          }).reduce((accumulator, current) => {
            const length = accumulator.length;
            if (length === 0 || isEmpty_default(accumulator[length - 1]) != isEmpty_default(current) || !isEmpty_default(current)) {
              accumulator.push(current);
            }
            return accumulator;
          }, []);
          this.cfpLoadingBar.complete();
          if (!this.metrics || this.metrics.length === 0 || this.metrics.length === 1 && isEmpty_default(this.metrics[0])) {
            this.appService.showMsg("No data found!");
          }
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      } else {
        this.appService.showError(validation.msg);
      }
    } else {
      this.appService.showError("Metrics Name is missing");
    }
  }
  validFilter() {
    let validation = {
      valid: true,
      msg: ""
    };
    if (!hasIn_default(this.filterObject, "bin") || parseInt_default(this.filterObject["bin"].toString()) < 1 || parseInt_default(this.filterObject["bin"].toString()) > parseInt_default(this.selectedMetricsDescriptors.dcmMetricsRetentionPeriod)) {
      validation = {
        valid: false,
        msg: "Bin value is not valid!"
      };
    }
    if (hasIn_default(this.filterObject, "limit") && this.filterObject["limit"] && parseInt_default(this.filterObject["limit"].toString()) < 1) {
      validation = {
        valid: false,
        msg: "Limit value is not valid!"
      };
    }
    return validation;
  }
  setTableConfig() {
    this.tableConfig = {
      table: j4care.calculateWidthOfTable(this.service.getTableSchema(this.selectedMetricsDescriptors ? this.selectedMetricsDescriptors.dcmUnit : "")),
      filter: this.filterObject,
      calculate: false
    };
  }
  setFilterSchema() {
    this.filterSchema = j4care.prepareFlatFilterObject(this.service.getFilterSchema(this.metricsDescriptors.map(metricsDescriptor => {
      return new SelectDropdown(metricsDescriptor.dcmMetricsName, metricsDescriptor.dicomDescription, metricsDescriptor.dicomDescription, void 0, void 0, metricsDescriptor);
    }), [1, 5, 15, this.selectedMetricsDescriptors ? this.selectedMetricsDescriptors.dcmMetricsRetentionPeriod : 60].map(nr => {
      return new SelectDropdown(nr, nr.toString(), nr.toString());
    })), 1);
  }
  getMetricsDescriptors() {
    this.service.getMetricsDescriptors().subscribe(res => {
      this.metricsDescriptors = res;
      if (!res || res.length === 0) {
        this.appService.showError("No Metrics Descriptors were found, please configure Metrics Descriptors first");
      } else {
        this.selectedMetricsDescriptors = res[0];
      }
      this.setTableConfig();
      this.setFilterSchema();
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
}, _a.ctorParameters = () => [{
  type: MetricsService
}, {
  type: HttpErrorHandler
}, {
  type: LoadingBarService
}, {
  type: AppService
}], _a);
MetricsComponent = __decorate([Component({
  selector: "app-metrics",
  template: metrics_component_default,
  imports: [MonitoringTabsComponent, FilterGeneratorComponent, TableGeneratorComponent, CommonModule],
  standalone: true,
  styles: [metrics_component_default2]
})], MetricsComponent);
export { MetricsComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/