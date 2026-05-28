import {
  ConnectionFormaterComponent
} from "./chunk-LBVSWBGW.js";
import {
  ConfigTabComponent
} from "./chunk-TZPAZNKB.js";
import {
  FilterGeneratorComponent,
  Hl7ApplicationsService,
  SearchPipe
} from "./chunk-DJWZKPOC.js";
import "./chunk-ZNRT3XRK.js";
import {
  FormsModule
} from "./chunk-YEAVTBOB.js";
import {
  AppService,
  CommonModule,
  Component,
  HostListener,
  HttpErrorHandler,
  KeycloakService,
  Router,
  RouterLink,
  SlicePipe,
  WindowRefService,
  __decorate,
  forEach_default,
  hasIn_default,
  j4care
} from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\hl7-applications\hl7-applications.component.html
var hl7_applications_component_default = `<div class="main_content white_design">\r
    <config-tab></config-tab>\r
    <!--<div class="devicelist_block">-->\r
        <div class="tab-content">\r
            <h2 i18n="@@hl7_applications">Hl7 Applications</h2>\r
            <div class="filter_line" *ngIf="advancedConfig">\r
                <div class="filter_block">\r
                    <filter-generator \r
                            [filterIdTemplate]="'device-list'" \r
                            [filterID]="'device-list'" \r
                            [schema]="filterSchema"\r
                            [model]="filter" \r
                            (submit)="getHl7ApplicationsList(0)" \r
                            [filterTreeHeight]="filterHeight"\r
                    ></filter-generator>\r
                </div>\r
            </div>\r
            <div class="filter_line more_function_block">\r
                <div class="filter single_block">\r
                    <div class="filter_block">\r
                        <div class="line">\r
                            <a href="" (click)="$event.preventDefault();advancedConfig=true" *ngIf="!advancedConfig" class="more"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-bottom"></i></a>\r
                            <a href="" (click)="$event.preventDefault();advancedConfig=false" *ngIf="advancedConfig" class="more ng-hide"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-top"></i></a>\r
                            <input autocomplete="off" id="devicefilter" class="devicefilter" [(ngModel)]="devicefilter" i18n-placeholder="@@search_device" placeholder="Search device"/>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <table class="j4care-table">\r
                <thead>\r
                <tr>\r
                    <th></th>\r
                    <th i18n="@@device_name">Device Name</th>\r
                    <th i18n="@@hl7_application_description">HL7 Application Description</th>\r
                    <th i18n="@@hl7_application_name">Hl7 Application Name</th>\r
                    <th i18n-title="@@title.dicom_network_connection" title="Dicom network connection" i18n="@@net_connection">Net. Connection</th>\r
                </tr>\r
                </thead>\r
                <tbody>\r
                    @for (device of hl7Applications | search:devicefilter | slice:moreHl7.start:moreHl7.limit;track device['dicomDeviceName']; let i = $index){\r
                        <tr>\r
                            <td class="buttons_td">\r
                                <span class="numbers">{{i+1}}.</span>\r
                                <a class="table_btn" i18n-title="@@edit_device" title="Edit device" href="" (click)="$event.preventDefault();editDevice(device['dicomDeviceName'])">\r
                                    <span class="glyphicon glyphicon-pencil"></span>\r
                                </a>\r
                            </td>\r
                            <td>\r
                                @if (device['dicomDeviceName']){\r
                                    <div >\r
                                        <a i18n-title="@@edit_device"  title="Edit device" href="" routerLink="/device/edit/{{device['dicomDeviceName']}}">\r
                                            {{device['dicomDeviceName']}}\r
                                        </a>\r
                                    </div>\r
                                }\r
                            </td>\r
                            <td>\r
                                @if (device['dicomDescription']){\r
                                    <div >{{device['dicomDescription']}}</div>\r
                                }\r
                            </td>\r
                            <td>\r
                                @if (device['hl7ApplicationName']){\r
                                    <div >{{device['hl7ApplicationName']}}</div>\r
                                }\r
                            </td>\r
                            <td>\r
                                <connection-formater [dicomNetworkConnection]="device['dicomNetworkConnection']"></connection-formater>\r
                            </td>\r
                        </tr>\r
                    }\r
                </tbody>\r
            </table>\r
            @if (hl7Applications && moreHl7.limit <= hl7Applications.length){\r
                <button class="load_more" (click)="loadMoreDevices()">\r
                    @if (moreHl7.loaderActive){\r
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>\r
                    }\r
                    <ng-container i18n="@@more">More</ng-container>\r
                </button>\r
            }\r
<!--            <div role="tabpanel"  class="device_modus" id="device_modus">\r
                <input autocomplete="off" id="devicefilter" class="devicefilter" [(ngModel)]="devicefilter" placeholder="Search device"/>\r
                <div *ngIf="advancedConfig" class="ng-hide">\r
                    <div class="row ng-hide filter hidden_filters" *ngIf="advancedConfig">\r
                        <div class="col-md-3 block-2-1">\r
                            <div class="row">\r
                                <div class="col-md-6">\r
                                    <input id="dicomDeviceName" type="text" [(ngModel)]="filter.dicomDeviceName" placeholder="Device name" title="Device name" class="col-md-12 clearable" />\r
                                </div>\r
                                <div class="col-md-6">\r
                                    <input id="hl7ApplicationName" type="text" [(ngModel)]="filter.hl7ApplicationName" placeholder="Hl7 Application Name" title="hl7 Application Name" class="col-md-12 clearable" />\r
                                </div>\r
                                <div class="col-md-6">\r
                                    <input id="dicomApplicationCluster" type="text" [(ngModel)]="filter.dicomApplicationCluster" placeholder="Application Cluster" title="Application Cluster" class="col-md-12 clearable" />\r
                                </div>\r
                                <div class="col-md-6">\r
                                    <button class="col-md-12" (click)="searchHl7Applications()">Search</button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <a class="clearform_button" title="Clear all filters" href="" (click)="$event.preventDefault();clearForm()">\r
                            Clear <span class="glyphicon glyphicon-remove"></span>\r
                        </a>\r
                    </div>\r
                </div>\r
                <div class="morefunctionblock">\r
                    <a href="" (click)="$event.preventDefault();advancedConfig=true" *ngIf="!advancedConfig" class="more">Extended search<i class="glyphicon glyphicon-triangle-bottom"></i></a>\r
                    <a href="" (click)="$event.preventDefault();advancedConfig=false" *ngIf="advancedConfig" class="more ng-hide">Close extended search<i class="glyphicon glyphicon-triangle-top"></i></a>\r
                </div>\r
\r
            </div>-->\r
        </div>\r
    <!--</div>-->\r
</div>\r
`;

