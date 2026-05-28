import { MessagingComponent } from "./chunk-PGYA2BHH.js";
import { MonitoringTabsComponent } from "./chunk-SHPTVT6D.js";
import "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, MatProgressSpinner, OrderByPipe } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, HttpErrorHandler, J4careHttpService, NgClass, __commonJS, __decorate, __toESM, j4care } from "./chunk-V54BIW7M.js";

// node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    (function (a, b) {
      if ("function" == typeof define && define.amd) define([], b);else if ("undefined" != typeof exports) b();else {
        b(), a.FileSaver = {
          exports: {}
        }.exports;
      }
    })(exports, function () {
      "use strict";

      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = {
          autoBom: false
        } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = {
          autoBom: !b2
        }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], {
          type: a2.type
        }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function () {
          g(d2.response, b2, c2);
        }, d2.onerror = function () {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {}
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
        a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b2, g2, h) {
          var i = f.URL || f.webkitURL,
            j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f2, g2, h) {
          if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);else if (d(f2)) c(f2, g2, h);else {
            var i = document.createElement("a");
            i.href = f2, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
          var h = "application/octet-stream" === b2.type,
            i = /constructor/i.test(f.HTMLElement) || f.safari,
            j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a2 = k.result;
              a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
            }, k.readAsDataURL(b2);
          } else {
            var l = f.URL || f.webkitURL,
              m = l.createObjectURL(b2);
            g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4e4);
          }
        });
      f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
    });
  }
});

