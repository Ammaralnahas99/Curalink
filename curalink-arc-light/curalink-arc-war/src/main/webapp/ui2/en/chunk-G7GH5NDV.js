import { SpecificCharPickerComponent } from "./chunk-ECXQZT4K.js";
import { DcmDropDownComponent, DynamicPipe, FormElement, IssuerSelectorComponent, MatOption, MatRipple, MatRippleModule, MatSelect, PatientIssuerPipe, RangePickerComponent, SearchPipe, StorageSystemsService, StudyService, TableSchemaElement, TrimPipe, _StructuralStylesLoader } from "./chunk-DJWZKPOC.js";
import { FormsModule, MatProgressSpinner } from "./chunk-YEAVTBOB.js";
import { AppService, ApplicationRef, CdkScrollableModule, ChangeDetectionStrategy, ChangeDetectorRef, CommonModule, Component, ContentChild, ContentChildren, DOCUMENT, DOWN_ARROW, DatePipe, Directionality, Directive, DomPortalOutlet, ENTER, ESCAPE, ElementRef, EventEmitter, FactoryTarget, FocusKeyManager, FocusMonitor, Globalvar, HttpErrorHandler, Injectable, InjectionToken, Injector, Input, J4careHttpService, KeycloakService, LEFT_ARROW, MatCommonModule, MatDialogContent, MatDialogRef, NgClass, NgModule, NgStyle, NgSwitch, NgZone, Observable, Output, OverlayConfig, OverlayModule, Pipe, QueryList, RIGHT_ARROW, Renderer2, SPACE, SelectDropdown, Subject, Subscription, TemplatePortal, TemplateRef, UP_ARROW, UpperCasePipe, ViewChild, ViewContainerRef, ViewEncapsulation, WindowRefService, _CdkPrivateStyleLoader, _IdGenerator, __decorate, __spreadProps, __spreadValues, _animationsDisabled, afterNextRender, booleanAttribute, cloneDeep_default, core_exports, createFlexibleConnectedPositionStrategy, createOverlayRef, createRepositionScrollStrategy, filter, forEach_default, get_default, hasIn_default, hasModifierKey, inject, isArray_default, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, j4care, lodash_exports, merge, numberAttribute, of, pickBy_default, set_default, share, startWith, switchMap, take, takeUntil, ɵɵngDeclareClassMetadata, ɵɵngDeclareComponent, ɵɵngDeclareDirective, ɵɵngDeclareFactory, ɵɵngDeclareInjector, ɵɵngDeclareNgModule } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dialogs\edit-patient\edit-patient.component.html
var edit_patient_component_default = `<div class="vex vex-theme-os edit-patient" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form" (click)="checkClick($event)">\r
        <h3 [innerHtml]="titleLabel"></h3>\r
        <ul class="modal_vertical_nav">\r
            <li (click)="changeFormMode('simple')" [ngClass]="{'active':formMode==='simple'}">\r
                Simple\r
            </li>\r
            <li (click)="changeFormMode('complex')" [ngClass]="{'active':formMode==='complex'}">\r
                Technical\r
            </li>\r
        </ul>\r
        <div class="tabs_hide_layer">\r
            <div class="form_content" [ngClass]="formMode">\r
                <div class="simple">\r
                    <!--                    <filter-generator\r
                            [schema]="simpleForm.schema"\r
                            [filterTreeHeight]="1"\r
                            [model]="simpleForm.model"\r
                            [hideClearButtons]="true"\r
                            [doNotSave]="true"\r
                            [onFilterChangeHook]="onSimpleFormChange"\r
                    ></filter-generator>-->\r
                    <form-generator [schema]="simpleForm.schema" [showLabels]="true"\r
                        [model]="patientResults.patient?.attrs || patient.attrs"></form-generator>\r
                </div>\r
                <div class="complex">\r
                    <input autocomplete="off" id="addPatientAttribut" class="addPatientAttribut"\r
                        [(ngModel)]="addPatientAttribut" i18n-placeholder="@@placeholder.add_new_attribute"\r
                        placeholder="Add new attribute" (click)="opendropdown = !opendropdown"\r
                        (keydown)="pressedKey($event)" />\r
                    <div id="dropdown" class="dropdown" *ngIf="opendropdown">\r
                        <a class="dropdown_element" name="{{m.code}}"\r
                            *ngFor="let m of dropdown | search:addPatientAttribut"\r
                            (click)="$event.preventDefault();addAttribute(m.code, patientResults.patient?.attrs || patient.attrs)">({{m.codeComma}})\r
                            {{m.name}}</a>\r
                    </div>\r
                    <div mat-dialog-content>\r
                        <iod-form-generator [externalInternalAetMode]="externalInternalAetMode" [object]="patient.attrs"\r
                            [prefix]="" [mode]="mode" [iod]="iod"\r
                            (keydown)="dialogKeyHandler($event,dialogRef)"></iod-form-generator>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="inputpart" *ngIf="!hideAdditionalParams">\r
            <div class="form_input">\r
                <label i18n="@@hospital_name_label">Hospital Name:</label>\r
                <input type="text" [(ngModel)]="patientResults.hospitalName" i18n-placeholder="@@hospital_name"\r
                    placeholder="Hospital Name">\r
            </div>\r
            <div class="form_input" *ngIf="mode === 'edit'">\r
                <label i18n="@@reason_for_modification_label">Reason for modification:</label>\r
                <dcm-drop-down [options]="reasonForModification" [(model)]="patientResults.reasonForModificationResult"\r
                    [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                    (modelChange)="patientResults.reasonForModificationResult = $event">\r
                </dcm-drop-down>\r
            </div>\r
            <div class="form_input" *ngIf="mode === 'edit'">\r
                <label i18n="@@source_of_prev_vals_label">Source of previous values:</label>\r
                <input type="text" [(ngModel)]="patientResults.sourceOfPrevVals"\r
                    i18n-placeholder="source_of_previous_values" placeholder="Source of previous values">\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            @if (patientResults.patient) {\r
            <button class="save" type="button" (click)="onSaveClick(patientResults)">{{saveLabel}}</button>\r
            } @else {\r
            <button class="save" type="button" (click)="onSaveClick(patient)">{{saveLabel}}</button>\r
            }\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\widgets\dialogs\edit-patient\edit-patient.component.scss
var edit_patient_component_default2 = "/* src/app/widgets/dialogs/edit-patient/edit-patient.component.scss */\n.tabs_hide_layer {\n  overflow-x: hidden;\n  float: left;\n  box-shadow: 5px 3px 13px 0px rgba(68, 68, 68, 0.93);\n  margin-top: 10px;\n  padding: 15px 20px;\n}\n.inputpart {\n  box-shadow: 5px 3px 13px 0 rgba(68, 68, 68, 0.93);\n  margin-top: 10px;\n  padding: 15px 70px;\n}\n.inputpart .form_input {\n  display: grid;\n  grid-template-columns: 1fr 1.36fr;\n  margin-bottom: 15px;\n  grid-gap: 12px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n.inputpart .form_input label {\n  text-align: right;\n}\n.inputpart .form_input input,\n.inputpart .form_input dcm-drop-down {\n  width: 96%;\n  min-height: 30px;\n}\n.form_content {\n  display: grid;\n  position: relative;\n  grid-template-columns: 100% 100%;\n  -webkit-transition: left 500ms ease-in-out;\n  -moz-transition: left 500ms ease-in-out;\n  -o-transition: left 500ms ease-in-out;\n  transition: left 500ms ease-in-out;\n  margin: 0 25px;\n  grid-gap: 50px;\n  left: 0;\n}\n.form_content.complex {\n  left: -100%;\n}\n.form_content > div {\n  display: block;\n  width: 100%;\n}\n.cdk-overlay-container .edit-patient .mat-mdc-dialog-content {\n  margin: 0;\n  max-height: 40vh;\n}\n.modal_vertical_nav {\n  padding: 0;\n  width: 100%;\n}\n.modal_vertical_nav li {\n  float: left;\n  min-width: 120px;\n  margin-right: 5px;\n  list-style: none;\n  padding: 7px 10px;\n}\n.modal_vertical_nav li.active {\n  box-shadow: 5px 3px 13px 0 rgba(68, 68, 68, 0.93);\n  font-weight: bold;\n}\n.modal_vertical_nav li:hover {\n  cursor: pointer;\n}\n.form_content .simple {\n  margin-top: 2rem;\n}\n.form_content .simple .form_block.label_mode {\n  border-bottom: 1px solid #cccccc;\n  margin-bottom: 2px;\n  height: 36px;\n  padding: 3px 8px;\n}\n.form_content .simple .form_block.label_mode:hover {\n  background: #ccc;\n}\n.form_content .simple .form_block.label_mode label {\n  font-weight: normal;\n}\n.form_content .simple .form_block.label_mode input {\n  height: 30px;\n}\n";

// src/app/widgets/dialogs/edit-patient/edit-patient.service.ts
var _a;
var EditPatientService = (_a = class {
  constructor() {}
  extractPatientIdentifiers(patientIdentifier) {
    try {
      if (patientIdentifier) {
        const regex = /(\w+)(\^{3})?(\w*)&?(\w*)&?(\w*)\^?(\w*)/;
        let match;
        if ((match = regex.exec(patientIdentifier)) !== null) {
          let result = {};
          if (match[1]) {
            result["PatientID"] = {
              text: match[1],
              modelPath: "00100020.Value[0]",
              firstLevelCode: "00100020"
            };
          }
          if (match[3]) {
            result["IssuerOfPatientID"] = {
              text: match[3],
              modelPath: "00100021.Value[0]",
              firstLevelCode: "00100021"
            };
          }
          if (match[4]) {
            result["UniversalEntityID"] = {
              text: match[4],
              //       ["00100024"].Value[0]["00400032"].Value[0]
              modelPath: "00100024.Value[0][00400032].Value[0]",
              firstLevelCode: "00100024"
            };
          }
          if (match[5]) {
            result["UniversalEntityIDType"] = {
              text: match[5],
              modelPath: "00100024.Value[0][00400033].Value[0]",
              firstLevelCode: "00100024"
            };
          }
          if (match[6]) {
            result["TypeofPatientID"] = {
              text: match[6],
              modelPath: "00100022.Value[0]",
              firstLevelCode: "00100022"
            };
          }
          return result;
        }
        return;
      }
    } catch (e) {
      return;
    }
  }
  getSimpleFormSchema() {
    return [new FormElement({
      type: "composed-input",
      inputSize: 5,
      joinString: "^",
      modelPath: "00100010.Value[0].Alphabetic",
      placeholderElements: ["Family Name", "Given Name", "Middle Name", "Prefix", "Suffix"],
      description: "Patient name ( Alphabetic )",
      placeholder: "Patient name ( Alphabetic )"
    }), new FormElement({
      type: "composed-input",
      inputSize: 5,
      joinString: "^",
      modelPath: "00100010.Value[0].Ideographic",
      placeholderElements: ["Family Name", "Given Name", "Middle Name", "Prefix", "Suffix"],
      description: "Patient name ( Ideographic )",
      placeholder: "Patient name ( Ideographic )"
    }), new FormElement({
      type: "composed-input",
      inputSize: 5,
      joinString: "^",
      modelPath: "00100010.Value[0].Phonetic",
      placeholderElements: ["Family Name", "Given Name", "Middle Name", "Prefix", "Suffix"],
      description: "Patient name ( Phonetic )",
      placeholder: "Patient name ( Phonetic )"
    }), new FormElement({
      type: "input",
      modelPath: "00100020.Value[0]",
      onChangeHook: (element, event, model) => {},
      onFocusOutHook: (element, event, model) => {
        const value = get_default(model, element.modelPath);
        const extracted = this.extractPatientIdentifiers(value);
        console.log("extracted", extracted);
        if (extracted) {
          Object.keys(extracted).forEach(key => {
            if (extracted[key].text) {
              if (!hasIn_default(model, extracted[key].modelPath) && !hasIn_default(model, extracted[key].firstLevelCode)) {
                model[extracted[key].firstLevelCode] = cloneDeep_default(this.iod[extracted[key].firstLevelCode]);
                j4care.removeKeyFromObject(model[extracted[key].firstLevelCode], "multi");
                j4care.removeKeyFromObject(model[extracted[key].firstLevelCode], "required");
              }
              set_default(model, extracted[key].modelPath, extracted[key].text);
            }
          });
        }
      },
      description: "Patient ID",
      placeholder: "Patient ID"
    }), new FormElement({
      type: "input",
      modelPath: "00100021.Value[0]",
      description: "Issuer of Patient ID",
      placeholder: "Issuer of Patient ID"
    }), new FormElement({
      tag: "p-calendar",
      modelPath: "00100030.Value[0]",
      onlyDate: true,
      description: "Patient's Birth Date",
      placeholder: "Patient's Birth Date"
    }), new FormElement({
      tag: "select",
      options: [new SelectDropdown("F", "Female"), new SelectDropdown("M", "Male"), new SelectDropdown("O", "Other")],
      modelPath: "00100040.Value[0]",
      description: "Patient's Sex",
      placeholder: "Patient's Sex"
    })
    /*      ,
          {
            tag:"issuer-selector",
            issuers:[
              {
                key:"PatientID",
                label:$localize `:@@patient_id:Patient ID`
              },{
                key:"IssuerOfPatientID",
                label:$localize `:@@issuer_of_patient_id:Issuer of Patient ID`
              }, {
                key:"IssuerOfPatientIDQualifiersSequence.UniversalEntityID",
                label:$localize `:@@issuer_of_patient_id_seq_universal_entity_id:Issuer of Patient ID Qualifiers Sequence - Universal Entity ID`
              }, {
                key:"IssuerOfPatientIDQualifiersSequence.UniversalEntityIDType",
                label:$localize `:@@issuer_of_patient_id_seq_universal_entity_id_type:Issuer of Patient ID Qualifiers Sequence - Universal Entity ID Type`
              }
            ],
            description:$localize `:@@patient_identifiers:Patient Identifiers`,
            placeholder:$localize `:@@patient_identifiers:Patient Identifiers`
          }*/
    /*        [
            [
              {
                tag: "label",
                text: $localize`:@@person_name:Person name`
              },
              {
                tag:"person-name-picker",
                filterKey:"PatientName",
                description:$localize`:@@person_name:Person name`,
                placeholder:$localize`:@@person_name:Person name`
              }
            ],[
              {
                tag: "label",
                text: $localize `:@@patient_identifiers:Patient Identifiers`
              },
              {
                tag:"issuer-selector",
                issuers:[
                  {
                    key:"PatientID",
                    label:$localize `:@@patient_id:Patient ID`
                  },{
                    key:"IssuerOfPatientID",
                    label:$localize `:@@issuer_of_patient_id:Issuer of Patient ID`
                  }, {
                    key:"IssuerOfPatientIDQualifiersSequence.UniversalEntityID",
                    label:$localize `:@@issuer_of_patient_id_seq_universal_entity_id:Issuer of Patient ID Qualifiers Sequence - Universal Entity ID`
                  }, {
                    key:"IssuerOfPatientIDQualifiersSequence.UniversalEntityIDType",
                    label:$localize `:@@issuer_of_patient_id_seq_universal_entity_id_type:Issuer of Patient ID Qualifiers Sequence - Universal Entity ID Type`
                  }
                ],
                description:$localize `:@@patient_identifiers:Patient Identifiers`,
                placeholder:$localize `:@@patient_identifiers:Patient Identifiers`
              }
            ],
    
              [
    
                {
                  tag: "label",
                  text: $localize`:@@batch_id:Batch ID`
                },
                {
                  tag: "input",
                  type: "text",
                  filterKey: "batchID",
                  description: $localize`:@@batch_id:Batch ID`,
                  placeholder: $localize`:@@batch_id:Batch ID`
                }
            ]
          ]*/];
  }
}, _a.ctorParameters = () => [], _a);
EditPatientService = __decorate([Injectable({
  providedIn: "root"
})], EditPatientService);

// angular:jit:template:src\app\helpers\form-generator\form-generator.component.html
var form_generator_component_default = `\r
<!--\r
<form #form="ngForm" (ngSubmit)="onSubmit(form)">\r
-->\r
    <div class="form_block" *ngFor="let element of schema" [ngClass]="{'label_mode':showLabels}">\r
        <ng-container *ngIf="showLabels">\r
            <label>{{element.label || element.placeholder || element.description}}</label>\r
        </ng-container>\r
        <ng-container [ngSwitch]="element.type">\r
            <ng-container *ngSwitchCase="'multi-checkbox'">\r
                <!--options:{{line[index]?.options|json}}-->\r
                <label *ngFor="let item of element.options">\r
                    <input [disabled]="item.disabled" type="checkbox" (ngModelChange)="modelChange(element, $event)" [(ngModel)]="model[item.key]"  title="{{item?.description}}" />\r
                    <span [ngStyle]="item?.style" >{{item.text}}</span>\r
                </label>\r
            </ng-container>\r
            <input\r
                    *ngSwitchCase="'input'"\r
                    [disabled]="element.disabled"\r
                    (ngModelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [ngModel]="_.get(model,element.modelPath)"\r
                    [ngModelOptions]="{standalone: true}"\r
                    (focusout)="focusOut(element, $event);"\r
                    [name]="element.modelPath"\r
                    type="text"\r
                    [ngStyle]="element.style"\r
                    title="{{element?.description}}"\r
                    placeholder="{{element?.placeholder}}"\r
            >\r
            <input\r
                    *ngSwitchCase="'input-number'"\r
                    [disabled]="element.disabled"\r
                    (ngModelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [ngModel]="_.get(model,element.modelPath)"\r
                    [ngModelOptions]="{standalone: true}"\r
                    (focusout)="focusOut(element, $event);"\r
                    type="number"\r
                    [ngStyle]="element.style"\r
                    title="{{element?.description}}"\r
                    placeholder="{{element?.placeholder}}"\r
            >\r
            <composed-input\r
                    *ngSwitchCase="'composed-input'"\r
                   [inputSize]="element.inputSize"\r
                    [placeholderElements]="element.placeholderElements"\r
                   [joinString]="element.joinString"\r
                    [model]="_.get(model,element.modelPath)"\r
                   (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                   placeholder="{{element?.placeholder || element?.description}}"\r
                   title="{{element?.description}}"\r
            >\r
            </composed-input>\r
        </ng-container>\r
        <ng-container [ngSwitch]="element.tag">\r
            <issuer-selector *ngSwitchCase="'issuer-selector'"\r
                             [title]="element?.description"\r
                             [issuers]="element?.issuers"\r
                             placeholder="{{element?.placeholder || element?.description}}"\r
                             (ngModelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                             [ngModel]="_.get(model,element.modelPath)"\r
            ></issuer-selector>\r
            <range-picker\r
                    *ngSwitchCase="'p-calendar'"\r
                    [ngStyle]="element.style"\r
                    [onlyDate]="element.onlyDate"\r
                    [model]="_.get(model,element.modelPath)"\r
                    (modelChange)="dateChanged(element, $event)"\r
                    [datePickerMode]="true"\r
                    placeholder="{{element?.placeholder || element?.description}}"\r
                    dateFormat="yyyyMMdd"\r
                    title="{{element?.description}}"\r
            ></range-picker>\r
            <dcm-drop-down\r
                    [ngStyle]="element.style"\r
                    *ngSwitchCase="'editable-select'"\r
                    [placeholder]="element?.placeholder"\r
                    [title]="element?.description || ''"\r
                    [ngClass]="element.cssClass"\r
                    [options]="element.options"\r
                    [optionsTree]="element.optionsTree"\r
                    [editable]="true"\r
                    [showSearchField]="true"\r
                    (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [model]="_.get(model,element.modelPath)"\r
                    [multiSelectMode]="false"\r
                    [showStar]="element.showStar"\r
            ></dcm-drop-down>\r
            <dcm-drop-down\r
                    [ngStyle]="element.style"\r
                    *ngSwitchCase="'editable-multi-select'"\r
                    [placeholder]="element?.placeholder || ''"\r
                    [title]="element?.description || ''"\r
                    [ngClass]="element.cssClass"\r
                    [options]="element.options"\r
                    [optionsTree]="element.optionsTree"\r
                    [editable]="true"\r
                    [showSearchField]="true"\r
                    (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [model]="_.get(model,element.modelPath)"\r
                    [multiSelectMode]="true"\r
                    [showStar]="element.showStar"\r
            ></dcm-drop-down>\r
            <dcm-drop-down\r
                    [multiSelectMode]="true"\r
                    [ngStyle]="element.style"\r
                    *ngSwitchCase="'multi-select'"\r
                    [placeholder]="element?.placeholder"\r
                    [title]="element?.description || ''"\r
                    [ngClass]="element.cssClass"\r
                    [optionsTree]="element.optionsTree"\r
                    [options]="element.options"\r
                    (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [model]="_.get(model,element.modelPath)"\r
                    [showSearchField]="element.showSearchField"\r
                    [showStar]="element.showStar"\r
            ></dcm-drop-down>\r
            <dcm-drop-down\r
                    [ngStyle]="element.style"\r
                    *ngSwitchCase="'html-select'"\r
                    [placeholder]="element?.placeholder"\r
                    [title]="element?.description || ''"\r
                    [ngClass]="element.cssClass"\r
                    [options]="element.options"\r
                    (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [model]="_.get(model,element.modelPath)"\r
                    [optionsTree]="element.optionsTree"\r
                    [showSearchField]="element.showSearchField"\r
                    [multiSelectMode]="false"\r
                    [showStar]="element.showStar"\r
            ></dcm-drop-down>\r
            <dcm-drop-down\r
                    [ngStyle]="element.style"\r
                    *ngSwitchCase="'select'"\r
                    [placeholder]="element?.placeholder"\r
                    [title]="element?.description || ''"\r
                    [ngClass]="element.cssClass"\r
                    [options]="element.options"\r
                    (modelChange)="_.set(model,element.modelPath, $event);modelChange(element, $event)"\r
                    [model]="_.get(model,element.modelPath)"\r
                    [optionsTree]="element.optionsTree"\r
                    [showSearchField]="element.showSearchField"\r
                    [showSelectedEmptyValue]="element.showSelectedEmptyValue"\r
                    [multiSelectMode]="false"\r
                    [showStar]="element.showStar"\r
            ></dcm-drop-down>\r
        </ng-container>\r
    </div>\r
<!--\r
</form>-->\r
`;

// angular:jit:style:src\app\helpers\form-generator\form-generator.component.scss
var form_generator_component_default2 = "/* src/app/helpers/form-generator/form-generator.component.scss */\n.form_block.label_mode {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n}\n.form_block.label_mode label {\n  text-align: right;\n}\n";

// src/app/helpers/form-generator/form-generator.service.ts
var _a2;
var FormGeneratorService = (_a2 = class {
  constructor() {}
  convertSchemaToFormGroup(schema) {}
}, _a2.ctorParameters = () => [], _a2);
FormGeneratorService = __decorate([Injectable({
  providedIn: "root"
})], FormGeneratorService);

// angular:jit:template:src\app\widgets\composed-input\composed-input.component.html
var composed_input_component_default = `<div class="composed_input_content">\r
    <ng-container *ngFor="let el of Array(inputSize); let i = index">\r
        <input  [ngStyle]="{width: 'calc( 100% /' + inputSize +')'}" *ngIf="placeholderElements" type="text" [(ngModel)]="modelArray[i]" [placeholder]="placeholderElements[i]" (ngModelChange)="onchange($event)">\r
        <input  [ngStyle]="{width: 'calc( 100% /' + inputSize +')'}" *ngIf="!placeholderElements" type="text" [(ngModel)]="modelArray[i]"  (ngModelChange)="onchange($event)">\r
        <span class="join_string" *ngIf="i+1 < inputSize && (joins[i] || joins)">{{joins[i] || joins}}</span>\r
    </ng-container>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\composed-input\composed-input.component.scss
var composed_input_component_default2 = "/* src/app/widgets/composed-input/composed-input.component.scss */\n.composed_input_content {\n  display: flex;\n}\n.composed_input_content input {\n  width: auto;\n}\n.composed_input_content .join_string {\n  width: 20px;\n  text-align: center;\n}\n";

// src/app/widgets/composed-input/composed-input.component.ts
var _a3;
var ComposedInputComponent = (_a3 = class {
  constructor() {
    this.modelArray = [];
    this.modelChange = new EventEmitter();
    this.Array = Array;
  }
  set model(value) {
    console.log("value", value);
    this._model = value;
    this.mapValueToModelArray(value);
  }
  get model() {
    return this._model;
  }
  set joinString(value) {
    if (value && value.indexOf("|") > -1) {
      this.joins = value.split("|");
    } else {
      this.joins = value;
    }
  }
  mapValueToModelArray(value) {
    try {
      if (value) {
        if (typeof this.joins === "string") {
          const splitedValue = value.split(this.joins);
          if (!this.modelArray) {
            this.modelArray = Array(this.inputSize);
          }
          for (let i = 0; i < this.inputSize; i++) {
            this.modelArray[i] = splitedValue[i] || "";
          }
        } else if (typeof this.joins === "object" && this.joins.length === this.inputSize - 1) {
          let tempValue = value;
          for (let i = 0; i < this.inputSize; i++) {
            const splitedValue = tempValue.split(this.joins[i]);
            this.modelArray[i] = splitedValue[0] || "";
            splitedValue.splice(0, 1);
            tempValue = splitedValue.join("");
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  onchange(e) {
    console.log("this", this.modelArray);
    console.log("composed", this.getComposedValue());
    this.modelChange.emit(this.getComposedValue());
  }
  getComposedValue() {
    try {
      let composedValue = "";
      this.modelArray.forEach((value, index) => {
        composedValue += value + (this.modelArray[index + 1] && index + 1 < this.inputSize && this.joins ? this.joins[index] || this.joins : "");
      });
      return composedValue;
    } catch (e) {
      return "";
    }
  }
}, _a3.propDecorators = {
  model: [{
    type: Input,
    args: ["model"]
  }],
  placeholder: [{
    type: Input
  }],
  inputSize: [{
    type: Input
  }],
  placeholderElements: [{
    type: Input
  }],
  modelChange: [{
    type: Output
  }],
  joinString: [{
    type: Input
  }]
}, _a3);
ComposedInputComponent = __decorate([Component({
  selector: "composed-input",
  template: composed_input_component_default,
  imports: [NgStyle, FormsModule, CommonModule],
  standalone: true,
  styles: [composed_input_component_default2]
})], ComposedInputComponent);

// src/app/helpers/form-generator/form-generator.component.ts
var _a4;
var FormGeneratorComponent = (_a4 = class {
  constructor(service) {
    this.service = service;
    this.showLabels = false;
    this._ = lodash_exports;
    this.model = {};
  }
  ngOnInit() {}
  /*  onSubmit(form: NgForm) {
      console.log("form",form);
    }*/
  modelChange(element, $event) {
    console.log("element", element);
    console.log("e", $event);
    console.log("model", this.model);
    if (element && element.onChangeHook) {
      element?.onChangeHook(element, $event, this.model);
    }
  }
  focusOut(element, $event) {
    if (element && element.onFocusOutHook) {
      element?.onFocusOutHook(element, $event, this.model);
    }
  }
  dateChanged(element, $event) {
    if ($event) {
      set_default(this.model, element.modelPath, $event);
    }
  }
}, _a4.ctorParameters = () => [{
  type: FormGeneratorService
}], _a4.propDecorators = {
  schema: [{
    type: Input
  }],
  showLabels: [{
    type: Input
  }],
  model: [{
    type: Input
  }]
}, _a4);
FormGeneratorComponent = __decorate([Component({
  selector: "form-generator",
  template: form_generator_component_default,
  imports: [NgClass, NgSwitch, FormsModule, NgStyle, ComposedInputComponent, IssuerSelectorComponent, RangePickerComponent, DcmDropDownComponent, CommonModule],
  standalone: true,
  styles: [form_generator_component_default2]
})], FormGeneratorComponent);

// angular:jit:template:src\app\helpers\iod-form-generator\iod-form-generator.component.html
var iod_form_generator_component_default = `@if (object.newBlock && prefix != '>') {\r
    <div (click)="removeObject(object)" class="t0 new_block glyphicon glyphicon-remove"></div>\r
}\r
<div class="listblock" *ngFor="let o of getKeys(object); let i=index; trackBy:trackByFn" [ngClass]="{'firstlevel':!prefix,'sq':object[o].vr === 'SQ'}">\r
    @if (o !== 'newBlock') {\r
        <div class="form_code">{{prefix}} {{o}}</div>\r
        <div class="form_name">{{DCM4CHE.elementName.forTag(o,privateCreator(o))}}</div>\r
        <div (click)="removeAttr(o)" *ngIf="object[o].vr === 'SQ' && !prefix && !object.newBlock" class="t1 iod_remove glyphicon glyphicon-remove"></div>\r
        <div class="form_input" *ngIf="object[o].vr != 'SQ'">\r
        @for (v of object[o].Value; let i=$index; track trackByFn) {\r
                <div>\r
                <div *ngIf="object[o].vr != 'PN'" class="ariod">\r
                    <input *ngIf="!(object[o].enum && object[o].enum.length > 0) && object[o].vr != 'DA' && object[o].vr != 'DT' && o != '00100040' && o != '00080005' && o != '00102203' && o != '00741202'"\r
                           class="{{o}}"\r
                           [placeholderchanger]="{\r
                                code:o,\r
                                name:DCM4CHE.elementName.forTag(o,privateCreator(o)),\r
                                mode:mode,\r
                                delete:false,\r
                                iod:iod,\r
                                externalInternalAetMode:externalInternalAetMode,\r
                                value:object[o].Value[i],\r
                                prefix:prefix\r
                            }"\r
                           [(ngModel)]="object[o].Value[i]"\r
                    >\r
    <!--                <p-calendar\r
                            class="{{o}}"\r
                            *ngIf="object[o].vr === 'DA' && o != '00100040' && o != '00080005' && o != '00102203'"\r
                            dataType="string"\r
                            [(ngModel)]="object[o].Value[i]"\r
                            dateFormat="yymmdd"\r
                            monthNavigator="true"\r
                            yearNavigator="true"\r
                            yearRange="1800:2100"\r
                    ></p-calendar>-->\r
\r
                    <range-picker\r
                            class="{{o}}"\r
                            *ngIf="(object[o].vr === 'DA' || object[o].vr === 'DT') && o != '00100040' && o != '00080005' && o != '00102203' && o != '00741202'"\r
                            [model]="object[o].Value[i]"\r
                            (modelChange)="object[o].Value[i] = $event"\r
                            [datePickerMode]="true"\r
                            dateFormat="yyyyMMdd"\r
                    ></range-picker>\r
\r
                    <select class="selectelement {{o}}" *ngIf="o === '00100040' && o != '00102203' && o != '00741202'"\r
                            [ngModel]="object[o].Value[0]"\r
                            (ngModelChange)="onChange($event, 'object.00100040.Value[0]')"\r
                    >\r
                        <option [ngValue]="g.obj.Value[0]"  *ngFor="let g of options.genders" >{{g.title}}</option>\r
                    </select>\r
                    <ng-container *ngIf="o === '00741202'">\r
                        <input *ngIf="!_.get(this.appService.global,'uiConfig.dcmuiMWLWorklistLabel')"  class="{{o}}"\r
                               [placeholderchanger]="{\r
                                    code:o,\r
                                    name:DCM4CHE.elementName.forTag(o,privateCreator(o)),\r
                                    mode:mode,\r
                                    delete:false,\r
                                    iod:iod,\r
                                    externalInternalAetMode:externalInternalAetMode,\r
                                    value:object[o].Value[i],\r
                                    prefix:prefix\r
                                }"\r
                               [(ngModel)]="object[o].Value[i]"\r
                        >\r
                        <select *ngIf="_.get(this.appService.global,'uiConfig.dcmuiMWLWorklistLabel')" [(ngModel)]="object[o].Value[0]">\r
                            <option value="">*</option>\r
                            <option *ngFor="let label of _.get(this.appService.global,'uiConfig.dcmuiMWLWorklistLabel')" value="{{label}}">{{label}}</option>\r
                        </select>\r
                    </ng-container>\r
                    <select *ngIf="object[o].enum && object[o].enum.length > 0" [(ngModel)]="object[o].Value[0]">\r
                        <option *ngIf="!(object[o].required && object[o].required === 1)" value="">*</option>\r
                        <option *ngFor="let n of object[o].enum" value="{{n}}">{{n}}</option>\r
                    </select>\r
\r
                    <specific-char-picker [(model)]="object[o].Value[i]" (modelChange)="charChange($event)" *ngIf="o === '00080005'"></specific-char-picker>\r
                    <div [placeholderchanger]="{\r
                                            code:o,\r
                                            name:DCM4CHE.elementName.forTag(o,privateCreator(o)),\r
                                            mode:mode,\r
                                            delete:true,\r
                                            iod:iod\r
                                        }"\r
                         (click)="removeAttr(o)"\r
                         *ngIf="o != '00104000' && !prefix && !object.newBlock"\r
                         class="t2 iod_remove glyphicon glyphicon-remove {{o}}"\r
                    ></div>\r
                </div>\r
                <div class="multi_input" *ngIf="object[o].vr === 'PN'">\r
                    <input i18n-placeholder="@@placeholder.iod-form-generator.alphabetic" placeholder="{{DCM4CHE.elementName.forTag(o,privateCreator(o))}} Alphabetic" [(ngModel)]="object[o].Value[i]['Alphabetic']">\r
                    <input i18n-placeholder="@@placeholder.iod-form-generator.ideographic" placeholder="{{DCM4CHE.elementName.forTag(o,privateCreator(o))}} Ideographic" [(ngModel)]="object[o].Value[i]['Ideographic']">\r
                    <input i18n-placeholder="@@placeholder.iod-form-generator.phonetic" placeholder="{{DCM4CHE.elementName.forTag(o,privateCreator(o))}} Phonetic" [(ngModel)]="object[o].Value[i]['Phonetic']">\r
                    <div (click)="removeAttr(o)" *ngIf="o != '00104000' && o != '00080005' && !prefix && !object.newBlock" class="t3 iod_remove glyphicon glyphicon-remove"></div>\r
                </div>\r
            </div>\r
            }\r
    </div>\r
        }\r
    <div *ngIf="object[o].vr === 'SQ'">\r
        <div *ngFor="let io of object[o].Value; let i=index; trackBy:trackByFn" class="sqiod" [ngClass]="{'active':activeBlock}">\r
            <div (click)="removeAttr(o,i)" *ngIf="(!prefix || prefix==='')  && object[o]  && object[o].Value && object[o].Value.length > 1 && !object.newBlock && !parentNewBlock" class="iod_remove glyphicon glyphicon-remove"></div>\r
            <iod-form-generator [parentNewBlock]="object.newBlock" [parentObject]="object" [parentKey]="o" [valueArrayKey]="i"  [object]="_.get(object,'['+o+'].Value['+i+']')" [mode]="mode" [prefix]="'>'+ (prefix || '')" [iod]="_.get(iod, o)"></iod-form-generator>\r
            <button class="add_multi_button" (mouseover)="activeBlock = true" (mouseleave)="activeBlock = false" (click)="clonePart(object,o, iod, i,io)"><span class="glyphicon glyphicon-plus"></span></button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:inline:src\app\helpers\iod-form-generator\iod-form-generator.component.ts;CiAgICAgICAgLmFjdGl2ZS5zcWlvZDpob3ZlciB7CiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTsKICAgICAgICAgICAgY29sb3I6IHdoaXRlOwoKICAgICAgICAgICAgaW5wdXQgewogICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAuYWRkX211bHRpX2J1dHRvbiB7CiAgICAgICAgICAgIGZsb2F0OiByaWdodDsKICAgICAgICAgICAgd2lkdGg6IDUwcHg7CiAgICAgICAgICAgIGhlaWdodDogMjhweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7CiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwODc7CiAgICAgICAgICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7CiAgICAgICAgICAgIG1hcmdpbjogNXB4IDIwcHg7CgogICAgICAgICAgICAmOmhvdmVyIHsKICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7CiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC5uZXdfYmxvY2sgewogICAgICAgICAgICBmbG9hdDogcmlnaHQ7CiAgICAgICAgICAgIGNvbG9yOiAjQ0RDRENEOwogICAgICAgICAgICAmOmhvdmVyIHsKICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsKICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIA==
var iod_form_generator_component_default2 = "/* angular:styles/component:css;347df51925bd3e96de8c2dc555eb0f39bf09f4d812ee30680266e078bc11f292;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\helpers\\iod-form-generator\\iod-form-generator.component.ts */\n.active.sqiod:hover {\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n}\n.active.sqiod:hover input {\n  color: black;\n}\n.add_multi_button {\n  float: right;\n  width: 50px;\n  height: 28px;\n  background: white;\n  color: #00000087;\n  border: navajowhite;\n  margin: 5px 20px;\n}\n.add_multi_button:hover {\n  background: #212121;\n  color: white;\n}\n.new_block {\n  float: right;\n  color: #CDCDCD;\n}\n.new_block:hover {\n  color: black;\n  cursor: pointer;\n}\n";

// src/app/helpers/placeholderchanger.directive.ts
var _a5;
var PlaceholderchangerDirective = (_a5 = class {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    console.log("inputAttribut", this.inputAttribut);
    console.log("el", this.el.nativeElement.value);
    if (this.inputAttribut.code === "00100020" && this.inputAttribut.externalInternalAetMode === "external") {
      this.renderer.setAttribute(this.el.nativeElement, "placeholder", this.inputAttribut.name);
    } else {
      if (this.inputAttribut.code in Globalvar.IODPLACEHOLDERS && hasIn_default(Globalvar.IODPLACEHOLDERS[this.inputAttribut.code], this.inputAttribut.mode)) {
        if (Globalvar.IODPLACEHOLDERS[this.inputAttribut.code][this.inputAttribut.mode].action === "replace" && this.el.nativeElement.tagName === "INPUT") {
          this.renderer.setAttribute(this.el.nativeElement, "placeholder", Globalvar.IODPLACEHOLDERS[this.inputAttribut.code][this.inputAttribut.mode].placeholder);
          this.renderer.setAttribute(this.el.nativeElement, "title", Globalvar.IODPLACEHOLDERS[this.inputAttribut.code][this.inputAttribut.mode].placeholder);
        }
        const config = Globalvar.IODPLACEHOLDERS[this.inputAttribut.code][this.inputAttribut.mode];
        if (config && config.action === "disable" && (config.onlyInRoot && this.inputAttribut.prefix === "" || !config.onlyInRoot)) {
          this.disableElement();
        } else {
          this.renderer.setAttribute(this.el.nativeElement, "placeholder", this.inputAttribut.name);
        }
      } else {
        if (this.inputAttribut.iod && !(hasIn_default(this.inputAttribut.iod, this.inputAttribut.code) || hasIn_default(this.inputAttribut.iod, "Value[0]" + this.inputAttribut.code))) {
          this.disableElement();
        }
        this.renderer.setAttribute(this.el.nativeElement, "placeholder", this.inputAttribut.name);
      }
    }
  }
  disableElement() {
    if (this.el.nativeElement.tagName === "INPUT") {
      this.renderer.setProperty(this.el.nativeElement, "disabled", true);
    }
    if (this.el.nativeElement.tagName === "DIV") {
      this.el.nativeElement.style.display = "none";
    }
  }
}, _a5.ctorParameters = () => [{
  type: ElementRef
}, {
  type: Renderer2
}], _a5.propDecorators = {
  inputAttribut: [{
    type: Input,
    args: ["placeholderchanger"]
  }]
}, _a5);
PlaceholderchangerDirective = __decorate([Directive({
  selector: "[placeholderchanger]",
  standalone: true
})], PlaceholderchangerDirective);

// src/app/helpers/iod-form-generator/iod-form-generator.component.ts
var _a6;
var IodFormGeneratorComponent = (_a6 = class {
  constructor(appService) {
    this.appService = appService;
    this._ = lodash_exports;
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
    this.activeBlock = false;
  }
  privateCreator(tag) {
    if ("02468ACE".indexOf(tag.charAt(3)) < 0) {
      let block = tag.slice(4, 6);
      if (block !== "00") {
        let el = this.object[tag.slice(0, 4) + "00" + block];
        return el && el.Value && el.Value[0];
      }
    }
    return void 0;
  }
  ngOnInit() {
    console.log("attr=", this.object);
    console.log("oninit object", this.object);
    console.log("prefix", this.prefix);
    if (this.object && this.object.Value) {
      console.log("has value", this.object);
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }
    console.log("hasValue=", this.hasValue);
    this.objectIsArray = isArray_default(this.object);
    console.log("objectisarray", this.objectIsArray);
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  onChange(newValue, model) {
    set_default(this, model, newValue);
  }
  removeAttr(attrcode, i) {
    console.log("attrcode", attrcode);
    console.log("arguments", arguments);
    switch (arguments.length) {
      case 2:
        if (this.object[arguments[0]].Value && this.object[arguments[0]].Value.length === 1) {
          delete this.object[arguments[0]];
        } else {
          this.object[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this.object[arguments[0]];
        break;
    }
  }
  removeObject(object) {
    try {
      this.parentObject[this.parentKey].Value.splice(this.valueArrayKey, 1);
    } catch (e) {
      console.warn(e);
    }
  }
  trackByFn(index, item) {
    return index;
  }
  charChange(event) {
    console.log("test in charchange", event);
  }
  clonePart(object, o, iod, i, io) {
    try {
      if (object[o] && hasIn_default(object[o], "Value") && isArray_default(object[o].Value) && object[o].Value[i]) {
        let clonedObject = cloneDeep_default(object[o].Value[i]);
        j4care.traverse(clonedObject, (value, key, obj, savedKeys) => {
          if (key == "0" && savedKeys === "Value[Value]" && typeof value === "string") {
            obj[key] = "";
          }
          return obj[key];
        });
        console.log("clonedObject", clonedObject);
        clonedObject.newBlock = true;
        object[o].Value.splice(i + 1, 0, clonedObject);
      }
    } catch (e) {
      console.warn(e);
    }
  }
}, _a6.ctorParameters = () => [{
  type: AppService
}], _a6.propDecorators = {
  object: [{
    type: Input
  }],
  prefix: [{
    type: Input
  }],
  mode: [{
    type: Input
  }],
  iod: [{
    type: Input
  }],
  parentObject: [{
    type: Input
  }],
  parentKey: [{
    type: Input
  }],
  valueArrayKey: [{
    type: Input
  }],
  parentNewBlock: [{
    type: Input
  }],
  externalInternalAetMode: [{
    type: Input
  }]
}, _a6);
IodFormGeneratorComponent = __decorate([Component({
  selector: "iod-form-generator",
  template: iod_form_generator_component_default,
  imports: [NgClass, RangePickerComponent, FormsModule, SpecificCharPickerComponent, PlaceholderchangerDirective, CommonModule],
  standalone: true,
  styles: [iod_form_generator_component_default2]
})], IodFormGeneratorComponent);

// src/app/widgets/dialogs/edit-patient/edit-patient.component.ts
var _a7;
var EditPatientComponent = (_a7 = class {
  constructor(dialogRef, mainservice, service) {
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.service = service;
    this.formMode = localStorage.getItem("patient_edit_mode") || "complex";
    this.opendropdown = false;
    this.addPatientAttribut = "";
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
    this.reasonForModification = [new SelectDropdown("COERCE", "COERCE"), new SelectDropdown("CORRECT", "CORRECT")];
    this.updatePolicy = [new SelectDropdown("SUPPLEMENT", "SUPPLEMENT"), new SelectDropdown("MERGE", "MERGE"), new SelectDropdown("OVERWRITE", "OVERWRITE")];
    this.simpleForm = {
      schema: void 0,
      model: {}
    };
    this.patientResults = {
      patient: void 0,
      reasonForModificationResult: void 0,
      sourceOfPrevVals: void 0,
      hospitalName: void 0
    };
    setTimeout(() => {
      this.simpleForm.schema = this.service.getSimpleFormSchema();
      this.formMode = localStorage.getItem("patient_edit_mode") || "simple";
    }, 10);
  }
  onChange(newValue, model) {
    set_default(this, model, newValue);
  }
  get iod() {
    return this._iod;
  }
  set iod(value) {
    this._iod = value;
    this.service.iod = value;
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(value) {
    this._dropdown = value;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
    this.patientResults.patient = value;
  }
  get patientkey() {
    return this._patientkey;
  }
  set patientkey(value) {
    this._patientkey = value;
  }
  get saveLabel() {
    return this._saveLabel;
  }
  set saveLabel(value) {
    this._saveLabel = value;
  }
  get titleLabel() {
    return this._titleLabel;
  }
  set titleLabel(value) {
    this._titleLabel = value;
  }
  get externalInternalAetMode() {
    return this._externalInternalAetMode;
  }
  set externalInternalAetMode(value) {
    this._externalInternalAetMode = value;
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in dialogkeyhandler", code);
    if (code === 13) {
      dialogRef.close(this._patient);
    }
    if (code === 27) {
      if (this.opendropdown) {
        this.opendropdown = false;
      } else {
        dialogRef.close(null);
      }
    }
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  checkClick(e) {
    console.log("e", e);
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("code in checkclick");
    if (!(e.target.id === "dropdown" || e.target.id === "addPatientAttribut")) {
      this.opendropdown = false;
    }
  }
  pressedKey(e) {
    this.opendropdown = true;
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in pressedkey", code);
    this.lastPressedCode = code;
    if (code === 9) {
      this.opendropdown = false;
    }
    if (code === 13) {
      let filtered = new SearchPipe().transform(this.dropdown, this.addPatientAttribut);
      if (filtered) {
        this.opendropdown = true;
      }
      console.log("filtered", filtered);
      let attrcode;
      if (WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected").length > 0) {
        attrcode = window.document.getElementsByClassName("dropdown_element selected")[0].getAttribute("name");
      } else {
        attrcode = filtered[0].code;
      }
      console.log("patient_attrs not undefined", this._patient.attrs[attrcode]);
      if (this._patient.attrs[attrcode] != void 0) {
        if (this._iod[attrcode].multi) {
          this._patient.attrs[attrcode]["Value"].push("");
          this.addPatientAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this.patient.attrs[attrcode] = this._iod[attrcode];
        this.opendropdown = false;
      }
      setTimeout(function () {
        this.lastPressedCode = 0;
      }, 1e3);
    }
    if (code === 40) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          } else {
            this.dropdown[i + 1].selected = true;
          }
          i = this.dropdown.length;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          }
          i++;
        }
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 38) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === 0) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          } else {
            this.dropdown[i - 1].selected = true;
          }
          break;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          }
        }
        i++;
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 27 || code === 9) {
      this.opendropdown = false;
    }
  }
  addAttribute(attrcode, patient) {
    try {
      if (j4care.hasSet(patient, attrcode)) {
        if (this._iod[attrcode].multi) {
          if (patient[attrcode].vr === "PN") {
            patient[attrcode]["Value"].push({
              Alphabetic: ""
            });
          } else {
            if (patient[attrcode].vr === "SQ") {
              patient[attrcode]["Value"].push(cloneDeep_default(this._iod[attrcode].Value[0]));
            } else {
              patient[attrcode]["Value"].push("");
            }
          }
          this.addPatientAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        patient[attrcode] = cloneDeep_default(this._iod[attrcode]);
        j4care.removeKeyFromObject(patient[attrcode], "multi");
        j4care.removeKeyFromObject(patient[attrcode], "required");
      }
      this.opendropdown = false;
    } catch (e) {
      console.log("e", e);
    }
  }
  removeAttr(attrcode) {
    switch (arguments.length) {
      case 2:
        if (this.patient.attrs[arguments[0]].Value.length === 1) {
          delete this.patient.attrs[arguments[0]];
        } else {
          this.patient.attrs[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this.patient.attrs[arguments[0]];
        break;
    }
  }
  onSimpleFormChange(event) {
    console.log("event", event);
    console.log("mo", this.simpleForm.model);
    return void 0;
  }
  onSaveClick(patient) {
    j4care.removeKeyFromObject(patient, "newBlock");
    if (patient.patient) {
      j4care.removeKeyFromObject(patient.patient, "newBlock");
    }
    this.dialogRef.close(patient);
  }
  changeFormMode(mode) {
    localStorage.setItem("patient_edit_mode", mode);
    this.formMode = mode;
  }
}, _a7.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}, {
  type: EditPatientService
}], _a7.propDecorators = {
  hideAdditionalParams: [{
    type: Input
  }]
}, _a7);
EditPatientComponent = __decorate([Component({
  selector: "app-edit-patient",
  template: edit_patient_component_default,
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass, FormGeneratorComponent, IodFormGeneratorComponent, FormsModule, CommonModule, SearchPipe, MatDialogContent, DcmDropDownComponent],
  standalone: true,
  styles: [edit_patient_component_default2]
})], EditPatientComponent);

// angular:jit:template:src\app\widgets\dialogs\edit-mwl\edit-mwl.component.html
var edit_mwl_component_default = `<div class="vex vex-theme-os edit-mwl edit-patient" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form" >\r
        <h3 [innerHtml]="titleLabel"></h3>\r
        <input autocomplete="off" id="addmwlAttribut" class="addmwlAttribut" [(ngModel)]="addmwlAttribut" i18n-placeholder="@@placeholder.add_new_attribute" placeholder="Add new attribute"  (click)="opendropdown = !opendropdown"  (keydown)="pressedKey($event)"/>\r
        <div class="dropdown" *ngIf="opendropdown" (keydown)="pressedKey($event)">\r
            <a class="dropdown_element" [ngClass]="{'selected':m.selected}" name="{{m.code}}" *ngFor="let m of dropdown | search:addmwlAttribut" (click)="$event.preventDefault();addAttribute(m.code)">({{m.codeComma}}) {{m.name}}</a>\r
        </div>\r
        <div mat-dialog-content>\r
            <iod-form-generator [object]="mwl.attrs" [prefix]="" [mode]="mode"  (keydown)="dialogKeyHandler($event,dialogRef)"></iod-form-generator>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button class="save" type="button" (click)="onSaveClick(mwl)">{{saveLabel}}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:inline:src\app\widgets\dialogs\edit-mwl\edit-mwl.component.ts;CiAgICAgICAgLmRyb3Bkb3duIHsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICB9CiAgICA=
var edit_mwl_component_default2 = "/* angular:styles/component:css;d7a98d7efad1c2d8d93ccd2e9437949b9cb9261e410919e14240438d3f92bdbc;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dialogs\\edit-mwl\\edit-mwl.component.ts */\n.dropdown {\n  margin-top: 0;\n}\n";

// src/app/widgets/dialogs/edit-mwl/edit-mwl.component.ts
var _a8;
var EditMwlComponent = (_a8 = class {
  constructor(dialogRef, mainservice) {
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.opendropdown = false;
    this.addmwlAttribut = "";
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
  }
  onChange(newValue, model) {
    set_default(this, model, newValue);
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get iod() {
    return this._iod;
  }
  set iod(value) {
    this._iod = value;
  }
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(value) {
    this._dropdown = value;
  }
  get mwl() {
    return this._mwl;
  }
  set mwl(value) {
    this._mwl = value;
  }
  get mwlkey() {
    return this._mwlkey;
  }
  set mwlkey(value) {
    this._mwlkey = value;
  }
  get saveLabel() {
    return this._saveLabel;
  }
  set saveLabel(value) {
    this._saveLabel = value;
  }
  get titleLabel() {
    return this._titleLabel;
  }
  set titleLabel(value) {
    this._titleLabel = value;
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in modality keyhandler", code);
    if (code === 13) {
      dialogRef.close(this._mwl);
    }
    if (code === 27) {
      if (this.opendropdown) {
        this.opendropdown = false;
      } else {
        dialogRef.close(null);
      }
    }
  }
  pressedKey(e) {
    console.log("pressedkey");
    let code = e.keyCode ? e.keyCode : e.which;
    this.lastPressedCode = code;
    if (code === 9 || code === 27) {
      this.opendropdown = false;
    } else {
      this.opendropdown = true;
    }
    if (code === 13) {
      let filtered = new SearchPipe().transform(this.dropdown, this.addmwlAttribut);
      if (filtered) {
        this.opendropdown = true;
      }
      console.log("filtered", filtered);
      let attrcode;
      if (WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected").length > 0) {
        attrcode = window.document.getElementsByClassName("dropdown_element selected")[0].getAttribute("name");
      } else {
        attrcode = filtered[0].code;
      }
      if (this._mwl.attrs[attrcode] != void 0) {
        if (this._iod[attrcode].multi) {
          this._mwl.attrs[attrcode]["Value"].push("");
          this.addmwlAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this._mwl.attrs[attrcode] = this.iod[attrcode];
        this.opendropdown = false;
      }
      setTimeout(function () {
        this.lastPressedCode = 0;
      }, 1e3);
    }
    if (code === 40) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          } else {
            this.dropdown[i + 1].selected = true;
          }
          i = this.dropdown.length;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          }
          i++;
        }
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 38) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === 0) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          } else {
            this.dropdown[i - 1].selected = true;
          }
          break;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          }
        }
        i++;
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 27 || code === 9) {
      this.opendropdown = false;
    }
  }
  addAttribute(attrcode) {
    if (attrcode.indexOf(":") > -1) {
      let codes = attrcode.split(":");
      if (codes[0] === "00400100") {
        if (this._mwl.attrs[codes[0]].Value[0][codes[1]] != void 0) {
          if (this.iod[codes[0]].Value[0][codes[1]].multi) {
            if (this.iod[codes[0]].Value[0][codes[1]].vr === "SQ") {
              this._mwl.attrs[codes[0]].Value[0][codes[1]]["Value"].push(this.iod[codes[0]].Value[0][codes[1]].Value[0]);
            } else {
              this._mwl.attrs[codes[0]].Value[0][codes[1]]["Value"] = this._mwl.attrs[codes[0]].Value[0][codes[1]]["Value"] || [];
              this._mwl.attrs[codes[0]].Value[0][codes[1]]["Value"].push("");
            }
            this.addmwlAttribut = "";
            this.opendropdown = false;
          } else {
            this.mainservice.showWarning("Attribute already exists!");
          }
        } else {
          this._mwl.attrs[codes[0]].Value[0][codes[1]] = this.iod[codes[0]].Value[0][codes[1]];
        }
      } else {
        console.error("error, code 00400100 not found on the 0 position");
      }
    } else {
      if (this._mwl.attrs[attrcode] != void 0) {
        if (this.iod[attrcode].multi) {
          this._mwl.attrs[attrcode]["Value"].push("");
          this.addmwlAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this._mwl.attrs[attrcode] = this.iod[attrcode];
      }
    }
  }
  removeAttr(attrcode) {
    switch (arguments.length) {
      case 2:
        if (this._mwl.attrs[arguments[0]].Value.length === 1) {
          delete this._mwl.attrs[arguments[0]];
        } else {
          this._mwl.attrs[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this._mwl.attrs[arguments[0]];
        break;
    }
  }
  onSaveClick(mwl) {
    j4care.removeKeyFromObject(mwl, "newBlock");
    this.dialogRef.close(mwl);
  }
}, _a8.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}], _a8);
EditMwlComponent = __decorate([Component({
  selector: "app-edit-mwl",
  template: edit_mwl_component_default,
  imports: [FormsModule, NgClass, IodFormGeneratorComponent, CommonModule, SearchPipe, MatDialogContent],
  standalone: true,
  styles: [edit_mwl_component_default2]
})], EditMwlComponent);

// angular:jit:template:src\app\widgets\dialogs\edit-study\edit-study.component.html
var edit_study_component_default = `<div class="vex vex-theme-os edit-study" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form" (keyup)="change()">\r
        <h3 [innerHtml]="titleLabel"></h3>\r
        <div class="overlay" *ngIf="opendropdown" (click)="opendropdown = false"></div>\r
        <input autocomplete="off" id="addStudyAttribut" class="addStudyAttribut" [(ngModel)]="addStudyAttribut" i18n-placeholder="@@placeholder.add_new_attribute" placeholder="Add new attribute"  (click)="opendropdown = !opendropdown"  (keydown)="pressedKey($event)"/>\r
        <div class="dropdown study_edit" *ngIf="opendropdown">\r
            <a class="dropdown_element" name="{{m.code}}" *ngFor="let m of dropdown | search:addStudyAttribut" (click)="$event.preventDefault();addAttribute(m.code)">({{m.codeComma}}) {{m.name}}</a>\r
        </div>\r
        <div class="iod_form_content" mat-dialog-content>\r
            <iod-form-generator *ngIf="_studyResult.study && _studyResult.study['attrs']" [object]="_studyResult.study['attrs']" [prefix]="" [mode]="mode"  (keydown)="dialogKeyHandler($event,dialogRef)"></iod-form-generator>\r
        </div>\r
        <div class="inputpart" *ngIf="!hideAdditionalParams">\r
            <div class="form_input" *ngIf="_studyResult.editMode != 'single'">\r
                <label i18n="@@update_policy_label">Update Policy :</label>\r
                <dcm-drop-down [options]="updatePolicy" [(model)]="_studyResult.updatePolicyResult"\r
                               [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                               (modelChange)="_studyResult.updatePolicyResult = $event">\r
                </dcm-drop-down>\r
            </div>\r
            <div class="form_input">\r
                <label i18n="@@reason_for_modification_label">Reason for modification:</label>\r
                <dcm-drop-down [options]="reasonForModification" [(model)]="_studyResult.reasonForModificationResult"\r
                               [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                               (modelChange)="_studyResult.reasonForModificationResult = $event">\r
                </dcm-drop-down>\r
            </div>\r
            <div class="form_input">\r
                <label i18n="@@source_of_prev_vals_label">Source of previous values:</label>\r
                <input type="text" [(ngModel)]="_studyResult.sourceOfPrevVals" i18n-placeholder="source_of_previous_values" placeholder="Source of previous values">\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button class="save" type="button" (click)="onSaveClick(studyResult)">{{saveLabel}}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:inline:src\app\widgets\dialogs\edit-study\edit-study.component.ts;CiAgICAgICAgLmZvcm1faW5wdXQgewogICAgICAgICAgICBkaXNwbGF5OiBncmlkOwogICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjM2ZnI7CiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7CiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMnB4OwogICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsKICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDsKICAgICAgICB9CgogICAgICAgIC5mb3JtX2lucHV0IGxhYmVsIHsKICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7CiAgICAgICAgfQoKICAgICAgICAuZm9ybV9pbnB1dCBpbnB1dCwgLmZvcm1faW5wdXQgZGNtLWRyb3AtZG93biB7CiAgICAgICAgICAgIHdpZHRoOiA5NiU7CiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7CiAgICAgICAgfQoKICAgICAgICAubWRjLWRpYWxvZ19fY29udGVudCB7CiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OwogICAgICAgIH0KICAgIA==
var edit_study_component_default2 = "/* angular:styles/component:css;897bc6887afdc4d2cdc583dcc78081be8952993f2b91b1afb8a923e832b49327;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dialogs\\edit-study\\edit-study.component.ts */\n.form_input {\n  display: grid;\n  grid-template-columns: 1fr 1.36fr;\n  margin-bottom: 15px;\n  grid-gap: 12px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n.form_input label {\n  text-align: right;\n}\n.form_input input,\n.form_input dcm-drop-down {\n  width: 96%;\n  min-height: 30px;\n}\n.mdc-dialog__content {\n  float: left;\n}\n";

// src/app/widgets/dialogs/edit-study/edit-study.component.ts
var _a9;
var EditStudyComponent = (_a9 = class {
  get tagStudy() {
    return this._tagStudy;
  }
  set tagStudy(value) {
    this._tagStudy = value;
    this.studyResult.study = value;
  }
  constructor(dialogRef, mainservice) {
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.opendropdown = false;
    this.addStudyAttribut = "";
    this.reasonForModification = [new SelectDropdown("COERCE", "COERCE"), new SelectDropdown("CORRECT", "CORRECT")];
    this.updatePolicy = [new SelectDropdown("SUPPLEMENT", "SUPPLEMENT"), new SelectDropdown("MERGE", "MERGE"), new SelectDropdown("OVERWRITE", "OVERWRITE")];
    this._studyResult = {
      editMode: "single",
      study: void 0,
      sourceOfPrevVals: "",
      reasonForModificationResult: void 0,
      updatePolicyResult: "OVERWRITE"
    };
    this.onChange = new EventEmitter();
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
    console.log("this.study", this._studyResult.study);
  }
  change() {
    this.onChange.emit(this.studyResult.study);
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get saveLabel() {
    return this._saveLabel;
  }
  set saveLabel(value) {
    this._saveLabel = value;
  }
  get titleLabel() {
    return this._titleLabel;
  }
  set titleLabel(value) {
    this._titleLabel = value;
  }
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(value) {
    this._dropdown = value;
  }
  get studykey() {
    return this._studykey;
  }
  set studykey(value) {
    this._studykey = value;
  }
  get studyResult() {
    return this._studyResult;
  }
  set studyResult(value) {
    this._studyResult = value;
  }
  get iod() {
    return this._iod;
  }
  set iod(value) {
    this._iod = value;
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  checkClick(e) {
    console.log("e", e);
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("code in checkclick");
    if (!(e.target.id === "dropdown" || e.target.id === "addPatientAttribut")) {
      this.opendropdown = false;
    }
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in modality keyhandler", code);
    if (code === 13) {
      dialogRef.close(this._studyResult.study);
    }
    if (code === 27) {
      if (this.opendropdown) {
        this.opendropdown = false;
      } else {
        dialogRef.close(null);
      }
    }
  }
  addAttribute(attrcode) {
    if (this._studyResult.study.attrs[attrcode] != void 0) {
      if (this._iod[attrcode].multi) {
        this._studyResult.study.attrs[attrcode]["Value"].push("");
        this.addStudyAttribut = "";
        this.opendropdown = false;
      } else {
        this.mainservice.showWarning("Attribute already exists!");
      }
    } else {
      this._studyResult.study.attrs[attrcode] = this._iod[attrcode];
    }
  }
  pressedKey(e) {
    console.log("in pressedkey");
    this.opendropdown = true;
    let code = e.keyCode ? e.keyCode : e.which;
    this.lastPressedCode = code;
    let attrcode;
    if (code === 13) {
      let filtered = new SearchPipe().transform(this.dropdown, this.addStudyAttribut);
      if (filtered) {
        this.opendropdown = true;
      }
      if (WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected").length > 0) {
        attrcode = window.document.getElementsByClassName("dropdown_element selected")[0].getAttribute("name");
        ;
      } else {
        attrcode = filtered[0].code;
      }
      if (this._studyResult.study.attrs[attrcode] != void 0) {
        if (this._iod[attrcode].multi) {
          this._studyResult.study.attrs[attrcode]["Value"].push("");
          this.addStudyAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this._studyResult.study.attrs[attrcode] = this._iod[attrcode];
        this.opendropdown = false;
      }
      setTimeout(function () {
        this.lastPressedCode = 0;
      }, 1e3);
    }
    if (code === 40) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          } else {
            this.dropdown[i + 1].selected = true;
          }
          i = this.dropdown.length;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          }
          i++;
        }
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 38) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === 0) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          } else {
            this.dropdown[i - 1].selected = true;
          }
          break;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          }
        }
        i++;
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 27 || code === 9) {
      this.opendropdown = false;
    }
  }
  removeAttr(attrcode) {
    switch (arguments.length) {
      case 2:
        if (this._studyResult.study.attrs[arguments[0]].Value.length === 1) {
          delete this._studyResult.study.attrs[arguments[0]];
        } else {
          this._studyResult.study.attrs[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this._studyResult.study.attrs[arguments[0]];
        break;
    }
  }
  onSaveClick(study) {
    j4care.removeKeyFromObject(study, "newBlock");
    this.dialogRef.close(study);
  }
}, _a9.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}], _a9.propDecorators = {
  tagStudy: [{
    type: Input
  }],
  onChange: [{
    type: Output
  }],
  hideAdditionalParams: [{
    type: Input
  }],
  mode: [{
    type: Input
  }],
  dropdown: [{
    type: Input
  }],
  studyResult: [{
    type: Input
  }],
  iod: [{
    type: Input
  }]
}, _a9);
EditStudyComponent = __decorate([Component({
  selector: "edit-study",
  template: edit_study_component_default,
  imports: [FormsModule, IodFormGeneratorComponent, DcmDropDownComponent, CommonModule, SearchPipe],
  standalone: true,
  styles: [edit_study_component_default2]
})], EditStudyComponent);

// angular:jit:template:src\app\widgets\dialogs\edit-series\edit-series.component.html
var edit_series_component_default = `<div class="vex vex-theme-os edit-series" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form" (keyup)="change()">\r
        <h3 [innerHtml]="titleLabel"></h3>\r
        <div class="overlay" *ngIf="opendropdown" (click)="opendropdown = false"></div>\r
        <input autocomplete="off" id="addSeriesAttribut" class="addSeriesAttribut" [(ngModel)]="addSeriesAttribut" i18n-placeholder="@@placeholder.add_new_attribute" placeholder="Add new attribute"  (click)="opendropdown = !opendropdown"  (keydown)="pressedKey($event)"/>\r
        <div class="dropdown study_edit" *ngIf="opendropdown">\r
            <a class="dropdown_element" name="{{m.code}}" *ngFor="let m of dropdown | search:addSeriesAttribut" (click)="$event.preventDefault();addAttribute(m.code)">({{m.codeComma}}) {{m.name}}</a>\r
        </div>\r
        <div mat-dialog-content>\r
            <iod-form-generator *ngIf="_seriesResult.series && _seriesResult.series['attrs']" [object]="_seriesResult.series['attrs']" [prefix]="" [mode]="mode"  (keydown)="dialogKeyHandler($event,dialogRef)"></iod-form-generator>\r
        </div>\r
        <div class="inputpart">\r
            <div class="form_input" *ngIf="_seriesResult.editMode != 'single'">\r
                <label i18n="@@update_policy_label">Update Policy :</label>\r
                <dcm-drop-down [options]="updatePolicy" [(model)]="_seriesResult.updatePolicyResult"\r
                               [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                               (modelChange)="_seriesResult.updatePolicyResult = $event">\r
                </dcm-drop-down>\r
            </div>\r
            <div class="form_input">\r
                <label i18n="@@reason_for_modification_label">Reason for modification:</label>\r
                <dcm-drop-down [options]="reasonForModification" [(model)]="_seriesResult.reasonForModificationResult"\r
                               [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                               (modelChange)="_seriesResult.reasonForModificationResult = $event">\r
                </dcm-drop-down>\r
            </div>\r
            <div class="form_input">\r
                <label i18n="@@source_of_prev_vals_label">Source of previous values:</label>\r
                <input type="text" [(ngModel)]="_seriesResult.sourceOfPrevVals" i18n-placeholder="source_of_previous_values" placeholder="Source of previous values">\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button class="save" type="button" (click)="onSaveClick(seriesResult)">{{saveLabel}}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:inline:src\app\widgets\dialogs\edit-series\edit-series.component.ts;CiAgICAgICAgLmZvcm1faW5wdXQgewogICAgICAgICAgICBkaXNwbGF5OiBncmlkOwogICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjM2ZnI7CiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7CiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMnB4OwogICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsKICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDsKICAgICAgICB9CgogICAgICAgIC5mb3JtX2lucHV0IGxhYmVsIHsKICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7CiAgICAgICAgfQoKICAgICAgICAuZm9ybV9pbnB1dCBpbnB1dCwgLmZvcm1faW5wdXQgZGNtLWRyb3AtZG93biB7CiAgICAgICAgICAgIHdpZHRoOiA5NiU7CiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7CiAgICAgICAgfQogICAg
var edit_series_component_default2 = "/* angular:styles/component:css;3d1f8a5c734df0e8baf49a3d61a49b620fbdc870f8a7a6ec712fda2687323f17;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dialogs\\edit-series\\edit-series.component.ts */\n.form_input {\n  display: grid;\n  grid-template-columns: 1fr 1.36fr;\n  margin-bottom: 15px;\n  grid-gap: 12px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n.form_input label {\n  text-align: right;\n}\n.form_input input,\n.form_input dcm-drop-down {\n  width: 96%;\n  min-height: 30px;\n}\n";

// src/app/widgets/dialogs/edit-series/edit-series.component.ts
var _a10;
var EditSeriesComponent = (_a10 = class {
  constructor(dialogRef, mainservice) {
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.opendropdown = false;
    this.addSeriesAttribut = "";
    this.sourceOfPrevVals = "";
    this.reasonForModification = [new SelectDropdown("COERCE", "COERCE"), new SelectDropdown("CORRECT", "CORRECT")];
    this.updatePolicy = [new SelectDropdown("SUPPLEMENT", "SUPPLEMENT"), new SelectDropdown("MERGE", "MERGE"), new SelectDropdown("OVERWRITE", "OVERWRITE")];
    this._seriesResult = {
      editMode: "single",
      series: void 0,
      sourceOfPrevVals: "",
      reasonForModificationResult: void 0,
      updatePolicyResult: "OVERWRITE"
    };
    this.onChange = new EventEmitter();
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
    console.log("this.series", this._seriesResult.series);
  }
  change() {
    this.onChange.emit(this.seriesResult.series);
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get saveLabel() {
    return this._saveLabel;
  }
  set saveLabel(value) {
    this._saveLabel = value;
  }
  get titleLabel() {
    return this._titleLabel;
  }
  set titleLabel(value) {
    this._titleLabel = value;
  }
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(value) {
    this._dropdown = value;
  }
  get seriesResult() {
    return this._seriesResult;
  }
  set seriesResult(value) {
    this._seriesResult = value;
  }
  get serieskey() {
    return this._serieskey;
  }
  set serieskey(value) {
    this._serieskey = value;
  }
  get iod() {
    return this._iod;
  }
  set iod(value) {
    this._iod = value;
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  checkClick(e) {
    console.log("e", e);
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("code in checkclick");
    if (!(e.target.id === "dropdown" || e.target.id === "addPatientAttribut")) {
      this.opendropdown = false;
    }
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in modality keyhandler", code);
    if (code === 13) {
      dialogRef.close(this._seriesResult.series);
    }
    if (code === 27) {
      if (this.opendropdown) {
        this.opendropdown = false;
      } else {
        dialogRef.close(null);
      }
    }
  }
  addAttribute(attrcode) {
    if (this._seriesResult.series.attrs[attrcode] != void 0) {
      if (this._iod[attrcode].multi) {
        this._seriesResult.series.attrs[attrcode]["Value"].push("");
        this.addSeriesAttribut = "";
        this.opendropdown = false;
      } else {
        this.mainservice.showWarning("Attribute already exists!");
      }
    } else {
      this._seriesResult.series.attrs[attrcode] = this._iod[attrcode];
    }
  }
  pressedKey(e) {
    console.log("in pressedkey");
    this.opendropdown = true;
    let code = e.keyCode ? e.keyCode : e.which;
    this.lastPressedCode = code;
    let attrcode;
    if (code === 13) {
      let filtered = new SearchPipe().transform(this.dropdown, this.addSeriesAttribut);
      if (filtered) {
        this.opendropdown = true;
      }
      if (WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected").length > 0) {
        attrcode = window.document.getElementsByClassName("dropdown_element selected")[0].getAttribute("name");
      } else {
        attrcode = filtered[0].code;
      }
      if (this._seriesResult.series.attrs[attrcode] != void 0) {
        if (this._iod[attrcode].multi) {
          this._seriesResult.series.attrs[attrcode]["Value"].push("");
          this.addSeriesAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this._seriesResult.series.attrs[attrcode] = this._iod[attrcode];
        this.opendropdown = false;
      }
      setTimeout(function () {
        this.lastPressedCode = 0;
      }, 1e3);
    }
    if (code === 40) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          } else {
            this.dropdown[i + 1].selected = true;
          }
          i = this.dropdown.length;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          }
          i++;
        }
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 38) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === 0) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          } else {
            this.dropdown[i - 1].selected = true;
          }
          break;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          }
        }
        i++;
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 27 || code === 9) {
      this.opendropdown = false;
    }
  }
  removeAttr(attrcode) {
    switch (arguments.length) {
      case 2:
        if (this._seriesResult.series.attrs[arguments[0]].Value.length === 1) {
          delete this._seriesResult.series.attrs[arguments[0]];
        } else {
          this._seriesResult.series.attrs[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this._seriesResult.series.attrs[arguments[0]];
        break;
    }
  }
  onSaveClick(series) {
    j4care.removeKeyFromObject(series, "newBlock");
    this.dialogRef.close(series);
  }
}, _a10.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}], _a10.propDecorators = {
  onChange: [{
    type: Output
  }],
  mode: [{
    type: Input
  }],
  dropdown: [{
    type: Input
  }],
  iod: [{
    type: Input
  }]
}, _a10);
EditSeriesComponent = __decorate([Component({
  selector: "edit-series",
  template: edit_series_component_default,
  imports: [FormsModule, IodFormGeneratorComponent, DcmDropDownComponent, CommonModule, SearchPipe, MatDialogContent],
  standalone: true,
  styles: [edit_series_component_default2]
})], EditSeriesComponent);

// angular:jit:template:src\app\widgets\dialogs\delete-rejected-instances\delete-rejected-instances.component.html
var delete_rejected_instances_component_default = '<div class="vex vex-theme-os confirm" xmlns="http://www.w3.org/1999/html">\r\n    <div class="vex-dialog-form">\r\n        <div class="form-group">\r\n            <label i18n="@@delete-rejected.delete_instances_with_rejected_type">Delete rejected instances with rejection note type</label>\r\n            <select id="reject" [(ngModel)]="results.reject" name="reject" class="form-control">\r\n                <option *ngFor="let rjn of rjnotes" title="{{rjn.codeMeaning}}" value="{{rjn.codeValue}}^{{rjn.codingSchemeDesignator}}">{{rjn.label}}</option>\r\n                </select>\r\n            </div>\r\n        <div class="form-group">\r\n        <label i18n="@@delete-rejected.maximum_reject_date_of_instances_to_delete">Maximum date of rejected instances to delete</label>\r\n            <!--<input [(ngModel)]="rejectedBefore.date" autocomplete="off" class="form-control" (click)="rejectedBeforeOpen()" placeholder="Delete all instances before this date" is-open="rejectedBefore.opened" id="rejectedBefore" title="Delete all instances before this date" type="text" uib-datepicker-popup="{{format2}}" close-text="Close"/>-->\r\n<!--            <p-calendar\r\n                    dataType="string"\r\n                    [(ngModel)]="results.rejectedBefore"\r\n                    dateFormat="yy-mm-dd"\r\n                    monthNavigator="true"\r\n                    yearNavigator="true"\r\n                    yearRange="1800:2100"\r\n                    placeholder=" Delete all instances before this date"\r\n            ></p-calendar>-->\r\n            <range-picker\r\n                    [model]="results.rejectedBefore"\r\n                    (modelChange)="results.rejectedBefore = $event"\r\n                    [datePickerMode]="true"\r\n                    dateFormat="yyyy-MM-dd"\r\n                    i18n-placeholder="@@placeholder.delete_all_instances_before"\r\n                    placeholder="Delete all rejected instances before this date"\r\n            ></range-picker>\r\n        </div>\r\n        <div class="checkbox">\r\n        <label i18n="@@delete-rejected.if_checked_keep_rejection_note_instance">\r\n            if checked, keep rejection note instances - only delete rejected instances\r\n            <input type="checkbox" name="keepRejectionNote" [(ngModel)]="results.keepRejectionNote" />\r\n            <!--<ng-container i18n="@@delete-rejected.if_checked_keep_rejection_note_instance">if checked, keep rejection note instances - only delete rejected instances</ng-container>-->\r\n        </label>\r\n        </div>\r\n        <div class="dialogbuttons">\r\n            <button type="submit" class="btn-danger btn vex-dialog-button vex-first" (click)="dialogRef.close(results)" [disabled]="!results.reject">Delete all</button>\r\n            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r\n        </div>\r\n    </div>\r\n</div>';

// angular:jit:style:inline:src\app\widgets\dialogs\delete-rejected-instances\delete-rejected-instances.component.ts;CiAgICA=
var delete_rejected_instances_component_default2 = "/* angular:styles/component:css;4dc501d66cd78903b81b1a53459d0432939728c537bbe9ffab55ab81521cb352;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dialogs\\delete-rejected-instances\\delete-rejected-instances.component.ts */\n";

// src/app/widgets/dialogs/delete-rejected-instances/delete-rejected-instances.component.ts
var _a11;
var DeleteRejectedInstancesComponent = (_a11 = class {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  get rjnotes() {
    return this._rjnotes;
  }
  set rjnotes(value) {
    this._rjnotes = value;
  }
  get results() {
    return this._results;
  }
  set results(value) {
    this._results = value;
  }
}, _a11.ctorParameters = () => [{
  type: MatDialogRef
}], _a11);
DeleteRejectedInstancesComponent = __decorate([Component({
  selector: "app-delete-rejected-instances",
  template: delete_rejected_instances_component_default,
  imports: [FormsModule, RangePickerComponent, CommonModule],
  standalone: true,
  styles: [delete_rejected_instances_component_default2]
})], DeleteRejectedInstancesComponent);

// angular:jit:template:src\app\widgets\dialogs\export\export.component.html
var export_component_default = `<div class="vex vex-theme-os export" xmlns="http://www.w3.org/1999/html" (keydown)="dialogKeyHandler($event,dialogRef)">\r
    <div class="vex-dialog-form">\r
        <h5>{{title}}</h5>\r
        <h6 *ngIf="subTitle">{{subTitle}}</h6>\r
        <p *ngIf="count && mode==='multiple'">{{count}} <ng-container i18n="@@export.studies_selected_to_be_retrieved">studies selected to be retrieved</ng-container></p>\r
        <div class="content" *ngIf="mode === 'multipleExport'">\r
            <label *ngIf="noDicomExporters.length === 0" class="text-danger">\r
                <input type="radio" name="exportType" value="nonedicom" DISABLED> <ng-container i18n="@@export.create_first_exporter">Create first an exporter!</ng-container>\r
            </label>\r
            <ng-container *ngIf="noDicomExporters.length > 0">\r
                <div class="noneDicomBlock">\r
                    <p i18n="@@select_the_exporter">Select the exporter:</p>\r
                    <mat-select [(ngModel)]="result.selectedExporter">\r
                        <mat-option value="{{exporter.id}}" *ngFor="let exporter of noDicomExporters" title="{{exporter.description}}">{{exporter.id}}</mat-option>\r
                    </mat-select>\r
                </div>\r
                <br>\r
                <div>\r
                    <p>\r
                       <input type="text" [(ngModel)]="result.batchID" i18n-placeholder="@@batch_id" placeholder="Batch ID">\r
                    </p>\r
                    <range-picker\r
                            [model]="result.scheduledTime"\r
                            (modelChange)="result.scheduledTime = $event"\r
                            [datePickerMode]="true"\r
                            dateFormat="yyyyMMdd"\r
                            [onlySingleMode]="true"\r
                            defaultTime="00:00:00"\r
                            mode="single"\r
                            i18n-placeholder="@@schedule_at_desc"\r
                            placeholder="Schedule at (if not set, schedule immediately)"\r
                    ></range-picker>\r
                </div>\r
                <br>\r
            </ng-container>\r
        </div>\r
        <div class="content" *ngIf="externalInternalAetMode === 'internal' &&  mode ==='single'">\r
            <p i18n="@@select_the_type_of_the_exporter">Select the type of the exporter:</p>\r
            <label>\r
                <input type="radio" name="exportType" value="dicom" [(ngModel)]="result.exportType"> <ng-container i18n="@@synchronised_dicom_exporter">Synchronised DICOM C-STORE exporter</ng-container>\r
            </label><br>\r
            <label>\r
                <input type="radio" name="exportType" value="stow" [(ngModel)]="result.exportType"> <ng-container i18n="@@synchronised_stow_exporter">Synchronised DICOM STOW-RS exporter</ng-container>\r
            </label><br>\r
            <label *ngIf="noDicomExporters.length > 0">\r
                <input type="radio" name="exportType" value="nonedicom" [(ngModel)]="result.exportType"> <ng-container i18n="@@queued_exporter">Queued exporter</ng-container>\r
            </label>\r
            <label *ngIf="noDicomExporters.length === 0" class="text-danger">\r
                <input type="radio" name="exportType" value="nonedicom" DISABLED> <ng-container i18n="@@for_queued_exporter_create_an_exporter_first">For queued exporter create an exporter first!</ng-container>\r
            </label>\r
            <div class="dicomBlock" *ngIf="result.exportType == 'dicom'">\r
                <p i18n="@@select_the_destination_aetitle">Select the destination AETitle:</p>\r
                <dcm-drop-down\r
                        [options]="aesOption"\r
                        [(model)]="result.selectedAet"\r
                        [editable]="false"\r
                        [showSearchField]="true"\r
                        [multiSelectMode]="false"\r
                        (modelChange)="result.selectedAet = $event"\r
                        [showStar]="false"\r
                ></dcm-drop-down>\r
<!--                <mat-select class="aes" [(ngModel)]="result.selectedAet">\r
                    <mat-option value="{{aet.dicomAETitle}}" *ngFor="let aet of aes" title="{{aet.dicomDescription}}">{{aet.dicomAETitle}}</mat-option>\r
                </mat-select>-->\r
            </div>\r
            <div class="dicomBlock" *ngIf="result.exportType == 'stow'">\r
                <p i18n="@@select_stow_webapp">Select STOW destination web application:</p>\r
                <dcm-drop-down\r
                        [options]="stowWebAppsOption"\r
                        [(model)]="result.selectedStowWebapp"\r
                        [editable]="false"\r
                        [showSearchField]="true"\r
                        [multiSelectMode]="false"\r
                        (modelChange)="result.selectedStowWebapp = $event"\r
                        [showStar]="false"\r
                ></dcm-drop-down>\r
            </div>\r
            <div class="noneDicomBlock"  *ngIf="result.exportType != 'dicom' && result.exportType != 'stow'">\r
                <p i18n="@@select_the_exporter">Select the exporter:</p>\r
<!--                <select [(ngModel)]="result.selectedExporter">\r
                    <option value="{{exporter.id}}" *ngFor="let exporter of noDicomExporters">{{exporter.id}}</option>\r
                </select>-->\r
                <mat-select [(ngModel)]="result.selectedExporter">\r
                    <mat-option value="{{exporter.id}}" *ngFor="let exporter of noDicomExporters" title="{{exporter.description}}">{{exporter.id}}</mat-option>\r
                </mat-select>\r
            </div>\r
        </div>\r
        <div class="content" *ngIf="externalInternalAetMode === 'external' || mode ==='multiple'">\r
            <div class="dicomBlock">\r
                <p *ngIf="mode ==='single'" i18n="@@select_the_destination_aetitle_store_scp">Select the destination AETitle (STORE-SCP):</p>\r
                <p *ngIf="mode ==='multiple'" i18n="@@select_the_calling_aetitle">Select the calling AETitle:</p>\r
                <mat-select class="aes" [(ngModel)]="result.selectedAet">\r
                    <mat-option value="{{aet.dicomAETitle}}" *ngFor="let aet of aes" title="{{aet.dicomDescription}}">{{aet.dicomAETitle}}</mat-option>\r
                </mat-select>\r
                <br>\r
                <div *ngIf="mode === 'multiple-retrieve'" class="noneDicomBlock">\r
                    <p><ng-container i18n="@@batch_id">Batch ID</ng-container>:</p>\r
                    <input type="text" [(ngModel)]="result.batchID" i18n-placeholder="@@batch_id" placeholder="Batch ID">\r
                    <range-picker\r
                            [model]="result.scheduledTime"\r
                            (modelChange)="result.scheduledTime = $event"\r
                            [datePickerMode]="true"\r
                            dateFormat="yyyyMMdd"\r
                            [onlySingleMode]="true"\r
                            defaultTime="00:00:00"\r
                            mode="single"\r
                            i18n-placeholder="@@schedule_at_desc"\r
                            placeholder="Schedule at (if not set, schedule immediately)"\r
                    ></range-picker>\r
                </div>\r
                <br>\r
            </div>\r
            <div class="dicomBlock">\r
                <p *ngIf="mode ==='single' && !newStudyPage" i18n="@@select_the_external_aetitle_c_move_scp">Select the external AETitle (C-MOVE SCP):</p>\r
                <p *ngIf="mode ==='multiple'" i18n="@@select_the_external_aetitle">Select the external AETitle:</p>\r
                <mat-select class="aes" [(ngModel)]="result.externalAET" *ngIf="!newStudyPage">\r
                    <mat-option value="{{aet.dicomAETitle}}" *ngFor="let aet of aes" title="{{aet.dicomDescription}}">{{aet.dicomAETitle}}</mat-option>\r
                </mat-select>\r
            </div>\r
            <div *ngIf="mode ==='single'">\r
                <p><ng-container i18n="@@queue_name">Queue Name</ng-container>:</p>\r
                <mat-select class="aes" [(ngModel)]="result.dcmQueueName">\r
                    <mat-option value="">*</mat-option>\r
                    <mat-option value="{{queue.value}}" *ngFor="let queue of queues" title="{{queue.title}}">{{queue.text}}</mat-option>\r
                </mat-select>\r
            </div>\r
<!--            <label i18n-title="@@title.export.if_checked_the_process_will_be_queued" title="If checked the process will be queued" *ngIf="mode ==='single'">\r
                <input type="checkbox" name="queue" [(ngModel)]="result['queue']"> Queued DICOM export\r
            </label><br *ngIf="mode ==='single'">-->\r
            <ng-container *ngIf="mode === 'multiple'">\r
                <div class="dicomBlock">\r
                    <p i18n="@@select_the_query_aetitle">Select the query AETitle:</p>\r
                    <mat-select class="aes" [(ngModel)]="result.queryAET">\r
                        <mat-option value="{{aet.dicomAETitle}}" *ngFor="let aet of aes" title="{{aet.dicomDescription}}">{{aet.dicomAETitle}}</mat-option>\r
                    </mat-select>\r
                </div>\r
                <div class="dicomBlock">\r
                    <p i18n="@@select_the_destination_aetitle">Select the destination AETitle:</p>\r
<!--                    <mat-select class="aes" [(ngModel)]="result.destinationAET">\r
                        <mat-option value="{{aet.dicomAETitle}}" *ngFor="let aet of aes" title="{{aet.dicomDescription}}">{{aet.dicomAETitle}}</mat-option>\r
                    </mat-select>-->\r
                    <dcm-drop-down\r
                            [options]="aesOption"\r
                            [(model)]="result.destinationAET"\r
                            [editable]="false"\r
                            [showSearchField]="true"\r
                            [multiSelectMode]="false"\r
                            (modelChange)="result.destinationAET = $event"\r
                            [showStar]="false"\r
                    ></dcm-drop-down>\r
                </div>\r
            </ng-container>\r
        </div>\r
        <div class="content" *ngIf="mode === 'reschedule'">\r
            <div class="dicomBlock">\r
                <p><ng-container i18n="@@exporter_id">Exporter ID</ng-container>:</p>\r
                <mat-select class="aes" [(ngModel)]="result.selectedExporter">\r
                    <mat-option value="{{export.id}}" *ngFor="let export of noDicomExporters" title="{{export.id}}">{{export.id}}</mat-option>\r
                </mat-select>\r
            </div>\r
        </div>\r
        <div class="content" *ngIf="result.exportType === 'nonedicom' && !(quantity && quantity === 'single')">\r
            <p i18n="@@batch_id">Batch ID</p>\r
            <input type="text" [(ngModel)]="result.batchID">\r
            <range-picker\r
                    [model]="result.scheduledTime"\r
                    (modelChange)="result.scheduledTime = $event"\r
                    [datePickerMode]="true"\r
                    dateFormat="yyyyMMdd"\r
                    [onlySingleMode]="true"\r
                    defaultTime="00:00:00"\r
                    mode="single"\r
                    i18n-placeholder="@@schedule_at_desc"\r
                    placeholder="Schedule at (if not set, schedule immediately)"\r
            ></range-picker>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button *ngIf="!okButtonLabel" class="save" type="button" (click)="dialogRef.close(result)" [disabled]="!validForm()" i18n="@@EXPORT">EXPORT</button>\r
            <button *ngIf="okButtonLabel" class="save" type="button" (click)="dialogRef.close(result)" [disabled]="!validForm()">{{okButtonLabel}}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// src/app/widgets/dialogs/export/export.component.ts
var _a12;
var ExportDialogComponent = (_a12 = class {
  constructor(dialogRef, $http, mainservice) {
    this.dialogRef = dialogRef;
    this.$http = $http;
    this.mainservice = mainservice;
    this._ = lodash_exports;
    this.newStudyPage = false;
    this._result = {
      exportType: "dicom",
      selectedAet: void 0,
      destinationAET: void 0,
      selectedStowWebapp: void 0,
      selectedExporter: void 0,
      queue: false,
      externalAET: void 0,
      dicomPrefix: void 0,
      checkboxes: {
        "only-stgcmt": void 0,
        "only-ian": void 0
      }
    };
  }
  ngOnInit() {
    this.getAes();
    this.getStowWebApps();
  }
  get subTitle() {
    return this._subTitle;
  }
  set subTitle(value) {
    this._subTitle = value;
  }
  get preselectedAet() {
    return this._preselectedAet;
  }
  set preselectedAet(value) {
    this._result.selectedAet = value;
    this._preselectedAet = value;
  }
  set preselectedExternalAET(value) {
    this._result.externalAET = value;
  }
  get result() {
    return this._result;
  }
  set result(value) {
    this._result = value;
  }
  get okButtonLabel() {
    return this._okButtonLabel;
  }
  set okButtonLabel(value) {
    this._okButtonLabel = value;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get dicomPrefixes() {
    return this._dicomPrefixes;
  }
  set dicomPrefixes(value) {
    this._dicomPrefixes = value;
  }
  get noDicomExporters() {
    return this._noDicomExporters;
  }
  set noDicomExporters(value) {
    this._noDicomExporters = value;
  }
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  get webapps() {
    return this._webapps;
  }
  set webapps(value) {
    this._webapps = value;
  }
  get externalInternalAetMode() {
    return this._externalAetMode;
  }
  set externalInternalAetMode(value) {
    this._externalAetMode = value;
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
  getAes() {
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}aes`).subscribe(response => {
      $this.aes = response;
      this.aesOption = this.aes.map(ae => {
        return new SelectDropdown(ae.dicomAETitle, ae.dicomAETitle, ae.dicomDescription);
      });
      let resultTemp = JSON.parse(localStorage.getItem("export_result"));
      if (resultTemp) {
        $this._result = resultTemp;
      }
      $this._result.selectedAet = $this._result.selectedAet || $this.aes[0].dicomAETitle;
      $this._result.destinationAET = $this._result.destinationAET || $this.aes[0].dicomAETitle;
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
  getStowWebApps() {
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}webapps?dcmWebServiceClass=STOW_RS`).subscribe(response => {
      $this.webapps = response;
      this.stowWebAppsOption = this.webapps.map(webapp => {
        return new SelectDropdown(webapp.dcmWebAppName, webapp.dcmWebAppName, webapp.dicomDescription);
      });
      let resultTemp = JSON.parse(localStorage.getItem("export_result"));
      if (resultTemp) {
        $this._result = resultTemp;
      }
      $this._result.selectedStowWebapp = $this._result.selectedStowWebapp || $this.webapps[0].dcmWebAppName;
      if ($this.mainservice.global && !$this.mainservice.global.webapps) {
        let global = cloneDeep_default($this.mainservice.global);
        global.webapps = response;
        $this.mainservice.setGlobal(global);
      } else {
        if ($this.mainservice.global && $this.mainservice.global.webapps) {
          $this.mainservice.global.webapps = response;
        } else {
          $this.mainservice.setGlobal({
            webapps: response
          });
        }
      }
    }, response => {});
  }
  validForm() {
    if (this._mode === "reschedule") {
      return true;
    }
    if (this._mode === "multipleExport") {
      return hasIn_default(this._result, "scheduledTime") && hasIn_default(this._result, "selectedExporter");
    }
    if (this._result && hasIn_default(this._result, "exportType") && this._result.exportType === "dicom") {
      if (this._result.selectedAet) {
        return true;
      } else {
        return false;
      }
    }
    if (this._result && hasIn_default(this._result, "exportType") && this._result.exportType === "stow") {
      if (this._result.selectedStowWebapp) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this._result && this._result.selectedExporter) {
        return true;
      } else {
        return false;
      }
    }
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      dialogRef.close("ok");
    }
    if (code === 27) {
      dialogRef.close(null);
    }
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
  ngOnDestroy() {
    localStorage.setItem("export_result", JSON.stringify(this._result));
  }
}, _a12.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: J4careHttpService
}, {
  type: AppService
}], _a12);
ExportDialogComponent = __decorate([Component({
  selector: "app-export",
  template: export_component_default,
  imports: [MatSelect, FormsModule, RangePickerComponent, MatOption, DcmDropDownComponent, CommonModule],
  standalone: true
})], ExportDialogComponent);

// angular:jit:template:src\app\widgets\dialogs\upload-dicom\upload-dicom.component.html
var upload_dicom_component_default = '<div class="vex vex-theme-os upload" xmlns="http://www.w3.org/1999/html">\r\n    <div class="vex-dialog-form">\r\n        <h5 i18n="@@upload-dicom.title">Upload DICOM data</h5>\r\n        <div class="content">\r\n            <ng-container *ngIf="!selectedWebApp">\r\n                <label i18n="@@upload-dicom.select_the_ae_title">Select the ae title:</label>\r\n                <mat-select [ngModel]="selectedAe" (ngModelChange)="selectedAe = $event">\r\n                    <mat-option *ngFor="let ae of aes" [value]="ae.dicomAETitle" title="{{ae.dicomDescription}}">{{ ae.dicomAETitle }}</mat-option>\r\n                </mat-select>\r\n            </ng-container>\r\n            <ng-container *ngIf="selectedWebApp">\r\n                <label i18n="@@select_the_stow_rs_server">Select the STOW-RS server:</label>\r\n                <mat-select [ngModel]="selectedWebApp" (ngModelChange)="selectedWebApp = $event">\r\n                    <mat-option *ngFor="let webApp of webApps" [value]="webApp" title="{{webApp.dcmWebAppName }}({{webApp.dicomAETitle }},{{webApp.dicomDeviceName}})">{{ webApp.dcmWebAppName }}</mat-option>\r\n                </mat-select>\r\n            </ng-container>\r\n            <!--<input type="file" ng2FileSelect [uploader]="vendorUpload" />-->\r\n            <label i18n="@@upload-dicom.choose_dicom_files_to_upload">Choose DICOM Files to upload:</label>\r\n            <input type="file" [(ngModel)]="file" (change)="fileChange($event)"\r\n                   i18n-title="upload-dicom.choose_dicom_files_to_upload_title"\r\n                   title="Choose DICOM files to upload"\r\n                   i18n-placeholder="@@upload_file" placeholder="Upload file"  multiple>\r\n            <div mat-dialog-content>\r\n                <div class="upload_state" *ngFor="let file of fileList">\r\n                    {{file.name}}\r\n                    <span class="text-danger" *ngIf="percentComplete[file.name] && percentComplete[file.name].status">Error {{percentComplete[file.name].status}}</span>\r\n                    <span class="upload_ticker" *ngIf="percentComplete[file.name] && percentComplete[file.name].showLoader && !percentComplete[file.name].showTicker"><i class="fa fa-circle-o-notch fa-spin"></i></span>\r\n                    <span class="upload_ticker" *ngIf="percentComplete[file.name] && percentComplete[file.name].showTicker"><i class="material-icons">check</i></span>\r\n                    <div *ngIf="percentComplete && percentComplete[file.name] && percentComplete[file.name].value">\r\n                        <mat-progress-bar color="primary" mode="determinate" [value]="percentComplete[file.name].value"></mat-progress-bar>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="dialogbuttons">\r\n            <button class="cancle" type="button" (click)="close(dialogRef)" i18n="@@CLOSE">CLOSE</button>\r\n        </div>\r\n    </div>\r\n</div>';

// src/app/widgets/dialogs/upload-dicom/upload-dicom.service.ts
var _a13;
var UploadDicomService = (_a13 = class {
  constructor() {
    this.progress$ = new Observable(observer => {
      this.progressObserver = observer;
    }).pipe(share());
  }
  makeFileRequest(url, params, files) {
    return new Observable(observer => {
      let formData = new FormData(),
        xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        let fileObj = files[i];
        formData.append("{ size : " + fileObj.size + " }", files[i].name);
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("responseheader", xhr.getResponseHeader("Content-Type"));
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
      let $this = this;
      xhr.upload.onprogress = event => {
        $this.progress$ = Math.round(event.loaded / event.total * 100);
        $this.progressObserver.next($this.progress$);
      };
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }
}, _a13.ctorParameters = () => [], _a13);
UploadDicomService = __decorate([Injectable()], UploadDicomService);

// src/app/studies/studies.service.ts
var _a14;
var StudiesService = (_a14 = class {
  constructor($http, datePipe, mainservice, storageSystems) {
    this.$http = $http;
    this.datePipe = datePipe;
    this.mainservice = mainservice;
    this.storageSystems = storageSystems;
    this.integerVr = ["DS", "FL", "FD", "IS", "SL", "SS", "UL", "US"];
  }
  get studyIod() {
    return this._studyIod;
  }
  set studyIod(value) {
    this._studyIod = value;
  }
  get patientIod() {
    return this._patientIod;
  }
  get mwlIod() {
    return this._mwlIod;
  }
  set patientIod(value) {
    this._patientIod = value;
  }
  set mwlIod(value) {
    this._mwlIod = value;
  }
}, _a14.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: DatePipe
}, {
  type: AppService
}, {
  type: StorageSystemsService
}], _a14);
StudiesService = __decorate([Injectable()], StudiesService);

// node_modules/@angular/material/fesm2022/progress-bar.mjs
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  /** Flag that indicates whether NoopAnimations mode is set to true. */
  _isNoopAnimation = _animationsDisabled();
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-bar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  /**
   * Event emitted when animation of the primary progress bar completes. This event will not
   * be emitted when animations are disabled, nor will it be emitted for modes with continuous
   * animations (indeterminate and query).
   */
  animationEnd = new EventEmitter();
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  /** Event handler for `transitionend` events. */
  _transitionendHandler = event => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatProgressBar,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.0.0",
    type: _MatProgressBar,
    isStandalone: true,
    selector: "mat-progress-bar",
    inputs: {
      color: "color",
      value: ["value", "value", numberAttribute],
      bufferValue: ["bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    host: {
      attributes: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1"
      },
      properties: {
        "attr.aria-valuenow": "_isIndeterminate() ? null : value",
        "attr.mode": "mode",
        "class": '"mat-" + color',
        "class._mat-animation-noopable": "_isNoopAnimation",
        "class.mdc-linear-progress--animation-ready": "!_isNoopAnimation",
        "class.mdc-linear-progress--indeterminate": "_isIndeterminate()"
      },
      classAttribute: "mat-mdc-progress-bar mdc-linear-progress"
    },
    exportAs: ["matProgressBar"],
    ngImport: core_exports,
    template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
    styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}
`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatProgressBar,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}
`]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  }
});
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatProgressBarModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, MatCommonModule]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatProgressBarModule,
    imports: [MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatProgressBarModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }]
});

// src/app/widgets/dialogs/upload-dicom/upload-dicom.component.ts
var _a15;
var UploadDicomComponent = (_a15 = class {
  /*    public vendorUpload: FileUploader = new FileUploader({
          url: ``,
          // allowedMimeType:['application/octet-stream','application/zip']
          // headers: [{name: 'Content-Type', value: `multipart/related`}]
          // ,disableMultipart: true
      });*/
  constructor(dialogRef, $http, service, mainservice, studieService, studyService, httpErrorHandler, _keycloakService) {
    this.dialogRef = dialogRef;
    this.$http = $http;
    this.service = service;
    this.mainservice = mainservice;
    this.studieService = studieService;
    this.studyService = studyService;
    this.httpErrorHandler = httpErrorHandler;
    this._keycloakService = _keycloakService;
    this.service.progress$.subscribe(data => {
      console.log("progress = " + data);
    });
  }
  ngOnInit() {
    this.percentComplete = {};
    this.getWebApps();
  }
  addFileNameHeader(fileName) {}
  getToken() {
    if (this.selectedWebApp && hasIn_default(this.selectedWebApp, "dcmKeycloakClientID")) {
      return this.$http.getRealm(this.selectedWebApp);
    } else {
      return this._keycloakService.getToken();
    }
  }
  fileChange(event) {
    let $this = this;
    let boundary = Math.random().toString().substr(2);
    let filetype;
    let token;
    this.fileList = event.target.files;
    if (this.fileList) {
      console.log("getToken", this.getToken());
      this.getToken().subscribe(response => {
        if (!this.mainservice.global.notSecure) {
          token = response.token;
        }
        forEach_default(this.fileList, (file, i) => {
          if (file.type && file.type != "application/dicom") {
            $this.mainservice.showError("Filetype \"" + file.type + "\n\" not allowed!");
            $this.fileList = [];
            event = null;
            $this.file = null;
          } else {
            console.log("file", file);
            console.log("filetype", file.type);
            this.percentComplete[file.name] = {};
            this.percentComplete[file.name]["value"] = 0;
            $this.percentComplete[file.name]["showTicker"] = false;
            $this.percentComplete[file.name]["showLoader"] = true;
            let xmlHttpRequest = new XMLHttpRequest();
            let url;
            if (this.selectedWebApp) {
              url = this.studyService.getDicomURL("study", this.selectedWebApp);
            } else {
              url = `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${$this._selectedAe}/rs/studies`;
            }
            xmlHttpRequest.open("POST", url, true);
            let dashes = "--";
            let crlf = "\r\n";
            if (file.type == "") {
              filetype = "application/dicom";
            } else {
              filetype = file.type;
            }
            const postDataStart = dashes + boundary + crlf + 'Content-Disposition: form-data;name="file";filename="' + encodeURIComponent(file.name) + '"' + crlf + "Content-Type: " + filetype + crlf + crlf;
            const postDataEnd = crlf + dashes + boundary + dashes;
            xmlHttpRequest.setRequestHeader("Content-Type", 'multipart/related;type="application/dicom";boundary=' + boundary);
            xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
            if (!this.mainservice.global.notSecure) {
              xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
            }
            xmlHttpRequest.upload.onprogress = function (e) {
              if (e.lengthComputable) {
                $this.percentComplete[file.name]["value"] = e.loaded / e.total * 100;
              }
            };
            xmlHttpRequest.onreadystatechange = () => {
              if (xmlHttpRequest.readyState === 4) {
                if (xmlHttpRequest.status === 200) {
                  console.log("in response", JSON.parse(xmlHttpRequest.response));
                  $this.percentComplete[file.name]["showLoader"] = false;
                  $this.percentComplete[file.name]["showTicker"] = true;
                } else {
                  console.log("in respons error", xmlHttpRequest.status);
                  console.log("statusText", xmlHttpRequest.statusText);
                  $this.percentComplete[file.name]["showLoader"] = false;
                  $this.percentComplete[file.name]["value"] = 0;
                  $this.percentComplete[file.name]["status"] = xmlHttpRequest.status + " " + xmlHttpRequest.statusText;
                  let jsonFormat = JSON.parse(xmlHttpRequest.response);
                  $this.httpErrorHandler.handleError(jsonFormat || xmlHttpRequest.response);
                }
              }
            };
            xmlHttpRequest.upload.onloadstart = function (e) {
              $this.percentComplete[file.name]["value"] = 0;
            };
            xmlHttpRequest.upload.onloadend = function (e) {
              if (xmlHttpRequest.status === 200) {
                $this.percentComplete[file.name]["showLoader"] = false;
                $this.percentComplete[file.name]["value"] = 100;
              }
            };
            xmlHttpRequest.send(new Blob([new Blob([postDataStart]), file, new Blob([postDataEnd])]));
          }
        });
      });
    }
  }
  uploadFile(dialogRef) {}
  close(dialogRef) {
    dialogRef.close(null);
  }
  /*    onChange(newValue) {
          this._selectedAe = newValue.title;
      }*/
  get selectedAe() {
    return this._selectedAe;
  }
  set selectedAe(value) {
    this._selectedAe = value;
  }
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  getWebApps() {
    let filters = {
      dcmWebServiceClass: "STOW_RS"
    };
    this.studyService.getWebApps(filters).subscribe(res => {
      this.webApps = res;
      this.webApps.forEach(webApp => {
        if (webApp.dicomAETitle === this._selectedAe || this.selectedWebApp && this.selectedWebApp.dcmWebAppName === webApp.dcmWebAppName) this.selectedWebApp = webApp;
      });
    }, err => {
      j4care.log("Something went wrong on getting webApps", err);
      this.httpErrorHandler.handleError(err);
    });
  }
}, _a15.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: J4careHttpService
}, {
  type: UploadDicomService
}, {
  type: AppService
}, {
  type: StudiesService
}, {
  type: StudyService
}, {
  type: HttpErrorHandler
}, {
  type: KeycloakService
}], _a15);
UploadDicomComponent = __decorate([Component({
  selector: "app-upload-dicom",
  template: upload_dicom_component_default,
  imports: [FormsModule, MatDialogContent, MatSelect, MatOption, MatProgressBar, CommonModule],
  standalone: true
})], UploadDicomComponent);

// src/app/pipes/comparewithiod.pipe.ts
var ComparewithiodPipe = class ComparewithiodPipe2 {
  transform(value, args) {
    let tempValue = {};
    let restVal = {};
    let tempIod;
    let mode = "simple";
    if (args instanceof Array && args.length === 2) {
      tempIod = args[0];
      mode = args[1] || "simple";
    } else {
      tempIod = args;
    }
    Object.keys(value).filter(attr => {
      if (this.isInIod(attr, tempIod)) {
        tempValue[attr] = {};
        tempValue[attr] = value[attr];
      } else {
        if (mode != "simple") {
          restVal[attr] = restVal[attr] || {};
          restVal[attr] = value[attr];
        }
      }
    });
    if (mode === "rest-only") {
      return restVal;
    }
    if (mode === "both") {
      return [tempValue, restVal];
    }
    return tempValue;
  }
  isInIod(element, iod) {
    for (let i in iod) {
      if (element === i) {
        return true;
      }
    }
    return false;
  }
};
ComparewithiodPipe = __decorate([Pipe({
  name: "comparewithiod",
  standalone: false
})], ComparewithiodPipe);

// angular:jit:template:src\app\widgets\dialogs\upload-files\upload-files.component.html
var upload_files_component_default = `<div class="vex vex-theme-os upload" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form">\r
        <h5>{{title}}</h5>\r
        <div class="content">\r
<!--            <label>Select the ae title:</label>\r
            <mat-select [ngModel]="selectedAe" (ngModelChange)="selectedAe = $event">\r
                <mat-option *ngFor="let ae of aes" [value]="ae.dicomAETitle" title="{{ae.dicomDescription}}">{{ ae.dicomAETitle }}</mat-option>\r
            </mat-select>-->\r
            <ng-container *ngIf="!fromExternalWebApp">\r
                <label i18n="@@select_the_stow_rs_server">Select the STOW-RS server:</label>\r
                <mat-select [ngModel]="selectedWebApp" (ngModelChange)="selectedWebApp = $event">\r
                    <mat-option *ngFor="let webApp of webApps" [value]="webApp" title="{{webApp.dcmWebAppName }}({{webApp.dicomAETitle }},{{webApp.dicomDeviceName}})">{{ webApp.dcmWebAppName }}</mat-option>\r
                </mat-select>\r
            </ng-container>\r
            <label class="simple_label">\r
                <ng-container i18n="@@upload_folders">Upload Folders</ng-container>\r
                <input type="checkbox" [(ngModel)]="uploadFolder">\r
            </label>\r
            <label *ngIf="!uploadFolder" i18n="@@upload-bulkdata.choose_bulkdata_files_to_upload">Choose Bulkdata Files to upload:</label><br>\r
            <label  *ngIf="uploadFolder" i18n="@@upload-bulkdata.choose_bulkdata_folder_to_upload">Choose Bulkdata Folder to upload:</label><br>\r
            <input type="file"\r
                   *ngIf="uploadFolder"\r
                   [(ngModel)]="file"\r
                   (change)="fileChange($event)"\r
                   i18n-title="@@upload-bulkdata.choose_bulkdata_files_to_upload_title"\r
                   title="Choose JPEG, PNG, TIFF or GIF Images; or MPEG2, MPEG4 or Quicktime Videos; or PDF or CDA Documents; or MTL, OBJ, STL files; or Genozip compressed genomic files or Bzip2 compressed genomic data VCF files or Bzip2 compressed genomic data Document files to upload"\r
                   i18n-placeholder="@@upload_file"\r
                   placeholder="Upload file"\r
                   webkitdirectory directory multiple>\r
            <input type="file"\r
                   *ngIf="!uploadFolder"\r
                   [(ngModel)]="file"\r
                   (change)="fileChange($event)"\r
                   i18n-title="@@upload-bulkdata.choose_bulkdata_files_to_upload_title"\r
                   title="Choose JPEG, PNG, TIFF or GIF Images; or MPEG2, MPEG4 or Quicktime Videos; or PDF or CDA Documents; or MTL, OBJ, STL files; or Genozip compressed genomic files or Bzip2 compressed genomic data VCF files or Bzip2 compressed genomic data Document files to upload"\r
                   i18n-placeholder="@@upload_file"\r
                   placeholder="Upload file"\r
                   multiple>\r
\r
            <ng-container *ngIf="isDicomCheckbox">\r
                <label>Type could not be be detected, select a file group</label>\r
                <mat-select  [(ngModel)]="isDicomModel" (ngModelChange)="onDicomCheck($event)">\r
                    <mat-option [value]="'application/dicom'" title="The file is a DICOM type">DICOM type</mat-option>\r
                    <mat-option [value]="''" title="images, videos or pdf ">images, videos or pdf </mat-option>\r
                </mat-select>\r
            </ng-container>\r
            <ng-container *ngIf="sourceOfPreviousValuesBlock">\r
                <label>Source of Previous Value</label>\r
                <input type="text" [(ngModel)]="sourceOfPreviousValues">\r
            </ng-container>\r
            <ng-container *ngIf="coerceStudyCheckbox">\r
                <label class="checkbox_form">\r
                    <input type="checkbox" [(ngModel)]="coerceStudyCheckboxValue">\r
                    <span>Coerce Study</span>\r
                </label>\r
            </ng-container>\r
            <ng-container *ngIf="isImage">\r
                <label i18n="@@captured_image_type">Captured Image Type:</label>\r
                <mat-select [ngModel]="selectedSopClass" (ngModelChange)="selectedSopClass = $event">\r
                    <mat-option *ngFor="let type of imageType" [value]="type" title="{{type.description}}">{{ type.title }}</mat-option>\r
                </mat-select>\r
            </ng-container>\r
<!--            <ng-container *ngIf="!moreAttributes && file">\r
                <label title="Series Number">Series Number:</label><input type="number" [(ngModel)]="seriesNumber"><br>\r
                &lt;!&ndash;<label title="Series Description">Instance Number:</label><input type="number" [(ngModel)]="instanceNumber"><br>&ndash;&gt;\r
                <label title="Series Description">Description:</label><input type="text" [(ngModel)]="description"><br>\r
            </ng-container>-->\r
            <button class="edit_attribute_button" *ngIf="file" (click)="showMoreAttributes()" i18n="@@edit_attributes">Edit Attributes</button>\r
\r
            <div class="edit_attribute_block" *ngIf="moreAttributes && file">\r
                <edit-study [tagStudy]="tempAttributes" [iod]="iod" [mode]="'edit'" [dropdown]="dropdown" (onChange)="onStudyChange($event)" [hideAdditionalParams]="true"></edit-study>\r
            </div>\r
            <div mat-dialog-content>\r
                <ng-container *ngIf="showFileList">\r
                    <div class="upload_state" *ngFor="let file of fileList">\r
                        {{file.name |trim:62}}\r
                        <span class="text-danger" *ngIf="percentComplete[file.name] && percentComplete[file.name].status">Error {{percentComplete[file.name].status}}</span>\r
                        <span class="upload_ticker" *ngIf="percentComplete[file.name] && percentComplete[file.name].showLoader && !percentComplete[file.name].showTicker"><i class="fa fa-circle-o-notch fa-spin"></i></span>\r
                        <span class="upload_ticker"  *ngIf="percentComplete[file.name] && percentComplete[file.name].showTicker"><i class="material-icons">check</i></span>\r
                        <div *ngIf="percentComplete[file.name]">\r
                            <mat-progress-bar color="primary" mode="determinate" [value]="percentComplete[file.name].value"></mat-progress-bar>\r
                        </div>\r
                    </div>\r
                </ng-container>\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button class="save" type="button" [disabled]="neededClassMissing" (click)="upload()" i18n="@@START_UPLOADING">START UPLOADING</button>\r
            <button class="cancle" type="button" (click)="close(dialogRef)" i18n="@@CLOSE">CLOSE</button>\r
        </div>\r
    </div>\r
</div>\r
\r
`;

// angular:jit:style:inline:src\app\widgets\dialogs\upload-files\upload-files.component.ts;CiAgICAgICAgLnVwbG9hZCBsYWJlbCB7CiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICB9CgogICAgICAgIC5lZGl0X2F0dHJpYnV0ZV9idXR0b24gewogICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OwogICAgICAgICAgICBvdmVyZmxvdzogYXV0bzsKICAgICAgICAgICAgbWF4LWhlaWdodDogMzJ2aDsKICAgICAgICB9CgogICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHsKICAgICAgICAgICAgY2xlYXI6IGJvdGg7CiAgICAgICAgICAgIHdpZHRoOiBhdXRvOwogICAgICAgICAgICBoZWlnaHQ6IDIwcHg7CiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7CiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4OwogICAgICAgIH0KCiAgICAgICAgbGFiZWwuc2ltcGxlX2xhYmVsIHsKICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsKICAgICAgICAgICAgaGVpZ2h0OiAyNnB4OwogICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4OwogICAgICAgIH0KCiAgICAgICAgLm1hdC1tZGMtZGlhbG9nLWNvbnRlbnQubWRjLWRpYWxvZ19fY29udGVudCB7CiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OwogICAgICAgIH0KCiAgICAgICAgLmVkaXRfYXR0cmlidXRlX2Jsb2NrIHsKICAgICAgICAgICAgbWF4LWhlaWdodDogMzJ2aDsKICAgICAgICB9CiAgICA=
var upload_files_component_default2 = "/* angular:styles/component:css;e6c0ec77d78fd184853dc0d745c518c260908926cf746a6edbf089c0571f3c47;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dialogs\\upload-files\\upload-files.component.ts */\n.upload label {\n  float: left;\n  width: 100%;\n}\n.edit_attribute_button {\n  margin-top: 15px;\n  overflow: auto;\n  max-height: 32vh;\n}\ninput[type=checkbox] {\n  clear: both;\n  width: auto;\n  height: 20px;\n  margin-top: 0;\n  margin-right: 7px;\n}\nlabel.simple_label {\n  vertical-align: middle;\n  height: 26px;\n  margin-top: 35px;\n}\n.mat-mdc-dialog-content.mdc-dialog__content {\n  float: left;\n}\n.edit_attribute_block {\n  max-height: 32vh;\n}\n";

// src/app/widgets/dialogs/upload-files/upload-files.service.ts
var _a16;
var UploadFilesService = (_a16 = class {
  constructor() {}
  fileTypeFromExt(fileTypeOrExt) {
    switch (fileTypeOrExt) {
      case "mtl":
        return "model/mtl";
      case "stl":
        return "model/stl";
      case "obj":
        return "model/obj";
      case "genozip":
        return "application/vnd.genozip";
      case "vcf.bz2":
      case "vcfbzip2":
      case "vcfbz2":
      case "application/prs.vcfbzip2":
        return "application/prs.vcfbzip2";
      case "boz":
      case "bz2":
      case "application/x-bzip2":
        return "application/x-bzip2";
      case "jph":
        return "image/jph";
      case "jhc":
        return "image/jphc";
      case "j2c":
      case "image/x-jp2-codestream":
        return "image/j2c";
      default:
        return fileTypeOrExt;
    }
  }
  fixFileSpecificEntries(file, object) {
    if (hasIn_default(object, "00420011.BulkDataURI")) {
      set_default(object, "00420011.BulkDataURI", `file/${file.name}`);
    }
    if (hasIn_default(object, "7FE00010.BulkDataURI")) {
      set_default(object, "7FE00010.BulkDataURI", `file/${file.name}`);
    }
    if (hasIn_default(object, "00080018.Value[0]")) {
      set_default(object, "00080018.Value[0]", j4care.generateOIDFromUUID());
    }
  }
  fileTypeOrExt(file) {
    return new Observable(observer => {
      try {
        let fileType = file.type;
        let fileExt = file.name.indexOf(".") > -1 ? file.name.substr(file.name.lastIndexOf(".") + 1) : void 0;
        if (fileType && fileType != "" || fileExt && fileExt != "") {
          observer.next(fileType.length == 0 ? fileExt : fileType);
          observer.complete();
        } else {
          let reader = new FileReader();
          let filePart = file.slice(128, 132);
          reader.readAsArrayBuffer(filePart);
          reader.onload = function () {
            let array = new Uint8Array(reader.result);
            let convertedString = "";
            array.forEach(b => {
              convertedString = convertedString + String.fromCharCode(b);
            });
            if (convertedString === "DICM") {
              observer.next("application/dicom");
            } else {
              observer.next("NO_TYPE_FOUND");
            }
            observer.complete();
          };
        }
      } catch (e) {
        observer.next("NO_TYPE_FOUND");
        observer.complete();
      }
    });
  }
}, _a16.ctorParameters = () => [], _a16);
UploadFilesService = __decorate([Injectable({
  providedIn: "root"
})], UploadFilesService);

// src/app/widgets/dialogs/upload-files/upload-files.component.ts
var _a17;
var UploadFilesComponent = (_a17 = class {
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    if (value === "patient") {
      this.title = "Upload bulkdata files to patient";
    }
    if (value === "study") {
      this.title = "Upload bulkdata files to study";
    }
    if (value === "series") {
      this.title = "Upload bulkdata files to series";
    }
    if (value === "mwl") {
      this.title = "Upload bulkdata files to MWL";
    }
  }
  constructor(dialogRef, mainservice, $http, studyService, uploadDicomService, _keycloakService, service) {
    this.dialogRef = dialogRef;
    this.mainservice = mainservice;
    this.$http = $http;
    this.studyService = studyService;
    this.uploadDicomService = uploadDicomService;
    this._keycloakService = _keycloakService;
    this.service = service;
    this.uploadFolder = false;
    this.title = "Upload bulkdata files to patient";
    this.showFileList = false;
    this.isImage = false;
    this.seriesNumber = 0;
    this.moreAttributes = false;
    this.tempAttributes = [];
    this.iodFileNameFromMode = {
      patient: "study",
      study: "series",
      mwl: "mwl"
    };
    this.imageType = [{
      title: "Screenshots",
      description: "Secondary Capture Image Storage",
      value: "1.2.840.10008.5.1.4.1.1.7",
      modality: "OT"
    }, {
      title: "Photographs",
      description: "VL Photographic Image Storage",
      value: "1.2.840.10008.5.1.4.1.1.77.1.4",
      modality: "XC"
    }, {
      title: "Animated gif",
      description: "Gif with multi frames in it",
      value: "1.2.840.10008.5.1.4.1.1.77.1.4.1",
      modality: "XC"
    }];
    this.sourceOfPreviousValues = "";
    this.sourceOfPreviousValuesBlock = false;
    this.coerceStudyCheckbox = false;
    this.isDicomCheckbox = false;
    this.neededClassMissing = false;
    this.mwlMap = [
    // ["00100010","00100010"],
    // ["00100020","00100020"],
    // ["00100021","00100021"],
    // ["00100024","00100024"],
    // ["00101002","00101002"],
    // ["00100030","00100030"],
    // ["00100040","00100040"],
    // ["00101040","00101040"],
    // ["00101020","00101020"],
    // ["00101030","00101030"],
    // ["00102203","00102203"],
    // ["00080050","00080050"],
    // ["00080051","00080051"],
    // ["00380010","00380010"],
    // ["00380014","00380014"],
    // ["0020000D","0020000D"],
    // ["00080090","00080090"],
    // ["00080096","00080096"],
    // ["00080080","00080080"],
    // ["00321033","00321033"],
    // ["00321034","00321034"],
    ["00200010", "00401001"], ["00081030", "00321060"], ["00081032", "00321064"], ["00401012", "0040100A"], ["00081050", "00400100.Value[0][00400006]"], ["00400275.Value[0].00080050", "00080050"], ["00400275.Value[0].00080051", "00080051"], ["00400275.Value[0].0020000D", "0020000D"], ["00400275.Value[0].00321032", "00321032"], ["00400275.Value[0].00321031", "00321031"], ["00400275.Value[0].00081110", "00081110"], ["00400275.Value[0].00321033", "00321033"], ["00400275.Value[0].00321034", "00321034"], ["00400275.Value[0].00401001", "00401001"], ["00400275.Value[0].00321060", "00321060"], ["00400275.Value[0].00321064", "00321064"], ["00400275.Value[0].00401002", "00401002"], ["00400275.Value[0].0040100A", "0040100A"], ["00400275.Value[0].00400007", "00400100.Value[0].00400007"], ["00400275.Value[0].00400008", "00400100.Value[0].00400008"], ["00400275.Value[0].00400009", "00400100.Value[0].00400009"]];
  }
  ngOnInit() {
    this.percentComplete = {};
    this.tempAttributes = void 0;
    this.tempIods = void 0;
    this.iod = void 0;
    this.selectedSopClass = this.imageType[0];
    if (!this._fromExternalWebApp) {
      this.getWebApps();
    } else {
      this.selectedWebApp = this._fromExternalWebApp;
    }
  }
  fileChange(event) {
    this.fileList = event.target.files;
    let file0 = this.fileList[0];
    this.service.fileTypeOrExt(file0).subscribe(fileTypeOrExt => {
      if (fileTypeOrExt === "NO_TYPE_FOUND") {
        this.isDicomCheckbox = true;
      } else {
        this.setDicomObject(fileTypeOrExt, file0);
      }
    });
  }
  onDicomCheck(e) {
    if (e != "application/dicom") {
      this.isDicomCheckbox = false;
      this.isDicomModel = "";
    }
    this.setDicomObject(this.isDicomModel, this.fileList[0]);
  }
  setDicomObject(fileTypeOrExt, file0) {
    if (fileTypeOrExt === "application/dicom" && this.selectedWebApp && this.selectedWebApp.dcmWebServiceClass && this.selectedWebApp.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") === -1) {
      this.neededClassMissing = true;
      this.mainservice.showError("The selected WebApp doesn't have the webapp class " + "DCM4CHEE_ARC_AET" + "");
    } else {
      if (file0 && (file0.type === "image/jpeg" || file0.type === "image/jp2" || file0.type === "image/j2c" || file0.type === "image/x-jp2-codestream" || file0.type === "image/jph" || file0.type === "image/jphc" || file0.type === "image/png" || file0.type === "image/gif" || file0.type === "image/tiff")) {
        this.isImage = true;
      }
      if (fileTypeOrExt === "application/dicom") {
        this.sourceOfPreviousValuesBlock = true;
        if (this._mode === "mwl") {
          this.coerceStudyCheckbox = true;
        }
      }
      this.studyService.getIodFromContext(fileTypeOrExt, this._mode).subscribe(iods => {
        console.log("iods", iods);
        if (!this._dicomObject) {
          this._dicomObject = {
            attrs: []
          };
        }
        this._dicomObject.attrs["00081030"] = {
          "vr": "LO",
          "Value": [""]
        };
        this._dicomObject.attrs["0008103E"] = {
          "vr": "LO",
          "Value": [""]
        };
        this._dicomObject.attrs["00080018"] = {
          "vr": "UI",
          "Value": [j4care.generateOIDFromUUID()]
        };
        if (!hasIn_default(this._dicomObject.attrs, "00080020.Value[0]")) {
          this._dicomObject.attrs["00080020"] = {
            "vr": "DA",
            "Value": [""]
          };
        }
        if (!hasIn_default(this._dicomObject.attrs, "00080030.Value[0]")) {
          this._dicomObject.attrs["00080030"] = {
            "vr": "TM",
            "Value": [""]
          };
        }
        if (!hasIn_default(this._dicomObject.attrs, "00080090.Value[0]")) {
          this._dicomObject.attrs["00080090"] = {
            "vr": "PN",
            "Value": [""]
          };
        }
        if (!hasIn_default(this._dicomObject.attrs, "00200010.Value[0]")) {
          this._dicomObject.attrs["00200010"] = {
            "vr": "SH",
            "Value": [""]
          };
        }
        if (!hasIn_default(this._dicomObject.attrs, "00080050.Value[0]")) {
          this._dicomObject.attrs["00080050"] = {
            "vr": "SH",
            "Value": [""]
          };
        }
        if (fileTypeOrExt === "application/pdf" || fileTypeOrExt === "pdf") {
          this.supplementEncapsulatedDocumentAttrs();
          this.supplementEncapsulatedPDFAttrs();
        } else if (fileTypeOrExt === "text/xml" || fileTypeOrExt === "xml") {
          this.supplementEncapsulatedDocumentAttrs();
          this.supplementEncapsulatedCDAAttrs();
        } else if (fileTypeOrExt === "mtl" || fileTypeOrExt === "model/mtl") {
          this.supplementEncapsulated3DAttrs();
          this.supplementEncapsulatedMTLAttrs();
        } else if (fileTypeOrExt === "obj" || fileTypeOrExt === "application/x-tgif" || fileTypeOrExt === "model/obj") {
          this.supplementEncapsulated3DAttrs();
          this.supplementEncapsulatedOBJAttrs();
        } else if (fileTypeOrExt === "model/stl" || fileTypeOrExt === "model/x.stl-binary" || fileTypeOrExt === "application/sla" || fileTypeOrExt === "stl") {
          this.supplementEncapsulated3DAttrs();
          this.supplementEncapsulatedSTLAttrs(file0.type);
        } else if (fileTypeOrExt === "genozip" || fileTypeOrExt === "application/vnd.genozip") this.supplementEncapsulatedGENOZIPAttrs();else if (fileTypeOrExt === "vcf.bz2" || fileTypeOrExt === "vcfbzip2" || fileTypeOrExt === "vcfbz2" || fileTypeOrExt === "application/prs.vcfbzip2") this.supplementEncapsulatedBzip2VCFStorageAttrs();else if (fileTypeOrExt === "boz" || fileTypeOrExt === "bz2" || fileTypeOrExt === "application/x-bzip2") this.supplementEncapsulatedBzip2DocumentStorageAttrs();else {
          if (file0.type.indexOf("video") > -1) {
            this._dicomObject.attrs["00080016"] = {
              "vr": "UI",
              "Value": ["1.2.840.10008.5.1.4.1.1.77.1.4.1"]
            };
          } else {
            this._dicomObject.attrs["00080016"] = {
              "vr": "UI",
              "Value": [this.selectedSopClass.value]
            };
          }
          this._dicomObject.attrs["7FE00010"] = {
            "vr": "OB",
            "BulkDataURI": "file/" + file0.name
          };
        }
        if (file0.type === "image/jpeg" || file0.type === "image/jp2" || file0.type === "image/j2c" || file0.type === "image/x-jp2-codestream" || file0.type === "image/jph" || file0.type === "image/jphc" || file0.type === "image/png" || file0.type === "image/gif" || file0.type === "image/tiff") {
          this._dicomObject.attrs["00080008"] = {
            "vr": "CS",
            "Value": ["ORIGINAL", "PRIMARY"]
          };
          if (this.selectedSopClass.value === "1.2.840.10008.5.1.4.1.1.7") {
            this._dicomObject.attrs["00080064"] = {
              "vr": "CS",
              "Value": ["SI"]
            };
            this._dicomObject.attrs["00200020"] = {
              "vr": "CS"
            };
          }
        }
        this.tempIods = iods;
        this.tempAttributes = cloneDeep_default(this._dicomObject);
        this.tempAttributes.attrs = pickBy_default(this._dicomObject.attrs, (o, i) => {
          return i.toString().indexOf("777") === -1;
        });
      });
    }
  }
  supplementEncapsulatedDocumentAttrs() {
    this._dicomObject.attrs["00420011"] = {
      "vr": "OB",
      "BulkDataURI": "file/" + this.fileList[0].name
    };
    this._dicomObject.attrs["00280301"] = {
      "vr": "CS",
      "Value": ["YES"]
    };
    this._dicomObject.attrs["00420010"] = {
      "vr": "ST",
      "Value": [""]
    };
    this._dicomObject.attrs["00080070"] = {
      "vr": "LO",
      "Value": [""]
    };
  }
  supplementEncapsulatedPDFAttrs() {
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.840.10008.5.1.4.1.1.104.1"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["application/pdf"]
    };
    this._dicomObject.attrs["00080064"] = {
      "vr": "CS",
      "Value": ["SD"]
    };
  }
  supplementEncapsulatedCDAAttrs() {
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.840.10008.5.1.4.1.1.104.2"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["text/XML"]
    };
    this._dicomObject.attrs["00080064"] = {
      "vr": "CS",
      "Value": ["WSD"]
    };
  }
  supplementEncapsulated3DAttrs() {
    this._dicomObject.attrs["00420011"] = {
      "vr": "OB",
      "BulkDataURI": "file/" + this.fileList[0].name
    };
    this._dicomObject.attrs["00280301"] = {
      "vr": "CS",
      "Value": ["YES"]
    };
    this._dicomObject.attrs["00420010"] = {
      "vr": "ST",
      "Value": [""]
    };
    this._dicomObject.attrs["00201040"] = {
      "vr": "LO",
      "Value": [""]
    };
    this._dicomObject.attrs["00080070"] = {
      "vr": "LO",
      "Value": [""]
    };
    let item = {
      attrs: []
    };
    item.attrs["00080100"] = {
      "vr": "SH",
      "Value": ["mm"]
    };
    item.attrs["00080102"] = {
      "vr": "SH",
      "Value": ["UCUM"]
    };
    item.attrs["00080104"] = {
      "vr": "LO",
      "Value": ["mm"]
    };
  }
  supplementEncapsulatedMTLAttrs() {
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.840.10008.5.1.4.1.1.104.5"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["model/mtl"]
    };
  }
  supplementEncapsulatedOBJAttrs() {
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.840.10008.5.1.4.1.1.104.4"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["model/obj"]
    };
  }
  supplementEncapsulatedSTLAttrs(fileType) {
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.840.10008.5.1.4.1.1.104.3"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": [fileType]
    };
  }
  supplementEncapsulatedGENOZIPAttrs() {
    this._dicomObject.attrs["00420011"] = {
      "vr": "OB",
      "BulkDataURI": "file/" + this.fileList[0].name
    };
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.40.0.13.1.5.1.4.1.1.104.1"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["application/vnd.genozip"]
    };
    this._dicomObject.attrs["00080070"] = {
      "vr": "LO",
      "Value": [""]
    };
  }
  supplementEncapsulatedBzip2VCFStorageAttrs() {
    this._dicomObject.attrs["00420011"] = {
      "vr": "OB",
      "BulkDataURI": "file/" + this.fileList[0].name
    };
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.40.0.13.1.5.1.4.1.1.104.2"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["application/prs.vcfbzip2"]
    };
    this._dicomObject.attrs["00080070"] = {
      "vr": "LO",
      "Value": [""]
    };
  }
  supplementEncapsulatedBzip2DocumentStorageAttrs() {
    this._dicomObject.attrs["00420011"] = {
      "vr": "OB",
      "BulkDataURI": "file/" + this.fileList[0].name
    };
    this._dicomObject.attrs["00080016"] = {
      "vr": "UI",
      "Value": ["1.2.40.0.13.1.5.1.4.1.1.104.3"]
    };
    this._dicomObject.attrs["00420012"] = {
      "vr": "LO",
      "Value": ["application/x-bzip2"]
    };
    this._dicomObject.attrs["00080070"] = {
      "vr": "LO",
      "Value": [""]
    };
  }
  showMoreAttributes() {
    console.log("this.dicomObject", this.dicomObject);
    if (!this._dicomObject) {
      this._dicomObject = {
        attrs: []
      };
    }
    this.tempAttributes.attrs = new ComparewithiodPipe().transform(this.tempAttributes.attrs, this.tempIods);
    this.studyService.initEmptyValue(this.tempAttributes.attrs);
    this.iod = this.studyService.replaceKeyInJson(this.tempIods, "items", "Value");
    console.log("dicomOjbect", this.dicomObject);
    this.dropdown = this.studyService.getArrayFromIod(this.tempIods);
    this.moreAttributes = !this.moreAttributes;
  }
  onStudyChange(e) {
    console.log("e", e);
    console.log("this._dicomObject.attrs", this._dicomObject.attrs);
  }
  getToken() {
    if (this.selectedWebApp && hasIn_default(this.selectedWebApp, "dcmKeycloakClientID")) {
      return this.$http.getRealm(this.selectedWebApp);
    } else {
      return this._keycloakService.getToken();
    }
  }
  /*    private fileTypeFromExt(fileTypeOrExt:string) {
          switch (fileTypeOrExt) {
              case "mtl":
                  return "model/mtl";
              case "stl":
                  return "model/stl";
              case "obj":
                  return "model/obj";
              case "genozip":
                  return "application/vnd.genozip";
              default:
                  return fileTypeOrExt;
          }
      }*/
  upload() {
    if (!this.neededClassMissing) {
      let token;
      this.showFileList = true;
      let seriesInstanceUID;
      this.getToken().subscribe(response => {
        if (!this.mainservice.global.notSecure) {
          token = response.token;
        }
        if (!this.seriesNumber && this.seriesNumber != 0) {
          this.seriesNumber = 0;
        }
        if (this.fileList) {
          seriesInstanceUID = j4care.generateOIDFromUUID();
          forEach_default(this.fileList, (file, i) => {
            this.service.fileTypeOrExt(file).subscribe(fileTypeOrExt => {
              if (fileTypeOrExt === "NO_TYPE_FOUND") {
                if (this.isDicomModel) {
                  this.triggerUpload(file, i, token, seriesInstanceUID, this.isDicomModel);
                }
              } else {
                this.triggerUpload(file, i, token, seriesInstanceUID, fileTypeOrExt);
              }
            });
          });
        }
      });
    }
  }
  triggerUpload(file, fileIndex, token, seriesInstanceUID, fileTypeOrExt) {
    let $this = this;
    let descriptionPart;
    let boundary = Math.random().toString().substr(2);
    switch (fileTypeOrExt) {
      case "image/jpeg":
      case "image/jp2":
      case "image/j2c":
      case "image/x-jp2-codestream":
      case "j2c":
      case "image/jph":
      case "jph":
      case "image/jphc":
      case "jhc":
      case "image/png":
      case "image/tiff":
        $this.modality = $this.selectedSopClass.modality;
        descriptionPart = "Image";
        break;
      case "image/gif":
        $this.modality = $this.selectedSopClass.modality;
        descriptionPart = "GIF";
        break;
      case "video/mpeg":
      case "video/mp4":
      case "video/quicktime":
        descriptionPart = "Video";
        $this.modality = "XC";
        break;
      case "application/pdf":
        descriptionPart = "PDF";
        $this.modality = "DOC";
        break;
      case "text/xml":
        descriptionPart = "CDA";
        $this.modality = "SR";
        break;
      case "model/mtl":
      case "mtl":
        descriptionPart = "MTL";
        $this.modality = "M3D";
        break;
      case "model/obj":
      case "application/x-tgif":
      case "obj":
        descriptionPart = "OBJ";
        $this.modality = "M3D";
        break;
      case "stl":
      case "model/stl":
      case "model/x.stl-binary":
      case "application/sla":
        descriptionPart = "STL";
        $this.modality = "M3D";
        break;
      case "genozip":
      case "application/vnd.genozip":
        descriptionPart = "GENOZIP";
        $this.modality = "DNA";
        break;
      case "vcf.bz2":
      case "vcfbzip2":
      case "vcfbz2":
      case "application/prs.vcfbzip2":
        descriptionPart = "Bzip2 compressed genomic data VCF file";
        $this.modality = "DNA";
        break;
      case "boz":
      case "bz2":
      case "application/x-bzip2":
        descriptionPart = "Bzip2 compressed genomic data Document file";
        $this.modality = "OT";
        break;
    }
    let xmlHttpRequest = new XMLHttpRequest();
    console.log("mode", this._mode);
    let url = this.getUrl();
    console.log("url", url);
    if (url) {
      this.percentComplete[file.name] = {};
      $this.percentComplete[file.name]["showTicker"] = false;
      $this.percentComplete[file.name]["showLoader"] = true;
      let dashes = "--";
      let crlf = "\r\n";
      if (j4care.is(this.tempAttributes, "attrs")) {
        Object.keys(this.tempAttributes.attrs).forEach(attr => {
          this._dicomObject.attrs[attr] = this.tempAttributes.attrs[attr];
        });
      }
      let studyObject = pickBy_default(this._dicomObject.attrs, (o, i) => {
        return i.toString().indexOf("777") === -1;
      });
      if (fileTypeOrExt === "application/dicom") {
        console.log("mode", this._mode);
        let queryParameters = {
          sourceOfPreviousValues: this.sourceOfPreviousValues
        };
        if (this._mode === "mwl") {
          if (this.coerceStudyCheckboxValue) {
            queryParameters["irwf"] = "SCHEDULED_COERCE_STUDY";
          } else {
            queryParameters["irwf"] = "SCHEDULED";
          }
          if (j4care.hasSet(studyObject, "0020000D.Value[0]")) {
            queryParameters["0020000D"] = get_default(studyObject, "0020000D.Value[0]");
          }
          if (j4care.hasSet(studyObject, "00400100.Value[0]") && j4care.hasSet(studyObject, '["00400100"].Value[0]["00400009"].Value[0]')) {
            queryParameters["00400100.00400009"] = get_default(studyObject, '["00400100"].Value[0]["00400009"].Value[0]');
          }
        } else {
          queryParameters["irwf"] = "UNSCHEDULED";
          if (j4care.hasSet(studyObject, "00100020.Value[0]")) {
            queryParameters["00100020"] = get_default(studyObject, "00100020.Value[0]");
          }
          if (j4care.hasSet(studyObject, "00100021.Value[0]")) {
            queryParameters["00100021"] = get_default(studyObject, "00100021.Value[0]");
          }
          if (j4care.hasSet(studyObject, "00100024.Value[0]") && j4care.hasSet(studyObject, '["00100024"].Value[0]["00400032"].Value[0]')) {
            queryParameters["00100024.00400032"] = get_default(studyObject, '["00100024"].Value[0]["00400032"].Value[0]');
          }
          if (j4care.hasSet(studyObject, "00100024.Value[0]") && j4care.hasSet(studyObject, '["00100024"].Value[0]["00400033"].Value[0]')) {
            queryParameters["00100024.00400033"] = get_default(studyObject, '["00100024"].Value[0]["00400033"].Value[0]');
          }
        }
        if (queryParameters && Object.keys(queryParameters).length > 0) {
          url = url + j4care.objToUrlParams(queryParameters, true);
        }
      } else {
        if (hasIn_default(studyObject, "00400100")) {
          delete studyObject["00400100"];
        }
      }
      if (this._mode == "mwl") {
        const queryParameters = {
          AccessionNumber: get_default(this._dicomObject, "attrs[00080050].Value[0]")
        };
        url = url + j4care.objToUrlParams(queryParameters, true);
      }
      xmlHttpRequest.open("POST", url, true);
      if (!hasIn_default(studyObject, "0008103E.Value[0]") || get_default(studyObject, "0008103E.Value[0]") === "") {
        studyObject["0008103E"] = {
          "vr": "LO",
          "Value": ["Imported " + descriptionPart]
        };
      }
      studyObject["00200013"] = {
        "vr": "IS",
        "Value": [fileIndex + 1]
      };
      if (this._mode === "series" && hasIn_default(studyObject, "00201209.Value[0]")) {
        studyObject["00200011"] = studyObject["00200011"] || {
          "vr": "IS",
          "Value": [get_default(studyObject, "00201209.Value[0]") * 1 + 1]
        };
        studyObject["00200013"] = studyObject["00200013"] || {
          "vr": "IS",
          "Value": [get_default(studyObject, "00201209.Value[0]") * 1 + fileIndex * 1 + 1]
        };
      } else {
        studyObject["00200011"] = studyObject["00200011"] || {
          "vr": "IS",
          "Value": [this.seriesNumber || 0]
        };
        studyObject["00200013"] = {
          "vr": "IS",
          "Value": [fileIndex + 1]
        };
      }
      if (hasIn_default(studyObject, "0020000D.Value[0]") && this._mode != "series") {
        studyObject["0020000E"] = studyObject["0020000E"] || {
          "vr": "UI",
          "Value": [seriesInstanceUID]
        };
      } else {
        if (!hasIn_default(studyObject, "0020000E.Value[0]")) {
          studyObject["0020000D"] = studyObject["0020000D"] || {
            "vr": "UI",
            "Value": [seriesInstanceUID]
          };
        }
      }
      studyObject["00080060"] = studyObject["00080060"] || {
        "vr": "CS",
        "Value": [$this.modality]
      };
      let object = [{}];
      this.service.fixFileSpecificEntries(file, studyObject);
      Object.keys(studyObject).forEach(key => {
        if (["00080054", "00080056", "00080061", "00080062", "00081190", "00201200", "00201206", "00201208"].indexOf(key) === -1) object[0][key] = studyObject[key];
      });
      const jsonData = dashes + boundary + crlf + "Content-Type: application/dicom+json" + crlf + crlf + JSON.stringify(j4care.removeKeyFromObject(object, ["required", "enum", "multi"])) + crlf;
      let postDataStart = dashes + boundary + crlf + "Content-Type: " + this.service.fileTypeFromExt(fileTypeOrExt) + crlf + "Content-Location: file/" + file.name + crlf + crlf;
      if (fileTypeOrExt === "application/dicom") {
        xmlHttpRequest.setRequestHeader("Content-Type", 'multipart/related;type="application/dicom";boundary=' + boundary);
      } else {
        xmlHttpRequest.setRequestHeader("Content-Type", 'multipart/related;type="application/dicom+json";boundary=' + boundary);
        postDataStart = jsonData + postDataStart;
      }
      const postDataEnd = crlf + dashes + boundary + dashes;
      xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
      if (!this.mainservice.global.notSecure) {
        xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
      }
      xmlHttpRequest.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          $this.percentComplete[file.name]["value"] = e.loaded / e.total * 100;
        }
      };
      xmlHttpRequest.onreadystatechange = () => {
        if (xmlHttpRequest.readyState === 4) {
          if (xmlHttpRequest.status === 200) {
            $this.percentComplete[file.name]["showLoader"] = false;
            $this.percentComplete[file.name]["showTicker"] = true;
            console.log(`in response`, JSON.parse(xmlHttpRequest.response));
          } else {
            $this.percentComplete[file.name]["showLoader"] = false;
            console.log(`in response error`, xmlHttpRequest.status);
            console.log("statusText", xmlHttpRequest.statusText);
            $this.percentComplete[file.name]["value"] = 0;
            $this.percentComplete[file.name]["status"] = xmlHttpRequest.status + ` ` + xmlHttpRequest.statusText;
          }
        }
      };
      xmlHttpRequest.upload.onloadstart = function (e) {
        $this.percentComplete[file.name]["value"] = 1;
      };
      xmlHttpRequest.upload.onloadend = function (e) {
        if (xmlHttpRequest.status === 200) {
          $this.percentComplete[file.name]["showLoader"] = false;
          $this.percentComplete[file.name]["showTicker"] = true;
          $this.percentComplete[file.name]["value"] = 100;
        }
      };
      xmlHttpRequest.send(new Blob([new Blob([postDataStart]), file, new Blob([postDataEnd])]));
    } else {
      this.mainservice.showError("A STOW-RS server is missing!");
    }
  }
  /*    fixFileSpecificEntries(file,object){
          if(_.hasIn(object,"00420011.BulkDataURI")){
              _.set(object,"00420011.BulkDataURI", `file/${file.name}`);
          }
          if(_.hasIn(object,"7FE00010.BulkDataURI")){
              _.set(object,"7FE00010.BulkDataURI", `file/${file.name}`);
          }
          if(_.hasIn(object,"00080018.Value[0]")){
              _.set(object,"00080018.Value[0]", j4care.generateOIDFromUUID());
          }
      }*/
  close(dialogRef) {
    if (this.xmlHttpRequest) {
      this.xmlHttpRequest.abort();
    }
    dialogRef.close(null);
  }
  onChange(newValue) {
    this._selectedAe = newValue.dicomAETitle;
  }
  get dicomObject() {
    return this._dicomObject;
  }
  set dicomObject(value) {
    this._dicomObject = value;
  }
  get selectedAe() {
    return this._selectedAe;
  }
  set selectedAe(value) {
    this._selectedAe = value;
  }
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  get fromExternalWebApp() {
    return this._fromExternalWebApp;
  }
  set fromExternalWebApp(value) {
    this._fromExternalWebApp = value;
  }
  get preselectedWebApp() {
    return this._preselectedWebApp;
  }
  set preselectedWebApp(value) {
    this._preselectedWebApp = value;
  }
  getWebApps() {
    console.log("_preselectedWebApp", this._preselectedWebApp);
    let filters = {
      dcmWebServiceClass: "STOW_RS"
    };
    if (this._preselectedWebApp && hasIn_default(this._preselectedWebApp, "dicomDeviceName")) {
      filters["dicomDeviceName"] = this._preselectedWebApp.dicomDeviceName;
    }
    this.studyService.getWebApps(filters).subscribe(res => {
      if (res && res.length > 0) {
        this.webApps = res;
        this.webApps.forEach(webApp => {
          if (this._preselectedWebApp) {
            if (webApp.dcmWebAppName === this._preselectedWebApp.dcmWebAppName) {
              this.selectedWebApp = webApp;
            }
          } else {
            if (webApp.dicomAETitle === this._selectedAe) this.selectedWebApp = webApp;
          }
        });
        if (!this.selectedWebApp && this.webApps && this.webApps.length > 0) {
          this.selectedWebApp = this.webApps[0];
        }
      } else {
        this.mainservice.showError("No Web Application with the Web Service Class \"STOW_RS\" found in this device");
        this.dialogRef.close(null);
      }
    }, err => {});
  }
  /*    let fileInput = document.getElementById('fileInput');
      fileInput.onchange  = function(){
          let file = fileInput.files[0];
          fileIsDicom(file).then(isDicom=>{
              console.log("isDicom=",isDicom);
          })
      };*/
  /*    private fileTypeOrExt(file: File) {
          let fileType = file.type;
          let fileExt = file.name.substr(file.name.lastIndexOf(".") + 1);
          return fileType.length == 0
              ? fileExt : fileType;
      }*/
  //private
  getUrl() {
    try {
      if (j4care.hasSet(this._dicomObject, "attrs") && this.selectedWebApp) {
        const studyInstanceUID = this.studyService.getStudyInstanceUID(this._dicomObject.attrs);
        if (studyInstanceUID) {
          return `${this.studyService.getDicomURL("study", this.selectedWebApp)}/${this.studyService.getStudyInstanceUID(this._dicomObject.attrs)}`;
        } else {
          return this.studyService.getDicomURL("study", this.selectedWebApp);
        }
      }
      return;
    } catch (e) {
      return;
    }
  }
  addMwlMapAttributesOnIOD(iod) {
    this.mwlMap.forEach(([target, source]) => {
      if (!hasIn_default(iod, source)) {
        if (source.indexOf("Value") > -1) {
          set_default(iod, source, {});
        } else {
          set_default(iod, source + ".Value[0]", {});
        }
      }
    });
  }
  mapMwlAttributes(attrs) {
    let mappedAttr = {};
    if (this._mode == "mwl") {
      this.mwlMap.forEach(([target, source]) => {
        if (hasIn_default(attrs, source)) {
          set_default(mappedAttr, target, get_default(attrs, source));
          if (target.indexOf("00400275") > -1) {
            mappedAttr["00400275"]["vr"] = "SQ";
          }
        }
      });
      return mappedAttr;
    } else {
      return attrs;
    }
  }
}, _a17.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: AppService
}, {
  type: J4careHttpService
}, {
  type: StudyService
}, {
  type: UploadDicomService
}, {
  type: KeycloakService
}, {
  type: UploadFilesService
}], _a17);
UploadFilesComponent = __decorate([Component({
  selector: "app-upload-files",
  template: upload_files_component_default,
  imports: [MatSelect, TrimPipe, FormsModule, MatOption, EditStudyComponent, MatProgressBar, CommonModule],
  standalone: true,
  styles: [upload_files_component_default2]
})], UploadFilesComponent);

// angular:jit:template:src\app\widgets\dialogs\viewer\viewer.component.html
var viewer_component_default = `<div class="viewer">\r
    <span class="pull-right" *ngIf="views.length > 1">{{view}} / {{views.length}}</span>\r
    <div *ngIf="views.length > 1" class="arrow left" (click)="changeImage('prev')">\r
        <span class="glyphicon glyphicon-chevron-left"></span>\r
    </div>\r
    <div class="content">\r
        <img *ngIf="contentType === 'image/jpeg'" src="{{renderedUrl}}" />\r
        <video *ngIf="contentType === 'video/mpeg'"  autoplay>\r
            <source src="{{renderedUrl}}" type="video/mpeg">\r
        </video>\r
    </div>\r
    <div *ngIf="views.length > 1" class="arrow right" (click)="changeImage('next')">\r
        <span class="glyphicon glyphicon-chevron-right"></span>\r
    </div>\r
    <div class="spinner-icon" *ngIf="showLoader">\r
        <mat-progress-spinner mode="indeterminate" ></mat-progress-spinner>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dialogs\viewer\viewer.component.css
var viewer_component_default2 = "/* src/app/widgets/dialogs/viewer/viewer.component.css */\nimg {\n  max-height: 90vh !important;\n  max-width: 100% !important;\n}\n";

// src/app/widgets/dialogs/viewer/viewer.component.ts
var _a18;
var ViewerComponent = (_a18 = class {
  constructor(dialogRef, j4care2, mainservice, $http, httpErrorHandler, _keycloakService, studyService) {
    this.dialogRef = dialogRef;
    this.j4care = j4care2;
    this.mainservice = mainservice;
    this.$http = $http;
    this.httpErrorHandler = httpErrorHandler;
    this._keycloakService = _keycloakService;
    this.studyService = studyService;
    this.xhr = new XMLHttpRequest();
  }
  ngOnInit() {
    console.log("url", this._url);
    console.log("_views", this._views);
    this.loadImage();
  }
  loadImage() {
    let token;
    let $this = this;
    this.studyService.getTokenService(this.studyWebService).subscribe(response => {
      if (!this.mainservice.global.notSecure) {
        token = response.token;
      }
      this.showLoader = true;
      let url = this._url;
      if (this._contentType != "video/mpeg" && this._view) {
        url = this._url + `&frameNumber=${this._view}`;
      }
      if (!this._contentType) {
        this._contentType = "image/jpeg";
      }
      $this.xhr.open("GET", url, true);
      $this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
      if (!this.mainservice.global.notSecure) {
        $this.xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }
      $this.xhr.send(null);
      $this.xhr.onloadstart = res => {
        console.log("onloade res", res);
      };
      $this.xhr.onreadystatechange = function () {
        if ($this.xhr.readyState == 4) {
          if ($this.xhr.status == 200 || $this.xhr.status == 0) {
            $this.renderedUrl = `data:${$this.contentType};base64,` + encode64($this.xhr.responseText);
            $this.showLoader = false;
          } else {
            $this.httpErrorHandler.handleError($this.xhr);
            $this.showLoader = false;
            $this.dialogRef.close(null);
          }
        }
      };
      function encode64(inputStr) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var outputStr = "";
        var i = 0;
        while (i < inputStr.length) {
          var byte1 = inputStr.charCodeAt(i++) & 255;
          var byte2 = inputStr.charCodeAt(i++) & 255;
          var byte3 = inputStr.charCodeAt(i++) & 255;
          var enc1 = byte1 >> 2;
          var enc2 = (byte1 & 3) << 4 | byte2 >> 4;
          var enc3, enc4;
          if (isNaN(byte2)) {
            enc3 = enc4 = 64;
          } else {
            enc3 = (byte2 & 15) << 2 | byte3 >> 6;
            if (isNaN(byte3)) {
              enc4 = 64;
            } else {
              enc4 = byte3 & 63;
            }
          }
          outputStr += b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);
        }
        return outputStr;
      }
    });
  }
  changeImage(mode) {
    if (mode === "prev" && this._view > 1) {
      this.view--;
    }
    if (mode === "next" && this._view < this._views.length) {
      this.view++;
    }
    this.loadImage();
  }
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
  }
  get views() {
    return this._views;
  }
  set views(value) {
    this._views = value;
  }
  get view() {
    return this._view;
  }
  set view(value) {
    this._view = value;
  }
  get contentType() {
    return this._contentType;
  }
  set contentType(value) {
    this._contentType = value;
  }
}, _a18.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: j4care
}, {
  type: AppService
}, {
  type: J4careHttpService
}, {
  type: HttpErrorHandler
}, {
  type: KeycloakService
}, {
  type: StudyService
}], _a18);
ViewerComponent = __decorate([Component({
  selector: "app-viewer",
  template: viewer_component_default,
  imports: [MatProgressSpinner, CommonModule],
  standalone: true,
  styles: [viewer_component_default2]
})], ViewerComponent);