// src/app/configuration/hl7-applications/hl7-applications.component.ts
var _a;
var Hl7ApplicationsComponent = (_a = class {
  constructor(service, mainservice, router, httpErrorHandler) {
    this.service = service;
    this.mainservice = mainservice;
    this.router = router;
    this.httpErrorHandler = httpErrorHandler;
    this.hl7Applications = [];
    this.moreHl7 = {
      limit: 30,
      start: 0,
      loaderActive: false
    };
    this.advancedConfig = false;
    this.filter = {};
    this.devicefilter = "";
    this.filterHeight = 2;
    this.urlParam = "";
  }
  ngOnInit() {
    this.initCheck(10);
    this.filterSchema = this.service.getFiltersSchema();
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
    this.getHl7ApplicationsList(2);
  }
  loadMoreDeviceOnScroll(event) {
    let hT = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0] ? j4care.offset(WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0]).top : 0, hH = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0].offsetHeight, wH = WindowRefService.nativeWindow.innerHeight, wS = WindowRefService.nativeWindow.pageYOffset;
    if (wS > hT + hH - wH) {
      this.loadMoreDevices();
    }
  }
  loadMoreDevices() {
    this.moreHl7.loaderActive = true;
    this.moreHl7.limit += 20;
    this.moreHl7.loaderActive = false;
  }
  clearForm() {
    let $this = this;
    forEach_default($this.filter, (m, i) => {
      $this.filter[i] = "";
    });
  }
  editDevice(devicename) {
    if (devicename && devicename != "") {
      this.router.navigateByUrl("/device/edit/" + devicename + "/dcmDevice/properties.dcmDevice");
    }
  }
  getHl7ApplicationsList(retries) {
    let $this = this;
    this.service.getHl7ApplicationsList(this.filter).subscribe((res) => {
      $this.hl7Applications = res;
    }, (err) => {
      if (retries) {
        $this.getHl7ApplicationsList(retries - 1);
      } else {
        $this.httpErrorHandler.handleError(err);
      }
    });
  }
}, _a.ctorParameters = () => [
  { type: Hl7ApplicationsService },
  { type: AppService },
  { type: Router },
  { type: HttpErrorHandler }
], _a.propDecorators = {
  loadMoreDeviceOnScroll: [{ type: HostListener, args: ["window:scroll", ["$event"]] }]
}, _a);
Hl7ApplicationsComponent = __decorate([
  Component({
    selector: "app-hl7-applications",
    template: hl7_applications_component_default,
    imports: [
      ConfigTabComponent,
      FilterGeneratorComponent,
      FormsModule,
      RouterLink,
      ConnectionFormaterComponent,
      SearchPipe,
      SlicePipe,
      CommonModule
    ],
    standalone: true
  })
], Hl7ApplicationsComponent);
export {
  Hl7ApplicationsComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
