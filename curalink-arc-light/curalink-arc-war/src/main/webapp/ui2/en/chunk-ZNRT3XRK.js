import {
  PermissionService
} from "./chunk-YEAVTBOB.js";
import {
  Directive,
  ElementRef,
  Input,
  __decorate
} from "./chunk-V54BIW7M.js";

// src/app/helpers/permissions/permission.directive.ts
var _a;
var PermissionDirective = (_a = class {
  constructor(el, permisssionService) {
    this.el = el;
    this.permisssionService = permisssionService;
  }
  ngOnInit() {
    let check = this.permisssionService.checkVisibility(this.permission);
    if (typeof check === "object" && check.source) {
      check.subscribe((res) => {
        if (!res)
          this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
      }, (err) => {
        console.log("Error on checking directives", err);
      });
    } else if (!check)
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
  }
}, _a.ctorParameters = () => [
  { type: ElementRef },
  { type: PermissionService }
], _a.propDecorators = {
  permission: [{ type: Input }]
}, _a);
PermissionDirective = __decorate([
  Directive({
    selector: "[permission]",
    standalone: true
  })
], PermissionDirective);

export {
  PermissionDirective
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
