import { ConnectionFormaterComponent } from "./chunk-LBVSWBGW.js";
import { CreateAeComponent } from "./chunk-MVPFNKVJ.js";
import { ConfigTabComponent } from "./chunk-TZPAZNKB.js";
import { AeListService, ConfirmComponent, DevicesService, FilterGeneratorComponent, SearchPipe } from "./chunk-DJWZKPOC.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HostListener, HttpErrorHandler, HttpHeaders, J4careHttpService, KeycloakService, MatDialog, RouterLink, ViewContainerRef, WindowRefService, __decorate, cloneDeep_default, forEach_default, hasIn_default, isArray_default, isEqual_default, j4care, lodash_exports, set_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\ae-list\ae-list.component.html
var ae_list_component_default = `<div class="main_content white_design">\r
    <config-tab></config-tab>\r
    <div class="tab-content">\r
        <h2 i18n="@@ae-list.application_entries_list">Application Entities list</h2>\r
        <div class="filter_line" *ngIf="advancedConfig">\r
            <div class="filter_block">\r
                <filter-generator [filterIdTemplate]="'ae-list'" [filterID]="'ae-list'" [schema]="filterSchema" [model]="filter" (submit)="searchAes($event)" [filterTreeHeight]="filterHeight"></filter-generator>\r
            </div>\r
        </div>\r
        <div class="filter_line more_function_block">\r
            <div class="filter single_block">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <a href="" (click)="$event.preventDefault();advancedConfig=true" *ngIf="!advancedConfig" class="more"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-bottom"></i></a>\r
                        <a href="" (click)="$event.preventDefault();advancedConfig=false" *ngIf="advancedConfig" class="more ng-hide"><ng-container i18n="@@extended_search">Extended search</ng-container><i class="glyphicon glyphicon-triangle-top"></i></a>\r
\r
                        <a href="" (click)="$event.preventDefault();createAe()" class="more ng-hide" i18n-title="@@title.ae-list.register_new_application_entity" title="Register new application entity"> <span class="glyphicon glyphicon-plus"></span><ng-container i18n="@@ae-list.new_aet">New AET</ng-container></a>\r
\r
                    </div>\r
                </div>\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <input autocomplete="off" id="aesfilter" class="aesfilter" [(ngModel)]="aesfilter" i18n-placeholder="@@search_device"  placeholder="Search device"/>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <table class="j4care-table">\r
            <thead>\r
            <tr>\r
                <th></th>\r
                <th i18n="@@aetitle">AE Title</th>\r
                <th i18n="@@device_name">Device Name</th>\r
                <th i18n="@@ae-list.other_ae_title">Other AETitle</th>\r
                <th i18n="@@description">Description</th>\r
                <th i18n="@@ae-list.association_initiator">Association Initiator</th>\r
                <th i18n="@@ae-list.association_acceptor">Association Acceptor</th>\r
                <th i18n="@@application_cluster">Application Cluster</th>\r
                <th i18n="@@installed">Installed</th>\r
                <th i18n-title="@@title.dicom_network_connection" title="Dicom network connection" i18n="@@net_connection">Net. Connection</th>\r
            </tr>\r
            </thead>\r
            <tbody>\r
            <tr *ngFor="let ae of  aes | search:aesfilter | slice:moreAes.start:moreAes.limit; let i = index">\r
                <td class="buttons_td">\r
                    <span class="numbers">{{i+1}}.</span>\r
                    <a class="table_btn" title="Echo" href="" (click)="$event.preventDefault();echoAe(ae.dicomAETitle)">\r
                        <span class="echo_icon"></span>\r
                    </a>\r
                    <a [permission]="{id:'action-devicelist-device_configuration',param:'visible'}" class="table_btn" i18n-title="@@title.ae-list.delete_from_device_the_ae" title="Delete from device the AE" href="" (click)="$event.preventDefault();deleteAE(ae.dicomDeviceName, ae.dicomAETitle)">\r
                        <span class="glyphicon glyphicon-remove"></span>\r
                    </a>\r
                </td>\r
                <td>{{ae['dicomAETitle']}}</td>\r
                <td>\r
                    <a i18n-title="@@edit_device" title="Edit device" href="" routerLink="/device/edit/{{ae['dicomDeviceName']}}">\r
                        {{ae['dicomDeviceName']}}\r
                    </a>\r
                </td>\r
                <td>\r
                    <span *ngFor="let otherae of ae['dcmOtherAETitle']">{{otherae}}<br></span>\r
                </td>\r
                <td>{{ae['dicomDescription']}}</td>\r
                <td>{{ae['dicomAssociationInitiator']}}</td>\r
                <td>{{ae['dicomAssociationAcceptor']}}</td>\r
                <td>\r
                    <span *ngFor="let cluster of ae['dicomApplicationCluster']">{{cluster}}<br></span>\r
                </td>\r
                <td *ngIf="ae['dicomInstalled']=== false" i18n="@@false">false</td>\r
                <td *ngIf="ae['dicomInstalled']!= false" [innerHtml]="ae['dicomInstalled'] || inherit"></td>\r
                <td>\r
                    <connection-formater [dicomNetworkConnection]="ae['dicomNetworkConnection']"></connection-formater>\r
                </td>\r
            </tr>\r
            </tbody>\r
        </table>\r
        <button class="load_more" *ngIf="aes && moreAes.limit <= aes.length" (click)="loadMoreAes()"><i *ngIf="moreAes.loaderActive" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><ng-container i18n="@@more">More</ng-container></button>\r
    </div>\r
</div>`;

