import { SpecificCharPickerComponent } from "./chunk-ECXQZT4K.js";
import { AeListService, ClickOutsideDirective, ConfirmComponent, ControlService, DeviceConfiguratorService, DevicesService, DurationPickerComponent, Hl7ApplicationsService, MatOption, MatSelect, SearchPipe, TimePickerComponent, WebAppsListService } from "./chunk-DJWZKPOC.js";
import { FormsModule, NG_VALIDATORS, OrderByPipe, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, Validators } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, ChangeDetectionStrategy, ChangeDetectorRef, CommonModule, Component, ContentChild, Directive, ElementRef, EventEmitter, Globalvar, Injectable, Input, J4careHttpService, KeycloakService, MatDialog, MatDialogRef, NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet, Output, Router, RouterLink, TemplateRef, ViewChild, ViewContainerRef, WindowRefService, __decorate, cloneDeep_default, clone_default, endsWith_default, forEach_default, get_default, hasIn_default, indexOf_default, isArray_default, isString_default, j4care, of, replace_default, size_default, startsWith_default, toInteger_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\widgets\dynamicform\dynamic-form.component.html
var dynamic_form_component_default = '<div (keydown)="keyDown($event)" (keyup)="keyUp($event)">\r\n    <input class="search_form" i18n-placeholder="@@placeholder.search_in_this_part" placeholder="Search in this part..." [(ngModel)]="partSearch" (keyup)="filterFormElements()">\r\n    <!--<div (click)="form.disable()">disable</div>-->\r\n    <form  [formGroup]="form">\r\n        <div *ngFor="let formelement of formelements" class="form-row">\r\n            <df-element [formelement]="formelement" [formelements]="formelements" [form]="form" [partSearch]="partSearch" [readOnlyMode]="readOnlyMode"></df-element>\r\n        </div>\r\n        <div class="form-row submit_button_block" *ngIf="!readOnlyMode">\r\n            <fieldset [disabled]="!form.valid">\r\n                <div class="btn btn-default submit" (click)="onSubmit(form.valid)" type="submit" i18n="@@dynamic-form.save">Save</div>\r\n            </fieldset>\r\n        </div>\r\n    </form>\r\n<!--    <div>\r\n        form.valid:{{form.valid}}\r\n        form.status:{{form.status|json}}\r\n    </div>\r\n    <div *ngIf="payLoad" class="form-row">\r\n        <strong>Saved the following values</strong><br>{{payLoad}}\r\n    </div>-->\r\n</div>';

// src/app/helpers/custom-validator/custom-validator.directive.ts
var CustomValidatorDirective = class CustomValidatorDirective2 {
  static requiredArray(options) {
    return control => {
      let check = control.value === void 0 || control.value === null || control.value === "" || size_default(control.value) < 1 || isArray_default(control.value) && control.value[0] === "";
      return check ? {
        "msg": "This field is required!"
      } : null;
    };
  }
  static required(options) {
    return control => {
      let oneOfOptionsActive = false;
      forEach_default(options, (m, i) => {
        if (m.active && m.active === true) {
          oneOfOptionsActive = true;
        }
      });
      let check = (control.value === void 0 || control.value === null || control.value === "") && !oneOfOptionsActive;
      return check ? {
        "msg": "This field is required!"
      } : null;
    };
  }
  static exclusiveMin(min, exclusiveMin) {
    return control => {
      if (!control.value && control.value != "0") {
        return null;
      }
      return exclusiveMin && exclusiveMin === true && control.value == min ? {
        "msg": "The given value " + control.value + " should be greater than the allowed exclusive minimum value " + min + "!"
      } : null;
    };
  }
  static exclusiveMax(max, exclusiveMax) {
    return control => {
      if (!control.value && control.value != "0") {
        return null;
      }
      return exclusiveMax && exclusiveMax === true && control.value == max ? {
        "msg": "The given value " + control.value + " should be lesser than the allowed exclusive maximum value " + max + "!"
      } : null;
    };
  }
  static min(min) {
    return control => {
      if (!control.value && control.value != "0") {
        return null;
      }
      return control.value < min ? {
        "msg": "The given value " + control.value + " is smaller than the allowed min value " + min + "!"
      } : null;
    };
  }
  static max(max) {
    return control => {
      if (!control.value && control.value != "0") {
        return null;
      }
      return control.value > max ? {
        "msg": "The given value " + control.value + " is bigger than the allowed max value " + max + "!"
      } : null;
    };
  }
  static regExp(patern) {
    return control => {
      if (!control.value || isArray_default(control.value) && (control.value.length === 1 && control.value[0] === "" || control.value.length === 0)) {
        return null;
      }
      let re = new RegExp(patern, "g");
      return re.exec(control.value) === null ? {
        "msg": "The given value is not a valid string!"
      } : null;
    };
  }
};
CustomValidatorDirective = __decorate([Directive({
  selector: "[appCustomValidator]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomValidatorDirective,
    multi: true
  }],
  standalone: false
})], CustomValidatorDirective);

// src/app/helpers/form/form.service.ts
var _a;
var FormService = (_a = class {
  constructor(_fb) {
    this._fb = _fb;
  }
  toFormGroup(formelements) {
    return this._fb.group(this.convertFormElement(formelements));
  }
  convertFormElement(formelements) {
    let group = {};
    let $this = this;
    formelements.forEach(element => {
      let validation;
      let validationElement = 0;
      if (hasIn_default(element, "validation")) {
        if (size_default(element["validation"]) > 1) {
          let validationArray = [];
          let min = 0;
          let max = 0;
          forEach_default(element["validation"], (m, i) => {
            switch (i) {
              case "minimum":
                if (element.type === "string" && element.controlType === "text") {
                  validationArray.push(Validators.minLength(m));
                } else {
                  min = m;
                  validationArray.push(CustomValidatorDirective.min(m));
                }
                break;
              case "exclusiveMinimum":
                validationArray.push(CustomValidatorDirective.exclusiveMin(min, m));
                break;
              case "maximum":
                if (element.type === "string" && element.controlType === "text") {
                  validationArray.push(Validators.maxLength(m));
                } else {
                  max = m;
                  validationArray.push(CustomValidatorDirective.max(m));
                }
                break;
              case "maxLength":
                max = m;
                validationArray.push(Validators.maxLength(m));
                break;
              case "minLength":
                max = m;
                validationArray.push(Validators.minLength(m));
                break;
              case "exclusiveMaximum":
                validationArray.push(CustomValidatorDirective.exclusiveMax(max, m));
                break;
              case "pattern":
                validationArray.push(CustomValidatorDirective.regExp(m));
                break;
              default:
                if (i === "required" && m === true) {
                  validationArray.push(Validators.required);
                  if (hasIn_default(element, "validation.required") && element["validation"].required) {
                    if (hasIn_default(element, "options")) {
                      if (element["controlType"] === "checkbox" || element["controlType"] === "arrayelement") {
                        validationArray.push(CustomValidatorDirective.requiredArray(element["options"]));
                      } else {
                        validationArray.push(CustomValidatorDirective.required(element["options"]));
                      }
                    } else {
                      validationArray.push(Validators.required);
                    }
                  }
                }
            }
          });
          validation = Validators.compose(validationArray);
        } else {
          if (hasIn_default(element, "validation.required") && element["validation"].required) {
            if (hasIn_default(element, "options") || element["controlType"] === "arrayelement") {
              if (element["controlType"] === "checkbox" || element["controlType"] === "arrayelement") {
                validation = CustomValidatorDirective.requiredArray(element["options"]);
              } else {
                validation = CustomValidatorDirective.required(element["options"]);
              }
            } else {
              validation = Validators.required;
            }
          }
        }
      }
      switch (element.controlType) {
        case "arrayobject":
          let arr = [];
          let locobj = {};
          element["options"].forEach(option => {
            option["element"].forEach(e => {
              if (e.controlType === "arrayobject") {
                let subgroup = this.convertFormElement([e]);
                locobj[e.key] = subgroup[e.key];
              } else {
                if (e.controlType === "arrayelement") {
                  locobj[e.key] = e.value || [""];
                } else {
                  locobj[e.key] = e.value || "";
                }
              }
            });
            arr.push($this._fb.group(this.getFormControlObject(locobj)));
          });
          group[element.key] = $this._fb.array(arr);
          break;
        case "arrayelement":
          let singleElementValues = [];
          console.log("element.value", element.value);
          if (element.value) {
            if (element["type"] === "number") {
              forEach_default(element.value, value => {
                singleElementValues.push($this._fb.control(parseInt(value)));
              });
            } else {
              forEach_default(element.value, value => {
                singleElementValues.push($this._fb.control(value));
              });
            }
            group[element.key] = validation ? $this._fb.array(singleElementValues, validation) : $this._fb.array(singleElementValues);
          } else {
            if (element["type"] === "number") {
              group[element.key] = validation ? $this._fb.array([$this._fb.control(singleElementValues)], validation) : $this._fb.array([$this._fb.control(singleElementValues)]);
            } else {
              group[element.key] = validation ? $this._fb.array([$this._fb.control("")], validation) : $this._fb.array([$this._fb.control("")]);
            }
          }
          break;
        case "checkbox":
          let checkboxArr = [];
          element["options"].forEach(option => {
            if (option.active) {
              checkboxArr.push($this._fb.control(option.value));
            }
          });
          group[element.key] = validation ? $this._fb.array(checkboxArr, validation) : $this._fb.array(checkboxArr);
          break;
        case "dynamiccheckbox":
          if (element["type"] === "array") {
            element["value"] = element["value"] || [];
            group[element.key] = validation ? $this._fb.array(element["value"], validation) : $this._fb.array(element["value"]);
          } else {
            element["value"] = element["value"] || "";
            group[element.key] = validation ? $this._fb.control(element["value"], validation) : $this._fb.control(element["value"]);
          }
          break;
        default:
          if (element.key) {
            if (element["type"] === "number") {
              let localValue;
              if (element.value || element.value === 0) {
                localValue = element.value;
              } else {
                localValue = NaN;
              }
              group[element.key] = validation ? $this._fb.control(localValue, validation) : $this._fb.control(localValue);
            } else {
              let tempValue = "";
              if (element.value || element.value === false) {
                tempValue = element.value;
              }
              group[element.key] = validation ? $this._fb.control(tempValue, validation) : $this._fb.control(tempValue);
            }
          }
      }
    });
    return group;
  }
  getFormControlObject(keys) {
    let retobj = {};
    let $this = this;
    Object.keys(keys).forEach(function (key) {
      if (typeof keys[key] != "object") {
        retobj[key] = $this._fb.control(keys[key]);
      } else {
        if (Array.isArray(keys[key])) {
          let tmpArr = [];
          keys[key].forEach(kayvalue => {
            tmpArr.push($this._fb.control(kayvalue));
          });
          retobj[key] = $this._fb.array(tmpArr);
        } else {
          retobj[key] = keys[key];
        }
      }
    });
    return retobj;
  }
}, _a.ctorParameters = () => [{
  type: UntypedFormBuilder
}], _a);
FormService = __decorate([Injectable()], FormService);

