import { DynamicFormComponent } from "./chunk-2MYLWM7R.js";
import { DeviceConfiguratorService } from "./chunk-DJWZKPOC.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, Injectable, J4careHttpService, MatDialogRef, __decorate, cloneDeep_default, get_default, j4care, lodash_exports, set_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dialogs\create-exporter\create-exporter.component.html
var create_exporter_component_default = '<div class="dynamic_form_dialog">\r\n    <h2 i18n="@@exporter">Exporter</h2>\r\n    <div class="dialog_content">\r\n        <div mat-dialog-content>\r\n            <dynamic-form *ngIf="formObj" [formelements]="formObj" [dontShowSearch]="true" [model]="archive" [dontGroup]="true" (submitFunction)="submitFunction($event)"></dynamic-form>\r\n            <i *ngIf="!formObj" class="fa fa-circle-o-notch fa-spin"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

// src/app/widgets/dialogs/create-exporter/create-exporter.service.ts
var _a;
var CreateExporterService = (_a = class {
  constructor($http, deviceConfiguratorService, appService) {
    this.$http = $http;
    this.deviceConfiguratorService = deviceConfiguratorService;
    this.appService = appService;
    this.getDevice = deviceName => this.deviceConfiguratorService.getDevice(deviceName);
    this.getQueue = () => this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}queue`);
    this.getExporterDescriptorSchema = () => {
      const currentSavedLanguage = JSON.parse(localStorage.getItem("current_language"));
      let deviceSchemaURL = `./assets/schema/exporter.schema.json`;
      return this.$http.get(deviceSchemaURL);
    };
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: DeviceConfiguratorService
}, {
  type: AppService
}], _a);
CreateExporterService = __decorate([Injectable()], CreateExporterService);

// src/app/widgets/dialogs/create-exporter/create-exporter.component.ts
var _a2;
var CreateExporterComponent = (_a2 = class {
  constructor($http, dialogRef, mainservice, cfpLoadingBar, service, httpErrorHandler, deviceConfigService) {
    this.$http = $http;
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.cfpLoadingBar = cfpLoadingBar;
    this.service = service;
    this.httpErrorHandler = httpErrorHandler;
    this.deviceConfigService = deviceConfigService;
    this.showselectdevice = true;
    this.showexternalae = true;
    this.showexporter = false;
    this.dcmExporter = {
      dcmExporterID: void 0,
      dcmURI: void 0,
      dcmQueueName: void 0,
      dicomAETitle: void 0,
      dicomDescription: "",
      dcmStgCmtSCP: void 0,
      dcmInstanceAvailability: "ONLINE",
      dcmExportPriority: 4
    };
    this.schema = {
      "title": "Exporter Descriptor",
      "description": "Exporter Descriptor",
      "type": "object",
      "required": ["dcmExporterID", "dcmURI", "dcmQueueName", "dcmExportPriority", "dcmInstanceAvailability", "dicomAETitle"],
      "properties": {
        "dcmExporterID": {
          "title": "Exporter ID",
          "description": "Exporter ID",
          "type": "string"
        },
        "dcmURI": {
          "title": "URI",
          "description": "RFC2079: Uniform Resource Identifier",
          "type": "string"
        },
        "dcmQueueName": {
          "title": "Queue Name",
          "description": "Task Queue Name",
          "type": "string",
          "enum": ["Export1", "Export2", "Export3", "Export4", "Export5"]
        },
        "dcmExportPriority": {
          "title": "Export Priority",
          "description": "Task Priority Level for processing the Export Task from 0 (lowest) to 9 (highest).",
          "type": "integer",
          "default": 4,
          "minimum": 0,
          "maximum": 9
        },
        "dcmInstanceAvailability": {
          "title": "Instance Availability",
          "description": "Instance Availability",
          "type": "string",
          "default": "ONLINE",
          "enum": ["ONLINE", "NEARLINE", "OFFLINE"]
        },
        "dicomAETitle": {
          "title": "Application Entity (AE) title",
          "description": "Application Entity (AE) title",
          "type": "string",
          "format": "dcmArchiveAETitle"
        }
      }
    };
    this._ = lodash_exports;
  }
  ngOnInit() {
    this.cfpLoadingBar.complete();
    let $this = this;
    this.service.getQueue().subscribe(queue => {
      $this.queue = queue;
    });
    this.getArchiveDevice(2);
  }
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  onChange(newValue, model) {
    set_default(this, model, newValue);
  }
  get devices() {
    return this._devices;
  }
  set devices(value) {
    this._devices = value;
  }
  setAe(e) {
    this.dcmExporter.dicomAETitle = e;
  }
  setQueue(e) {
    this.dcmExporter.dcmQueueName = e;
  }
  setDcmStgCmtSCP(e) {
    this.dcmExporter.dcmStgCmtSCP = e.dicomAETitle;
    this.externalAeObject = e;
  }
  getSchema() {
    this.service.getExporterDescriptorSchema().subscribe(schema => {
      this.schema = schema;
      this.formObj = this.deviceConfigService.convertSchemaToForm(this.archive, this.schema, {}, "attr");
    }, err => {
      this.formObj = this.deviceConfigService.convertSchemaToForm(this.archive, this.schema, {}, "attr");
    });
  }
  selectDevice(e) {
    this.selectedDevice = e;
    let $this = this;
    $this.cfpLoadingBar.start();
    this.service.getDevice(e).subscribe(device => {
      $this.selectedDeviceObject = device;
      $this.showselectdevice = false;
      if ($this.externalAe && $this.selectedDeviceObject) $this.showexporter = true;
      $this.cfpLoadingBar.complete();
    }, err => {
      $this.httpErrorHandler.handleError(err);
      $this.cfpLoadingBar.complete();
    });
  }
  getArchiveDevice(retries) {
    if (!this.mainservice.archiveDeviceName) {
      if (retries) {
        console.log("retry", retries);
        setTimeout(() => {
          this.getArchiveDevice(retries - 1);
        }, 400);
      }
    } else {
      this.service.getDevice(this.mainservice.archiveDeviceName).subscribe(res => {
        this.archive = res;
        this.getSchema();
      }, err => {
        if (retries) this.getArchiveDevice(retries - 1);else {
          this.httpErrorHandler.handleError(err);
        }
      });
    }
  }
  submitFunction(e) {
    console.log("e", e);
    this.dialogRef.close({
      device: this.archive,
      exporter: e
    });
  }
  validAeForm() {
    if (!this.dcmExporter.dcmExporterID || this.dcmExporter.dcmExporterID === "") {
      return false;
    }
    if (!this.dcmExporter.dcmURI || this.dcmExporter.dcmURI === "") {
      return false;
    }
    if (!this.dcmExporter.dcmQueueName || this.dcmExporter.dcmQueueName === "") {
      return false;
    }
    if (!this.dcmExporter.dicomAETitle || this.dcmExporter.dicomAETitle === "") {
      return false;
    }
    return true;
  }
}, _a2.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: MatDialogRef
}, {
  type: AppService
}, {
  type: LoadingBarService
}, {
  type: CreateExporterService
}, {
  type: HttpErrorHandler
}, {
  type: DeviceConfiguratorService
}], _a2);
CreateExporterComponent = __decorate([Component({
  selector: "app-create-exporter",
  template: create_exporter_component_default,
  imports: [DynamicFormComponent, CommonModule],
  standalone: true
})], CreateExporterComponent);

// angular:jit:template:src\app\widgets\dialogs\device-clone\device-clone.component.html
var device_clone_component_default = `<h3>Clone Device {{_.get(device,'dicomDeviceName')}}</h3>\r
<div class="content">\r
    {{texts.use_this_prefix_suffix}}: <input type="text" [(ngModel)]="suffixPrefix" (keyup)="onSufficePrefixChange()">\r
    <div class="dynamic_table">\r
        <div class="table_body">\r
            <div class="tr">\r
                <div class="bluebar" (click)="toggle = 'name'">{{texts.device_base_data}}</div>\r
            </div>\r
            <ng-container *ngIf="toggle === 'name'">\r
                <div class="tr">\r
                    <div class="td"></div>\r
                    <div class="td">{{texts.current_device}}</div>\r
                    <div class="td">{{texts.clone}}</div>\r
                </div>\r
                <div class="tr scrollable_block">\r
                    <div class="td">{{texts.device_name}}:</div>\r
                    <div class="td">\r
                        <input type="text" value="{{_.get(device,'dicomDeviceName')}}" disabled>\r
                    </div>\r
                    <div class="td">\r
                        <input type="text" [(ngModel)]="clonedDevice.dicomDeviceName">\r
                    </div>\r
                </div>\r
            </ng-container>\r
            <ng-container *ngIf="_.hasIn(device, 'dicomNetworkConnection')">\r
                <div class="tr">\r
                    <div class="bluebar" (click)="toggle = 'connections'">{{texts.dicom_network_connection}}</div>\r
                </div>\r
                <ng-container *ngIf="toggle === 'connections'">\r
                    <div class="tr">\r
                        <div class="td"></div>\r
                        <div class="td">{{texts.current_device}}</div>\r
                        <div class="td">{{texts.clone}}</div>\r
                    </div>\r
                    <div class="tr scrollable_block">\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let key of device.dicomNetworkConnection">\r
                                <label>\r
                                    {{texts.network_connection_name}}\r
                                </label>\r
                                <label>\r
                                    {{texts.hostname}}\r
                                </label>\r
                                <label>\r
                                    {{texts.port}}\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let connection of device.dicomNetworkConnection">\r
                                <input type="text" [(ngModel)]="connection.cn" disabled>\r
                                <input type="text" [(ngModel)]="connection.dicomHostname" disabled>\r
                                <input type="number" [(ngModel)]="connection.dicomPort" disabled>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let connection of clonedDevice.dicomNetworkConnection">\r
                                <input type="text" [(ngModel)]="connection.cn">\r
                                <input type="text" [(ngModel)]="connection.dicomHostname">\r
                                <input type="number" [(ngModel)]="connection.dicomPort">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </ng-container>\r
            <ng-container *ngIf="_.hasIn(device,'dicomNetworkAE')">\r
                <div class="tr">\r
                    <div class="bluebar" (click)="toggle = 'aets'">{{texts.network_aes}}</div>\r
                </div>\r
                <ng-container *ngIf="toggle === 'aets'">\r
                    <div class="tr">\r
                        <div class="td"></div>\r
                        <div class="td">{{texts.current_device}}</div>\r
                        <div class="td">{{texts.clone}}</div>\r
                    </div>\r
                    <div class="tr scrollable_block">\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let key of device.dicomNetworkAE">\r
                                <label>\r
                                    {{texts.ae_title}}:\r
                                </label>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <ng-container *ngIf="i === 0">\r
                                        {{texts.network_connection_reference}}:\r
                                    </ng-container>\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let aet of device.dicomNetworkAE">\r
                                <input type="text"  [(ngModel)]="aet.dicomAETitle" disabled>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(aet,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" disabled>\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let aet of clonedDevice.dicomNetworkAE;let i = index">\r
                                <input type="text"  [(ngModel)]="aet.dicomAETitle" (keyup)="onAetChange( i, aet)">\r
                                <label *ngFor="let connection of clonedDevice.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(aet,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" (change)="onConnectionReffChange(aet, i, $event)">\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </ng-container>\r
            <ng-container *ngIf="_.hasIn(device, 'dcmDevice.dcmWebApp')">\r
                <div class="tr">\r
                    <div class="bluebar" (click)="toggle = 'webapps'">{{texts.web_apps}}</div>\r
                </div>\r
                <ng-container *ngIf="toggle === 'webapps'">\r
                    <div class="tr">\r
                        <div class="td"></div>\r
                        <div class="td">{{texts.current_device}}</div>\r
                        <div class="td">{{texts.clone}}</div>\r
                    </div>\r
                    <div class="tr scrollable_block">\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let key of device.dcmDevice.dcmWebApp">\r
                                <label>\r
                                    {{texts.web_app_name}}:\r
                                </label>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <ng-container *ngIf="i === 0">\r
                                        {{texts.network_connection_reference}}:\r
                                    </ng-container>\r
                                </label>\r
                                <label>\r
                                    {{texts.web_service_path}}:\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let webApp of device.dcmDevice.dcmWebApp">\r
                                <input type="text"  [(ngModel)]="webApp.dcmWebAppName" disabled>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(webApp,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" disabled>\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                                <input type="text"  [(ngModel)]="webApp.dcmWebServicePath" disabled>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let webApp of clonedDevice.dcmDevice.dcmWebApp">\r
                                <input type="text"  [(ngModel)]="webApp.dcmWebAppName">\r
                                <label *ngFor="let connection of clonedDevice.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(webApp,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" (change)="onConnectionReffChange(webApp, i, $event)">\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                                <input type="text"  [(ngModel)]="webApp.dcmWebServicePath">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </ng-container>\r
            <ng-container *ngIf="_.hasIn(device,'dcmDevice.hl7Application')">\r
                <div class="tr">\r
                    <div class="bluebar" (click)="toggle = 'hl7'">{{texts.hl7_applications}}</div>\r
                </div>\r
                <ng-container *ngIf="toggle === 'hl7'">\r
                    <div class="tr">\r
                        <div class="td"></div>\r
                        <div class="td">{{texts.current_device}}</div>\r
                        <div class="td">{{texts.clone}}</div>\r
                    </div>\r
                    <div class="tr scrollable_block">\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let key of device.dcmDevice.hl7Application">\r
                                <label>\r
                                    {{texts.hl7_application_name}}:\r
                                </label>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <ng-container *ngIf="i === 0">\r
                                        {{texts.network_connection_reference}}:\r
                                    </ng-container>\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let hl7 of device.dcmDevice.hl7Application">\r
                                <input type="text"  [(ngModel)]="hl7.hl7ApplicationName" disabled>\r
                                <label *ngFor="let connection of device.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(hl7,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" disabled>\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                            </div>\r
                        </div>\r
                        <div class="td">\r
                            <div class="td_block" *ngFor="let hl7 of clonedDevice.dcmDevice.hl7Application;let i = index">\r
                                <input type="text"  [(ngModel)]="hl7.hl7ApplicationName">\r
                                <label *ngFor="let connection of clonedDevice.dicomNetworkConnection;let i = index">\r
                                    <input type="checkbox" [checked]="_.get(hl7,'dicomNetworkConnectionReference').indexOf('/dicomNetworkConnection/' + i) > -1" (change)="onConnectionReffChange(hl7, i, $event)">\r
                                    {{_.get(connection,'cn')}}\r
                                </label>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </ng-container>\r
        </div>\r
    </div>\r
</div>\r
<div class="dialogbuttons">\r
    <button class="save" type="button" (click)="clone()" i18n="@@CLONE">CLONE</button>\r
</div>`;

// angular:jit:style:src\app\widgets\dialogs\device-clone\device-clone.component.scss
var device_clone_component_default2 = "/* src/app/widgets/dialogs/device-clone/device-clone.component.scss */\n.content .content_child .block {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #2b343b;\n}\n.content .content_child .block .block_item {\n  flex: 1;\n}\n.content .tr {\n  display: flex;\n  flex-wrap: wrap;\n}\n.content .tr .td {\n  flex: 1;\n  padding: 5px 0;\n}\n.content .tr .td .td_block {\n  border-bottom: 1px solid #cccccc;\n  float: left;\n  width: 99%;\n  padding: 5px 0;\n}\n.content .tr .td .td_block label,\n.content .tr .td .td_block input {\n  width: 100%;\n  margin: 0;\n  height: 25px;\n  float: left;\n}\n.content .tr .td .td_block input[type=checkbox] {\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: 2px 6px;\n}\n.content .scrollable_block {\n  max-height: 45vh;\n  overflow: auto;\n}\n";

// src/app/widgets/dialogs/device-clone/device-clone.component.ts
var _a3;
var DeviceCloneComponent = (_a3 = class {
  constructor(dialogRef, appService) {
    this.dialogRef = dialogRef;
    this.appService = appService;
    this.validationDetailMessage = "";
    this.toggle = "name";
    this._ = lodash_exports;
    this.j4care = j4care;
    this.previousAetState = {};
    this.texts = {
      use_this_prefix_suffix: "Use this Suffix ( You can use * to make more complex Prefix and Suffix )",
      device_base_data: "Device base data",
      current_device: "Current Device",
      clone: "Clone",
      device_name: "Device Name",
      dicom_network_connection: "Dicom Network Connection",
      network_connection_name: "Network Connection Name",
      hostname: "Hostname",
      port: "Port",
      network_aes: "Network AEs",
      ae_title: "AE Title",
      network_connection_reference: "Network Connection Reference",
      web_apps: "Web Apps",
      web_app_name: "Web App Name",
      web_service_path: "Web Service Path",
      hl7_applications: "Hl7 Applications",
      hl7_application_name: "Hl7 Application Name"
    };
    this.keys = [{
      path: "dicomNetworkAE",
      name: "dicomAETitle"
    }, {
      path: "dcmDevice.dcmWebApp",
      name: "dcmWebAppName"
    }, {
      path: "dcmDevice.hl7Application",
      name: "hl7ApplicationName"
    }];
  }
  ngOnInit() {
    this.clonedDevice = cloneDeep_default(this.device);
  }
  networkReferenceMatchNetworkConnection(reff, connIndex) {}
  clone() {
    if (this.valid()) {
      this.dialogRef.close(this.clonedDevice);
    } else {
      this.appService.showError("You have to make sure that the names of the new device, AETs, Web Applications and HL7 are not the same as the current device ( You can use the Prefix/Suffix input field ) " + this.validationDetailMessage + "");
    }
  }
  valid() {
    try {
      let valid = true;
      if (this.device.dicomDeviceName === this.clonedDevice.dicomDeviceName) {
        valid = valid && false;
      }
      this.keys.forEach(key => {
        if (get_default(this.device, key.path)) {
          get_default(this.device, key.path).forEach((part, i) => {
            if (get_default(this.clonedDevice, `${key.path}[${i}][${key.name}]`) === part[key.name]) {
              console.groupCollapsed("Following part was not changed in the clone object:");
              console.log("In path:", key.path);
              console.log("In original device:", get_default(this.clonedDevice, `${key.path}[${i}][${key.name}]`));
              console.log("In clone device:", part[key.name]);
              console.groupEnd();
              this.validationDetailMessage = this.validationDetailMessage || " <br/>(" + get_default(this.clonedDevice, `${key.path}[${i}][${key.name}]`) + " in " + key.path + "\n, was not changed)";
              valid = valid && false;
            } else {
              valid = valid && true;
            }
          });
        }
      });
      return valid;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  onConnectionReffChange(aet, i, e) {
    try {
      if (e.target.checked) {
        aet.dicomNetworkConnectionReference.push(`/dicomNetworkConnection/${i}`);
      } else {
        const index = aet.dicomNetworkConnectionReference.indexOf(`/dicomNetworkConnection/${i}`);
        if (index > -1) {
          aet.dicomNetworkConnectionReference.splice(index, 1);
        }
      }
    } catch (e2) {
      j4care.log("trying to toggle netwock reference", e2);
    }
  }
  onSufficePrefixChange() {
    console.log("this.suffixPrefix", this.suffixPrefix);
    this.keys.forEach(key => {
      get_default(this.device, key.path).forEach((part, i) => {
        if (this.suffixPrefix && this.suffixPrefix.indexOf("*") > -1) {
          set_default(this.clonedDevice, `${key.path}[${i}][${key.name}]`, this.suffixPrefix.toUpperCase().replace(/\*/i, part[key.name]));
        } else {
          set_default(this.clonedDevice, `${key.path}[${i}][${key.name}]`, get_default(this.device, `${key.path}[${i}][${key.name}]`) + this.suffixPrefix.toUpperCase());
        }
        if (key.path === "dicomNetworkAE") {
          this.onAetChange(i, get_default(this.clonedDevice, `${key.path}[${i}]`));
        }
      });
    });
    if (this.suffixPrefix && this.suffixPrefix.indexOf("*") > -1) {
      this.clonedDevice.dicomDeviceName = this.suffixPrefix.replace(/\*/i, this.device.dicomDeviceName);
    } else {
      this.clonedDevice.dicomDeviceName = this.device.dicomDeviceName + this.suffixPrefix;
    }
  }
  onAetChange(i, aet) {
    try {
      const oldAet = get_default(this.device, `dicomNetworkAE[${i}].dicomAETitle`);
      const clonedOldAet = get_default(this.clonedDevice, `dicomNetworkAE[${i}].dicomAETitle`);
      const newAet = aet.dicomAETitle;
      const regex = new RegExp(`/${oldAet}/`, "gm");
      const clonedRegex = new RegExp(`/${clonedOldAet}/`, "gm");
      let prevRegex;
      let prevAet;
      if (this.previousAetState[i]) {
        prevAet = this.previousAetState[i];
        prevRegex = new RegExp(`/${prevAet}/`, "gm");
      }
      this.clonedDevice.dcmDevice.dcmWebApp.forEach(webApp => {
        if (webApp.dcmWebServicePath.indexOf(`/${oldAet}/`) > -1 || webApp.dcmWebServicePath.indexOf(`/${clonedOldAet}/`) > -1 || prevAet && webApp.dcmWebServicePath.indexOf(`/${prevAet}/`) > -1) {
          if (clonedRegex.test(webApp.dcmWebServicePath)) {
            webApp.dcmWebServicePath = webApp.dcmWebServicePath.replace(clonedRegex, `/${newAet}/`);
            this.replaceOtherAetRef(clonedOldAet, newAet);
          }
          ;
          if (regex.test(webApp.dcmWebServicePath)) {
            webApp.dcmWebServicePath = webApp.dcmWebServicePath.replace(regex, `/${newAet}/`);
            this.replaceOtherAetRef(oldAet, newAet);
          }
          ;
          if (this.previousAetState[i] && prevRegex && prevRegex.test(webApp.dcmWebServicePath)) {
            webApp.dcmWebServicePath = webApp.dcmWebServicePath.replace(prevRegex, `/${newAet}/`);
            this.replaceOtherAetRef(prevAet, newAet);
          }
          ;
          this.previousAetState[i] = newAet;
        }
      });
    } catch (e) {}
  }
  replaceOtherAetRef(currentAet, newAet) {
    j4care.traverse(this.clonedDevice, (value, key, object) => {
      if (value === currentAet) {
        object[key] = newAet;
      }
      return object[key];
    });
  }
}, _a3.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}], _a3);
DeviceCloneComponent = __decorate([Component({
  selector: "app-device-clone",
  template: device_clone_component_default,
  imports: [FormsModule, CommonModule],
  standalone: true,
  styles: [device_clone_component_default2]
})], DeviceCloneComponent);
export { CreateExporterService, CreateExporterComponent, DeviceCloneComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/