// src/app/pipes/dynamic-pipe.pipe.ts
var _a19;
var DynamicPipePipe = (_a19 = class {
  constructor(injector) {
    this.injector = injector;
  }
  transform(value, dynamicPipe, func, ...args) {
    try {
      if (!value) {
        return value;
      } else {
        if (dynamicPipe && hasIn_default(dynamicPipe, "pipeToken")) {
          let pipe = this.injector.get(dynamicPipe.pipeToken);
          return pipe.transform(value, ...(dynamicPipe.pipeArgs || []));
        } else {
          return func.call(this, value, args);
        }
      }
    } catch (e) {
      return value;
    }
  }
}, _a19.ctorParameters = () => [{
  type: Injector
}], _a19);
DynamicPipePipe = __decorate([Pipe({
  name: "dynamicPipe",
  standalone: true
})], DynamicPipePipe);

// angular:jit:template:src\app\study\study\selections-dicom-view\selections-dicom-view.component.html
var selections_dicom_view_component_default = `<!--<dicom-list *ngIf="dicomObject[levels] && dicomObject[levels].length > 0" [dicomObject]="dicomObject[levels]"></dicom-list>-->\r
<h5>{{dicomLevel|uppercase}}</h5>\r
<div class="dynamic_table">\r
    <div class="table_header">\r
        <div class="tr">\r
            <div class="th {{header.cssClass}}" *ngFor="let header of tableSchema" title="{{header.headerDescription}}" [ngStyle]="{width: header.calculatedWidth}">{{header.header}}</div>\r
        </div>\r
    </div>\r
    <div class="table_body">\r
        <div class="tr load_more_start" *ngFor="let id of Object.keys(selectionsDicomObjects)">\r
            <div class="td {{table_element.cssClass}}" *ngFor="let table_element of tableSchema" [ngStyle]="{width: table_element.calculatedWidth}" [ngSwitch]="table_element.type">\r
                <ng-container *ngSwitchCase="'actions'">\r
                    <ng-container *ngFor="let action of table_element.actions">\r
                        <a *ngIf="(!action.showIf || action.showIf(selectionsDicomObjects[id], config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(selectionsDicomObjects[id])" title="{{action.title || ''}}">\r
                            <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                            <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                        </a>\r
                    </ng-container>\r
                </ng-container>\r
                <span *ngSwitchCase="'value'">{{_.get(selectionsDicomObjects[id].object.attrs,table_element.pathToValue) || '&nbsp;'}}</span>\r
                <ng-container *ngSwitchCase="'pipe'">\r
                    <ng-container *ngIf="table_element.pathToValue">\r
                        <span [innerHTML]="getDynamicPipeValue(_.get(selectionsDicomObjects[id].object.attrs,table_element.pathToValue),table_element)"></span>\r
                    </ng-container>\r
                    <ng-container *ngIf="!table_element.pathToValue">\r
                        <span [innerHTML]="getDynamicPipeValue(selectionsDicomObjects[id].object.attrs,table_element)"></span>\r
                    </ng-container>\r
                </ng-container>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\study\study\selections-dicom-view\selections-dicom-view.component.scss
var selections_dicom_view_component_default2 = "/* src/app/study/study/selections-dicom-view/selections-dicom-view.component.scss */\n.dynamic_table {\n  float: left;\n  width: calc(100% - 12px);\n  margin: 4px 0px 10px 4px;\n  -webkit-box-shadow: 2px 2px 9px 0px #000000;\n  -moz-box-shadow: 2px 2px 9px 0px #000000;\n  box-shadow: 2px 2px 9px 0px #000000;\n}\n";

// src/app/study/study/selections-dicom-view/selections-dicom-view.service.ts
var _a20;
var SelectionsDicomViewService = (_a20 = class {
  constructor() {}
  getTableSchema($this, actions, dicomLevel) {
    switch (dicomLevel) {
      case "patient":
        return [new TableSchemaElement({
          type: "value",
          header: "Patient's Name",
          pathToValue: "00100010.Value[0].Alphabetic",
          headerDescription: "Patient's Name",
          widthWeight: 1,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "pipe",
          header: "Patient Identifiers",
          headerDescription: "Patient Identifiers",
          widthWeight: 2,
          calculatedWidth: "20%",
          pipe: new DynamicPipe(PatientIssuerPipe, void 0)
        }), new TableSchemaElement({
          type: "value",
          header: "B. Date",
          pathToValue: "00100030.Value[0]",
          headerDescription: "Patient's Birth Date",
          widthWeight: 0.5,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Sex",
          pathToValue: "00100040.Value[0]",
          headerDescription: "Patient's Sex",
          widthWeight: 0.2,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "#S",
          pathToValue: "00201200.Value[0]",
          headerDescription: "Number of Patient Related Studies",
          widthWeight: 0.2,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, e);
            },
            title: "Remove from selection"
          }],
          headerDescription: "Actions",
          pxWidth: 40
        })];
      case "study":
        return [new TableSchemaElement({
          type: "value",
          header: "Study ID",
          pathToValue: "[00200010].Value[0]",
          headerDescription: "Study ID",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Study Instance UID",
          pathToValue: "[0020000D].Value[0]",
          headerDescription: "Study Instance UID",
          widthWeight: 2,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Accession Number",
          pathToValue: "[00080050].Value[0]",
          headerDescription: "Accession Number",
          widthWeight: 1.5,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Study Desc",
          pathToValue: "[00081030].Value[0]",
          headerDescription: "Study Description",
          widthWeight: 2,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Study Date",
          pathToValue: "[00080020].Value[0]",
          headerDescription: "Study Date",
          widthWeight: 1,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "#S",
          pathToValue: "[00201206].Value[0]",
          headerDescription: "Number of Study Related Series",
          widthWeight: 0.3,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "#I",
          pathToValue: "[00201208].Value[0]",
          headerDescription: "Number of Study Related Instances",
          widthWeight: 0.3,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, e);
            },
            title: "Remove from selection"
          }],
          headerDescription: "Actions",
          pxWidth: 40
        })];
      case "series":
        return [new TableSchemaElement({
          type: "value",
          header: "Station Name",
          pathToValue: "00081010.Value[0]",
          headerDescription: "Station Name",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Series Number",
          pathToValue: "00200011.Value[0]",
          headerDescription: "Series Number",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Body Part",
          pathToValue: "00180015.Value[0]",
          headerDescription: "Body Part Examined",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Modality",
          pathToValue: "00080060.Value[0]",
          headerDescription: "Modality",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "#I",
          pathToValue: "00201209.Value[0]",
          headerDescription: "Number of Series Related Instances",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, e);
            },
            title: "Remove from selection"
          }],
          headerDescription: "Actions",
          pxWidth: 40
        })];
      case "instance":
        return [new TableSchemaElement({
          type: "value",
          header: "SOP Class UID",
          pathToValue: "00080016.Value[0]",
          headerDescription: "SOP Class UID",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Instance Number",
          pathToValue: "00200013.Value[0]",
          headerDescription: "Instance Number",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Content Date",
          pathToValue: "00080023.Value[0]",
          headerDescription: "Content Date",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "#F",
          pathToValue: "00280008.Value[0]",
          headerDescription: "Number of Frames",
          widthWeight: 0.3,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, e);
            },
            title: "Remove from selection"
          }],
          headerDescription: "Actions",
          pxWidth: 40
        })];
      default:
        return [new TableSchemaElement({
          type: "value",
          header: "Patient's Name",
          pathToValue: "00100010.Value[0].Alphabetic",
          headerDescription: "Patient's Name",
          widthWeight: 1,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Patient ID",
          pathToValue: "00100020.Value[0]",
          headerDescription: "Patient ID",
          widthWeight: 1,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "value",
          header: "Study ID",
          pathToValue: "[00200010].Value[0]",
          headerDescription: "Study ID",
          widthWeight: 0.9,
          calculatedWidth: "20%"
        }), new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, e);
            },
            title: "Remove from selection"
          }],
          headerDescription: "Actions",
          pxWidth: 40
        })];
    }
  }
}, _a20.ctorParameters = () => [], _a20);
SelectionsDicomViewService = __decorate([Injectable()], SelectionsDicomViewService);

// src/app/study/study/selections-dicom-view/selections-dicom-view.component.ts
var _a21;
var SelectionsDicomViewComponent = (_a21 = class {
  get selectionsDicomObjects() {
    return this._selectionsDicomObjects;
  }
  set selectionsDicomObjects(value) {
    this._selectionsDicomObjects = value;
  }
  constructor(service, dynamicPipe) {
    this.service = service;
    this.dynamicPipe = dynamicPipe;
    this.Object = Object;
    this._ = lodash_exports;
    this.dicomObject = [];
    this.onRemoveFromSelection = new EventEmitter();
  }
  ngOnInit() {
    this.tableSchema = j4care.calculateWidthOfTable(this.service.getTableSchema(this, this.actions, this.dicomLevel));
  }
  actions(model) {
    console.log("model", model);
    this.onRemoveFromSelection.emit(model);
  }
  getDynamicPipeValue(object, table, tooltipMode) {
    return j4care.getDynamicPipeValue(object, table, this.dynamicPipe, tooltipMode);
  }
}, _a21.ctorParameters = () => [{
  type: SelectionsDicomViewService
}, {
  type: DynamicPipePipe
}], _a21.propDecorators = {
  dicomLevel: [{
    type: Input
  }],
  hideHeader: [{
    type: Input
  }],
  onRemoveFromSelection: [{
    type: Output
  }],
  selectionsDicomObjects: [{
    type: Input
  }]
}, _a21);
SelectionsDicomViewComponent = __decorate([Component({
  selector: "selections-dicom-view",
  template: selections_dicom_view_component_default,
  imports: [NgStyle, NgSwitch, UpperCasePipe, CommonModule],
  standalone: true,
  styles: [selections_dicom_view_component_default2]
})], SelectionsDicomViewComponent);

// angular:jit:template:src\app\widgets\dialogs\study-transferring-overview\study-transferring-overview.component.html
var study_transferring_overview_component_default = `<h3>{{title}}</h3>\r
<div *ngIf="selectedElements.action === 'move' || selectedElements.action === 'link'">\r
    <div class="line_block">\r
        <span class="line_element"><ng-container i18n="@@select_rejection_note_type">Select Rejection Note type</ng-container>:</span>\r
        <select class="line_element" id="reject" [(ngModel)]="reject" name="reject">\r
            <option *ngFor="let rjn of rjnotes" title="{{rjn.title}}" value="{{rjn.value}}">{{rjn.text}}</option>\r
        </select>\r
    </div>\r
