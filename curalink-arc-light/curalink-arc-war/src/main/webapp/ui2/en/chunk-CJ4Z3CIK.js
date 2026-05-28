import { CustomDatePipe, FormatAttributeValuePipe, StudyService } from "./chunk-DJWZKPOC.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { AppService, CommonModule, Component, Directive, ElementRef, HostListener, HttpErrorHandler, Input, J4careHttpService, Pipe, __decorate, forEach_default, hasIn_default, includes_default, j4care, lodash_exports } from "./chunk-V54BIW7M.js";

// src/app/helpers/tooltip/tooltip.directive.ts
var _a;
var TooltipDirective = (_a = class {
  constructor(el, mainservice) {
    this.el = el;
    this.mainservice = mainservice;
    this.placeholderSet = false;
    this.textTransformed = "";
    this.textOriginal = "";
    if (this.tooltip) {
      this.createPlaceholder();
    }
  }
  onMouseEnter() {
    if (!this.placeholderSet) {
      this.createPlaceholder();
      this.showTooltip();
    } else {
      this.showTooltip();
    }
  }
  offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      right: rect.right + scrollLeft
    };
  }
  onMouseLeave() {
    if (this.placeholderSet) {
      this.hideTooltip();
    }
  }
  onMouseUp() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", this.tooltip);
  }
  createPlaceholder() {
    if (this.tooltip && (this.tooltip.length && this.tooltip.length > 1 || hasIn_default(this.tooltip, "original"))) {
      if (this.tooltip.indexOf("original") > -1) {
        if (typeof this.tooltip === "string") {
          this.tooltip = JSON.parse(this.tooltip);
        }
        this.textOriginal = this.tooltip["original"];
        this.textTransformed = this.tooltip["transformed"] || "";
      } else {
        this.textTransformed = this.textOriginal = this.tooltip;
      }
      this.div = document.createElement("div");
      this.i = document.createElement("i");
      this.i.className = "glyphicon glyphicon-duplicate";
      this.spanText = document.createElement("span");
      this.i.title = "Copy text to clipboard";
      this.div.className = "tooltip_container";
      let div2 = document.createElement("div");
      div2.className = "dir-tooltip animated";
      let br = document.createElement("br");
      this.i.addEventListener("mouseup", () => {
        copyToClipboard();
      });
      this.i.addEventListener("dblclick", () => {
        copyToClipboard();
      });
      let text;
      if (includes_default(this.textTransformed, "<br>")) {
        let textArray = this.textTransformed.split("<br>");
        forEach_default(textArray, (m, i) => {
          div2.appendChild(br);
          this.spanText.appendChild(document.createTextNode(m));
          div2.appendChild(this.spanText);
        });
      } else {
        text = document.createTextNode(this.textTransformed);
        this.spanText.appendChild(text);
        div2.appendChild(this.spanText);
      }
      div2.appendChild(this.i);
      this.div.appendChild(div2);
      this.setPositionOfDiv();
      ;
      this.div.addEventListener("mouseleave", e => {
        this.hideTooltip();
      });
      document.querySelector("body").appendChild(this.div);
      this.placeholderSet = true;
    }
    let copyToClipboard = () => {
      const el = document.createElement("textarea");
      el.value = this.textOriginal;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.mainservice.showMsg("Text '" + this.textOriginal + "' copied successfully in the clipboard");
    };
  }
  setPositionOfDiv() {
    let position = this.offset(this.el.nativeElement);
    this.div.style.position = "absolute";
    if (this.el.nativeElement.className && this.el.nativeElement.className.indexOf("big_field") > -1) {
      this.div.style.left = position.right - 15 * 1 + "px";
    } else {
      this.div.style.left = position.left + 15 * 1 + "px";
    }
    this.div.style.top = position.top + 25 * 1 + "px";
    this.div.addEventListener("mouseenter", e => {
      this.showTooltip();
    });
  }
  showTooltip() {
    if (this.placeholderSet) {
      this.div.classList.add("openflag");
      this.div.classList.remove("closeflag");
      setTimeout(() => {
        if (this.div.classList.contains("openflag")) {
          this.setPositionOfDiv();
          this.div.classList.add("show");
          this.div.classList.remove("closeflag");
          this.div.classList.remove("openflag");
        }
      }, 800);
    }
  }
  hideTooltip() {
    if (this.placeholderSet) {
      this.div.classList.add("closeflag");
      this.div.classList.remove("openflag");
      setTimeout(() => {
        if (this.div && this.div.classList.contains("closeflag")) {
          this.div.classList.remove("closeflag");
          this.div.classList.remove("show");
        }
      }, 1e3);
    }
  }
  ngOnDestroy() {
    let nodes = document.querySelectorAll(".tooltip_container");
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].remove();
    }
  }
}, _a.ctorParameters = () => [{
  type: ElementRef
}, {
  type: AppService
}], _a.propDecorators = {
  tooltip: [{
    type: Input
  }],
  onMouseEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }],
  onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }],
  onMouseUp: [{
    type: HostListener,
    args: ["onmouseup"]
  }]
}, _a);
TooltipDirective = __decorate([Directive({
  selector: "[tooltip]",
  standalone: true
})], TooltipDirective);

