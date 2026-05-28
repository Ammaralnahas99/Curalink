import { AttributeListComponent, TooltipDirective } from "./chunk-CJ4Z3CIK.js";
import { SearchPipe } from "./chunk-DJWZKPOC.js";
import { PermissionService } from "./chunk-YEAVTBOB.js";
import { CommonModule, Component, DatePipe, EventEmitter, Input, NgClass, NgStyle, Output, __decorate, get_default, hasIn_default, j4care, lodash_exports, set_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\helpers\table-generator\table-generator.component.html
var table_generator_component_default = `<div class="dynamic_table " *ngIf="models">\r
  <div class="table_header">\r
    <div class="tr">\r
        <ng-container *ngFor="let header of config.table">\r
            <ng-container *ngIf="(header.type === 'buttons' || header.type === 'actions')">\r
                <div class="th" [ngStyle]="{width: header.calculatedWidth}">\r
                    <ng-container *ngIf="header.type === 'actions' && header.headerActions && header.headerActions.length && header.headerActions.length > 0">\r
                        <ng-container *ngFor="let action of header.headerActions">\r
                            <a *ngIf="!action.showIf || action.showIf(models, config)" class="text-white action-button"  (click)="$event.preventDefault();action.click(models, config)" title="{{action.title || ''}}">\r
                                <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                            </a>\r
                        </ng-container>\r
                    </ng-container>\r
                </div>\r
            </ng-container>\r
            <ng-container *ngIf="!(header.type === 'buttons' || header.type === 'actions')">\r
                <div class="th {{header.cssClass||''}}" title="{{header.description}}" [ngStyle]="{width: header.calculatedWidth}">{{header.title}}</div>\r
            </ng-container>\r
        </ng-container>\r
    </div>\r
  </div>\r
  <div class="table_body">\r
      <ng-container *ngFor="let model of models|search:config.search;let i = index">\r
        <div class="tr" [ngClass]="{'selected':(model && model.selected)}">\r
            <div class="td {{table_element.cssClass||''}}" *ngFor="let table_element of config.table;let k = index" [ngStyle]="{width: table_element.calculatedWidth}">\r
                <span *ngIf="table_element.type === 'index'">{{i+(config.filter.offset || 0)+1}}.</span>\r
                <span [ngClass]="{'pointer':table_element.onClick}" *ngIf="table_element.type === 'progress' && _.hasIn(table_element,'key')">\r
                    <stacked-progress [model]="_.get(model,table_element.key)" [diffModel]="table_element.diffMode" (click)="onProgressClicked(table_element, model)"></stacked-progress>\r
                </span>\r
                <span [ngClass]="{'pointer':table_element.onClick}" *ngIf="table_element.type === 'progress' && _.hasIn(table_element,'pathToValue')">\r
                    <stacked-progress [model]="_.get(model,table_element.pathToValue)" [diffModel]="table_element.diffMode" (click)="onProgressClicked(table_element, model)"></stacked-progress>\r
                </span>\r
                <ng-container *ngIf="table_element.type === 'value'">\r
                    <ng-container *ngIf="table_element.hook">\r
                        <ng-container *ngIf="!table_element.hoverHook">\r
                            <span *ngIf="_.hasIn(model,table_element.pathToValue) || (model && !table_element.pathToValue)" class="text_content {{table_element.cssClass || ''}}" tooltip="{{_.get(model,table_element.pathToValue)}}">\r
                                {{table_element.hook(_.get(model,table_element.pathToValue) || table_element.pathToValue || model,model)}}\r
                            </span>\r
                        </ng-container>\r
                        <ng-container *ngIf="table_element.hoverHook">\r
                            <span *ngIf="_.hasIn(model,table_element.pathToValue) || (model && !table_element.pathToValue)" class="text_content {{table_element.cssClass || ''}}" tooltip="{{table_element.hoverHook(model)}}">\r
                                {{table_element.hook(_.get(model,table_element.pathToValue) || table_element.pathToValue || model,model)}}\r
                            </span>\r
                        </ng-container>\r
                    </ng-container>\r
                    <ng-container *ngIf="!table_element.hook">\r
                        <ng-container *ngIf="!table_element.hoverHook">\r
                            <span *ngIf="_.hasIn(model,table_element.pathToValue)" class="text_content {{table_element.cssClass || ''}}" tooltip="{{_.get(model,table_element.pathToValue)}}">\r
                                {{_.get(model,table_element.pathToValue)}}\r
                            </span>\r
                        </ng-container>\r
                        <ng-container *ngIf="table_element.hoverHook">\r
                            <span *ngIf="_.hasIn(model,table_element.pathToValue)" class="text_content {{table_element.cssClass || ''}}" tooltip="{{table_element.hoverHook(model)}}">\r
                                {{_.get(model,table_element.pathToValue)}}\r
                            </span>\r
                        </ng-container>\r
                    </ng-container>\r
                </ng-container>\r
                <ng-container *ngIf="table_element.type === 'actions'">\r
                    <ng-container  *ngFor="let action of table_element.actions">\r
                        <a *ngIf="(!action.showIf || action.showIf(model, config))" class="pointer action-button {{table_element.cssClass || ''}}" (click)="$event.preventDefault();action.click(model)" [title]="action.title">\r
                            <span *ngIf="action.icon.tag === 'span' && (!action.icon.showIf || action.icon.showIf(model))" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                            <i *ngIf="action.icon.tag === 'i' && (!action.icon.showIf || action.icon.showIf(model))" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                        </a>\r
                    </ng-container>\r
                </ng-container>\r
                <ng-container *ngIf="table_element.type === 'buttons'">\r
                    <ng-container  *ngFor="let action of table_element.buttons">\r
                        <a *ngIf="(!action.showIf || action.showIf(model, config))" class="pointer action-button {{table_element.cssClass || ''}}" (click)="$event.preventDefault();action.click(model)">\r
                            <span *ngIf="action.icon.tag === 'span' && (!action.icon.showIf || action.icon.showIf(model))" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                            <i *ngIf="action.icon.tag === 'i' && (!action.icon.showIf || action.icon.showIf(model))" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                        </a>\r
                    </ng-container>\r
                </ng-container>\r
            </div>\r
        </div>\r
        <div class="tr"  *ngIf="model && model.showAttributes">\r
            <div class="td" style="width:100%">\r
              <table class="table table-bordered table-condensed attribute_list">\r
                  <ng-container *ngIf="stringifyDetailAttributes">\r
                      <tr *ngFor="let key of Object.keys(model.tableGeneratorDetailAttributes)">\r
                          <th [innerHtml]="key"></th>\r
                          <td [innerHtml]="model.tableGeneratorDetailAttributes[key]"></td>\r
                      </tr>\r
                  </ng-container>\r
                  <ng-container *ngIf="!stringifyDetailAttributes">\r
                      <tr *ngFor="let key of Object.keys(model)">\r
                          <th [innerHtml]="key"></th>\r
                          <td *ngIf="key === 'createdTime' || key === 'updatedTime' || key === 'scheduledTime' || key === 'processingStartTime' || key === 'processingEndTime';else nodate_content" [innerHtml]="model[key] | date:'yyyy-MM-dd HH:mm:ss'"></td>\r
                          <ng-template #nodate_content>\r
                              <td [innerHtml]="model[key]"></td>\r
                          </ng-template>\r
                      </tr>\r
                  </ng-container>\r
              </table>\r
            </div>\r
        </div>\r
          <div class="tr"  *ngIf="model && model.showDicomAttributes">\r
              <div class="td" style="width:100%">\r
                  <attribute-list *ngIf="model" [attrs]="model"></attribute-list>\r
              </div>\r
          </div>\r
      </ng-container>\r
  </div>\r
</div>\r
`;

// angular:jit:style:src\app\helpers\table-generator\table-generator.component.scss
var table_generator_component_default2 = "/* src/app/helpers/table-generator/table-generator.component.scss */\n.dicom_table_buttons {\n  width: 25px;\n  display: block;\n  text-align: center;\n  float: left;\n}\n.text-white {\n  color: white;\n}\n.action-button {\n  margin: 1px 2px;\n  float: left;\n}\n.action-button:hover {\n  font-weight: bold;\n}\n.shadow {\n  -webkit-box-shadow: 4px 4px 4px #ccc;\n  -moz-box-shadow: 4px 4px 4px #ccc;\n  box-shadow: 4px 4px 4px #ccc;\n}\na:hover {\n  cursor: pointer;\n}\n";

// angular:jit:template:src\app\helpers\stacked-progress\stacked-progress.component.html
var stacked_progress_component_default = `<div class="stacked_progress_container">\r
  <ul>\r
    <li *ngFor="let part of progress" [ngClass]="part.cssClass" [ngStyle]="{'width':part.width+'%'}" title="{{part.title}}"></li>\r
  </ul>\r
</div>`;

// angular:jit:style:src\app\helpers\stacked-progress\stacked-progress.component.scss
var stacked_progress_component_default2 = '/* src/app/helpers/stacked-progress/stacked-progress.component.scss */\n.stacked_progress_container ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.stacked_progress_container ul li {\n  padding: 0;\n  float: left;\n  display: inline-block;\n  height: 30px;\n}\n.stacked_progress_container ul li.scheduled {\n  background: -moz-linear-gradient(top, rgba(21, 70, 109, 0.75) 0%, var(--backgroundHoverColor) 100%);\n  background: -webkit-linear-gradient(top, rgba(21, 70, 109, 0.75) 0%, var(--backgroundHoverColor) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(21, 70, 109, 0.75) 0%,\n      var(--backgroundHoverColor) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#165596", endColorstr="#0F2C4A", GradientType=0);\n}\n.stacked_progress_container ul li.scheduled-for-retry {\n  background: -moz-linear-gradient(top, rgba(61, 148, 136, 0.75) 0%, rgba(12, 58, 61, 0.75) 100%);\n  background: -webkit-linear-gradient(top, rgba(61, 148, 136, 0.75) 0%, rgba(12, 58, 61, 0.75) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(61, 148, 136, 0.75) 0%,\n      rgba(12, 58, 61, 0.75) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3D9488", endColorstr="#0C3A3D", GradientType=0);\n}\n.stacked_progress_container ul li.in-process {\n  background: -moz-linear-gradient(top, rgba(121, 41, 162, 0.68) 0%, rgba(28, 9, 64, 0.82) 100%);\n  background: -webkit-linear-gradient(top, rgba(121, 41, 162, 0.68) 0%, rgba(28, 9, 64, 0.82) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(121, 41, 162, 0.68) 0%,\n      rgba(28, 9, 64, 0.82) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7929A2", endColorstr="#1C0940", GradientType=0);\n}\n.stacked_progress_container ul li.warning {\n  background: -moz-linear-gradient(top, rgba(253, 244, 0, 0.83) 0%, rgba(255, 152, 64, 0.71) 100%);\n  background: -webkit-linear-gradient(top, rgba(253, 244, 0, 0.83) 0%, rgba(255, 152, 64, 0.71) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(253, 244, 0, 0.83) 0%,\n      rgba(255, 152, 64, 0.71) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F7F269", endColorstr="#B5A13E", GradientType=0);\n}\n.stacked_progress_container ul li.failed {\n  background: -moz-linear-gradient(top, rgba(171, 1, 3, 0.89) 0%, rgba(82, 0, 1, 0.89) 100%);\n  background: -webkit-linear-gradient(top, rgba(171, 1, 3, 0.89) 0%, rgba(82, 0, 1, 0.89) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(171, 1, 3, 0.89) 0%,\n      rgba(82, 0, 1, 0.89) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#AB0103", endColorstr="#520001", GradientType=0);\n}\n.stacked_progress_container ul li.canceled {\n  background: -moz-linear-gradient(top, rgba(165, 165, 165, 0.82) 0%, rgba(91, 91, 91, 0.86) 100%);\n  background: -webkit-linear-gradient(top, rgba(165, 165, 165, 0.82) 0%, rgba(91, 91, 91, 0.86) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(165, 165, 165, 0.82) 0%,\n      rgba(91, 91, 91, 0.86) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#A5A5A5", endColorstr="#5B5B5B", GradientType=0);\n}\n.stacked_progress_container ul li.completed {\n  background: -moz-linear-gradient(top, rgba(0, 255, 114, 0.46) 0%, rgba(12, 107, 32, 0.77) 100%);\n  background: -webkit-linear-gradient(top, rgba(0, 255, 114, 0.46) 0%, rgba(12, 107, 32, 0.77) 100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 255, 114, 0.46) 0%,\n      rgba(12, 107, 32, 0.77) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4BA4A4", endColorstr="#2AA459", GradientType=0);\n}\n';

// src/app/helpers/stacked-progress/stacked-progress.component.ts
var _a;
var StackedProgressComponent = (_a = class {
  constructor() {
    this.progress = [];
    this.totalCount = 0;
  }
  ngOnInit() {
    this.getTotalCount();
    try {
      this.progress = this.model.map(part => {
        let key = Object.keys(part)[0];
        console.log("diffModel", this.diffModel);
        return {
          cssClass: key,
          width: parseInt(part[key].toString()) * 100 / this.totalCount,
          title: `${key}: ${part[key]}${this.setDiffTitle(key)}`
        };
      });
    } catch (e) {
      console.warn(e);
    }
  }
  setDiffTitle(key) {
    if (this.diffModel) {
      if (key === "completed") {
        return " ( No diffs )";
      }
      if (key === "warning" && this.extractDiffInformation()) {
        return ` ( ${this.extractDiffInformation()} )`;
      }
    }
    return "";
  }
  extractDiffInformation() {
    return ["different", "matches", "missing"].map(key => this.getIfExist(key, this.diffModel)).filter(m => m).join(", ");
  }
  getIfExist(key, model) {
    if (hasIn_default(model, key)) {
      return `${key}: ${model[key]}`;
    } else {
      return "";
    }
  }
  getTotalCount() {
    if (this.model) {
      this.model.forEach(part => {
        this.totalCount += parseInt(part[Object.keys(part)[0]].toString());
      });
    }
  }
}, _a.ctorParameters = () => [], _a.propDecorators = {
  model: [{
    type: Input
  }],
  diffModel: [{
    type: Input
  }]
}, _a);
StackedProgressComponent = __decorate([Component({
  selector: "stacked-progress",
  template: stacked_progress_component_default,
  imports: [NgClass, NgStyle],
  standalone: true,
  styles: [stacked_progress_component_default2]
})], StackedProgressComponent);

// src/app/helpers/table-generator/table-generator.component.ts
var _a2;
var TableGeneratorComponent = (_a2 = class {
  constructor(permissionService) {
    this.permissionService = permissionService;
    this.tableMouseEnter = new EventEmitter();
    this.tableMouseLeave = new EventEmitter();
    this._ = lodash_exports;
    this.Object = Object;
  }
  ngOnInit() {
    if (!this._config || !hasIn_default(this._config, "search")) {
      this._config = this._config || {};
      this._config.search = "";
    }
    if (!hasIn_default(this._config, "calculate") || this._config.calculate) {
      this._config.table = j4care.calculateWidthOfTable(this._config.table);
    }
    this._config.table = this.checkSchemaPermission(this._config.table);
  }
  tMousEnter() {
    this.tableMouseEnter.emit();
  }
  tMousLeave() {
    this.tableMouseLeave.emit();
  }
  onProgressClicked(table_element, model) {
    if (table_element.onClick) {
      table_element.onClick(model);
    }
  }
  selectOnClick(str) {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  get models() {
    return this._models;
  }
  set models(value) {
    this._models = value;
    if (this.stringifyDetailAttributes) {
      this._models.map(model => {
        model.tableGeneratorDetailAttributes = Object.assign({}, model);
        j4care.stringifyArrayOrObject(model.tableGeneratorDetailAttributes, []);
        return model;
      });
    }
  }
  checkSchemaPermission(schema) {
    schema.forEach(element => {
      if (element && element.type) {
        if (element.type === "actions" || element.type === "actions-menu" || element.type === "buttons") {
          let key = "actions";
          if (hasIn_default(element, "menu") && element.menu) {
            key = "menu.actions";
          }
          if (get_default(element, key) && get_default(element, key).length > 0) {
            let result = get_default(element, key).filter(menu => {
              if (menu.permission) {
                return this.permissionService.checkVisibility(menu.permission);
              }
              return true;
            });
            set_default(element, key, result);
          }
          if (hasIn_default(element, "headerActions")) {
            key = "headerActions";
            let result = get_default(element, key).filter(menu => {
              if (menu.permission) {
                return this.permissionService.checkVisibility(menu.permission);
              }
              return true;
            });
            set_default(element, key, result);
          }
        }
      } else {
        return false;
      }
    });
    console.log("schema", schema);
    return schema;
  }
  get config() {
    return this._config;
  }
  set config(value) {
    console.log("in set config", value);
    if (hasIn_default(value, "table")) {
      value.table.forEach(t => {
        console.log("t", t);
        if (t.modifyData && (!t.hook || t.hook === "")) {
          t["hook"] = t.modifyData;
        }
        if (t.header && (!t.title || t.title === "")) {
          t["title"] = t.header;
        }
        if (t.type && t.type === "model") {
          t.type = "value";
        }
        if (t.key && (!t.pathToValue || t.pathToValue === "")) {
          t.pathToValue = t.key;
        }
      });
    }
    console.log("in set config", value);
    this._config = value;
  }
}, _a2.ctorParameters = () => [{
  type: PermissionService
}], _a2.propDecorators = {
  stringifyDetailAttributes: [{
    type: Input
  }],
  tableMouseEnter: [{
    type: Output
  }],
  tableMouseLeave: [{
    type: Output
  }],
  models: [{
    type: Input
  }],
  config: [{
    type: Input
  }]
}, _a2);
TableGeneratorComponent = __decorate([Component({
  selector: "table-generator",
  template: table_generator_component_default,
  imports: [NgStyle, NgClass, TooltipDirective, AttributeListComponent, DatePipe, StackedProgressComponent, CommonModule, SearchPipe],
  standalone: true,
  styles: [table_generator_component_default2]
})], TableGeneratorComponent);
export { TableGeneratorComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/