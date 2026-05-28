import { DynamicFormComponent } from "./chunk-2MYLWM7R.js";
import "./chunk-ECXQZT4K.js";
import { AeListService, ControlService, DeviceConfiguratorService, DevicesService, Hl7ApplicationsService, SearchPipe } from "./chunk-DJWZKPOC.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, CommonModule, Component, HttpErrorHandler, J4careHttpService, KeycloakService, Router, __decorate, assign_default, cloneDeep_default, combineLatest, dropRight_default, findIndex_default, forEach_default, get_default, hasIn_default, j4care, merge_default, set_default, size_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\configuration\device-configurator\device-configurator.component.html
var device_configurator_component_default = `<div class="main_content deviceconfig" >\r
    <a *ngIf="params.length > 1" (click)="fireBreadcrumb(params[params.length-2])" class="device_config_back"><i class="material-icons">chevron_left</i> <span i18n=":@@back:">back</span></a><br>\r
    <div class="breadcrumb_container">\r
        <div class="row">\r
            <div class="btn-group btn-breadcrumb">\r
                <ng-container *ngFor="let breadcrumbs of params;let i = index">\r
                    <a *ngIf="i!=(params.length-1)" (click)="fireBreadcrumb(breadcrumbs)" class="btn btn-default prev_breadcrumb"  title="{{(breadcrumbs.materialIconName === 'subdirectory_arrow_right'? breadcrumbs.childObjectTitle:'')}}">\r
<!--                        <ul class="prefix_breadcrumb" [ngClass]="{'visible_input':breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 9}" *ngIf="breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 0">\r
                            <li *ngIf="breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 9" ><input type="text" [(ngModel)]="searchBreadcrum[i]" placeholder="Search..."></li>\r
                            <li *ngFor="let prefix of breadcrumbs.prefixArray|search:searchBreadcrum[i]">\r
                                <a (click)="fireBreadcrumb(prefix)">{{prefix.title}}</a>\r
                            </li>\r
                        </ul>-->\r
                        <i class="material-icons breadcrumb_icon">{{breadcrumbs.materialIconName}}</i>\r
                        <!--<span *ngIf="breadcrumbs.materialIconName === 'subdirectory_arrow_right'">{{breadcrumbs.childObjectTitle}}:</span>-->\r
                        <span>{{breadcrumbs.title}}</span>\r
                        <ul class="suffix_breadcrumb" *ngIf="breadcrumbs.allArray && breadcrumbs.allArray.length > 0" [ngClass]="{'visible_input':breadcrumbs.allArray && breadcrumbs.allArray.length > 9}">\r
                            <li *ngIf="breadcrumbs.allArray && breadcrumbs.allArray.length > 9" ><input type="text" [(ngModel)]="searchBreadcrum[i]" i18n-placeholder="@@search_dot" placeholder="Search..."></li>\r
                            <li *ngFor="let prefix of breadcrumbs.prefixArray|search:searchBreadcrum[i]" (mouseenter)="hoveredElement(prefix)">\r
                                <a (click)="fireBreadcrumb(prefix)">{{prefix.title}}</a><span class="compare_button"(click)="compare(prefix)"><i class="material-icons">compare_arrows</i></span>\r
                            </li>\r
                            <li class="active_breadcrumb">{{breadcrumbs.title}}</li>\r
                            <li *ngFor="let suffix of breadcrumbs.suffixArray|search:searchBreadcrum[i]" (mouseenter)="hoveredElement(suffix)">\r
                                <a (click)="fireBreadcrumb(suffix)">{{suffix.title}}</a><span class="compare_button"(click)="compare(suffix)"><i class="material-icons">compare_arrows</i></span>\r
                            </li>\r
                        </ul>\r
                    </a>\r
                    <a class="current_title btn btn-default" *ngIf="i == (params.length-1)" (click)="$event.preventDefault()" title="{{(breadcrumbs.materialIconName === 'subdirectory_arrow_right'? breadcrumbs.childObjectTitle:'')}}">\r
<!--                        <ul class="prefix_breadcrumb" *ngIf="breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 0" [ngClass]="{'visible_input':breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 9}">\r
                            <li *ngIf="breadcrumbs.prefixArray && breadcrumbs.prefixArray.length > 9" ><input type="text" [(ngModel)]="searchBreadcrum[i]" placeholder="Search..."></li>\r
                            <li *ngFor="let prefix of breadcrumbs.prefixArray|search:searchBreadcrum[i]">\r
                                <a (click)="fireBreadcrumb(prefix)">{{prefix.title}}</a>\r
                            </li>\r
                        </ul>-->\r
                        <i class="material-icons breadcrumb_icon">{{breadcrumbs.materialIconName}}</i>\r
                        <!--<span *ngIf="breadcrumbs.materialIconName === 'subdirectory_arrow_right'">{{breadcrumbs.childObjectTitle}}:</span>-->\r
                        <span>{{breadcrumbs.title}}</span>\r
                        <ul class="suffix_breadcrumb" *ngIf="breadcrumbs.allArray && breadcrumbs.allArray.length > 0" [ngClass]="{'visible_input':breadcrumbs.allArray && breadcrumbs.allArray.length > 9}">\r
                            <li *ngIf="breadcrumbs.allArray && breadcrumbs.allArray.length > 9" ><input type="text" [(ngModel)]="searchBreadcrum[i]" i18n-placeholder="@@search_dot" placeholder="Search..."></li>\r
                            <li *ngFor="let prefix of breadcrumbs.prefixArray|search:searchBreadcrum[i]" (mouseenter)="hoveredElement(prefix)">\r
                                <a (click)="fireBreadcrumb(prefix)">{{prefix.title}}</a><span class="compare_button"(click)="compare(prefix)"><i class="material-icons">compare_arrows</i></span>\r
                            </li>\r
                            <li class="active_breadcrumb" *ngIf="!breadcrumbs.clone">{{breadcrumbs.title}}</li>\r
                            <li *ngFor="let suffix of breadcrumbs.suffixArray|search:searchBreadcrum[i]" (mouseenter)="hoveredElement(suffix)">\r
                                <a (click)="fireBreadcrumb(suffix)">{{suffix.title}}</a><span class="compare_button"(click)="compare(suffix)"><i class="material-icons">compare_arrows</i></span>\r
                            </li>\r
                        </ul>\r
                    </a>\r
                </ng-container>\r
            </div>\r
        </div>\r
    </div>\r
<!--    <button (click)="deleteForm()">deleteform</button>\r
    <button (click)="addModel()">addmodel</button>-->\r
    <div class="first_block" [class.compare_mode]="showCompare" *ngIf="formObj && showForm">\r
        <dynamic-form [formelements]="formObj" [model]="model" (submitFunction)="submitFunction($event)" [readOnlyMode]="false"></dynamic-form>\r
    </div>\r
    <div class="second_block"  [class.compare_mode]="showCompare" *ngIf="showCompare && toCompareObject && toCompareFormelement">\r
        <div class="close" (click)="showCompare = false"><span class="glyphicon glyphicon-remove"></span></div>\r
        <dynamic-form [formelements]="toCompareFormelement" [model]="toCompareObject" (submitFunction)="submitFunction($event)" [readOnlyMode]="true"></dynamic-form>\r
    </div>\r
</div>\r
`;