</div>\r
<ng-container [ngSwitch]="target.dicomLevel">\r
    <div *ngSwitchCase="'patient'">\r
        <h3 i18n="@@selected_target_patient">Selected target patient</h3>\r
        <span *ngIf="target && target.object.attrs && target.object.attrs['00100010'] && target.object.attrs['00100010'].Value && target.object.attrs['00100010'].Value[0].Alphabetic;else noname">\r
            <b>{{target.object.attrs['00100010'].Value[0].Alphabetic}}</b> with the Patient ID\r
            <b>\r
                <span [innerHTML]="(target.object.attrs|patientIssuer)?.html"></span>\r
            </b>\r
        </span><br>\r
        <ng-template #noname>Patient ID <b><span [innerHTML]="(target.object.attrs|patientIssuer)?.html"></span></b></ng-template>\r
        <div *ngIf="selectedElements.action != 'merge'">\r
            ( <ng-container i18n="@@study-transferring_overview.an_empty_study_will_be_automatically_created">An empty study will be automatically created, so it can be used as target study!</ng-container> )\r
        </div>\r
    </div>\r
    <div class="targetobject" *ngSwitchCase="'mwl'">\r
        <h3 i18n="@@selected_target_mwl">Selected target MWL</h3>\r
        <span *ngIf="target && target.object.attrs && target.object.attrs['00100010'] && target.object.attrs['00100010'].Value && target.object.attrs['00100010'].Value[0].Alphabetic;else noname">Patient Name:<b>{{target.object.attrs['00100010'].Value[0].Alphabetic}}</b></span><br>\r
        <ng-template #noname>Patient ID: <b><span [innerHTML]="(target.object.attrs|patientIssuer)?.html"></span></b></ng-template>\r
        <span *ngIf="target && target.object.attrs && target.object.attrs['00400100'] && target.object.attrs['00400100'].Value && target.object.attrs['00400100'].Value[0] && target.object.attrs['00400100'].Value[0]['00400001'] && target.object.attrs['00400100'].Value[0]['00400001'].Value && target.object.attrs['00400100'].Value[0]['00400001'].Value[0]"><ng-container i18n="@@scheduled_station_ae_title">Scheduled Station AE Title</ng-container>: {{target.object.attrs['00400100'].Value[0]['00400001'].Value[0]}}</span>\r
        <br>\r
    </div>\r
    <div *ngSwitchDefault>\r
        <h3 i18n="@@selected_target_study">Selected target study</h3>\r
        <ng-container i18n="@@study_instance_uid">Study Instance UID</ng-container>: <b>{{target.object.attrs['0020000D'].Value[0]}}</b><br>\r
        <ng-container i18n="@@patient_name">Patient Name</ng-container>: <b>{{target.object.attrs['00100010'].Value[0].Alphabetic}}</b><br>\r
        <ng-container i18n="@@patient_identifiers">Patient Identifiers</ng-container>: <b><span [innerHTML]="(target.object.attrs|patientIssuer)?.html"></span></b><br>\r
    </div>\r
