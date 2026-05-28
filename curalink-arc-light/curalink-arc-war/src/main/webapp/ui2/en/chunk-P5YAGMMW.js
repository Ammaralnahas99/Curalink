import { CreateExporterComponent, DeviceCloneComponent } from "./chunk-UX346222.js";
import "./chunk-2MYLWM7R.js";
import "./chunk-ECXQZT4K.js";
import { ConfigTabComponent } from "./chunk-TZPAZNKB.js";
import { ConfirmComponent, DcmDropDownComponent, DeviceConfiguratorService, DevicesService, FilterGeneratorComponent, Hl7ApplicationsService, SearchPipe, WebAppsListService } from "./chunk-DJWZKPOC.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, Globalvar, HostListener, HttpErrorHandler, HttpHeaders, J4careHttpService, KeycloakService, MatDialog, Router, SelectDropdown, ViewContainerRef, WindowRefService, __decorate, cloneDeep_default, forEach_default, get_default, hasIn_default, j4care, lodash_exports } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\devices\devices.component.html
var devices_component_default = `<!--<button (click)="debugpre = !debugpre" style="position:fixed;top:0;left:100px;color:black;z-index: 99999999;">Show debug</button>\r
<pre *ngIf="debugpre" style="position: absolute;width:70%;top:0;z-index: 9999999;">\r
    <div style="float:left;width:50%">\r
        <button (click)="createDummy()">createdummy</button>\r
    </div>\r
    <div style="float:left;width:50%">\r
\r
    </div>\r
</pre>-->\r
<div class="main_content float_content white_design">\r
        <config-tab></config-tab>\r
    <!--<div class="devicelist_block">-->\r
        <div class="tab-content">\r
            <h2 i18n="@@devices">Devices</h2>\r
            <div class="filter_line" *ngIf="advancedConfig">\r
                <div class="filter_block">\r
                    <filter-generator [filterIdTemplate]="'device-list'" [filterID]="'device-list'" [schema]="filterSchema" [model]="filter" (submit)="searchDevices($event)" [filterTreeHeight]="filterHeight"></filter-generator>\r
                </div>\r
            </div>\r
            <div class="filter_line more_function_block">\r
                <div class="filter single_block">\r
                    <div class="filter_block">\r
                        <div class="line">\r
                            <a href="" (click)="$event.preventDefault();advancedConfig=true" *ngIf="!advancedConfig" class="more"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-bottom"></i></a>\r
                            <a href="" (click)="$event.preventDefault();advancedConfig=false" *ngIf="advancedConfig" class="more ng-hide"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-top"></i></a>\r
                            <dcm-drop-down\r
                                    [placeholder]="moreFunctionConfig.placeholder"\r
                                    [options]="moreFunctionConfig.options"\r
                                    [editable]="false"\r
                                    [(model)]="moreFunctionConfig.model"\r
                                    [showSearchField]="false"\r
                                    [multiSelectMode]="false"\r
                                    (modelChange)="moreFunctionChanged($event)"\r
                                    [showStar]="false"\r
                            ></dcm-drop-down>\r
                        </div>\r
                    </div>\r
                    <div class="filter_block">\r
                        <div class="line">\r
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
                    <th i18n="@@devices.department_name">Department Name</th>\r
                    <th i18n="@@device_description">Device Description</th>\r
                    <th i18n="@@manufacturer">Manufacturer</th>\r
                    <th i18n="@@model_name">Model Name</th>\r
                    <th i18n="@@primary_device_type">Primary Device Type</th>\r
                    <th i18n="@@station_name">Station Name</th>\r
                    <th i18n="@@installed">Installed</th>\r
                </tr>\r
                </thead>\r
                <tbody>\r
                <tr *ngFor="let device of devices | search:devicefilter | slice:moreDevices.start:moreDevices.limit; let i = index">\r
                    <td class="buttons_td">\r
                        <span class="numbers">{{i+1}}.</span>\r
                        <a [permission]="{id:'action-devicelist-device_configuration',param:'visible'}" class="table_btn" i18n-title="@@edit_device" title="Edit device" href="" (click)="$event.preventDefault();editDevice(device.dicomDeviceName)">\r
                            <span class="glyphicon glyphicon-pencil"></span>\r
                        </a>\r
                        <a [permission]="{id:'action-devicelist-device_configuration',param:'visible'}" class="table_btn" i18n-title="@@title.devices.clone_device" title="Clone device" href="" (click)="$event.preventDefault();cloneDevice(device)">\r
                            <span class="glyphicon glyphicon-duplicate"></span>\r
                        </a>\r
                        @if (!device['hasArcDevExt']){\r
                            <a [permission]="{id:'action-devicelist-device_configuration',param:'visible'}" class="table_btn" i18n-title="@@title.devices.delete_device" title="Delete device" href="" (click)="$event.preventDefault();deleteDevice(device)">\r
                                <span class="glyphicon glyphicon-remove"></span>\r
                            </a>\r
                        } @else {\r
                            <div class="table_btn"></div>\r
                        }\r
                    </td>\r
                    <td><div *ngIf="device['dicomDeviceName']" >\r
                        <a i18n-title="@@title.devices.edit_param" title="Edit {{device['dicomDeviceName']}}" href="" (click)="$event.preventDefault();editDevice(device['dicomDeviceName'])">\r
                            {{device['dicomDeviceName']}}\r
                        </a>\r
                    </div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomInstitutionDepartmentName[0]')" >{{device['dicomInstitutionDepartmentName'][0]}}</div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomDescription')" >{{_.get(device,"dicomDescription")}}</div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomManufacturer')" >{{_.get(device,"dicomManufacturer")}}</div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomManufacturerModelName')" >{{_.get(device,"dicomManufacturerModelName")}}</div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomPrimaryDeviceType[0]')" >{{_.get(device,"dicomPrimaryDeviceType[0]")}}</div></td>\r
                    <td><div *ngIf="_.hasIn(device,'dicomStationName')" >{{device['dicomStationName']}}</div></td>\r
                    <td *ngIf="device['dicomInstalled']=== false" i18n="@@false">false</td>\r
                    <td *ngIf="device['dicomInstalled']!= false" i18n="@@true">true</td>\r
                </tr>\r
                </tbody>\r
            </table>\r
            <button class="load_more" *ngIf="devices && moreDevices.limit <= devices.length" (click)="loadMoreDevices()"><i *ngIf="moreDevices.loaderActive" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><ng-container i18n="@@more">More</ng-container></button>\r
        <!--</div>-->\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\configuration\devices\devices.component.css
var devices_component_default2 = "/* src/app/configuration/devices/devices.component.css */\n";

// src/app/configuration/devices/devices.component.ts
var _a;
var DevicesComponent = (_a = class {
  constructor($http, cfpLoadingBar, mainservice, viewContainerRef, dialog, service, router, hl7service, httpErrorHandler, deviceConfigurator, webAppListService) {
    this.$http = $http;
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.service = service;
    this.router = router;
    this.hl7service = hl7service;
    this.httpErrorHandler = httpErrorHandler;
    this.deviceConfigurator = deviceConfigurator;
    this.webAppListService = webAppListService;
    this.debugpre = false;
    this._ = lodash_exports;
    this.advancedConfig = false;
    this.filterHeight = 2;
    this.showDeviceList = true;
    this.devicefilter = "";
    this.filter = {};
    this.moreDevices = {
      limit: 30,
      start: 0,
      loaderActive: false
    };
    this.w = 2;
    this.moreFunctionConfig = {
      placeholder: "More functions",
      options: [new SelectDropdown("create_exporter", "Create exporter"), new SelectDropdown("create_device", "Create device")],
      model: void 0
    };
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
    this.getDevices();
    this.getAes();
    this.getHl7ApplicationsList(2);
    this.getWebApps(2);
    console.log("deviceconfiguratorservice paginantion", this.deviceConfigurator.breadcrumbs);
    if (this.deviceConfigurator.breadcrumbs) {
      this.deviceConfigurator.breadcrumbs = [{
        url: "/device/devicelist",
        title: "devicelist",
        devicereff: void 0
      }];
    }
  }
  loadMoreDeviceOnScroll(event) {
    let hT = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0] ? j4care.offset(WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0]).top : 0,
      hH = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0].offsetHeight,
      wH = WindowRefService.nativeWindow.innerHeight,
      wS = window.pageYOffset;
    if (wS > hT + hH - wH) {
      this.loadMoreDevices();
    }
  }
  moreFunctionChanged(e) {
    if (e === "create_exporter") this.createExporter();
    if (e === "create_device") this.createDevice();
    setTimeout(() => {
      this.moreFunctionConfig.model = void 0;
    }, 1);
  }
  editDevice(devicename) {
    if (devicename && devicename != "") {
      this.router.navigateByUrl("/device/edit/" + devicename);
    }
  }
  loadMoreDevices() {
    this.moreDevices.loaderActive = true;
    this.moreDevices.limit += 20;
    this.moreDevices.loaderActive = false;
  }
  searchDevices(e) {
    this.cfpLoadingBar.start();
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices${j4care.param(this.filter)}`).subscribe(response => {
      $this.devices = response;
      $this.cfpLoadingBar.complete();
    }, function errorCallback(response) {});
  }
  clearForm() {
    let $this = this;
    forEach_default($this.filter, (m, i) => {
      $this.filter[i] = "";
    });
    this.searchDevices();
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  deleteDevice(device) {
    if (device && device.dicomDeviceName) {
      let $this = this;
      this.confirm({
        content: "Are you sure you want to delete the device " + device.dicomDeviceName + "\n?"
      }).subscribe(result => {
        if (result) {
          $this.cfpLoadingBar.start();
          $this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${device.dicomDeviceName}`).subscribe(res => {
            $this.mainservice.showMsg("Device deleted successfully!");
            $this.getDevices();
            $this.cfpLoadingBar.complete();
          }, err => {
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        }
      });
    }
  }
  cloneDevice(devicename) {
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${devicename.dicomDeviceName}`).subscribe(device => {
      let headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
      let deviceNameList = this.devices.map(res => {
        return res.dicomDeviceName;
      });
      this.dialogRef = this.dialog.open(DeviceCloneComponent, {
        height: "auto",
        width: "90vw"
      });
      this.dialogRef.componentInstance.device = device;
      this.dialogRef.afterClosed().subscribe(cloneDevice => {
        console.log("cloneDevice", cloneDevice);
        if (cloneDevice) {
          this.cfpLoadingBar.start();
          this.service.createDevice(get_default(cloneDevice, "dicomDeviceName"), cloneDevice).subscribe(res => {
            console.log("res succes", res);
            $this.cfpLoadingBar.complete();
            $this.mainservice.showMsg("Device cloned successfully!");
            $this.cloneVendorData(devicename.dicomDeviceName, get_default(cloneDevice, "dicomDeviceName"));
            $this.service.getAes().subscribe(response => {
              $this.aes = response;
              if ($this.mainservice.global && !$this.mainservice.global.aes) {
                let global = cloneDeep_default($this.mainservice.global);
                global.aes = response;
                $this.mainservice.setGlobal(global);
              } else {
                if ($this.mainservice.global && $this.mainservice.global.aes) {
                  $this.mainservice.global.aes = response;
                } else {
                  $this.mainservice.setGlobal({
                    aes: response
                  });
                }
              }
            });
            $this.cfpLoadingBar.complete();
            $this.getWebApps(0);
          }, err => {
            console.log("error");
            $this.cfpLoadingBar.complete();
            $this.httpErrorHandler.handleError(err);
          });
        }
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  cloneVendorData(oldDeviceName, newDeviceName) {
    this.cfpLoadingBar.start();
    this.service.cloneVendorData(oldDeviceName, newDeviceName).subscribe(res => {
      this.cfpLoadingBar.complete();
      this.mainservice.showMsg("Vendor data cloned successfully");
      this.getDevices();
    }, err => {
      this.cfpLoadingBar.complete();
      this.mainservice.showError("Error on cloning vendor data!");
      j4care.log("Error on cloning vendordata", err);
      this.getDevices();
    });
  }
  createExporter() {
    this.dialogRef = this.dialog.open(CreateExporterComponent, {
      height: "auto",
      width: "90%"
    });
    let $this = this;
    this.dialogRef.componentInstance.devices = this.devices.filter(dev => {
      return hasIn_default(dev, "hasArcDevExt") && dev.hasArcDevExt === true;
    });
    this.dialogRef.componentInstance.aes = this.aes;
    this.dialogRef.afterClosed().subscribe(re => {
      console.log("re", re);
      if (re && re.device && re.device.dicomDeviceName && re.exporter) {
        let headers = new HttpHeaders({
          "Content-Type": "application/json"
        });
        let i = 0;
        if (hasIn_default(re.device, Globalvar.EXPORTER_CONFIG_PATH)) {
          i = get_default(re.device, Globalvar.EXPORTER_CONFIG_PATH).length;
        }
        this.deviceConfigurator.addChangesToDevice(re.exporter, `${Globalvar.EXPORTER_CONFIG_PATH}[${i}]`, re.device);
        $this.$http.put(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${re.device.dicomDeviceName}`, re.device, headers).subscribe(res => {
          $this.mainservice.showMsg("The new exporter description appended successfully to the device: " + re.device.dicomDeviceName + "\n");
          $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}, headers).subscribe(res2 => {
            $this.mainservice.showMsg("Archive reloaded successfully!");
          });
        }, err => {
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  getAes() {
    let $this = this;
    if ($this.mainservice.global && $this.mainservice.global.aes) {
      this.aes = this.mainservice.global.aes;
    } else {
      this.service.getAes().subscribe(response => {
        $this.aes = response;
        if ($this.mainservice.global && !$this.mainservice.global.aes) {
          let global = cloneDeep_default($this.mainservice.global);
          global.aes = response;
          $this.mainservice.setGlobal(global);
        } else {
          if ($this.mainservice.global && $this.mainservice.global.aes) {
            $this.mainservice.global.aes = response;
          } else {
            $this.mainservice.setGlobal({
              aes: response
            });
          }
        }
      }, response => {});
    }
  }
  createDevice() {
    this.router.navigateByUrl("/device/edit/[new_device]");
  }
  getDevices() {
    let $this = this;
    this.service.getDevices().subscribe(response => {
      console.log("getdevices response", response);
      console.log("global", $this.mainservice.global);
      $this.devices = response;
      if ($this.mainservice.global && !$this.mainservice.global.devices) {
        let global = cloneDeep_default($this.mainservice.global);
        global.devices = response;
        $this.mainservice.setGlobal(global);
      } else {
        if ($this.mainservice.global && $this.mainservice.global.devices) {
          $this.mainservice.global.devices = response;
        } else {
          $this.mainservice.setGlobal({
            devices: response
          });
        }
      }
    }, err => {});
  }
  getHl7ApplicationsList(retries) {
    let $this = this;
    this.hl7service.getHl7ApplicationsList("").subscribe(response => {
      if ($this.mainservice.global && !$this.mainservice.global.hl7) {
        let global = cloneDeep_default($this.mainservice.global);
        global.hl7 = response;
        $this.mainservice.setGlobal(global);
      } else {
        if ($this.mainservice.global && $this.mainservice.global.hl7) {
          $this.mainservice.global.hl7 = response;
        } else {
          $this.mainservice.setGlobal({
            hl7: response
          });
        }
      }
    }, err => {
      if (retries) {
        $this.getHl7ApplicationsList(retries - 1);
      }
    });
  }
  getWebApps(retries) {
    let $this = this;
    this.webAppListService.getWebApps().subscribe(response => {
      if ($this.mainservice.global && !$this.mainservice.global.webApps) {
        let global = cloneDeep_default($this.mainservice.global);
        global.webApps = response;
        $this.mainservice.setGlobal(global);
      } else {
        if ($this.mainservice.global && $this.mainservice.global.webApps) {
          $this.mainservice.global.webApps = response;
        } else {
          $this.mainservice.setGlobal({
            webApps: response
          });
        }
      }
    }, err => {
      if (retries) {
        $this.getWebApps(retries - 1);
      }
    });
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: DevicesService
}, {
  type: Router
}, {
  type: Hl7ApplicationsService
}, {
  type: HttpErrorHandler
}, {
  type: DeviceConfiguratorService
}, {
  type: WebAppsListService
}], _a.propDecorators = {
  loadMoreDeviceOnScroll: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }]
}, _a);
DevicesComponent = __decorate([Component({
  selector: "app-devices",
  template: devices_component_default,
  imports: [ConfigTabComponent, FilterGeneratorComponent, DcmDropDownComponent, FormsModule, PermissionDirective, CommonModule, SearchPipe],
  standalone: true,
  styles: [devices_component_default2]
})], DevicesComponent);
export { DevicesComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/