// src/app/configuration/device-configurator/device-configurator.component.ts
var _a;
var DeviceConfiguratorComponent = (_a = class {
  constructor(route, router, service, $http, mainservice, controlService, cfpLoadingBar, httpErrorHandler, aeService, hl7Service, devicesService) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.$http = $http;
    this.mainservice = mainservice;
    this.controlService = controlService;
    this.cfpLoadingBar = cfpLoadingBar;
    this.httpErrorHandler = httpErrorHandler;
    this.aeService = aeService;
    this.hl7Service = hl7Service;
    this.devicesService = devicesService;
    this.params = [];
    this.pressedKey = [];
    this.isNew = false;
    this.searchBreadcrum = [];
    this.emptyExtension = false;
    this.showCompare = false;
  }
  addModel() {
    let explod = this.params["device"].split("|");
    this.model = this.device[explod[1]];
  }
  submitFunction(value) {
    let extensionAdded = false;
    let form;
    console.log("in submit");
    let $this = this;
    this.cfpLoadingBar.start();
    let deviceClone = cloneDeep_default(this.service.device);
    if (this.isNew && this.service.checkIfDuplicatedChild(value, this.recentParams)) {
      $this.mainservice.showError("Child already exist, change some value and try saving again!");
      $this.cfpLoadingBar.complete();
    } else {
      if (this.inClone) {
        let clonePart = cloneDeep_default(get_default(this.service.device, this.recentParams.clone));
        this.service.replaceOldAETitleWithTheNew(clonePart, value.dicomAETitle);
        set_default(this.service.device, this.recentParams.devicereff, clonePart);
      }
      this.service.addChangesToDevice(value, this.recentParams.devicereff);
      if (hasIn_default(this.recentParams, "schema")) {
        let newSchema = this.service.getSchemaFromPath(this.service.schema, this.recentParams["schema"]);
        let title = this.service.getBreadcrumbTitleFromModel(value, newSchema);
        this.service.breadcrumbs[this.service.breadcrumbs.length - 1].title = title;
        let key;
        let diff = j4care.diffObjects(get_default(deviceClone, this.recentParams.devicereff), value, true, true);
        if (hasIn_default(newSchema, "properties") || hasIn_default(newSchema, "items.properties")) {
          if (hasIn_default(newSchema, "properties")) {
            key = "properties";
          }
          if (hasIn_default(newSchema, "items.properties")) {
            key = "items.properties";
          }
        }
        let schemaBase = get_default(newSchema, key);
        Object.keys(schemaBase).forEach(k => {
          if (hasIn_default(schemaBase[k], "use") && hasIn_default(diff, `diff.${k}`)) {
            this.service.setValueToReferences(get_default(diff, `first.${k}`), value[k], schemaBase[k]["use"]);
          }
        });
        if (hasIn_default(this.service.device, "dcmArchiveDevice") && this.recentParams.schema === "properties.dicomNetworkAE" && hasIn_default(this.service.device, "dicomNetworkAE") && this.service.device.dicomNetworkAE.length > 0) {
          forEach_default(this.service.device.dicomNetworkAE, (m, i) => {
            if (!hasIn_default(m, "dcmArchiveNetworkAE")) {
              this.service.device.dicomNetworkAE[i]["dcmArchiveNetworkAE"] = {};
              extensionAdded = true;
            }
          });
        }
      }
      if (hasIn_default(this.service.breadcrumbs, "[1].title") && this.service.breadcrumbs[1].title === "[new_device]") {
        let createDevice = this.service.createDevice();
        if (createDevice) {
          createDevice.subscribe(success => {
            console.log("succes", success);
            $this.mainservice.showMsg("Device created successfully!");
            try {
              $this.recentParams = {};
              $this.service.breadcrumbs = $this.params = [{
                url: "/device/devicelist",
                title: "devicelist",
                prefixArray: [],
                suffixArray: [],
                allArray: [],
                devicereff: void 0,
                childObjectTitle: "",
                clone: this.inClone
              }];
            } catch (e) {
              console.warn("error on chagning breadcrumbs", e);
            }
            $this.service.reloadArchive().subscribe(res => {
              console.log("res", res);
              $this.mainservice.showMsg("Reload successful");
              $this.cfpLoadingBar.complete();
            }, err => {
              $this.cfpLoadingBar.complete();
            });
            setTimeout(() => {
              $this.router.navigateByUrl(`/device/edit/${value.dicomDeviceName}`);
            }, 200);
          }, err => {
            assign_default($this.service.device, deviceClone);
            console.log("error", err);
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        } else {
          assign_default($this.service.device, deviceClone);
          console.warn("devicename is missing", this.service.device);
          $this.mainservice.showError("Device name is missing!");
        }
      } else {
        let updateDevice = this.service.updateDevice();
        if (updateDevice) {
          updateDevice.subscribe(success => {
            console.log("succes", success);
            $this.mainservice.showMsg("Device saved successfully!");
            if (extensionAdded) {
              $this.deleteForm();
              $this.showForm = false;
              let url = window.location.hash.substr(1);
              if (url) {
                setTimeout(() => {
                  $this.router.navigateByUrl("blank").then(() => {
                    $this.router.navigateByUrl(url);
                    $this.showForm = true;
                  });
                });
              }
            }
            $this.service.reloadArchive().subscribe(res => {
              console.log("res", res);
              $this.mainservice.showMsg("Reload successful");
              if (this.mainservice.deviceName === this.service.device.dicomDeviceName) {
                try {
                  let global = cloneDeep_default(this.mainservice.global);
                  global["uiConfig"] = get_default($this.service.device, "dcmDevice.dcmuiConfig[0]");
                  this.mainservice.setGlobal(global);
                } catch (e) {
                  console.error("Ui Config could not be updated", e);
                }
              }
              $this.cfpLoadingBar.complete();
            }, err => {
              $this.cfpLoadingBar.complete();
            });
            $this.refreshExternalReferences();
          }, err => {
            assign_default($this.service.device, deviceClone);
            console.log("error", err);
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        } else {
          assign_default($this.service.device, deviceClone);
          $this.mainservice.showError("Device name is missing!");
          console.warn("devicename is missing", this.service.device);
          $this.cfpLoadingBar.complete();
        }
      }
    }
  }
  refreshExternalReferences() {
    this.getAes();
    this.getHl7ApplicationsList();
    this.getDevices();
  }
  getAes() {
    let $this = this;
    this.aeService.getAes().subscribe(response => {
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
  getHl7ApplicationsList() {
    let $this = this;
    this.hl7Service.getHl7ApplicationsList("").subscribe(response => {
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
    }, err => {});
  }
  getDevices() {
    let $this = this;
    this.devicesService.getDevices().subscribe(response => {
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
  ngOnInit() {
    this.currentSavedLanguageCode = localStorage.getItem("current_language");
    this.initCheck(10);
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
    let $this = this;
    let form;
    this.params = $this.service.breadcrumbs;
    this.inClone = false;
    this.service.breadcrumbs.forEach((m, i) => {
      this.searchBreadcrum[i] = "";
    });
    $this.cfpLoadingBar.start();
    this.route.params.subscribe(params => {
      if (this.service.device && !hasIn_default(this.service.device, params.devicereff)) {
        console.log("this.service.device", this.service.device);
        this.emptyExtension = true;
      }
      console.log("allOptions", this.service.allOptions);
      if ($this.service.breadcrumbs.length < 3 || size_default(params.devicereff) < size_default($this.service.breadcrumbs[$this.service.breadcrumbs.length - 1].devicereff) || $this.service.breadcrumbs.length > 2 && hasIn_default($this.service.breadcrumbs, [$this.service.breadcrumbs.length - 1, "devicereff"]) && $this.service.breadcrumbs[$this.service.breadcrumbs.length - 1].devicereff && hasIn_default(this.service.device, $this.service.breadcrumbs[$this.service.breadcrumbs.length - 1].devicereff)) {
        $this.recentParams = params;
        if (!(hasIn_default(params, "devicereff") && hasIn_default(params, "schema")) || !$this.service.schema) {
          let newBreadcrumbObject = {
            url: "/device/edit/" + params["device"],
            title: params["device"],
            prefixArray: [],
            suffixArray: [],
            allArray: [],
            devicereff: "",
            childObjectTitle: "",
            clone: this.inClone
          };
          let newBreadcrumbIndex = findIndex_default($this.service.breadcrumbs, p => {
            return p.url === newBreadcrumbObject.url;
          });
          if (newBreadcrumbIndex > -1) {
            let droppedBreadcrumbs = dropRight_default($this.service.breadcrumbs, $this.service.breadcrumbs.length - newBreadcrumbIndex - 1);
            $this.service.breadcrumbs = droppedBreadcrumbs;
            $this.params = droppedBreadcrumbs;
          } else {
            $this.service.breadcrumbs.push(newBreadcrumbObject);
          }
          let deviceSchemaURL = `./assets/schema/device.schema.json`;
          if (params["device"] == "[new_device]") {
            $this.$http.get(deviceSchemaURL).subscribe(schema => {
              $this.showForm = false;
              $this.device = {};
              $this.service.device = {};
              $this.schema = schema;
              $this.service.schema = schema;
              let formObject = $this.service.convertSchemaToForm($this.device, $this.schema, params, "attr");
              $this.formObj = formObject;
              $this.model = {};
              setTimeout(() => {
                $this.showForm = true;
                $this.cfpLoadingBar.complete();
              }, 1);
            });
          } else {
            combineLatest($this.service.getDevice(params["device"]), $this.$http.get(deviceSchemaURL)
            // .map(res => {let resjson; try{ let pattern = new RegExp("[^:]*:\/\/[^\/]*\/auth\/"); if(pattern.exec(res.url)){ WindowRefService.nativeWindow.location = "/dcm4chee-arc/ui2/";} resjson = res; }catch (e){ resjson = [];} return resjson;})
            ).subscribe(deviceschema => {
              $this.service.device = deviceschema[0];
              $this.service.schema = deviceschema[1];
              if (hasIn_default(params, "devicereff") && hasIn_default(params, "schema")) {
                this.setFormFromParameters(params, form);
              } else {
                $this.showForm = false;
                console.log("deviceschema", deviceschema);
                $this.device = deviceschema[0];
                $this.schema = deviceschema[1];
                let formObject = $this.service.convertSchemaToForm($this.device, $this.schema, params, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
                $this.formObj = formObject;
                $this.model = {};
                setTimeout(() => {
                  $this.cfpLoadingBar.complete();
                  $this.showForm = true;
                }, 1);
              }
            }, err => {
              console.log("error", err);
              $this.cfpLoadingBar.complete();
              $this.httpErrorHandler.handleError(err);
            });
          }
        } else {
          this.setFormFromParameters(params, form);
        }
      } else {
        $this.mainservice.showError("Parent didn't exist, save first the parent");
        $this.router.navigateByUrl($this.service.breadcrumbs[$this.service.breadcrumbs.length - 1].url);
        $this.cfpLoadingBar.complete();
      }
    });
  }
  setFormFromParameters(params, form) {
    let $this = this;
    let newModel = {};
    let newSchema = $this.service.getSchemaFromPath($this.service.schema, params["schema"]);
    if (hasIn_default(params, "clone")) {
      newModel = get_default(this.service.device, params["clone"]);
      if (params["schema"] === "properties.dicomNetworkAE") {}
      this.inClone = true;
    } else {
      newModel = get_default(this.service.device, params["devicereff"]);
    }
    if (newSchema === null) {
      this.service.getSchemaDeep($this.service.schema, params["schema"]).subscribe(schema => {
        $this.service.schema = schema;
        newSchema = get_default(schema, params["schema"]);
        let title = $this.service.getBreadcrumbTitleFromModel(newModel, newSchema);
        if (title == "[NEW]") {
          this.isNew = true;
        } else {
          this.isNew = false;
        }
        let prefixSuffix;
        let newUrl = "/device/edit/" + params["device"] + "/" + params["devicereff"] + "/" + params["schema"];
        if (this.inClone) prefixSuffix = this.service.getPrefixAndSuffixArray(newUrl, this.service.allOptions[params["clone"]]);else prefixSuffix = this.service.getPrefixAndSuffixArray(newUrl, this.service.allOptions[params["schema"]]);
        let newBreadcrumbObject = {
          url: newUrl,
          // title:_.replace(newTitle,lastreff,''),
          title,
          prefixArray: prefixSuffix.prefix,
          suffixArray: prefixSuffix.suffix,
          allArray: [...prefixSuffix.prefix, ...prefixSuffix.suffix],
          devicereff: params["devicereff"],
          materialIconName: this.service.getMaterialIconNameForBreadcrumbs(params["devicereff"]),
          childObjectTitle: newSchema && newSchema.title ? newSchema.title : "",
          clone: this.inClone
        };
        this.service.breadcrumbs = [...this.service.breadcrumbs, ...this.service.getMissingBreadcrumbObjects(newBreadcrumbObject, [])];
        let newBreadcrumbIndex = findIndex_default($this.service.breadcrumbs, p => {
          return this.service.isSameSiblingUrl(p.url, newBreadcrumbObject.url);
        });
        if (newBreadcrumbIndex > -1) {
          let droppedBreadcrumbs = dropRight_default($this.service.breadcrumbs, $this.service.breadcrumbs.length - newBreadcrumbIndex - 1);
          if (this.service.isSameSiblingUrl(newUrl, droppedBreadcrumbs[droppedBreadcrumbs.length - 1].url) && newUrl !== droppedBreadcrumbs[droppedBreadcrumbs.length - 1].url) {
            droppedBreadcrumbs[droppedBreadcrumbs.length - 1] = newBreadcrumbObject;
          }
          $this.service.breadcrumbs = droppedBreadcrumbs;
          $this.params = droppedBreadcrumbs;
        } else {
          if (this.service.isSameSiblingUrl(this.service.breadcrumbs[this.service.breadcrumbs.length - 1].url, newBreadcrumbObject.url)) {
            this.service.breadcrumbs[this.service.breadcrumbs.length - 1] = newBreadcrumbObject;
            $this.params = this.service.breadcrumbs;
          } else {
            $this.service.breadcrumbs.push(newBreadcrumbObject);
            $this.params = this.service.breadcrumbs;
          }
        }
        $this.deleteForm();
        $this.showForm = false;
        $this.model = newModel;
        if (hasIn_default(newSchema, "$ref") || hasIn_default(newSchema, "items.$ref") || hasIn_default(newSchema, "properties.$ref")) {
          let schemaName;
          let deleteRef;
          let refPath = "";
          if (hasIn_default(newSchema, "properties.$ref")) {
            schemaName = newSchema.properties.$ref;
            refPath = "properties";
            deleteRef = () => {
              delete newSchema.properties.$ref;
            };
          }
          if (hasIn_default(newSchema, "items.$ref")) {
            schemaName = newSchema.items.$ref;
            refPath = "items";
            deleteRef = () => {
              delete newSchema.items.$ref;
            };
          }
          if (hasIn_default(newSchema, "$ref")) {
            schemaName = newSchema.$ref;
            deleteRef = () => {
              delete newSchema.$ref;
            };
          }
          $this.service.getSchema(schemaName).subscribe(subRefSchema => {
            deleteRef();
            if (refPath === "") {
              merge_default(newSchema, subRefSchema);
            } else {
              set_default(newSchema, refPath, subRefSchema);
              refPath = "." + refPath;
            }
            if (this.inClone) {}
            set_default($this.service.schema, params["schema"], newSchema);
            form = $this.service.convertSchemaToForm($this.model, newSchema, params, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
            $this.formObj = form;
            setTimeout(() => {
              $this.showForm = true;
              $this.cfpLoadingBar.complete();
            }, 1);
          }, err => {
            $this.cfpLoadingBar.complete();
          });
        } else {
          form = $this.service.convertSchemaToForm(newModel, newSchema, params, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
          set_default($this.service.schema, params["schema"], newSchema);
          $this.formObj = form;
          setTimeout(() => {
            $this.showForm = true;
            $this.cfpLoadingBar.complete();
          }, 1);
        }
      });
    } else {
      let title = $this.service.getBreadcrumbTitleFromModel(newModel, newSchema);
      if (title == "[NEW]") {
        this.isNew = true;
      } else {
        this.isNew = false;
      }
      let prefixSuffix;
      let newUrl = "/device/edit/" + params["device"] + "/" + params["devicereff"] + "/" + params["schema"];
      if (this.inClone) prefixSuffix = this.service.getPrefixAndSuffixArray(newUrl, this.service.allOptions[params["clone"]]);else prefixSuffix = this.service.getPrefixAndSuffixArray(newUrl, this.service.allOptions[params["schema"]]);
      let newBreadcrumbObject = {
        url: newUrl,
        // title:_.replace(newTitle,lastreff,''),
        title,
        prefixArray: prefixSuffix.prefix,
        suffixArray: prefixSuffix.suffix,
        allArray: [...prefixSuffix.prefix, ...prefixSuffix.suffix],
        devicereff: params["devicereff"],
        materialIconName: this.service.getMaterialIconNameForBreadcrumbs(params["devicereff"]),
        childObjectTitle: newSchema && newSchema.title ? newSchema.title : "",
        clone: this.inClone
      };
      let newBreadcrumbIndex = findIndex_default($this.service.breadcrumbs, p => {
        return this.service.isSameSiblingUrl(p.url, newBreadcrumbObject.url);
      });
      if (newBreadcrumbIndex > -1) {
        let droppedBreadcrumbs = dropRight_default($this.service.breadcrumbs, $this.service.breadcrumbs.length - newBreadcrumbIndex - 1);
        if (this.service.isSameSiblingUrl(newUrl, droppedBreadcrumbs[droppedBreadcrumbs.length - 1].url) && newUrl !== droppedBreadcrumbs[droppedBreadcrumbs.length - 1].url) {
          droppedBreadcrumbs[droppedBreadcrumbs.length - 1] = newBreadcrumbObject;
        }
        $this.service.breadcrumbs = droppedBreadcrumbs;
        $this.params = droppedBreadcrumbs;
      } else {
        if (this.service.isSameSiblingUrl(this.service.breadcrumbs[this.service.breadcrumbs.length - 1].url, newBreadcrumbObject.url)) {
          this.service.breadcrumbs[this.service.breadcrumbs.length - 1] = newBreadcrumbObject;
          $this.params = this.service.breadcrumbs;
        } else {
          $this.service.breadcrumbs.push(newBreadcrumbObject);
          $this.params = this.service.breadcrumbs;
        }
      }
      $this.deleteForm();
      $this.showForm = false;
      $this.model = newModel;
      if (hasIn_default(newSchema, "$ref") || hasIn_default(newSchema, "items.$ref") || hasIn_default(newSchema, "properties.$ref")) {
        let schemaName;
        let deleteRef;
        let refPath = "";
        if (hasIn_default(newSchema, "properties.$ref")) {
          schemaName = newSchema.properties.$ref;
          refPath = "properties";
          deleteRef = () => {
            delete newSchema.properties.$ref;
          };
        }
        if (hasIn_default(newSchema, "items.$ref")) {
          schemaName = newSchema.items.$ref;
          refPath = "items";
          deleteRef = () => {
            delete newSchema.items.$ref;
          };
        }
        if (hasIn_default(newSchema, "$ref")) {
          schemaName = newSchema.$ref;
          deleteRef = () => {
            delete newSchema.$ref;
          };
        }
        $this.service.getSchema(schemaName).subscribe(subRefSchema => {
          deleteRef();
          if (refPath === "") {
            merge_default(newSchema, subRefSchema);
          } else {
            set_default(newSchema, refPath, subRefSchema);
            refPath = "." + refPath;
          }
          if (this.inClone) {}
          set_default($this.service.schema, params["schema"], newSchema);
          form = $this.service.convertSchemaToForm($this.model, newSchema, params, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
          $this.formObj = form;
          setTimeout(() => {
            $this.showForm = true;
            $this.cfpLoadingBar.complete();
          }, 1);
        }, err => {
          $this.cfpLoadingBar.complete();
        });
      } else {
        form = $this.service.convertSchemaToForm(newModel, newSchema, params, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
        set_default($this.service.schema, params["schema"], newSchema);
        $this.formObj = form;
        setTimeout(() => {
          $this.showForm = true;
          $this.cfpLoadingBar.complete();
        }, 1);
      }
    }
  }
  deleteForm() {
    this.model = {};
    this.formObj = [];
  }
  clearSearch() {
    this.searchBreadcrum.forEach((m, i) => {
      this.searchBreadcrum[i] = "";
    });
  }
  fireBreadcrumb(breadcrumb) {
    this.clearSearch();
    if (breadcrumb.url === "/device/devicelist") {
      this.params = this.service.breadcrumbs = [{
        url: "/device/devicelist",
        title: "devicelist",
        prefixArray: [],
        suffixArray: [],
        allArray: [],
        devicereff: void 0,
        childObjectTitle: "",
        clone: this.inClone
      }];
    }
    this.router.navigateByUrl(breadcrumb.url);
  }
  hoveredElement(element) {
    console.log("element", element);
    console.log("device", this.service.device);
    console.log("obj", this.service.getObjectsFromPath(element.url));
  }
  compare(element) {
    console.log("param", this.params);
    this.showCompare = false;
    this.toCompareObject = void 0;
    this.toCompareObject = void 0;
    setTimeout(() => {
      let objects = this.service.getObjectsFromPath(element.url);
      this.toCompareFormelement = this.service.convertSchemaToForm(objects.model, objects.schemaObject, {
        device: "dcm4chee-arc",
        devicereff: objects.devicereff,
        schema: objects.schema
      }, this.inClone || this.isNew || this.emptyExtension ? "attr" : "ext");
      this.toCompareObject = objects.model;
      this.showCompare = true;
    }, 1);
  }
  ngOnDestroy() {
    console.log("param", this.recentParams);
    console.log("ondestroy", this.service.breadcrumbs);
  }
}, _a.ctorParameters = () => [{
  type: ActivatedRoute
}, {
  type: Router
}, {
  type: DeviceConfiguratorService
}, {
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: ControlService
}, {
  type: LoadingBarService
}, {
  type: HttpErrorHandler
}, {
  type: AeListService
}, {
  type: Hl7ApplicationsService
}, {
  type: DevicesService
}], _a);
DeviceConfiguratorComponent = __decorate([Component({
  selector: "app-device-configurator",
  template: device_configurator_component_default,
  standalone: true,
  imports: [CommonModule, FormsModule, DynamicFormComponent, SearchPipe]
})], DeviceConfiguratorComponent);
export { DeviceConfiguratorComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/