</ng-container>\r
\r
<ng-container  *ngFor="let level of ['patient','study','series','instance','mwl']">\r
  <selections-dicom-view *ngIf="selectedElements.preActionElements[level] && Object.keys(selectedElements.preActionElements[level]) && Object.keys(selectedElements.preActionElements[level]).length > 0" [selectionsDicomObjects]="selectedElements.preActionElements[level]" [dicomLevel]="level" (onRemoveFromSelection)="onRemoveFromSelection($event)"></selections-dicom-view>\r
</ng-container>\r
<div class="dialogbuttons">\r
  <button class="save" type="button" (click)="dialogRef.close({selectedElements:selectedElements,reject:reject})" [disabled]="(selectedElements.action === 'move' || selectedElements.action === 'link') && !reject">{{selectedElements.action|uppercase}}</button>\r
  <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
</div>`;

// angular:jit:style:src\app\widgets\dialogs\study-transferring-overview\study-transferring-overview.component.scss
var study_transferring_overview_component_default2 = "/* src/app/widgets/dialogs/study-transferring-overview/study-transferring-overview.component.scss */\nselections-dicom-view {\n  float: left;\n  width: 100%;\n  margin: 10px 0px;\n  max-height: 300px;\n  overflow: auto;\n  border-top: 1px solid #cccccc;\n}\n";

// src/app/widgets/dialogs/study-transferring-overview/study-transferring-overview.component.ts
var _a22;
var StudyTransferringOverviewComponent = (_a22 = class {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.title = "Move";
    this.Object = Object;
  }
  ngOnInit() {
    if (this.selectedElements.action === "link") {
      this.reject = "113038^DCM";
    }
  }
  onRemoveFromSelection(e) {
    this._selectedElements.toggle(e.dicomLevel, e.uniqueSelectIdObject, e.object, "preActionElements");
  }
  get selectedElements() {
    return this._selectedElements;
  }
  set selectedElements(value) {
    this.target = value.postActionElements.getAllAsArray()[0];
    this._selectedElements = value;
  }
}, _a22.ctorParameters = () => [{
  type: MatDialogRef
}], _a22);
StudyTransferringOverviewComponent = __decorate([Component({
  selector: "app-study-transferring-overview",
  template: study_transferring_overview_component_default,
  imports: [FormsModule, PatientIssuerPipe, NgSwitch, UpperCasePipe, SelectionsDicomViewComponent, CommonModule],
  standalone: true,
  styles: [study_transferring_overview_component_default2]
})], StudyTransferringOverviewComponent);

// angular:jit:template:src\app\widgets\dialogs\modify-ups\modify-ups.component.html
var modify_ups_component_default = `<div class="vex vex-theme-os edit-ups" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form" (click)="checkClick($event)">\r
        <h3 [innerHtml]="titleLabel"></h3>\r
        <input *ngIf="mode != 'subscribe' || result.subscribeMode != 'global'" autocomplete="off" id="addPatientAttribut" class="addPatientAttribut" [(ngModel)]="addPatientAttribut" i18n-placeholder="@@placeholder.add_new_attribute" placeholder="Add new attribute"  (click)="opendropdown = !opendropdown"  (keydown)="pressedKey($event)"/>\r
        <div class="overlay" *ngIf="opendropdown && (mode != 'subscribe' || result.subscribeMode != 'global')" (click)="opendropdown = false"></div>\r
        <div id="dropdown" class="dropdown study_edit" *ngIf="opendropdown && (mode != 'subscribe' || result.subscribeMode != 'global')">\r
            <a class="dropdown_element" name="{{m.code}}" *ngFor="let m of dropdown | search:addPatientAttribut"  (click)="$event.preventDefault();addAttribute(m.code, ups)">({{m.codeComma}}) {{m.name}}</a>\r
        </div>\r
        <div mat-dialog-content *ngIf="mode != 'subscribe' || result.subscribeMode != 'global'">\r
            <iod-form-generator [externalInternalAetMode]="externalInternalAetMode" [object]="ups.attrs" [prefix]="" [mode]="mode" [iod]="iod" (keydown)="dialogKeyHandler($event,dialogRef)"></iod-form-generator>\r
        </div>\r
        <div class="template_checkboxes" *ngIf="mode === 'create' || mode === 'clone'">\r
            <label for="no_template">\r
                <input id="no_template" type="radio" name="template_radio" [(ngModel)]="templateParameter" value="no_template"> Don't create template\r
            </label>\r
            <label for="template_too">\r
                <input id="template_too" type="radio" name="template_radio" [(ngModel)]="templateParameter" value="template_too"> Create template too\r
            </label>\r
            <label for="only_template">\r
                <input id="only_template" type="radio" name="template_radio"  [(ngModel)]="templateParameter" value="only_template"> Create only template\r
            </label>\r
        </div>\r
        <div class="template_checkboxes" *ngIf="mode === 'subscribe' && subscribeType === 'uwl'">\r
            <label for="subscribe_global">\r
                <input id="subscribe_global" type="radio" name="template_radio" i18n="@@subscribe_global_uwl" [(ngModel)]="result.subscribeMode" value="global"> Subscribe to UPS Global Subscription\r
            </label>\r
            <label for="subscribe_filtered">\r
                <input id="subscribe_filtered" type="radio" name="template_radio" i18n="@@subscribe_filtered_uwl" [(ngModel)]="result.subscribeMode" value="filtered"> Subscribe to UPS Filtered Global Subscription\r
            </label>\r
        </div>\r
        <div class="checkbox" *ngIf="mode === 'subscribe'">\r
            <label i18n="@@deletion_lock">\r
                <input type="checkbox" name="deletionlock" [(ngModel)]="result.deletionlock"> Deletion Lock - persist UPS / UWL until Subscriber has been able to retrieve final state information and remove the lock.\r
            </label>\r
        </div>\r
        <div class="dicomBlock" *ngIf="mode === 'subscribe'">\r
            <p i18n="@@select_the_subscriber_aetitle">Select the Subscriber AETitle:</p>\r
            <dcm-drop-down\r
                    [options]="aesOption"\r
                    [(model)]="result.subscriberAET"\r
                    [editable]="false"\r
                    [showSearchField]="true"\r
                    [multiSelectMode]="false"\r
                    (modelChange)="result.subscriberAET = $event"\r
                    [showStar]="false">\r
            </dcm-drop-down>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button *ngIf="mode === 'create' || mode === 'edit' || mode === 'clone'" class="save" type="button" (click)="dialogRef.close({object:ups,templateParameter:templateParameter})">{{saveLabel}}</button>\r
            <button *ngIf="mode === 'subscribe'" class="save" type="button" (click)="dialogRef.close({object:ups,result:result})">{{saveLabel}}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dialogs\modify-ups\modify-ups.component.scss
