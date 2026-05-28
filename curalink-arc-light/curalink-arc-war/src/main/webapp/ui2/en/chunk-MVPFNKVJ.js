import { AeListService, DcmDropDownComponent, DeviceConfiguratorService, MatOption, MatSelect, SearchPipe } from "./chunk-DJWZKPOC.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, Injectable, J4careHttpService, MatDialogRef, NgClass, SelectDropdown, __decorate, cloneDeep_default, forEach_default, get_default, hasIn_default, isArray_default, j4care, last_default, lodash_exports, map, parseInt_default, remove_default, set_default, split_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dialogs\create-ae\create-ae.component.html
var create_ae_component_default = `<div class="vex vex-theme-os registernewaet">\r
    <div class="vex-content">\r
        <div class="vex-dialog-form" >\r
        <div class="device">\r
            <div class="vex-dialog-message" i18n="@@create-ae.register_new_application_entity">Register new Application Entity</div>\r
            <ul class="nav nav-tabs">\r
                <li role="presentation" [ngClass]="{'active':activetab==='createdevice'}" (click)="changeTabAERegister('createdevice')"><a i18n="@@create_new_device">Create new device</a></li>\r
                <li role="presentation" [ngClass]="{'active':activetab==='selectdevice'}" (click)="changeTabAERegister('selectdevice')"><a i18n="@@select_existing_device">Select existing device</a></li>\r
            </ul>\r
            <div mat-dialog-content>\r
                <div class="createdevice tabcontain">\r
                    <div class="tab_body" [hidden]="!(activetab === 'createdevice')">\r
                        <h4 (click)="showdevice=!showdevice;showconn=false"><ng-container i18n="@@create-ae.new_device">New Device</ng-container> <span *ngIf="newAetModel.dicomDeviceName && !showdevice"> <b>{{newAetModel.dicomDeviceName}}</b></span></h4>\r
                        <div class="content" *ngIf="showdevice===true">\r
                            <div class="inputblock">\r
                                <label class="title">Device name</label>\r
                                <input type="text" [(ngModel)]="newAetModel.dicomDeviceName" (keyup)="updateAetFromDevicename($event)" (keydown)="updateAetFromDevicename($event)" (keypress)="updateAetFromDevicename($event)">\r
                                <span class="description" i18n="@@create-ae.a_unique_name_for_this_device">A unique name for this device</span>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@device_description">Device Description</label>\r
                                <textarea [(ngModel)]="newAetModel.dicomDescription"></textarea>\r
                                <span class="description" i18n="@@create-ae.unconstrained_text_description_of_the_device">Unconstrained text description of the device</span>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@station_name">Station Name</label>\r
                                <input type="text" [(ngModel)]="newAetModel.dicomStationName">\r
                                <span class="description" i18n="@@create-ae.should_be_the_same_as_the_value_of_station_name00081010">Should be the same as the value of Station Name (0008,1010) in SOP instances created by this device</span>\r
                            </div>\r
                            <div class="dynamicform">\r
                                <div class="title">\r
                                    <label i18n="@@institution_name">Institution Name</label>\r
                                </div>\r
                                <div class="form_content arrayelement">\r
                                    <div class="inputblock array_parent">\r
                                        <div class="array_single" *ngFor="let el of newAetModel.dicomInstitutionName;let i = index;trackBy:trackByFn">\r
                                            <input type="text" [(ngModel)]="newAetModel.dicomInstitutionName[i]"><span class="delete" (click)="removeElemnt(newAetModel.dicomInstitutionName,i)"><i class="material-icons">clear</i></span>\r
                                        </div>\r
                                        <div class="add" (click)="addArrayElement(newAetModel, 'dicomInstitutionName')"><i class="material-icons">add</i> <span i18n="@@Add">Add</span></div>\r
                                    </div>\r
                                </div>\r
                                <div class="description_parent">\r
                                    <span class="description" i18n="@@create-ae.should_be_the_same_as_the_value_of_station_name00080080">Should be the same as the value of Institution Name (0008,0080) in SOP Instances created by this device</span>\r
                                </div>\r
                            </div>\r
                            <div class="dynamicform">\r
                                <div class="title">\r
                                    <label i18n="@@create-ae.institution_department_name">Institution Department Name</label>\r
                                </div>\r
                                <div class="form_content arrayelement">\r
                                    <div class="inputblock array_parent">\r
                                        <div class="array_single" *ngFor="let el of newAetModel.dicomInstitutionDepartmentName;let i = index;trackBy:trackByFn">\r
                                            <input type="text" [(ngModel)]="newAetModel.dicomInstitutionDepartmentName[i]"><span class="delete" (click)="removeElemnt(newAetModel.dicomInstitutionDepartmentName,i)"><i class="material-icons">clear</i></span>\r
                                        </div>\r
                                        <div class="add" (click)="addArrayElement(newAetModel, 'dicomInstitutionDepartmentName')"><i class="material-icons">add</i> <span i18n="@@Add">Add</span></div>\r
                                    </div>\r
                                </div>\r
                                <div class="description_parent">\r
                                    <span class="description" i18n="@@create-ae.should_be_the_same_as_the_value_of_station_name00081040">Should be the same as the value of Institutional Department Name (0008,1040) in SOP Instances created by this device</span>\r
                                </div>\r
                            </div>\r
                            <div class="dynamicform">\r
                                <div class="title">\r
                                    <label i18n="@@primary_device_type">Primary Device Type</label>\r
                                </div>\r
                                <div class="form_content checkbox">\r
                                    <div class="checkbox_parent long_mode">\r
                                        <input type="text" i18n-placeholder="@@search_dot"  placeholder="Search..." [(ngModel)]="searchDeviceType"><br>\r
                                        <ng-container *ngFor="let type of primaryDeviceType|search:searchDeviceType;let j = index">\r
                                            <label class="checkbox" >\r
                                                <input type="checkbox" value="{{type}}" (change)="togglePrimaryDeviceType(type)">\r
                                                <span>{{type}}</span>\r
                                            </label><br>\r
                                        </ng-container>\r
                                    </div>\r
                                </div>\r
                                <div class="description_parent">\r
                                    <span class="description" i18n="@@create-ae.represents_the_kind_of_device">Represents the kind of device and is most applicable for acquisition modalities</span>\r
                                </div>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@installed">Installed</label>\r
                                <div class="radio">\r
                                    <label>\r
                                        <input type="radio" [(ngModel)]="newAetModel.dicomInstalled" name="dicomInstalled" checked value="true">\r
                                        <span i18n="@@True">True</span>\r
                                    </label>\r
                                </div>\r
                                <div class="radio">\r
                                    <label>\r
                                        <input type="radio" [(ngModel)]="newAetModel.dicomInstalled" name="dicomInstalled" value="false">\r
                                        <span i18n="@@False">False</span>\r
                                    </label>\r
                                </div>\r
                                <span class="description checkbox" i18n="@@create-ae.boolean_to_indicate_whether_this_device_is_presently_installed">Boolean to indicate whether this device is presently installed on the network</span>\r
                            </div>\r
                        </div>\r
                        <h4 (click)="showconn=!showconn;showdevice=false"><ng-container i18n="@@create-ae.new_network_connection">New Network Connection</ng-container>  <span *ngIf="newAetModel && newAetModel.dicomNetworkConnection && newAetModel.dicomNetworkConnection[0] && newAetModel.dicomNetworkConnection[0].cn"> <b>{{newAetModel.dicomNetworkConnection[0].cn}}</b></span></h4>\r
                        <div class="content"  *ngIf="showconn===true">\r
                            <!--<div sf-schema="netConnSchema" sf-form="netConnForm" sf-model="netConnModel"  sf-options="sfOptions"></div>-->\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@name">Name</label>\r
                                <input type="text"  [(ngModel)]="newAetModel.dicomNetworkConnection[0].cn">\r
                                <span class="description" i18n="@@create-ae.arbitrary_meaningful_name_for_the_network_conn">Arbitrary/Meaningful name for the Network Connection object</span>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@create-ae.hostname">Hostname</label>\r
                                <input type="text"  [(ngModel)]="newAetModel.dicomNetworkConnection[0].dicomHostname">\r
                                <span class="description" i18n="@@create-ae.dns_name_for_this_particular_conn">DNS name for this particular connection</span>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@create-ae.port">Port</label>\r
                                <input type="number" [(ngModel)]="newAetModel.dicomNetworkConnection[0].dicomPort">\r
                                <span class="description" i18n="@@create-ae.tcp_udp_port_this_a_service_is_listening_on">TCP/UDP port that a service is listening on. May be missing if this network connection is only used for outbound connections</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="tab_body" [hidden]="!(activetab === 'selectdevice')">\r
                        <h4 (click)="showselectdevice=!showselectdevice;showconnselecteddevice=false" i18n="@@select_existing_device">Select existing device</h4>\r
                        <div class="content" *ngIf="showselectdevice===true">\r
                            <div class="block">\r
                                <div class="label_part" i18n="@@create-ae.select_device_to_connect_the_ae">\r
                                    Select device to connect the AE to:\r
                                </div>\r
                                <div class="input_part">\r
                                    <select [ngModel]="selectedDevice" (ngModelChange)="getDevice($event)" name="dicomDeviceName">\r
                                        <option [value]="obj.dicomDeviceName" *ngFor="let obj of devices">{{obj.dicomDeviceName}}</option>\r
                                    </select>\r
                                </div>\r
                                <span class="description" i18n="@@create-ae.already_existing_devices">Already existing devices</span>\r
                            </div>\r
                        </div>\r
                        <h4 (click)="showconn=!showconn;showdevice=false" i18n="@@create-ae.new_network_connection_to_selected_device">New Network Connection  to selected device</h4>\r
                        <div class="content"  *ngIf="selctedDeviceObject && showconn===true">\r
                            <!--<h4 (click)="showconn=!showconn;showdevice=false">New Network Connection  <span *ngIf="newAetModel.dicomNetworkConnection[0].cn && !showconn"> <b>{{newAetModel.dicomNetworkConnection[0].cn}}</b></span></h4>-->\r
                            <!--<div class="content"  *ngIf="showconn===true">-->\r
                                <!--<div sf-schema="netConnSchema" sf-form="netConnForm" sf-model="netConnModel"  sf-options="sfOptions"></div>-->\r
                                <div class="inputblock">\r
                                    <label class="title" i18n="@@name">Name</label>\r
                                    <input type="text"  [(ngModel)]="newAetModel.dicomNetworkConnection[0].cn">\r
                                    <span class="description" i18n="@@create-ae.arbitrary_meaningful_name_for_the_network_conn">Arbitrary/Meaningful name for the Network Connection object</span>\r
                                </div>\r
                                <div class="inputblock">\r
                                    <label class="title">Hostname</label>\r
                                    <input type="text" [(ngModel)]="newAetModel.dicomNetworkConnection[0].dicomHostname">\r
                                    <span class="description" i18n="@@create-ae.dns_name_for_this_particular_conn">DNS name for this particular connection</span>\r
                                </div>\r
                                <div class="inputblock">\r
                                    <label class="title" i18n="@@create-ae.port">Port</label>\r
                                    <input type="number" [(ngModel)]="newAetModel.dicomNetworkConnection[0].dicomPort">\r
                                    <span class="description" i18n="@@create-ae.tcp_udp_port_this_a_service_is_listening_on">TCP/UDP port that a service is listening on. May be missing if this network connection is only used for outbound connections</span>\r
                                </div>\r
                                <div class="vex-dialog-buttons aet_buttons">\r
                                    <button type="button" class="vex-dialog-button-primary vex-dialog-button vex-first"  (click)="addNewConnectionToDevice()" i18n-title="@@title.create-ae.add_the_new_connection_to_the_selected_device" title="Add the new connection to the selected device" [disabled]="!(_.hasIn(newAetModel,'dicomNetworkConnection[0].cn'))" i18n="@@create-ae.add_connection">Add connection</button>\r
                                    <button type="button" class="vex-dialog-button-secondary vex-dialog-button vex-last" (click)="removeNewConnectionFromDevice()" i18n="@@create-ae.remove_connection">Remove connection</button>\r
                                </div>\r
                            </div>\r
                        <!--</div>-->\r
                        <div class="content" *ngIf="!selctedDeviceObject && showconn===true" i18n="@@create-ae.select_first_a_device">\r
                            Select first a device!\r
                        </div>\r
                    </div>\r
                    <div class="aet">\r
                        <h4 (click)="showae=!showae" i18n="@@create-ae.network_ae">Network AE</h4>\r
                        <div  id="networkae" class="content" *ngIf="showae===true">\r
                            <!--<div angular-validator  sf-schema="netAESchema" sf-form="netAEForm" sf-model="netAEModel"  sf-options="sfOptions"></div>-->\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@ae_title">AE Title</label>\r
                                <input type="text" [(ngModel)]="newAetModel.dicomNetworkAE[0].dicomAETitle">\r
                                <span class="description" i18n="@@create-ae.unique_ae_title">Unique AE title for this Network AE</span>\r
                            </div>\r
                            <div class="inputblock">\r
                                <ng-container *ngIf="_.hasIn(selctedDeviceObject,'dicomNetworkConnection[0]') && activetab === 'selectdevice'">\r
                                    <label class="title" i18n="@@create-ae.network_connection_reference">Network Connection Reference</label>\r
                                    <label class="checkbox" *ngFor="let i of selctedDeviceObject.dicomNetworkConnection;let j = index">\r
                                        <input type="checkbox" value="{{'/dicomNetworkConnection/'+j}}" (change)="toggleReference(newAetModel.dicomNetworkAE[0].dicomNetworkConnectionReference,'/dicomNetworkConnection/'+j)">\r
                                        <span>{{i.cn}}</span>\r
                                    </label>\r
                                    <span class="description checkbox" i18n="@@create-ae.json_pointers_to_the_network_connection">JSON Pointers to the Network Connection objects for this AE</span>\r
                                </ng-container>\r
                                <ng-container *ngIf="activetab === 'createdevice'">\r
                                    <label class="title" i18n="@@create-ae.network_connection_reference">Network Connection Reference</label>\r
                                    <label class="checkbox">\r
                                        <input type="checkbox" value="/dicomNetworkConnection/0" checked (change)="toggleReference(newAetModel.dicomNetworkAE[0].dicomNetworkConnectionReference,'/dicomNetworkConnection/0')">\r
                                        <span>{{newAetModel.dicomNetworkConnection[0].cn}}</span>\r
                                    </label>\r
                                    <span class="description checkbox" i18n="@@create-ae.json_pointers_to_the_network_connection">JSON Pointers to the Network Connection objects for this AE</span>\r
                                </ng-container>\r
                                <ng-container *ngIf="!_.hasIn(selctedDeviceObject,'dicomNetworkConnection[0]') && activetab === 'selectdevice'">\r
                                    <div class="helpvalue" i18n="@@create-ae.create_network_connection_suggestion">\r
                                        To be able to select the reference create first a  network connection or select device with a network connection!\r
                                    </div>\r
                                </ng-container>\r
                            </div>\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@create-ae.ae_description">AE Description</label>\r
                                <textarea name="dicomDescription" [(ngModel)]="newAetModel.dicomNetworkAE[0].dicomDescription"></textarea>\r
                                <span class="description" i18n="@@create-ae.unconstrained_text_description">Unconstrained text description of the application entity</span>\r
                            </div>\r
                            <div class="dynamicform">\r
                                <div class="title">\r
                                    <label i18n="@@application_cluster">Application Cluster</label>\r
                                </div>\r
                                <div class="form_content arrayelement">\r
                                    <div class="inputblock array_parent">\r
                                        <div class="array_single" *ngFor="let el of newAetModel.dicomNetworkAE[0].dicomApplicationCluster;let i = index;trackBy:trackByFn">\r
                                            <input type="text" [(ngModel)]="newAetModel.dicomNetworkAE[0].dicomApplicationCluster[i]"><span class="delete" (click)="removeElemnt(newAetModel.dicomNetworkAE[0].dicomApplicationCluster,i)"><i class="material-icons">clear</i></span>\r
                                        </div>\r
                                        <div class="add" (click)="addArrayElement(newAetModel.dicomNetworkAE[0], 'dicomApplicationCluster')"><i class="material-icons">add</i> <span i18n="@@Add">Add</span></div>\r
                                    </div>\r
                                </div>\r
                                <div class="description_parent">\r
                                    <span class="description" i18n="@@create-ae.locally_defined_names_for_a_subset_app">Locally defined names for a subset of related applications</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="tab_body" [hidden]="!(activetab === 'createdevice')">\r
                        <h4 (click)="showAetList=true;showae=false;showselectdevice=false;showconnselecteddevice=false;showconn=false;showdevice=false" i18n="@@create-ae.set_the_new_application_entity">Set the new Application Entity as 'Accepted Calling AE Title' to following AETs:</h4>\r
                        <div class="content" *ngIf="showAetList">\r
                            <div class="inputblock">\r
                                <label class="title" i18n="@@ae_title">AE Title</label>\r
                                <div class="input_part">\r
<!--                                    <j4care-select [(model)]="selectedForAcceptedCallingAET" [placeholder]="'Select AET'" [multiSelectMode]="true" [maxSelectedValueShown]="1" [showSearchField]="true">\r
                                        <j4care-option [value]="''" [title]="'Clear selection'">Clear</j4care-option>\r
                                        <j4care-option *ngFor="let el of configuredAetList" [value]="el.value" [title]="el.text">{{el.text}}</j4care-option>\r
                                    </j4care-select>-->\r
                                    <dcm-drop-down\r
                                            [(model)]="selectedForAcceptedCallingAET"\r
                                            i18n-placeholder\r
                                            [placeholder]="'Select AET'"\r
                                            [maxSelectedValueShown]="1"\r
                                            [options]="configuredAetList"\r
                                            [showSearchField]="true"\r
                                            [multiSelectMode]="true"\r
                                            [showStar]="true"\r
                                    ></dcm-drop-down>\r
                                </div>\r
                                <span class="description">\r
                                    <span  i18n="@@create-ae.already_available_aets">Already available AETs</span><br>\r
                                    <span class="warning" i18n="@@warning_if_configured_vna_will_reject_ates">Warning: If configured, the VNA will reject associations from all other AETs apart from the configured ones!</span>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="test">\r
                        <h4 (click)="showTestBlock=!showTestBlock" i18n="@@create-ae.test_connection">Test Connection</h4>\r
                        <div class="content" *ngIf="showTestBlock && newAetModel.dicomNetworkAE[0].dicomAETitle && newAetModel.dicomNetworkConnection[0].dicomHostname && newAetModel.dicomNetworkConnection[0].dicomPort">\r
                            <div class="block" *ngIf="dicomConnectionns.length > 1">\r
                                <div class="label_part" i18n="@@create-ae.select_one_of_the_dicom_connections">\r
                                    Select one of the DICOM connections:\r
                                </div>\r
                                <div class="input_part">\r
                                    <mat-select [(ngModel)]="selectedDicomConnection">\r
                                        <mat-option value="">*</mat-option>\r
                                        <mat-option *ngFor="let connection of dicomConnectionns" [value]="connection">{{connection.cn}}({{connection.dicomHostname}}:{{connection.dicomPort}})</mat-option>\r
                                    </mat-select>\r
                                </div>\r
                            </div>\r
                            <div class="block">\r
                                <div class="label_part" i18n="@@create-ae.calling_aet">\r
                                    Calling AET:\r
                                </div>\r
                                <div class="input_part">\r
                                    <mat-select [(ngModel)]="selectedCallingAet">\r
                                        <mat-option *ngFor="let obj of aes" [value]="obj.dicomAETitle">{{obj.dicomAETitle}}</mat-option>\r
                                    </mat-select>\r
                                </div>\r
                                <div class="test_button">\r
                                    <button (click)="testConnection()" i18n-title="@@title.verify_aet_host_port" title="Verify AET, host and port before saving" [disabled]="!selectedCallingAet" i18n="@@create-ae.test">TEST</button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <!--<div class="web_app">\r
                        <h4 (click)="showWebApp=!showWebApp" i18n="@@create-ae.test_connection">Web Application</h4>\r
                        <div class="content" *ngIf="showWebApp">\r
                            &lt;!&ndash;<filter-generator *ngIf="webAppSchema"  [schema]="webAppSchema" [model]="webApps"></filter-generator>&ndash;&gt;\r
                            <dynamic-form *ngIf="formObj" [formelements]="formObj" [dontShowSearch]="true" [dontGroup]="true" (submitFunction)="submitFunction($event)"></dynamic-form>\r
                        </div>\r
                    </div>-->\r
                </div>\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button class="save" type="button" (click)="dialogRef.close({device:selctedDeviceObject,newaetmodel:newAetModel,mode:activetab,selectedForAcceptedCallingAET:selectedForAcceptedCallingAET})" [disabled]="!validAeForm()" i18n="@@APPLY">APPLY</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dialogs\create-ae\create-ae.component.scss
var create_ae_component_default2 = "/* src/app/widgets/dialogs/create-ae/create-ae.component.scss */\n.test_button button {\n  background: var(--backgroundHoverColor);\n  color: white;\n  width: 130px;\n  height: 26px;\n  border: none;\n  margin-top: 4px;\n  margin-left: 5px;\n}\n.test_button button:hover {\n  background: #061d2f;\n}\n#networkae .inputblock label.checkbox {\n  display: list-item;\n  list-style: none;\n  height: 26px;\n  line-height: 26px;\n  margin-bottom: 0;\n}\n#networkae .inputblock label.checkbox span {\n  margin-left: 5px;\n}\n";

// src/app/widgets/dialogs/create-ae/create-ae.service.ts
var _a;
var CreateAeService = (_a = class {
  constructor($http, appService, deviceConfigurator) {
    this.$http = $http;
    this.appService = appService;
    this.deviceConfigurator = deviceConfigurator;
  }
  getPrimaryDeviceType() {
    return this.deviceConfigurator.getSchema("device.schema.json").pipe(map(res => {
      try {
        return res.properties.dicomPrimaryDeviceType.items.enum;
      } catch (e) {
        console.log("could not extract from schema", e);
        return ["ARCHIVE", "COMP", "CAD", "DSS", "FILMD", "M3D", "MCD", "PRINT", "CAPTURE", "LOG", "RT", "WSD", "AR", "BMD", "BDUS", "EPS", "CR", "CT", "DX", "ECG", "ES", "XC", "GM", "HD", "IO", "IVOCT", "IVUS", "KER", "LEN", "MR", "MG", "NM", "OAM", "OCT", "OPM", "OP", "OPR", "OPT", "OPTBSV", "OPTENF", "OPV", "OSS", "PX", "PT", "RF", "RG", "SM", "SRF", "US", "VA", "XA"];
      }
    }));
  }
  getWebAppsSchema() {
    return [[[{
      tag: "input",
      type: "string",
      filterKey: "limit",
      description: "Name of the Web Application"
    }, {
      tag: "multi-checkbox",
      options: [{
        text: "Test checkbox1",
        key: "testkey1"
      }, {
        text: "Test checkbox2",
        key: "testkey2"
      }],
      description: "Name of the Web Application"
    }]]];
  }
  getSchema() {
    return {
      "title": "Web Application",
      "description": "Web Application information",
      "type": "object",
      "required": ["dcmWebAppName", "dcmWebServicePath", "dcmWebServiceClass"],
      "properties": {
        "dcmWebAppName": {
          "title": "Web Application name",
          "description": "Name of the Web Application",
          "type": "string",
          "use": ["$.dicomNetworkAE[*].dcmNetworkAE.dcmArchiveNetworkAE.dcmFallbackWadoURIWebAppName", "$.dcmDevice.dcmArchiveDevice.dcmFallbackWadoURIWebAppName"]
        },
        "dicomNetworkConnectionReference": {
          "title": "Web Application Network Connection(s)",
          "description": "Network Connection(s) on which the services of the Web application are available",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "dicomDescription": {
          "title": "Web Application Description",
          "description": "Unconstrained text description of the Web Application",
          "type": "string"
        },
        "dcmWebServicePath": {
          "title": "Web Service Path",
          "description": "HTTP Path of the services of the Web application",
          "type": "string"
        },
        "dcmWebServiceClass": {
          "title": "Web Service Class",
          "description": "Web Service Classes provided by the Web application",
          "type": "array",
          "items": {
            "type": "string",
            "enum": ["QIDO_RS", "STOW_RS", "WADO_RS", "WADO_URI", "UPS_RS", "MWL_RS", "MPPS_RS", "QIDO_COUNT", "DCM4CHEE_ARC", "DCM4CHEE_ARC_AET", "DCM4CHEE_ARC_AET_DIFF", "PAM", "REJECT", "MOVE", "MOVE_MATCHING", "UPS_MATCHING", "ELASTICSEARCH", "XDS_RS", "AGFA_BLOB"]
          }
        },
        "dcmKeycloakClientID": {
          "title": "Keycloak Client ID",
          "description": "Keycloak Client ID for the Web application",
          "type": "string",
          "format": "dcmKeycloakClient"
        },
        "dicomAETitle": {
          "title": "AE Title",
          "description": "AE title of Network AE associated with this Web Application",
          "type": "string",
          "format": "dcmArchiveAETitle"
        },
        "dicomApplicationCluster": {
          "title": "Application Cluster",
          "description": "Locally defined names for a subset of related applications",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "dcmProperty": {
          "title": "Property",
          "description": "Property in format <name>=<value>. E.g.: roles=<accepted-user-role>[,...], IID_PATIENT_URL=http(s)://<viewer-host>:<viewer-port>/IHEInvokeImageDisplay?requestType=PATIENT&patientID={{patientID}} or IID_STUDY_URL=http(s)://<viewer-host>:<viewer-port>/IHEInvokeImageDisplay?requestType=STUDY&studyUID={{studyUID}}, ( Other valid parameters are: 'patientBirthDate' and 'accessionNumber' ) , you could define the target of the Url by setting it to the parameter 'IID_URL_TARGET=_blank|_self'",
          "type": "array",
          "items": {
            "type": "string"
          },
          "format": "dcmProperty"
        },
        "dicomInstalled": {
          "title": "installed",
          "description": "True if the Web Application is installed on network. If not present, information about the installed status of the Web Application is inherited from the device",
          "type": "boolean"
        }
      }
    };
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: DeviceConfiguratorService
}], _a);
CreateAeService = __decorate([Injectable({
  providedIn: "root"
})], CreateAeService);

// src/app/widgets/dialogs/create-ae/create-ae.component.ts
var _a2;
var CreateAeComponent = (_a2 = class {
  constructor($http, dialogRef, mainservice, cfpLoadingBar, httpErrorHandler, aeListService, service, deviceConfigService) {
    this.$http = $http;
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.cfpLoadingBar = cfpLoadingBar;
    this.httpErrorHandler = httpErrorHandler;
    this.aeListService = aeListService;
    this.service = service;
    this.deviceConfigService = deviceConfigService;
    this.showTestBlock = true;
    this.showdevice = false;
    this.showconn = true;
    this.showselectdevice = true;
    this.showconnselecteddevice = false;
    this.showae = true;
    this.activetab = "createdevice";
    this.showAetList = false;
    this._ = lodash_exports;
    this.configuredAetList = [];
    this.selectedForAcceptedCallingAET = [];
    this.dicomConnectionns = [];
    this.selectedDicomConnection = {};
    this.webApps = {};
    this.showWebApp = false;
    this.primaryDeviceType = [];
    this.searchDeviceType = "";
  }
  ngOnInit() {
    this.cfpLoadingBar.complete();
    if (hasIn_default(this.mainservice.global, "uiConfig.dcmuiWidgetAets")) {
      this.configuredAetList = get_default(this.mainservice.global, "uiConfig.dcmuiWidgetAets").map(ae => {
        return new SelectDropdown(ae, ae);
      });
      if (hasIn_default(this.mainservice.global, "uiConfig.dcmuiDefaultWidgetAets")) {
        this.selectedForAcceptedCallingAET = get_default(this.mainservice.global, "uiConfig.dcmuiDefaultWidgetAets");
      }
    } else {
      this.aeListService.getAes().subscribe(aes => {
        this.configuredAetList = aes.map(ae => {
          return new SelectDropdown(ae.dicomAETitle, ae.dicomAETitle);
        });
      }, err => {
        this.httpErrorHandler.handleError(err);
      });
    }
    this.webAppSchema = this.service.getWebAppsSchema();
    this.formObj = this.deviceConfigService.convertSchemaToForm({
      dicomNetworkConnection: {
        cn: "dicom",
        dcmNetworkConnection: {
          dcmBindAddress: "0.0.0.0",
          dcmClientBindAddress: "0.0.0.0",
          dcmMaxOpsPerformed: 0,
          dcmMaxOpsInvoked: 0
        },
        dicomHostname: "127.0.0.1",
        dicomPort: 11112
      }
    }, this.service.getSchema(), {}, "attr");
    this.service.getPrimaryDeviceType().subscribe(res => {
      console.log("create ae-res", res);
      this.primaryDeviceType = res;
    });
  }
  get dicomconn() {
    return this._dicomconn;
  }
  set dicomconn(value) {
    this._dicomconn = value;
  }
  get newAetModel() {
    return this._newAetModel;
  }
  set newAetModel(value) {
    this._newAetModel = value;
  }
  get netAEModel() {
    return this._netAEModel;
  }
  set netAEModel(value) {
    this._netAEModel = value;
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
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  checkClick(e) {
    console.log("e", e);
    let code = e.keyCode ? e.keyCode : e.which;
  }
  getDevice(e) {
    this.selectedDevice = e;
    let $this = this;
    if (this.selectedDevice) {
      if (this.selctedDeviceObject && this.selctedDeviceObject.dicomDeviceName === this.selectedDevice) {
        $this.setReferencesFromDevice();
      } else {
        $this.cfpLoadingBar.start();
        $this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${this.selectedDevice}`).subscribe(response => {
          $this.selctedDeviceObject = response;
          console.log("this.selctedDeviceObject", $this.selctedDeviceObject);
          $this.setReferencesFromDevice();
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.httpErrorHandler.handleError(err);
          $this.cfpLoadingBar.complete();
        });
      }
    }
  }
  setReferencesFromDevice() {
    this.newAetModel.dicomNetworkAE[0].dicomNetworkConnectionReference = [];
  }
  getNameOfRefference(reference) {
    let refIndex = parseInt_default(last_default(split_default(reference, "/")));
    console.log("refIndex", refIndex);
    if (this.selctedDeviceObject && hasIn_default(this.selctedDeviceObject, "dicomNetworkConnection[" + refIndex + "].cn")) {
      console.log("cn", this.selctedDeviceObject.dicomNetworkConnection[refIndex].cn);
      return this.selctedDeviceObject.dicomNetworkConnection[refIndex].cn;
    } else {
      return "";
    }
  }
  toggleReference(model, ref) {
    model = model || [];
    if (this.inArray(ref, model)) {
      remove_default(model, i => {
        return i === ref;
      });
    } else {
      model.push(ref);
    }
    this.dicomConnectionns = this.getDicomConnections();
  }
  inArray(element, array) {
    for (let i of array) {
      if (element === i) {
        return true;
      }
    }
    return false;
  }
  changeTabAERegister(tabname) {
    this.activetab = tabname;
    if (tabname === "createdevice") {
      this.dicomconn = [];
      this.newAetModel = {
        dicomNetworkConnection: [{
          cn: "dicom",
          dicomHostname: "localhost",
          dicomPort: 104
        }],
        dicomNetworkAE: [{
          dicomNetworkConnectionReference: ["/dicomNetworkConnection/0"]
        }],
        dicomInstitutionName: [""]
      };
    } else {
      this.getDevice(null);
      this.dicomconn = [];
      this.newAetModel = {
        dicomNetworkConnection: [{
          cn: "dicom",
          dicomHostname: "localhost",
          dicomPort: 104
        }],
        dicomNetworkAE: [{
          dicomNetworkConnectionReference: []
        }]
      };
    }
  }
  trackByFn(index, item) {
    return index;
  }
  addArrayElement(model, key) {
    if (hasIn_default(model, key) && isArray_default(model[key])) {
      model[key].push("");
    } else {
      model[key] = [""];
    }
  }
  removeElemnt(model, i) {
    model.splice(i, 1);
  }
  /*
      getConn(){
          if(this.newAetModel && this.activetab === "createdevice" && this.newAetModel.dicomNetworkConnection && this.newAetModel.dicomNetworkConnection[0] && this.newAetModel.dicomNetworkConnection[0].cn && this.newAetModel.dicomNetworkConnection[0].cn != ""){
              this.dicomconn = [];
              this.dicomconn.push({
                  "value":"/dicomNetworkConnection/" + 0,
                  "name":this.newAetModel.dicomNetworkConnection[0].cn
              });
          }
      }*/
  updateAetFromDevicename(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 8 && hasIn_default(this.newAetModel, "dicomDeviceName")) {
      let aetUppercase = this.newAetModel.dicomDeviceName.toUpperCase();
      if (this.newAetModel.dicomNetworkAE[0].dicomAETitle.slice(0, -1) === aetUppercase) {
        this.newAetModel.dicomNetworkAE[0].dicomAETitle = aetUppercase;
      }
    } else {
      if (hasIn_default(this.newAetModel, "dicomNetworkAE[0].dicomAETitle") && hasIn_default(this.newAetModel, "dicomDeviceName")) {
        let aetUppercase = this.newAetModel.dicomDeviceName.toUpperCase();
        if (this.newAetModel.dicomNetworkAE[0].dicomAETitle === aetUppercase.slice(0, -1)) {
          this.newAetModel.dicomNetworkAE[0].dicomAETitle = aetUppercase;
        }
      } else {
        if (this.newAetModel.dicomDeviceName) {
          this.newAetModel.dicomNetworkAE[0].dicomAETitle = this.newAetModel.dicomDeviceName.toUpperCase();
        }
      }
    }
  }
  addNewConnectionToDevice() {
    if (!this.newAetModel.dicomNetworkConnection[0].cn || this.newAetModel.dicomNetworkConnection[0].cn === "") {
      this.mainservice.showError("Name of the new connection is empty!");
    } else {
      let hasConnection = false;
      forEach_default(this.selctedDeviceObject.dicomNetworkConnection, (m, i) => {
        if (m.cn === this.newAetModel.dicomNetworkConnection[0].cn) {
          hasConnection = true;
        }
      });
      if (hasConnection) {
        this.mainservice.showError("Connection with that name exist!");
      } else {
        if (hasIn_default(this.selctedDeviceObject, "dicomNetworkConnection")) {
          this.selctedDeviceObject.dicomNetworkConnection.push(cloneDeep_default(this.newAetModel.dicomNetworkConnection[0]));
        } else {
          this.selctedDeviceObject["dicomNetworkConnection"] = [];
          this.selctedDeviceObject.dicomNetworkConnection.push(cloneDeep_default(this.newAetModel.dicomNetworkConnection[0]));
        }
      }
    }
  }
  removeNewConnectionFromDevice() {
    if (hasIn_default(this.newAetModel, "dicomNetworkConnection[0].cn")) {
      forEach_default(this.selctedDeviceObject.dicomNetworkConnection, (m, i) => {
        if (hasIn_default(this.newAetModel, "dicomNetworkConnection[0].cn") && m.cn === this.newAetModel.dicomNetworkConnection[0].cn) {
          this.selctedDeviceObject.dicomNetworkConnection.splice(i, 1);
        }
        console.log("this.newAetModel.dicomNetworkConnection[0]", this.newAetModel.dicomNetworkConnection[0].cn);
      });
    }
    console.log("this.selctedDeviceObject=", this.selctedDeviceObject);
  }
  getDicomConnections() {
    try {
      if (hasIn_default(this.newAetModel, "dicomNetworkAE.0.dicomNetworkConnectionReference") && hasIn_default(this.newAetModel, "dicomNetworkAE.0.dicomNetworkConnectionReference")) {
        return this.selctedDeviceObject.dicomNetworkConnection.filter((connection, i) => {
          return this.newAetModel.dicomNetworkAE["0"].dicomNetworkConnectionReference.indexOf(`/dicomNetworkConnection/${i}`) > -1 && (!hasIn_default(connection, "dcmNetworkConnection.dcmProtocol") || !connection.dcmNetworkConnection.dcmProtocol || connection.dcmNetworkConnection.dcmProtocol === "");
        });
      }
    } catch (e) {
      return [];
    }
    return [];
  }
  testConnection() {
    if (this.selectedCallingAet && this.newAetModel.dicomNetworkAE[0].dicomAETitle && this.newAetModel.dicomNetworkConnection[0].dicomHostname && this.newAetModel.dicomNetworkConnection[0].dicomPort) {
      this.cfpLoadingBar.start();
      let data;
      if (this.activetab === "selectdevice") {
        if (this.dicomConnectionns.length > 1) {
          console.log("this.selectedDicomConnection", this.selectedDicomConnection);
          if (this.selectedDicomConnection) {
            data = {
              host: this.selectedDicomConnection.dicomHostname,
              port: this.selectedDicomConnection.dicomPort
            };
          } else {
            this.mainservice.showError("Multiple DICOM connection selected!");
            this.cfpLoadingBar.complete();
            return;
          }
        } else {
          if (this.dicomConnectionns.length === 0) {
            this.mainservice.showError("No DICOM connection found!");
            this.cfpLoadingBar.complete();
            return;
          } else {
            data = {
              host: this.dicomConnectionns[0].dicomHostname,
              port: this.dicomConnectionns[0].dicomPort
            };
          }
        }
      } else {
        data = {
          host: this.newAetModel.dicomNetworkConnection[0].dicomHostname,
          port: this.newAetModel.dicomNetworkConnection[0].dicomPort
        };
      }
      if (data && data.host && data.port) {
        this.aeListService.echoAe(this.selectedCallingAet, this.newAetModel.dicomNetworkAE[0].dicomAETitle, data).subscribe(response => {
          this.cfpLoadingBar.complete();
          let msg = this.aeListService.generateEchoResponseText(response);
          this.mainservice.setMessage({
            "title": msg.title,
            "text": msg.text,
            "status": msg.status
          });
          this.dicomConnectionns = [];
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      } else {
        this.mainservice.showError("No connection found");
      }
    } else {
      this.mainservice.showError("Parameter is missing, check the parameters Host, port, AE Title and Calling AET!");
    }
  }
  validAeForm() {
    if (!hasIn_default(this.newAetModel, "dicomNetworkAE[0].dicomAETitle") || this.newAetModel.dicomNetworkAE[0].dicomAETitle === "") {
      return false;
    }
    if (!hasIn_default(this.newAetModel, "dicomNetworkAE[0].dicomNetworkConnectionReference[0]") || this.newAetModel.dicomNetworkAE[0].dicomNetworkConnectionReference[0] === "") {
      return false;
    }
    if (this.activetab === "createdevice") {
      if (!hasIn_default(this.newAetModel, "dicomNetworkConnection[0]") || this.newAetModel.dicomNetworkConnection[0].cn && this.newAetModel.dicomNetworkConnection[0].cn === "") {
        return false;
      }
    } else {
      if (!this.selctedDeviceObject) {
        return false;
      }
    }
    return true;
  }
  submitFunction(e) {
    console.log("e", e);
  }
  togglePrimaryDeviceType(type) {
    this.newAetModel.dicomPrimaryDeviceType = this.newAetModel.dicomPrimaryDeviceType || [];
    if (this.newAetModel.dicomPrimaryDeviceType.indexOf(type) > -1) {
      this.newAetModel.dicomPrimaryDeviceType.splice(this.newAetModel.dicomPrimaryDeviceType.indexOf(type), 1);
    } else {
      this.newAetModel.dicomPrimaryDeviceType.push(type);
    }
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
  type: HttpErrorHandler
}, {
  type: AeListService
}, {
  type: CreateAeService
}, {
  type: DeviceConfiguratorService
}], _a2);
CreateAeComponent = __decorate([Component({
  selector: "app-create-ae",
  template: create_ae_component_default,
  imports: [FormsModule, NgClass, DcmDropDownComponent, MatSelect, MatOption, CommonModule, SearchPipe],
  standalone: true,
  styles: [create_ae_component_default2]
})], CreateAeComponent);
export { CreateAeComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/