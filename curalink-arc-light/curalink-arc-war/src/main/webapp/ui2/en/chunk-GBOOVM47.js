import {
  AsyncPipe,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  Subject,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  combineLatest,
  core_exports,
  isPlatformBrowser,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-V54BIW7M.js";

// node_modules/@ngx-loading-bar/core/fesm2020/ngx-loading-bar-core.mjs
var LoadingBarState = class {
  constructor(config = {}) {
    this.config = config;
    this.state = {
      action: null,
      value: 0,
      initialValue: 0
    };
    this.requests = null;
    this.disabled = false;
    this.stream$ = new Subject();
    this._value$ = null;
    this.timer$ = (s) => {
      let state$ = of(s);
      switch (s.action) {
        case "start":
        case "increment":
        case "set": {
          if (s.action === "start" && this.config.latencyThreshold === 0 && s.value === 0) {
            s.value = s.initialValue;
          }
          if (this.requests > 0) {
            state$ = timer(this.config.latencyThreshold, 250).pipe(map((t) => __spreadProps(__spreadValues({}, s), { value: t === 0 ? this.state.value || s.initialValue : this._increment() })));
          }
          break;
        }
        case "complete":
        case "stop": {
          state$ = s.value === 0 ? of(__spreadValues({}, s)) : timer(0, 500).pipe(take(2), map((t) => ({ value: t === 0 ? 100 : 0 })));
          break;
        }
      }
      return state$.pipe(map((next) => __spreadProps(__spreadValues({}, next), { action: "set" })), tap((next) => this.next(next, false)));
    };
    this.config = __spreadValues({
      latencyThreshold: 0
    }, config);
  }
  get value$() {
    if (this._value$) {
      return this._value$;
    }
    return this._value$ = this.stream$.pipe(startWith(this.state), switchMap((s) => this.timer$(s)), shareReplay(), map((s) => s.value));
  }
  start(initialValue = 2) {
    if (this.disabled) {
      return;
    }
    this.next({ action: "start", initialValue });
  }
  stop() {
    this.next({ action: "stop" });
  }
  complete() {
    this.next({ action: "complete" });
  }
  disable() {
    this.disabled = true;
  }
  set(value) {
    this.next({ action: "set", value });
  }
  increment(value = 0) {
    this.next({ action: "increment", value });
  }
  next(state, emitEvent = true) {
    switch (state.action) {
      case "start":
        this.requests = (this.requests || 0) + 1;
        break;
      case "complete":
        this.requests = (this.requests || 1) - 1;
        if (this.requests > 0) {
          return;
        }
        break;
      case "stop":
        this.requests = 0;
        break;
      case "increment":
        state.value = this._increment(state.value);
        break;
    }
    this.state = __spreadValues(__spreadProps(__spreadValues({}, this.state), { action: null }), state);
    if (emitEvent) {
      this.stream$.next(this.state);
    }
  }
  _increment(rnd = 0) {
    const stat = this.state.value;
    if (stat >= 99) {
      rnd = 0;
    }
    if (rnd === 0) {
      if (stat >= 0 && stat < 25) {
        rnd = Math.random() * (5 - 3 + 1) + 3;
      } else if (stat >= 25 && stat < 65) {
        rnd = Math.random() * 3;
      } else if (stat >= 65 && stat < 90) {
        rnd = Math.random() * 2;
      } else if (stat >= 90 && stat < 99) {
        rnd = 0.5;
      } else {
        rnd = 0;
      }
    }
    return rnd + stat;
  }
};
var LOADING_BAR_CONFIG = new InjectionToken("LOADING_BAR_CONFIG");
var LoadingBarService = class {
  constructor(platformId, config = {}, zone) {
    this.platformId = platformId;
    this.config = config;
    this.zone = zone;
    this.refs = {};
    this.streams$ = new Subject();
    this.value$ = this.streams$.pipe(startWith(null), switchMap(() => combineLatest(Object.keys(this.refs).map((s) => this.refs[s].value$))), runInZone(this.zone), map((v) => Math.max(0, ...v)));
  }
  /** @deprecated use `value$` instead. */
  get progress$() {
    return this.value$;
  }
  /** @deprecated use `useRef` instead. */
  start(initialValue = 2) {
    this.useRef().start(initialValue);
  }
  /** @deprecated use `useRef` instead. */
  set(value) {
    this.useRef().set(value);
  }
  /** @deprecated use `useRef` instead. */
  increment(value) {
    this.useRef().increment(value);
  }
  /** @deprecated use `useRef` instead. */
  complete() {
    this.useRef().complete();
  }
  /** @deprecated use `useRef` instead. */
  stop() {
    this.useRef().stop();
  }
  useRef(id = "default") {
    if (!this.refs[id]) {
      this.refs[id] = new LoadingBarState(this.config);
      this.streams$.next();
      if (!isPlatformBrowser(this.platformId)) {
        this.refs[id].disable();
      }
    }
    return this.refs[id];
  }
};
LoadingBarService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarService, deps: [{ token: PLATFORM_ID }, { token: LOADING_BAR_CONFIG, optional: true }, { token: NgZone, optional: true }], target: FactoryTarget.Injectable });
LoadingBarService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarService, providedIn: "root" });
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarService, decorators: [{
  type: Injectable,
  args: [{ providedIn: "root" }]
}], ctorParameters: function() {
  return [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [LOADING_BAR_CONFIG]
  }] }, { type: NgZone, decorators: [{
    type: Optional
  }] }];
} });
function runInZone(zone) {
  if (!zone) {
    return (source) => source;
  }
  return (source) => new Observable((observer) => source.subscribe((value) => zone.run(() => observer.next(value)), (e) => zone.run(() => observer.error(e)), () => zone.run(() => observer.complete())));
}
var LoadingBarComponent = class {
  constructor(loader) {
    this.loader = loader;
    this.includeSpinner = true;
    this.includeBar = true;
    this.fixed = true;
    this.color = "#29d";
  }
  get value$() {
    return this.ref ? this.loader.useRef(this.ref).value$ : this.loader.value$;
  }
};
LoadingBarComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarComponent, deps: [{ token: LoadingBarService }], target: FactoryTarget.Component });
LoadingBarComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: LoadingBarComponent, selector: "ngx-loading-bar", inputs: { includeSpinner: "includeSpinner", includeBar: "includeBar", fixed: "fixed", color: "color", value: "value", ref: "ref", height: "height", diameter: "diameter" }, host: { properties: { "attr.fixed": "fixed", "style.color": "color" } }, ngImport: core_exports, template: `
    <ng-container *ngIf="value != null ? value : (value$ | async) as progress">
      <div *ngIf="includeSpinner" class="ngx-spinner">
        <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
      </div>
      <div
        *ngIf="includeBar"
        class="ngx-bar"
        [style.background]="color"
        [style.height]="height"
        [style.width]="progress + '%'"
      ></div>
    </ng-container>
  `, isInline: true, styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0px}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:loading-bar-spinner .4s linear infinite;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@-webkit-keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": AsyncPipe }, changeDetection: ChangeDetectionStrategy.OnPush });
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarComponent, decorators: [{
  type: Component,
  args: [{ selector: "ngx-loading-bar", template: `
    <ng-container *ngIf="value != null ? value : (value$ | async) as progress">
      <div *ngIf="includeSpinner" class="ngx-spinner">
        <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
      </div>
      <div
        *ngIf="includeBar"
        class="ngx-bar"
        [style.background]="color"
        [style.height]="height"
        [style.width]="progress + '%'"
      ></div>
    </ng-container>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.Emulated, host: {
    "[attr.fixed]": "fixed",
    "[style.color]": "color"
  }, styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0px}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:loading-bar-spinner .4s linear infinite;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@-webkit-keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
}], ctorParameters: function() {
  return [{ type: LoadingBarService }];
}, propDecorators: { includeSpinner: [{
  type: Input
}], includeBar: [{
  type: Input
}], fixed: [{
  type: Input
}], color: [{
  type: Input
}], value: [{
  type: Input
}], ref: [{
  type: Input
}], height: [{
  type: Input
}], diameter: [{
  type: Input
}] } });
var LoadingBarModule = class {
};
LoadingBarModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarModule, deps: [], target: FactoryTarget.NgModule });
LoadingBarModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarModule, declarations: [LoadingBarComponent], imports: [CommonModule], exports: [LoadingBarComponent] });
LoadingBarModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarModule, imports: [[CommonModule]] });
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: core_exports, type: LoadingBarModule, decorators: [{
  type: NgModule,
  args: [{
    imports: [CommonModule],
    declarations: [LoadingBarComponent],
    exports: [LoadingBarComponent]
  }]
}] });

export {
  LoadingBarService,
  LoadingBarModule
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
