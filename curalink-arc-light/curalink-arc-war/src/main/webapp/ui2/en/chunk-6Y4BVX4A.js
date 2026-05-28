import { TableService } from "./chunk-A3KYGHL3.js";
import { DevicesService, TableSchemaElement } from "./chunk-DJWZKPOC.js";
import { MessagingComponent } from "./chunk-PGYA2BHH.js";
import { AppRequestsService, PermissionService } from "./chunk-YEAVTBOB.js";
import { AppService, Component, Globalvar, HTTP_INTERCEPTORS, HostListener, HttpBackend, HttpClient, HttpErrorHandler, HttpHeaders, Injectable, Injector, J4careHttpService, KeycloakService, MatDialog, MatDialogRef, Title, ViewChild, ViewContainerRef, __decorate, cloneDeep_default, concat_default, get_default, hasIn_default, isEqual_default, j4care, lodash_exports, map, set_default, switchMap } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\app.component.html
var app_component_default = `<ngx-loading-bar [color]="'#2d404f'"></ngx-loading-bar>\r
\r
<app-messaging></app-messaging>\r
\r
<div class="language_switcher" *ngIf="languageSwitcher && languageSwitcher.currentSelectedLanguage">\r
    <div class="default_block" (click)="languageSwitcher.open = !languageSwitcher.open">\r
        <img src="{{languageSwitcher.currentSelectedLanguage.flag}}" alt="">\r
        <span>{{languageSwitcher.currentSelectedLanguage.nativeName}}</span>\r
    </div>\r
    <ul *ngIf="languageSwitcher.open" class="languages">\r
        <li *ngFor="let lang of languageSwitcher.languageList" (click)="switchLanguage(lang)">\r
            <img src="{{lang.flag}}" alt=""> <span>{{lang.nativeName}}</span>\r
        </li>\r
    </ul>\r
</div>\r
<div class="config_menu">\r
    <div class="user" *ngIf="user && user.user && user.user != 'anonymous'" (clickOutside)="showUserMenu=false">\r
        <span (click)="showUserMenu = !showUserMenu" id="usermenu">\r
            <div class="username" *ngIf="user && user.user && user.user != 'anonymous'"><i\r
                    class="glyphicon glyphicon-user"></i> {{user.user}}</div>\r
            <i class="config glyphicon glyphicon-cog"></i>\r
        </span>\r
        <ul *ngIf="showUserMenu">\r
            <li *ngIf="user && user.user && user.user != 'anonymous'"><a\r
                    href="{{authServerUrl}}/realms/{{realm}}/account" target="_blank" i18n="@@menu.edit_account">Edit\r
                    Account</a></li>\r
            <li *ngIf="hasViewRealm"><a href="{{authServerUrl}}/admin/{{realm}}/console" target="_blank"\r
                    i18n="@@menu.admin_realm">Admin Realm</a></li>\r
            <li *ngIf="hasAdministrator" i18n-title="@@title.app.go_to_wildfly_admin"\r
                title="Go to Wildfly Administration Console"><a (click)="gotToWildflyConsole($event)" target="_blank"\r
                    i18n="@@menu.wildfly_console">Wildfly Console</a></li>\r
            <li *ngIf="user && user.user && user.user != 'anonymous'"><a href=""\r
                    (click)="$event.preventDefault();logout()" i18n="@@menu.logout">Logout</a></li>\r
            <li><a (click)="$event.preventDefault();productLabelling()" i18n="@@about">About</a></li>\r
        </ul>\r
    </div>\r
</div>\r
<div class="overlay" *ngIf="dcm4cheeArch && dcm4cheeArch.open" (click)="mainservice.dcm4cheeArcConfig.open = false">\r
</div>\r
<div class="clock" [ngClass]="{'extend':!clockUnExtended && !dcmuiHideClock}"\r
    *ngIf="currentServerTime || j4care.is(mainservice, 'dcm4cheeArcConfig.hasMoreThanOneBaseUrl')"\r
    (mouseenter)="clockUnExtended = true" (mouseleave)="hideExtendedClock()">\r
    <div class="base_url_switcher" *ngIf="j4care.is(mainservice, 'dcm4cheeArcConfig.hasMoreThanOneBaseUrl')">\r
        <i class="config glyphicon glyphicon-cog"\r
            (click)="mainservice.dcm4cheeArcConfig.open = !mainservice.dcm4cheeArcConfig.open"></i>\r
        <ul *ngIf="j4care.is(mainservice,'dcm4cheeArcConfig.open')" class="base_url_dropdown">\r
            <li class="header" title="{{changeDeviceText.title}}">{{changeDeviceText.label}}:</li>\r
            <li *ngFor="let url of _.get(mainservice, 'dcm4cheeArcConfig.dcm4chee-arc-urls')"\r
                (click)="switchBaseUrl(url)" title="{{url}}"\r
                [ngClass]="{'selected':mainservice['dcm4cheeArcConfig']['deviceNameUrlMap'][url] === myDeviceName}">\r
                {{mainservice['dcm4cheeArcConfig']['deviceNameUrlMap'][url]}}\r
            </li>\r
        </ul>\r
    </div>\r
    <!--    <div class="default_block" >\r
        <span>{{dcm4cheeArch['deviceNameUrlMap'][mainservice.baseUrl]}}</span>\r
    </div>-->\r
\r
    <ng-container *ngIf="currentServerTime && !dcmuiHideClock">\r
        <div class="time" i18n-title="@@title.app.server_time_param"\r
            title="Server time: {{j4care.fullDateToString(currentServerTime)}}">{{currentServerTime.getHours() < 10\r
                ? '0' +currentServerTime.getHours():currentServerTime.getHours()}}:{{currentServerTime.getMinutes() < 10\r
                ? '0' +currentServerTime.getMinutes():currentServerTime.getMinutes()}}:{{currentServerTime.getSeconds()\r
                < 10 ? '0' +currentServerTime.getSeconds():currentServerTime.getSeconds()}}</div>\r
                <div class="text">{{mainservice.archiveDeviceName || myDeviceName}}</div>\r
    </ng-container>\r
    <ng-container *ngIf="dcmuiHideClock">\r
        <div class="text">{{mainservice.archiveDeviceName || myDeviceName}}</div>\r
    </ng-container>\r
</div>\r
<div class="background"></div>\r
<!--<app-widgets></app-widgets>-->\r
<div class="toggle-button out" (click)="showMenu = true;" *ngIf="!showMenu">\r
    <mat-icon class="menu_button">reorder</mat-icon>\r
</div>\r
<ul id="mainmenu" class="nav slideInLeft animated" *ngIf="showMenu" (clickOutside)="closeFromOutside()"\r
    [clickOutsideExceptionClass]="'menu_button'">\r
    <div (click)="showMenu = false;" class="glyphicon glyphicon-align-justify toggle-button "></div>\r
\r
    <!-- Monitoring -->\r
    <li (click)="showMenu = false;" [permission]="{id:'menu-monitoring',param:'visible'}"><a\r
            routerLink="monitoring/associations" routerLinkActive="active" i18n="@@menu.monitoring">Monitoring</a></li>\r
\r
    <!-- Dashboard -->\r
    <li (click)="showMenu = false;"><a routerLink="dashboard" routerLinkActive="active">\r
            <i class="material-icons">dashboard</i>\r
            <span>All Hospitals Dashboard</span>\r
        </a></li>\r
\r
    <!-- Hospital Dashboards Dropdown -->\r
    <li class="dropdown-menu-item" *ngIf="hospitalList && hospitalList.length > 0">\r
        <a (click)="hospitalMenuOpen = !hospitalMenuOpen" class="dropdown-toggle">\r
            <i class="material-icons">local_hospital</i>\r
            <span>Hospital Dashboards</span>\r
            <i class="material-icons chevron">{{hospitalMenuOpen ? 'expand_less' : 'expand_more'}}</i>\r
        </a>\r
        <ul class="submenu" *ngIf="hospitalMenuOpen">\r
            <li (click)="showMenu = false;" *ngFor="let hospital of hospitalList">\r
                <a [routerLink]="['/dashboard', hospital]" routerLinkActive="active">{{ hospital }}</a>\r
            </li>\r
        </ul>\r
    </li>\r
\r
    <!-- Navigation Dropdown -->\r
    <li [permission]="{id:'menu-study',param:'visible'}" class="dropdown-menu-item">\r
        <a (click)="navigationOpen = !navigationOpen" class="dropdown-toggle">\r
            <i class="material-icons">navigation</i>\r
            <span i18n="@@menu.navigation">Navigation</span>\r
            <i class="material-icons chevron">{{navigationOpen ? 'expand_less' : 'expand_more'}}</i>\r
        </a>\r
        <ul class="submenu" *ngIf="navigationOpen">\r
            <li (click)="showMenu = false;"><a routerLink="study/patient" routerLinkActive="active"\r
                    i18n="@@patients">Patient</a></li>\r
            <li (click)="showMenu = false;"><a routerLink="study/study" routerLinkActive="active"\r
                    i18n="@@studies">Studies</a></li>\r
            <li (click)="showMenu = false;"><a routerLink="study/series" routerLinkActive="active"\r
                    i18n="@@series">Series</a></li>\r
            <li (click)="showMenu = false;"><a routerLink="study/mwl" routerLinkActive="active" i18n="@@mwl">MWL</a>\r
            </li>\r
            <li (click)="showMenu = false;"><a routerLink="study/mpps" routerLinkActive="active" i18n="@@mpps">MPPS</a>\r
            </li>\r
            <li (click)="showMenu = false;"><a routerLink="study/uwl" routerLinkActive="active" i18n="@@work_items">Work\r
                    Items</a></li>\r
            <li (click)="showMenu = false;"><a routerLink="study/diff" routerLinkActive="active"\r
                    i18n="@@navigation.tab.diffs">Compare</a></li>\r
        </ul>\r
    </li>\r
\r
    <!-- Configuration Dropdown -->\r
    <li [permission]="{id:'menu-configuration',param:'visible'}" class="dropdown-menu-item">\r
        <a (click)="configurationOpen = !configurationOpen" class="dropdown-toggle">\r
            <i class="material-icons">settings</i>\r
            <span i18n="@@menu.configuration">Configuration</span>\r
            <i class="material-icons chevron">{{configurationOpen ? 'expand_less' : 'expand_more'}}</i>\r
        </a>\r
        <ul class="submenu" *ngIf="configurationOpen">\r
            <li (click)="showMenu = false;"><a routerLink="device/devicelist" routerLinkActive="active"\r
                    i18n="@@menu.devices">Devices</a></li>\r
        </ul>\r
    </li>\r
</ul>\r
<!--<img src="assets/img/logo.png" class="logo" i18n-title="@@about" title="About" (click)="productLabelling()" >-->\r
<div class="logo" i18n-title="@@about" title="About" (click)="productLabelling()"></div>\r
<router-outlet></router-outlet>\r
<div class="scroll_up glyphicon glyphicon-menu-up animated" *ngIf="showScrollButton"\r
    [ngClass]="{fadeIn:showScrollButton, fadeOut:!showScrollButton}" (click)="scrollUp()">\r
</div>`;