// angular:jit:template:src\app\widgets\dynamicform\dynamic-form-element.component.html
var dynamic_form_element_component_default = `@if (canSeePermissionBlock(formelement)){\r
    <div class="dynamicform {{formelement.controlType}}" [formGroup]="form" [ngClass]="{hiddencontent: !formelement.show && partSearch === ''}">\r
        <div class="title" *ngIf="formelement.show || partSearch != ''">\r
            <label [attr.for]="formelement.key">{{formelement.label}}</label><br>\r
        </div>\r
        <!--form:{{form.controls.arraytest.controls | json}}-->\r
        <div  class="form_content" [ngSwitch]="formelement.controlType" [ngClass]="formelement.controlType">\r
            <!--<br> in ngswitch {{formelement |json}}<br>-->\r
            <div *ngIf="formelement.show || partSearch != ''" class="content" [ngClass]="{format: formelement.format}">\r
                <div class="download_content" *ngIf="formelement.show || partSearch != ''">\r
                    <a class="vendordata_button" *ngSwitchCase="'filedownload'" (click)="$event.preventDefault();downloadFile(formelement.downloadUrl)" i18n="@@download">Download</a>\r
                    <a class="vendordata_delete" *ngSwitchCase="'filedownload'"  (click)="$event.preventDefault();deleteFile(formelement.deviceName,formelement)" i18n-title="@@title.dynamic-form-element.delete_file" title="Delete File"><i class="material-icons">clear</i></a>\r
                    <a class="vendordata_replace" *ngSwitchCase="'filedownload'"  (click)="$event.preventDefault();replaceFile(formelement.deviceName)" i18n-title="@@title.dynamic-form-element.replace_file" title="Replace File"><i class="material-icons">edit</i></a>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <a class="vendordata_button" *ngSwitchCase="'fileupload'" (click)="$event.preventDefault();uploadVendor(formelement.deviceName);" i18n="@@upload">Upload</a>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <input class="simple_input text disabled" *ngSwitchCase="'constantField'" disabled value="{{formelement.value}}" type="text" />\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <input class="simple_input text" *ngSwitchCase="'text'" [formControlName]="formelement.key" [id]="formelement.key" [type]="formelement.type" (click)="onFocuse(formelement)" (mouseenter)="onMouseEnter(formelement)" (mouseleave)="onMouseLeave(formelement)"/>\r
                    <dictionary-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showPicker" [dictionary]="formelement.format" [formelement]="formelement" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></dictionary-picker>\r
                    <language-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showLanguagePicker" [dictionary]="formelement.format" [formelement]="formelement" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></language-picker>\r
                    <attribute-info *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showPickerTooltipp && form.controls[formelement.key].value" [dictionary]="formelement.format" [value]="form.controls[formelement.key].value"></attribute-info>\r
                    <time-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showTimePicker" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></time-picker>\r
                    <duration-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showDurationPicker" [value]="form.controls[formelement.key].value" [mode]="formelement.format" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></duration-picker>\r
                    <schedule-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showSchedulePicker" [value]="form.controls[formelement.key].value" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></schedule-picker>\r
                    <specific-char-picker *ngIf="formelement.controlType === 'text' && formelement.format && formelement.showCharSetPicker" [format]="formelement.format" [mode]="'configurator'" [value]="form.controls[formelement.key].value" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key],null)"></specific-char-picker>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <dynamic-field *ngSwitchCase="'dynamiccheckbox'" [mode]="formelement.format" [checked]="formelement.value" [type]="formelement.type" (onValueChange)="onValueChange($event, formelement, form['controls'][formelement.key]['controls'],null)"></dynamic-field>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <input class="simple_input number" *ngSwitchCase="'number'" [formControlName]="formelement.key" [id]="formelement.key" type="number" />\r
                </div>\r
                <div class="dropdown_parent" *ngIf="formelement.show || partSearch != ''">\r
    <!--                {{formelement.options|json}}\r
                    <select class="dropdown" *ngSwitchCase="'dropdown'" [id]="formelement.key" [formControlName]="formelement.key" (change)="dropdownChange(formelement,form['controls'][formelement.key])">\r
                            <option value="">-</option>\r
                            <option *ngFor="let opt of formelement.options " [value]="opt.value" [selected]="opt.active">{{opt.label}}</option>\r
                        </select>-->\r
                    <mat-select class="dropdown" *ngSwitchCase="'dropdown'" [id]="formelement.key" [formControlName]="formelement.key" (change)="dropdownChange(formelement,form['controls'][formelement.key])">\r
                        <mat-option value="" *ngIf="!formelement.validation.required">-</mat-option>\r
                        <mat-option *ngFor="let opt of formelement.options " [value]="opt.value" [title]="opt.description">{{opt.label}}</mat-option>\r
                    </mat-select>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="radiobuttons_parent" *ngSwitchCase="'radio'">\r
                        <div  *ngFor="let opt of formelement.options"  [title]="opt.description || ''">\r
                            <input  [id]="formelement.key" [formControlName]="formelement.key" [value]="opt.value" type="radio" [checked]="opt.active">{{opt.key}}<br>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="checkbox_parent"  *ngSwitchCase="'checkbox'" [formArrayName]="formelement.key" [ngClass]="{'long_mode':formelement.options && formelement.options.length && formelement.options.length > 9}">\r
                        <input type="text" *ngIf="formelement.controlType === 'checkbox' && formelement.options && formelement.options.length && formelement.options.length > 9" [formControl]="search" i18n-placeholder="@@search_dot" placeholder="Search...">\r
                        <div *ngFor="let opt of formelement.options|search:search.value"  [title]="opt.description || ''">\r
                            <input  [id]="formelement.key" [name]="opt.value" [value]="opt.value" (change)="checkboxChange($event, formelement);opt.active = !opt.active" [checked]="opt.active" type="checkbox">{{opt.key}}<br>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="arrayobject" *ngSwitchCase="'arrayobject'"  [formArrayName]="formelement.key">\r
                        <div *ngFor="let item of formelement.options; let i=index" name="" [formGroupName]="i.toString()">\r
                            <div *ngFor="let element of item.element">\r
                                <df-element [formelement]="element" [form]="form['controls'][formelement.key]['controls'][i]" [formelements]="formelements"></df-element>\r
                            </div>\r
                        </div>\r
                        <div (click)="addElement(formelement.options, formelement, form['controls'][formelement.key]['controls'])" i18n="@@add">add</div>\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="array_parent" *ngSwitchCase="'arrayelement'"  [formArrayName]="formelement.key">\r
                        <div class="array_single"\r
                             [ngClass]="{picker: (formelement.showDurationPicker && formelement.showDurationPicker[i])}" *ngFor="let item of formelement.value; let i=index">\r
                            <input *ngIf="formelement.type == 'number'" formControlName="{{i}}" type="number">\r
                            <input *ngIf="formelement.type != 'number'" formControlName="{{i}}" [type]="formelement.type" (click)="onFocuse(formelement,i)"  (mouseenter)="onMouseEnter(formelement,i)" (mouseleave)="onMouseLeave(formelement)">\r
                            <span class="delete" i18n-title="@@title.dynamic-form-element.remove_this_value_from_the_array" title="Remove this value from the array" (click)="removeArrayElement(formelement, i, form)"><i class="material-icons">clear</i></span>\r
                            <attribute-info *ngIf="formelement.controlType === 'arrayelement' && formelement.format && formelement.showPickerTooltipp && formelement.showPickerTooltipp[i] && item" [dictionary]="formelement.format" [value]="item"></attribute-info>\r
                            <dictionary-picker *ngIf="formelement.controlType === 'arrayelement'  && formelement.format && formelement.showPicker && formelement.showPicker[i]" [dictionary]="formelement.format" [formelement]="formelement" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key]['controls'],i)"></dictionary-picker>\r
                            <language-picker *ngIf="formelement.controlType === 'arrayelement'  && formelement.format && formelement.showLanguagePicker && formelement.showLanguagePicker[i]" [dictionary]="formelement.format" [formelement]="formelement" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key]['controls'],i)"></language-picker>\r
                            <time-picker *ngIf="formelement.controlType === 'arrayelement'  && formelement.format && formelement.showTimePicker && formelement.showTimePicker[i]" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key]['controls'],i)"></time-picker>\r
                            <schedule-picker *ngIf="formelement.controlType === 'arrayelement' && formelement.format && formelement.showSchedulePicker && formelement.showSchedulePicker[i]" [value]="item" (onValueSet)="onValueChange($event, formelement,form.controls[formelement.key]['controls'],i)"></schedule-picker>\r
                            <specific-char-picker *ngIf="formelement.controlType === 'arrayelement' && formelement.format && formelement.showCharSetPicker && formelement.showCharSetPicker[i]" [mode]="'configurator'" [value]="item"  (onValueSet)="onValueChange($event, formelement,form['controls'][formelement.key]['controls'],i)"></specific-char-picker>\r
                            <!--<device-picker *ngIf="formelement.controlType === 'arrayelement' && formelement.format === 'dicomDeviceName'"></device-picker>-->\r
                        </div>\r
                        <div class="add" (click)="addArrayElement(formelement.value, form['controls'][formelement.key]['controls'], form)"><i class="material-icons">add</i> <span i18n="@@Add">Add</span></div>\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="button_parent" *ngSwitchCase="'button'">\r
                        <div class="button_content" *ngIf="formelement.value > 0">\r
                            <a [ngClass]="{'disabled':!form.valid}" class="button edit" (click)="$event.preventDefault();navigateTo(formelement['url'])" title="{{formelement['description']}}"><i class="material-icons">mode_edit</i> <span class="text" i18n="@@edit_extension">Edit extension</span></a>\r
                            <a [ngClass]="{'disabled':!form.valid}" class="delete button" (click)="$event.preventDefault();removeObject(formelement,form.controls[formelement.key])" title="{{formelement['description'] || getTitleBackup('remove',formelement['title'])}}"><i class="material-icons">clear</i></a>\r
                        </div>\r
                        <div class="button_content" *ngIf="formelement.value === 0">\r
                            <a [ngClass]="{'disabled':!form.valid}" class="button edit gray disabled" (click)="$event.preventDefault();" title="{{formelement.description}}" i18n="@@extension_is_not_present">Extension is not present</a>\r
                            <a [ngClass]="{'disabled':!form.valid}" class="add button" [routerLink]="[formelement['url']]" title="{{formelement['description'] || getTitleBackup('append',formelement.title)}}"><i class="material-icons">add</i></a>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="dropdown_button" *ngSwitchCase="'buttondropdown'" [ngClass]="{'empty':(!formelement.options || !formelement.options.length || formelement.options.length === 0)}">\r
                        <!--<input class="dropdownSearch"  formControlName="{{'search_'+formelement.key}}" type="text" placeholder="Search..." >-->\r
                        <!--<select [attr.disabled]="form.valid ? null:true" (change)="navigateTo($event.target.value, formelement.options)" *ngIf="formelement.options && formelement.options.length > 0" >-->\r
                            <!--<option [value]="">-</option>-->\r
                            <!--&lt;!&ndash;<option *ngFor="let opt of formelement.options | search:form.controls['search_'+formelement.key].value" [value]="opt.url">{{opt.title}}</option>&ndash;&gt;-->\r
                            <!--<option *ngFor="let opt of formelement.options" [value]="opt.url">{{opt.title}} </option>-->\r
                        <!--</select>-->\r
    <!--                    <div [attr.disabled]="form.valid ? null:true" class="select" *ngIf="formelement.options && formelement.options.length > 0">\r
                            <ul class="option">\r
                                <li *ngFor="let opt of formelement.options"><span (click)="navigateTo(pt.url, formelement.options)">{{opt.title}}</span><i class="material-icons">content_copy</i><i class="material-icons">clear</i></li>\r
                            </ul>\r
                        </div>-->\r
\r
                        <dcm-select [options]="formelement.options" [placeholder]="(formelement.options && formelement.options.length && formelement.options.length > 0 ? 'Select a ' + formelement.label:'No child found')">\r
                            <ng-template let-select="select">\r
                                <div class="title_select_block" (click)="navigateTo(select.url, formelement.options)">{{select.title}}</div>\r
                                <a [ngClass]="{'disabled':!form.valid}" class="clone_button" *ngIf="formelement.options && formelement.options.length > 0" (click)="$event.preventDefault();clone(formelement, select, formelement.options)" i18n-title="@@title.dynamic-form-element.clone_this_param" title="Clone this {{formelement.label}} part"><i class="material-icons">content_copy</i></a>\r
                                <a [ngClass]="{'disabled':!form.valid}" class="remove_button" *ngIf="formelement.options && formelement.options.length > 0" (click)="$event.preventDefault();removePart(formelement, select)" i18n-title="@@title.dynamic-form-element.delete_this_label" title="Delete this {{formelement.label}} part"><i class="material-icons">clear</i></a>\r
                            </ng-template>\r
                        </dcm-select>\r
                        <a *ngIf="formelement.options && formelement.options.length > 0" [ngClass]="{'disabled':!form.valid}" class="button add" (click)="$event.preventDefault();navigateTo(formelement.addUrl, formelement.options)"  i18n-title="@@title.dynamic-form-element.add_new_label" title="Add new {{formelement.label}}"><i class="material-icons">add</i></a>\r
                        <a *ngIf="!(formelement.options && formelement.options.length > 0)" [ngClass]="{'disabled':!form.valid}" class="button add big" (click)="$event.preventDefault();navigateTo(formelement.addUrl)"  i18n-title="@@title.dynamic-form-element.add_new_label" title="Add new {{formelement.label}}"><i class="material-icons">add</i> Add</a>\r
    <!--                    <a [ngClass]="{'disabled':!form.valid}" class="button clone" *ngIf="formelement.options && formelement.options.length > 0" (click)="$event.preventDefault();clone(formelement)" title="Clone a {{formelement.label}} part"><i class="material-icons">content_copy</i></a>\r
                        <a [ngClass]="{'disabled':!form.valid}" class="delete button" *ngIf="formelement.options && formelement.options.length > 0" (click)="$event.preventDefault();removePart(formelement)" title="Delete a {{formelement.label}} part"><i class="material-icons">clear</i></a>-->\r
                    </div>\r
                </div>\r
                <div *ngIf="formelement.show || partSearch != ''">\r
                    <div class="dropdown_button" *ngSwitchCase="'message'">\r
                        <span class="text-danger">{{formelement.msg}}</span>\r
                    </div>\r
                </div>\r
                <!--<pre *ngIf="form.controls[formelement.key] && form.controls[formelement.key].errors">formcontrols{{form.controls[formelement.key].errors |json }}</pre>-->\r
                <div class="error_msg" *ngIf="(formelement.show || partSearch != '') && form.controls[formelement.key] && form.controls[formelement.key].errors">\r
                    <span class="text-danger" *ngIf="form.controls[formelement.key].errors && form.controls[formelement.key].errors.required">\r
                        <ng-container i18n="@@this_field_is_required">This field is required!</ng-container>\r
                    </span>\r
                    <span class="text-danger" *ngIf="form.controls[formelement.key].errors && form.controls[formelement.key].errors.maxlength">\r
                        <ng-container i18n="@@the_text_is_too_long">The text is too long!</ng-container>\r
                    </span>\r
                    <span class="text-danger" *ngIf="form.controls[formelement.key].errors && form.controls[formelement.key].errors.minlength">\r
                        <ng-container i18n="@@the_text_is_too_short">The text is too short!</ng-container>\r
                    </span>\r
                    <span class="text-danger" *ngIf="form.controls[formelement.key].errors && form.controls[formelement.key].errors.msg">\r
                        {{form.controls[formelement.key].errors.msg}}\r
                    </span>\r
                </div>\r
            </div>\r
\r
            <div class="toggle" *ngSwitchCase="'togglebutton'">\r
                <h4 [ngClass]="{'disabled':!form.valid}" (click)="toggleTab(formelement.order)"><i class="material-icons" *ngIf="formelement.materialIconName">{{formelement.materialIconName}}</i> {{formelement.title}}</h4>\r
            </div>\r
        </div>\r
        <div  class="description_parent" *ngIf="formelement.show || partSearch != ''">\r
            <span class="description" [innerHtml]="formelement.description"></span>\r
        </div>\r
    </div>\r
}\r
`;