// angular:jit:template:src\app\monitoring\associations\associations.component.html
var associations_component_default = `<div class="main_content white_design">\r
    <monitoring-tabs></monitoring-tabs>\r
    <div class="tab-content">\r
        <div class="monitor">\r
            <h2 i18n="@@associations.open_associations">Open Associations</h2>\r
            <h4 i18n="@@associations.press_start_refresh">Press Start or Refresh to get associations</h4>\r
            <div class="filter_line">\r
                <div class="filter_block">\r
                    <div class="filter">\r
                        <div class="filter_block">\r
                            <div class="line">\r
                                <label i18n="@@timer_sec">Timer (sec)</label>\r
                                <input i18n-title="@@title.associations.with_a_dot_you_can_set_milliseconds" title="With a dot '.' you can set milliseconds for example: '0.6' = 600 milliseconds" type="text" [(ngModel)]="updaterate" [disabled]="!stopLoop" class="no-close-button"/>\r
                            </div>\r
                            <div class="line">\r
                                <div *ngIf="stopLoop" class="dummy"></div>\r
                                <mat-progress-spinner *ngIf="!stopLoop" mode="indeterminate" [diameter]="28" ></mat-progress-spinner>\r
                                <button *ngIf="stopLoop" type="button" class="btn-default submit" (click)="monitor()" i18n-title="@@title.associations.start_getting_associations" title="Start getting associations">Start</button>\r
                                <button *ngIf="!stopLoop" type="button" class="btn-default submit" (click)="stopLoop=true" i18n-title="@@stop_auto_refresh" title="Stop Auto Refresh">Stop</button>\r
                            </div>\r
                        </div>\r
                        <div class="filter_block height_2">\r
                            <div class="line">\r
                            </div>\r
                            <div class="line">\r
                                <button type="button" class="btn-default submit pull-left" (click)="refresh()" i18n-title="@@title.associations.get_associations" title="Get associations" i18n="@@refresh">Refresh</button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="filter_line">\r
                <div class="filter_block">\r
                    <div class="filter single_block">\r
                        <div class="filter_block">\r
                            <div class="line">\r
                                <div class="w45percent csv_button pull-left" (click)="downloadAssocImmage()" i18n-title="@@title.associations.download_copy_as_csv" title="Download copy of the table as csv-file">\r
                                    <span class="custom_icon csv_icon"></span>\r
                                    <span class="text" i18n="@@download_copy">Download copy</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
                <table  class="table table-inverse"  (mouseenter)="mauseEnter()" (mouseleave)="mauseLeave()">\r
                <tr>\r
                    <th>\r
                        <span i18n-title="@@title.associations.sort_by_local_ae_title" title="Sort by Local AE Title" class="pointer" (click)="sortBy('localAETitle')" i18n="@@local_ae_title">\r
                            Local AE Title\r
                        </span>\r
                    </th>\r
                    <th>\r
                        <span i18n-title="@@title.associations.sort_by_initiated" title="Sort by initiated" class="pointer" (click)="sortBy('initiated')">\r
                            \u21C6\r
                        </span>\r
                    </th>\r
                    <th>\r
                        <span i18n-title="@@title.associations.sort_by_remote_ae_title" title="Sort by Remote AE Title" class="pointer" (click)="sortBy('remoteAETitle')" i18n="@@remote_ae_title">\r
                            Remote AE Title\r
                        </span>\r
                    </th>\r
                    <th>\r
                        <span  i18n-title="@@title.associations.sort_by_invoked_ops" title="Sort by Invoked Ops." class="pointer" (click)="sortBy('invokedOps')" i18n="@@invoked_ops">Invoked Ops.</span>\r
                    </th>\r
                    <th><span i18n-title="@@title.associations.sort_by_performed_ops"  title="Sort by Performed Ops." class="pointer" (click)="sortBy('performedOps')" i18n="@@performed_ops">Performed Ops.</span></th>\r
                    <th><span i18n-title="@@title.associations.sort_by_connection_time_server" title="Sort by Connection time (Server)" class="pointer" (click)="sortBy('connectTime')" i18n="@@connection_time_server">Connection time (Server)</span></th>\r
                    <th><span i18n-title="@@title.associations.sort_by_connection_time_local" title="Sort by Connection time (Local)" class="pointer" (click)="sortBy('browserTime')" i18n="@@connection_time_browser">Connection time (Browser)</span></th>\r
                    <th><span i18n-title="@@title.associations.sort_by_duration" title="Sort by Duration" class="pointer" (click)="sortBy('openSinceOrder')" i18n="@@duration">Duration (hh:mm:ss.SSS)</span></th>\r
                    <th *ngIf="others">\r
                        <span i18n-title="@@title.associations.sort_by_other_attributes" title="Sort by Other attributes" class="pointer" (click)="sortBy('others')" i18n="@@other_attr">Other attributes\r
                        </span>\r
                    </th>\r
                    <th i18n="@@abort">\r
                        Abort\r
                    </th>\r
                </tr>\r
\r
                <tr  *ngFor="let value of associationStatus| orderBy:propertyName:reverse" [ngClass]="{'danger':value.tooLong === true}">\r
                    <ng-container *ngIf="value.initiated">\r
                         <td>{{value.localAETitle}}</td>\r
                         <td><span class="glyphicon glyphicon-arrow-right"></span></td>\r
                         <td>{{value.remoteAETitle}}</td>\r
                    </ng-container>\r
                    <ng-container *ngIf="!value.initiated">\r
                        <td>{{value.localAETitle}}</td>\r
                        <td><span class="glyphicon glyphicon-arrow-left"></span></td>\r
                        <td>{{value.remoteAETitle}}</td>\r
                    </ng-container>\r
                    <td>\r
                        <div *ngFor="let key of Object.keys(value?.invokedOps)">\r
                            {{key}}-RQ/RSP : {{value.invokedOps[key].RQ}}/{{value.invokedOps[key].RSP}}\r
                        </div>\r
                    </td>\r
                    <td>\r
                        <div *ngFor="let key of Object.keys(value.performedOps)">\r
                            {{key}}-RQ/RSP : {{value.performedOps[key].RQ}}/{{value.performedOps[key].RSP}}\r
                        </div>\r
                    </td>\r
                    <td class="text-right" [innerHtml]="value.connectTime"></td>\r
                    <td class="text-right" [innerHtml]="value.browserTime"></td>\r
                    <td class="text-right" [innerHtml]="value.openSince"></td>\r
                    <td *ngIf="others" class="others" [innerHtml]="value.others"></td>\r
                    <td class="abort">\r
                        <a class="crud_button" (click)="$event.preventDefault();abort(value.serialNo)">\r
                            <i class="glyphicon glyphicon-remove"></i>\r
                        </a>\r
                    </td>\r
\r
                </tr>\r
                <tr *ngIf="!associationStatus">\r
                    <td colspan="9" i18n="@@associations.no_associations">No open associations found!</td>\r
                </tr>\r
            </table>\r
        </div>\r
    </div>\r
</div>\r
`;

