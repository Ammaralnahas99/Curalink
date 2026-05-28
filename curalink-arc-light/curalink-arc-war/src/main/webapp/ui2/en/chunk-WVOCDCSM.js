import { ConfigTabComponent } from "./chunk-TZPAZNKB.js";
import { ControlService, DevicesService } from "./chunk-DJWZKPOC.js";
import "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, J4careHttpService, KeycloakService, NgClass, NgStyle, __decorate, hasIn_default, j4care } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\control\control.component.html
var control_component_default = `<div class="main_content ctrl white_design">\r
    <config-tab></config-tab>\r
    <div class="tab-content">\r
        <h2 i18n="@@control.archive_control">Archive Control</h2>\r
        <div class="dynamic_table j4care-table">\r
            <div class="table_header">\r
                <div class="tr">\r
                    <div class="th" *ngFor="let table of tableSchema" [ngStyle]="{width: table.calculatedWidth}" [innerHtml]="table.title"></div>\r
                </div>\r
            </div>\r
            <div class="table_body">\r
                <div class="tr" *ngFor="let key of Object.keys(devices)">\r
                    <div class="td" *ngFor="let table of tableSchema" [ngStyle]="{width: table.calculatedWidth}">\r
                        <ng-container *ngIf="table.code === 'actions'">\r
                            <div class="action_list">\r
                                <div (click)="toggleState(devices[key])" [ngClass]="{'running':devices[key].status === 'STARTED','not-running':devices[key].status === 'STOPPED'}" class="pointer action_button glyphicon glyphicon-off"></div>\r
                                <div i18n-title="@@title.control.reload_archive" title="Reload archive" (click)="reload(devices[key])" class="pointer action_button glyphicon glyphicon-repeat"></div>\r
                                <div i18n-title="@@title.control.fetch_status" title="Fetch status" (click)="fetchStatus(devices[key])" class="pointer action_button glyphicon glyphicon-refresh"></div>\r
                                <div title="{{iconTexts.activations.hoverText(devices[key])}}" (click)="setAsDefaultDevice(devices[key])" [ngClass]="{'active':appService['dcm4cheeArcConfig']['deviceNameUrlMap'][devices[key].dcmuiDeviceURL] === appService.archiveDeviceName}" class="pointer action_button glyphicon glyphicon-ok-circle"></div>\r
                            </div>\r
                        </ng-container>\r
                        <ng-container *ngIf="table.code != 'actions'">\r
                            {{devices[key][table.code]}}\r
                        </ng-container>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\configuration\control\control.component.scss
var control_component_default2 = "/* src/app/configuration/control/control.component.scss */\n.action_list .active {\n  color: green;\n}\n";

// src/app/configuration/control/control.component.ts
var _a;
var ControlComponent = (_a = class {
  constructor($http, appService, cfpLoadingBar, service, devicesService, httpErrorHandler) {
    this.$http = $http;
    this.appService = appService;
    this.cfpLoadingBar = cfpLoadingBar;
    this.service = service;
    this.devicesService = devicesService;
    this.httpErrorHandler = httpErrorHandler;
    this.message = "";
    this.devices = {};
    this.Object = Object;
    this.iconTexts = {
      activations: {
        hoverText: device => {
          try {
            return this.appService["dcm4cheeArcConfig"]["deviceNameUrlMap"][device.dcmuiDeviceURL] === this.appService.archiveDeviceName ? "This device is currently active" : "Activate this device";
          } catch (e) {
            return "Activate this device";
          }
        }
      }
    };
  }
  ngOnInit() {
    this.initCheck(10);
  }
  initCheck(retries) {
    let $this = this;
    if (KeycloakService.keycloakAuth && KeycloakService.keycloakAuth.authenticated || hasIn_default(this.appService, "global.notSecure") && this.appService.global.notSecure) {
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
    this.getDevices();
    this.tableSchema = j4care.calculateWidthOfTable(this.service.getTableSchema());
  }
  fetchStatuses(d) {
    Object.keys(this.devices).forEach(device => {
      this.fetchStatus(this.devices[device]);
    });
  }
  fetchStatus(object) {
    this.service.fetchStatus(object.dcmuiDeviceURL).subscribe(res => {
      object.status = res.status;
      this.appService.showMsg("Status of " + object.dcmuiDeviceURLName + " was successfully refetched!");
    }, err => {
      console.error("Status not fetchable", err);
      this.httpErrorHandler.handleError(err);
    });
  }
  start(object) {
    this.cfpLoadingBar.start();
    this.service.startArchive(object.dcmuiDeviceURL).subscribe(res => {
      this.fetchStatuses();
      this.appService.showMsg("Archive " + object.dcmuiDeviceURLName + "\n started successfully");
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  stop(object) {
    this.cfpLoadingBar.start();
    this.service.stopArchive(object.dcmuiDeviceURL).subscribe(res => {
      this.fetchStatuses();
      this.appService.showMsg("Archive " + object.dcmuiDeviceURLName + "\n stopped successfully");
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  reload(object) {
    this.cfpLoadingBar.start();
    this.service.reloadArchive(object.dcmuiDeviceURL).subscribe(res => {
      this.appService.showMsg("Archive " + object.dcmuiDeviceURLName + "\n reloaded successfully");
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  toggleState(object) {
    if (object.status && object.status === "STARTED") {
      this.stop(object);
    } else {
      this.start(object);
    }
  }
  setAsDefaultDevice(object) {
    this.appService.baseUrl = object.dcmuiDeviceURL;
    if (hasIn_default(this.appService, "dcm4cheeArcConfig.deviceNameUrlMap") && this.appService.dcm4cheeArcConfig.deviceNameUrlMap[object.dcmuiDeviceURL]) {
      this.appService.archiveDeviceName = this.appService.dcm4cheeArcConfig.deviceNameUrlMap[object.dcmuiDeviceURL];
    }
  }
  getDevices() {
    this.devicesService.getDevices().subscribe(devices => {
      this.service.getMyArchivesFromConfig(this, devices, devices2 => {
        this.devices = devices2;
        this.fetchStatuses();
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: LoadingBarService
}, {
  type: ControlService
}, {
  type: DevicesService
}, {
  type: HttpErrorHandler
}], _a);
ControlComponent = __decorate([Component({
  selector: "app-control",
  template: control_component_default,
  imports: [ConfigTabComponent, NgStyle, NgClass, CommonModule],
  standalone: true,
  styles: [control_component_default2]
})], ControlComponent);
export { ControlComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/