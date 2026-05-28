import { MatOption, MatSelect, RangePickerComponent } from "./chunk-DJWZKPOC.js";
import { ReactiveFormsModule, UntypedFormBuilder } from "./chunk-YEAVTBOB.js";
import { AppService, CommonModule, Component, Injectable, J4careHttpService, KeycloakService, MatDialogRef, NgStyle, NgSwitch, __decorate, hasIn_default, j4care } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dialogs\csv-upload\csv-upload.component.html
var csv_upload_component_default = `<div class="modal_form">\r
  <h5 i18n="@@csv-upload.upload_csv_title">Upload csv file with Study Instance UIDs</h5>\r
  <div class="content">\r
    <form [formGroup]="form" >\r
    <div class="form_control" *ngFor="let form of params.formSchema">\r
      <label>{{form.description}}</label>\r
      <ng-container [ngSwitch]="form.tag">\r
        <mat-select *ngSwitchCase="'select'" formControlName="{{form.filterKey}}" placeholder="{{form.placeholder}}" class="form-control" >\r
          <mat-option *ngIf="form.showStar" value="*">*</mat-option>\r
          <mat-option *ngFor="let ae of form.options" value="{{ae.value}}">{{ae.text}}</mat-option>\r
        </mat-select>\r
        <input *ngSwitchCase="'input'" formControlName="{{form.filterKey}}" type="{{form.type}}" placeholder="{{form.placeholder}}" class="form-control" (change)="inputChanged(form,$event)" >\r
        <range-picker\r
                class="form-control"\r
                [ngStyle]="form.style"\r
                *ngSwitchCase="'range-picker-time'"\r
                [onlyDate]="form.onlyDate"\r
                [model]="model[form.filterKey]"\r
                (modelChange)="dateChanged(form.filterKey, $event)"\r
                placeholder="{{form.description || form.placeholder}}"\r
                dateFormat="yyyyMMdd"\r
                [onlySingleMode]="true"\r
                defaultTime="00:00:00"\r
                mode="single"\r
                title="{{form.description}}"\r
        ></range-picker>\r
      </ng-container>\r
    </div>\r
      <div class="form_control">\r
        <label i18n="@@csv-upload.select_csv_file">Select CSV-File:</label>\r
        <input type="file" (change)="onFileChange($event)" class="form-control">\r
      </div>\r
      <div class="dialogbuttons">\r
        <button class="save" (click)="submit()" [disabled]="!form.valid || !csvFile">\r
          <span *ngIf="showLoader" class="fa fa-circle-o-notch fa-spin csv_upload_loader"></span>\r
          <ng-container i18n="@@upload">Upload</ng-container>\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dialogs\csv-upload\csv-upload.component.scss
var csv_upload_component_default2 = "/* src/app/widgets/dialogs/csv-upload/csv-upload.component.scss */\n.modal_form h5 {\n  font-size: 22px;\n  font-weight: bold;\n  color: var(--backgroundHoverColor);\n}\n.modal_form .form_control {\n  padding: 2px 0px;\n  margin-bottom: 0px;\n  float: left;\n  width: 100%;\n}\n.modal_form .form_control label {\n  width: 40%;\n  float: left;\n  text-align: right;\n  padding-right: 10px;\n}\n.modal_form .form_control .mat-select,\n.modal_form .form_control .mat-mdc-select,\n.modal_form .form_control input,\n.modal_form .form_control range-picker,\n.modal_form .form_control dcm-drop-down {\n  width: 60%;\n  float: right;\n}\n.modal_form .form_control input[type=checkbox] {\n  width: 15px;\n  float: left;\n  height: 25px;\n  margin: 0;\n  padding: 0;\n}\n.modal_form .form_control .mat-select,\n.modal_form .form_control .mat-mdc-select {\n  border: none;\n  border-radius: 0px;\n  padding: 0;\n}\n.modal_form .form_control > input {\n  border: none;\n  border-bottom: 1px solid #cccccc;\n}\n.modal_form .form_control .mat-select-placeholder,\n.modal_form .form_control .mat-mdc-select-placeholder {\n  padding-left: 7px;\n}\n.dialogbuttons button {\n  position: relative;\n}\n.dialogbuttons button .csv_upload_loader {\n  position: absolute;\n  left: 7px;\n}\n.csv_preview {\n  width: 100%;\n  display: block;\n  max-height: 183px;\n  float: left;\n  overflow: auto;\n  border: 1px solid #5b5b5b;\n  margin: 10px 0;\n}\n.csv_preview table {\n  border-collapse: collapse;\n}\n.csv_preview table table,\n.csv_preview table th,\n.csv_preview table td {\n  border: 1px solid #cccccc;\n}\n.csv_preview table td {\n  padding: 0 2px;\n}\n.csv_preview table td.active {\n  background: #999;\n}\n.csv_preview table td:hover {\n  cursor: pointer;\n}\n";

// src/app/widgets/dialogs/csv-upload/csv-upload.service.ts
var _a;
var CsvUploadService = (_a = class {
  constructor($http, mainservice, _keycloakService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this._keycloakService = _keycloakService;
  }
  uploadCSV(url, file, semicolon, onloadend, onerror) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", url, true);
    let token;
    this._keycloakService.getToken().subscribe(response => {
      if (!this.mainservice.global.notSecure) {
        token = response.token;
      }
      let contentTyp = "text/csv";
      if (semicolon) {
        contentTyp += ";delimiter=semicolon";
      }
      xmlHttpRequest.setRequestHeader("Content-Type", contentTyp);
      if (!this.mainservice.global.notSecure) {
        xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
      }
      xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
          onloadend.call(this, xmlHttpRequest);
        }
      };
      xmlHttpRequest.onerror = e => {
        onerror.call(this, e);
      };
      xmlHttpRequest.send(file);
    });
  }
}, _a.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: KeycloakService
}], _a);
CsvUploadService = __decorate([Injectable()], CsvUploadService);

// src/app/widgets/dialogs/csv-upload/csv-upload.component.ts
var _a2;
var CsvUploadComponent = (_a2 = class {
  constructor(dialogRef, _fb, service, appService) {
    this.dialogRef = dialogRef;
    this._fb = _fb;
    this.service = service;
    this.appService = appService;
    this.params = {
      formSchema: [],
      prepareUrl: void 0
    };
    this.showLoader = false;
    this.model = {};
  }
  inputChanged(form, e) {
    console.log("form", form);
    console.log("this.fomr", this.form);
    console.log("e", e);
    console.log("e", e.target.checked);
    if (form.type === "checkbox") {
      this.form.controls[form.filterKey].setValue(e.target.checked);
    }
  }
  ngOnInit() {
    console.log("formSchema", this.params);
    let formContent = {};
    this.params.formSchema.forEach(form => {
      if (form.type === "checkbox") {
        formContent[form.filterKey] = [null];
      } else {
        formContent[form.filterKey] = [j4care.getValue(form.filterKey, this.params, form.defaultValue), form.validation];
      }
    });
    this.form = this._fb.group(formContent);
  }
  submit() {
    this.showLoader = true;
    let semicolon = false;
    let url = this.params.prepareUrl(this.form.value);
    if (hasIn_default(this.form.value, "semicolon") && this.form.value["semicolon"]) {
      semicolon = true;
    }
    this.service.uploadCSV(url, this.csvFile, semicolon, end => {
      this.showLoader = false;
      if (end.status >= 199 && end.status < 300) {
        let msgObject = {
          msg: "",
          status: "info"
        };
        try {
          if (end.response) {
            let countObject = JSON.parse(end.response);
            msgObject.msg = "" + countObject.count + " tasks created successfully!";
          } else {
            const warning = end.getResponseHeader("warning");
            msgObject.status = "warning";
            if (warning) {
              msgObject.msg = warning;
            } else {
              msgObject.msg = "Count could not be extracted";
            }
          }
        } catch (e) {
          console.log("Count could not be extracted", e);
        }
        if (!msgObject.msg) {
          msgObject.msg = "Tasks created successfully!";
        }
        this.appService.setMessage({
          "text": msgObject.msg,
          "status": msgObject.status
        });
        this.dialogRef.close(this.form.value);
      } else {
        let msgObject = {
          msg: "",
          status: "error"
        };
        const warning = end.getResponseHeader("warning");
        if (warning) {
          msgObject.msg = warning;
        } else {
          if (end.response) {
            try {
              let countObject = JSON.parse(end.response);
              msgObject.msg = countObject.errorMessage;
            } catch (e) {
              console.log("Count could not be extracted", e);
            }
          }
        }
        if (!msgObject.msg) {
          msgObject.msg = "Upload failed, please try again later!";
        }
        this.appService.setMessage({
          "text": msgObject.msg,
          "status": "error"
        });
        this.dialogRef.close(null);
      }
    }, err => {
      this.showLoader = false;
      this.appService.showError("Upload failed, please try again later!");
      this.dialogRef.close(null);
    });
  }
  dateChanged(key, e) {
    this.form.controls[key].setValue(e);
    if (e) {
      this.model[key] = e;
    } else {
      delete this.model[key];
    }
  }
  onFileChange(e) {
    console.log("e", e.target.files[0]);
    this.csvFile = e.target.files[0];
  }
}, _a2.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: UntypedFormBuilder
}, {
  type: CsvUploadService
}, {
  type: AppService
}], _a2);
CsvUploadComponent = __decorate([Component({
  selector: "csv-upload",
  template: csv_upload_component_default,
  imports: [ReactiveFormsModule, NgSwitch, MatSelect, MatOption, RangePickerComponent, NgStyle, CommonModule],
  standalone: true,
  styles: [csv_upload_component_default2]
})], CsvUploadComponent);
export { CsvUploadService, CsvUploadComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/