// angular:jit:template:src\app\widgets\dialogs\upload-vendor\upload-vendor.component.html
var upload_vendor_component_default = '<div class="vex vex-theme-os upload" xmlns="http://www.w3.org/1999/html">\r\n    <div class="vex-dialog-form">\r\n        <h5 i18n="@@upload-vendor.title">Upload vendor device data</h5>\r\n        <div class="content">\r\n            <!--<input type="file" ng2FileSelect [uploader]="vendorUpload" />-->\r\n            <input type="file" (change)="setFile($event)" />\r\n        </div>\r\n        <div class="dialogbuttons">\r\n            <button class="save" (click)="uploadFile(dialogRef)" i18n="@@UPLOAD">UPLOAD</button>\r\n            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CANCEL">CANCEL</button>\r\n        </div>\r\n    </div>\r\n</div>';

// src/app/widgets/dialogs/upload-vendor/upload-vendor.component.ts
var _a2;
var UploadVendorComponent = (_a2 = class {
  constructor(dialogRef, $http, mainservice, _keycloakService) {
    this.dialogRef = dialogRef;
    this.$http = $http;
    this.mainservice = mainservice;
    this._keycloakService = _keycloakService;
  }
  ngOnInit() {}
  setFile(event) {
    this.selectedFile = event.target.files[0];
  }
  uploadFile(dialogRef) {
    let $this = this;
    let token;
    this._keycloakService.getToken().subscribe(response => {
      if (!this.mainservice.global.notSecure) {
        token = response.token;
      }
      let xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.open("PUT", `${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${this._deviceName}/vendordata`, true);
      xmlHttpRequest.setRequestHeader("Content-Type", "application/zip");
      if (!this.mainservice.global.notSecure) {
        xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
      }
      xmlHttpRequest.upload.onloadend = e => {
        dialogRef.close("ok");
      };
      xmlHttpRequest.send($this.selectedFile);
    });
  }
  get deviceName() {
    return this._deviceName;
  }
  set deviceName(value) {
    this._deviceName = value;
  }
}, _a2.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: KeycloakService
}], _a2);
UploadVendorComponent = __decorate([Component({
  selector: "app-upload-files",
  template: upload_vendor_component_default,
  standalone: true
})], UploadVendorComponent);