var modify_ups_component_default2 = "/* src/app/widgets/dialogs/modify-ups/modify-ups.component.scss */\n.template_checkboxes {\n  margin: 10px 0;\n  float: left;\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 10px;\n}\n.template_checkboxes label {\n  float: left;\n  width: 100%;\n}\n.checkbox {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n";

// src/app/widgets/dialogs/modify-ups/modify-ups.component.ts
var _a23;
var ModifyUpsComponent = (_a23 = class {
  constructor(dialogRef, $http, mainservice) {
    this.dialogRef = dialogRef;
    this.$http = $http;
    this.mainservice = mainservice;
    this.opendropdown = false;
    this.addPatientAttribut = "";
    this.options = Globalvar.OPTIONS;
    this.DCM4CHE = DCM4CHE;
    this.templateParameter = "no_template";
    this._result = {
      subscribeMode: "filtered",
      subscriberAET: void 0,
      deletionlock: false
    };
  }
  onChange(newValue, model) {
    set_default(this, model, newValue);
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get subscribeType() {
    return this._subscribeType;
  }
  set subscribeType(value) {
    this._subscribeType = value;
  }
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(value) {
    this._dropdown = value;
  }
  get ups() {
    return this._ups;
  }
  set ups(value) {
    this._ups = value;
  }
  get upskey() {
    return this._upskey;
  }
  set upskey(value) {
    this._upskey = value;
  }
  get saveLabel() {
    return this._saveLabel;
  }
  set saveLabel(value) {
    this._saveLabel = value;
  }
  get titleLabel() {
    return this._titleLabel;
  }
  set titleLabel(value) {
    this._titleLabel = value;
  }
  get externalInternalAetMode() {
    return this._externalInternalAetMode;
  }
  set externalInternalAetMode(value) {
    this._externalInternalAetMode = value;
  }
  dialogKeyHandler(e, dialogRef) {
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in dialogkeyhandler", code);
    if (code === 13) {
      dialogRef.close(this._ups);
    }
    if (code === 27) {
      if (this.opendropdown) {
        this.opendropdown = false;
      } else {
        dialogRef.close(null);
      }
    }
  }
  getKeys(obj) {
    if (isArray_default(obj)) {
      return obj;
    } else {
      return Object.keys(obj);
    }
  }
  checkClick(e) {
    console.log("e", e);
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("code in checkclick");
    if (!(e.target.id === "dropdown" || e.target.id === "addPatientAttribut")) {
      this.opendropdown = false;
    }
  }
  pressedKey(e) {
    this.opendropdown = true;
    let code = e.keyCode ? e.keyCode : e.which;
    console.log("in pressedkey", code);
    this.lastPressedCode = code;
    if (code === 9) {
      this.opendropdown = false;
    }
    if (code === 13) {
      let filtered = new SearchPipe().transform(this.dropdown, this.addPatientAttribut);
      if (filtered) {
        this.opendropdown = true;
      }
      console.log("filtered", filtered);
      let attrcode;
      if (WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected").length > 0) {
        attrcode = window.document.getElementsByClassName("dropdown_element selected")[0].getAttribute("name");
      } else {
        attrcode = filtered[0].code;
      }
      console.log("ups_attrs not undefined", this._ups.attrs[attrcode]);
      if (this._ups.attrs[attrcode] != void 0) {
        if (this.iod[attrcode].multi) {
          this._ups.attrs[attrcode]["Value"].push("");
          this.addPatientAttribut = "";
          this.opendropdown = false;
        } else {
          this.mainservice.showWarning("Attribute already exists!");
        }
      } else {
        this.ups.attrs[attrcode] = this.iod[attrcode];
        this.opendropdown = false;
      }
      setTimeout(function () {
        this.lastPressedCode = 0;
      }, 1e3);
    }
    if (code === 40) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          } else {
            this.dropdown[i + 1].selected = true;
          }
          i = this.dropdown.length;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[0].selected = true;
          }
          i++;
        }
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 38) {
      this.opendropdown = true;
      let i = 0;
      while (i < this.dropdown.length) {
        if (this.dropdown[i].selected) {
          this.dropdown[i].selected = false;
          if (i === 0) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          } else {
            this.dropdown[i - 1].selected = true;
          }
          break;
        } else {
          if (i === this.dropdown.length - 1) {
            this.dropdown[this.dropdown.length - 1].selected = true;
          }
        }
        i++;
      }
      let element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
      let dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
      try {
        setTimeout(() => {
          element = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0];
          dropdownElement = WindowRefService.nativeWindow.document.getElementsByClassName("dropdown")[0];
          WindowRefService.nativeWindow.document.getElementsByClassName("dropdown_element selected")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 10);
      } catch (e2) {}
    }
    if (code === 27 || code === 9) {
      this.opendropdown = false;
    }
  }
  addAttribute(attrcode, ups) {
    if (ups.attrs[attrcode]) {
      if (this.iod[attrcode].multi) {
        console.log("multi", this.iod[attrcode]);
        if (ups.attrs[attrcode].vr === "PN") {
          ups.attrs[attrcode]["Value"].push({
            Alphabetic: ""
          });
        } else {
          if (ups.attrs[attrcode].vr === "SQ") {
            ups.attrs[attrcode]["Value"].push(cloneDeep_default(this.iod[attrcode].Value[0]));
          } else {
            ups.attrs[attrcode]["Value"].push("");
          }
        }
        this.addPatientAttribut = "";
        this.opendropdown = false;
      } else {
        this.mainservice.showWarning("Attribute already exists!");
        console.log("message attribute already exists");
      }
    } else {
      console.log("this.iodattrcod", this.iod[attrcode]);
      ups.attrs[attrcode] = cloneDeep_default(this.iod[attrcode]);
      delete ups.attrs[attrcode]["multi"];
      delete ups.attrs[attrcode]["required"];
      console.log("ups=", ups);
    }
    this.opendropdown = false;
    console.log("ups after add ", ups);
  }
  removeAttr(attrcode) {
    switch (arguments.length) {
      case 2:
        if (this.ups.attrs[arguments[0]].Value.length === 1) {
          delete this.ups.attrs[arguments[0]];
        } else {
          this.ups.attrs[arguments[0]].Value.splice(arguments[1], 1);
        }
        break;
      default:
        delete this.ups.attrs[arguments[0]];
        break;
    }
  }
  get aes() {
    return this._aes;
  }
  set aes(value) {
    this._aes = value;
  }
  ngOnInit() {
    this.getAes();
  }
  get result() {
    return this._result;
  }
  set result(value) {
    this._result = value;
  }
  getAes() {
    let $this = this;
    this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}aes`).subscribe(response => {
      $this.aes = response;
      this.aesOption = this.aes.map(ae => {
        return new SelectDropdown(ae.dicomAETitle, ae.dicomAETitle, ae.dicomDescription);
      });
      $this._result.subscriberAET = $this._result.subscriberAET || $this.aes[0].dicomAETitle;
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
}, _a23.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: J4careHttpService
}, {
  type: AppService
}], _a23);
ModifyUpsComponent = __decorate([Component({
  selector: "modify-ups",
  template: modify_ups_component_default,
  imports: [FormsModule, DcmDropDownComponent, IodFormGeneratorComponent, MatDialogContent, CommonModule, SearchPipe],
  standalone: true,
  styles: [modify_ups_component_default2]
})], ModifyUpsComponent);

// node_modules/@angular/material/fesm2022/menu.mjs
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** ARIA role for the menu item. */
  role = "menuitem";
  /** Whether the menu item is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the menu item. */
  disableRipple = false;
  /** Stream that emits when the menu item is hovered. */
  _hovered = new Subject();
  /** Stream that emits when the menu item is focused. */
  _focused = new Subject();
  /** Whether the menu item is highlighted. */
  _highlighted = false;
  /** Whether the menu item acts as a trigger for a sub-menu. */
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuItem,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.0.0",
    type: _MatMenuItem,
    isStandalone: true,
    selector: "[mat-menu-item]",
    inputs: {
      role: "role",
      disabled: ["disabled", "disabled", booleanAttribute],
      disableRipple: ["disableRipple", "disableRipple", booleanAttribute]
    },
    host: {
      listeners: {
        "click": "_checkDisabled($event)",
        "mouseenter": "_handleMouseEnter()"
      },
      properties: {
        "attr.role": "role",
        "class.mat-mdc-menu-item-highlighted": "_highlighted",
        "class.mat-mdc-menu-item-submenu-trigger": "_triggersSubmenu",
        "attr.tabindex": "_getTabIndex()",
        "attr.aria-disabled": "disabled",
        "attr.disabled": "disabled || null"
      },
      classAttribute: "mat-mdc-menu-item mat-focus-indicator"
    },
    exportAs: ["matMenuItem"],
    ngImport: core_exports,
    template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n',
    dependencies: [{
      kind: "directive",
      type: MatRipple,
      selector: "[mat-ripple], [matRipple]",
      inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"],
      exportAs: ["matRipple"]
    }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatMenuItem,
  decorators: [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  }
});
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  /** Emits when the menu content has been attached. */
  _attached = new Subject();
  constructor() {}
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuContent,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatMenuContent,
    isStandalone: true,
    selector: "ng-template[matMenuContent]",
    providers: [{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatMenuContent,
  decorators: [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }],
  ctorParameters: () => []
});
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** All items inside the menu. Includes items nested inside another menu. */
  _allItems;
  /** Only the direct descendant menu items. */
  _directDescendantItems = new QueryList();
  /** Classes to be applied to the menu panel. */
  _classList = {};
  /** Current state of the panel animation. */
  _panelAnimationState = "void";
  /** Emits whenever an animation on the menu completes. */
  _animationDone = new Subject();
  /** Whether the menu is animating. */
  _isAnimating = false;
  /** Parent menu of the current menu panel. */
  parentMenu;
  /** Layout direction of the menu. */
  direction;
  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass;
  /** Class to be added to the backdrop element. */
  backdropClass;
  /** aria-label for the menu panel. */
  ariaLabel;
  /** aria-labelledby for the menu panel. */
  ariaLabelledby;
  /** aria-describedby for the menu panel. */
  ariaDescribedby;
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** @docs-private */
  templateRef;
  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  items;
  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  lazyContent;
  /** Whether the menu should overlap its trigger. */
  overlapTrigger;
  /** Whether the menu has a backdrop. */
  hasBackdrop;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach(className => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach(className => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  /** Event emitted when the menu is closed. */
  closed = new EventEmitter();
  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @breaking-change 8.0.0
   */
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap(items => merge(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe(itemsList => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap(items => merge(...items.map(item => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {}
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {}
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * @deprecated No longer used and will be removed.
   * @breaking-change 21.0.0
   */
  setElevation(_depth) {}
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating = false;
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating = true;
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe(items => {
      this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  /** Gets the menu panel DOM node. */
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenu,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "16.1.0",
    version: "20.0.0",
    type: _MatMenu,
    isStandalone: true,
    selector: "mat-menu",
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: ["overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: ["hasBackdrop", "hasBackdrop", value => value == null ? null : booleanAttribute(value)],
      panelClass: ["class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    host: {
      properties: {
        "attr.aria-label": "null",
        "attr.aria-labelledby": "null",
        "attr.aria-describedby": "null"
      }
    },
    providers: [{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }],
    queries: [{
      propertyName: "lazyContent",
      first: true,
      predicate: MAT_MENU_CONTENT,
      descendants: true
    }, {
      propertyName: "_allItems",
      predicate: MatMenuItem,
      descendants: true
    }, {
      propertyName: "items",
      predicate: MatMenuItem
    }],
    viewQueries: [{
      propertyName: "templateRef",
      first: true,
      predicate: TemplateRef,
      descendants: true
    }],
    exportAs: ["matMenu"],
    ngImport: core_exports,
    template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
    styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatMenu,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: value => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  }
});
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var PANELS_TO_TRIGGERS = /* @__PURE__ */new WeakMap();
var MatMenuTrigger = class _MatMenuTrigger {
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _cleanupTouchstart;
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _hoverSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  /**
   * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
   * interface lacks some functionality around nested menus and animations.
   */
  _parentMaterialMenu;
  /**
   * Cached value of the padding of the parent menu panel.
   * Used to offset sub-menus to compensate for the padding.
   */
  _parentInnerPadding;
  // Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the menu is opened via the keyboard
  _openedBy = void 0;
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe(reason => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
  }
  _menu;
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /**
   * Event emitted when the associated menu is opened.
   * @deprecated Switch to `menuOpened` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuOpen = this.menuOpened;
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  /**
   * Event emitted when the associated menu is closed.
   * @deprecated Switch to `menuClosed` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuClose = this.menuClosed;
  constructor() {
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    const renderer = inject(Renderer2);
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", event => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    if (this.menu && this._ownsMenu(this.menu)) {
      PANELS_TO_TRIGGERS.delete(this.menu);
    }
    this._cleanupTouchstart();
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    const menu = this.menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger.closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    menu.focusFirstItem(this._openedBy || "program");
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        menu.lazyContent?.detach();
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this.triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe(event => {
        if (this.menu instanceof MatMenu) {
          this.menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe(change => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter(active => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe(active => {
        if (active === this._menuItemInstance && !active.disabled) {
          this._openedBy = "mouse";
          this.openMenu();
        }
      });
    }
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  /**
   * Determines whether the trigger owns a specific menu panel, at the current point in time.
   * This allows us to distinguish the case where the same panel is passed into multiple triggers
   * and multiple are open at a time.
   */
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuTrigger,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatMenuTrigger,
    isStandalone: true,
    selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
    inputs: {
      _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: ["matMenuTriggerFor", "menu"],
      menuData: ["matMenuTriggerData", "menuData"],
      restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    host: {
      listeners: {
        "click": "_handleClick($event)",
        "mousedown": "_handleMousedown($event)",
        "keydown": "_handleKeydown($event)"
      },
      properties: {
        "attr.aria-haspopup": 'menu ? "menu" : null',
        "attr.aria-expanded": "menuOpen",
        "attr.aria-controls": "menuOpen ? menu?.panelId : null"
      },
      classAttribute: "mat-mdc-menu-trigger"
    },
    exportAs: ["matMenuTrigger"],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatMenuTrigger,
  decorators: [{
    type: Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  }
});
var MatMenuModule = class _MatMenuModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuModule,
    imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
    exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatMenuModule,
    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatMenuModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }]
});
var matMenuAnimations = {
  // Represents:
  // trigger('transformMenu', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
  // ])
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: {
    type: 7,
    name: "transformMenu",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms 25ms linear"
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('fadeInItems', [
  //   // TODO(crisbeto): this is inside the `transformMenu`
  //   // now. Remove next time we do breaking changes.
  //   state('showing', style({opacity: 1})),
  //   transition('void => *', [
  //     style({opacity: 0}),
  //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: {
    type: 7,
    name: "fadeInItems",
    definitions: [{
      type: 0,
      name: "showing",
      styles: {
        type: 6,
        styles: {
          opacity: 1
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => *",
      animation: [{
        type: 6,
        styles: {
          opacity: 0
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;
export { ComposedInputComponent, PlaceholderchangerDirective, EditPatientComponent, EditMwlComponent, EditStudyComponent, EditSeriesComponent, DeleteRejectedInstancesComponent, ExportDialogComponent, UploadDicomService, StudiesService, MatProgressBarModule, UploadDicomComponent, ComparewithiodPipe, UploadFilesService, UploadFilesComponent, ViewerComponent, SelectionsDicomViewService, DynamicPipePipe, SelectionsDicomViewComponent, StudyTransferringOverviewComponent, ModifyUpsComponent, MatMenu, MatMenuTrigger, MatMenuModule };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/