// angular:jit:template:src\app\widgets\dialogs\product-labelling\product-labelling.component.html
var product_labelling_component_default = `<div class="vex vex-theme-os info-dialog" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-content">\r
        <div class="info-block">\r
        <div class="head">\r
        <h1>J4Care</h1>\r
        <h3>SMooTH Archive</h3>\r
        <h4><ng-container i18n="@@product_labelling.version">Version</ng-container> {{archive.dicomSoftwareVersion}}</h4>\r
        </div>\r
        <div class="content">\r
        <p><b>J4Care GmbH</b><br/>Enzersdorfer Strasse 7<br/>A-2340 M\xF6dling</p>\r
        </div>\r
        <div class="pre_footer">\r
        <span>{{year || '2020'}}</span>\r
        </div>\r
        <div class="footer">\r
        <div class="footer_left col-sm-6">\r
        </div>\r
        </div>\r
        </div>\r
    </div>\r
</div>`;

// src/app/widgets/dialogs/product-labelling/product-labelling.component.ts
var _a;
var ProductLabellingComponent = (_a = class {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.year = j4care.formatDate(/* @__PURE__ */new Date(), "yyyy");
  }
  get archive() {
    return this._archive;
  }
  set archive(value) {
    this._archive = value;
  }
}, _a.ctorParameters = () => [{
  type: MatDialogRef
}], _a);
ProductLabellingComponent = __decorate([Component({
  selector: "app-product-labelling",
  template: product_labelling_component_default,
  standalone: true
})], ProductLabellingComponent);