// angular:jit:template:src\app\helpers\attribute-list\attribute-list.component.html
var attribute_list_component_default = `<table class="table table-bordered table-condensed attribute_list">\r
    <tr *ngFor="let row of rows">\r
        <td>{{row.level}}</td>\r
        <td class="attr_name" *ngIf="row.el">{{row.name}}</td>\r
        <td class="attr_tag" *ngIf="row.el">{{row.tag | formatTag}}</td>\r
        <td class="attr_vr" *ngIf="row.el">{{row.el.vr}}</td>\r
        <td class="attr_value">\r
            <ng-container *ngIf="row.el && row.el.vr === 'PN' && _.hasIn(row,'el.Value.0')">\r
                <!--{{row.el.Value[0]  | personName:personNameFormat}}-->\r
                <ng-container *ngIf="_.hasIn(row,'el.Value.0.Alphabetic')"><span>{{_.get(row,"el.Value.0.Alphabetic")}}</span></ng-container>\r
                <ng-container *ngIf="_.hasIn(row,'el.Value.0.Ideographic')"><span>={{_.get(row,"el.Value.0.Ideographic")}}</span></ng-container>\r
                <ng-container *ngIf="_.hasIn(row,'el.Value.0.Phonetic')"><span>={{_.get(row,"el.Value.0.Phonetic")}}</span></ng-container>\r
            </ng-container>\r
            <ng-container *ngIf="row.el && (row.el.vr === 'DA' || row.el.vr === 'TM' || row.el.vr === 'DT') && _.hasIn(row,'el.Value.0')">\r
                {{row.el.Value[0]  | customDate:customDateTimeFormat}}\r
            </ng-container>\r
            <ng-container *ngIf="row.el && !(row.el.vr === 'DA' || row.el.vr === 'TM' || row.el.vr === 'PN'  || row.el.vr === 'DT')">\r
                {{row.el | formatAttributeValue}}\r
            </ng-container>\r
        </td>\r
        <td *ngIf="row.item || row.item === 0" colspan="4">Item # {{row.item + 1}}</td>\r
    </tr>\r
</table>\r
`;

// angular:jit:style:src\app\helpers\attribute-list\attribute-list.component.scss
var attribute_list_component_default2 = "/* src/app/helpers/attribute-list/attribute-list.component.scss */\n.attribute_list tr td {\n  word-break: break-word;\n}\n.attribute_list tr td.attr_tag {\n  min-width: 100px;\n}\n.attribute_list tr td.attr_vr {\n  min-width: 40px;\n}\n";