// angular:jit:template:src\app\widgets\dictionary-picker\dictionary-picker.component.html
var dictionary_picker_component_default = `<div class="widghet_content" (keydown)="keyDown($event)">\r
    <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r
    <input class="dictionary_widget_search" [(ngModel)]="filter" i18n-placeholder="@@placeholder.dictionary-picker.__search" placeholder="  Search.." (keyup)="onSearch()">\r
    <div class="dictionary_widget" (scroll)="onScroll($event)">\r
        <ul class="list">\r
            <li *ngFor="let dictionary of dcmTagsFiltered|slice:0:sliceTo;" (click)="addSelectedElement(dictionary)" title="{{dictionary.description}}"><span [innerHTML]="dictionary.key"></span> <span *ngIf="!hideDots">:</span> <span [innerHTML]="dictionary.text"></span></li>\r
            <button class="load_more" *ngIf="sliceTo <= dcmTags.length && (!filter || filter==='')" (click)="loadMore()">\r
                <!--<i *ngIf="moreHl7.loaderActive" class="fa fa-spinner fa-spin fa-3x fa-fw"></i>-->\r
                <ng-container i18n="@@more">More</ng-container>\r
            </button>\r
        </ul>\r
        <div class="no_result" *ngIf="(dcmTags|search:filter).length === 0" i18n="@@searched_element_not_found">Searched element not found!</div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dictionary-picker\dictionary-picker.component.css
var dictionary_picker_component_default2 = "/* src/app/widgets/dictionary-picker/dictionary-picker.component.css */\n.dictionary_widget_search {\n  position: absolute;\n  z-index: 99999;\n  margin-left: 15px;\n  margin-top: 7px;\n  min-width: 175px;\n}\n.dictionary_widget {\n  max-height: 300px;\n  overflow: auto;\n  position: absolute;\n  z-index: 9999;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px 6px #cccccc;\n  -moz-box-shadow: 3px 4px 8px 6px #cccccc;\n  box-shadow: 3px 4px 8px 6px #cccccc;\n  width: 650px;\n}\n.dictionary_widget .no_result {\n  padding: 0px 15px 30px 15px;\n  min-width: 205px;\n  font-size: 18px;\n  color: #914f4f;\n}\n.dictionary_widget ul.list {\n  list-style: none;\n  padding: 10px 15px;\n  margin-top: 30px;\n}\n.dictionary_widget ul li:hover {\n  background: #ccc;\n  cursor: pointer;\n}\n.close {\n  position: absolute;\n  z-index: 999999;\n  margin-left: 610px;\n  margin-top: 8px;\n}\n";

// src/app/widgets/dictionary-picker/dictionary-picker.component.ts
var _a3;
var DictionaryPickerComponent = (_a3 = class {
  constructor(deviceConfiguratorService) {
    this.deviceConfiguratorService = deviceConfiguratorService;
    this.Object = Object;
    this.onValueSet = new EventEmitter();
    this.filter = "";
    this.dcmTags = [];
    this.dcmTagsFiltered = [];
    this.sliceTo = 20;
    this.scrollTop = 0;
    this.search = new SearchPipe();
  }
  ngOnInit() {
    switch (this.dictionary) {
      case "dcmTag":
        forEach_default(DCM4CHE.elementName.forTag("all"), (m, i) => {
          this.dcmTags.push({
            key: i,
            text: m
          });
          this.dcmTagsFiltered.push({
            key: i,
            text: m
          });
        });
        break;
      case "dcmTransferSyntax":
        forEach_default(DCM4CHE.TransferSyntax.nameOf("all"), (m, i) => {
          this.dcmTags.push({
            key: i,
            text: m
          });
          this.dcmTagsFiltered.push({
            key: i,
            text: m
          });
        });
        break;
      case "dcmProperty":
        this.hideDots = true;
        const currentPropertiePosition = document.location.pathname.split(".").pop();
        const uiConfig = get_default(this.deviceConfiguratorService.device, "dcmDevice.dcmuiConfig[0]");
        if (currentPropertiePosition === "dcmWebApp") {
          const dropdown = [{
            key: "IID_PATIENT_URL=[VIEWER_URL]"
          }, {
            key: "IID_STUDY_URL=[VIEWER_URL]"
          }, {
            key: "IID_ENCODE=false"
          }, {
            key: "IID_URL_TARGET=_self"
          }, {
            key: "IID_URL_TARGET=_blank"
          }, {
            key: "MWLAccessionNumberGenerator=[name-of-cd-import-acc-no-id-generator]"
          }, {
            key: "allow-any-hostname=true"
          }, {
            key: "disable-trust-manager=true"
          }, {
            key: "allow-any-hostname=true"
          }, {
            key: "disable-trust-manager=true"
          }, {
            key: "bearer-token=[bearer-token]"
          }, {
            key: "basic-auth=[basic-auth]"
          }, {
            key: "basic-auth=[basic-auth]"
          }, {
            key: "content-type=true"
          }, {
            key: "content-type=false"
          }, {
            key: "chunked=true"
          }, {
            key: "transfer-syntax=[transfer-syntax]"
          }, {
            key: "concurrency=[concurrency]"
          }, {
            key: "WebAppDropdownLabel=[custom_label]"
          }];
          this.dcmTags = dropdown;
          this.dcmTagsFiltered = clone_default(dropdown);
        }
        if (hasIn_default(uiConfig, "dcmuiMWLWorklistLabel") && uiConfig.dcmuiMWLWorklistLabel.length > 0) {
          uiConfig.dcmuiMWLWorklistLabel.forEach(el => {
            this.dcmTags.push({
              text: "",
              key: `MWLWorklistLabel=${el}`,
              description: "Configured Worklist label that is in UI config configured, will be used in the Navigation page"
            });
            this.dcmTagsFiltered.push({
              text: "",
              key: `MWLWorklistLabel=${el}`,
              description: "Configured Worklist label that is in UI config configured, will be used in the Navigation page"
            });
          });
        }
        if (hasIn_default(this.deviceConfiguratorService.device, "dcmDevice.dcmWebApp")) {
          const webApps = get_default(this.deviceConfiguratorService.device, "dcmDevice.dcmWebApp");
          webApps.forEach(el => {
            if (hasIn_default(el, "dcmWebServiceClass") && el.dcmWebServiceClass.indexOf("STOW_RS") > -1) {
              this.dcmTags.push({
                text: "",
                key: `STOWWebApp=${el.dcmWebAppName}`,
                description: el.description
              });
              this.dcmTagsFiltered.push({
                text: "",
                key: `STOWWebApp=${el.dcmWebAppName}`,
                description: el.description
              });
            }
          });
        }
        if (hasIn_default(this.deviceConfiguratorService.device, "dcmDevice.dcmWebApp")) {
          const webApps = get_default(this.deviceConfiguratorService.device, "dcmDevice.dcmWebApp");
          webApps.forEach(el => {
            if (hasIn_default(el, "dcmWebServiceClass") && el.dcmWebServiceClass.indexOf("PAM") > -1) {
              this.dcmTags.push({
                text: "",
                key: `PAMWebApp=${el.dcmWebAppName}`,
                description: el.description
              });
              this.dcmTagsFiltered.push({
                text: "",
                key: `PAMWebApp=${el.dcmWebAppName}`,
                description: el.description
              });
            }
          });
        }
        break;
      case "dcmSOPClass":
        forEach_default(DCM4CHE.SOPClass.nameOf("all"), (m, i) => {
          this.dcmTags.push({
            key: i,
            text: m
          });
          this.dcmTagsFiltered.push({
            key: i,
            text: m
          });
        });
        break;
    }
  }
  ngAfterViewInit() {
    WindowRefService.nativeWindow.document.getElementsByClassName("dictionary_widget_search")[0].focus();
  }
  addSelectedElement(element) {
    this.onValueSet.emit(element.key);
  }
  keyDown(e) {
    if (e.keyCode === 13) {
      let filtered = new SearchPipe().transform(this.dcmTags, this.filter);
      if (filtered.length > 0) {
        this.onValueSet.emit(filtered[0].key);
      }
    }
  }
  onScroll(e) {
    const offsetScrollHeight = e.target.scrollTop + e.target.offsetHeight;
    if (this.scrollTop < e.target.scrollTop && offsetScrollHeight + 20 > e.target.scrollHeight) {
      this.scrollTop = e.target.scrollTop;
      this.loadMore();
    }
  }
  onSearch() {
    this.sliceTo = 20;
    this.scrollTop = 0;
    this.dcmTagsFiltered = this.search.transform(this.dcmTags, this.filter);
  }
  loadMore() {
    this.sliceTo += 20;
  }
  close() {
    this.onValueSet.emit("");
  }
}, _a3.ctorParameters = () => [{
  type: DeviceConfiguratorService
}], _a3.propDecorators = {
  dictionary: [{
    type: Input
  }],
  formelement: [{
    type: Input
  }],
  hideDots: [{
    type: Input
  }],
  onValueSet: [{
    type: Output
  }]
}, _a3);
DictionaryPickerComponent = __decorate([Component({
  selector: "dictionary-picker",
  template: dictionary_picker_component_default,
  imports: [FormsModule, CommonModule, SearchPipe],
  standalone: true,
  styles: [dictionary_picker_component_default2]
})], DictionaryPickerComponent);

// angular:jit:template:src\app\widgets\language-picker\language-picker.component.html
var language_picker_component_default = '<div class="widghet_content" (keydown)="keyDown($event)">\r\n    <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r\n    <input class="language_widget_search" [(ngModel)]="filter" i18n-placeholder="@@placeholder.dictionary-picker.__search" placeholder="  Search..">\r\n    <div class="language_widget" >\r\n        <ul class="list">\r\n            <li *ngFor="let dictionary of dcmTags|search:filter" (click)="addSelectedElement(dictionary)"><span [innerHTML]="dictionary.text"></span></li>\r\n        </ul>\r\n        <div class="no_result" *ngIf="(dcmTags|search:filter).length === 0" i18n="@@searched_element_not_found">Searched element not found!</div>\r\n    </div>\r\n</div>\r\n';

// angular:jit:style:src\app\widgets\language-picker\language-picker.component.scss
var language_picker_component_default2 = "/* src/app/widgets/language-picker/language-picker.component.scss */\n.language_widget_search {\n  position: absolute;\n  z-index: 99999;\n  margin-left: 15px;\n  margin-top: 7px;\n  min-width: 175px;\n  left: 0;\n}\n.language_widget {\n  max-height: 300px;\n  overflow: auto;\n  position: absolute;\n  z-index: 9999;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px 6px #cccccc;\n  -moz-box-shadow: 3px 4px 8px 6px #cccccc;\n  box-shadow: 3px 4px 8px 6px #cccccc;\n  width: 650px;\n}\n.language_widget .no_result {\n  padding: 0px 15px 30px 15px;\n  min-width: 205px;\n  font-size: 18px;\n  color: #914f4f;\n}\n.language_widget ul.list {\n  list-style: none;\n  padding: 10px 15px;\n  margin-top: 30px;\n}\n.language_widget ul li:hover {\n  background: #ccc;\n  cursor: pointer;\n}\n.close {\n  position: absolute;\n  z-index: 999999;\n  margin-left: 610px;\n  margin-top: 8px;\n}\n";

// src/app/widgets/language-picker/language-picker.component.ts
var _a4;
var LanguagePickerComponent = (_a4 = class {
  constructor() {
    this.Object = Object;
    this.onValueSet = new EventEmitter();
    this.filter = "";
    this.dcmTags = [];
  }
  ngOnInit() {
    forEach_default(Globalvar.LANGUAGES.getAllLanguages, (m, i) => {
      this.dcmTags.push({
        key: `${i}|${m.name}|${m.nativeName}|${m.flag}`,
        text: `<img src="${m.flag}" width="15"/> ${m.name} - ${m.nativeName}(${i})`
      });
    });
  }
  addSelectedElement(element) {
    this.onValueSet.emit(element.key);
  }
  keyDown(e) {
    if (e.keyCode === 13) {
      let filtered = new SearchPipe().transform(this.dcmTags, this.filter);
      if (filtered.length > 0) {
        this.onValueSet.emit(filtered[0].key);
      }
    }
  }
  close() {
    this.onValueSet.emit("");
  }
}, _a4.ctorParameters = () => [], _a4.propDecorators = {
  dictionary: [{
    type: Input
  }],
  formelement: [{
    type: Input
  }],
  onValueSet: [{
    type: Output
  }]
}, _a4);
LanguagePickerComponent = __decorate([Component({
  selector: "language-picker",
  template: language_picker_component_default,
  imports: [FormsModule, CommonModule, SearchPipe],
  standalone: true,
  styles: [language_picker_component_default2]
})], LanguagePickerComponent);

// angular:jit:template:src\app\widgets\attribute-info\attribute-info.component.html
var attribute_info_component_default = '<span class="attribute_info">{{attributeName}}</span>';

// angular:jit:style:src\app\widgets\attribute-info\attribute-info.component.css
var attribute_info_component_default2 = "/* src/app/widgets/attribute-info/attribute-info.component.css */\n.attribute_info {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 3px 10px;\n  font-size: 12px;\n  position: absolute;\n  left: 0;\n  bottom: 33px;\n  -webkit-box-shadow: 2px 4px 4px #ccc;\n  -moz-box-shadow: 2px 4px 4px #ccc;\n  box-shadow: 2px 4px 4px #ccc;\n}\n";

// src/app/widgets/attribute-info/attribute-info.component.ts
var _a5;
var AttributeInfoComponent = (_a5 = class {
  constructor() {}
  ngOnInit() {
    switch (this.dictionary) {
      case "dcmTag":
        this.attributeName = DCM4CHE.elementName.forTag(this.value);
        break;
      case "dcmTransferSyntax":
        this.attributeName = DCM4CHE.TransferSyntax.nameOf(this.value);
        break;
      case "dcmSOPClass":
        this.attributeName = DCM4CHE.SOPClass.nameOf(this.value);
        break;
    }
  }
}, _a5.ctorParameters = () => [], _a5.propDecorators = {
  value: [{
    type: Input
  }],
  dictionary: [{
    type: Input
  }]
}, _a5);
AttributeInfoComponent = __decorate([Component({
  selector: "attribute-info",
  template: attribute_info_component_default,
  standalone: true,
  styles: [attribute_info_component_default2]
})], AttributeInfoComponent);

// angular:jit:template:src\app\widgets\schedule-picker\schedule-picker.component.html
var schedule_picker_component_default = `<div class="schedulepicker">\r
    <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r
    <h4 i18n="@@schedule-picker.schedule_picker">Schedule picker</h4>\r
    <div class="dropped_schedules"\r
          (dragleave)="dragleave($event)"\r
    >\r
        <!--{{draggedElements | json}}-->\r
        <div class="drop_info" *ngIf="draggedElements.length == 0" i18n="@@schedule-picker.drop_here_some_element">Drop here some element to edit</div>\r
        <div class="dragged_elements {{item.mode}}" [ngSwitch]="item.mode" *ngFor="let item of draggedElements; let i = index">\r
                <div *ngSwitchCase="'single_hour'" class="element single">\r
                    <select name="single_hour" id="single_hour" [(ngModel)]="item.model">\r
                        <option value="*">*</option>\r
                        <option value="0">00</option>\r
                        <option value="1">01</option>\r
                        <option value="2">02</option>\r
                        <option value="3">03</option>\r
                        <option value="4">04</option>\r
                        <option value="5">05</option>\r
                        <option value="6">06</option>\r
                        <option value="7">07</option>\r
                        <option value="8">08</option>\r
                        <option value="9">09</option>\r
                        <option value="10">10</option>\r
                        <option value="11">11</option>\r
                        <option value="12">12</option>\r
                        <option value="13">13</option>\r
                        <option value="14">14</option>\r
                        <option value="15">15</option>\r
                        <option value="16">16</option>\r
                        <option value="17">17</option>\r
                        <option value="18">18</option>\r
                        <option value="19">19</option>\r
                        <option value="20">20</option>\r
                        <option value="21">21</option>\r
                        <option value="22">22</option>\r
                        <option value="23">23</option>\r
                        <option value="24">24</option>\r
                    </select>\r
                </div>\r
                <div *ngSwitchCase="'hour_range'" class="element range">\r
                    <select name="hour_range1" id="hour_range1" [(ngModel)]="item.model.model1">\r
                        <option value="0">00</option>\r
                        <option value="1">01</option>\r
                        <option value="2">02</option>\r
                        <option value="3">03</option>\r
                        <option value="4">04</option>\r
                        <option value="5">05</option>\r
                        <option value="6">06</option>\r
                        <option value="7">07</option>\r
                        <option value="8">08</option>\r
                        <option value="9">09</option>\r
                        <option value="10">10</option>\r
                        <option value="11">11</option>\r
                        <option value="12">12</option>\r
                        <option value="13">13</option>\r
                        <option value="14">14</option>\r
                        <option value="15">15</option>\r
                        <option value="16">16</option>\r
                        <option value="17">17</option>\r
                        <option value="18">18</option>\r
                        <option value="19">19</option>\r
                        <option value="20">20</option>\r
                        <option value="21">21</option>\r
                        <option value="22">22</option>\r
                        <option value="23">23</option>\r
                        <option value="24">24</option>\r
                    </select>\r
                    <span class="split">-</span>\r
                    <select name="hour_range2" id="hour_range2" [(ngModel)]="item.model.model2">\r
                        <option value="0">00</option>\r
                        <option value="1">01</option>\r
                        <option value="2">02</option>\r
                        <option value="3">03</option>\r
                        <option value="4">04</option>\r
                        <option value="5">05</option>\r
                        <option value="6">06</option>\r
                        <option value="7">07</option>\r
                        <option value="8">08</option>\r
                        <option value="9">09</option>\r
                        <option value="10">10</option>\r
                        <option value="11">11</option>\r
                        <option value="12">12</option>\r
                        <option value="13">13</option>\r
                        <option value="14">14</option>\r
                        <option value="15">15</option>\r
                        <option value="16">16</option>\r
                        <option value="17">17</option>\r
                        <option value="18">18</option>\r
                        <option value="19">19</option>\r
                        <option value="20">20</option>\r
                        <option value="21">21</option>\r
                        <option value="22">22</option>\r
                        <option value="23">23</option>\r
                        <option value="24">24</option>\r
                    </select>\r
                </div>\r
                <div *ngSwitchCase="'single_day'" class="element single">\r
                    <select name="single_day" id="single_day" [(ngModel)]="item.model">\r
                        <option value="*">*</option>\r
                        <option value="1" i18n="@@monday">Monday</option>\r
                        <option value="2" i18n="@@tuesday">Tuesday</option>\r
                        <option value="3" i18n="@@wednesday">Wednesday</option>\r
                        <option value="4" i18n="@@thursday">Thursday</option>\r
                        <option value="5" i18n="@@friday">Friday</option>\r
                        <option value="6" i18n="@@saturday">Saturday</option>\r
                        <option value="0" i18n="@@sunday">Sunday</option>\r
                    </select>\r
                </div>\r
                <div *ngSwitchCase="'day_range'" class="element range">\r
                    <select name="day_range1" id="day_range1" [(ngModel)]="item.model.model1">\r
                        <option value="1" i18n="@@monday">Monday</option>\r
                        <option value="2" i18n="@@tuesday">Tuesday</option>\r
                        <option value="3" i18n="@@wednesday">Wednesday</option>\r
                        <option value="4" i18n="@@thursday">Thursday</option>\r
                        <option value="5" i18n="@@friday">Friday</option>\r
                        <option value="6" i18n="@@saturday">Saturday</option>\r
                        <option value="0" i18n="@@sunday">Sunday</option>\r
                    </select>\r
                    <span class="split">-</span>\r
                    <select name="day_range2" id="day_range2" [(ngModel)]="item.model.model2">\r
                        <option value="1" i18n="@@monday">Monday</option>\r
                        <option value="2" i18n="@@tuesday">Tuesday</option>\r
                        <option value="3" i18n="@@wednesday">Wednesday</option>\r
                        <option value="4" i18n="@@thursday">Thursday</option>\r
                        <option value="5" i18n="@@friday">Friday</option>\r
                        <option value="6" i18n="@@saturday">Saturday</option>\r
                        <option value="0" i18n="@@sunday">Sunday</option>\r
                    </select>\r
                </div>\r
                <div class="delete_schedule" (click)="deleteDropped(i)"><i class="glyphicon glyphicon-remove"></i></div>\r
            </div>\r
    </div>\r
    <div class="schedule_drodown_buttons">\r
        <div (dragstart)="dragstart($event,'single_hour')" draggable="true" class="button clock">\r
            <div class="text" i18n="@@single_hour">Single hour</div>\r
        </div>\r
        <div (dragstart)="dragstart($event,'hour_range')" draggable="true" class="button clock_range">\r
            <div class="text" i18n="@@hour_range">Hour range</div>\r
        </div>\r
        <div (dragstart)="dragstart($event,'single_day')" draggable="true" class="button calendar">\r
            <div class="text" i18n="@@single_day">Single day</div>\r
        </div>\r
        <div (dragstart)="dragstart($event,'day_range')" draggable="true" class="button range_calendar">\r
            <div class="text" i18n="@@day_range">Day range</div>\r
        </div>\r
    </div>\r
    <div class="btn_content">\r
        <button class="btn" (click)="addSchedule()" i18n="@@Add">Add</button>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\widgets\schedule-picker\schedule-picker.component.css