// src/app/helpers/keycloak-service/keycloak-http-client.service.ts
var _a2;
var KeycloakHttpClient = (_a2 = class extends HttpClient {
  /*  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, private _keycloakService: KeycloakService) {
    //super(_backend, _defaultOptions);
    super()
  }*/
  constructor(backend, injector) {
    super(new J4careHandlerService(backend, injector, HTTP_INTERCEPTORS));
    this.injector = injector;
  }
}, _a2.ctorParameters = () => [{
  type: HttpBackend
}, {
  type: Injector
}], _a2);
KeycloakHttpClient = __decorate([Injectable()], KeycloakHttpClient);
var MyHttpInterceptorHandler = class {
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }
  handle(req) {
    console.log("req1", req);
    return this.interceptor.intercept(req, this.next);
  }
};
var J4careHandlerService = class {
  constructor(backend, injector, interceptors) {
    this.backend = backend;
    this.injector = injector;
    this.interceptors = interceptors;
    this.chain = null;
  }
  handle(req) {
    console.log("req", req);
    if (this.chain === null) {
      const interceptors = this.injector.get(this.interceptors, []);
      this.chain = interceptors.reduceRight((next, interceptor) => new MyHttpInterceptorHandler(next, interceptor), this.backend);
    }
    return this.chain.handle(req);
  }
};

// src/app/models/language-switcher.ts
var LanguageSwitcher = class {
  constructor(languageConfig) {
    this._open = false;
    try {
      this._languageList = languageConfig.dcmLanguages.map(language => {
        return j4care.extractLanguageDataFromString(language);
      });
      const currentSavedLanguage = localStorage.getItem("current_language");
      if (currentSavedLanguage) {
        this._currentSelectedLanguage = this.languageList.filter(language => language.code === currentSavedLanguage)[0];
      } else {
        this._currentSelectedLanguage = this.languageList[0];
      }
    } catch (e) {
      j4care.log("Error on language-switcher construct", e);
    }
  }
  get currentSelectedLanguage() {
    return this._currentSelectedLanguage;
  }
  set currentSelectedLanguage(value) {
    this._currentSelectedLanguage = value;
  }
  get languageList() {
    return this._languageList;
  }
  set languageList(value) {
    this._languageList = value;
  }
  get open() {
    return this._open;
  }
  set open(value) {
    this._open = value;
  }
};

// src/app/helpers/keycloak-service/keycloak-helper.service.ts
var _a3;
var KeycloakHelperService = (_a3 = class {
  constructor(keycloakService, $http) {
    this.keycloakService = keycloakService;
    this.$http = $http;
  }
  changeLanguageToUserProfile(languageCode) {
    let userInfoTemp;
    return this.keycloakService.getUserInfo().pipe(map(userInfo => {
      userInfoTemp = userInfo;
      return userInfo;
    }), switchMap(userInfo => this.$http.get(`${KeycloakService.keycloakConfig.url}/admin/realms/dcm4che/users/${userInfoTemp.userProfile.id}?userProfileMetadata=true`)), map(userProfileMetadata => {
      set_default(userProfileMetadata, KeycloakService.languageProfilePath, languageCode);
      return userProfileMetadata;
    }), switchMap(userProfileMetadata => this.$http.put(`${KeycloakService.keycloakConfig.url}/admin/realms/dcm4che/users/${userInfoTemp.userProfile.id}`, userProfileMetadata)));
  }
}, _a3.ctorParameters = () => [{
  type: KeycloakService
}, {
  type: J4careHttpService
}], _a3);
KeycloakHelperService = __decorate([Injectable({
  providedIn: "root"
})], KeycloakHelperService);