// src/app/monitoring/associations/associations.component.ts
var FileSaver = __toESM(require_FileSaver_min());
var _a;
var AssociationsComponent = (_a = class {
  constructor($http, appservices, cfpLoadingBar, messaging, httpErrorHandler) {
    this.$http = $http;
    this.appservices = appservices;
    this.cfpLoadingBar = cfpLoadingBar;
    this.messaging = messaging;
    this.httpErrorHandler = httpErrorHandler;
    this.updaterate = 3;
    this.stopLoop = true;
    this.message = "";
    this.others = false;
    this.pause = false;
    this.Object = Object;
    this.propertyName = "openSinceOrder";
    this.reverse = true;
  }
  modifyObject(obj) {
    let local = [];
    let definedFields = ["serialNo", "connectTime", "initiated", "localAETitle", "remoteAETitle", "performedOps", "invokedOps"];
    obj.forEach((j, l) => {
      for (let i in j) {
        let m = j[i];
        local[l] = local[l] || {};
        if (definedFields.indexOf(i) > -1) {
          local[l][i] = m;
        } else {
          local[l]["this.others"] = local[l]["this.others"] || {};
          local[l]["this.othersFile"] = local[l]["this.othersFile"] || {};
          if (Object.keys(local[l]["this.others"]).length === 0) {
            local[l]["this.others"] = "<table><tr><td>" + i + "</td><td>" + m + "</td></tr>";
            local[l]["this.othersFile"] = i + "=" + m;
          } else {
            local[l]["this.others"] += "<tr><td>" + i + "</td><td>" + m + "</td></tr>";
            local[l]["this.othersFile"] += " | " + i + "=" + m;
          }
          this.others = true;
        }
      }
      if (local[l]["this.others"] && Object.keys(local[l]["this.others"]).length > 0) {
        local[l]["this.others"] += "<table>";
      }
    });
    return local;
  }
  timeCalculator(data) {
    try {
      data.forEach((m, i) => {
        let date = j4care.newDate(m.connectTime);
        let today = this.appservices.serverTime;
        data[i]["browserTime"] = j4care.formatDate(date, "yyyy-MM-dd HH:mm:ss");
        data[i]["openSince"] = j4care.diff(date, today);
        data[i]["openSinceOrder"] = today.getTime() - date.getTime();
      });
    } catch (e) {
      console.groupCollapsed("associations.component timeCalculator(data)");
      console.log("this.appService.serverTime=", this.appservices.serverTime);
      console.log("data=", data);
      console.error(e);
      console.groupEnd();
    }
    return data;
  }
  abort(serialnr) {
    this.cfpLoadingBar.start();
    this.$http.delete(`${j4care.addLastSlash(this.appservices.baseUrl)}monitor/associations/${serialnr}`).subscribe(res => {
      this.cfpLoadingBar.complete();
      this.refresh();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  sortBy(pn) {
    console.log("sortby pn", pn);
    console.log("sortby propertyname", this.propertyName);
    this.reverse = this.propertyName === pn ? !this.reverse : false;
    this.propertyName = pn;
  }
  refresh() {
    this.cfpLoadingBar.start();
    this.$http.get(`${j4care.addLastSlash(this.appservices.baseUrl)}monitor/associations`).subscribe(res => {
      if (res && res[0] && res[0] != "") {
        res = this.modifyObject(res);
        res = this.timeCalculator(res);
        this.associationStatus = res;
      } else {
        this.associationStatus = null;
      }
      this.cfpLoadingBar.complete();
    }, err => {
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  mauseEnter() {
    this.pause = true;
  }
  mauseLeave() {
    this.pause = false;
  }
  monitor() {
    this.stopLoop = false;
    this.$http.get(`${j4care.addLastSlash(this.appservices.baseUrl)}monitor/associations`).subscribe(res => {
      let data = res;
      if (data && data[0] && data[0] != "") {
        data = this.modifyObject(data);
        data = this.timeCalculator(data);
        this.associationStatus = data;
      } else {
        this.associationStatus = null;
      }
    });
    if (this.updaterate && typeof this.updaterate === "string" && this.updaterate.indexOf(",") > -1) {
      this.updaterate = this.updaterate.replace(",", ".");
    }
    let $that = this;
    let associationLoop = setInterval(() => {
      if ($that.stopLoop) {
        clearInterval(associationLoop);
      } else {
        if (!this.pause) {
          $that.$http.get(`${j4care.addLastSlash(this.appservices.baseUrl)}monitor/associations`).subscribe(res => {
            let data = res;
            if (data && data[0] && data[0] != "") {
              data = $that.modifyObject(data);
              data = $that.timeCalculator(data);
              $that.associationStatus = data;
            } else {
              $that.associationStatus = null;
            }
          }, err => {
            this.httpErrorHandler.handleError(err);
          });
        }
      }
    }, $that.updaterate * 1e3);
  }
  downloadAssocImmage() {
    let csv = "Local AE Title \u21C6 Remote AE Title";
    csv += `,`;
    csv += "Invoked Ops.";
    csv += `,`;
    csv += "Performed Ops.";
    csv += `,`;
    csv += "Connection time (Server)";
    csv += `,`;
    csv += "Connection time (Browser)";
    csv += ",Connection open for (hh:mm:ss)";
    if (this.others) {
      csv += "," + "Other attributes" + "\n";
    } else {
      csv += "\n";
    }
    if (this.associationStatus) {
      this.associationStatus.forEach((m, i) => {
        if (m.initiated) {
          csv += m.localAETitle + "\u2192" + m.remoteAETitle;
        } else {
          csv += m.localAETitle + "\u2190" + m.remoteAETitle;
        }
        if (m.invokedOps) {
          csv += ",";
          console.log("m.invokedOps", m.invokedOps);
          for (let j in m.invokedOps) {
            let l = m.invokedOps[j];
            csv = csv + "   " + j + "- RQ/RSP : " + l.RQ + "/" + l.RSP;
          }
        } else {
          csv += ",";
        }
        if (m.performedOps) {
          csv += ",";
          for (let j in m.performedOps) {
            let l = m.performedOps[j];
            csv = csv + "   " + j + "- RQ/RSP : " + l.RQ + "/" + l.RSP;
          }
        } else {
          csv += ",";
        }
        csv += "," + m.connectTime;
        csv += "," + m.browserTime;
        csv += "," + m.openSince;
        if (m.othersFile) {
          csv += "," + m.othersFile + "\n";
        } else {
          csv += "\n";
        }
      });
    }
    let file = new File([csv], "associacions.csv", {
      type: "text/csv;charset=utf-8"
    });
    FileSaver.saveAs(file);
  }
  ngOnDestroy() {
    this.stopLoop = true;
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: LoadingBarService
}, {
  type: MessagingComponent
}, {
  type: HttpErrorHandler
}], _a);
AssociationsComponent = __decorate([Component({
  selector: "app-associations",
  template: associations_component_default,
  imports: [NgClass, MatProgressSpinner, MonitoringTabsComponent, FormsModule, OrderByPipe, CommonModule],
  standalone: true
})], AssociationsComponent);
export { AssociationsComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/