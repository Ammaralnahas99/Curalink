import { AppService, CommonModule, Component, MatDialog, MatDialogRef, WindowRefService, __decorate } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dialogs\info\info.component.html
var info_component_default = `<div class="vex vex-theme-os confirm" xmlns="http://www.w3.org/1999/html" >\r
    <div class="vex-dialog-form">\r
        <h5>{{info.title}}</h5>\r
        <div class="content">\r
            <div mat-dialog-content>\r
            {{info.content}}\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button  class="save" type="button" (click)="dialogRef.close('ok')" i18n="@@OK">OK</button>\r
        </div>\r
    </div>\r
</div>`;

// src/app/widgets/dialogs/info/info.component.ts
var _a;
var InfoComponent = (_a = class {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this._info = {
      title: "Info",
      content: void 0
    };
  }
  get info() {
    return this._info;
  }
  set info(value) {
    this._info = value;
  }
}, _a.ctorParameters = () => [{
  type: MatDialogRef
}], _a);
InfoComponent = __decorate([Component({
  selector: "app-info",
  template: info_component_default,
  standalone: true
})], InfoComponent);

// src/app/widgets/messaging/messaging.component.ts
var _a2;
var MessagingComponent = (_a2 = class {
  constructor(mainservice, dialog) {
    this.mainservice = mainservice;
    this.dialog = dialog;
    this.msgTimeout = 2e4;
    this.msg = [];
    this.subscription = this.mainservice.messageSet$.subscribe(msg => {
      console.log("msg in subscribe messagecomponent ", msg);
      this.setMsg(msg);
    });
  }
  alert(m) {
    this.dialogRef = this.dialog.open(InfoComponent, {
      height: "auto",
      width: "60%"
    });
    this.dialogRef.componentInstance.info = {
      title: "Error detail",
      content: m.detailError
    };
    this.dialogRef.afterClosed().subscribe();
  }
  setMsg(msg) {
    let timeout = msg.timeout || this.msgTimeout;
    let isInArray = false;
    let presentId = "";
    if (!msg.title && msg.status) msg.title = msg.status.charAt(0).toUpperCase() + msg.status.slice(1);
    if (!msg.status) msg.status = "info";
    if (!msg.status && !msg.title) {
      msg.title = "Info";
      msg.status = "info";
    }
    if (this.msg && this.msg.length > 0) {
      this.msg.forEach((k, i) => {
        if (k.text === msg.text && k.status === msg.status) {
          presentId = k.id;
          isInArray = true;
        }
      });
    }
    if (isInArray) {
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("msg_" + presentId)[0];
      if (element) {
        element.classList.remove("slideInRight");
        element.classList.add("pulse");
        setTimeout(function () {
          element.classList.remove("pulse");
        }, 500);
      }
    } else {
      let id = this.getUniqueRandomId();
      msg.id = id;
      this.msg.push(msg);
      this.msgCounter(id, timeout);
    }
  }
  removeMsgFromArray(id) {
    this.msg.forEach((m, k) => {
      if (m.id == id) {
        this.msg.splice(k, 1);
      }
    });
  }
  msgCounter(id, timeout) {
    let cssClass = ".msg_" + id;
    let cssClassWithoutDot = "msg_" + id;
    let x = 0;
    let $this = this;
    let interval = setInterval(function () {
      try {
        let element = WindowRefService.nativeWindow.document.getElementsByClassName(cssClassWithoutDot)[0];
        element.querySelectorAll(".progress").item(0).style.width = x * 1e4 / timeout + "%";
        if (x === timeout / 100) {
          clearInterval(interval);
          element.classList.add("fade-out");
          setTimeout(() => {
            $this.removeMsgFromArray(id);
          }, 400);
        }
        x++;
      } catch (e) {
        clearInterval(interval);
      }
    }, 100);
  }
  closeBox(m) {
    this.removeMsgFromArray(m.id);
  }
  getUniqueRandomId() {
    if (this.msg && this.msg[0]) {
      let buffer = 15;
      let isAvailable = false;
      let id = 0;
      while (!isAvailable && buffer > 0) {
        id = Math.floor(Math.random() * 100 + 1);
        this.msg.forEach((k, i) => {
          if (k.id === id) {
            isAvailable = true;
          }
        });
        buffer--;
      }
      if (buffer === 0 && isAvailable && isAvailable === true) {
        return 999;
      } else {
        return id;
      }
    } else {
      return Math.floor(Math.random() * 100 + 1);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}, _a2.ctorParameters = () => [{
  type: AppService
}, {
  type: MatDialog
}], _a2);
MessagingComponent = __decorate([Component({
  selector: "app-messaging",
  template: `
        <div class="msg_container" *ngIf="msg && msg.length > 0">
            <li *ngFor="let m of msg" class="{{m.status}} msg_{{m.id}} slideInRight animated" (click)="closeBox(m)">
                <span class="close" data-dismiss="alert" aria-label="close">&times;</span>
                <h4>{{ m.title }}</h4>
                <p *ngIf="!m.detailError" [innerHtml]="m.text"></p>
                <p *ngIf="m.detailError">
                    {{ m.text }}<br>
                    <a *ngIf="m.detailError" class="more" (click)="$event.preventDefault();alert(m)">more..</a>
                </p>
                <div class="progress"></div>
            </li>
        </div>
    `,
  imports: [CommonModule],
  standalone: true
})], MessagingComponent);
export { InfoComponent, MessagingComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/