// src/app/app.component.ts
var worker = new Worker(new URL("worker-B6VEG7N7.js", import.meta.url), {
  type: "module",
  name: "server-time"
});
var _a4;
var AppComponent = (_a4 = class {
  constructor(viewContainerRef, dialog, mainservice, appRequests, permissionService, keycloakHttpClient, _keycloakService, keycloakHelperService, httpErrorHandler, title) {
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.mainservice = mainservice;
    this.appRequests = appRequests;
    this.permissionService = permissionService;
    this.keycloakHttpClient = keycloakHttpClient;
    this._keycloakService = _keycloakService;
    this.keycloakHelperService = keycloakHelperService;
    this.httpErrorHandler = httpErrorHandler;
    this.title = title;
    this.progressValue = 30;
    this.user = {};
    this.showUserMenu = false;
    this.url = "/auth";
    this.logoutUrl = "";
    this.hasAdministrator = false;
    this.hasViewRealm = false;
    this.showMenu = false;
    this.showScrollButton = false;
    this.navigationOpen = false;
    this.configurationOpen = false;
    this.hospitalMenuOpen = false;
    this.hospitalList = [];
    this.j4care = j4care;
    this.clockUnExtended = true;
    this.myDeviceName = "";
    this.sidenavopen = false;
    this.superUser = false;
    this._ = lodash_exports;
    this.changeDeviceText = {
      label: "Available devices",
      title: "Here you can change the archive device to which the calls are made"
    };
    this.dcmuiHideClock = false;
    this.dcmuiHideOtherPatientIDs = false;
    this.testurl = "";
    console.log("in app.component construct", window);
  }
  ngOnInit() {
    console.warn("oniinit in app.component");
    if (j4care.hasSet(KeycloakService, "keycloakAuth.token")) {
      this.mainservice.updateGlobal("notSecure", false);
      this.init();
    } else {
      this._keycloakService.init(Globalvar.KEYCLOAK_OPTIONS()).subscribe(res => {
        this.init();
      }, err => {
        this.init();
      });
    }
  }
  switchBaseUrl(url) {
    try {
      if (url) {
        if (hasIn_default(this.mainservice, "dcm4cheeArcConfig.deviceNameUrlMap") && this.mainservice.dcm4cheeArcConfig.deviceNameUrlMap[url] && this.mainservice.dcm4cheeArcConfig.deviceNameUrlMap[url] !== "NOT_FOUND") {
          this.mainservice.baseUrl = url;
          this.mainservice.archiveDeviceName = this.mainservice.dcm4cheeArcConfig.deviceNameUrlMap[url];
        }
        this.mainservice.dcm4cheeArcConfig.open = false;
      }
    } catch (e) {
      console.error(e);
    }
  }
  initLanguage() {
    let languageConfig = localStorage.getItem("languageConfig");
    if (languageConfig) {
      this.languageSwitcher = new LanguageSwitcher(JSON.parse(languageConfig));
    }
    this.mainservice.globalSet$.subscribe(global => {
      if (hasIn_default(global, "uiConfig")) {
        console.warn("initlanguage in app.component after uiConfig");
        if (hasIn_default(global, "uiConfig.dcmuiInstitutionNameFilterType") && !this.dcmuiInstitutionNameFilterType) {
          this.dcmuiInstitutionNameFilterType = get_default(global, "uiConfig.dcmuiInstitutionNameFilterType");
          global["dcmuiInstitutionNameFilterType"] = this.dcmuiInstitutionNameFilterType;
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiInstitutionName") && !this.dcmuiInstitutionName) {
          this.dcmuiInstitutionName = get_default(global, "uiConfig.dcmuiInstitutionName");
          global["dcmuiInstitutionName"] = this.dcmuiInstitutionName;
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiLanguageConfig[0]")) {
          if (!isEqual_default(languageConfig, get_default(global, "uiConfig.dcmuiLanguageConfig[0]"))) {
            languageConfig = get_default(global, "uiConfig.dcmuiLanguageConfig[0]");
            localStorage.setItem("languageConfig", JSON.stringify(languageConfig));
            if (languageConfig) {
              this.languageSwitcher = new LanguageSwitcher(languageConfig);
            }
          }
        }
        if (hasIn_default(global, "uiConfig.dcmuiDateTimeFormat") && !this.dateTimeFormat) {
          this.dateTimeFormat = j4care.extractDateTimeFormat(get_default(global, "uiConfig.dcmuiDateTimeFormat"));
          global["dateTimeFormat"] = this.dateTimeFormat;
          console.log("Global Date Time Format:", this.dateTimeFormat);
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiPersonNameFormat") && !this.personNameFormat) {
          this.personNameFormat = get_default(global, "uiConfig.dcmuiPersonNameFormat");
          global["personNameFormat"] = this.personNameFormat;
          console.log("Global Patient Name Format:", this.personNameFormat);
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiHideClock") && !this.dcmuiHideClock) {
          this.dcmuiHideClock = get_default(global, "uiConfig.dcmuiHideClock");
          global["dcmuiHideClock"] = this.dcmuiHideClock;
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiHideOtherPatientIDs") && !this.dcmuiHideOtherPatientIDs) {
          this.dcmuiHideOtherPatientIDs = get_default(global, "uiConfig.dcmuiHideOtherPatientIDs");
          global["dcmuiHideOtherPatientIDs"] = this.dcmuiHideOtherPatientIDs;
          this.mainservice.setGlobal(global);
        }
        if (hasIn_default(global, "uiConfig.dcmuiPageTitle") && !this.dcmuiPageTitle) {
          this.dcmuiPageTitle = get_default(global, "uiConfig.dcmuiPageTitle");
          global["dcmuiPageTitle"] = this.dcmuiPageTitle;
          if (this.dcmuiPageTitle && this.dcmuiPageTitle !== "") {
            this.title.setTitle(this.dcmuiPageTitle);
          }
          this.mainservice.setGlobal(global);
        }
      }
    });
  }
  /* applyLanguageProfile(languageProfile:LanguageProfile|LanguageProfile[]){
       try{
           let profile:LanguageProfile;
           if(languageProfile instanceof Array){
               profile =<LanguageProfile> languageProfile[0];
           }else{
               profile = languageProfile;
           }
           const currentLanguageCode = this.getActiveLanguageCodeFromURL();
           if(profile.dcmDefaultLanguage.indexOf(currentLanguageCode) === -1){
               //reload
               const profileDefaultLanguageCode = profile.dcmDefaultLanguage.substring(0,2);
               console.warn("redirecting in applylanguage",currentLanguageCode, ", defaultlanguageprof",profileDefaultLanguageCode);
               const localLanguage:any = {
                   language:profile.dcmDefaultLanguage,
                   username:this.mainservice.user.user || ""
               };
               localStorage.setItem('current_language', JSON.stringify(localLanguage));
               window.location.href = `/dcm4chee-arc/ui2/${profileDefaultLanguageCode}/`;
           }
           console.log("locale")
       }catch (e) {
       }
   }*/
  getActiveLanguageCodeFromURL() {
    try {
      const currentPath = location.pathname;
      const regex = /dcm4chee-arc\/ui2\/(\w*)\//;
      let match = regex.exec(currentPath);
      if (match !== null) {
        return match[1];
      }
    } catch (e) {
      return "en";
    }
  }
  init() {
    this.setUserInformation(() => {
      this.initLanguage();
    });
    Date.prototype.toDateString = function () {
      return `${this.getFullYear()}${j4care.getSingleDateTimeValueFromInt(this.getMonth() + 1)}${j4care.getSingleDateTimeValueFromInt(this.getDate())}${j4care.getSingleDateTimeValueFromInt(this.getHours())}${j4care.getSingleDateTimeValueFromInt(this.getMinutes())}${j4care.getSingleDateTimeValueFromInt(this.getSeconds())}`;
    };
    this.initGetDevicename(2);
    this.loadHospitalList();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.startTime();
      } else {
        if (worker) {
          worker.postMessage({
            serverTime: this.currentServerTime,
            idle: document.hidden
          });
        }
      }
    });
  }
  loadHospitalList() {
    const url = `../aets/${this.mainservice.archiveDeviceName || "DCM4CHEE"}/rs/hospitals/list`;
    this.appRequests.getJSON(url).subscribe({
      next: hospitals => {
        this.hospitalList = hospitals || [];
      },
      error: err => {
        console.error("Error loading hospital list:", err);
        this.hospitalList = [];
      }
    });
  }
  startTime() {
    if (typeof Worker !== "undefined") {
      worker.onmessage = ({
        data
      }) => {
        try {
          this.currentServerTime = new Date(data.serverTime);
          this.mainservice.serverTime = this.currentServerTime;
          if (data.refresh) {
            this.refreshTime(worker);
          }
        } catch (e) {
          j4care.log("Error on setting time coming  from worker", e);
        }
      };
      this.refreshTime(worker);
    } else {
      console.log("worker not available");
    }
  }
  refreshTime(workerTemp) {
    let currentBrowserTime = (/* @__PURE__ */new Date()).getTime();
    this.appRequests.getServerTime().subscribe(res => {
      if (hasIn_default(res, "serverTimeWithTimezone") && res.serverTimeWithTimezone) {
        let serverTimeObject = j4care.splitTimeAndTimezone(res.serverTimeWithTimezone);
        this.timeZone = serverTimeObject.timeZone;
        this.mainservice.timeZone = this.timeZone;
        workerTemp.postMessage({
          serverTime: new Date(serverTimeObject.time).getTime() + ((/* @__PURE__ */new Date()).getTime() - currentBrowserTime) / 2,
          idle: document.hidden
        });
        this.hideExtendedClock();
      }
    });
  }
  switchLanguage(language) {
    let saveAndRedirect = function () {
      localStorage.setItem("current_language", language.code);
      window.location.replace(window.location.origin + window.location.pathname.replace(/\/ui2\/\w{2}/, `/ui2/${language.code}`));
    };
    if (!this.mainservice.global.notSecure) {
      this.keycloakHelperService.changeLanguageToUserProfile(language.code).subscribe(res => {
        saveAndRedirect();
      }, err => {
        saveAndRedirect();
        console.error("Error on switching language", err);
      });
    } else {
      saveAndRedirect();
    }
  }
  testUser() {
    KeycloakService.keycloakAuth.loadUserInfo().success(user => {
      console.log("in test success", user);
      this._keycloakService.setUserInfo({
        userProfile: user,
        tokenParsed: KeycloakService.keycloakAuth.tokenParsed,
        authServerUrl: KeycloakService.keycloakAuth.authServerUrl,
        realm: KeycloakService.keycloakAuth.realm
      });
    });
  }
  setServerTime(recall) {
    let currentBrowserTime = (/* @__PURE__ */new Date()).getTime();
    this.appRequests.getServerTime().subscribe(res => {
      if (hasIn_default(res, "serverTimeWithTimezone") && res.serverTimeWithTimezone) {
        console.log("server clock res", res);
        let serverTimeObject = j4care.splitTimeAndTimezone(res.serverTimeWithTimezone);
        this.timeZone = serverTimeObject.timeZone;
        this.mainservice.timeZone = serverTimeObject.timeZone;
        this.mainservice.serverTimeWithTimezone = res.serverTimeWithTimezone;
        this.startClock(new Date(serverTimeObject.time).getTime() + ((/* @__PURE__ */new Date()).getTime() - currentBrowserTime) / 2);
      }
      if (recall) {
        recall.apply(this);
      }
    });
  }
  setUserInformation(recall) {
    if (this.mainservice.global && this.mainservice.global.notSecure) {
      this.user = null;
      this.realm = null;
      this.superUser = true;
      this.authServerUrl = null;
      recall.apply(this);
    } else {
      try {
        this.mainservice.getUser().subscribe(user => {
          this.user = user;
          this.realm = user.realm;
          this.superUser = user.su;
          this.authServerUrl = user.authServerUrl;
          this.hasAdministrator = hasIn_default(user, "tokenParsed.realm_access.roles") && user.tokenParsed.realm_access.roles.indexOf("ADMINISTRATOR") > -1;
          this.hasViewRealm = hasIn_default(user, "tokenParsed.resource_access[realm-management].roles") && user.tokenParsed.resource_access["realm-management"].roles.indexOf("view-realm") > -1;
          recall.apply(this);
        }, err => {
          recall.apply(this);
        });
      } catch (e) {
        j4care.log("User information couldn't be set", e);
        recall.apply(this);
      }
    }
  }
  logout() {
    KeycloakService.keycloakAuth.logout();
  }
  gotToWildflyConsole(e) {
    try {
      let url;
      let port;
      if (this.mainservice["management-url"]) {
        url = this.mainservice["management-url"];
      } else {
        if (this.mainservice["management-https-port"] && this.mainservice["management-http-port"]) {
          if (window.location.protocol.toLowerCase() === "https:") {
            port = this.mainservice["management-https-port"];
          } else {
            port = this.mainservice["management-http-port"];
          }
        } else {
          port = this.mainservice["management-https-port"] || this.mainservice["management-http-port"] || "9990";
        }
        url = `//${this.mainservice["management-host"] || window.location.hostname}:${port}/console`;
      }
      e.preventDefault();
      window.open(url, "_blank");
    } catch (e2) {
      window.open(`//${window.location.hostname}:9990/console`, "_blank");
    }
  }
  closeFromOutside() {
    if (this.showMenu) {
      this.showMenu = false;
    }
  }
  startClock(serverTime) {
    this.currentServerTime = new Date(serverTime);
    this.mainservice.serverTime = this.currentServerTime;
    clearInterval(this.clockInterval);
    this.clockInterval = setInterval(() => {
      this.currentServerTime.setMilliseconds(this.currentServerTime.getMilliseconds() + 1e3);
      this.mainservice.serverTime = this.currentServerTime;
    }, 1e3);
    this.hideExtendedClock();
  }
  hideExtendedClock() {
    setTimeout(() => {
      this.clockUnExtended = false;
    }, 2e3);
  }
  synchronizeClock(serverTime) {
    clearInterval(this.clockInterval);
    this.startClock(serverTime);
  }
  progress() {
    let changeTo = function (t) {
      this.progressValue = t;
    };
    return {
      getValue: this.progressValue,
      setValue: v => {
        this.progressValue = v;
      }
    };
  }
  onScroll(event) {
    if (window.pageYOffset > 150 && !this.showScrollButton) {
      this.showScrollButton = true;
    }
    if (window.pageYOffset < 149 && this.showScrollButton) {
      this.showScrollButton = false;
    }
  }
  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  createPatient() {
    this.mainservice.createPatient({});
  }
  onClick() {
    this.mainservice.testUrl(this.testurl);
  }
  productLabelling() {
    this.dialogRef = this.dialog.open(ProductLabellingComponent, {
      height: "auto",
      width: "auto"
    });
    this.dialogRef.componentInstance.archive = this.archive;
    this.dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log("in res");
      }
    });
  }
  /*    initGetAuth(retries){
          let $this = this;
          this.$http.get('../auth')
              .map(res => {
                  let resjson; try{ let pattern = new RegExp("[^:]*:\/\/[^\/]*\/auth\/");
                  if(pattern.exec(res.url)){ WindowRefService.nativeWindow.location = "/dcm4chee-arc/ui2/";}
                  resjson = res.json(); }catch (e){ resjson = [];} return resjson;})
              .subscribe(
                  (response) => {
                      $this.url  = response.url;
                      // let host    = location.protocol + '//' + location.host;
                      //
                      // $this.logoutUrl = response.url + '/realms/dcm4che/protocol/openid-connect/logout?redirect_uri='
                      //     + encodeURIComponent(host + location.pathname);
                  }, (response) => {
                      // vex.dialog.alert("Error loading device names, please reload the page and try again!");
                      if (retries){
                          $this.initGetAuth(retries - 1);
                      }else{
                          $this.url = '/auth';
                          let host = location.protocol + '//' + location.host;
                          $this.logoutUrl =  host + '/auth/realms/dcm4che/protocol/openid-connect/logout?redirect_uri='
                              + encodeURIComponent(host + location.pathname);
                      }
                  });
      }*/
  initGetDevicename(retries) {
    let $this = this;
    this.appRequests.getDeviceName().subscribe(res => {
      this.initGetPDQServices();
      this.startTime();
      this.dcm4cheeArch = res;
      $this.mainservice["xRoad"] = res.xRoad || false;
      if (res["management-url"]) {
        $this.mainservice["management-url"] = res["management-url"];
      } else {
        $this.mainservice["management-https-port"] = res["management-https-port"] || 9990;
        $this.mainservice["management-http-port"] = res["management-http-port"] || 9990;
        $this.mainservice["management-host"] = res["management-host"] || window.location.hostname;
      }
      this.appRequests.getDeviceInfo(res.dicomDeviceName).subscribe(arc => {
        $this.mainservice["archiveDevice"] = arc[0];
        $this.archive = arc[0];
        try {
          this.myDeviceName = arc[0].dicomDeviceName;
        } catch (e) {}
      }, err2 => {
        if (retries) {
          $this.initGetDevicename(retries - 1);
        }
      });
    }, err => {
      console.log("---------err", err);
      if (retries) {
        $this.initGetDevicename(retries - 1);
      }
    });
  }
  initGetPDQServices() {
    this.appRequests.getPDQServices().subscribe(pdqs => {
      this.mainservice.updateGlobal("PDQs", pdqs);
    });
  }
}, _a4.ctorParameters = () => [{
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: AppService
}, {
  type: AppRequestsService
}, {
  type: PermissionService
}, {
  type: KeycloakHttpClient
}, {
  type: KeycloakService
}, {
  type: KeycloakHelperService
}, {
  type: HttpErrorHandler
}, {
  type: Title
}], _a4.propDecorators = {
  msg: [{
    type: ViewChild,
    args: [MessagingComponent, {
      static: true
    }]
  }],
  onScroll: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }]
}, _a4);
AppComponent = __decorate([Component({
  selector: "app-root",
  template: app_component_default,
  standalone: false
})], AppComponent);