var schedule_picker_component_default2 = '/* src/app/widgets/schedule-picker/schedule-picker.component.css */\n.schedulepicker {\n  max-height: 500px;\n  overflow: auto;\n  position: absolute;\n  z-index: 1001;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px 6px #cccccc;\n  -moz-box-shadow: 3px 4px 8px 6px #cccccc;\n  box-shadow: 3px 4px 8px 6px #cccccc;\n  padding: 20px 30px;\n  width: 635px;\n}\n.schedulepicker .msg {\n  float: left;\n  margin: 20px 0 0px 0;\n  width: 100%;\n  font-size: 12px;\n}\n.schedulepicker .close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 13px;\n}\n.schedulepicker .btn_content {\n  width: 100%;\n}\n.schedulepicker .schedule_table > div .input_block {\n  border: 1px solid #ddd;\n  padding: 10px 5px;\n}\n.schedulepicker .schedule_table .add {\n  float: right;\n  color: #777;\n  width: 100%;\n  border: 1px solid #ccc;\n  margin-top: 2px;\n  height: 30px;\n  vertical-align: middle;\n  line-height: 30px;\n  text-align: center;\n  position: relative;\n}\n.schedulepicker .schedule_table .add i {\n  position: absolute;\n  left: 38%;\n  top: 2px;\n}\n.schedulepicker .schedule_table .add:hover {\n  cursor: pointer;\n  background: rgba(6, 29, 47, 0.84);\n  color: white;\n}\n.schedulepicker .form_block {\n  width: 81%;\n  float: left;\n}\n.schedulepicker .form_block > div {\n  width: 49%;\n  float: left;\n}\n.schedulepicker .form_block > div .input_block input {\n  width: 49%;\n}\n.schedulepicker .schedule_table .change_buttons > div {\n  padding-right: 8px;\n  font-weight: 600;\n  background: #ddd;\n  text-align: center;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n}\n.schedulepicker .schedule_table .change_buttons {\n  width: 17%;\n  padding: 0;\n  float: left;\n}\n.schedulepicker .schedule_table .change_buttons > div:hover {\n  background: #aaaaaa;\n  cursor: pointer;\n}\n.schedulepicker .form_block > .hour_block,\n.schedulepicker .form_block > .single_block {\n  padding: 9px 7px;\n}\n.schedulepicker .dropped_schedules {\n  float: left;\n  width: 450px;\n  padding: 15px 10px;\n  margin-right: 10px;\n  height: 360px;\n  border: 1px solid #cccccc;\n}\n.schedulepicker .schedule_drodown_buttons {\n  display: block;\n  width: 100px;\n  float: left;\n}\n.schedulepicker .schedule_drodown_buttons .button {\n  width: 100px;\n  display: block;\n  height: 80px;\n  position: relative;\n  margin-bottom: 10px;\n  border: 1px solid transparent;\n}\n.schedulepicker .schedule_drodown_buttons .button:hover {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n  -webkit-box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.42);\n  -moz-box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.42);\n  box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.42);\n}\n.schedulepicker .dragged_elements .delete_schedule {\n  float: right;\n  display: block;\n  text-align: center;\n  width: 5%;\n  padding-left: 5px;\n}\n.schedulepicker .dragged_elements .delete_schedule:hover {\n  cursor: pointer;\n}\n.schedulepicker .dragged_elements {\n  float: left;\n  width: 100%;\n  background: rgba(6, 29, 47, 0.84);\n  padding: 5px 5px;\n  margin-bottom: 5px;\n  color: white;\n}\n.schedulepicker .dragged_elements .element select,\n.schedulepicker .dragged_elements .element option {\n  background: white;\n  color: black;\n}\n.schedulepicker .dragged_elements .element.single select {\n  width: 100%;\n}\n.schedulepicker .dragged_elements .element.range select {\n  width: 48%;\n  float: left;\n}\n.schedulepicker .dragged_elements .element.range .split {\n  width: 4%;\n  float: left;\n  display: inline-block;\n  text-align: center;\n}\n.schedulepicker .dragged_elements .element {\n  width: 95%;\n  float: left;\n}\n.schedulepicker .schedule_drodown_buttons .button:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n.schedulepicker .schedule_drodown_buttons .button .text {\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  color: black;\n}\n.schedulepicker .schedule_drodown_buttons .button.calendar {\n  background: url("./media/calendar.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.calendar:hover {\n  background: url("./media/calendar_hover.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.clock {\n  background: url("./media/clock.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.clock:hover {\n  background: url("./media/clock_hover.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.range_calendar {\n  background: url("./media/range_calendar.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.range_calendar:hover {\n  background: url("./media/range_calendar_hover.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.clock_range {\n  background: url("./media/range_clock.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .schedule_drodown_buttons .button.clock_range:hover {\n  background: url("./media/range_clock_hover.png");\n  background-repeat: no-repeat;\n  background-position: center 5px;\n}\n.schedulepicker .drop_info {\n  font-size: 20px;\n  color: #777;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 300px;\n}\n';

// src/app/widgets/schedule-picker/schedule-picker.component.ts
var _a6;
var SchedulePickerComponent = (_a6 = class {
  constructor() {
    this.onValueSet = new EventEmitter();
    this.draggedElements = [];
  }
  ngOnInit() {
    let match;
    let matchArray = [];
    let match2;
    let ptrn = /(hour)=([\d|\d-\d|\*|\,]*)|(dayOfWeek)=([\d|\d-\d|\*|\,]*)/g;
    let ptrn2 = /(\d+)-(\d+)|(\d+)|\*/g;
    try {
      while ((match = ptrn.exec(this.value)) != null) {
        matchArray.push(match);
      }
      if (hasIn_default(matchArray, "[0][1]") && matchArray[0][1]) {
        while ((match2 = ptrn2.exec(matchArray[0][2])) != null) {
          if (match2[1] && match2[2]) {
            let newObject = this.generateDraggableObject(matchArray[0][1], match2);
            if (newObject) this.draggedElements.push(newObject);
          }
          if (match2[3] && !match2[1] && !match2[2]) {
            let newObject = this.generateDraggableObject(matchArray[0][1], match2);
            if (newObject) this.draggedElements.push(newObject);
          }
        }
      }
      if (hasIn_default(matchArray, "[1][3]") && matchArray[1][3]) {
        while ((match2 = ptrn2.exec(matchArray[1][4])) != null) {
          if (match2[1] && match2[2]) {
            let newObject = this.generateDraggableObject(matchArray[1][3], match2);
            if (newObject) this.draggedElements.push(newObject);
          }
          if (match2[3] && !match2[1] && !match2[2]) {
            let newObject = this.generateDraggableObject(matchArray[1][3], match2);
            if (newObject) this.draggedElements.push(newObject);
          }
        }
      }
    } catch (e) {
      console.error("error parsing data!", e);
    }
    document.addEventListener("dragend", function (event) {
      console.log("in addevent dragend");
    }, false);
  }
  generateDraggableObject(mode, match2) {
    if (match2[1] && match2[2]) {
      return {
        mode: mode === "hour" ? "hour_range" : "day_range",
        model: {
          model1: match2[1],
          model2: match2[2]
        }
      };
    }
    if (match2[3] && !match2[1] && !match2[2]) {
      return {
        mode: mode === "hour" ? "single_hour" : "single_day",
        model: match2[3]
      };
    }
    return null;
  }
  addSchedule() {
    this.onValueSet.emit(this.generateSchedule());
  }
  close() {
    this.onValueSet.emit("");
  }
  generateSchedule() {
    let scheduler = {
      hour: "",
      dayOfWeek: ""
    };
    forEach_default(this.draggedElements, (m, i) => {
      switch (m.mode) {
        case "single_hour":
          if (isString_default(m.model)) scheduler.hour = scheduler.hour + (scheduler.hour != "" ? "," : "") + m.model;
          break;
        case "single_day":
          if (isString_default(m.model)) scheduler.dayOfWeek = scheduler.dayOfWeek + (scheduler.dayOfWeek != "" ? "," : "") + m.model;
          break;
        case "hour_range":
          if (isString_default(m.model.model1) && isString_default(m.model.model2)) scheduler.hour = scheduler.hour + (scheduler.hour != "" ? "," : "") + m.model.model1 + "-" + m.model.model2;
          break;
        case "day_range":
          if (isString_default(m.model.model1) && isString_default(m.model.model2)) scheduler.dayOfWeek = scheduler.dayOfWeek + (scheduler.dayOfWeek != "" ? "," : "") + m.model.model1 + "-" + m.model.model2;
          break;
      }
    });
    return (scheduler.hour ? `hour=${scheduler.hour}` : "") + (scheduler.hour && scheduler.dayOfWeek ? " " : "") + (scheduler.dayOfWeek ? `dayOfWeek=${scheduler.dayOfWeek}` : "");
  }
  dragleave(ev) {
    console.log("dropleave", ev);
    if (this.currentDraggedElement != "") {
      this.draggedElements.push(this.currentDraggedElement);
      this.currentDraggedElement = "";
    }
  }
  dragstart(ev, mode) {
    ev.dataTransfer.setData("text", "foo");
    this.currentDraggedElement = {
      mode,
      model: {}
    };
  }
  deleteDropped(item) {
    this.draggedElements.splice(item, 1);
  }
}, _a6.ctorParameters = () => [], _a6.propDecorators = {
  onValueSet: [{
    type: Output
  }],
  value: [{
    type: Input
  }]
}, _a6);
SchedulePickerComponent = __decorate([Component({
  selector: "schedule-picker",
  template: schedule_picker_component_default,
  imports: [NgSwitch, FormsModule, NgSwitchCase, CommonModule],
  standalone: true,
  styles: [schedule_picker_component_default2]
})], SchedulePickerComponent);

