import {
  MatOption,
  MatSelect,
  SearchPipe
} from "./chunk-DJWZKPOC.js";
import {
  FormsModule
} from "./chunk-YEAVTBOB.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Globalvar,
  Input,
  Output,
  __decorate
} from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\specific-char-picker\specific-char-picker.component.html
var specific_char_picker_component_default = `<mat-select *ngIf="!mode" [ngModel]="localModel" (ngModelChange)="modelChanged($event)" ngDefaultControl>\r
    <ng-container *ngFor="let chargroup of specificChar">\r
        <span title="{{chargroup.groupName}}" class="groupName">{{chargroup.groupName}}</span>\r
        <mat-option title="{{ char.title }} ({{char.value}})" *ngFor="let char of chargroup.groupValues" value="{{char.value}}">{{ char.title }}</mat-option>\r
    </ng-container>\r
</mat-select>\r
<div *ngIf="mode && mode === 'configurator'"  class="widghet_content" (keydown)="keyDown($event)">\r
    <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r
    <input class="dictionary_widget_search" [(ngModel)]="filter" i18n-placeholder="@@placeholder.specific-char-picker.__search" placeholder="  Search..">\r
    <div class="char_widget" >\r
        <div class="list">\r
            <div *ngFor="let chargroup of specificChar|search:filter" >\r
                <span title="{{chargroup.groupName}}" class="groupName">{{chargroup.groupName}}</span>\r
                <div class="list_element" title="{{ char.title }} ({{char.value}})" *ngFor="let char of chargroup.groupValues|search:filter" (click)="addSelectedElement(char.value)">{{ char.title }}</div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\specific-char-picker\specific-char-picker.component.css
var specific_char_picker_component_default2 = "/* src/app/widgets/specific-char-picker/specific-char-picker.component.css */\n.dictionary_widget_search {\n  position: absolute;\n  z-index: 99999;\n  margin-left: 15px;\n  margin-top: 7px;\n  min-width: 175px;\n  left: 0px;\n  width: 100% !important;\n  top: 35px;\n}\n.char_widget {\n  padding-top: 45px;\n  max-height: 300px;\n  overflow: auto;\n  position: absolute;\n  z-index: 9999;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px 6px #cccccc;\n  -moz-box-shadow: 3px 4px 8px 6px #cccccc;\n  box-shadow: 3px 4px 8px 6px #cccccc;\n  width: 650px;\n  top: 35px;\n}\n.char_widget .no_result {\n  padding: 0px 15px 30px 15px;\n  min-width: 205px;\n  font-size: 18px;\n  color: #914f4f;\n}\n.char_widget ul.list {\n  list-style: none;\n  padding: 10px 15px;\n  margin-top: 30px;\n}\n.char_widget ul li:hover {\n  background: #ccc;\n  cursor: pointer;\n}\n.close {\n  position: absolute;\n  z-index: 999999;\n  margin-left: 610px;\n  margin-top: 8px;\n  top: 35px;\n}\n.widghet_content .list_element {\n  padding-left: 10px;\n}\n";

// src/app/widgets/specific-char-picker/specific-char-picker.component.ts
var _a;
var SpecificCharPickerComponent = (_a = class {
  set model(value) {
    this.localModel = value;
  }
  constructor() {
    this.modelChange = new EventEmitter();
    this.onValueSet = new EventEmitter();
    this.filter = "";
  }
  ngOnInit() {
    if (this.format && this.format === "hl7Charset") {
      this.specificChar = Globalvar.HL7_SPECIFIC_CHAR;
    } else {
      this.specificChar = Globalvar.DICOM_SPECIFIC_CHAR;
    }
  }
  addSelectedElement(element) {
    this.onValueSet.emit(element);
  }
  modelChanged($event) {
    this.localModel = $event;
    this.modelChange.emit(this.localModel);
    this.onValueSet.emit(this.localModel);
  }
  close() {
    this.onValueSet.emit("");
  }
  keyDown(e) {
    if (e.keyCode === 13) {
      let filtered = new SearchPipe().transform(this.specificChar, this.filter);
      if (filtered.length > 0) {
        this.onValueSet.emit(filtered[0].value);
      }
    }
  }
}, _a.ctorParameters = () => [], _a.propDecorators = {
  modelChange: [{ type: Output }],
  model: [{ type: Input }],
  onValueSet: [{ type: Output }],
  value: [{ type: Input }],
  mode: [{ type: Input }],
  format: [{ type: Input }]
}, _a);
SpecificCharPickerComponent = __decorate([
  Component({
    selector: "specific-char-picker",
    template: specific_char_picker_component_default,
    imports: [
      FormsModule,
      MatSelect,
      MatOption,
      CommonModule,
      SearchPipe
    ],
    standalone: true,
    styles: [specific_char_picker_component_default2]
  })
], SpecificCharPickerComponent);

export {
  SpecificCharPickerComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