// src/app/monitoring/external-retrieve/retrieve-monitoring.service.ts
var _a5;
var RetrieveMonitoringService = (_a5 = class {
  constructor($http, mainservice, deviceService, tableService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.deviceService = deviceService;
    this.tableService = tableService;
    this.header = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  getExternalRetrieveEntries(filter, offset, batch) {
    filter.offset = offset && offset != "" ? offset : 0;
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve${batch ? "/batch" : ""}?${this.mainservice.param(filter)}`);
  }
  getCount(filter) {
    let filterClone = cloneDeep_default(filter);
    delete filterClone.offset;
    delete filterClone.limit;
    delete filterClone.orderby;
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/count?${this.mainservice.param(filterClone)}`);
  }
  getExporters() {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}export`);
  }
  delete(taskID) {
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/${taskID}`);
  }
  deleteAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve${urlParam}`, this.header);
  }
  reschedule(taskID, data) {
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/${taskID}/reschedule${j4care.param(data)}`, {});
  }
  rescheduleAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/reschedule${urlParam}`, {}, this.header);
  }
  cancel(taskID) {
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/${taskID}/cancel`, {});
  }
  cancelAll(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve/cancel${urlParam}`, {}, this.header);
  }
  downloadCsv(filter) {
    let urlParam = this.mainservice.param(filter);
    urlParam = urlParam ? `?${urlParam}` : "";
    let header = new HttpHeaders({
      "Accept": "text/csv"
    });
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}monitor/retrieve${urlParam}`, header);
  }
  statusValues() {
    return [{
      value: "SCHEDULED",
      text: "SCHEDULED"
    }, {
      value: "SCHEDULED FOR RETRY",
      text: "S. FOR RETRY"
    }, {
      value: "IN PROCESS",
      text: "IN PROCESS"
    }, {
      value: "COMPLETED",
      text: "COMPLETED"
    }, {
      value: "WARNING",
      text: "WARNING"
    }, {
      value: "FAILED",
      text: "FAILED"
    }, {
      value: "CANCELED",
      text: "CANCELED"
    }];
  }
  getFilterSchema(localAET, destinationAET, remoteAET, devices, countText, queueNames) {
    let destinationAet = {};
    if (destinationAET) {
      destinationAet = {
        tag: "html-select",
        options: destinationAET,
        showStar: true,
        showSearchField: true,
        filterKey: "DestinationAET",
        placeholder: "Destination AET",
        description: "Destination AE Title to filter by"
      };
    } else {
      destinationAet = {
        tag: "input",
        type: "text",
        filterKey: "DestinationAET",
        placeholder: "Destination AET",
        description: "Destination AE Title to filter by"
      };
    }
    return [[[{
      tag: "label",
      text: "Device Name"
    }, {
      tag: "html-select",
      options: devices,
      showSearchField: true,
      showStar: true,
      filterKey: "dicomDeviceName",
      description: "Device Name to filter by"
    }], [{
      tag: "label",
      text: "Local AET"
    }, {
      tag: "html-select",
      options: localAET,
      showSearchField: true,
      showStar: true,
      filterKey: "LocalAET",
      description: "Archive AE Title to filter by"
    }], [{
      tag: "label",
      text: "Remote AET"
    }, {
      tag: "html-select",
      options: remoteAET,
      showSearchField: true,
      showStar: true,
      filterKey: "RemoteAET",
      description: "C-MOVE SCP AE Title to filter by"
    }]], [[{
      tag: "multi-select",
      options: queueNames,
      filterKey: "dcmQueueName",
      description: "Queue Name",
      showSearchField: true,
      showStar: true,
      placeholder: "Queue Name"
    }, destinationAet], [{
      tag: "label",
      text: "Limit"
    }, {
      tag: "input",
      type: "number",
      filterKey: "limit",
      description: "Maximal number of tasks in returned list"
    }], [{
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }, {
      tag: "select",
      options: this.statusValues(),
      filterKey: "status",
      showStar: true,
      description: "Status of tasks to filter by",
      placeholder: "Status"
    }]], [[{
      tag: "range-picker",
      filterKey: "createdTime",
      description: "Created Date"
    }, {
      tag: "range-picker",
      filterKey: "updatedTime",
      description: "Updated Date"
    }], [{
      tag: "select",
      options: [{
        value: "createdTime",
        text: "Sort by creation time (ASC)"
      }, {
        value: "-createdTime",
        text: "Sort by creation time (DESC)"
      }, {
        value: "updatedTime",
        text: "Sort by updated time (ASC)"
      }, {
        value: "-updatedTime",
        text: "Sort by updated time (DESC)"
      }, {
        value: "scheduledTime",
        text: "Sort by scheduled time (ASC)"
      }, {
        value: "-scheduledTime",
        text: "Sort by scheduled time (DESC)"
      }],
      filterKey: "orderby",
      description: "Sort",
      placeholder: "Sort"
    }, {
      tag: "input",
      type: "text",
      filterKey: "StudyInstanceUID",
      description: "Unique Identifier of the Study to filter by",
      placeholder: "Study Instance UID"
    }], [{
      tag: "button",
      id: "count",
      text: countText,
      description: "Query only the count"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Maximal number of tasks in returned list"
    }]]];
  }
  getTableSchema($this, action, options) {
    if (hasIn_default(options, "grouped") && options.grouped) {
      return [new TableSchemaElement({
        type: "index",
        title: "#",
        description: "Index",
        widthWeight: 0.2,
        calculatedWidth: "4%"
      }), new TableSchemaElement({
        type: "actions",
        title: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show details"
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-list-alt",
            text: ""
          },
          click: e => {
            console.log("e", e);
            action.call($this, "task-detail", e);
          },
          title: "Show Tasks Detail"
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-remove-circle",
            text: ""
          },
          click: e => {
            console.log("e", e);
            action.call($this, "delete-batched", e);
          },
          permission: {
            id: "action-monitoring->export-single_action",
            param: "visible"
          },
          title: "Delete Task with this BatchID"
        }],
        description: "Actions",
        pxWidth: 105
      }), new TableSchemaElement({
        type: "value",
        title: "Batch ID",
        pathToValue: "batchID",
        description: "Batch ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Remote AET",
        pathToValue: "RemoteAET",
        description: "Remote AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Destination AET",
        pathToValue: "DestinationAET",
        description: "Destination AET",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Scheduled Time Range",
        pathToValue: "scheduledTimeRange",
        description: "Scheduled Time Range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Processing Start Time Range",
        pathToValue: "processingStartTimeRange",
        description: "Processing Start Time Range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        title: "Processing end time range",
        pathToValue: "processingEndTimeRange",
        description: "Processing end time range",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "progress",
        title: "Tasks",
        pathToValue: "tasks",
        description: "Tasks",
        widthWeight: 1.5,
        cssClass: "no-padding",
        calculatedWidth: "20%"
      })];
    }
    return [new TableSchemaElement({
      type: "index",
      title: "#",
      description: "Index",
      widthWeight: 0.2,
      calculatedWidth: "4%"
    }), new TableSchemaElement({
      type: "actions",
      title: "",
      headerActions: [{
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-unchecked",
          text: ""
        },
        click: (models, config) => {
          models.forEach(m => {
            m.selected = true;
          });
          config.allSelected = true;
        },
        title: "Select",
        showIf: (e, config) => {
          return !config.allSelected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-check",
          text: ""
        },
        click: (models, config) => {
          models.forEach(m => {
            m.selected = false;
          });
          config.allSelected = false;
        },
        title: "Unselect",
        showIf: (e, config) => {
          return config.allSelected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-ban-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "cancel-selected", e);
        },
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        },
        title: "Cancel selected"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-repeat",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "reschedule-selected", e);
        },
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        },
        title: "Reschedule selected"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-remove-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "delete-selected", e);
        },
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        },
        title: "Delete selected"
      }],
      actions: [{
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-unchecked",
          text: ""
        },
        click: e => {
          e.selected = !e.selected;
        },
        title: "Select",
        showIf: (e, config) => {
          return !e.selected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-check",
          text: ""
        },
        click: e => {
          console.log("e", e);
          e.selected = !e.selected;
        },
        title: "Unselect",
        showIf: (e, config) => {
          return e.selected;
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-ban-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "cancel", e);
        },
        title: "Cancel this task",
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        },
        showIf: match => {
          return match.status && (match.status === "SCHEDULED" || match.status === "SCHEDULED FOR RETRY" || match.status === "IN PROCESS");
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-repeat",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "reschedule", e);
        },
        title: "Reschedule this task",
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        }
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-remove-circle",
          text: ""
        },
        click: e => {
          console.log("e", e);
          action.call($this, "delete", e);
        },
        permission: {
          id: "action-monitoring->export-single_action",
          param: "visible"
        },
        title: "Delete this task"
      }, {
        icon: {
          tag: "span",
          cssClass: "glyphicon glyphicon-th-list",
          text: ""
        },
        click: e => {
          console.log("e", e);
          e.showAttributes = !e.showAttributes;
        },
        title: "Show details"
      }],
      description: "Actions",
      pxWidth: 105
    }), ...this.tableService.getTableSchema(concat_default(["dicomDeviceName", "queue"], this.tableService.getTimeColumnBasedOnFilter(options.filterObject), ["processingStartTime_scheduledTime", "processingEndTime_processingStartTime", "LocalAET", "RemoteAET", "DestinationAET", "remaining", "status", "failures", "batchID"]))];
  }
  getQueueNames() {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}queue`);
  }
  getDevices() {
    return this.deviceService.getDevices();
  }
}, _a5.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: DevicesService
}, {
  type: TableService
}], _a5);
RetrieveMonitoringService = __decorate([Injectable()], RetrieveMonitoringService);
export { ProductLabellingComponent, KeycloakHttpClient, AppComponent, RetrieveMonitoringService };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/