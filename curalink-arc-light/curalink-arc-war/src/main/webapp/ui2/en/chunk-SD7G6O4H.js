import {
  CreateWebappComponent
} from "./chunk-RTPWV4IW.js";
import {
  ConfigTabComponent
} from "./chunk-TZPAZNKB.js";
import {
  TableGeneratorComponent
} from "./chunk-GHI7NEH6.js";
import "./chunk-CJ4Z3CIK.js";
import {
  FilterGeneratorComponent,
  SearchPipe,
  WebAppsListService
} from "./chunk-DJWZKPOC.js";
import "./chunk-ZNRT3XRK.js";
import {
  LoadingBarService
} from "./chunk-GBOOVM47.js";
import {
  FormsModule
} from "./chunk-YEAVTBOB.js";
import {
  CommonModule,
  Component,
  HttpErrorHandler,
  MatDialog,
  ViewContainerRef,
  __decorate,
  forkJoin,
  j4care
} from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\web-apps-list\web-apps-list.component.html
var web_apps_list_component_default = `<div class="main_content float_content white_design">\r
  <config-tab></config-tab>\r
    <div class="tab-content">\r
        <h2 i18n="@@web-apps-list.web_applications">Web Applications</h2>\r
        <div class="filter_line">\r
            <div class="filter_block">\r
                <filter-generator [filterIdTemplate]="'web-apps-list'" [schema]="filterSchema" [model]="filterObject" (submit)="submit($event)" [filterTreeHeight]="filterHeight"></filter-generator>\r
            </div>\r
        </div>\r
        <div class="filter_line more_function_block">\r
            <div class="filter single_block">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <!--<a href="" (click)="$event.preventDefault();createWebApp()" class="more ng-hide" i18n-title="@@web_app_list_create_new_web_application" title="Create new Web Application"> <span class="glyphicon glyphicon-plus"></span><ng-container i18n="@@ae-list.new_aet">New WebApp</ng-container></a>-->\r
                        <input autocomplete="off" [(ngModel)]="search" i18n-placeholder="@@search_dot"  placeholder="Search..."/>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        @if ( tableConfig && webApps && webApps.length && webApps.length > 0){\r
            <table-generator [config]="tableConfig" [models]="webApps|search:search"></table-generator>\r
        }\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\configuration\web-apps-list\web-apps-list.component.scss
var web_apps_list_component_default2 = "/* src/app/configuration/web-apps-list/web-apps-list.component.scss */\n.glyphicon-plus {\n  margin-right: 8px;\n}\n";

// src/app/configuration/web-apps-list/web-apps-list.component.ts
var _a;
var WebAppsListComponent = (_a = class {
  constructor(service, cfpLoadingBar, httpErrorHandler, viewContainerRef, dialog) {
    this.service = service;
    this.cfpLoadingBar = cfpLoadingBar;
    this.httpErrorHandler = httpErrorHandler;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.filterObject = {};
    this.filterHeight = 2;
    this.search = "";
  }
  ngOnInit() {
    this.init();
  }
  submit(e) {
    this.cfpLoadingBar.start();
    this.service.getWebApps(this.filterObject).subscribe((webApps) => {
      this.webApps = webApps.map((webApp) => {
        try {
          webApp["url"] = webApp.dicomNetworkConnection.map((networkConnection) => {
            return `${j4care.getUrlFromDicomNetworkConnection(networkConnection)}${j4care.meyGetString(webApp, "dcmWebServicePath")}`;
          });
        } catch (e2) {
          j4care.log("Error on getting url from network", e2);
        }
        return webApp;
      });
      this.cfpLoadingBar.complete();
    }, (err) => {
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  init() {
    forkJoin(this.service.getServiceClasses(), this.service.getDevices(), this.service.getAes()).subscribe((res) => {
      this.serviceClasses = res[0];
      this.devices = res[1];
      this.aes = res[2];
      this.setFilterSchema();
      this.setTableConfig();
    }, (err) => {
      this.httpErrorHandler.handleError(err);
    });
  }
  setTableConfig() {
    this.tableConfig = {
      table: j4care.calculateWidthOfTable(this.service.getTableSchema()),
      filter: this.filterObject,
      calculate: false
    };
  }
  setFilterSchema() {
    this.filterSchema = j4care.prepareFlatFilterObject(this.service.getFilterSchema(this.devices, this.aes, this.serviceClasses), this.filterHeight);
  }
  createWebApp() {
    this.dialogRef = this.dialog.open(CreateWebappComponent, {});
    this.dialogRef.afterClosed().subscribe((ok) => {
      console.log("ok");
    });
  }
}, _a.ctorParameters = () => [
  { type: WebAppsListService },
  { type: LoadingBarService },
  { type: HttpErrorHandler },
  { type: ViewContainerRef },
  { type: MatDialog }
], _a);
WebAppsListComponent = __decorate([
  Component({
    selector: "app-web-apps-list",
    template: web_apps_list_component_default,
    imports: [
      FilterGeneratorComponent,
      TableGeneratorComponent,
      FormsModule,
      ConfigTabComponent,
      SearchPipe,
      CommonModule
    ],
    standalone: true,
    styles: [web_apps_list_component_default2]
  })
], WebAppsListComponent);
export {
  WebAppsListComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