// angular:jit:template:src\app\widgets\dynamic-field\dynamic-field.component.html
var dynamic_field_component_default = `<p *ngIf="loader" i18n="@@loading">\r
  loading...\r
</p>\r
<div *ngIf="!loader && elements">\r
  <div class="checkbox_parent" [ngClass]="{'long_mode':longMode}" *ngIf="type === 'array'" #checkboxes>\r
      <input *ngIf="longMode" type="text" [(ngModel)]="search" i18n-placeholder="@@search_list" placeholder="Search list...">\r
      <div *ngFor="let element of elements|search:search"><input type="checkbox" [(ngModel)]="model[element[key]]" (change)="valueChanged()"> {{element[key]}}<br/></div>\r
      <span class="glyphicon glyphicon-exclamation-sign raw_warning_button" *ngIf="warning" (click)="showRawValues()"></span>\r
      <div *ngIf="showRaw" class="raw_array_edit">\r
          <p i18n="@@daemon_value_found">Daemon value found, you can remove it manually from the value array:</p>\r
          <div class="array_body">\r
            <ng-container *ngFor="let c of Object.keys(model)">\r
                <div class="array_element">"{{c}}",</div><div class="button"><div class="button_content"><a class="delete button" (click)="deleteElement(c)"><i class="glyphicon glyphicon-remove"></i></a></div></div><br>\r
            </ng-container>\r
          </div>\r
      </div>\r
  </div>\r
  <div class="dropdown_parent" *ngIf="type === 'string'">\r
    <select (change)="valueChanged()" class="dropdown" [(ngModel)]="model">\r
      <option value="">-</option>\r
      <option value="{{element[key]}}" *ngFor="let element of elements">{{element[key]}}</option>\r
    </select>\r
<!--      <mat-select  (change)="valueChanged()" class="dropdown" [(ngModel)]="model">\r
          <mat-option value="">-</mat-option>\r
          <mat-option *ngFor="let element of elements" [value]="element[key]">{{element[key]}}</mat-option>\r
      </mat-select>-->\r
  </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dynamic-field\dynamic-field.component.scss
var dynamic_field_component_default2 = "/* src/app/widgets/dynamic-field/dynamic-field.component.scss */\n.raw_array_edit .array_element {\n  width: calc(100% - 42px);\n  float: left;\n  padding-left: 15px;\n  border-bottom: 1px solid #ccc;\n  height: 30px;\n  margin-bottom: 5px;\n  line-height: 30px;\n}\n.raw_warning_button:hover {\n  cursor: pointer;\n}\n.array_body {\n  border: 1px solid #cccccc;\n  padding: 10px 10px 5px 10px;\n  float: left;\n  width: 100%;\n}\n";

// src/app/widgets/dynamic-field/dynamic-field.service.ts
var _a7;
var DynamicFieldService = (_a7 = class {
  constructor(mainservice, deviceService, aeListService, hl7service, webAppListService) {
    this.mainservice = mainservice;
    this.deviceService = deviceService;
    this.aeListService = aeListService;
    this.hl7service = hl7service;
    this.webAppListService = webAppListService;
  }
  getDevice() {
    if (hasIn_default(this.mainservice.global, "devices")) {
      return of(this.mainservice.global.devices);
    } else {
      return this.deviceService.getDevices();
    }
  }
  getAets() {
    if (hasIn_default(this.mainservice.global, "aes")) {
      return of(this.mainservice.global.aes);
    } else {
      return this.aeListService.getAes();
    }
  }
  getHl7() {
    if (hasIn_default(this.mainservice.global, "hl7")) {
      return of(this.mainservice.global.hl7);
    } else {
      return this.hl7service.getHl7ApplicationsList("");
    }
  }
  getWebApp() {
    if (hasIn_default(this.mainservice.global, "webApp")) {
      return of(this.mainservice.global.webApp);
    } else {
      return this.webAppListService.getWebApps();
    }
  }
}, _a7.ctorParameters = () => [{
  type: AppService
}, {
  type: DevicesService
}, {
  type: AeListService
}, {
  type: Hl7ApplicationsService
}, {
  type: WebAppsListService
}], _a7);
DynamicFieldService = __decorate([Injectable()], DynamicFieldService);

// src/app/widgets/dynamic-field/dynamic-field.component.ts
var _a8;
var DynamicFieldComponent = (_a8 = class {
  constructor(service, ref) {
    this.service = service;
    this.ref = ref;
    this.loader = false;
    this.model = {};
    this.key = "";
    this.longMode = false;
    this.search = "";
    this.warning = false;
    this.showRaw = false;
    this.Object = Object;
    this.onValueChange = new EventEmitter();
  }
  ngOnInit() {
    switch (this.mode) {
      case "dcmAETitle":
        this.key = "dicomAETitle";
        this.getObject("getAets");
        break;
      case "webApp":
        this.key = "dcmWebAppName";
        this.getObject("getWebApp");
        break;
      case "dicomDeviceName":
        this.key = "dicomDeviceName";
        this.getObject("getDevice");
        break;
      case "hl7ApplicationName":
        this.key = "hl7ApplicationName";
        this.getObject("getHl7");
        break;
    }
    console.log("elements", this.elements);
  }
  valueChanged() {
    if (this.type === "array") this.onValueChange.emit(Object.keys(this.model).filter(key => {
      return this.model[key];
    }));else this.onValueChange.emit(this.model);
  }
  showRawValues() {
    this.showRaw = !this.showRaw;
  }
  getObject(functionName) {
    if (Array.isArray(this.checked)) {
      this.checked = this.checked || [];
      this.checked.forEach(element => {
        if (element != "") this.model[element] = true;
      });
      this.type = "array";
    } else {
      this.checked = this.checked || "";
      this.model = this.checked;
      this.type = "string";
    }
    this.loader = true;
    this.service[functionName]().subscribe(res => {
      this.elements = res;
      this.loader = false;
      console.log("element", this.elements);
      console.log("element", this.model);
      console.log("checked", this.checked);
      if (this.checked && isArray_default(this.checked) && this.checked.length > 1) {
        this.checked.forEach(c => {
          let found = false;
          this.elements.forEach(e => {
            if (c === e[this.key]) {
              found = true;
            }
          });
          if (!found) {
            this.warning = true;
          }
        });
      }
      if (this.type === "array" && isArray_default(this.elements) && this.elements.length > 5) {
        this.longMode = true;
      }
      this.detectChanges();
      if (this.type === "array" && this.elementView && this.elementView.nativeElement) {
        let height = this.elementView.nativeElement.offsetHeight;
        if (height > 200) {
          this.longMode = true;
          this.detectChanges();
        }
      }
    }, err => {
      this.loader = false;
    });
  }
  detectChanges() {
    if (!(hasIn_default(this.ref, "destroyed") && get_default(this.ref, "destroyed"))) {
      this.ref.detectChanges();
    }
  }
  /*    update(){
          console.log("this.checked",this.checked);
          this.checked.forEach(element =>{
              if(element != "")
                  this.model[element] = true;
          });
      }*/
  deleteElement(e) {
    var index = this.checked.indexOf(e);
    if (index !== -1) this.checked.splice(index, 1);
    delete this.model[e];
    this.valueChanged();
  }
}, _a8.ctorParameters = () => [{
  type: DynamicFieldService
}, {
  type: ChangeDetectorRef
}], _a8.propDecorators = {
  checked: [{
    type: Input
  }],
  mode: [{
    type: Input
  }],
  onValueChange: [{
    type: Output
  }],
  type: [{
    type: Input
  }],
  elementView: [{
    type: ViewChild,
    args: ["checkboxes", {
      static: true
    }]
  }]
}, _a8);
DynamicFieldComponent = __decorate([Component({
  selector: "dynamic-field",
  template: dynamic_field_component_default,
  imports: [NgClass, FormsModule, CommonModule, SearchPipe],
  standalone: true,
  styles: [dynamic_field_component_default2]
})], DynamicFieldComponent);

// angular:jit:template:src\app\widgets\dcm-select\dcm-select.component.html
var dcm_select_component_default = `<div class="option" >\r
    <input class="toggle_button" [(ngModel)]="selectedElement" (click)="selectOpen = !selectOpen" placeholder="{{placeholder}}"/>\r
    <div class="toggle_block" *ngIf="selectOpen" (clickOutside)='selectOpen = !selectOpen' [clickOutsideExceptionClass]="['toggle_button', 'option']">\r
        <!--<span class="selected_element">{{selectedElement}}</span>-->\r
        <input *ngIf="options && options.length > 6" type="text" [(ngModel)]="search" i18n-placeholder="@@search_dot" placeholder="Search...">\r
        <ul>\r
            <li *ngFor="let select of options|search:search">\r
                <ng-template [ngTemplateOutlet]="templ" [ngTemplateOutletContext]="{select: select}">\r
                    <span (click)="selectedElement=select.value">{{select.title}}</span>\r
                </ng-template>\r
            </li>\r
        </ul>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\widgets\dcm-select\dcm-select.component.scss
var dcm_select_component_default2 = "/* src/app/widgets/dcm-select/dcm-select.component.scss */\ndcm-select {\n  display: inline-block;\n}\n.option {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.option .toggle_button {\n  height: 26px;\n  line-height: 26px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0 7px;\n  color: #cccccc;\n  line-height: 26px;\n  font-style: italic;\n  color: #666;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: transparent;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.option .toggle_button:hover {\n  cursor: pointer;\n}\n.option .toggle_block {\n  background: white;\n  z-index: 999;\n  min-width: 100%;\n  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.78);\n  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.78);\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.78);\n  position: absolute;\n}\n.option .toggle_block input {\n  margin: 5px 7px;\n}\n.option .toggle_block ul {\n  max-height: 200px;\n  overflow: auto;\n  padding: 0;\n  list-style: none;\n  margin: 0;\n}\n.option .toggle_block ul li {\n  border-top: 1px solid #ccc;\n  padding: 0 0 0 7px;\n  width: 100%;\n  height: 30px;\n}\n.option .toggle_block ul li:hover {\n  background: var(--lightBlueNoTransparence);\n  color: white;\n  cursor: pointer;\n}\n";

// src/app/widgets/dcm-select/dcm-select.component.ts
var _a9;
var DcmSelectComponent = (_a9 = class {
  constructor() {
    this.selectOpen = false;
    this.search = "";
  }
  ngOnInit() {}
}, _a9.ctorParameters = () => [], _a9.propDecorators = {
  templ: [{
    type: ContentChild,
    args: [TemplateRef, {
      static: true
    }]
  }],
  options: [{
    type: Input
  }],
  placeholder: [{
    type: Input
  }]
}, _a9);
DcmSelectComponent = __decorate([Component({
  selector: "dcm-select",
  template: dcm_select_component_default,
  imports: [FormsModule, NgTemplateOutlet, ClickOutsideDirective, CommonModule, SearchPipe],
  standalone: true,
  styles: [dcm_select_component_default2]
})], DcmSelectComponent);