// src/app/pipes/format-tag.pipe.ts
var FormatTagPipe = class FormatTagPipe2 {
  transform(value, args) {
    return "(" + value.slice(0, 4) + "," + value.slice(4, 8) + ")";
  }
};
FormatTagPipe = __decorate([Pipe({
  name: "formatTag",
  standalone: true
})], FormatTagPipe);

// src/app/helpers/attribute-list/attribute-list.component.ts
var _a2;
var AttributeListComponent = (_a2 = class {
  constructor($http, cfpLoadingBar, mainservice, httpErrorHandler, studyService) {
    this.$http = $http;
    this.cfpLoadingBar = cfpLoadingBar;
    this.mainservice = mainservice;
    this.httpErrorHandler = httpErrorHandler;
    this.studyService = studyService;
    this._ = lodash_exports;
    this.rows = [];
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.customDateTimeFormat = hasIn_default(this.mainservice.global, "dateTimeFormat") ? this.mainservice.global["dateTimeFormat"] : void 0;
    this.personNameFormat = hasIn_default(this.mainservice.global, "personNameFormat") ? this.mainservice.global["personNameFormat"] : void 0;
    if (this.attrs) {
      this.attrs2rows("", this.attrs, this.rows);
    } else {
      this.cfpLoadingBar.start();
      let url = "";
      if (this.aet) {
        url = `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/` + this.aet + "/rs/studies/" + this.studyuid + "/series/" + this.seriesuid + "/instances/" + this.objectuid + "/metadata";
      } else {
        console.log("urlbase", this.studyService.getDicomURL("study", this.studyWebService.selectedWebService));
        url = `${this.studyService.getDicomURL("study", this.studyWebService.selectedWebService)}/${this.studyuid}/series/${this.seriesuid}/instances/${this.objectuid}/metadata`;
      }
      this.$http.get(url).subscribe(response => {
        let attrs = response[0];
        console.log("attrs", attrs);
        console.log("this1", this);
        console.log("this2", this);
        this.attrs2rows("", attrs, this.rows);
        console.log("after attrs2call", this.rows);
        this.cfpLoadingBar.complete();
      }, err => {
        this.httpErrorHandler.handleError(err);
        this.cfpLoadingBar.complete();
      });
    }
  }
  attrs2rows(level, attrs, rows) {
    function privateCreator(tag) {
      if ("02468ACE".indexOf(tag.charAt(3)) < 0) {
        let block = tag.slice(4, 6);
        if (block !== "00") {
          let el = attrs[tag.slice(0, 4) + "00" + block];
          return el && el.Value && el.Value[0];
        }
      }
      return void 0;
    }
    let keys = Object.keys(attrs);
    keys.sort();
    keys.forEach(tag => {
      let el = attrs[tag];
      rows.push({
        level,
        tag,
        name: DCM4CHE.elementName.forTag(tag, privateCreator(tag)),
        el
      });
      if (el.vr === "SQ") {
        let itemLevel = level + ">";
        forEach_default(el.Value, (item, index) => {
          rows.push({
            level: itemLevel,
            item: index
          });
          this.attrs2rows(itemLevel, item, rows);
        });
      }
    });
  }
}, _a2.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: LoadingBarService
}, {
  type: AppService
}, {
  type: HttpErrorHandler
}, {
  type: StudyService
}], _a2.propDecorators = {
  studyuid: [{
    type: Input
  }],
  seriesuid: [{
    type: Input
  }],
  objectuid: [{
    type: Input
  }],
  aet: [{
    type: Input
  }],
  attrs: [{
    type: Input
  }],
  studyWebService: [{
    type: Input
  }]
}, _a2);
AttributeListComponent = __decorate([Component({
  selector: "attribute-list",
  template: attribute_list_component_default,
  imports: [FormatTagPipe, CustomDatePipe, FormatAttributeValuePipe, CommonModule],
  standalone: true,
  styles: [attribute_list_component_default2]
})], AttributeListComponent);
export { TooltipDirective, AttributeListComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/