// src/app/configuration/ae-list/ae-list.component.ts
var _a;
var AeListComponent = (_a = class {
  constructor($http, cfpLoadingBar, mainservice, viewContainerRef, dialog, service, httpErrorHandler, devicesService) {
    this.$http = $http;
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.service = service;
    this.httpErrorHandler = httpErrorHandler;
    this.devicesService = devicesService;
    this._ = lodash_exports;
    this.aesfilter = "";
    this.filterHeight = 2;
    this.filter = {
      dicomDeviceName: void 0,
      dicomAETitle: void 0,
      dicomDescription: void 0,
      dicomAssociationInitiator: void 0,
      dicomAssociationAcceptor: void 0,
      dicomApplicationCluster: void 0
    };
    this.moreAes = {
      limit: 30,
      start: 0,
      loaderActive: false
    };
    this.inherit = "inherit";
  }
  ngOnInit() {
    this.initCheck(10);
    this.filterSchema = this.service.getFiltersSchema(this.devices, this.mainservice.global.aes);
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
    this.getAes();
    this.getAets();
    this.getDevices();
  }
  getKeys(obj) {
    console.log("getkeys obj", obj);
    if (obj) {
      if (isArray_default(obj)) {
        return obj;
      } else {
        return Object.keys(obj);
      }
    } else {
      return [];
    }
  }
  loadMoreAesOnScroll(event) {
    let hT = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0] ? j4care.offset(WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0]).top : 0,
      hH = WindowRefService.nativeWindow.document.getElementsByClassName("load_more")[0].offsetHeight,
      wH = WindowRefService.nativeWindow.innerHeight,
      wS = window.pageYOffset;
    if (wS > hT + hH - wH) {
      this.loadMoreAes();
    }
  }
  loadMoreAes() {
    this.moreAes.loaderActive = true;
    this.moreAes.limit += 20;
    this.moreAes.loaderActive = false;
  }
  searchAes(e) {
    this.cfpLoadingBar.start();
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}aes${j4care.param(this.filter)}`).subscribe(response => {
      $this.aes = response;
      $this.cfpLoadingBar.complete();
    }, err => {
      $this.cfpLoadingBar.complete();
    });
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  clearForm() {
    let $this = this;
    forEach_default($this.filter, (m, i) => {
      $this.filter[i] = "";
    });
    this.searchAes();
  }
  echoAe(ae) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let select = [];
    forEach_default(this.aets, (m, i) => {
      select.push({
        title: m.dicomAETitle,
        value: m.dicomAETitle,
        label: m.dicomAETitle
      });
    });
    let parameters = {
      content: "Select an archive AET:",
      select,
      result: {
        select: this.aets[0].dicomAETitle
      },
      bodytext: "Remote AET: <b>" + ae + "</b>",
      saveButton: "ECHO",
      cssClass: "echodialog"
    };
    let $this = this;
    this.confirm(parameters).subscribe(result => {
      if (result) {
        console.log("result", result);
        console.log("result", parameters.result);
        $this.cfpLoadingBar.start();
        this.service.echoAe(parameters.result.select, ae, {}).subscribe(response => {
          console.log("response", response);
          $this.cfpLoadingBar.complete();
          let msg = this.service.generateEchoResponseText(response);
          $this.mainservice.setMessage({
            "title": msg.title,
            "text": msg.text,
            "status": msg.status
          });
        }, err => {
          $this.cfpLoadingBar.complete();
          $this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  deleteAE(device, ae) {
    let parameters = {
      content: "Are you sure you want to delete from <b>" + device + "</b> the AE: <b>" + ae + "</b>?",
      input: {
        name: "deletedevice",
        type: "checkbox",
        checkboxtext: "Delete also the device <b>" + device + "</b>"
      },
      result: {
        input: false
      },
      saveButton: "DELETE",
      cssClass: "deleteaet"
    };
    if (this.mainservice.archiveDeviceName === device) {
      delete parameters.input;
    }
    console.log("parameters", parameters);
    let $this = this;
    this.confirm(parameters).subscribe(result => {
      if (result) {
        console.log("in clearae", result);
        if (result.input === true) {
          $this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${device}`).subscribe(res => {
            console.log("res", res);
            $this.mainservice.showMsg("Device deleted successfully!");
            $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}).subscribe(() => {
              $this.mainservice.showMsg("Archive reloaded successfully!");
              $this.searchAes();
            }, () => {
              console.warn("Reloading the Archive failed");
            });
          }, err => {
            $this.httpErrorHandler.handleError(err);
          });
        } else {
          $this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${device}`).subscribe(res => {
            console.log("res", res);
            let deviceObject = res;
            forEach_default(deviceObject.dicomNetworkAE, (m, i) => {
              console.log("m", m);
              console.log("i", i);
              if (m && m.dicomAETitle === ae) {
                deviceObject.dicomNetworkAE.splice(i, 1);
              }
            });
            console.log("equal", isEqual_default(res, deviceObject));
            console.log("deviceObj", deviceObject);
            $this.$http.put(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${device}`, deviceObject).subscribe(resdev => {
              console.log("resdev", resdev);
              $this.mainservice.showMsg("Ae removed from device successfully!");
              $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}).subscribe(() => {
                $this.mainservice.showMsg("Archive reloaded successfully!");
                $this.searchAes();
              });
            }, err => {
              console.log("err", err);
              $this.mainservice.showError("Error, the AE was not removed from device!");
            });
          }, err => {
            $this.mainservice.showError("Error getting device " + device + "");
          });
        }
      }
    });
  }
  createAe() {
    this.cfpLoadingBar.start();
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let dicomconn = [];
    let newAetModel = {
      dicomNetworkConnection: [{
        cn: "dicom",
        dicomHostname: "localhost",
        dicomPort: 104
      }],
      dicomNetworkAE: [{
        dicomNetworkConnectionReference: ["/dicomNetworkConnection/0"]
      }]
    };
    let netAEModel;
    netAEModel = newAetModel.dicomNetworkAE[0];
    dicomconn.push({
      "value": "/dicomNetworkConnection/0",
      "name": "dicom"
    });
    let $this = this;
    this.dialogRef = this.dialog.open(CreateAeComponent, {
      height: "auto",
      width: "90%"
    });
    this.dialogRef.componentInstance.dicomconn = dicomconn;
    this.dialogRef.componentInstance.newAetModel = newAetModel;
    this.dialogRef.componentInstance.netAEModel = netAEModel;
    this.dialogRef.componentInstance.aes = this.aes;
    this.dialogRef.componentInstance.devices = this.devices;
    this.dialogRef.afterClosed().subscribe(re => {
      if (re) {
        console.log("res", re);
        if (re.mode === "createdevice") {
          console.log("re.newaetmodel", re.newaetmodel);
          if (re.newaetmodel.dicomInstalled === "true") {
            re.newaetmodel.dicomInstalled = true;
          } else {
            if (re.newaetmodel.dicomInstalled === "false") {
              re.newaetmodel.dicomInstalled = false;
            } else {
              re.newaetmodel.dicomInstalled = true;
            }
          }
          re.newaetmodel.dicomNetworkAE[0].dicomAssociationInitiator = true;
          re.newaetmodel.dicomNetworkAE[0].dicomAssociationAcceptor = true;
          if (!re.newaetmodel.dicomDeviceName || re.newaetmodel.dicomDeviceName === "") {
            re.newaetmodel.dicomDeviceName = re.newaetmodel.dicomNetworkAE[0].dicomAETitle.toLowerCase();
          }
          $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${re.newaetmodel.dicomDeviceName}`, re.newaetmodel, headers).subscribe(devre => {
            $this.mainservice.showMsg("Device with the AET created successfully!");
            if (re.selectedForAcceptedCallingAET && re.selectedForAcceptedCallingAET.length > 0) {
              this.setAetAsAcceptedCallingAet(re.newaetmodel.dicomNetworkAE[0], re.selectedForAcceptedCallingAET);
            } else {
              $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}, headers).subscribe(res => {
                $this.mainservice.showMsg("Archive reloaded successfully!");
              });
            }
            $this.searchAes();
          }, err => {
            $this.cfpLoadingBar.complete();
            $this.httpErrorHandler.handleError(err);
          });
        } else {
          re.device.dicomNetworkAE = re.device.dicomNetworkAE || [];
          re.newaetmodel.dicomNetworkAE[0].dicomAssociationInitiator = true;
          re.newaetmodel.dicomNetworkAE[0].dicomAssociationAcceptor = true;
          re.device.dicomNetworkAE.push(re.newaetmodel.dicomNetworkAE[0]);
          $this.$http.put(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${re.device.dicomDeviceName}`, re.device).subscribe(putresponse => {
            $this.mainservice.showMsg("Aet added to device successfully!");
            $this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}).subscribe(res => {
              $this.mainservice.showMsg("Archive reloaded successfully!");
            });
            $this.searchAes();
          }, err => {
            $this.cfpLoadingBar.complete();
            $this.httpErrorHandler.handleError(err);
          });
        }
      }
    });
  }
  setAetAsAcceptedCallingAet(newAet, setAetAsAcceptedCallingAet) {
    console.log("newAet", newAet);
    console.log("setAetAsAcceptedCallingAet", setAetAsAcceptedCallingAet);
    let deviceAet = {};
    this.aes.forEach(ae => {
      if (setAetAsAcceptedCallingAet.indexOf(ae.dicomAETitle) > -1) {
        deviceAet[ae.dicomDeviceName] = deviceAet[ae.dicomDeviceName] || [];
        deviceAet[ae.dicomDeviceName].push(ae);
      }
    });
    Object.keys(deviceAet).forEach(deviceName => {
      this.devicesService.getDevice(deviceName).subscribe(device => {
        deviceAet[deviceName].forEach(ae => {
          device.dicomNetworkAE.forEach(deviceAe => {
            if (deviceAe.dicomAETitle === ae.dicomAETitle) {
              if (hasIn_default(deviceAe, "dcmNetworkAE.dcmAcceptedCallingAETitle") && deviceAe.dcmNetworkAE.dcmAcceptedCallingAETitle.length > 0) {
                deviceAe.dcmNetworkAE.dcmAcceptedCallingAETitle.push(newAet.dicomAETitle);
              } else {
                set_default(deviceAe, "dcmNetworkAE.dcmAcceptedCallingAETitle", [newAet.dicomAETitle]);
              }
            }
          });
        });
        this.devicesService.saveDeviceChanges(deviceName, device).subscribe(result => {
          this.mainservice.showMsg("" + newAet.dicomAETitle + " was set successfully as 'Accepted Calling AE Title' to following AETs: " + j4care.join(setAetAsAcceptedCallingAet, ", ", " and ") + "");
          this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}ctrl/reload`, {}, new HttpHeaders({
            "Content-Type": "application/json"
          })).subscribe(res => {
            this.mainservice.showMsg("Archive reloaded successfully!");
          });
        }, err => {
          this.httpErrorHandler.handleError(err);
        });
      }, err => {
        this.httpErrorHandler.handleError(err);
      });
    });
  }
  getAes() {
    let $this = this;
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
  getAets() {
    let $this = this;
    this.service.getAets().subscribe(response => {
      $this.aets = response;
    }, err => {
      console.log("error getting aets", err);
    });
  }
  getDevices() {
    let $this = this;
    if (this.mainservice.global && this.mainservice.global.devices) {
      this.devices = this.mainservice.global.devices;
    } else {
      this.service.getDevices().subscribe(response => {
        $this.devices = response;
      }, err => {});
    }
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
  type: AeListService
}, {
  type: HttpErrorHandler
}, {
  type: DevicesService
}], _a.propDecorators = {
  loadMoreAesOnScroll: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }]
}, _a);
AeListComponent = __decorate([Component({
  selector: "app-ae-list",
  template: ae_list_component_default,
  imports: [ConfigTabComponent, FilterGeneratorComponent, FormsModule, PermissionDirective, RouterLink, ConnectionFormaterComponent, CommonModule, SearchPipe],
  standalone: true
})], AeListComponent);
export { AeListComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/