// src/app/widgets/dynamicform/dynamic-form-element.component.ts
var _a10;
var DynamicFormElementComponent = (_a10 = class {
  constructor(formservice, formcomp, elementRef, router, deviceConfiguratorService, dialog, viewContainerRef, $http, ref, mainservice, controlService, j4care2, _fb, _keycloakService) {
    this.formservice = formservice;
    this.formcomp = formcomp;
    this.router = router;
    this.deviceConfiguratorService = deviceConfiguratorService;
    this.dialog = dialog;
    this.viewContainerRef = viewContainerRef;
    this.$http = $http;
    this.ref = ref;
    this.mainservice = mainservice;
    this.controlService = controlService;
    this.j4care = j4care2;
    this._fb = _fb;
    this._keycloakService = _keycloakService;
    this.search = new UntypedFormControl("");
    this.$localize = $localize;
    this.partRemoved = false;
  }
  ngOnInit() {
    this.mainservice.getUser().subscribe(user => {
      this.user = user;
    });
  }
  get isValid() {
    return this.form.controls[this.formelement.key].valid;
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  downloadFile(url) {
    if (!this.readOnlyMode) {
      let token;
      if (this.mainservice.global.notSecure) {
        WindowRefService.nativeWindow.open(url);
      } else {
        this._keycloakService.getToken().subscribe(response => {
          token = response.token;
          WindowRefService.nativeWindow.open(url + `?access_token=${token}`);
        });
      }
    }
  }
  deleteFile(deviceName, formelement) {
    if (!this.readOnlyMode) {
      let $this = this;
      this.confirm({
        content: "Are you sure you want to delete the vendor data of this device?"
      }).subscribe(result => {
        if (result) {
          console.log("delete file form device", deviceName);
          $this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${deviceName}/vendordata`).subscribe(res => {
            console.log("deleted successfully");
            console.log("formelements", $this.formelements);
            console.log("formelement", $this.formelement);
            let test = {
              controlType: "filedownload",
              description: "Device specific vendor configuration information",
              deviceName: "Testdevi2",
              downloadUrl: "../devices/Testdevi2/vendordata",
              key: "dicomVendorData",
              label: "Vendor Device Data",
              order: 5.02,
              show: true
            };
            let test2 = {
              controlType: "fileupload",
              description: "Device specific vendor configuration information",
              deviceName: "Testdevi2",
              key: "dicomVendorData",
              label: "Vendor Device Data",
              modus: "upload",
              order: 5.02,
              show: true
            };
            console.log(formelement);
            $this.deviceConfiguratorService.device = {};
            $this.deviceConfiguratorService.schema = {};
            $this.router.navigateByUrl("blank").then(() => {
              $this.router.navigateByUrl(`/device/edit/${deviceName}`);
            });
          });
        }
      });
    }
  }
  replaceFile(deviceName) {
    if (!this.readOnlyMode) {
      let $this = this;
      this.confirm({
        content: "Are you sure you want to replace the vendor data of this device?"
      }).subscribe(result => {
        if (result) {
          this.uploadVendor(deviceName);
        }
      });
    }
  }
  uploadVendor(deviceName) {
    if (!this.readOnlyMode) {
      let $this = this;
      this.dialogRef = this.dialog.open(UploadVendorComponent, {
        height: "auto",
        width: "500px"
      });
      this.dialogRef.componentInstance.deviceName = deviceName;
      this.dialogRef.afterClosed().subscribe(selected => {
        if (selected) {
          console.log($this.formelements);
          $this.deviceConfiguratorService.device = {};
          $this.deviceConfiguratorService.schema = {};
          $this.controlService.reloadArchive().subscribe(res => {
            $this.mainservice.showMsg("Archive reloaded successfully!");
            $this.router.navigateByUrl("blank").then(() => {
              $this.router.navigateByUrl(`/device/edit/${deviceName}`);
            });
          }, err => {
            $this.router.navigateByUrl("blank").then(() => {
              $this.router.navigateByUrl(`/device/edit/${deviceName}`);
            });
          });
        }
      });
    }
  }
  addElement(element, formpart, control) {
    if (!this.readOnlyMode) {
      let globalForm = this.formcomp.getForm();
      let valueObject = globalForm.value;
      element.push(element[0]);
      formpart["options"].push(formpart["options"][0]);
      this.form = this.formservice.toFormGroup(this.formelements);
      this.formcomp.setForm(this.form);
      this.formcomp.setFormModel(valueObject);
    }
  }
  removeObject(formelement, controls) {
    if (!this.readOnlyMode) {
      let $this = this;
      this.confirm({
        content: "Are you sure you want to remove this extension and all of its child objects?"
      }).subscribe(result => {
        if (result) {
          $this.deviceConfiguratorService.removeExtensionFromDevice(formelement.devicereff);
          forEach_default($this.formelements, (m, i) => {
            if (m["controlType"] === "button" && m["devicereff"] === formelement.devicereff) {
              m.value = 0;
            }
          });
          $this.ref.detectChanges();
        }
      });
    }
  }
  extractIndexFromPath(path) {
    if (endsWith_default(path, "]")) {
      try {
        let indexStart = path.lastIndexOf("[");
        let index = path.substring(indexStart);
        index = replace_default(index, "[", "");
        index = replace_default(index, "]", "");
        let clearPath = path.substring(0, indexStart);
        return {
          index,
          path: clearPath
        };
      } catch (e) {
        return null;
      }
    } else {
      if (startsWith_default(path, "/dicomNetworkConnection/")) {
        try {
          let indexStart = path.lastIndexOf("/");
          let index = path.substring(indexStart);
          index = replace_default(index, "/", "");
          return index;
        } catch (e) {
          return null;
        }
      }
    }
  }
  removePart(formelement, selected) {
    if (!this.readOnlyMode) {
      let $this = this;
      let globalForm = this.formcomp.getForm();
      this.confirm({
        content: "Are you sure you want to remove this part from device?"
      }).subscribe(ok => {
        if (ok) {
          let toRemoveIndex;
          new OrderByPipe().transform(formelement.options, "refString");
          forEach_default(formelement.options, (m, i) => {
            if (m.title === selected.title) {
              toRemoveIndex = i;
            }
          });
          if (formelement.key === "dicomNetworkConnection" && $this.isReferenceUsed($this.deviceConfiguratorService.device, toRemoveIndex)) {
            $this.mainservice.showWarning("This element is referenced, remove references first then you can delete this element!");
          } else {
            let newAddUrl = formelement.options[formelement.options.length - 1].url;
            formelement.options.splice(toRemoveIndex, 1);
            let check = $this.deviceConfiguratorService.removePartFromDevice($this.extractIndexFromPath(selected.currentElementUrl));
            if (check) {
              $this.partRemoved = true;
              $this.mainservice.showMsg("Element removed from object successfully!");
              $this.mainservice.setMessage({
                "title": "Click to save",
                "text": "Click save if you want to remove \"" + selected.title + "\n\" permanently!",
                "status": "warning"
              });
              formelement.addUrl = newAddUrl;
              if (formelement.key === "dicomNetworkConnection") {
                $this.updateReferences($this.deviceConfiguratorService.device, toRemoveIndex);
              }
            }
            formelement.options.forEach((m, i) => {
              if (toRemoveIndex <= i) {
                const index = toInteger_default(i);
                let pathObject = $this.extractIndexFromPath(formelement.options[index].currentElementUrl);
                let oldCurrentElementUrl = formelement.options[index].currentElementUrl;
                formelement.options[index].currentElementUrl = `${pathObject.path}[${pathObject.index - 1}]`;
                formelement.options[index].url = replace_default(formelement.options[index].url, oldCurrentElementUrl, formelement.options[index].currentElementUrl);
                if (formelement.key === "dicomNetworkConnection") {
                  formelement.options[index].refString = `/dicomNetworkConnection/${pathObject.index - 1}`;
                }
              }
            });
          }
          new OrderByPipe().transform(formelement.options, "title");
          $this.ref.detectChanges();
        }
      });
    }
  }
  //Update DicomNetworkConnection reference index
  updateReferences(o, removedDicomNetworkConnectionIndex) {
    for (let i in o) {
      if (i === "dicomNetworkConnectionReference") {
        for (let index in o[i]) {
          let extracedIndex = this.extractIndexFromPath(o[i][index]);
          if (extracedIndex > removedDicomNetworkConnectionIndex) {
            o[i][index] = `/dicomNetworkConnection/${parseInt(extracedIndex) - 1}`;
          }
        }
      }
      if (o[i] !== null && typeof o[i] == "object") {
        this.updateReferences(o[i], removedDicomNetworkConnectionIndex);
      }
    }
  }
  isReferenceUsed(o, index) {
    let check = {
      used: false
    };
    this._isReferenceUsed(o, index, check);
    return check.used;
  }
  _isReferenceUsed(o, index, check) {
    for (let i in o) {
      if (i === "dicomNetworkConnectionReference") {
        for (let reffIndex in o[i]) {
          if (this.extractIndexFromPath(o[i][reffIndex]) == index) {
            check.used = true;
          }
        }
      }
      if (o[i] !== null && typeof o[i] == "object") {
        this._isReferenceUsed(o[i], index, check);
      }
    }
  }
  clone(formelement, selected, options) {
    if (!this.readOnlyMode) {
      let cloneUrl = formelement.addUrl + "/" + selected.currentElementUrl;
      this.navigateTo(cloneUrl, options);
    }
  }
  addArrayElement(element, formpart, form) {
    if (!this.readOnlyMode) {
      formpart = formpart || [];
      element = element || [];
      element.push("");
      let globalForm = this.formcomp.getForm();
      formpart.push(new UntypedFormControl(""));
      let valueObject = globalForm.value;
      this.form = this.formservice.toFormGroup(this.formelements);
      this.form.patchValue(valueObject);
      this.formcomp.setForm(this.form);
      this.formcomp.setFormModel(valueObject);
      this.ref.detectChanges();
    }
  }
  removeArrayElement(element, i, form) {
    if (!this.readOnlyMode) {
      if (element.value.length > i) {
        this.form.controls[element.key].removeAt(i);
        forEach_default(this.formelements, (m, j) => {
          if (m.key === element.key) {
            this.formelements[j].value = this.form.value[element.key];
          }
        });
        this.ref.detectChanges();
      }
    }
  }
  checkboxChange(e, formelement) {
    if (!this.readOnlyMode) {
      if (e.target.checked && !hasIn_default(this.form.controls[formelement.key].value, e.target.defaultValue) && !hasIn_default(this.form.controls[formelement.key].getRawValue(), e.target.defaultValue)) {
        this.form.controls[formelement.key].insert(this.form.controls[formelement.key].value.length, new UntypedFormControl(this.tryToConvertValueToInt(e.target.defaultValue)));
      } else {
        this.form.controls[formelement.key].removeAt(indexOf_default(this.form.controls[formelement.key].value, this.tryToConvertValueToInt(e.target.defaultValue)));
      }
    }
  }
  tryToConvertValueToInt(value) {
    try {
      const convertedValue = value * 1;
      if (!isNaN(convertedValue) && typeof convertedValue === "number") {
        return value * 1;
      }
    } catch (e) {}
    return value;
  }
  navigateTo(e, options) {
    if (!this.readOnlyMode) {
      const regex = /\/\S*\/\S*\/(\S*)/;
      let match;
      if (e != "-") {
        if ((match = regex.exec(e)) !== null && match[1]) {
          this.deviceConfiguratorService.allOptions[match[1]] = new OrderByPipe().transform(options, "title");
        }
        this.router.navigateByUrl(e);
      }
    }
  }
  toggleTab(orderId) {
    if (this.form.valid) {
      let globalForm = this.formcomp.getForm();
      let valueObject = globalForm.value;
      forEach_default(this.formelements, (m, i) => {
        if (Math.floor(m.order) === orderId + 1) {
          if (m.show === true) {
            m.show = false;
          } else {
            m.show = true;
          }
        } else {
          m.show = false;
        }
      });
      this.form = this.formservice.toFormGroup(this.formelements);
      this.form.patchValue(valueObject);
      this.formcomp.setForm(this.form);
      this.formcomp.setFormModel(valueObject);
    }
  }
  onValueChange(e, formelement, formcontrol, i) {
    try {
      console.log(`trying to set the new value`, e);
      if (formelement.controlType === "dynamiccheckbox") {
        if (formelement.type === "array") this.form.setControl(formelement.key, this._fb.array(e));else this.form.controls[formelement.key].setValue(e);
      } else {
        if (e && e != "") {
          if (formelement.controlType === "arrayelement") {
            formcontrol[i].setValue(e);
            formelement.value[i] = e;
          } else {
            if (e === "empty") {
              formcontrol.setValue("");
              formelement.value = "";
            } else {
              formcontrol.setValue(e);
              formelement.value = e;
            }
          }
        }
      }
    } catch (ev) {
      console.error("error setting changed value", ev);
    }
    formelement.showPicker = false;
    formelement.showTimePicker = false;
    formelement.showLanguagePicker = false;
    formelement.showPropertyPicker = false;
    formelement.showDurationPicker = false;
    formelement.showSchedulePicker = false;
    formelement.showCharSetPicker = false;
  }
  dropdownChange(formelement, formcontrols) {
    if (formelement.options && formelement.options.length > 0) {
      let oneOptActive = false;
      forEach_default(formelement.options, (m, i) => {
        if (m.value === formcontrols.value) {
          oneOptActive = true;
          m.active = true;
        } else {
          m.active = false;
        }
      });
      if (!oneOptActive && formcontrols.value === "") {
        formcontrols.setValue("");
      }
    }
  }
  getTitleBackup(mode, title) {
    switch (mode) {
      case "remove":
        return "Remove " + title + " extension from device";
      case "append":
        return "Append " + title + " extension to device";
    }
    return "";
  }
  onFocuse(formelement, i = null) {
    if (formelement.format) {
      if (formelement.format === "dcmLanguageChooser") {
        if (i != null) {
          formelement.showLanguagePicker = formelement.showLanguagePicker || {};
          formelement.showLanguagePicker[i] = true;
        } else {
          formelement.showLanguagePicker = true;
        }
      }
      if (formelement.format === "dcmTag" || formelement.format === "dcmTransferSyntax" || formelement.format === "dcmSOPClass" || formelement.format === "dcmProperty") {
        if (i != null) {
          formelement.showPicker = formelement.showPicker || {};
          formelement.showPicker[i] = true;
        } else {
          formelement.showPicker = true;
        }
      }
      if (formelement.format === "dcmTime") {
        if (i != null) {
          formelement.showTimePicker = formelement.showTimePicker || {};
          formelement.showTimePicker[i] = true;
        } else {
          formelement.showTimePicker = true;
        }
      }
      if (formelement.format === "dcmDuration" || formelement.format === "dcmPeriod") {
        if (i != null) {
          formelement.showDurationPicker = formelement.showDurationPicker || {};
          formelement.showDurationPicker[i] = true;
        } else {
          formelement.showDurationPicker = true;
        }
      }
      if (formelement.format === "dcmCharset" || formelement.format === "hl7Charset") {
        if (i != null) {
          formelement.showCharSetPicker = formelement.showCharSetPicker || {};
          formelement.showCharSetPicker[i] = true;
        } else {
          formelement.showCharSetPicker = true;
        }
      }
      if (formelement.format === "dcmSchedule") {
        if (i != null) {
          formelement.showSchedulePicker = formelement.showSchedulePicker || {};
          formelement.showSchedulePicker[i] = true;
        } else {
          formelement.showSchedulePicker = true;
        }
      }
    }
  }
  canSeePermissionBlock(formelement) {
    if (formelement.key === "dcmuiPermission" && !(this.user && this.user.su) && !(this.mainservice.global && this.mainservice.global.notSecure)) {
      let check = true;
      const uiPermissions = get_default(this.deviceConfiguratorService.device, "dcmDevice.dcmuiConfig[0].dcmuiPermission");
      uiPermissions.forEach(permission => {
        let oneOfRolesSet = false;
        permission.dcmAcceptedUserRole.forEach(permissionRoles => {
          this.user.roles.forEach(userRole => {
            if (permissionRoles === userRole) {
              oneOfRolesSet = true;
            }
          });
        });
        check = check && oneOfRolesSet;
      });
      return check;
    } else {
      return true;
    }
  }
  onMouseEnter(formelement, i = null) {
    if (formelement.format === "dcmLanguageChooser") {
      if (i != null) {
        formelement.showPickerTooltipp = formelement.showPickerTooltipp || {};
        formelement.showPickerTooltipp[i] = true;
      } else {
        formelement.showPickerTooltipp = true;
      }
    }
    if (formelement.format) {
      if (formelement.format === "dcmTag" || formelement.format === "dcmTransferSyntax" || formelement.format === "dcmSOPClass" || formelement.format === "dcmLanguageChooser") {
        if (i != null) {
          formelement.showPickerTooltipp = formelement.showPickerTooltipp || {};
          formelement.showPickerTooltipp[i] = true;
        } else {
          formelement.showPickerTooltipp = true;
        }
      }
    }
  }
  onMouseLeave(formelement) {
    formelement.showPickerTooltipp = false;
  }
  ngOnDestroy() {
    this.ref.detach();
  }
}, _a10.ctorParameters = () => [{
  type: FormService
}, {
  type: DynamicFormComponent
}, {
  type: ElementRef
}, {
  type: Router
}, {
  type: DeviceConfiguratorService
}, {
  type: MatDialog
}, {
  type: ViewContainerRef
}, {
  type: J4careHttpService
}, {
  type: ChangeDetectorRef
}, {
  type: AppService
}, {
  type: ControlService
}, {
  type: j4care
}, {
  type: UntypedFormBuilder
}, {
  type: KeycloakService
}], _a10.propDecorators = {
  formelement: [{
    type: Input
  }],
  formelements: [{
    type: Input
  }],
  form: [{
    type: Input
  }],
  partSearch: [{
    type: Input
  }],
  readOnlyMode: [{
    type: Input
  }]
}, _a10);
DynamicFormElementComponent = __decorate([Component({
  selector: "df-element",
  template: dynamic_form_element_component_default,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgClass, NgSwitch, MatSelect, DictionaryPickerComponent, LanguagePickerComponent, AttributeInfoComponent, TimePickerComponent, DurationPickerComponent, SchedulePickerComponent, SpecificCharPickerComponent, DynamicFieldComponent, MatOption, RouterLink, DcmSelectComponent, CommonModule, SearchPipe],
  standalone: true
})], DynamicFormElementComponent);

// src/app/widgets/dynamicform/dynamic-form.component.ts
var _a11;
var DynamicFormComponent = (_a11 = class {
  constructor(formservice, mainservice, route, fb) {
    this.formservice = formservice;
    this.mainservice = mainservice;
    this.route = route;
    this.fb = fb;
    this.formelements = [];
    this.submitFunction = new EventEmitter();
    this.payLoad = "";
    this.partSearch = "";
    this.prevPartSearch = "";
    this.pressedKey = [];
    this.exceptionValidation = false;
  }
  // submi(){
  //     console.log("in submitfunctiondynamicform");
  //     this.submitFunction.emmit("test");
  // }
  ngOnInit() {
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
    console.log("formelements", this.formelements);
    let orderedGroupClone;
    let orderedGroup;
    let orderValue = 0;
    let order = 0;
    let diffState = 0;
    let materialIconName;
    orderedGroup = new OrderByPipe().transform(this.formelements, "order");
    orderedGroupClone = cloneDeep_default(orderedGroup);
    orderedGroupClone = new OrderByPipe().transform(orderedGroupClone, "order");
    forEach_default(orderedGroup, (m, i) => {
      if (orderValue != parseInt(m.order)) {
        let title = "";
        if (1 <= m.order && m.order < 3) {
          title = "Extensions";
          materialIconName = "extension";
          order = 0;
        } else {
          if (3 <= m.order && m.order < 4) {
            title = "Child Objects";
            materialIconName = "subdirectory_arrow_right";
            order = 2;
          } else {
            title = "Attributes";
            materialIconName = "list";
            order = 4;
          }
        }
        orderedGroupClone.splice(i + diffState, 0, {
          controlType: "togglebutton",
          title,
          orderId: order,
          order,
          materialIconName
        });
        diffState++;
      }
      orderValue = parseInt(m.order);
    });
    this.formelements = orderedGroupClone;
    let formGroup = this.formservice.toFormGroup(orderedGroupClone);
    this.form = formGroup;
    console.log("hr", window.location);
    console.log("after convert form", this.form);
    console.log("this.model=", this.model);
    this.route.params.subscribe(params => {
      console.log("params", params);
      console.log("this.model", this.model);
      if (params.devicereff === "dcmDevice.dcmArchiveDevice" && (!this.model || this.model && !hasIn_default(this.model, "dcmDevice.dcmArchiveDevice"))) {
        this.exceptionValidation = true;
      }
    });
    console.log("form", this.form);
  }
  filterFormElements() {
    if (this.partSearch != "") {
      if (this.partSearch.length === 1 && this.prevPartSearch.length < this.partSearch.length || !this.prevPartSearch && !this.listStateBeforeSearch) {
        this.listStateBeforeSearch = cloneDeep_default(this.formelements);
      }
      this.formelements = new OrderByPipe().transform(this.listStateBeforeSearch, "order");
      this.formelements = new SearchPipe().transform(this.formelements, this.partSearch);
    } else {
      if (size_default(this.listStateBeforeSearch) > 0) {
        this.formelements = cloneDeep_default(this.listStateBeforeSearch);
      }
    }
    this.prevPartSearch = this.partSearch;
  }
  onSubmit(valid) {
    console.log("this.form.value", this.form.value);
    if (valid) {
      this.payLoad = JSON.stringify(this.form.value);
      this.submitFunction.emit(this.form.value);
    }
  }
  getForm() {
    return this.form;
  }
  setFormModel(model) {
    this.form.patchValue(model);
  }
  setForm(form) {
    this.form = form;
  }
  keyDown(e) {
    console.log("e2", e.keyCode);
    this.pressedKey.push(e.keyCode);
    if (this.pressedKey.indexOf(17) > -1 && e.keyCode === 13) {
      console.log("combinatnion pressed");
      this.onSubmit(this.form.valid);
    }
  }
  keyUp(e) {
    console.log("e2", e.keyCode);
    let index = this.pressedKey.indexOf(e.keyCode);
    if (index > -1) {
      this.pressedKey.splice(index, 1);
    }
  }
}, _a11.ctorParameters = () => [{
  type: FormService
}, {
  type: AppService
}, {
  type: ActivatedRoute
}, {
  type: UntypedFormBuilder
}], _a11.propDecorators = {
  formelements: [{
    type: Input
  }],
  model: [{
    type: Input
  }],
  dontShowSearch: [{
    type: Input
  }],
  dontGroup: [{
    type: Input
  }],
  readOnlyMode: [{
    type: Input
  }],
  submitFunction: [{
    type: Output
  }]
}, _a11);
DynamicFormComponent = __decorate([Component({
  selector: "dynamic-form",
  template: dynamic_form_component_default,
  providers: [FormService],
  imports: [DynamicFormElementComponent, ReactiveFormsModule, FormsModule, CommonModule],
  standalone: true
})], DynamicFormComponent);
export { CustomValidatorDirective, UploadVendorComponent, DictionaryPickerComponent, LanguagePickerComponent, AttributeInfoComponent, SchedulePickerComponent, DynamicFieldService, DynamicFieldComponent, DcmSelectComponent, DynamicFormComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/