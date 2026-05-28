import { AppRequestsService, FormControl, FormGroup, FormGroupDirective, FormsModule, MatProgressSpinner, NG_VALUE_ACCESSOR, NgControl, NgForm, OrderByPipe, PermissionService, Validators } from "./chunk-YEAVTBOB.js";
import { A, ANIMATION_MODULE_TYPE, ActiveDescendantKeyManager, AppService, CdkConnectedOverlay, CdkOverlayOrigin, CdkScrollableModule, ChangeDetectionStrategy, ChangeDetectorRef, CommonModule, Component, ContentChild, ContentChildren, DOCUMENT, DOWN_ARROW, Directionality, Directive, ENTER, ESCAPE, ElementRef, EventEmitter, FactoryTarget, FocusMonitor, Globalvar, HostAttributeToken, HostListener, HttpHeaders, Inject, Injectable, InjectionToken, Injector, Input, J4careHttpService, KeycloakService, LEFT_ARROW, LiveAnnouncer, MatCommonModule, MatDialog, MatDialogRef, NgClass, NgModule, NgStyle, NgSwitch, NgTemplateOutlet, NgZone, Observable, ObserversModule, Output, OverlayModule, Pipe, Platform, RIGHT_ARROW, Renderer2, RendererFactory2, RuntimeError, SPACE, SelectDropdown, Subject, Subscription, UP_ARROW, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation, ViewportRuler, _CdkPrivateStyleLoader, _IdGenerator, _VisuallyHiddenLoader, __decorate, __spreadProps, __spreadValues, _animationsDisabled, _getEventTarget, addAriaReferencedId, add_default, afterNextRender, afterRenderEffect, booleanAttribute, catchError, cloneDeep_default, clone_default, coerceBooleanProperty, coerceElement, computed, contentChild, core_exports, createRepositionScrollStrategy, defer, endsWith_default, filter, findIndex_default, forEach_default, forkJoin, forwardRef, get_default, hasIn_default, hasModifierKey, indexOf_default, inject, isArray_default, isBoolean_default, isEqual_default, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, isNaN_default, isNumber_default, isObject_default, isPlainObject_default, isSignal, isString_default, j4care, keysIn_default, last_default, lodash_exports, map, merge, mergeWith_default, normalizePassiveListenerOptions, numberAttribute, of, pairwise, parseInt_default, pickBy_default, removeAriaReferencedId, remove_default, replace_default, set_default, shareReplay, signal, size_default, split_default, startWith, switchMap, take, takeUntil, throwError, uniqWith_default, uniq_default, unset_default, values_default, viewChild, ɵɵngDeclareClassMetadata, ɵɵngDeclareComponent, ɵɵngDeclareDirective, ɵɵngDeclareFactory, ɵɵngDeclareInjectable, ɵɵngDeclareInjector, ɵɵngDeclareNgModule } from "./chunk-V54BIW7M.js";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class _PlatformModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _PlatformModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _PlatformModule
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _PlatformModule
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: PlatformModule,
  decorators: [{
    type: NgModule,
    args: [{}]
  }]
});
var supportedInputTypes;
var candidateInputTypes = [
// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
"color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== "object" || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement("input");
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute("type", value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}

// node_modules/@angular/material/fesm2022/ripple-BYgV4oZC.mjs
var RippleState;
(function (RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  /** Current state of the ripple. */
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  _events = /* @__PURE__ */new Map();
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */new Map([[element, /* @__PURE__ */new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  /** Event handler that is bound and which dispatches the events to the different targets. */
  _delegateEventHandler = event2 => {
    const target = _getEventTarget(event2);
    if (target) {
      this._events.get(event2.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach(handler => handler.handleEvent(event2));
        }
      });
    }
  };
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _MatRippleStylesLoader = class __MatRippleStylesLoader {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: __MatRippleStylesLoader,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: __MatRippleStylesLoader,
    isStandalone: true,
    selector: "ng-component",
    host: {
      attributes: {
        "mat-ripple-style-loader": ""
      }
    },
    ngImport: core_exports,
    template: "",
    isInline: true,
    styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: _MatRippleStylesLoader,
  decorators: [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "mat-ripple-style-loader": ""
      },
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"]
    }]
  }]
});
var RippleRenderer = class _RippleRenderer {
  _target;
  _ngZone;
  _platform;
  /** Element where the ripples are being added to. */
  _containerElement;
  /** Element which triggers the ripple elements on mouse events. */
  _triggerElement;
  /** Whether the pointer is currently down or not. */
  _isPointerDown = false;
  /**
   * Map of currently active ripple references.
   * The ripple reference is mapped to its element event listeners.
   * The reason why `| null` is used is that event listeners are added only
   * when the condition is truthy (see the `_startFadeOutTransition` method).
   */
  _activeRipples = /* @__PURE__ */new Map();
  /** Latest non-persistent ripple that was triggered. */
  _mostRecentTransientRipple;
  /** Time in milliseconds when the last touchstart event happened. */
  _lastTouchStartEvent;
  /** Whether pointer-up event listeners have been registered. */
  _pointerUpEventsRegistered = false;
  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  _containerRect;
  static _eventManager = new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
    if (injector) {
      injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" ||
    // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" ||
    // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach(type => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event2) {
    if (event2.type === "mousedown") {
      this._onMousedown(event2);
    } else if (event2.type === "touchstart") {
      this._onTouchStart(event2);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event2) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event2);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event2.clientX, event2.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event2) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event2)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event2.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach(ripple => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger2 = this._triggerElement;
    if (trigger2) {
      pointerDownEvents.forEach(type => _RippleRenderer._eventManager.removeHandler(type, trigger2, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => trigger2.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var MatRipple = class _MatRipple {
  _elementRef = inject(ElementRef);
  _animationsDisabled = _animationsDisabled();
  /** Custom color for all ripples. */
  color;
  /** Whether the ripples should be visible outside the component's bounds. */
  unbounded;
  /**
   * Whether the ripple always originates from the center of the host element's bounds, rather
   * than originating from the location of the click event.
   */
  centered;
  /**
   * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
   * will be the distance from the center of the ripple to the furthest corner of the host element's
   * bounding rectangle.
   */
  radius = 0;
  /**
   * Configuration for the ripple animation. Allows modifying the enter and exit animation
   * duration of the ripples. The animation durations will be overwritten if the
   * `NoopAnimationsModule` is being used.
   */
  animation;
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  _disabled = false;
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger2) {
    this._trigger = trigger2;
    this._setupTriggerEventsIfEnabled();
  }
  _trigger;
  /** Renderer for the ripple DOM manipulations. */
  _rippleRenderer;
  /** Options that are set globally for all ripples. */
  _globalOptions;
  /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
  _isInitialized = false;
  constructor() {
    const ngZone = inject(NgZone);
    const platform = inject(Platform);
    const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const injector = inject(Injector);
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRipple,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatRipple,
    isStandalone: true,
    selector: "[mat-ripple], [matRipple]",
    inputs: {
      color: ["matRippleColor", "color"],
      unbounded: ["matRippleUnbounded", "unbounded"],
      centered: ["matRippleCentered", "centered"],
      radius: ["matRippleRadius", "radius"],
      animation: ["matRippleAnimation", "animation"],
      disabled: ["matRippleDisabled", "disabled"],
      trigger: ["matRippleTrigger", "trigger"]
    },
    host: {
      properties: {
        "class.mat-ripple-unbounded": "unbounded"
      },
      classAttribute: "mat-ripple"
    },
    exportAs: ["matRipple"],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatRipple,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      }
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs
var MatPseudoCheckbox = class _MatPseudoCheckbox {
  _animationsDisabled = _animationsDisabled();
  /** Display state of the checkbox. */
  state = "unchecked";
  /** Whether the checkbox is disabled. */
  disabled = false;
  /**
   * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
   * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
   */
  appearance = "full";
  constructor() {}
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatPseudoCheckbox,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatPseudoCheckbox,
    isStandalone: true,
    selector: "mat-pseudo-checkbox",
    inputs: {
      state: "state",
      disabled: "disabled",
      appearance: "appearance"
    },
    host: {
      properties: {
        "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"',
        "class.mat-pseudo-checkbox-checked": 'state === "checked"',
        "class.mat-pseudo-checkbox-disabled": "disabled",
        "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"',
        "class.mat-pseudo-checkbox-full": 'appearance === "full"',
        "class._mat-animation-noopable": "_animationsDisabled"
      },
      classAttribute: "mat-pseudo-checkbox"
    },
    ngImport: core_exports,
    template: "",
    isInline: true,
    styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatPseudoCheckbox,
  decorators: [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      },
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  }
});

// node_modules/@angular/material/fesm2022/structural-styles-CObeNzjn.mjs
var _StructuralStylesLoader = class __StructuralStylesLoader {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: __StructuralStylesLoader,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: __StructuralStylesLoader,
    isStandalone: true,
    selector: "structural-styles",
    ngImport: core_exports,
    template: "",
    isInline: true,
    styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: _StructuralStylesLoader,
  decorators: [{
    type: Component,
    args: [{
      selector: "structural-styles",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n']
    }]
  }]
});

// node_modules/@angular/material/fesm2022/option-BzhYL_xC.mjs
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
  /** Label for the option group. */
  label;
  /** whether the option group is disabled. */
  disabled = false;
  /** Unique id for the underlying label. */
  _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
  /** Whether the group is in inert a11y mode. */
  _inert;
  constructor() {
    const parent = inject(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    this._inert = parent?.inertGroups ?? false;
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatOptgroup,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "16.1.0",
    version: "20.0.0",
    type: _MatOptgroup,
    isStandalone: true,
    selector: "mat-optgroup",
    inputs: {
      label: "label",
      disabled: ["disabled", "disabled", booleanAttribute]
    },
    host: {
      properties: {
        "attr.role": '_inert ? null : "group"',
        "attr.aria-disabled": "_inert ? null : disabled.toString()",
        "attr.aria-labelledby": "_inert ? null : _labelId"
      },
      classAttribute: "mat-mdc-optgroup"
    },
    providers: [{
      provide: MAT_OPTGROUP,
      useExisting: _MatOptgroup
    }],
    exportAs: ["matOptgroup"],
    ngImport: core_exports,
    template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
    styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatOptgroup,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  }
});
var MatOptionSelectionChange = class {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var MatOption = class _MatOption {
  _element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parent = inject(MAT_OPTION_PARENT_COMPONENT, {
    optional: true
  });
  group = inject(MAT_OPTGROUP, {
    optional: true
  });
  _signalDisableRipple = false;
  _selected = false;
  _active = false;
  _mostRecentViewValue = "";
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** The form value of the option. */
  value;
  /** The unique ID of the option. */
  id = inject(_IdGenerator).getId("mat-option-");
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false);
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  /** Event emitted when the option is selected or deselected. */
  // tslint:disable-next-line:no-output-on-prefix
  onSelectionChange = new EventEmitter();
  /** Element containing the option's text. */
  _text;
  /** Emits when the state of the option changes and any parents have to be notified. */
  _stateChanges = new Subject();
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event2) {
    if ((event2.keyCode === ENTER || event2.keyCode === SPACE) && !hasModifierKey(event2)) {
      this._selectViaInteraction();
      event2.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatOption,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.0.0",
    type: _MatOption,
    isStandalone: true,
    selector: "mat-option",
    inputs: {
      value: "value",
      id: "id",
      disabled: ["disabled", "disabled", booleanAttribute]
    },
    outputs: {
      onSelectionChange: "onSelectionChange"
    },
    host: {
      attributes: {
        "role": "option"
      },
      listeners: {
        "click": "_selectViaInteraction()",
        "keydown": "_handleKeydown($event)"
      },
      properties: {
        "class.mdc-list-item--selected": "selected",
        "class.mat-mdc-option-multiple": "multiple",
        "class.mat-mdc-option-active": "active",
        "class.mdc-list-item--disabled": "disabled",
        "id": "id",
        "attr.aria-selected": "selected",
        "attr.aria-disabled": "disabled.toString()"
      },
      classAttribute: "mat-mdc-option mdc-list-item"
    },
    viewQueries: [{
      propertyName: "_text",
      first: true,
      predicate: ["text"],
      descendants: true,
      static: true
    }],
    exportAs: ["matOption"],
    ngImport: core_exports,
    template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
    styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'],
    dependencies: [{
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }, {
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
  type: MatOption,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  }
});
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}

// src/app/pipes/search.pipe.ts
var SearchPipe = class SearchPipe2 {
  transform(value, args) {
    if (args === "" || !args) {
      return value;
    } else {
      if (value) {
        return value.filter(obj => {
          let keys = keysIn_default(obj);
          let objString = JSON.stringify(obj).toLowerCase();
          forEach_default(keys, k => {
            if (k) {
              let re = new RegExp('"' + k.toLowerCase() + '"', "g");
              objString = objString.replace(re, "");
            }
          });
          return objString.indexOf(args.toLowerCase()) !== -1;
        });
      }
    }
  }
};
SearchPipe = __decorate([Pipe({
  name: "search",
  standalone: true
})], SearchPipe);

// src/app/helpers/click-outside.directive.ts
var _a;
var ClickOutsideDirective = (_a = class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.clickOutside = new EventEmitter();
  }
  onClick(targetElement) {
    let exception;
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (this.clickOutsideExceptionClass && targetElement.classList && targetElement.classList.length > 0) {
      if (Array.isArray(this.clickOutsideExceptionClass)) {
        this.clickOutsideExceptionClass.forEach(css => {
          exception = exception || targetElement.classList.contains(css);
        });
      } else {
        exception = targetElement.classList.contains(this.clickOutsideExceptionClass);
      }
    }
    if (!clickedInside && !exception) {
      this.clickOutside.emit(null);
    }
  }
}, _a.ctorParameters = () => [{
  type: ElementRef
}], _a.propDecorators = {
  clickOutside: [{
    type: Output
  }],
  clickOutsideExceptionClass: [{
    type: Input
  }],
  onClick: [{
    type: HostListener,
    args: ["document:click", ["$event.target"]]
  }]
}, _a);
ClickOutsideDirective = __decorate([Directive({
  selector: "[clickOutside]",
  standalone: true
})], ClickOutsideDirective);

// node_modules/@angular/animations/fesm2022/private_export-B_vy_9K7.mjs
var AnimationMetadataType;
(function (AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function state(name, styles, options) {
  return {
    type: AnimationMetadataType.State,
    name,
    styles,
    options
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {}
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach(fn => fn());
    this._onStartFns = [];
  }
  pause() {}
  restart() {}
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach(player => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach(player => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach(fn => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach(player => player.play());
  }
  pause() {
    this.players.forEach(player => player.pause());
  }
  restart() {
    this.players.forEach(player => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach(player => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach(player => player.destroy());
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach(player => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach(player => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach(player => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
};
var ɵPRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.3",
    ngImport: core_exports,
    type: _AnimationBuilder,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.3",
    ngImport: core_exports,
    type: _AnimationBuilder,
    providedIn: "root",
    useFactory: () => inject(BrowserAnimationBuilder)
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.3",
  ngImport: core_exports,
  type: AnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }]
});
var AnimationFactory = class {};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.3",
    ngImport: core_exports,
    type: _BrowserAnimationBuilder,
    deps: [{
      token: RendererFactory2
    }, {
      token: DOCUMENT
    }],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.3",
    ngImport: core_exports,
    type: _BrowserAnimationBuilder,
    providedIn: "root"
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.3",
  ngImport: core_exports,
  type: BrowserAnimationBuilder,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }]
});
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// angular:jit:template:src\app\widgets\dcm-drop-down\dcm-drop-down.component.html
var dcm_drop_down_component_default = `<div class="overlay" *ngIf="showDropdown" (click)="showDropdown = false"></div>\r
<div class="dcm_dropdown" [ngClass]="{'single_mode':!multiSelectMode}">\r
  <div class="dropdown_input"  [ngClass]="{'editable':editable&&showDropdown}">\r
    <div class="input_part" (click)="!showDropdown && (showDropdown = true)">\r
        <!--<pre style="position:fixed;right:10px;width:70%;top:40px;z-index: 9999999;height: 200px;">{{selectedDropdown|json}}</pre>-->\r
        <ng-container *ngIf="multiSelectMode">\r
            <div class="selected_value" *ngIf="multiSelectValue.length > 0 && multiSelectValue.length <= maxSelectedValueShown">{{multiSelectValue | arrayToString:', '}}</div>\r
            <div class="selected_value" *ngIf="multiSelectValue.length > maxSelectedValueShown">( {{multiSelectValue.length}} ) selected</div>\r
            <div class="selected_value" *ngIf="multiSelectValue.length === 0">{{placeholder}}</div>\r
        </ng-container>\r
        <ng-container *ngIf="!multiSelectMode && ((selectedValue || showSelectedEmptyValue) && selectedDropdown)">\r
            <div class="selected_value" *ngIf="!(selectedDropdown && selectedDropdown.htmlLabel) && !editable">\r
                {{selectedDropdown.label || selectedDropdown.text || selectedDropdown.value}}\r
            </div>\r
            <div class="selected_value" *ngIf="selectedDropdown && selectedDropdown.htmlLabel" [innerHTML]="selectedDropdown.htmlLabel"></div>\r
        </ng-container>\r
        <input class="edited_input_value" *ngIf="!(selectedDropdown && selectedDropdown.htmlLabel) && editable && !multiSelectMode" title="{{placeholder}}" placeholder="{{placeholder}}" min="{{min}}" max="{{max}}" [(ngModel)]="selectedValue" (keyup)="inputChangedManually($event)">\r
      <div *ngIf="!((selectedValue || showSelectedEmptyValue) && selectedDropdown) && !multiSelectMode && !editable" class="selected_value empty_field">{{placeholder}}</div>\r
    </div>\r
    <span class="glyphicon glyphicon-triangle-bottom" (click)="toggleDropdown()"></span>\r
  </div>\r
  <div class="select" [@showHide]="showDropdown ? 'show':'hide'" >\r
    <div action="" class="search_block" *ngIf="showSearchField">\r
      <input type="checkbox"  class="dcm_input_checkbox" *ngIf="multiSelectMode" [(ngModel)]="isAllCheck" (change)="allChecked($event)">\r
      <input type="text" [ngClass]="{'single_input':!multiSelectMode}" i18n-placeholder="@@search" placeholder="Search" [(ngModel)]="search">\r
    </div>\r
      <div class="add_block" *ngIf="editable && optionsTree">\r
          <input class="edited_input_value"  title="{{addFieldPlaceholder}}" placeholder="{{addFieldPlaceholder}}" [(ngModel)]="customTreeElement">\r
          <span (click)="addCustomElement($event)" class="glyphicon glyphicon-plus"></span>\r
      </div>\r
      <ul *ngIf="!mixedMode" class="option_block">\r
          <li *ngIf="showStar" class="option" (click)="select('')">&nbsp;</li>\r
          <ng-container *ngIf="options && !optionsTree; else treeMode">\r
              <li class="option" (click)="select(option)" [ngClass]="{'active':option.selected}" title="{{option.title || ''}}" *ngFor="let option of options|search:search">\r
                  <input type="checkbox" class="dcm_input_checkbox" *ngIf="option.value && option.value != '' && multiSelectMode" [(ngModel)]="option.selected">\r
                  <div class="dcm_input_value" [ngClass]="{'with_checkbox':multiSelectMode}" *ngIf="option.htmlLabel" [innerHTML]="option.htmlLabel"></div>\r
                  <div class="dcm_input_value" [ngClass]="{'with_checkbox':multiSelectMode}" *ngIf="!option.htmlLabel">\r
                      {{option.label || option.text || option.value}}\r
                  </div>\r
              </li>\r
              <li class="option" *ngIf="!options || options.length === 0" (click)="select('')">\r
                 <div class="dcm_input_value" i18n="@@no_elements_found">\r
                  No Elements found\r
                 </div>\r
              </li>\r
          </ng-container>\r
          <ng-template #treeMode>\r
              <div class="tree_block">\r
                  @for (group of optionsTree; track $index) {\r
                      @if (group.label && group.label != '') {\r
                          <label class="tree_label">{{ group.label }}</label>\r
                      }\r
                      @for (option of group.options|search:search; track option.label) {\r
                          <li class="option" (click)="select(option)"\r
                              [ngClass]="{'active':option.selected,'tree':(group.label && group.label != '')}"\r
                              title="{{option.title || ''}}">\r
                              @if (option.value && option.value != '' && multiSelectMode) {\r
                                  <input type="checkbox" class="dcm_input_checkbox"\r
                                         [(ngModel)]="option.selected">\r
                              }\r
                              @if (option.htmlLabel) {\r
                                  <div class="dcm_input_value" [ngClass]="{'with_checkbox':multiSelectMode}"\r
                                       [innerHTML]="option.htmlLabel"></div>\r
                              }\r
                              @if (!option.htmlLabel) {\r
                                  <div class="dcm_input_value" [ngClass]="{'with_checkbox':multiSelectMode}">\r
                                      {{ option.label || option.text || option.value }}\r
                                  </div>\r
                              }\r
                          </li>\r
                      }\r
                      @if (!group || optionsTree?.length === 0) {\r
                          <li class="option" (click)="select('')">\r
                              <div class="dcm_input_value" i18n="@@no_elements_found">\r
                                  No Elements found\r
                              </div>\r
                          </li>\r
                      }\r
                  }\r
              </div>\r
\r
          </ng-template>\r
      </ul>\r
  </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dcm-drop-down\dcm-drop-down.component.scss
var dcm_drop_down_component_default2 = "/* src/app/widgets/dcm-drop-down/dcm-drop-down.component.scss */\n.dcm_dropdown {\n  float: left;\n  position: relative;\n  width: 100%;\n}\n.dcm_dropdown .dropdown_input {\n  min-width: 100px;\n  border-bottom: 1px solid #cccccc;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 7px;\n}\n.dcm_dropdown .dropdown_input:hover {\n  cursor: pointer;\n}\n.dcm_dropdown .dropdown_input span.glyphicon-triangle-bottom {\n  width: 20px;\n  font-size: 9px;\n  height: 100%;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dcm_dropdown .dropdown_input .input_part {\n  width: calc(100% - 20px);\n  display: inline-block;\n  float: left;\n  min-height: 25px;\n}\n.dcm_dropdown .dropdown_input .input_part .edited_input_value {\n  border: 0;\n  padding-left: 0;\n  height: 30px;\n  width: 100%;\n  outline: none;\n  background: transparent;\n}\n.dcm_dropdown .dropdown_input .input_part .edited_input_value:focus {\n  outline: none;\n}\n.dcm_dropdown .dropdown_input.editable {\n  position: relative;\n  background: white;\n  z-index: 99999;\n}\n.dcm_dropdown .dropdown_input.editable .edited_input_value {\n  color: black;\n}\n.dcm_dropdown .dropdown_input.editable .edited_input_value::placeholder {\n  color: black;\n}\n.dcm_dropdown .dropdown_input .selected_value {\n  max-height: 30px;\n  overflow: hidden;\n}\n.dcm_dropdown .dropdown_input .selected_value.empty_field {\n  font-style: italic;\n  color: #444444;\n}\n.dcm_dropdown .dropdown_input .selected_value:hover,\n.dcm_dropdown .dropdown_input .selected_value *:hover {\n  cursor: pointer;\n}\n.dcm_dropdown .dropdown_input:focus {\n  outline: none;\n}\n.dcm_dropdown .select {\n  -webkit-box-shadow: 2px 2px 11px 0px #333;\n  -moz-box-shadow: 2px 2px 11px 0px #333;\n  box-shadow: 2px 2px 11px 0px #333;\n  position: fixed;\n  background: white;\n  z-index: 99999;\n  min-width: 200px;\n  max-height: 250px;\n  overflow: auto;\n  margin-bottom: 5px;\n}\n.dcm_dropdown .select .option_block {\n  list-style: none;\n  padding-left: 0;\n  float: left;\n  width: 100%;\n  overflow: hidden;\n}\n.dcm_dropdown .select .option_block .option.active {\n  background: #cccccc;\n}\n.dcm_dropdown .select .option_block .option {\n  width: 100%;\n  height: 30px;\n  padding: 0px 20px;\n}\n.dcm_dropdown .select .option_block .option.tree {\n  padding: 0px 25px;\n}\n.dcm_dropdown .select .option_block .option input[type=checkbox] {\n  float: left;\n  width: 30px;\n  margin: 8px 0px;\n}\n.dcm_dropdown .select .option_block .option .dcm_input_value {\n  float: left;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  color: black;\n  white-space: nowrap;\n}\n.dcm_dropdown .select .option_block .option .dcm_input_value.with_checkbox {\n  width: calc(100% - 30px);\n}\n.dcm_dropdown .select .option_block li.option {\n  border-bottom: 1px solid #ccc;\n  display: flex;\n}\n.dcm_dropdown .select .option_block .option:hover {\n  cursor: pointer;\n  background: rgba(28, 36, 43, 0.1);\n}\n.dcm_dropdown .select .add_block input {\n  margin-left: 30px;\n  width: calc(100% - 60px);\n}\n.dcm_dropdown .select .add_block .glyphicon-plus {\n  width: 30px;\n  text-align: center;\n  line-height: 25px;\n  height: 28px;\n  color: white;\n  background: var(--backgroundColor);\n}\n.dcm_dropdown .search_block,\n.dcm_dropdown .add_block {\n  width: 100%;\n  height: 30px;\n  float: left;\n  border-bottom: 1px solid #ccc;\n  margin-top: 2px;\n}\n.dcm_dropdown .search_block input[type=text],\n.dcm_dropdown .add_block input[type=text] {\n  width: calc(100% - 32px);\n  float: left;\n  color: #000000;\n}\n.dcm_dropdown .search_block input[type=checkbox],\n.dcm_dropdown .add_block input[type=checkbox] {\n  width: 30px;\n  float: left;\n  margin: 8px 0px;\n}\n.dcm_dropdown.single_mode input {\n  width: calc(100% - 30px);\n}\n.dcm_dropdown.single_mode .search_block input[type=text] {\n  width: calc(100% - 4px);\n  margin: 2px;\n}\n.dcm_dropdown.single_mode .option_block .option {\n  padding-left: 15px;\n}\n.dcm_dropdown .tree_label {\n  color: #000;\n  font-weight: bold;\n  padding-left: 15px;\n  height: 30px;\n  line-height: 30px;\n  width: 100%;\n  border-bottom: 1px solid #333;\n}\n.dcm_dropdown .tree_block {\n  border-bottom: 1px solid #444444;\n}\n";

// src/app/pipes/array-to-string.pipe.ts
var ArrayToStringPipe = class ArrayToStringPipe2 {
  transform(value, args) {
    try {
      if (value) {
        let delimiter = args || ", ";
        if (isString_default(value[0])) {
          return value.join(delimiter);
        } else {
          if (hasIn_default(value, "0.text") || hasIn_default(value, "0.value") || hasIn_default(value, "0.label")) {
            return value.map(el => {
              return el.text || el.value || el.label;
            }).join(delimiter);
          } else {
            return value.map(el => {
              return values_default(el).filter(e => isString_default(e))[0];
            }).join(delimiter);
          }
        }
      }
    } catch (e) {
      console.log("Error on pipe ArrayToStringPipe", e);
    }
    return null;
  }
};
ArrayToStringPipe = __decorate([Pipe({
  name: "arrayToString",
  pure: false,
  standalone: true
})], ArrayToStringPipe);

// src/app/widgets/dcm-drop-down/dcm-drop-down.component.ts
var _a2;
var DcmDropDownComponent = (_a2 = class {
  set options(values) {
    this._options = cloneDeep_default(values);
    if (values) {
      values.forEach(option => {
        if (option.selected) {
          this.selectedDropdown = option;
          this.selectedValue = option.value;
        }
      });
    } else {
      this.selectedDropdown = void 0;
      this.selectedValue = void 0;
    }
  }
  get options() {
    return this._options;
  }
  set optionsTree(value) {
    this._optionsTree = value;
    let count = 0;
    if (value) {
      try {
        value.forEach(el => {
          el.options.forEach(option => {
            if (option.selected) {
              this.selectedDropdown = option;
              this.selectedValue = option.value;
              count++;
            }
          });
        });
        if (this.multiSelectValue && count != this.multiSelectValue.length) {
          this.selectElementInTreeByValue(this.multiSelectValue);
        }
      } catch (e) {
        console.error("Value not undefined but selectedValue could not be set", e);
        console.log("Value:", value);
      }
    }
  }
  get optionsTree() {
    return this._optionsTree;
  }
  set model(value) {
    if (!(this.selectedDropdown && this.selectedDropdown.value === value) && !this.multiSelectMode) {
      if (value) {
        this.selectedValue = value;
        this.selectedDropdown = this.getSelectDropdownFromValue(value);
        this.setSelectedElement();
      } else {
        this.clearSelection();
      }
    } else {
      if (this.multiSelectMode) {
        if (value && typeof value === "string") {
          if (value.indexOf(",") > -1) {
            this.multiSelectValue = value.split(",");
          } else {
            this.multiSelectValue = [value];
          }
        } else {
          this.multiSelectValue = value || [];
        }
        this.setSelectedElement();
      }
    }
  }
  get model() {
    if (this.multiSelectMode) {
      this.modelChange.emit(this.multiSelectValue);
      return this.multiSelectValue;
    } else {
      this.modelChange.emit(this.selectedValue);
      return this.selectedValue;
    }
  }
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.isAllCheck = false;
    this.multiSelectValue = [];
    this.search = "";
    this.addFieldPlaceholder = "Add element";
    this.multiSelectMode = false;
    this.showSearchField = false;
    this.mixedMode = false;
    this.maxSelectedValueShown = 2;
    this.showSelectedEmptyValue = false;
    this.editable = false;
    this.showStar = false;
    this.modelChange = new EventEmitter();
    this.showDropdown = false;
  }
  ngOnInit() {}
  inputChangedManually(e) {
    console.log("e", e);
    this.selectedDropdown = void 0;
    this.modelChange.emit(this.selectedValue);
  }
  selectOptionByValue(value) {
    if (this.multiSelectMode) {} else {}
  }
  clearSelection() {
    this.selectedValue = void 0;
    this.selectedDropdown = void 0;
    if (this.options) {
      this.options.forEach(option => {
        option.selected = false;
      });
    }
  }
  getSelectDropdownFromValue(value) {
    if (value && this.options) {
      for (let element of this.options) {
        if (element.value === value) {
          return element;
        }
      }
      ;
    }
    return void 0;
  }
  selectElementInTreeByValue(values) {
    try {
      let valueCopy = Array.from(values);
      let i = valueCopy.length;
      while (i--) {
        this._optionsTree.forEach(optionBlock => {
          optionBlock.options.forEach(option => {
            if (valueCopy[i] === option.value) {
              option.selected = true;
              valueCopy.splice(i, 1);
            }
          });
        });
      }
      if (valueCopy.length > 0) {
        valueCopy.forEach(value => {
          this.optionsTree[0].options.unshift(new SelectDropdown(value, value, void 0, void 0, void 0, void 0, true));
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  allChecked(e) {
    this.multiSelectValue = [];
    this.options.forEach(element => {
      element.selected = this.isAllCheck;
      if (this.isAllCheck) {
        this.multiSelectValue.push(element.value);
      }
    });
    this.modelChange.emit(this.multiSelectValue);
  }
  setSelectedElement() {
    if (this.multiSelectMode) {
      if (this.options && this.multiSelectValue) {
        let count = 0;
        this.options.forEach(element => {
          if (this.multiSelectValue.indexOf(element.value) > -1) {
            element.selected = true;
            count++;
          } else {
            element.selected = false;
          }
        });
        if (count === this.options.length) {
          this.isAllCheck = true;
        } else {
          this.isAllCheck = false;
        }
        this.modelChange.emit(this.multiSelectValue);
      } else {
        console.warn("in tree", this.optionsTree);
        console.log("mutliselectvalue", this.multiSelectValue);
      }
    } else {
      if (this.options && this.selectedValue) {
        this.options.forEach(element => {
          if (element.value === this.selectedValue || element.value === this.selectedValue) {
            element.selected = true;
          } else {
            element.selected = false;
          }
        });
        this.modelChange.emit(this.selectedValue);
      } else {
        console.error("in else", this.options, "selectedValue", this.selectedValue);
      }
    }
  }
  addCustomElement(e) {
    try {
      this.optionsTree[0].options.unshift(new SelectDropdown(this.customTreeElement, this.customTreeElement));
      this.customTreeElement = "";
    } catch (e2) {}
  }
  select(element) {
    if (this.multiSelectMode) {
      if (element === "") {
        this.multiSelectValue = [];
        this.options.forEach(option => {
          option.selected = false;
        });
        this.isAllCheck = false;
      } else {
        let index = this.multiSelectValue.indexOf(element.value);
        if (index > -1) {
          this.multiSelectValue.splice(index, 1);
          element.selected = false;
        } else {
          this.multiSelectValue.push(element.value);
          element.selected = true;
        }
      }
      if (this.options && this.multiSelectValue.length === this.options.length || this.optionsTree && this.multiSelectValue.length === this.optionsTree.length) {
        this.isAllCheck = true;
      } else {
        this.isAllCheck = false;
      }
      this.modelChange.emit(this.multiSelectValue);
    } else {
      if (!this.mixedMode && this.options) {
        this.options.forEach(option => {
          option.selected = false;
        });
      }
      if (element === "") {
        this.selectedValue = "";
        this.selectedDropdown = void 0;
      } else {
        element.selected = true;
        this.selectedDropdown = element;
        this.selectedValue = element.value;
      }
      this.showDropdown = false;
      this.modelChange.emit(this.selectedValue);
    }
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}, _a2.ctorParameters = () => [{
  type: ChangeDetectorRef
}], _a2.propDecorators = {
  placeholder: [{
    type: Input
  }],
  multiSelectMode: [{
    type: Input
  }],
  showSearchField: [{
    type: Input
  }],
  mixedMode: [{
    type: Input
  }],
  maxSelectedValueShown: [{
    type: Input
  }],
  showSelectedEmptyValue: [{
    type: Input
  }],
  options: [{
    type: Input
  }],
  optionsTree: [{
    type: Input
  }],
  editable: [{
    type: Input
  }],
  min: [{
    type: Input
  }],
  max: [{
    type: Input
  }],
  showStar: [{
    type: Input
  }],
  model: [{
    type: Input,
    args: ["model"]
  }],
  modelChange: [{
    type: Output
  }]
}, _a2);
DcmDropDownComponent = __decorate([Component({
  selector: "dcm-drop-down",
  template: dcm_drop_down_component_default,
  animations: [trigger("showHide", [state("show", style({
    padding: "*",
    height: "*",
    opacity: 1
  })), state("hide", style({
    padding: "0",
    opacity: 0,
    height: "0px",
    margin: "0"
  })), transition("show => hide", [animate("0.1s")]), transition("hide => show", [animate("0.2s cubic-bezier(.52,-0.01,.15,1)")])])],
  imports: [NgClass, FormsModule, ArrayToStringPipe, CommonModule, SearchPipe],
  standalone: true,
  styles: [dcm_drop_down_component_default2]
})], DcmDropDownComponent);

// node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher-Cewa_Eg3.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter(registered => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _UniqueSelectionDispatcher,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _UniqueSelectionDispatcher,
    providedIn: "root"
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: UniqueSelectionDispatcher,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});

// node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs
var SelectionModel = class {
  _multiple;
  _emitChanges;
  compareWith;
  /** Currently-selected values. */
  _selection = /* @__PURE__ */new Set();
  /** Keeps track of the deselected options that haven't been emitted by the change event. */
  _deselectedToEmit = [];
  /** Keeps track of the selected options that haven't been emitted by the change event. */
  _selectedToEmit = [];
  /** Cache for the array value of the selected items. */
  _selected;
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  /** Event emitted when the value has changed. */
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map(value => this._getConcreteValue(value)));
    values.forEach(value => this._markSelected(value));
    oldValues.filter(value => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler = e => {
  if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
var SingleBoxSharedResizeObserver = class {
  _box;
  /** Stream that emits when the shared observer is destroyed. */
  _destroyed = new Subject();
  /** Stream of all events from the ResizeObserver. */
  _resizeSubject = new Subject();
  /** ResizeObserver used to observe element resize events. */
  _resizeObserver;
  /** A map of elements to streams of their resize events. */
  _elementObservables = /* @__PURE__ */new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver(entries => this._resizeSubject.next(entries));
    }
  }
  /**
   * Gets a stream of resize events for the given element.
   * @param target The element to observe.
   * @return The stream of resize events for the element.
   */
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new Observable(observer => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe(filter(entries => entries.some(entry => entry.target === target)),
      // Share a replay of the last event so that subsequent calls to observe the same element
      // receive initial sizing info like the first one. Also enable ref counting so the
      // element will be automatically unobserved when there are no more subscriptions.
      shareReplay({
        bufferSize: 1,
        refCount: true
      }), takeUntil(this._destroyed)));
    }
    return this._elementObservables.get(target);
  }
  /** Destroys this instance. */
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
};
var SharedResizeObserver = class _SharedResizeObserver {
  _cleanupErrorListener;
  /** Map of box type to shared resize observer. */
  _observers = /* @__PURE__ */new Map();
  /** The Angular zone. */
  _ngZone = inject(NgZone);
  constructor() {
    if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    this._cleanupErrorListener?.();
  }
  /**
   * Gets a stream of resize events for the given target element and box type.
   * @param target The element to observe for resizes.
   * @param options Options to pass to the `ResizeObserver`
   * @return The stream of resize events for the element.
   */
  observe(target, options) {
    const box = options?.box || "content-box";
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _SharedResizeObserver,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _SharedResizeObserver,
    providedIn: "root"
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: SharedResizeObserver,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => []
});

// node_modules/@angular/material/fesm2022/form-field-C9DZXojn.mjs
var MatLabel = class _MatLabel {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatLabel,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatLabel,
    isStandalone: true,
    selector: "mat-label",
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatLabel,
  decorators: [{
    type: Directive,
    args: [{
      selector: "mat-label"
    }]
  }]
});
var MAT_ERROR = new InjectionToken("MatError");
var MatError = class _MatError {
  id = inject(_IdGenerator).getId("mat-mdc-error-");
  constructor() {}
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatError,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatError,
    isStandalone: true,
    selector: "mat-error, [matError]",
    inputs: {
      id: "id"
    },
    host: {
      properties: {
        "id": "id"
      },
      classAttribute: "mat-mdc-form-field-error mat-mdc-form-field-bottom-align"
    },
    providers: [{
      provide: MAT_ERROR,
      useExisting: _MatError
    }],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatError,
  decorators: [{
    type: Directive,
    args: [{
      selector: "mat-error, [matError]",
      host: {
        "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
        "[id]": "id"
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    id: [{
      type: Input
    }]
  }
});
var MatHint = class _MatHint {
  /** Whether to align the hint label at the start or end of the line. */
  align = "start";
  /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
  id = inject(_IdGenerator).getId("mat-mdc-hint-");
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatHint,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatHint,
    isStandalone: true,
    selector: "mat-hint",
    inputs: {
      align: "align",
      id: "id"
    },
    host: {
      properties: {
        "class.mat-mdc-form-field-hint-end": 'align === "end"',
        "id": "id",
        "attr.align": "null"
      },
      classAttribute: "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align"
    },
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatHint,
  decorators: [{
    type: Directive,
    args: [{
      selector: "mat-hint",
      host: {
        "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
        "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
        "[id]": "id",
        // Remove align attribute to prevent it from interfering with layout.
        "[attr.align]": "null"
      }
    }]
  }],
  propDecorators: {
    align: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  }
});
var MAT_PREFIX = new InjectionToken("MatPrefix");
var MatPrefix = class _MatPrefix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatPrefix,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatPrefix,
    isStandalone: true,
    selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
    inputs: {
      _isTextSelector: ["matTextPrefix", "_isTextSelector"]
    },
    providers: [{
      provide: MAT_PREFIX,
      useExisting: _MatPrefix
    }],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatPrefix,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }],
  propDecorators: {
    _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }]
  }
});
var MAT_SUFFIX = new InjectionToken("MatSuffix");
var MatSuffix = class _MatSuffix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSuffix,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatSuffix,
    isStandalone: true,
    selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
    inputs: {
      _isTextSelector: ["matTextSuffix", "_isTextSelector"]
    },
    providers: [{
      provide: MAT_SUFFIX,
      useExisting: _MatSuffix
    }],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatSuffix,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }],
  propDecorators: {
    _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }]
  }
});
var FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
var MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
  _elementRef = inject(ElementRef);
  /** Whether the label is floating. */
  get floating() {
    return this._floating;
  }
  set floating(value) {
    this._floating = value;
    if (this.monitorResize) {
      this._handleResize();
    }
  }
  _floating = false;
  /** Whether to monitor for resize events on the floating label. */
  get monitorResize() {
    return this._monitorResize;
  }
  set monitorResize(value) {
    this._monitorResize = value;
    if (this._monitorResize) {
      this._subscribeToResize();
    } else {
      this._resizeSubscription.unsubscribe();
    }
  }
  _monitorResize = false;
  /** The shared ResizeObserver. */
  _resizeObserver = inject(SharedResizeObserver);
  /** The Angular zone. */
  _ngZone = inject(NgZone);
  /** The parent form-field. */
  _parent = inject(FLOATING_LABEL_PARENT);
  /** The current resize event subscription. */
  _resizeSubscription = new Subscription();
  constructor() {}
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** Gets the width of the label. Used for the outline notch. */
  getWidth() {
    return estimateScrollWidth(this._elementRef.nativeElement);
  }
  /** Gets the HTML element for the floating label. */
  get element() {
    return this._elementRef.nativeElement;
  }
  /** Handles resize events from the ResizeObserver. */
  _handleResize() {
    setTimeout(() => this._parent._handleLabelResized());
  }
  /** Subscribes to resize events. */
  _subscribeToResize() {
    this._resizeSubscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
        box: "border-box"
      }).subscribe(() => this._handleResize());
    });
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldFloatingLabel,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatFormFieldFloatingLabel,
    isStandalone: true,
    selector: "label[matFormFieldFloatingLabel]",
    inputs: {
      floating: "floating",
      monitorResize: "monitorResize"
    },
    host: {
      properties: {
        "class.mdc-floating-label--float-above": "floating"
      },
      classAttribute: "mdc-floating-label mat-mdc-floating-label"
    },
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormFieldFloatingLabel,
  decorators: [{
    type: Directive,
    args: [{
      selector: "label[matFormFieldFloatingLabel]",
      host: {
        "class": "mdc-floating-label mat-mdc-floating-label",
        "[class.mdc-floating-label--float-above]": "floating"
      }
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    floating: [{
      type: Input
    }],
    monitorResize: [{
      type: Input
    }]
  }
});
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
var ACTIVATE_CLASS = "mdc-line-ripple--active";
var DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
var MatFormFieldLineRipple = class _MatFormFieldLineRipple {
  _elementRef = inject(ElementRef);
  _cleanupTransitionEnd;
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(Renderer2);
    ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
    });
  }
  activate() {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(DEACTIVATING_CLASS);
    classList.add(ACTIVATE_CLASS);
  }
  deactivate() {
    this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
  }
  _handleTransitionEnd = event2 => {
    const classList = this._elementRef.nativeElement.classList;
    const isDeactivating = classList.contains(DEACTIVATING_CLASS);
    if (event2.propertyName === "opacity" && isDeactivating) {
      classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
    }
  };
  ngOnDestroy() {
    this._cleanupTransitionEnd();
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldLineRipple,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatFormFieldLineRipple,
    isStandalone: true,
    selector: "div[matFormFieldLineRipple]",
    host: {
      classAttribute: "mdc-line-ripple"
    },
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormFieldLineRipple,
  decorators: [{
    type: Directive,
    args: [{
      selector: "div[matFormFieldLineRipple]",
      host: {
        "class": "mdc-line-ripple"
      }
    }]
  }],
  ctorParameters: () => []
});
var MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  /** Whether the notch should be opened. */
  open = false;
  _notch;
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    const label = element.querySelector(".mdc-floating-label");
    if (label) {
      element.classList.add("mdc-notched-outline--upgraded");
      if (typeof requestAnimationFrame === "function") {
        label.style.transitionDuration = "0s";
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => label.style.transitionDuration = "");
        });
      }
    } else {
      element.classList.add("mdc-notched-outline--no-label");
    }
  }
  _setNotchWidth(labelWidth) {
    const notch = this._notch.nativeElement;
    if (!this.open || !labelWidth) {
      notch.style.width = "";
    } else {
      const NOTCH_ELEMENT_PADDING = 8;
      const NOTCH_ELEMENT_BORDER = 1;
      notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
    }
  }
  _setMaxWidth(prefixAndSuffixWidth) {
    this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldNotchedOutline,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatFormFieldNotchedOutline,
    isStandalone: true,
    selector: "div[matFormFieldNotchedOutline]",
    inputs: {
      open: ["matFormFieldNotchedOutlineOpen", "open"]
    },
    host: {
      properties: {
        "class.mdc-notched-outline--notched": "open"
      },
      classAttribute: "mdc-notched-outline"
    },
    viewQueries: [{
      propertyName: "_notch",
      first: true,
      predicate: ["notch"],
      descendants: true
    }],
    ngImport: core_exports,
    template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormFieldNotchedOutline,
  decorators: [{
    type: Component,
    args: [{
      selector: "div[matFormFieldNotchedOutline]",
      host: {
        "class": "mdc-notched-outline",
        // Besides updating the notch state through the MDC component, we toggle this class through
        // a host binding in order to ensure that the notched-outline renders correctly on the server.
        "[class.mdc-notched-outline--notched]": "open"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n'
    }]
  }],
  propDecorators: {
    open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }],
    _notch: [{
      type: ViewChild,
      args: ["notch"]
    }]
  }
});
var MatFormFieldControl = class _MatFormFieldControl {
  /** The value of the control. */
  value;
  /**
   * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
   * needs to run change detection.
   */
  stateChanges;
  /** The element ID for this control. */
  id;
  /** The placeholder for this control. */
  placeholder;
  /** Gets the AbstractControlDirective for this control. */
  ngControl;
  /** Whether the control is focused. */
  focused;
  /** Whether the control is empty. */
  empty;
  /** Whether the `MatFormField` label should try to float. */
  shouldLabelFloat;
  /** Whether the control is required. */
  required;
  /** Whether the control is disabled. */
  disabled;
  /** Whether the control is in an error state. */
  errorState;
  /**
   * An optional name for the control type that can be used to distinguish `mat-form-field` elements
   * based on their control type. The form field will add a class,
   * `mat-form-field-type-{{controlType}}` to its root element.
   */
  controlType;
  /**
   * Whether the input is currently in an autofilled state. If property is not present on the
   * control it is assumed to be false.
   */
  autofilled;
  /**
   * Value of `aria-describedby` that should be merged with the described-by ids
   * which are set by the form-field.
   */
  userAriaDescribedBy;
  /**
   * Whether to automatically assign the ID of the form field as the `for` attribute
   * on the `<label>` inside the form field. Set this to true to prevent the form
   * field from associating the label with non-native elements.
   */
  disableAutomaticLabeling;
  /** Gets the list of element IDs that currently describe this control. */
  describedByIds;
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldControl,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatFormFieldControl,
    isStandalone: true,
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormFieldControl,
  decorators: [{
    type: Directive
  }]
});
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MAT_FORM_FIELD = new InjectionToken("MatFormField");
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
var DEFAULT_APPEARANCE = "fill";
var DEFAULT_FLOAT_LABEL = "auto";
var DEFAULT_SUBSCRIPT_SIZING = "fixed";
var FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
var MatFormField = class _MatFormField {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality);
  _platform = inject(Platform);
  _idGenerator = inject(_IdGenerator);
  _ngZone = inject(NgZone);
  _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
    optional: true
  });
  _textField;
  _iconPrefixContainer;
  _textPrefixContainer;
  _iconSuffixContainer;
  _textSuffixContainer;
  _floatingLabel;
  _notchedOutline;
  _lineRipple;
  _iconPrefixContainerSignal = viewChild("iconPrefixContainer");
  _textPrefixContainerSignal = viewChild("textPrefixContainer");
  _iconSuffixContainerSignal = viewChild("iconSuffixContainer");
  _textSuffixContainerSignal = viewChild("textSuffixContainer");
  _prefixSuffixContainers = computed(() => {
    return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map(container => container?.nativeElement).filter(e => e !== void 0);
  });
  _formFieldControl;
  _prefixChildren;
  _suffixChildren;
  _errorChildren;
  _hintChildren;
  _labelChild = contentChild(MatLabel);
  /** Whether the required marker should be hidden. */
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = coerceBooleanProperty(value);
  }
  _hideRequiredMarker = false;
  /**
   * Theme color of the form field. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/form-field/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color = "primary";
  /** Whether the label should always float or float as the user types. */
  get floatLabel() {
    return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _floatLabel;
  /** The form field appearance style. */
  get appearance() {
    return this._appearanceSignal();
  }
  set appearance(value) {
    const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (newAppearance !== "fill" && newAppearance !== "outline") {
        throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
      }
    }
    this._appearanceSignal.set(newAppearance);
  }
  _appearanceSignal = signal(DEFAULT_APPEARANCE);
  /**
   * Whether the form field should reserve space for one line of hint/error text (default)
   * or to have the spacing grow from 0px as needed based on the size of the hint/error content.
   * Note that when using dynamic sizing, layout shifts will occur when hint/error text changes.
   */
  get subscriptSizing() {
    return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  set subscriptSizing(value) {
    this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  _subscriptSizing = null;
  /** Text for the form field hint. */
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  _hintLabel = "";
  _hasIconPrefix = false;
  _hasTextPrefix = false;
  _hasIconSuffix = false;
  _hasTextSuffix = false;
  // Unique id for the internal form field label.
  _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
  // Unique id for the hint label.
  _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
  // Ids obtained from the error and hint fields
  _describedByIds;
  /** Gets the current form field control */
  get _control() {
    return this._explicitFormFieldControl || this._formFieldControl;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  _destroyed = new Subject();
  _isFocused = null;
  _explicitFormFieldControl;
  _previousControl = null;
  _previousControlValidatorFn = null;
  _stateChanges;
  _valueChanges;
  _describedByChanges;
  _animationsDisabled = _animationsDisabled();
  constructor() {
    const defaults = this._defaults;
    if (defaults) {
      if (defaults.appearance) {
        this.appearance = defaults.appearance;
      }
      this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
      if (defaults.color) {
        this.color = defaults.color;
      }
    }
    this._syncOutlineLabelOffset();
  }
  ngAfterViewInit() {
    this._updateFocusState();
    if (!this._animationsDisabled) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
        }, 300);
      });
    }
    this._changeDetectorRef.detectChanges();
  }
  ngAfterContentInit() {
    this._assertFormFieldControl();
    this._initializeSubscript();
    this._initializePrefixAndSuffix();
  }
  ngAfterContentChecked() {
    this._assertFormFieldControl();
    if (this._control !== this._previousControl) {
      this._initializeControl(this._previousControl);
      if (this._control.ngControl && this._control.ngControl.control) {
        this._previousControlValidatorFn = this._control.ngControl.control.validator;
      }
      this._previousControl = this._control;
    }
    if (this._control.ngControl && this._control.ngControl.control) {
      const validatorFn = this._control.ngControl.control.validator;
      if (validatorFn !== this._previousControlValidatorFn) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  ngOnDestroy() {
    this._outlineLabelOffsetResizeObserver?.disconnect();
    this._stateChanges?.unsubscribe();
    this._valueChanges?.unsubscribe();
    this._describedByChanges?.unsubscribe();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */
  getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null);
  /**
   * Gets an ElementRef for the element that a overlay attached to the form field
   * should be positioned relative to.
   */
  getConnectedOverlayOrigin() {
    return this._textField || this._elementRef;
  }
  /** Animates the placeholder up and locks it in position. */
  _animateAndLockLabel() {
    if (this._hasFloatingLabel()) {
      this.floatLabel = "always";
    }
  }
  /** Initializes the registered form field control. */
  _initializeControl(previousControl) {
    const control = this._control;
    const classPrefix = "mat-mdc-form-field-type-";
    if (previousControl) {
      this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
    }
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
    }
    this._stateChanges?.unsubscribe();
    this._stateChanges = control.stateChanges.subscribe(() => {
      this._updateFocusState();
      this._changeDetectorRef.markForCheck();
    });
    this._describedByChanges?.unsubscribe();
    this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
      return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
    })).subscribe(() => this._syncDescribedByIds());
    this._valueChanges?.unsubscribe();
    if (control.ngControl && control.ngControl.valueChanges) {
      this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
  }
  _checkPrefixAndSuffixTypes() {
    this._hasIconPrefix = !!this._prefixChildren.find(p => !p._isText);
    this._hasTextPrefix = !!this._prefixChildren.find(p => p._isText);
    this._hasIconSuffix = !!this._suffixChildren.find(s => !s._isText);
    this._hasTextSuffix = !!this._suffixChildren.find(s => s._isText);
  }
  /** Initializes the prefix and suffix containers. */
  _initializePrefixAndSuffix() {
    this._checkPrefixAndSuffixTypes();
    merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._checkPrefixAndSuffixTypes();
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
   * with the custom form field control. Also subscribes to hint and error changes in order
   * to be able to validate and synchronize ids on change.
   */
  _initializeSubscript() {
    this._hintChildren.changes.subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    this._validateHints();
    this._syncDescribedByIds();
  }
  /** Throws an error if the form field's control is missing. */
  _assertFormFieldControl() {
    if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  _updateFocusState() {
    if (this._control.focused && !this._isFocused) {
      this._isFocused = true;
      this._lineRipple?.activate();
    } else if (!this._control.focused && (this._isFocused || this._isFocused === null)) {
      this._isFocused = false;
      this._lineRipple?.deactivate();
    }
    this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", this._control.focused);
  }
  _outlineLabelOffsetResizeObserver = null;
  /**
   * The floating label in the docked state needs to account for prefixes. The horizontal offset
   * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
   * form field is added to the DOM. This method sets up all subscriptions which are needed to
   * trigger the label offset update.
   */
  _syncOutlineLabelOffset() {
    afterRenderEffect({
      earlyRead: () => {
        if (this._appearanceSignal() !== "outline") {
          this._outlineLabelOffsetResizeObserver?.disconnect();
          return null;
        }
        if (globalThis.ResizeObserver) {
          this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
            this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
          });
          for (const el of this._prefixSuffixContainers()) {
            this._outlineLabelOffsetResizeObserver.observe(el, {
              box: "border-box"
            });
          }
        }
        return this._getOutlinedLabelOffset();
      },
      write: labelStyles => this._writeOutlinedLabelStyles(labelStyles())
    });
  }
  /** Whether the floating label should always float or not. */
  _shouldAlwaysFloat() {
    return this.floatLabel === "always";
  }
  _hasOutline() {
    return this.appearance === "outline";
  }
  /**
   * Whether the label should display in the infix. Labels in the outline appearance are
   * displayed as part of the notched-outline and are horizontally offset to account for
   * form field prefix content. This won't work in server side rendering since we cannot
   * measure the width of the prefix container. To make the docked label appear as if the
   * right offset has been calculated, we forcibly render the label inside the infix. Since
   * the label is part of the infix, the label cannot overflow the prefix content.
   */
  _forceDisplayInfixLabel() {
    return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
  }
  _hasFloatingLabel = computed(() => !!this._labelChild());
  _shouldLabelFloat() {
    if (!this._hasFloatingLabel()) {
      return false;
    }
    return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
  }
  /**
   * Determines whether a class from the AbstractControlDirective
   * should be forwarded to the host element.
   */
  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }
  /** Gets the type of subscript message to render (error or hint). */
  _getSubscriptMessageType() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
  }
  /** Handle label resize events. */
  _handleLabelResized() {
    this._refreshOutlineNotchWidth();
  }
  /** Refreshes the width of the outline-notch, if present. */
  _refreshOutlineNotchWidth() {
    if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
      this._notchedOutline?._setNotchWidth(0);
    } else {
      this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
    }
  }
  /** Does any extra processing that is required when handling the hints. */
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
   * label specified set through the input is being considered as "start" aligned.
   *
   * This method is a noop if Angular runs in production mode.
   */
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach(hint => {
        if (hint.align === "start") {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError("start");
          }
          startHint = hint;
        } else if (hint.align === "end") {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError("end");
          }
          endHint = hint;
        }
      });
    }
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
        ids.push(...this._control.userAriaDescribedBy.split(" "));
      }
      if (this._getSubscriptMessageType() === "hint") {
        const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === "start") : null;
        const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === "end") : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map(error => error.id));
      }
      const existingDescribedBy = this._control.describedByIds;
      let toAssign;
      if (existingDescribedBy) {
        const exclude = this._describedByIds || ids;
        toAssign = ids.concat(existingDescribedBy.filter(id => id && !exclude.includes(id)));
      } else {
        toAssign = ids;
      }
      this._control.setDescribedByIds(toAssign);
      this._describedByIds = ids;
    }
  }
  /**
   * Calculates the horizontal offset of the label in the outline appearance. In the outline
   * appearance, the notched-outline and label are not relative to the infix container because
   * the outline intends to surround prefixes, suffixes and the infix. This means that the
   * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
   * horizontally offset the label by the width of the prefix container. The MDC text-field does
   * not need to do this because they use a fixed width for prefixes. Hence, they can simply
   * incorporate the horizontal offset into their default text-field styles.
   */
  _getOutlinedLabelOffset() {
    const dir = this._dir.valueSignal();
    if (!this._hasOutline() || !this._floatingLabel) {
      return null;
    }
    if (!this._iconPrefixContainer && !this._textPrefixContainer) {
      return ["", null];
    }
    if (!this._isAttachedToDom()) {
      return null;
    }
    const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
    const textPrefixContainer = this._textPrefixContainer?.nativeElement;
    const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
    const textSuffixContainer = this._textSuffixContainer?.nativeElement;
    const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
    const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
    const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
    const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
    const negate = dir === "rtl" ? "-1" : "1";
    const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
    const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
    const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
    const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
    const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
    return [floatingLabelTransform, notchedOutlineWidth];
  }
  /** Writes the styles produced by `_getOutlineLabelOffset` synchronously to the DOM. */
  _writeOutlinedLabelStyles(styles) {
    if (styles !== null) {
      const [floatingLabelTransform, notchedOutlineWidth] = styles;
      if (this._floatingLabel) {
        this._floatingLabel.element.style.transform = floatingLabelTransform;
      }
      if (notchedOutlineWidth !== null) {
        this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
      }
    }
  }
  /** Checks whether the form field is attached to the DOM. */
  _isAttachedToDom() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      return rootNode && rootNode !== element;
    }
    return document.documentElement.contains(element);
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormField,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.0.0",
    type: _MatFormField,
    isStandalone: true,
    selector: "mat-form-field",
    inputs: {
      hideRequiredMarker: "hideRequiredMarker",
      color: "color",
      floatLabel: "floatLabel",
      appearance: "appearance",
      subscriptSizing: "subscriptSizing",
      hintLabel: "hintLabel"
    },
    host: {
      properties: {
        "class.mat-mdc-form-field-label-always-float": "_shouldAlwaysFloat()",
        "class.mat-mdc-form-field-has-icon-prefix": "_hasIconPrefix",
        "class.mat-mdc-form-field-has-icon-suffix": "_hasIconSuffix",
        "class.mat-form-field-invalid": "_control.errorState",
        "class.mat-form-field-disabled": "_control.disabled",
        "class.mat-form-field-autofilled": "_control.autofilled",
        "class.mat-form-field-appearance-fill": 'appearance == "fill"',
        "class.mat-form-field-appearance-outline": 'appearance == "outline"',
        "class.mat-form-field-hide-placeholder": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "class.mat-focused": "_control.focused",
        "class.mat-primary": 'color !== "accent" && color !== "warn"',
        "class.mat-accent": 'color === "accent"',
        "class.mat-warn": 'color === "warn"',
        "class.ng-untouched": '_shouldForward("untouched")',
        "class.ng-touched": '_shouldForward("touched")',
        "class.ng-pristine": '_shouldForward("pristine")',
        "class.ng-dirty": '_shouldForward("dirty")',
        "class.ng-valid": '_shouldForward("valid")',
        "class.ng-invalid": '_shouldForward("invalid")',
        "class.ng-pending": '_shouldForward("pending")'
      },
      classAttribute: "mat-mdc-form-field"
    },
    providers: [{
      provide: MAT_FORM_FIELD,
      useExisting: _MatFormField
    }, {
      provide: FLOATING_LABEL_PARENT,
      useExisting: _MatFormField
    }],
    queries: [{
      propertyName: "_labelChild",
      first: true,
      predicate: MatLabel,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_formFieldControl",
      first: true,
      predicate: MatFormFieldControl,
      descendants: true
    }, {
      propertyName: "_prefixChildren",
      predicate: MAT_PREFIX,
      descendants: true
    }, {
      propertyName: "_suffixChildren",
      predicate: MAT_SUFFIX,
      descendants: true
    }, {
      propertyName: "_errorChildren",
      predicate: MAT_ERROR,
      descendants: true
    }, {
      propertyName: "_hintChildren",
      predicate: MatHint,
      descendants: true
    }],
    viewQueries: [{
      propertyName: "_iconPrefixContainerSignal",
      first: true,
      predicate: ["iconPrefixContainer"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_textPrefixContainerSignal",
      first: true,
      predicate: ["textPrefixContainer"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_iconSuffixContainerSignal",
      first: true,
      predicate: ["iconSuffixContainer"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_textSuffixContainerSignal",
      first: true,
      predicate: ["textSuffixContainer"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_textField",
      first: true,
      predicate: ["textField"],
      descendants: true
    }, {
      propertyName: "_iconPrefixContainer",
      first: true,
      predicate: ["iconPrefixContainer"],
      descendants: true
    }, {
      propertyName: "_textPrefixContainer",
      first: true,
      predicate: ["textPrefixContainer"],
      descendants: true
    }, {
      propertyName: "_iconSuffixContainer",
      first: true,
      predicate: ["iconSuffixContainer"],
      descendants: true
    }, {
      propertyName: "_textSuffixContainer",
      first: true,
      predicate: ["textSuffixContainer"],
      descendants: true
    }, {
      propertyName: "_floatingLabel",
      first: true,
      predicate: MatFormFieldFloatingLabel,
      descendants: true
    }, {
      propertyName: "_notchedOutline",
      first: true,
      predicate: MatFormFieldNotchedOutline,
      descendants: true
    }, {
      propertyName: "_lineRipple",
      first: true,
      predicate: MatFormFieldLineRipple,
      descendants: true
    }],
    exportAs: ["matFormField"],
    ngImport: core_exports,
    template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div\n    class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n    [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  <!-- \n    Use a single permanent wrapper for both hints and errors so aria-live works correctly,\n    as having it appear post render will not consistently work. We also do not want to add\n    additional divs as it causes styling regressions.\n    -->\n  <div aria-atomic="true" aria-live="polite" \n      [class.mat-mdc-form-field-error-wrapper]="subscriptMessageType === \'error\'"\n      [class.mat-mdc-form-field-hint-wrapper]="subscriptMessageType === \'hint\'"\n    >\n    @switch (subscriptMessageType) {\n      @case (\'error\') {\n        <ng-content select="mat-error, [matError]"></ng-content>\n      }\n\n      @case (\'hint\') {\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      }\n    }\n  </div>\n</div>\n',
    styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'],
    dependencies: [{
      kind: "directive",
      type: MatFormFieldFloatingLabel,
      selector: "label[matFormFieldFloatingLabel]",
      inputs: ["floating", "monitorResize"]
    }, {
      kind: "component",
      type: MatFormFieldNotchedOutline,
      selector: "div[matFormFieldNotchedOutline]",
      inputs: ["matFormFieldNotchedOutlineOpen"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }, {
      kind: "directive",
      type: MatFormFieldLineRipple,
      selector: "div[matFormFieldLineRipple]"
    }, {
      kind: "directive",
      type: MatHint,
      selector: "mat-hint",
      inputs: ["align", "id"]
    }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormField,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-form-field",
      exportAs: "matFormField",
      host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        // Note that these classes reuse the same names as the non-MDC version, because they can be
        // considered a public API since custom form controls may use them to style themselves.
        // See https://github.com/angular/components/pull/20502#discussion_r486124901.
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-focused]": "_control.focused",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }],
      imports: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div\n    class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n    [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  <!-- \n    Use a single permanent wrapper for both hints and errors so aria-live works correctly,\n    as having it appear post render will not consistently work. We also do not want to add\n    additional divs as it causes styling regressions.\n    -->\n  <div aria-atomic="true" aria-live="polite" \n      [class.mat-mdc-form-field-error-wrapper]="subscriptMessageType === \'error\'"\n      [class.mat-mdc-form-field-hint-wrapper]="subscriptMessageType === \'hint\'"\n    >\n    @switch (subscriptMessageType) {\n      @case (\'error\') {\n        <ng-content select="mat-error, [matError]"></ng-content>\n      }\n\n      @case (\'hint\') {\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      }\n    }\n  </div>\n</div>\n',
      styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    _textField: [{
      type: ViewChild,
      args: ["textField"]
    }],
    _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }],
    _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }],
    _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }],
    _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }],
    _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }],
    _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }],
    _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }],
    _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }],
    _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }],
    _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, {
        descendants: true
      }]
    }],
    hideRequiredMarker: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    subscriptSizing: [{
      type: Input
    }],
    hintLabel: [{
      type: Input
    }]
  }
});

// node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _ShowOnDirtyErrorStateMatcher,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _ShowOnDirtyErrorStateMatcher
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: ShowOnDirtyErrorStateMatcher,
  decorators: [{
    type: Injectable
  }]
});
var ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _ErrorStateMatcher,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static ɵprov = ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _ErrorStateMatcher,
    providedIn: "root"
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: ErrorStateMatcher,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});

// node_modules/@angular/material/fesm2022/error-state-Dtb1IHM-.mjs
var _ErrorStateTracker = class {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  /** Whether the tracker is currently in an error state. */
  errorState = false;
  /** User-defined matcher for the error state. */
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  /** Updates the error state based on the provided error state matcher. */
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
};

// node_modules/@angular/material/fesm2022/index-BFRo2fUq.mjs
var MatRippleModule = class _MatRippleModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRippleModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRippleModule,
    imports: [MatCommonModule, MatRipple],
    exports: [MatRipple, MatCommonModule]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRippleModule,
    imports: [MatCommonModule, MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatRippleModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }]
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatPseudoCheckboxModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatPseudoCheckboxModule,
    imports: [MatCommonModule, MatPseudoCheckbox],
    exports: [MatPseudoCheckbox]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatPseudoCheckboxModule,
    imports: [MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatPseudoCheckboxModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }]
});

// node_modules/@angular/material/fesm2022/index-DwiL-HGk.mjs
var MatOptionModule = class _MatOptionModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatOptionModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatOptionModule,
    imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
    exports: [MatOption, MatOptgroup]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatOptionModule,
    imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatOptionModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }]
});

// node_modules/@angular/material/fesm2022/module-DzZHEh7B.mjs
var MatFormFieldModule = class _MatFormFieldModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldModule,
    imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatFormFieldModule,
    imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatFormFieldModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
    }]
  }]
});

// node_modules/@angular/material/fesm2022/module-BDiw_nWS.mjs
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
var MatSelectChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatSelect = class _MatSelect {
  _viewportRuler = inject(ViewportRuler);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _idGenerator = inject(_IdGenerator);
  _renderer = inject(Renderer2);
  _parentFormField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  ngControl = inject(NgControl, {
    self: true,
    optional: true
  });
  _liveAnnouncer = inject(LiveAnnouncer);
  _defaultOptions = inject(MAT_SELECT_CONFIG, {
    optional: true
  });
  _animationsDisabled = _animationsDisabled();
  _initialized = new Subject();
  _cleanupDetach;
  /** All of the defined select options. */
  options;
  // TODO(crisbeto): this is only necessary for the non-MDC select, but it's technically a
  // public API so we have to keep it. It should be deprecated and removed eventually.
  /** All of the defined groups of options. */
  optionGroups;
  /** User-supplied override of the trigger element. */
  customTrigger;
  /**
   * This position config ensures that the top "start" corner of the overlay
   * is aligned with with the top "start" of the origin by default (overlapping
   * the trigger completely). If the panel cannot fit below the trigger, it
   * will fall back to a position above the trigger.
   */
  _positions = [{
    originX: "start",
    originY: "bottom",
    overlayX: "start",
    overlayY: "top"
  }, {
    originX: "end",
    originY: "bottom",
    overlayX: "end",
    overlayY: "top"
  }, {
    originX: "start",
    originY: "top",
    overlayX: "start",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }, {
    originX: "end",
    originY: "top",
    overlayX: "end",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }];
  /** Scrolls a particular option into the view. */
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  /** Called when the panel has been opened and the overlay has settled on its final position. */
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  /** Creates a change event object that should be emitted by the select. */
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /** Factory function used to create a scroll strategy for this select. */
  _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
  /** Whether or not the overlay panel is open. */
  _panelOpen = false;
  /** Comparison function to specify which option is displayed. Defaults to object equality. */
  _compareWith = (o1, o2) => o1 === o2;
  /** Unique id for this input. */
  _uid = this._idGenerator.getId("mat-select-");
  /** Current `aria-labelledby` value for the select trigger. */
  _triggerAriaLabelledBy = null;
  /**
   * Keeps track of the previous form control assigned to the select.
   * Used to detect if it has changed.
   */
  _previousControl;
  /** Emits whenever the component is destroyed. */
  _destroy = new Subject();
  /** Tracks the error state of the select. */
  _errorStateTracker;
  /**
   * Emits whenever the component state changes and should cause the parent
   * form-field to update. Implemented as part of `MatFormFieldControl`.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Disable the automatic labeling to avoid issues like #27241.
   * @docs-private
   */
  disableAutomaticLabeling = true;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /** Deals with the selection logic. */
  _selectionModel;
  /** Manages keyboard events for options in the panel. */
  _keyManager;
  /** Ideal origin for the overlay panel. */
  _preferredOverlayOrigin;
  /** Width of the overlay panel. */
  _overlayWidth;
  /** `View -> model callback called when value changes` */
  _onChange = () => {};
  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {};
  /** ID for the DOM node containing the select's value. */
  _valueId = this._idGenerator.getId("mat-select-value-");
  /** Strategy that will be used to handle scrolling while the select panel is open. */
  _scrollStrategy;
  _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
  /** Whether the select is focused. */
  get focused() {
    return this._focused || this._panelOpen;
  }
  _focused = false;
  /** A name for this control that can be used by `mat-form-field`. */
  controlType = "mat-select";
  /** Trigger that opens the select. */
  trigger;
  /** Panel containing the select options. */
  panel;
  /** Overlay pane containing the options. */
  _overlayDir;
  /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
  panelClass;
  /** Whether the select is disabled. */
  disabled = false;
  /** Whether ripples in the select are disabled. */
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false);
  /** Tab index of the select. */
  tabIndex = 0;
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  /** Placeholder to be shown if no value has been selected. */
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder;
  /** Whether the component is required. */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  /** Whether the user should be allowed to select multiple options. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  _multiple = false;
  /** Whether to center the active option over the trigger. */
  disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  /** Value of the select control. */
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  _value;
  /** Aria label of the select. */
  ariaLabel = "";
  /** Input that can be used to specify the `aria-labelledby` attribute. */
  ariaLabelledby;
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
  typeaheadDebounceInterval;
  /**
   * Function used to sort the values in a select in multiple mode.
   * Follows the same logic as `Array.prototype.sort`.
   */
  sortComparator;
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  _id;
  /** Whether the select is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  /**
   * Width of the panel. If set to `auto`, the panel will match the trigger width.
   * If set to null or an empty string, the panel will grow to match the longest option's text.
   */
  panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
  /**
   * By default selecting an option with a `null` or `undefined` value will reset the select's
   * value. Enable this option if the reset behavior doesn't match your requirements and instead
   * the nullable options should become selected. The value of this input can be controlled app-wide
   * using the `MAT_SELECT_CONFIG` injection token.
   */
  canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
  /** Combined stream of all of the child options' change events. */
  optionSelectionChanges = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map(option => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
  });
  /** Event emitted when the select panel has been toggled. */
  openedChange = new EventEmitter();
  /** Event emitted when the select has been opened. */
  _openedStream = this.openedChange.pipe(filter(o => o), map(() => {}));
  /** Event emitted when the select has been closed. */
  _closedStream = this.openedChange.pipe(filter(o => !o), map(() => {}));
  /** Event emitted when the selected value has been changed by the user. */
  selectionChange = new EventEmitter();
  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  valueChange = new EventEmitter();
  constructor() {
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    if (this._defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple);
    this.stateChanges.next();
    this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initialized.next();
    this._initialized.complete();
    this._initKeyManager();
    this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe(event2 => {
      event2.added.forEach(option => option.select());
      event2.removed.forEach(option => option.deselect());
    });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute("aria-labelledby", newAriaLabelledby);
      } else {
        element.removeAttribute("aria-labelledby");
      }
    }
    if (ngControl) {
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["userAriaDescribedBy"]) {
      this.stateChanges.next();
    }
    if (changes["typeaheadDebounceInterval"] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
  }
  ngOnDestroy() {
    this._cleanupDetach?.();
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
    this._clearFromModal();
  }
  /** Toggles the overlay panel open or closed. */
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */
  open() {
    if (!this._canOpen()) {
      return;
    }
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._cleanupDetach?.();
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._applyModalPanelOwnership();
    this._panelOpen = true;
    this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
    this._overlayDir.attachOverlay();
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
    Promise.resolve().then(() => this.openedChange.emit(true));
  }
  /**
   * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
   * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
   * panel. Track the modal we have changed so we can undo the changes on destroy.
   */
  _trackedModal = null;
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the reference to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (!this._trackedModal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    this._trackedModal = null;
  }
  /** Closes the overlay panel and focuses the host element. */
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._exitAndDetach();
      this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      this.stateChanges.next();
      Promise.resolve().then(() => this.openedChange.emit(false));
    }
  }
  /** Triggers the exit animation and detaches the overlay at the end. */
  _exitAndDetach() {
    if (this._animationsDisabled || !this.panel) {
      this._detachOverlay();
      return;
    }
    this._cleanupDetach?.();
    this._cleanupDetach = () => {
      cleanupEvent();
      clearTimeout(exitFallbackTimer);
      this._cleanupDetach = void 0;
    };
    const panel = this.panel.nativeElement;
    const cleanupEvent = this._renderer.listen(panel, "animationend", event2 => {
      if (event2.animationName === "_mat-select-exit") {
        this._cleanupDetach?.();
        this._detachOverlay();
      }
    });
    const exitFallbackTimer = setTimeout(() => {
      this._cleanupDetach?.();
      this._detachOverlay();
    }, 200);
    panel.classList.add("mat-select-panel-exit");
  }
  /** Detaches the current overlay directive. */
  _detachOverlay() {
    this._overlayDir.detachOverlay();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */
  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The value displayed in the trigger. */
  get triggerValue() {
    if (this.empty) {
      return "";
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      return selectedOptions.join(", ");
    }
    return this._selectionModel.selected[0].viewValue;
  }
  /** Refreshes the error state of the select. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Whether the element is in RTL mode. */
  _isRtl() {
    return this._dir ? this._dir.value === "rtl" : false;
  }
  /** Handles all keydown events on the select. */
  _handleKeydown(event2) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event2) : this._handleClosedKeydown(event2);
    }
  }
  /** Handles keyboard events while the select is closed. */
  _handleClosedKeydown(event2) {
    const keyCode = event2.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;
    const manager = this._keyManager;
    if (!manager.isTyping() && isOpenKey && !hasModifierKey(event2) || (this.multiple || event2.altKey) && isArrowKey) {
      event2.preventDefault();
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event2);
      const selectedOption = this.selected;
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */
  _handleOpenKeydown(event2) {
    const manager = this._keyManager;
    const keyCode = event2.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event2.altKey) {
      event2.preventDefault();
      this.close();
    } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event2)) {
      event2.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === A && event2.ctrlKey) {
      event2.preventDefault();
      const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
      this.options.forEach(option => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event2);
      if (this._multiple && isArrowKey && event2.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  /** Handles keyboard events coming from the overlay. */
  _handleOverlayKeydown(event2) {
    if (event2.keyCode === ESCAPE && !hasModifierKey(event2)) {
      event2.preventDefault();
      this.close();
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  /** Returns the theme to be used on the panel. */
  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
  }
  /** Whether the select has a value. */
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    this.options.forEach(option => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach(currentValue => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find(option => {
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */
  _assignValue(newValue) {
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  // `skipPredicate` determines if key manager should avoid putting a given option in the tab
  // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
  // recommendation.
  //
  // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
  // makes a few exceptions for compound widgets.
  //
  // From [Developing a Keyboard Interface](
  // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
  //   "For the following composite widget elements, keep them focusable when disabled: Options in a
  //   Listbox..."
  //
  // The user can focus disabled options using the keyboard, but the user cannot click disabled
  // options.
  _skipPredicate = option => {
    if (this.panelOpen) {
      return false;
    }
    return option.disabled;
  };
  /** Gets how wide the overlay panel should be. */
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === "auto") {
      const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? "" : this.panelWidth;
  }
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */
  _initKeyManager() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */
  _resetOptions() {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe(event2 => {
      this._onSelect(event2.source, event2.isUserInput);
      if (event2.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    merge(...this.options.map(option => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map(option => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first *enabled* option.
   */
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
  }
  /** Focuses the select element. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId() || null;
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    let value = this._parentFormField?.getLabelId() || "";
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    if (!value) {
      value = this._valueId;
    }
    return value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSelect,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.0.0",
    type: _MatSelect,
    isStandalone: true,
    selector: "mat-select",
    inputs: {
      userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
      panelClass: "panelClass",
      disabled: ["disabled", "disabled", booleanAttribute],
      disableRipple: ["disableRipple", "disableRipple", booleanAttribute],
      tabIndex: ["tabIndex", "tabIndex", value => value == null ? 0 : numberAttribute(value)],
      hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      placeholder: "placeholder",
      required: ["required", "required", booleanAttribute],
      multiple: ["multiple", "multiple", booleanAttribute],
      disableOptionCentering: ["disableOptionCentering", "disableOptionCentering", booleanAttribute],
      compareWith: "compareWith",
      value: "value",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: ["typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute],
      sortComparator: "sortComparator",
      id: "id",
      panelWidth: "panelWidth",
      canSelectNullableOptions: ["canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute]
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    host: {
      attributes: {
        "role": "combobox",
        "aria-haspopup": "listbox"
      },
      listeners: {
        "keydown": "_handleKeydown($event)",
        "focus": "_onFocus()",
        "blur": "_onBlur()"
      },
      properties: {
        "attr.id": "id",
        "attr.tabindex": "disabled ? -1 : tabIndex",
        "attr.aria-controls": 'panelOpen ? id + "-panel" : null',
        "attr.aria-expanded": "panelOpen",
        "attr.aria-label": "ariaLabel || null",
        "attr.aria-required": "required.toString()",
        "attr.aria-disabled": "disabled.toString()",
        "attr.aria-invalid": "errorState",
        "attr.aria-activedescendant": "_getAriaActiveDescendant()",
        "class.mat-mdc-select-disabled": "disabled",
        "class.mat-mdc-select-invalid": "errorState",
        "class.mat-mdc-select-required": "required",
        "class.mat-mdc-select-empty": "empty",
        "class.mat-mdc-select-multiple": "multiple"
      },
      classAttribute: "mat-mdc-select"
    },
    providers: [{
      provide: MatFormFieldControl,
      useExisting: _MatSelect
    }, {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatSelect
    }],
    queries: [{
      propertyName: "customTrigger",
      first: true,
      predicate: MAT_SELECT_TRIGGER,
      descendants: true
    }, {
      propertyName: "options",
      predicate: MatOption,
      descendants: true
    }, {
      propertyName: "optionGroups",
      predicate: MAT_OPTGROUP,
      descendants: true
    }],
    viewQueries: [{
      propertyName: "trigger",
      first: true,
      predicate: ["trigger"],
      descendants: true
    }, {
      propertyName: "panel",
      first: true,
      predicate: ["panel"],
      descendants: true
    }, {
      propertyName: "_overlayDir",
      first: true,
      predicate: CdkConnectedOverlay,
      descendants: true
    }],
    exportAs: ["matSelect"],
    usesOnChanges: true,
    ngImport: core_exports,
    template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
    styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'],
    dependencies: [{
      kind: "directive",
      type: CdkOverlayOrigin,
      selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
      exportAs: ["cdkOverlayOrigin"]
    }, {
      kind: "directive",
      type: CdkConnectedOverlay,
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"],
      outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"],
      exportAs: ["cdkConnectedOverlay"]
    }, {
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatSelect,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-select",
      exportAs: "matSelect",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass],
      template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    panelClass: [{
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
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: value => value == null ? 0 : numberAttribute(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
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
    errorStateMatcher: [{
      type: Input
    }],
    typeaheadDebounceInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortComparator: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    canSelectNullableOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  }
});
var MatSelectTrigger = class _MatSelectTrigger {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSelectTrigger,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: _MatSelectTrigger,
    isStandalone: true,
    selector: "mat-select-trigger",
    providers: [{
      provide: MAT_SELECT_TRIGGER,
      useExisting: _MatSelectTrigger
    }],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatSelectTrigger,
  decorators: [{
    type: Directive,
    args: [{
      selector: "mat-select-trigger",
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }]
});
var MatSelectModule = class _MatSelectModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSelectModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSelectModule,
    imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
    exports: [CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatSelectModule,
    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    imports: [OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatFormFieldModule, MatOptionModule, MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatSelectModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
      exports: [CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }]
});

// angular:jit:template:src\app\widgets\dialogs\confirm\confirm.component.html
var confirm_component_default = `<div class="vex vex-theme-os confirm" [ngClass]="parameters.cssClass" xmlns="http://www.w3.org/1999/html" (keydown)="dialogKeyHandler($event,dialogRef)">\r
    <div class="vex-dialog-form">\r
        <h5 *ngIf="parameters.title">{{ parameters.title }}</h5>\r
        <div class="content">\r
            <h3 [innerHtml]="parameters.content">\r
            </h3>\r
            <div class="inputpart" *ngIf="parameters.pCalendar">\r
                <ng-container *ngFor="let calendar of parameters.pCalendar;let index = index;">\r
<!--                    <p-calendar\r
                            [(ngModel)]="parameters.result.pCalendar[index]"\r
                            dateFormat="{{calendar.dateFormat}}"\r
                            monthNavigator="{{calendar.monthNavigator}}"\r
                            yearNavigator="{{calendar.yearNavigator}}"\r
                            yearRange="{{calendar.yearRange}}"\r
                            placeholder="{{calendar.placeholder}}"\r
                    ></p-calendar>-->\r
                    <range-picker\r
                            [model]="parameters.result.pCalendar[index]"\r
                            (modelChange)="parameters.result.pCalendar[index] = $event"\r
                            [datePickerMode]="true"\r
                            [placeholder]="calendar.placeholder"\r
                            dateFormat="yyyyMMdd"\r
                    ></range-picker>\r
                </ng-container>\r
            </div>\r
            <div class="dropdownpart" *ngIf="parameters.select">\r
                <select id="reject" name="reject" class="col-md-12" (change)="parameters.result.select = $event.target.value">\r
                    <option *ngFor="let s of parameters.select" title="{{s.title}}" value="{{ s.value }}">{{ s.label }}</option>\r
                </select>\r
            </div>\r
            <div class="inputpart" *ngIf="parameters.input">\r
                <p [innerHtml]="parameters.input.label"></p>\r
                <input *ngIf="!(parameters.input && parameters.input.type && parameters.input.type == 'checkbox')" [(ngModel)]="parameters.result.input" name="{{parameters.input.name}}" type="{{parameters.input.type}}">\r
                <input *ngIf="(parameters.input && parameters.input.type && parameters.input.type == 'checkbox')" [checked]="parameters.result.input" (change)="parameters.result.input = !parameters.result.input" name="{{parameters.input.name}}" type="{{parameters.input.type}}">\r
                <ng-container *ngIf="parameters.input && parameters.input.type && parameters.input.type == 'checkbox' && parameters.input.checkboxtext"><span [innerHtml]="parameters.input.checkboxtext">{{parameters.input.checkboxtext}}</span></ng-container>\r
            </div>\r
            <p class="bodytext" *ngIf="parameters.bodytext"  [innerHtml]="parameters.bodytext"></p>\r
            <ng-container *ngIf="parameters.checkboxes">\r
                <div *ngFor="let checkbox of parameters.checkboxes">\r
                    <label title="{{ checkbox.title }}">\r
                        <input type="checkbox" name="checkbox.name" [(ngModel)]="parameters.result['checkboxes'][checkbox.name]"> {{ checkbox.label }}\r
                    </label>\r
                </div>\r
            </ng-container>\r
            <div *ngIf="parameters.date" class="datepicker">\r
<!--                <p-calendar\r
                        dataType="string"\r
                        [(ngModel)]="parameters.result.date"\r
                        dateFormat="{{ parameters.date.format }}"\r
                        monthNavigator="true"\r
                        yearNavigator="true"\r
                        yearRange="1800:2100"\r
                        placeholder="{{parameters.date.placeholder}}"\r
                ></p-calendar>-->\r
                <range-picker\r
                        [model]="parameters.result.date"\r
                        (modelChange)="parameters.result.date = $event"\r
                        [datePickerMode]="true"\r
                        [placeholder]="parameters.date.placeholder"\r
                        dateFormat="yyyyMMdd"\r
                ></range-picker>\r
            </div>\r
            <div *ngIf="parameters.warningOn && parameters.warningOn.message">\r
                <span class="text-danger" *ngIf="(_.hasIn(parameters,parameters.warningOn.conditions[0]) && _.get(parameters,parameters.warningOn.conditions[0]) === true) || _.hasIn(parameters,parameters.warningOn.conditions[1]) && _.get(parameters,parameters.warningOn.conditions[1]) === true">{{ parameters.warningOn.message }}</span>\r
            </div>\r
            <div *ngIf="parameters.form_schema">\r
                <filter-generator [schema]="parameters.form_schema" [filterTreeHeight]="1" [model]="parameters.result.schema_model" [hideClearButtons]="true" [filterID]="parameters.form_id" [doNotSave]="parameters.doNotSave" [onFilterChangeHook]="parameters.onFilterChangeHook"></filter-generator>\r
            </div>\r
        </div>\r
        <div class="dialogbuttons">\r
            <button *ngIf="!parameters.saveButton"  class="save" type="button" (click)="dialogRef.close('ok')" i18n="@@OK">OK</button>\r
            <button *ngIf="parameters.saveButton" [disabled]="((parameters.result && parameters.result.input && parameters.result.input === '') || (parameters.result && parameters.result.select && parameters.result.select === ''))" class="save {{parameters.saveButtonClass}}" type="button" (click)="dialogRef.close(parameters.result)">{{ parameters.saveButton }}</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)">{{parameters.cancelButton}}</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:template:src\app\widgets\range-picker\range-picker.component.html
var range_picker_component_default = `<div\r
    class="range_picker"\r
    (clickOutside)="closeFromOutside()"\r
    [clickOutsideExceptionClass]="[\r
        'set_time',\r
        'smart_picker',\r
        'duration-picker-element',\r
        'mat-calendar-body-cell-content',\r
        'mat-button-wrapper',\r
        'mat-button',\r
        'mat-calendar-arrow',\r
        'mat-button-base',\r
        'mat-calendar-table-header',\r
        'mat-overlay-transparent-backdrop',\r
        'ng-star-inserted',\r
        'mat-calendar-table',\r
        'mat-calendar-content']"\r
>\r
    <div class="main_input_block" title="{{title}}">\r
        <input class="main_input" [ngClass]="{'ng-invalid':(!maiInputValid)}" type="text" [(ngModel)]="model" placeholder="{{placeholder}}"  (ngModelChange)="filterChanged()">\r
        <span *ngIf="model" class="glyphicon glyphicon-remove clear_picker" (click)="hardClear()"></span>\r
        <span class="glyphicon glyphicon-calendar" (click)="togglePicker()"></span>\r
    </div>\r
    <ng-container *ngIf="datePickerMode">\r
<!--        <mat-form-field class="example-full-width"  class="material_calendar single_date_mode"  [floatLabel]="'auto'">\r
            <input matInput\r
                   [matDatepicker]="picker"\r
                   i18n-placeholder="@@placeholder.date_formated" placeholder="Date (yyyymmdd)"\r
                   [(ngModel)]="singleDateModel"\r
                   (dateInput)="setSingeDatePicker('singleDateModel', $event)"\r
                   (dateChange)="setSingeDatePicker('singleDateModel', $event)"\r
            >\r
            <mat-datepicker #picker></mat-datepicker>\r
        </mat-form-field>-->\r
        <date-picker\r
                *ngIf="showPicker"\r
                [showPicker]="showPicker"\r
                [model]="fromModel"\r
                [format]="'yyyyMMdd'"\r
                [datePickerMode]="datePickerMode"\r
                placeholder="{{placeholder}}"\r
                [returnAsDateType]="true"\r
                (onValueSet)="setSingeDatePicker('singleDateModel', $event)"\r
        ></date-picker>\r
    </ng-container>\r
    <ng-container *ngIf="!datePickerMode">\r
        <div class="picker" *ngIf="showPicker">\r
            <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r
            <h5>{{header}}</h5>\r
            <div class="left {{mode}}_mode" *ngIf="!onlyTime">\r
<!--                <mat-form-field class="material_calendar"  *ngIf="mode === 'range' || mode === 'rightOpen'"  [floatLabel]="'auto'">\r
                    <input matInput\r
                           [matDatepicker]="picker"\r
                           i18n-placeholder="@@placeholder.from_formated" placeholder="from (yyyymmdd)"\r
                           [(ngModel)]="fromModel"\r
                           (dateInput)="addEvent('fromModel', $event)"\r
                           (dateChange)="addEvent('fromModel', $event)"\r
                    >\r
                    <mat-datepicker-toggle matSuffix [for]="picker">\r
                        <mat-icon matDatepickerToggleIcon>\r
                            <span class="glyphicon glyphicon-calendar"></span>\r
                        </mat-icon>\r
                    </mat-datepicker-toggle>\r
                    <mat-datepicker #picker></mat-datepicker>\r
                </mat-form-field>-->\r
                <date-picker\r
                        *ngIf="mode === 'range' || mode === 'rightOpen'"\r
                        [model]="fromModel"\r
                        [format]="'yyyyMMdd'"\r
                        i18n-placeholder="@@placeholder.from_formated" placeholder="from (yyyymmdd)"\r
                        [returnAsDateType]="true"\r
                        (onValueSet)="addEvent('fromModel', $event)"\r
                ></date-picker>\r
                <!--            <p-calendar\r
                                    (onFocus)="closeCalendar('fromCalendarObject')" #fromCalendar\r
                                    *ngIf="mode === 'range' || mode === 'rightOpen'"\r
                                    dataType="string"\r
                                    [(ngModel)]="fromModel"\r
                                    dateFormat="{{dateFormat}}"\r
                                    monthNavigator="true"\r
                                    yearNavigator="true"\r
                                    yearRange="1800:2100"\r
                                    i18n-placeholder placeholder="from (yyyymmdd)"\r
                                    showIcon="true"\r
                                    showOnFocus="false"\r
                                    monthNavigator="true"\r
                                    showButtonBar="true"></p-calendar>-->\r
                <div class="infinit" *ngIf="!(mode === 'range' || mode === 'rightOpen') && mode != 'single'" >&infin;</div>\r
                <span class="dash" *ngIf="mode != 'single'">-</span>\r
<!--                <div class="material_calendar">-->\r
<!--                    <input type="date" [(ngModel)]="toModel">-->\r
                    <date-picker\r
                            *ngIf="mode === 'range' || mode === 'leftOpen'"\r
                            [model]="toModel"\r
                            [format]="'yyyyMMdd'"\r
                            i18n-placeholder="@@placeholder.date_formated" placeholder="Date (yyyymmdd)"\r
                            [returnAsDateType]="true"\r
                            (onValueSet)="addEvent('toModel', $event)"\r
                    ></date-picker>\r
<!--                </div>-->\r
<!--                    <mat-form-field class="material_calendar"  *ngIf="mode === 'range' || mode === 'leftOpen'"  [floatLabel]="'auto'">\r
                        <input matInput\r
                               [matDatepicker]="picker"\r
                               i18n-placeholder="@@placeholder.to_formated" placeholder="to (yyyymmdd)"\r
                               [(ngModel)]="toModel"\r
                               (dateInput)="addEvent('toModel', $event)"\r
                               (dateChange)="addEvent('toModel', $event)"\r
                        >\r
                        <mat-datepicker-toggle matSuffix [for]="picker">\r
                            <mat-icon matDatepickerToggleIcon>\r
                                <span class="glyphicon glyphicon-calendar"></span>\r
                            </mat-icon>\r
                        </mat-datepicker-toggle>\r
                        <mat-datepicker #picker></mat-datepicker>\r
                    </mat-form-field>-->\r
                <!--            <p-calendar\r
                                    (onFocus)="closeCalendar('toCalendarObject')"\r
                                    #toCalendar\r
                                    *ngIf="mode === 'range' || mode === 'leftOpen'"\r
                                    dataType="string"\r
                                    [(ngModel)]="toModel"\r
                                    dateFormat="{{dateFormat}}"\r
                                    monthNavigator="true"\r
                                    yearNavigator="true"\r
                                    yearRange="1800:2100"\r
                                    i18n-placeholder placeholder="to (yyyymmdd)"\r
                                    showOnFocus="false"\r
                                    showIcon="true"\r
                            ></p-calendar>-->\r
\r
\r
                <div class="infinit" *ngIf="!(mode === 'range' || mode === 'leftOpen') && mode != 'single'">&infin;</div>\r
                <date-picker\r
                        *ngIf="mode === 'single'"\r
                        [model]="singleDateModel"\r
                        [format]="'yyyyMMdd'"\r
                        i18n-placeholder="@@placeholder.date_formated" placeholder="Date (yyyymmdd)"\r
                        [returnAsDateType]="true"\r
                        (onValueSet)="addEvent('singleDateModel', $event)"\r
                ></date-picker>\r
<!--                <mat-form-field class="material_calendar single_datepicker"  *ngIf="mode === 'single'"  [floatLabel]="'auto'">\r
                    <input matInput\r
                           [matDatepicker]="picker"\r
                           i18n-placeholder="@@placeholder.date_formated" placeholder="Date (yyyymmdd)"\r
                           [(ngModel)]="singleDateModel"\r
                           (dateInput)="addEvent('toModel', $event)"\r
                           (dateChange)="addEvent('toModel', $event)"\r
                    >\r
                    <mat-datepicker-toggle matSuffix [for]="picker">\r
                        <mat-icon matDatepickerToggleIcon>\r
                            <span class="glyphicon glyphicon-calendar"></span>\r
                        </mat-icon>\r
                    </mat-datepicker-toggle>\r
                    <mat-datepicker #picker></mat-datepicker>\r
                </mat-form-field>-->\r
                <!--            <p-calendar\r
                                    (onFocus)="closeCalendar('singleCalendarObject')"\r
                                    #singleCalendar\r
                                    *ngIf="mode === 'single'"\r
                                    dataType="string"\r
                                    [(ngModel)]="singleDateModel"\r
                                    dateFormat="{{dateFormat}}"\r
                                    monthNavigator="true"\r
                                    yearNavigator="true"\r
                                    yearRange="1800:2100"\r
                                    i18n-placeholder placeholder="Date (yyyymmdd)"\r
                                    showIcon="true"\r
                            ></p-calendar>-->\r
            </div>\r
            <ul *ngIf="!onlyTime && !onlySingleMode" class="fast_picker" [ngClass]="{'smart_active':smartPickerActive}">\r
                <li *ngIf="!smartPickerActive" (click)="today()" i18n="@@today">Today</li>\r
                <li *ngIf="!smartPickerActive" (click)="thisMonth()" i18n="@@this_month">This Month</li>\r
                <!--<li *ngIf="!smartPickerActive" (click)="lastYear()">Last Year</li>-->\r
                <li *ngIf="!smartPickerActive" class="select_parent">\r
                    <ul class="j4care_select" (clickOutside)="closeSelectOptions()">\r
                        <li class="placeholder" (click)="toggleSelectOption()" i18n="@@fast_picker">Fast Picker</li>\r
                        <ng-container *ngIf="showSelectOptions">\r
                            <li (click)="fastPicker('yesterday')" i18n="@@yesterday">Yesterday</li>\r
                            <li (click)="fastPicker('this_week')" i18n="@@this_week">This Week</li>\r
                            <li (click)="fastPicker('last_week')" i18n="@@last_week">Last Week</li>\r
                            <li (click)="fastPicker('last_month')" i18n="@@last_month">Last Month</li>\r
                            <li (click)="fastPicker('this_quarter')" i18n="@@this_quarter">This Quarter</li>\r
                            <li (click)="fastPicker('last_quarter')" i18n="@@last_quarter">Last Quarter</li>\r
                            <li (click)="fastPicker('this_year')" i18n="@@this_year">This Year</li>\r
                            <li (click)="fastPicker('last_year')" i18n="@@last_year">Last Year</li>\r
                        </ng-container>\r
                    </ul>\r
                </li>\r
                <li *ngIf="smartPickerActive" class="smart_input">\r
                    <input type="text" i18n-title="@@title.use_duration_format" title="Use duration format (ISO 8601) ((P)nYnMnDTnHnMnS or (P)nW) to set first date/time of the range subtracted from today/now (Format is not case sensitive and P on start is optional). For Example 1y => one year back, 2y3m => 2 years and 3 months back, t2h12m => 2 hours and 12 minutes from now etc." i18n-placeholder="@@placeholder.range-picker.hover_for_more_info" placeholder="Hover for more Info" [(ngModel)]="smartInput" (ngModelChange)="smartInputChange($event)">\r
                </li>\r
                <li (click)="smartPicker()">\r
                    <span class="smart_picker" *ngIf="!smartPickerActive" i18n="@@smart_picker" i18n-title="@@title.use_duration_format" title="Use duration format (ISO 8601) ((P)nYnMnDTnHnMnS or (P)nW) to set first date/time of the range subtracted from today/now (Format is not case sensitive and P on start is optional). For Example 1y => one year back, 2y3m => 2 years and 3 months back, t2h12m => 2 hours and 12 minutes from now etc.">Smart Picker</span>\r
                    <span class="smart_picker" *ngIf="smartPickerActive" i18n="@@fast_picker">Fast Picker</span>\r
                </li>\r
            </ul>\r
            <ul *ngIf="dateRange" class="fast_picker smart_active duration">\r
                <li class="smart_input"><input type="text" i18n-placeholder="@@placeholder.range-picker.maximal_study_date_range" placeholder="Maximal Study Date Range" [(ngModel)]="SplitStudyDateRange"></li>\r
                <duration-picker *ngIf="showDurationPaicker" [mode]="'datePicker'" (onValueSet)="setDuration($event)" [value]="SplitStudyDateRange"></duration-picker>\r
                <li (click)="SplitStudyDateRange = ''" class="glyphicon glyphicon-remove duration_buttons"></li>\r
                <li (click)="showDurationPaicker = !showDurationPaicker" class="duration_buttons"></li>\r
            </ul>\r
            <div class="include_time_block" *ngIf="!defaultTime">\r
                <label *ngIf="!onlyTime && !onlyDate">\r
                    <input type="checkbox" [(ngModel)]="includeTime" (change)="toggleTime()"> <ng-container i18n="@@include_time">Include Time</ng-container>\r
                </label>\r
            </div>\r
            <div class="left {{mode}}_mode" *ngIf="includeTime || onlyTime" >\r
                <time-picker [model]="fromTimeModel" cohereMode="true" (onValueSet)="onTimeSet('fromTimeModel', $event)" i18n-placeholder="@@placeholder.from_formated_time" placeholder="from (hh:mm:ss)" *ngIf="mode === 'range' || mode === 'rightOpen'"></time-picker>\r
                <div class="infinit" *ngIf="!(mode === 'range' || mode === 'rightOpen') && mode != 'single'" >&infin;</div>\r
                <span *ngIf="mode != 'single'" class="dash">-</span>\r
                <time-picker [model]="toTimeModel" *ngIf="mode === 'range' || mode === 'leftOpen'" cohereMode="true" (onValueSet)="onTimeSet('toTimeModel', $event)" i18n-placeholder="@@placeholder.to_formated_time" placeholder="to (hh:mm:ss)"></time-picker>\r
                <div class="infinit" *ngIf="!(mode === 'range' || mode === 'leftOpen') && mode != 'single'">&infin;</div>\r
                <time-picker *ngIf="mode === 'single'"  [model]="singleTimeModel" cohereMode="true" (onValueSet)="onTimeSet('singleTimeModel', $event)" placeholder="(hh:mm:ss)"></time-picker>\r
            </div>\r
            <ul class="interval" *ngIf="!onlySingleMode">\r
                <li class="range" [ngClass]="{'active':mode==='range'}" (click)="changeMode('range')" i18n="@@between">Between</li>\r
                <li *ngIf="onlyTime" class="single" [ngClass]="{'active':mode==='single'}" (click)="changeMode('single')" i18n-title="@@specific_time" title="Specific Time" i18n="@@spec_time">Spec. Time</li>\r
                <li *ngIf="!onlyTime" class="single" [ngClass]="{'active':mode==='single'}" (click)="changeMode('single')" i18n="@@single_date">Single Date</li>\r
                <li class="rightOpen" [ngClass]="{'active':mode==='rightOpen'}" (click)="changeMode('rightOpen')" i18n="@@after">After</li>\r
                <li class="leftOpen" [ngClass]="{'active':mode==='leftOpen'}" (click)="changeMode('leftOpen')" i18n="@@before">Before</li>\r
            </ul>\r
            <!--        <div class="right">\r
                    </div>-->\r
            <button (click)="setRange()" i18n="@@Set">Set</button>\r
            <button class="clear" (click)="clear()" i18n="@@Clear">Clear</button>\r
        </div>\r
    </ng-container>\r
</div>`;

// angular:jit:style:src\app\widgets\range-picker\range-picker.component.scss
var range_picker_component_default2 = '/* src/app/widgets/range-picker/range-picker.component.scss */\n.range_picker {\n  position: relative;\n  height: 30px;\n}\n.range_picker h5 {\n  font-size: 16px;\n}\n.range_picker .range_mode,\n.range_picker .leftOpen_mode,\n.range_picker .rightOpen_mode {\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: calc(50% - 15px) 30px calc(50% - 15px);\n  height: 50px;\n}\n.range_picker .main_input_block {\n  width: 100%;\n}\n.range_picker .main_input_block .main_input {\n  width: calc(100% - 27px);\n  float: left;\n  margin-top: 0;\n}\n.range_picker .main_input_block .glyphicon-calendar {\n  width: 26px;\n  display: inline-block;\n  height: 26px;\n  color: #ffffff;\n  float: right;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 26px;\n  top: 0;\n  background: var(--backgroundColor);\n}\n.range_picker .main_input_block .glyphicon-calendar:hover {\n  cursor: pointer;\n}\n.range_picker .main_input_block:hover .clear_picker {\n  display: block;\n}\n.range_picker .material_calendar.single_date_mode .mat-form-field-wrapper .mat-form-field-infix {\n  display: none;\n}\n.range_picker .picker {\n  z-index: 999;\n  float: left;\n  padding: 15px 20px;\n  display: block;\n  width: 400px;\n  min-height: 200px;\n  background: white;\n  position: absolute;\n  top: 28px;\n  -webkit-box-shadow: 2px 2px 13px 0px #777;\n  -moz-box-shadow: 2px 2px 13px 0px #777;\n  box-shadow: 2px 2px 13px 0px #777;\n}\n.range_picker .picker .include_time_block {\n  display: block;\n  min-height: 3px;\n}\n.range_picker .picker .include_time_block label {\n  background: var(--backgroundColor);\n  color: white;\n  width: calc(100% - 4px);\n  line-height: 30px;\n  margin: 5px 2px;\n  padding-left: 10px;\n  -webkit-box-shadow: 3px 3px 6px 0px #666;\n  -moz-box-shadow: 3px 3px 6px 0px #666;\n  box-shadow: 3px 3px 6px 0px #666;\n  padding: 3px 10px 3px 11px;\n}\n.range_picker .picker .include_time_block label:hover {\n  cursor: pointer;\n}\n.range_picker .picker .include_time_block label input {\n  float: left;\n  height: 30px;\n  margin-right: 7px !important;\n}\n.range_picker .picker .left {\n  height: 50px;\n}\n.range_picker .picker .left .material_calendar {\n  float: left;\n}\n.range_picker .picker .left .material_calendar input {\n  border: none;\n  border-bottom: 1px solid #cccccc;\n}\n.range_picker .picker .left .material_calendar.single_datepicker {\n  width: 100%;\n}\n.range_picker .picker .left .material_calendar.single_date_mode .mat-form-field-infix {\n  display: none;\n}\n.range_picker .picker .left p-calendar {\n  margin-right: 28px;\n}\n.range_picker .picker .left .infinit {\n  height: 26px;\n  line-height: 26px;\n  font-size: 30px;\n  width: 51%;\n  text-align: center;\n  color: #777777;\n}\n.range_picker .picker .left .infinit.time {\n  font-size: 20px;\n}\n.range_picker .picker .left.single_mode p-calendar,\n.range_picker .picker .left.single_mode time-picker {\n  width: 100%;\n}\n.range_picker .picker .left.leftOpen_mode p-calendar,\n.range_picker .picker .left.rightOpen_mode p-calendar {\n  width: 47%;\n}\n.range_picker .picker .left span.dash {\n  display: inline-block;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n}\n.range_picker .picker .left .mat-icon-button .mat-button-wrapper .mat-icon span.glyphicon-calendar {\n  width: 26px;\n  height: 26px;\n}\n.range_picker .picker .right {\n  margin-top: 15px;\n}\n.range_picker .picker ul.fast_picker {\n  margin-bottom: 0;\n  padding-left: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  justify-content: space-around;\n}\n.range_picker .picker ul.fast_picker > li {\n  background-color: var(--backgroundColor);\n  list-style: none;\n  display: block;\n  width: 24%;\n  height: 30px;\n  color: white;\n  vertical-align: middle;\n  line-height: 30px;\n  text-align: center;\n  -webkit-box-shadow: 3px 3px 6px 0 #666;\n  -moz-box-shadow: 3px 3px 6px 0 #666;\n  box-shadow: 3px 3px 6px 0 #666;\n}\n.range_picker .picker ul.fast_picker > li.active {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\n.range_picker .picker ul.fast_picker > li:hover {\n  cursor: pointer;\n}\n.range_picker .picker ul.fast_picker > li select {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.range_picker .picker ul.fast_picker > li select option {\n  background: var(--backgroundColor);\n}\n.range_picker .picker ul.fast_picker.smart_active .smart_input {\n  background: transparent;\n  box-shadow: none;\n  color: #444444;\n  width: 74%;\n}\n.range_picker .picker ul.fast_picker.smart_active .smart_input input {\n  width: 100%;\n}\n.range_picker .picker ul.fast_picker.smart_active.duration {\n  margin-top: 5px;\n}\n.range_picker .picker ul.fast_picker.smart_active.duration li.smart_input {\n  width: calc(100% - 22px);\n  margin-right: 4px;\n}\n.range_picker .picker ul.fast_picker.smart_active.duration li.duration_buttons.glyphicon-remove {\n  width: 52px;\n  margin-right: 4px;\n  margin-top: -1px;\n}\n.range_picker .picker ul.fast_picker.smart_active.duration li:last-child {\n  width: 52px;\n  background-image: url("./media/range_clock_white.png");\n  background-repeat: no-repeat;\n  background-size: 20px;\n  background-position: center;\n}\n.range_picker .picker ul.fast_picker .form-group {\n  float: left;\n  width: 100%;\n}\n.range_picker .picker ul.interval {\n  padding-left: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  justify-content: space-around;\n}\n.range_picker .picker ul.interval > li {\n  list-style: none;\n  display: block;\n  width: 24%;\n  height: 60px;\n  color: white;\n  vertical-align: bottom;\n  line-height: 86px;\n  text-align: center;\n  -webkit-box-shadow: 3px 3px 6px 0 #666;\n  -moz-box-shadow: 3px 3px 6px 0 #666;\n  box-shadow: 3px 3px 6px 0 #666;\n}\n.range_picker .picker ul.interval > li.active {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n}\n.range_picker .picker ul.interval > li:hover {\n  cursor: pointer;\n}\n.range_picker .picker ul.interval .range {\n  background-image: url("./media/close.png");\n  background-repeat: no-repeat;\n  background-position: center 20px;\n  background-color: var(--backgroundColor);\n}\n.range_picker .picker ul.interval .single {\n  background-image: url("./media/single.png");\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center 20px;\n  background-color: var(--backgroundColor);\n}\n.range_picker .picker ul.interval .leftOpen {\n  background-image: url("./media/leftOpen.png");\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center 20px;\n  background-color: var(--backgroundColor);\n}\n.range_picker .picker ul.interval .rightOpen {\n  background-image: url("./media/rightOpen.png");\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center 20px;\n  background-color: var(--backgroundColor);\n}\n.range_picker .picker button {\n  background: var(--backgroundColor);\n  color: white;\n  border: 0;\n  width: 24%;\n  float: right;\n}\n.range_picker .picker button.clear {\n  margin-right: 4px;\n}\n.range_picker .close {\n  position: absolute;\n  z-index: 999999;\n  right: 7px;\n  top: 7px;\n  font-size: 16px;\n}\n.clear_picker {\n  display: none;\n  width: 20px;\n  line-height: 26px;\n  text-align: center;\n  color: rgba(95, 95, 95, 0.6);\n  height: 27px;\n  margin-right: 1px;\n  top: 0;\n  margin-left: 1px;\n  position: absolute;\n  right: 27px;\n}\n.clear_picker:hover {\n  cursor: pointer;\n  color: rgba(55, 55, 55, 0.62);\n}\nul.j4care_select {\n  position: relative;\n  z-index: 2;\n  padding: 0;\n  height: 30px;\n  -webkit-box-shadow: 3px 3px 6px 0 #666;\n  -moz-box-shadow: 3px 3px 6px 0 #666;\n  box-shadow: 3px 3px 6px 0 #666;\n}\nul.j4care_select li {\n  list-style: none;\n}\nul.j4care_select li:not(.placeholder) {\n  border-top: 1px solid white;\n  background: rgb(56, 83, 103);\n  -webkit-box-shadow: 3px 3px 6px 0 rgba(43, 43, 43, 0.58);\n  -moz-box-shadow: 3px 3px 6px 0 rgba(43, 43, 43, 0.58);\n  box-shadow: 3px 3px 6px 0 rgba(43, 43, 43, 0.58);\n  width: 130%;\n}\nul.j4care_select li:not(.placeholder):hover {\n  background: rgb(48, 91, 123);\n}\n.single_date_mode .mat-form-field-wrapper .mat-form-field-infix {\n  display: none !important;\n}\n';

// src/app/widgets/range-picker/range-picker.service.ts
var _a3;
var RangePickerService = (_a3 = class {
  constructor() {
    this.modeMap = {};
    this.modeMapReversed = {};
  }
  getRangeFromKey(mode) {
    let model;
    let firstDate = /* @__PURE__ */new Date();
    let secondDate = /* @__PURE__ */new Date();
    let quarterRangeMonth;
    let todayDay;
    switch (mode) {
      case "today":
        firstDate.setDate(firstDate.getDate());
        model = j4care.convertDateToString(firstDate);
        break;
      case "yesterday":
        firstDate.setDate(firstDate.getDate() - 1);
        model = j4care.convertDateToString(firstDate);
        break;
      case "this_week":
        todayDay = firstDate.getDay();
        if (todayDay === 0) {
          todayDay = 7;
        }
        firstDate.setDate(firstDate.getDate() - (todayDay - 1));
        if (this.eqDate(firstDate, secondDate)) model = j4care.convertDateToString(firstDate);else model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
      case "last_week":
        todayDay = firstDate.getDay();
        if (todayDay === 0) {
          todayDay = 7;
        }
        firstDate.setDate(firstDate.getDate() - (todayDay - 1));
        firstDate.setDate(firstDate.getDate() - 7);
        secondDate.setDate(firstDate.getDate() + 6);
        if (this.eqDate(firstDate, secondDate)) model = j4care.convertDateToString(firstDate);else model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
      case "this_month":
        firstDate.setDate(1);
        model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
      case "last_month":
        firstDate.setMonth(firstDate.getMonth() - 1);
        firstDate.setDate(1);
        secondDate.setDate(1);
        secondDate.setDate(secondDate.getDate() - 1);
        model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
      case "this_quarter":
        quarterRangeMonth = this.getQuarterRange(this.getQuarterIndex(firstDate.getMonth()));
        model = `${j4care.convertDateToString(this.getStartOfMonth(quarterRangeMonth.start))}-${j4care.convertDateToString(this.getEndOfMonth(quarterRangeMonth.end))}`;
        break;
      case "last_quarter":
        quarterRangeMonth = this.getQuarterRange(this.getQuarterIndex(firstDate.getMonth()) - 1);
        model = `${j4care.convertDateToString(this.getStartOfMonth(quarterRangeMonth.start))}-${j4care.convertDateToString(this.getEndOfMonth(quarterRangeMonth.end))}`;
        break;
      case "this_year":
        firstDate.setDate(1);
        firstDate.setMonth(0);
        model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
      case "last_year":
        firstDate.setFullYear(firstDate.getFullYear() - 1);
        firstDate.setDate(1);
        firstDate.setMonth(0);
        secondDate.setDate(1);
        secondDate.setMonth(0);
        secondDate.setDate(secondDate.getDate() - 1);
        model = `${j4care.convertDateToString(firstDate)}-${j4care.convertDateToString(secondDate)}`;
        break;
    }
    return model || mode;
  }
  getModeFromRange(range) {
    if (Object.keys(this.modeMap).length === 0 && Object.keys(this.modeMapReversed).length === 0) {
      ["today", "yesterday", "this_week", "this_month", "last_week", "last_month", "this_quarter", "last_quarter", "this_year", "last_year"].forEach(m => {
        this.modeMap[m] = this.getRangeFromKey(m);
        this.modeMapReversed[this.getRangeFromKey(m)] = m;
      });
    }
    if (this.modeMapReversed[range]) {
      return this.modeMapReversed[range];
    }
    return "";
  }
  getQuarterIndex(month) {
    return parseInt((month / 3).toString());
  }
  getQuarterRange(quarterIndex) {
    let quarterStart = quarterIndex * 3 + 1;
    let quarterEnd = quarterStart + 2;
    return {
      start: quarterStart,
      end: quarterEnd
    };
  }
  getStartOfMonth(month) {
    let newDate = /* @__PURE__ */new Date();
    newDate.setMonth(month - 1);
    newDate.setDate(1);
    return newDate;
  }
  getEndOfMonth(month) {
    let newDate = /* @__PURE__ */new Date();
    newDate.setMonth(month);
    newDate.setDate(1);
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
  }
  eqDate(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
}, _a3.ctorParameters = () => [], _a3);
RangePickerService = __decorate([Injectable()], RangePickerService);

// angular:jit:template:src\app\widgets\time-picker\time-picker.component.html
var time_picker_component_default = `<div class="input_block" *ngIf="cohereMode"><input type="text" [ngClass]="{'ng-invalid':(!validString)}"  [(ngModel)]="model" placeholder="{{placeholder}}" (ngModelChange)="change($event)"/><span (click)="toggle()" class="glyphicon glyphicon-time"></span></div>\r
<div class="timepicker" [ngClass]="{'cohere':cohereMode}" *ngIf="timepickerOpen">\r
    <div class="close" (click)="close()"><span class="glyphicon glyphicon-remove"></span></div>\r
    <h6 i18n="@@time-picker.title">Select time (hh:mm:ss)</h6>\r
    <div class="timers_block">\r
        <select [(ngModel)]="hh">\r
            <option value="{{h}}" *ngFor="let h of hhArray">{{h}}</option>\r
        </select>\r
        <span>:</span>\r
        <select [(ngModel)]="mm">\r
            <option value="{{m}}" *ngFor="let m of mmArray">{{m}}</option>\r
        </select>\r
        <span>:</span>\r
        <select [(ngModel)]="ss">\r
            <option value="{{s}}" *ngFor="let s of ssArray">{{s}}</option>\r
        </select>\r
    </div>\r
    <div class="btn_content">\r
        <button class="btn set_time" (click)="addTime()" i18n="@@set_time">Set time</button>\r
        <button class="btn" (click)="setTo00()">00:00</button>\r
        <button class="btn" (click)="setToNow()" i18n="@@time-picker.now">Now</button>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\time-picker\time-picker.component.scss
var time_picker_component_default2 = "/* src/app/widgets/time-picker/time-picker.component.scss */\n.timepicker {\n  max-height: 300px;\n  min-width: 260px;\n  overflow: auto;\n  position: absolute;\n  z-index: 101;\n  background: white;\n  -webkit-box-shadow: 2px 2px 13px 0px #777;\n  -moz-box-shadow: 2px 2px 13px 0px #777;\n  box-shadow: 2px 2px 13px 0px #777;\n  padding: 20px 15px;\n}\n.timepicker mat-select {\n  width: auto;\n}\n.timepicker .timers_block {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  justify-content: space-around;\n  margin: 15px 0;\n}\n.timepicker .timers_block select {\n  background: white;\n  width: 30%;\n}\n.timepicker .btn_content {\n  width: 100%;\n  margin: 15px 0;\n}\n.timepicker .btn_content button.btn {\n  background: var(--backgroundHoverColor);\n  color: white;\n  border: 0;\n  float: right;\n  margin-left: 5px;\n}\n.timepicker.cohere {\n  margin-top: 27px;\n}\n.timepicker .close {\n  right: 7px;\n  top: 7px;\n  font-size: 16px;\n  position: absolute;\n}\n.input_block input {\n  width: calc(100% - 26px);\n  float: left;\n}\n.input_block .glyphicon-time {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  background-color: var(--backgroundHoverColor);\n  color: white;\n  text-align: center;\n  float: right;\n  vertical-align: middle;\n  line-height: 26px;\n  top: 0px;\n}\n.input_block .glyphicon-time:hover {\n  cursor: pointer;\n}\n";

// src/app/widgets/time-picker/time-picker.component.ts
var _a4;
var TimePickerComponent = (_a4 = class {
  constructor() {
    this.onValueSet = new EventEmitter();
    this.hhArray = [];
    this.mmArray = [];
    this.ssArray = [];
    this.hh = "00";
    this.mm = "00";
    this.ss = "00";
    this.timepickerOpen = true;
    this.validString = true;
  }
  ngOnInit() {
    if (this.cohereMode) {
      this.timepickerOpen = false;
    }
    let i = 0;
    while (i < 60) {
      if (i < 25) {
        this.hhArray.push(i < 10 ? `0${i}` : i);
      }
      this.mmArray.push(i < 10 ? `0${i}` : i);
      this.ssArray.push(i < 10 ? `0${i}` : i);
      i++;
    }
  }
  change(e) {
    let validTimeString = this.validateString(this.model);
    const extractTimeRegex = /(\d{2}):(\d{2}):(\d{2})|(\d{2}):(\d{2})/g;
    let resultArray = [];
    let match;
    if (validTimeString !== null && validTimeString[0]) {
      this.validString = true;
      while ((match = extractTimeRegex.exec(validTimeString[0])) !== null) {
        if (match.index === extractTimeRegex.lastIndex) {
          extractTimeRegex.lastIndex++;
        }
        resultArray.push(match);
      }
      this.hh = resultArray[0][1] || resultArray[0][4] || "00";
      this.mm = resultArray[0][2] || resultArray[0][5] || "00";
      this.ss = resultArray[0][3] || "00";
      this.onValueSet.emit(`${this.hh}:${this.mm}:${this.ss}`);
    } else {
      this.validString = false;
    }
  }
  validateString(str) {
    const validationRegex = /^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$|^[0-2][0-9]:[0-5][0-9]$/m;
    return validationRegex.exec(this.model);
  }
  addTime() {
    this.onValueSet.emit(`${this.hh}:${this.mm}:${this.ss}`);
    if (this.cohereMode) {
      this.timepickerOpen = false;
    }
  }
  close() {
    if (this.cohereMode) {
      this.timepickerOpen = false;
    } else {
      this.onValueSet.emit("");
    }
  }
  toggle() {
    this.timepickerOpen = !this.timepickerOpen;
  }
  setTo00() {
    this.hh = this.mm = this.ss = "00";
  }
  setToNow() {
    let now = /* @__PURE__ */new Date();
    this.hh = j4care.getSingleDateTimeValueFromInt(now.getHours());
    this.mm = j4care.getSingleDateTimeValueFromInt(now.getMinutes());
    this.ss = j4care.getSingleDateTimeValueFromInt(now.getSeconds());
  }
}, _a4.ctorParameters = () => [], _a4.propDecorators = {
  onValueSet: [{
    type: Output
  }],
  model: [{
    type: Input
  }],
  cohereMode: [{
    type: Input
  }],
  placeholder: [{
    type: Input
  }]
}, _a4);
TimePickerComponent = __decorate([Component({
  selector: "time-picker",
  template: time_picker_component_default,
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass, FormsModule, CommonModule],
  standalone: true,
  styles: [time_picker_component_default2]
})], TimePickerComponent);

// angular:jit:template:src\app\widgets\duration-picker\duration-picker.component.html
var duration_picker_component_default = `<div class="durationpicker" (keyup)="onModelChange($event)">\r
    <div class="close duration-picker-element" (click)="close()"><span class="glyphicon glyphicon-remove duration-picker-element"></span></div>\r
    <!--<ng-container class="form-horizontal" *ngIf="mode === 'dcmDuration'">-->\r
        <h6 *ngIf="mode === 'dcmPeriod'" i18n="@@add_period">Add period</h6>\r
        <h6 *ngIf="mode === 'dcmDuration'" i18n="@@add_duration">Add duration</h6>\r
        <h6 *ngIf="mode === 'datePicker'" i18n="@@add_max_range">Add Max. Range</h6>\r
        <div class="form-group" *ngIf="mode === 'dcmPeriod'" (keydown)="noWeekChange()">\r
            <label class="control-label text-right col-md-5" for="year" i18n="@@year">year:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="year" [(ngModel)]="y">\r
            </div>\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmPeriod'" (keydown)="noWeekChange()">\r
            <label class="control-label text-right col-md-5" for="month" i18n="@@month">month:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="month" [(ngModel)]="month">\r
            </div>\r
        </div>\r
        <div class="form-group" (keydown)="noWeekChange()">\r
            <label class="control-label text-right col-md-5" for="day" i18n="@@day">day:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="day" [(ngModel)]="d">\r
            </div>\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmDuration' || mode === 'datePicker'">\r
            <label class="control-label text-right col-md-5" for="hour" i18n="@@hour">hour:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="hour" [(ngModel)]="h">\r
            </div>\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmDuration' || mode === 'datePicker'">\r
            <label class="control-label text-right col-md-5" for="minute" i18n="@@minute">minute:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="minute" [(ngModel)]="m">\r
            </div>\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmDuration'">\r
            <label class="control-label text-right col-md-5" for="sec" i18n="@@Second">Second:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="sec" [(ngModel)]="s">\r
            </div>\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmPeriod'">\r
            or:\r
        </div>\r
        <div class="form-group" *ngIf="mode === 'dcmPeriod'">\r
            <label class="control-label text-right col-md-5" for="week" i18n="@@week">week:</label>\r
            <div class="col-md-7">\r
                <input type="number" class="col-md-12" id="week" [(ngModel)]="week" (keydown)="weekChanged()">\r
            </div>\r
        </div>\r
    <p class="msg">\r
        {{message}}\r
    </p>\r
    <div class="btn_content">\r
        <button class="btn duration-picker-element" (click)="addDuration()" i18n="@@Set">Set</button>\r
        <button class="btn duration-picker-element" (click)="clear()" i18n="@@Clear">Clear</button>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\duration-picker\duration-picker.component.css
var duration_picker_component_default2 = "/* src/app/widgets/duration-picker/duration-picker.component.css */\n.durationpicker {\n  max-height: 350px;\n  overflow: auto;\n  position: absolute;\n  z-index: 98;\n  background: white;\n  -webkit-box-shadow: 3px 4px 8px 6px #cccccc;\n  -moz-box-shadow: 3px 4px 8px 6px #cccccc;\n  box-shadow: 3px 4px 8px 6px #cccccc;\n  padding: 20px 30px;\n}\n.durationpicker .msg {\n  float: left;\n  margin: 20px 0 0px 0;\n  width: 100%;\n  font-size: 12px;\n}\n.durationpicker .close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 13px;\n}\n.durationpicker .btn_content {\n  width: 100%;\n}\n.duration-picker-element {\n  margin-left: 5px;\n}\n";

// src/app/widgets/duration-picker/duration-picker.component.ts
var WEEK = {
  plural: "weeks",
  singular: "week"
};
var YEAR = {
  plural: "years",
  singular: "year"
};
var DAY = {
  plural: "days",
  singular: "day"
};
var HOUR = {
  plural: "hours",
  singular: "hour"
};
var MINUTE = {
  plural: "minutes",
  singular: "minute"
};
var SECOND = {
  plural: "seconds",
  singular: "second"
};
var MONTH = {
  plural: "months",
  singular: "month"
};
var _a5;
var DurationPickerComponent = (_a5 = class {
  constructor() {
    this.onValueSet = new EventEmitter();
  }
  ngOnInit() {
    this.extractDurationFromValue();
    this.onModelChange(null);
  }
  extractDurationFromValue() {
    let match;
    let ptrn = /(\d)(\w)/g;
    try {
      while ((match = ptrn.exec(this.value)) != null) {
        if (this.mode === "dcmDuration") {
          switch (match[2]) {
            case "D":
              this.d = parseInt(match[1]);
              break;
            case "H":
              this.h = parseInt(match[1]);
              break;
            case "M":
              this.m = parseInt(match[1]);
              break;
            case "S":
              this.s = parseInt(match[1]);
              break;
          }
        } else {
          if (this.mode === "datePicker") {
            switch (match[2]) {
              case "D":
                this.d = parseInt(match[1]);
                break;
              case "H":
                this.h = parseInt(match[1]);
                break;
              case "M":
                this.m = parseInt(match[1]);
                break;
            }
          } else {
            switch (match[2]) {
              case "Y":
                this.y = parseInt(match[1]);
                break;
              case "W":
                this.week = parseInt(match[1]);
                break;
              case "M":
                this.month = parseInt(match[1]);
                break;
              case "D":
                this.d = parseInt(match[1]);
                break;
            }
          }
        }
      }
    } catch (e) {
      console.error("error parsing data!", e);
    }
  }
  addDuration() {
    this.onValueSet.emit(this.generateDuration());
  }
  clear() {
    this.onValueSet.emit("empty");
  }
  generateDuration() {
    let duration = "P";
    if (this.mode === "dcmPeriod" && this._isset(this.week)) {
      return `P${this.week}W`;
    } else {
      if (this.y) {
        duration = duration + `${this.y}Y`;
      }
      if (this.month) {
        duration = duration + `${this.month}M`;
      }
      if (this.d) {
        duration = duration + `${this.d}D`;
      }
      if (this.h || this.m || this.s) {
        duration = duration + "T";
      }
      if (this.h) {
        duration = duration + `${this.h}H`;
      }
      if (this.m) {
        duration = duration + `${this.m}M`;
      }
      if (this.s) {
        duration = duration + `${this.s}S`;
      }
    }
    if (duration === "P") {
      return "";
    } else return duration;
  }
  close() {
    this.onValueSet.emit("");
  }
  noWeekChange() {
    this.week = "";
  }
  weekChanged() {
    this.y = "";
    this.month = "";
    this.d = "";
  }
  onModelChange(e) {
    if (this.mode === "dcmPeriod") {
      if (this._isset(this.week)) {
        this.message = "This period will last " + this.week + "\n " + (this.week > 1 ? WEEK.plural : WEEK.singular) + "";
      } else {
        this.message = this._generateSentenceWithCountableWords({
          start: "This period will last",
          words: [{
            value: this.y,
            word: YEAR.singular,
            wordPlural: YEAR.plural
          }, {
            value: this.month,
            word: MONTH.singular,
            wordPlural: MONTH.plural
          }, {
            value: this.d,
            word: DAY.singular,
            wordPlural: DAY.plural
          }]
        });
      }
    }
    if (this.mode === "dcmDuration") {
      this.message = this._generateSentenceWithCountableWords({
        start: "This duration will last",
        words: [{
          value: this.d,
          word: DAY.singular,
          wordPlural: DAY.plural
        }, {
          value: this.h,
          word: HOUR.singular,
          wordPlural: HOUR.plural
        }, {
          value: this.m,
          word: MINUTE.singular,
          wordPlural: MINUTE.plural
        }, {
          value: this.s,
          word: SECOND.singular,
          wordPlural: SECOND.plural
        }]
      });
    }
  }
  _isset(v) {
    if (v && v != "" && v != null && v != void 0) {
      return true;
    } else {
      return false;
    }
  }
  _clearFromEmptyValue(array, objectKey) {
    return remove_default(array, m => {
      return this._isset(m[objectKey]);
    });
  }
  _generateSentenceWithCountableWords(o) {
    o.words = this._clearFromEmptyValue(o.words, "value");
    if (o.words.length > 0) {
      if (o.words.length === 1) {
        return `${o.start} ${o.words[0].value} ${o.words[0].value > 1 ? o.words[0].wordPlural : o.words[0].word}`;
      } else {
        let msg = `${o.start}`;
        let firstPart = "";
        let middlePart = "";
        let lastPart = "";
        forEach_default(o.words, (m, i) => {
          if (parseInt(i) == o.words.length - 1) {
            lastPart = `and ${o.words[i].value} ${o.words[i].value > 1 ? o.words[i].wordPlural : o.words[i].word}`;
          } else {
            if (middlePart === "" && firstPart === "") {
              firstPart = `${o.words[i].value} ${o.words[i].value > 1 ? o.words[i].wordPlural : o.words[i].word} `;
            } else {
              middlePart = middlePart + `, ${o.words[i].value} ${o.words[i].value > 1 ? o.words[i].wordPlural : o.words[i].word} `;
            }
          }
        });
        return `${msg} ${firstPart}${middlePart} ${lastPart}`;
      }
    } else {
      return "";
    }
  }
}, _a5.ctorParameters = () => [], _a5.propDecorators = {
  onValueSet: [{
    type: Output
  }],
  mode: [{
    type: Input
  }],
  value: [{
    type: Input
  }]
}, _a5);
DurationPickerComponent = __decorate([Component({
  selector: "duration-picker",
  template: duration_picker_component_default,
  imports: [FormsModule, CommonModule],
  standalone: true,
  styles: [duration_picker_component_default2]
})], DurationPickerComponent);

// angular:jit:template:src\app\widgets\date-picker\date-picker.component.html
var date_picker_component_default = `<div class="date_picker">\r
    <div [ngClass]="{'input_block':!datePickerMode}">\r
        <input *ngIf="!datePickerMode"  [(ngModel)]="inputMask" type="text" class="input_mask" placeholder="{{placeholder || ''}}" title="{{title || placeholder || ''}}" (ngModelChange)="setValues($event)">\r
        <div [ngClass]="{'icon_block':!datePickerMode}">\r
            <span *ngIf="!datePickerMode" class="glyphicon glyphicon-calendar" (click)="togglePicker()"></span>\r
            <div class="hide_layer">\r
                <input type="date" class="original_input" [ngClass]="{'date_picker_mode':datePickerMode}" [(ngModel)]="originalInput" (ngModelChange)="onOriginalChange()" #datePicker>\r
            </div>\r
        </div>\r
\r
    </div>\r
\r
</div>\r
`;

// angular:jit:style:src\app\widgets\date-picker\date-picker.component.scss
var date_picker_component_default2 = "/* src/app/widgets/date-picker/date-picker.component.scss */\n.date_picker .input_block {\n  display: grid;\n  grid-template-columns: calc(100% - 25px) 25px;\n  width: 100%;\n  justify-content: center;\n  z-index: 1;\n  align-items: center;\n  position: relative;\n  background: white;\n  border-bottom: 1px solid #ccc;\n}\n.date_picker .input_block .input_mask {\n  border: none;\n}\n.date_picker .input_block .glyphicon-calendar {\n  color: white;\n}\n.date_picker .original_input {\n  position: relative;\n  color: white !important;\n  left: -110px;\n  top: -2px;\n}\n.date_picker .original_input.date_picker_mode {\n  left: 0;\n}\n.date_picker .hide_layer {\n  display: block;\n  width: 1px;\n  height: 1px;\n  color: white;\n  position: absolute;\n  overflow: hidden;\n}\n.date_picker .icon_block {\n  background: var(--backgroundHoverColor);\n  display: flex;\n  height: 25px;\n  width: 25px;\n  justify-content: center;\n  align-items: center;\n}\n.date_picker .icon_block:hover {\n  cursor: pointer;\n}\n";

// src/app/widgets/date-picker/date-picker.component.ts
var _a6;
var DatePickerComponent = (_a6 = class {
  constructor() {
    this.onValueSet = new EventEmitter();
    this.returnAsDateType = false;
    this.datePickerMode = false;
  }
  get model() {
    return this._model;
  }
  set model(value) {
    this._model = value;
    this.setValues(value);
  }
  get showPicker() {
    return this._showPicker;
  }
  set showPicker(value) {
    console.log("in showpickerset", value);
    this._showPicker = value;
  }
  ngOnInit() {
    console.log("init date picker", this._model);
    if (this.datePickerMode) {
      this.dialogOpen = true;
      this.togglePicker(true);
    }
  }
  setValues(value) {
    try {
      const extractedDate = j4care.extractDateTimeFromString(value);
      this.originalInput = j4care.formatDate(extractedDate.firstDateTime.dateObject, "yyyy-MM-dd");
      this.inputMask = j4care.formatDate(extractedDate.firstDateTime.dateObject, this.format);
    } catch (e) {}
  }
  onOriginalChange() {
    try {
      const originalInputDate = /* @__PURE__ */new Date(this.originalInput + "T00:00:00");
      this.inputMask = j4care.formatDate(originalInputDate, this.format);
      if (this.returnAsDateType) {
        this.onValueSet.emit(originalInputDate);
      } else {
        this.onValueSet.emit(this.inputMask);
      }
    } catch (e) {}
  }
  togglePicker(wait) {
    this.dialogOpen = !this.dialogOpen;
    if (wait) {
      setTimeout(() => {
        this.datePicker.nativeElement.showPicker();
      }, 100);
    } else {
      this.datePicker.nativeElement.showPicker();
    }
  }
}, _a6.propDecorators = {
  model: [{
    type: Input
  }],
  datePicker: [{
    type: ViewChild,
    args: ["datePicker"]
  }],
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  format: [{
    type: Input
  }],
  onValueSet: [{
    type: Output
  }],
  returnAsDateType: [{
    type: Input
  }],
  datePickerMode: [{
    type: Input
  }],
  showPicker: [{
    type: Input
  }]
}, _a6);
DatePickerComponent = __decorate([Component({
  selector: "date-picker",
  template: date_picker_component_default,
  imports: [NgClass, FormsModule, CommonModule],
  standalone: true,
  styles: [date_picker_component_default2]
})], DatePickerComponent);

// src/app/widgets/range-picker/range-picker.component.ts
var _a7;
var RangePickerComponent = (_a7 = class {
  constructor(service) {
    this.service = service;
    this.modelChange = new EventEmitter();
    this.splitDateRangeChanged = new EventEmitter();
    this.smartPickerActive = false;
    this.showDurationPaicker = false;
    this.HH = [];
    this.mm = [];
    this.includeTime = false;
    this.maiInputValid = true;
    this.showSelectOptions = false;
    this.showRangePicker = false;
    this.dateComponent = {
      minDate: new Date(2e3, 0, 1),
      maxDate: /* @__PURE__ */new Date()
    };
    this.range = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null)
    });
  }
  ngOnInit() {
    this.mode = this.mode || "range";
    this.header = this.header || "Range picker";
    if (this.datePickerMode || this.onlySingleMode) {
      this.header = "Date Time picker";
      this.mode = "single";
    }
    for (let i = 0; i < 60; i++) {
      if (i < 25) {
        this.HH.push({
          value: i,
          label: i < 10 ? `0${i}` : i
        });
      }
      this.mm.push({
        value: i,
        label: i < 10 ? `0${i}` : i
      });
    }
    if (this.defaultTime) {
      this.includeTime = true;
      this.toTimeModel = this.defaultTime;
      this.singleTimeModel = this.defaultTime;
      this.fromTimeModel = this.defaultTime;
    }
  }
  addEvent(mode, e) {
    try {
      if (e) {
        if (e.value) {
          this[mode] = e.value.format("yyyyMMdd");
        } else {
          this[mode] = j4care.formatDate(new Date(e), "yyyyMMdd");
        }
      }
    } catch (e2) {
      console.error(e2);
    }
  }
  setSingeDatePicker(mode, e) {
    let format = this.dateFormat || "yyyyMMdd";
    try {
      if (e) {
        let formattedDate;
        let resultDate = j4care.extractDateTimeFromString(e);
        if (resultDate) {
          let resultDateTime = resultDate.firstDateTime;
          if (resultDateTime && resultDateTime.dateObject) formattedDate = j4care.formatDate(resultDateTime.dateObject, format);
        }
        this[mode] = formattedDate;
      }
    } catch (e2) {
      console.error(e2);
    }
    this.showPicker = false;
    this.setRange();
  }
  closeCalendar(clanedarName) {
    this[clanedarName].overlayVisible = false;
  }
  closeFromOutside() {
    if (this.showPicker) this.showPicker = false;
  }
  toggleTime() {}
  setDuration(e) {
    console.log("setDuratione", e);
    this.SplitStudyDateRange = e;
    this.showDurationPaicker = !this.showDurationPaicker;
  }
  setRange() {
    switch (this.mode) {
      case "single":
        this.model = this.singleDateModel != "" || this.singleTimeModel != "" ? this.getDateFromValue(this.singleDateModel) + this.getTimeFromValue(this.singleTimeModel, false) : "";
        break;
      case "range":
        this.model = this.fromModel != "" || this.toModel != "" || this.onlyTime ? `${this.getDateFromValue(this.fromModel) + this.getTimeFromValue(this.fromTimeModel, false)}-${this.getDateFromValue(this.toModel) + this.getTimeFromValue(this.toTimeModel, false)}` : "";
        break;
      case "rightOpen":
        this.model = this.fromModel != "" || this.onlyTime ? `${this.getDateFromValue(this.fromModel) + this.getTimeFromValue(this.fromTimeModel, false)}-` : "";
        break;
      case "leftOpen":
        this.model = this.toModel != "" || this.onlyTime ? `-${this.getDateFromValue(this.toModel) + this.getTimeFromValue(this.toTimeModel, false)}` : "";
        break;
    }
    if (this.dateRange && this.splitDateRangeChanged) {
      this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
    }
    this.modelChange.emit(this.model);
    this.filterChanged();
    this.showPicker = false;
  }
  closeSelectOptions() {
    console.log("in closeselectoptions");
    this.showSelectOptions = false;
  }
  togglePicker() {
    console.log("showPicker", this.showPicker);
    this.showPicker = !this.showPicker;
  }
  close() {
    this.showPicker = false;
  }
  clear() {
    this.fromModel = void 0;
    this.fromTimeModel = void 0;
    this.toModel = void 0;
    this.toTimeModel = void 0;
    this.singleDateModel = void 0;
    this.singleTimeModel = void 0;
    this.SplitStudyDateRange = void 0;
  }
  smartPicker() {
    this.mode = "range";
    this.smartPickerActive = !this.smartPickerActive;
    this.toModel = j4care.convertDateToString(/* @__PURE__ */new Date());
  }
  changeMode(newMode) {
    this.mode = newMode;
    if (this.smartPickerActive) {
      switch (this.mode) {
        case "single":
          if (this.fromModel) this.singleDateModel = this.fromModel;
          break;
        case "range":
          if (this.fromModel) this.toModel = /* @__PURE__ */new Date();
          break;
        case "leftOpen":
          if (this.fromModel) this.toModel = this.fromModel;
          break;
      }
    }
  }
  smartInputChange(e) {
    let extractedDurationObject = j4care.extractDurationFromValue(e);
    if (extractedDurationObject.Minutes || extractedDurationObject.Hours || extractedDurationObject.Seconds) {
      this.fromTimeModel = j4care.formatDate(j4care.createDateFromDuration(extractedDurationObject), "HH:mm:ss");
      this.toTimeModel = j4care.getTimeFromDate(/* @__PURE__ */new Date());
    } else {
      this.fromTimeModel = "";
      this.toTimeModel = "";
      this.includeTime = true;
    }
    this.fromModel = j4care.convertDateToString(this.createDateFromDuration(extractedDurationObject));
  }
  createDateFromDuration(durationObject) {
    return j4care.createDateFromDuration(durationObject);
  }
  getDateFromValue(value) {
    let result = value || (this.onlyTime ? "" : j4care.dateToString(/* @__PURE__ */new Date()));
    if (hasIn_default(result, "_isAMomentObject") && result._isAMomentObject) {
      return result.format("yyyyMMdd");
    }
    return result;
  }
  getDateFromObject(value) {
    return value || j4care.dateToString(/* @__PURE__ */new Date());
  }
  getTimeFromValue(value, onEmptyNull) {
    if (this.includeTime || this.onlyTime) {
      let emptyValue = onEmptyNull ? "000000" : "";
      return value && value != "" ? this.removeDoubleDotsFromTime(value) : emptyValue;
    }
    return "";
  }
  removeDoubleDotsFromTime(value) {
    const ptrn = /(\d{2})/g;
    let match;
    let result = "";
    if (value && value != "") {
      try {
        while ((match = ptrn.exec(value)) != null) {
          result += match[1];
        }
        return result;
      } catch (e) {
        console.error("Could not extract time values from time string", value, e);
      }
    }
    return "";
  }
  filterChanged() {
    let modifyed = j4care.extractDateTimeFromString(this.model);
    this.maiInputValid = true;
    if (modifyed) {
      this.mode = modifyed.mode;
      if ((this.mode === "range" || this.mode === "rightOpen" || this.mode === "single") && (j4care.isSetDateObject(modifyed.firstDateTime) || j4care.isSetTimeObject(modifyed.firstDateTime))) {
        if (j4care.validDateObject(modifyed.firstDateTime) || j4care.validTimeObject(modifyed.firstDateTime)) {
          if (this.mode === "single") this.singleDateModel = j4care.getDateFromObject(modifyed.firstDateTime) || "";else this.fromModel = j4care.getDateFromObject(modifyed.firstDateTime) || "";
          if (j4care.isSetTimeObject(modifyed.firstDateTime)) {
            if (j4care.validTimeObject(modifyed.firstDateTime)) {
              if (this.mode === "single") this.singleTimeModel = j4care.getTimeFromObject(modifyed.firstDateTime);else this.fromTimeModel = j4care.getTimeFromObject(modifyed.firstDateTime);
              this.includeTime = true;
            } else this.maiInputValid = false;
          }
        } else this.maiInputValid = false;
      }
      if ((this.mode === "range" || this.mode === "leftOpen") && (j4care.isSetDateObject(modifyed.secondDateTime) || j4care.isSetTimeObject(modifyed.secondDateTime))) {
        if (j4care.validDateObject(modifyed.secondDateTime) || j4care.validTimeObject(modifyed.secondDateTime)) {
          this.toModel = j4care.getDateFromObject(modifyed.secondDateTime) || "";
          if (j4care.isSetTimeObject(modifyed.secondDateTime)) {
            if (j4care.validTimeObject(modifyed.secondDateTime)) {
              this.toTimeModel = j4care.getTimeFromObject(modifyed.secondDateTime);
              this.includeTime = true;
            } else this.maiInputValid = false;
          }
        } else this.maiInputValid = false;
      }
    } else {
      if (this.model != "") this.maiInputValid = false;
    }
    if (this.maiInputValid) {
      this.modelChange.emit(this.model);
      if (this.dateRange && this.splitDateRangeChanged) {
        this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
      }
    }
  }
  toggleSelectOption() {
    this.showSelectOptions = !this.showSelectOptions;
  }
  fastPicker(mode) {
    this.showSelectOptions = false;
    this.model = this.service.getRangeFromKey(mode);
    this.modelChange.emit(this.model);
    if (this.dateRange && this.splitDateRangeChanged) {
      this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
    }
    this.filterChanged();
    this.showPicker = false;
  }
  today() {
    this.singleDateModel = j4care.convertDateToString(/* @__PURE__ */new Date());
    this.mode = "single";
    this.setRange();
  }
  thisMonth() {
    let todayDate = /* @__PURE__ */new Date();
    todayDate.setDate(1);
    let secondDate = /* @__PURE__ */new Date();
    if (this.service.eqDate(todayDate, secondDate)) this.model = j4care.convertDateToString(todayDate);else this.model = `${j4care.convertDateToString(todayDate)}-${j4care.convertDateToString(/* @__PURE__ */new Date())}`;
    this.modelChange.emit(this.model);
    if (this.dateRange && this.splitDateRangeChanged) {
      this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
    }
    this.showPicker = false;
    this.filterChanged();
  }
  lastYear() {
    let todayDate = /* @__PURE__ */new Date();
    todayDate.setFullYear(todayDate.getFullYear() - 1);
    this.model(`${j4care.convertDateToString(todayDate)}-${j4care.convertDateToString(/* @__PURE__ */new Date())}`);
    this.modelChange.emit(this.model);
    if (this.dateRange && this.splitDateRangeChanged) {
      this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
    }
    this.showPicker = false;
    this.filterChanged();
  }
  onTimeSet(timeModel, event2) {
    console.log("event", event2);
    console.log("fromTimeModel", this.fromTimeModel);
    console.log("this[timeModel]=", this[timeModel]);
    this[timeModel] = event2;
  }
  hardClear() {
    this.model = "";
    this.clear();
    this.modelChange.emit(this.model);
    this.splitDateRangeChanged.emit(this.SplitStudyDateRange);
    this.filterChanged();
    this.showPicker = false;
  }
}, _a7.ctorParameters = () => [{
  type: RangePickerService
}], _a7.propDecorators = {
  model: [{
    type: Input
  }],
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  header: [{
    type: Input
  }],
  dateFormat: [{
    type: Input
  }],
  onlyTime: [{
    type: Input
  }],
  onlyDate: [{
    type: Input
  }],
  datePickerMode: [{
    type: Input
  }],
  dateRange: [{
    type: Input
  }],
  defaultTime: [{
    type: Input
  }],
  mode: [{
    type: Input
  }],
  onlySingleMode: [{
    type: Input
  }],
  modelChange: [{
    type: Output
  }],
  splitDateRangeChanged: [{
    type: Output
  }],
  fromCalendarObject: [{
    type: ViewChild,
    args: ["fromCalendar", {
      static: true
    }]
  }],
  fromTimeCalendarObject: [{
    type: ViewChild,
    args: ["fromTimeCalendar", {
      static: true
    }]
  }],
  toCalendarObject: [{
    type: ViewChild,
    args: ["toCalendar", {
      static: true
    }]
  }],
  singleCalendarObject: [{
    type: ViewChild,
    args: ["singleCalendar", {
      static: true
    }]
  }],
  picker: [{
    type: ViewChild,
    args: ["picker"]
  }]
}, _a7);
RangePickerComponent = __decorate([Component({
  selector: "range-picker",
  template: range_picker_component_default,
  imports: [NgClass, FormsModule, TimePickerComponent, DurationPickerComponent, DatePickerComponent, ClickOutsideDirective, CommonModule],
  standalone: true,
  styles: [range_picker_component_default2]
})], RangePickerComponent);

// angular:jit:template:src\app\helpers\filter-generator\filter-generator.component.html
var filter_generator_component_default = `<!--<span *ngIf="schema"> SCHEMA </span>\r
<span *ngIf="filterTreeHeight"> HEIGHT </span>\r
<span *ngIf="filterID"> ID </span>-->\r
<div [hidden]="schema && schema.length > 0 && filterTreeHeight" class="filter filter_loader">\r
    <div class="filter_block {{cssBlockClass}} height_{{filterTreeHeight || 2}}">\r
        <mat-progress-spinner mode="indeterminate" [diameter]="40" ></mat-progress-spinner>\r
    </div>\r
</div>\r
<div *ngIf="schema && schema.length > 0 && filterTreeHeight" class="filter" (mouseleave)="mouseLeaveFilter()" (mouseenter)="mouseEnterFilter()"  (keyup)="onKeyUp($event)">\r
    <div class="filter_template_function">\r
        <span class="clearform_button" *ngIf="showFilterButtons && !hideClearButtons">\r
            <ul class="buttons">\r
                <li i18n-title="@@title.filter-generator.clear_current_filters" title="Clear current filters" (click)="$event.preventDefault();clear()"><ng-container i18n="@@Clear">Clear</ng-container> <span class="glyphicon glyphicon-remove"></span></li>\r
            </ul>\r
        </span>\r
        <div class="template_list" *ngIf="showFilterTemplateList">\r
            <span class="loader" *ngIf="!filterTemplates">\r
                <i class="fa fa-circle-o-notch fa-spin"></i>\r
            </span>\r
            <ul class="templates not_found" *ngIf="noFilterFound">\r
                <li i18n="@@no_filter_template_found">No filter-templates found!</li>\r
            </ul>\r
            <ul class="templates" *ngIf="filterTemplates">\r
                <li *ngFor="let filter of filterTemplates">\r
                    <a  title="{{filter.dcmuiFilterTemplateDescription}}" (click)="$event.preventDefault();openTemplateFilter(filter)">{{filter.dcmuiFilterTemplateGroupName}}</a>\r
                    <span class="glyphicon glyphicon-remove" (click)="removeFilterTemplate(filter)"></span></li>\r
            </ul>\r
        </div>\r
    </div>\r
    <ng-container *ngFor="let filter of schema;trackBy:trackByFn">\r
        <div class="filter_block {{cssBlockClass}} height_{{filterTreeHeight}}" (click)="inFilterClicked()">\r
            <div *ngFor="let line of filter;trackBy:trackByFn" [ngClass]="{'line':((line && line[0] && (!line[0].showIf || line[0].showIf(model)) && ((line[0].dependingOn && model[line[0].dependingOn]) || !line[0].dependingOn))||(line && line[1] && (!line[1].showIf || line[1].showIf(model)) && ((line[1].dependingOn && model[line[1].dependingOn]) || !line[1].dependingOn)))}" [ngSwitch]="filter.type">\r
              <ng-container *ngFor="let index of dualIndex">\r
                <ng-container *ngIf="line && line[index] && (!line[index].showIf || line[index].showIf(model)) && ((line[index].dependingOn && model[line[index].dependingOn]) || !line[index].dependingOn)" [ngSwitch]="line[index].tag">\r
                    <div class="input_group_dropdown" *ngSwitchCase="'combined'">\r
                        <input type="{{line[index].firstField.type}}" min="{{line[index].firstField.min}}" [(ngModel)]="model[line[index].firstField.filterKey]" placeholder="{{line[index].firstField.placeholder}}"/>\r
                        <mat-select [(ngModel)]="model[line[index].secondField.filterKey]">\r
                            <mat-option *ngIf="line[index].secondField.showStar" value="">*</mat-option>\r
                            <mat-option *ngFor="let option of line[index].secondField.options" value="{{option.value}}" title="{{option.description || option.title}}"  [innerHtml]="option.label || option.text"></mat-option>\r
                        </mat-select>\r
                    </div>\r
                  <label *ngSwitchCase="'label'" title="{{line[index].title}}">\r
                      <ng-container *ngIf="line[index].prefix">{{line[index].prefix}}</ng-container>\r
                      {{line[index].text}}\r
                      <ng-container *ngIf="!line[index].dontShowDots">:</ng-container>\r
                  </label>\r
                  <modality *ngSwitchCase="'modality'" [model]="model[line[index].filterKey]" [ngStyle]="line[index].style" (modelChange)="model[line[index].filterKey] = $event;filterChange($event)"></modality>\r
                <ng-container *ngSwitchCase="'multi-checkbox'">\r
                    <!--options:{{line[index]?.options|json}}-->\r
                    <label *ngFor="let item of line[index]?.options">\r
                        <input [disabled]="item.disabled" type="checkbox" (ngModelChange)="model[item.key] = $event;filterChange($event)" [(ngModel)]="model[item.key]"  title="{{item?.description}}" />\r
                        <span [ngStyle]="item?.style" >{{item.text}}</span>\r
                    </label>\r
                </ng-container>\r
                    <person-name-picker\r
                            *ngSwitchCase="'person-name-picker'"\r
                            [title]="line[index]?.description"\r
                            [placeholder]="line[index]?.placeholder"\r
                            [model]="model[line[index].filterKey]"\r
                            (modelChange)="model[line[index].filterKey] = $event"\r
                    ></person-name-picker>\r
                  <ng-container *ngIf="line[index].filterKey || line[index].tag === 'code-selector' || line[index].tag === 'issuer-selector' || line[index].tag === 'modified-widget'">\r
                    <div class="input_group_dropdown" *ngSwitchCase="'size_range_picker'">\r
                        <size-range-picker ngDefaultControl (modelChange)="model[line[index].filterKey] = $event;filterChange($event)" [(model)]="model[line[index].filterKey]"></size-range-picker>\r
                    </div>\r
                      <ng-container  *ngSwitchCase="'input'">\r
                        <input\r
                                [disabled]="line[index].disabled"\r
                                (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)"\r
                                [(ngModel)]="model[line[index].filterKey]"\r
                                type="text"\r
                                [ngStyle]="line[index].style"\r
                                title="{{line[index]?.description}}"\r
                                placeholder="{{line[index]?.placeholder}}"\r
                                min="{{line[index]?.min}}"\r
                                max="{{line[index]?.max}}"\r
                                *ngIf="line[index].type === 'text' || line[index].type != 'number'"\r
                        >\r
                          <input\r
                                [disabled]="line[index].disabled"\r
                                (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)"\r
                                [(ngModel)]="model[line[index].filterKey]"\r
                                type="number"\r
                                [ngStyle]="line[index].style"\r
                                title="{{line[index]?.description}}"\r
                                placeholder="{{line[index]?.placeholder}}"\r
                                min="{{line[index]?.min}}"\r
                                max="{{line[index]?.max}}"\r
                                *ngIf="line[index].type === 'number'"\r
\r
                        >\r
                      </ng-container>\r
                    <div class="filter_checkbox" *ngSwitchCase="'checkbox'" title="{{line[index]?.description}}" [ngClass]="{'active':model[line[index].filterKey]}">\r
                      <input [disabled]="line[index].disabled" type="checkbox" (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)" [(ngModel)]="model[line[index].filterKey]"  title="{{line[index]?.description}}" > <span [ngStyle]="line[index].style" >{{line[index].text}}</span>\r
                    </div>\r
                    <span *ngIf="line[index].type === 'checkbox'">{{line[index].text}}</span>\r
\r
                    <!--<p-multiSelect [disabled]="line[index].disabled" (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)"  [styleClass]="'multi_select'" [maxSelectedLabels]="line[index].maxSelectedLabels || 1" *ngSwitchCase="'multi-select'" [options]="line[index].options" [(ngModel)]="model[line[index].filterKey]" [defaultLabel]="line[index]?.placeholder"></p-multiSelect>-->\r
                    <j4care-select [(model)]="model[line[index].filterKey]" [ngStyle]="line[index].style" *ngSwitchCase="'html-multi-select'" [placeholder]="line[index]?.placeholder" [ngClass]="line[index].cssClass" [multiSelectMode]="true" [maxSelectedValueShown]="line[index].maxSelectedValueShown || 1" [showSearchField]="line[index].showSearchField">\r
                        <j4care-option *ngFor="let option of line[index].options"  [value]="option.value" title="{{option.description || option.title}}" [htmlLabel]="option.htmlLabel || option.label || option.text"></j4care-option>\r
                    </j4care-select>\r
<!--                    <j4care-select [(model)]="model[line[index].filterKey]" [ngStyle]="line[index].style" *ngSwitchCase="'html-select'" [placeholder]="line[index]?.placeholder" [ngClass]="line[index].cssClass" (modelChange)="filterChange($event)">\r
                      <j4care-option *ngIf="line[index].showStar" [value]="''">*</j4care-option>\r
                      <j4care-option *ngFor="let option of line[index].options"  [value]="option.value" title="{{option.description || option.title}}" [htmlLabel]="option.htmlLabel || option.label || option.text"></j4care-option>\r
                    </j4care-select>-->\r
                      <dcm-drop-down\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'editable-select'"\r
                              [placeholder]="line[index]?.placeholder"\r
                              [title]="line[index]?.description || ''"\r
                              [ngClass]="line[index].cssClass"\r
                              [options]="line[index].options"\r
                              [optionsTree]="line[index].optionsTree"\r
                              [min]="line[index].min"\r
                              [max]="line[index].max"\r
                              [editable]="true"\r
                              [showSearchField]="line[index].showSearchField"\r
                              [(model)]="model[line[index].filterKey]"\r
                              [multiSelectMode]="false"\r
                              (modelChange)="filterChange($event)"\r
                              [showStar]="line[index].showStar"\r
                      ></dcm-drop-down>\r
                      <dcm-drop-down\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'editable-multi-select'"\r
                              [placeholder]="line[index]?.placeholder"\r
                              [title]="line[index]?.description || ''"\r
                              [ngClass]="line[index].cssClass"\r
                              [options]="line[index].options"\r
                              [optionsTree]="line[index].optionsTree"\r
                              [min]="line[index].min"\r
                              [max]="line[index].max"\r
                              [editable]="true"\r
                              [showSearchField]="true"\r
                              [(model)]="model[line[index].filterKey]"\r
                              [multiSelectMode]="true"\r
                              (modelChange)="filterChange($event)"\r
                              [showStar]="line[index].showStar"\r
                      ></dcm-drop-down>\r
                      <dcm-drop-down\r
                              [multiSelectMode]="true"\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'multi-select'"\r
                              [placeholder]="line[index]?.placeholder"\r
                              [title]="line[index]?.description || ''"\r
                              [ngClass]="line[index].cssClass"\r
                              [optionsTree]="line[index].optionsTree"\r
                              [options]="line[index].options"\r
                              [(model)]="model[line[index].filterKey]"\r
                              [showSearchField]="line[index].showSearchField"\r
                              (modelChange)="filterChange($event)"\r
                              [showStar]="line[index].showStar"\r
                      ></dcm-drop-down>\r
                      <dcm-drop-down\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'html-select'"\r
                              [placeholder]="line[index]?.placeholder"\r
                              [title]="line[index]?.description || ''"\r
                              [ngClass]="line[index].cssClass"\r
                              [options]="line[index].options"\r
                              [(model)]="model[line[index].filterKey]"\r
                              [optionsTree]="line[index].optionsTree"\r
                              [showSearchField]="line[index].showSearchField"\r
                              (modelChange)="filterChange($event)"\r
                              [multiSelectMode]="false"\r
                              [showStar]="line[index].showStar"\r
                      ></dcm-drop-down>\r
<!--                    <mat-select [disabled]="line[index].disabled" [ngStyle]="line[index].style" (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)" [(ngModel)]="model[line[index].filterKey]" *ngSwitchCase="'select'" placeholder="{{line[index]?.placeholder}}" title="{{line[index]?.description}}">\r
                      <mat-option *ngIf="line[index].showStar" value="">*</mat-option>\r
                      <mat-option *ngFor="let option of line[index].options" [value]="option.value" title="{{option.description || option.title}}" [innerHtml]="option.label || option.text"></mat-option>\r
                    </mat-select>-->\r
                      <dcm-drop-down\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'select'"\r
                              [placeholder]="line[index]?.placeholder"\r
                              [title]="line[index]?.description || ''"\r
                              [ngClass]="line[index].cssClass"\r
                              [options]="line[index].options"\r
                              [(model)]="model[line[index].filterKey]"\r
                              [optionsTree]="line[index].optionsTree"\r
                              [showSearchField]="line[index].showSearchField"\r
                              [showSelectedEmptyValue]="line[index].showSelectedEmptyValue"\r
                              (modelChange)="filterChange($event)"\r
                              [multiSelectMode]="false"\r
                              [showStar]="line[index].showStar"\r
                      ></dcm-drop-down>\r
                    <mat-radio-group [disabled]="line[index].disabled" [ngStyle]="line[index].style" (ngModelChange)="model[line[index].filterKey] = $event;filterChange($event)" [(ngModel)]="model[line[index].filterKey]" *ngSwitchCase="'radio'">\r
                        <mat-radio-button *ngFor="let option of line[index].options" [value]="option.value" title="{{option.description}}">{{option.text}}</mat-radio-button>\r
                    </mat-radio-group>\r
                      <range-picker\r
                              [ngStyle]="line[index].style"\r
                              *ngSwitchCase="'p-calendar'"\r
                              [onlyDate]="line[index].onlyDate"\r
                              [model]="model[line[index]?.filterKey]"\r
                              (modelChange)="dateChanged(line[index]?.filterKey, $event)"\r
                              [datePickerMode]="true"\r
                              placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                              dateFormat="yyyyMMdd"\r
                              title="{{line[index]?.description}}"\r
                      ></range-picker>\r
                    <range-picker\r
                            [ngStyle]="line[index].style"\r
                            *ngSwitchCase="'range-picker'"\r
                            [onlyDate]="line[index].onlyDate"\r
                            [model]="model[line[index]?.filterKey]"\r
                            [defaultTime]="line[index].defaultTime"\r
                            (modelChange)="dateChanged(line[index]?.filterKey, $event)"\r
                            mode="range"\r
                            placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                            title="{{line[index]?.description}}"\r
                    ></range-picker>\r
                    <range-picker\r
                            [ngStyle]="line[index].style"\r
                            *ngSwitchCase="'range-picker-limit'"\r
                            [onlyDate]="line[index].onlyDate"\r
                            [model]="model[line[index]?.filterKey]"\r
                            (modelChange)="dateChanged(line[index]?.filterKey, $event)"\r
                            mode="range"\r
                            [defaultTime]="line[index].defaultTime"\r
                            placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                            title="{{line[index]?.description}}"\r
                            dateRange="true"\r
                            (splitDateRangeChanged)="splitDateRangeChanged($event);"\r
                    ></range-picker>\r
                    <range-picker\r
                            [ngStyle]="line[index].style"\r
                            *ngSwitchCase="'range-picker-time'"\r
                            [onlyDate]="line[index].onlyDate"\r
                            [model]="model[line[index]?.filterKey]"\r
                            (modelChange)="dateChanged(line[index]?.filterKey, $event)"\r
                            mode="range"\r
                            [defaultTime]="line[index].defaultTime"\r
                            placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                            title="{{line[index]?.description}}"\r
                            onlyTime="true"\r
                            (splitDateRangeChanged)="splitDateRangeChanged($event);"\r
                    ></range-picker>\r
                    <range-picker\r
                          [ngStyle]="line[index].style"\r
                          *ngSwitchCase="'single-date-time-picker'"\r
                          [onlyDate]="line[index].onlyDate"\r
                          [model]="model[line[index]?.filterKey]"\r
                          (modelChange)="dateChanged(line[index]?.filterKey, $event)"\r
                          placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                          dateFormat="yyyyMMdd"\r
                          [onlySingleMode]="true"\r
                          defaultTime="00:00:00"\r
                          mode="single"\r
                          title="{{line[index]?.description}}"\r
                    ></range-picker>\r
                      <input\r
                          type="file"\r
                          *ngSwitchCase="'file'"\r
                          (change)="model[line[index]?.filterKey] = $event.target['files']"\r
                      >\r
                    <code-selector *ngSwitchCase="'code-selector'"\r
                        [title]="line[index]?.description"\r
                        [codes]="line[index]?.codes"\r
                        placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                        (modelChange)="codeChanged(line[index]?.codes, $event)"></code-selector>\r
\r
                    <issuer-selector *ngSwitchCase="'issuer-selector'"\r
                         [title]="line[index]?.description"\r
                         [issuers]="line[index]?.issuers"\r
                         [model]="model"\r
                         placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                         (modelChange)="issuerChanged(line[index]?.issuers, $event)"></issuer-selector>\r
                    <modified-widget *ngSwitchCase="'modified-widget'"\r
                        [title]="line[index]?.description"\r
                        [model]="model"\r
                        [iodFileNames]="line[index]?.iodFileNames"\r
                        placeholder="{{line[index]?.placeholder || line[index]?.description}}"\r
                        (modelChange)="modifiedWidget($event)"\r
                    ></modified-widget>\r
                  </ng-container>\r
                    <div *ngSwitchCase="'dummy'"></div>\r
                    <label *ngSwitchCase="'label_large'" class="label_large">{{line[index].text}}</label>\r
                    <div class="dynamic-attributes" *ngSwitchCase="'dynamic-attributes'">\r
                        <div *ngIf="dynamicAttributeConfig.iods" >\r
                            <ul class="modified_list" *ngIf="dynamicAttributeConfig.dynamicAttributes && dynamicAttributeConfig.dynamicAttributes.size > 0">\r
                                <li *ngFor="let attr of Array.from(dynamicAttributeConfig.dynamicAttributes.keys())">\r
                                    <label class="label" title="{{getLabelFromIODTag(attr)}}">{{getLabelFromIODTag(attr)|trim:18}}:</label>\r
                                    <label class="value">{{dynamicAttributeConfig.dynamicAttributes.get(attr)}}</label>\r
                                    <i title="{{dynamicAttributeConfig.labels.delete_title}}" (click)="removeDynamicAttribute(attr)" class="material-icons">clear</i>\r
                                </li>\r
                            </ul>\r
                            <div class="add_block">\r
                                <dcm-drop-down\r
                                        [options]="dynamicAttributeConfig.iods"\r
                                        [(model)]="dynamicAttributeConfig.newAttribute"\r
                                        [showSearchField]="true"\r
                                        [multiSelectMode]="false"\r
                                        [placeholder]="dynamicAttributeConfig.dropdownPlaceholder"\r
                                ></dcm-drop-down>\r
                                <input type="text" [(ngModel)]="dynamicAttributeConfig.newValue" [placeholder]="dynamicAttributeConfig.labels.dynamic_value">\r
                                <i title="{{dynamicAttributeConfig.labels.add_title}}" class="material-icons" (click)="addNewDynamicAttribute()">add</i>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <button (click)="submitEmit(line[index].id)" class="btn-default submit" [ngClass]="line[index].cssClass" *ngSwitchCase="'button'" title="{{line[index].description}}">\r
                        <span *ngIf="line[index].showRefreshIcon" class="glyphicon glyphicon-refresh"></span>\r
                        <span *ngIf="line[index].showDynamicLoader" class="fa fa-circle-o-notch fa-spin dashboard_loader"></span>\r
                        {{line[index].text}}</button>\r
                </ng-container>\r
              </ng-container>\r
            </div>\r
        </div>\r
    </ng-container>\r
</div>\r
`;

// angular:jit:style:src\app\helpers\filter-generator\filter-generator.component.scss
var filter_generator_component_default2 = "/* src/app/helpers/filter-generator/filter-generator.component.scss */\n.filter.filter_loader {\n  position: relative;\n  text-align: center;\n  min-width: 100%;\n  float: left;\n}\n.filter.filter_loader .filter_block {\n  border: none;\n  width: 100%;\n}\n.filter.filter_loader mat-progress-spinner {\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  font-size: 30px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.filter .filter_block .dynamic-attributes {\n  width: 100%;\n}\n.filter .filter_block .add_block {\n  width: 100%;\n  display: inline-grid;\n  grid-template-columns: calc(50% - 10px) calc(50% - 15px) 24px;\n}\n.filter .filter_block .add_block dcm-drop-down {\n  float: left;\n}\n.filter .filter_block .add_block dcm-drop-down .dropdown_input {\n  line-height: 26px;\n  height: 26px;\n}\n.filter .filter_block .add_block input {\n  margin-left: 15px;\n  border: none;\n  border-bottom: 1px solid #ccc;\n}\n.filter .filter_block .add_block i.material-icons {\n  float: right;\n  background: rgba(6, 29, 47, 0.84);\n  color: white;\n  cursor: pointer;\n  width: 24px;\n}\n.filter .filter_block ul.modified_list {\n  list-style: none;\n  padding: 0;\n}\n.filter .filter_block ul.modified_list li {\n  width: 100%;\n  display: inline-grid;\n  grid-template-columns: calc(50% - 10px) calc(50% - 15px) 24px;\n}\n.filter .filter_block ul.modified_list li > label.value {\n  margin-left: 15px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 4px;\n}\n.filter .filter_block ul.modified_list li > .label {\n  text-align: right;\n}\n.filter .filter_block ul.modified_list li i.material-icons {\n  float: right;\n  background: rgba(6, 29, 47, 0.84);\n  color: white;\n  cursor: pointer;\n  width: 24px;\n  height: 25px;\n}\n.filter_template_function .clearform_button {\n  background: transparent;\n}\n.filter_template_function .clearform_button ul.buttons,\n.filter_template_function .clearform_button ul.templates {\n  list-style: none;\n  padding: 0;\n  float: left;\n  width: 100%;\n  margin: 0;\n}\n.filter_template_function .clearform_button ul.buttons li,\n.filter_template_function .clearform_button ul.templates li {\n  color: rgba(0, 0, 0, 0.61);\n  background: rgba(255, 255, 255, 0.64);\n  padding: 0 5px;\n  border: 1px solid #cccccc;\n}\n.filter_template_function .clearform_button ul.buttons li {\n  float: left;\n}\n.filter_template_function:hover .template_list {\n  display: block;\n}\n.filter_template_function .template_list {\n  position: absolute;\n  right: 66px;\n  top: 6px;\n  max-width: 350px;\n  max-height: 215px;\n  overflow: auto;\n  padding: 20px 15px;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.28);\n  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.28);\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.28);\n}\n.filter_template_function .template_list ul.templates {\n  margin: 0;\n  background: rgba(255, 255, 255, 0.85);\n  color: rgba(0, 0, 0, 0.61);\n  min-width: 250px;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  z-index: 9999;\n  float: left;\n}\n.filter_template_function .template_list ul.templates li {\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #cccccc;\n}\n.filter_template_function .template_list ul.templates li:hover {\n  color: #000;\n  background: rgba(255, 255, 255, 0.95);\n  cursor: pointer;\n}\n.filter_template_function .template_list ul.templates li a {\n  float: left;\n  width: 85%;\n  padding-left: 10px;\n  text-decoration: none;\n}\n.filter_template_function .template_list ul.templates li .glyphicon-remove {\n  float: right;\n  line-height: 20px;\n  width: calc(15% - 17px);\n  display: inline-block;\n  text-align: center;\n}\n.filter_template_function .template_list ul.templates.not_found {\n  padding: 2px 7px;\n  width: 100%;\n}\n.filter_template_function mat-radio-group {\n  min-height: 60px;\n}\n";

// src/app/helpers/form/form-element.ts
var FormElement = class {
  constructor(options = {}) {
    this.value = options.value;
    this.key = options.key || "";
    this.tag = options.tag || "";
    this.label = options.label || "";
    this.style = options.style || "";
    this.cssClass = options.cssClass || "";
    this.validation = options.validation;
    this.optionsTree = options.optionsTree;
    this.options = options.options;
    this.joinString = options.joinString;
    this.onChangeHook = options.onChangeHook;
    this.onFocusOutHook = options.onFocusOutHook;
    this.inputSize = options.inputSize || 1;
    this.disabled = options.disabled || false;
    this.showSelectedEmptyValue = options.showSelectedEmptyValue || false;
    this.onlyDate = options.onlyDate || false;
    this.showStar = options.showStar || false;
    this.showSearchField = options.showSearchField || false;
    this.order = options.order === void 0 ? 1 : options.order;
    this.description = options.description || "";
    this.modelPath = options.modelPath || "";
    this.placeholder = options.placeholder || "";
    this.placeholderElements = options.placeholderElements;
    this.controlType = options.controlType || "";
    this.show = options.show || false;
    this.format = options.format || void 0;
    if (options.type) {
      this.type = options.type;
    }
  }
};

// src/app/helpers/form/input-text.ts
var InputText = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "text";
    this.type = options["type"] || "";
  }
};

// src/app/helpers/form/radio-buttons.ts
var RadioButtons = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "radio";
    this.options = [];
    this.options = options["options"] || [];
  }
};

// src/app/helpers/form/checkboxes.ts
var Checkbox = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "checkbox";
    this.options = [];
    this.search = "";
    this.options = options["options"] || [];
  }
};

// src/app/helpers/form/array-element.ts
var ArrayElement = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "arrayelement";
    this.type = options["type"] || "";
  }
};

// src/app/helpers/form/dropdown-list.ts
var DropdownList = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "dropdown";
    this.options = [];
    this.options = options["options"] || [];
  }
};

// src/app/helpers/form/input-number.ts
var InputNumber = class extends FormElement {
  constructor(options = {}) {
    super(options);
    this.controlType = "number";
    this.type = options["type"] || "";
  }
};

// src/app/configuration/ae-list/ae-list.service.ts
var _a8;
var AeListService = (_a8 = class {
  constructor($http, devicesService, appService) {
    this.$http = $http;
    this.devicesService = devicesService;
    this.appService = appService;
  }
  getAes(filters) {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}aes`);
  }
  getAets() {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}aets`);
  }
  getDevices() {
    return this.devicesService.getDevices();
  }
  echoAe(callingAet, externalAet, data) {
    return this.$http.post(`${j4care.addLastSlash(this.appService.baseUrl)}aets/${callingAet}/dimse/${externalAet}${j4care.getUrlParams(data)}`, {});
  }
  generateEchoResponseText(response) {
    if (hasIn_default(response, "errorMessage") && response.errorMessage !== "") {
      return {
        title: "Error",
        text: response.errorMessage,
        status: "error"
      };
    } else {
      return {
        title: "Info",
        status: "info",
        text: "Echo successfully accomplished!<br>- Connection time: " + response.connectionTime + " ms<br/>- Echo time: " + response.echoTime + " ms<br/>- Release time: " + response.releaseTime + " ms"
      };
    }
  }
  getFiltersSchema(devices, aes) {
    return j4care.prepareFlatFilterObject([{
      tag: "html-select",
      options: devices.map(d => {
        return {
          text: d.dicomDescription ? `${d.dicomDescription} ( ${d.dicomDeviceName} )` : d.dicomDeviceName,
          value: d.dicomDeviceName
        };
      }),
      showStar: true,
      showSearchField: true,
      filterKey: "dicomDeviceName",
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "html-select",
      options: aes.map(ae => {
        return {
          value: ae.dicomAETitle,
          text: ae.dicomAETitle
        };
      }),
      showStar: true,
      showSearchField: true,
      filterKey: "dicomAETitle",
      description: "AE Title",
      placeholder: "AE Title"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomDescription",
      description: "Description",
      placeholder: "Description"
    }, {
      tag: "select",
      options: [new SelectDropdown("true", "Yes"), new SelectDropdown("false", "No")],
      showStar: true,
      filterKey: "dicomAssociationInitiator",
      description: "Association Initiator",
      placeholder: "Association Initiator"
    }, {
      tag: "select",
      options: [new SelectDropdown("true", "Yes"), new SelectDropdown("false", "No")],
      showStar: true,
      filterKey: "dicomAssociationAcceptor",
      description: "Association Acceptor",
      placeholder: "Association Acceptor"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomApplicationCluster",
      description: "Application Cluster",
      placeholder: "Application Cluster"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Query AE List"
    }], 2);
  }
}, _a8.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: DevicesService
}, {
  type: AppService
}], _a8);
AeListService = __decorate([Injectable()], AeListService);

// src/app/configuration/hl7-applications/hl7-applications.service.ts
var _a9;
var Hl7ApplicationsService = (_a9 = class {
  constructor($http, appService) {
    this.$http = $http;
    this.appService = appService;
    this.getHl7ApplicationsList = filters => this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}${Globalvar.HL7_LIST_LINK}${j4care.param(filters)}`);
  }
  getFiltersSchema() {
    return j4care.prepareFlatFilterObject([{
      tag: "input",
      type: "text",
      filterKey: "dicomDeviceName",
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "hl7ApplicationName",
      description: "hl7 Application Name",
      placeholder: "hl7 Application Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomApplicationCluster",
      description: "Application Cluster",
      placeholder: "Application Cluster"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Query Devices"
    }], 2);
  }
}, _a9.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}], _a9);
Hl7ApplicationsService = __decorate([Injectable()], Hl7ApplicationsService);

// src/app/models/dicom-table-schema-element.ts
var TableSchemaElement = class {
  constructor(options = {}) {
    this._type = options.type;
    this._header = options.header;
    this._headerDescription = options.headerDescription;
    this._pathToValue = options.pathToValue;
    this.widthWeight = options.widthWeight;
    this.cssClass = options.cssClass;
    this.hook = options.hook;
    this.hoverHook = options.hoverHook;
    this.actions = options.actions;
    this.headerActions = options.headerActions;
    this.calculatedWidth = options.calculatedWidth;
    this.pipe = options.pipe;
    this.pxWidth = options.pxWidth;
    this.title = options.title;
    this.menu = options.menu;
    this.description = options.description;
    this.showIf = options.showIf;
    this.showBorder = options.showBorder;
    this.hideTooltip = options.hideTooltip;
    this.showBorderPath = options.showBorderPath;
    this.saveTheOriginalValueOnTooltip = options.saveTheOriginalValueOnTooltip;
    this.calculateElementID();
  }
  calculateElementID() {
    let id = "";
    ["_type", "_header", "_headerDescription", "_pathToValue"].forEach(key => {
      if (typeof this[key] === "string") {
        id += `${this[key] ? this[key].replace(/([ \[\]\"\'\.])/mg, "") : ""}`;
      }
    });
    this._elementId = id;
  }
  get elementId() {
    return this._elementId;
  }
  set type(value) {
    this._type = value;
    this.calculateElementID();
  }
  get type() {
    return this._type;
  }
  set header(value) {
    this._header = value;
    this.calculateElementID();
  }
  get header() {
    return this._header;
  }
  set headerDescription(value) {
    this._headerDescription = value;
    this.calculateElementID();
  }
  get headerDescription() {
    return this._headerDescription;
  }
  set pathToValue(value) {
    this._pathToValue = value;
    this.calculateElementID();
  }
  get pathToValue() {
    return this._pathToValue;
  }
};

// src/app/configuration/web-apps-list/web-apps-list.service.ts
var _a10;
var WebAppsListService = (_a10 = class {
  constructor($http, devicesService, aeListService, appService) {
    this.$http = $http;
    this.devicesService = devicesService;
    this.aeListService = aeListService;
    this.appService = appService;
    this.getServiceClasses = () => {
      let deviceSchemaURL = `./assets/schema/webApplication.schema.json`;
      return this.$http.get(deviceSchemaURL).pipe(map(schema => {
        return get_default(schema, "properties.dcmWebServiceClass.items.enum").map(serviceClass => {
          return new SelectDropdown(serviceClass, serviceClass);
        });
      }));
    };
    this.getDevices = () => this.devicesService.getDevices().pipe(map(devices => {
      return devices.map(device => {
        return new SelectDropdown(device.dicomDeviceName, device.dicomDeviceName, device.dicomDeviceDescription);
      });
    }));
    this.getAes = () => this.aeListService.getAes().pipe(map(aes => {
      return aes.map(aet => {
        return new SelectDropdown(aet.dicomAETitle, aet.dicomAETitle, aet.dicomDescription);
      });
    }));
    this.getFilterSchema = (devices, aets, webServiceClasses) => [{
      tag: "select",
      filterKey: "dicomDeviceName",
      options: devices,
      showStar: true,
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomDescription",
      description: "Device Description",
      placeholder: "Device Description"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dcmWebAppName",
      description: "Web Application Name",
      placeholder: "Web Application Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dcmWebServicePath",
      description: "Web Service Path",
      placeholder: "Web Service Path"
    }, {
      tag: "select",
      filterKey: "dcmWebServiceClass",
      options: webServiceClasses,
      showStar: true,
      description: "Web Service Class",
      placeholder: "Web Service Class"
    }, {
      tag: "select",
      filterKey: "dicomAETitle",
      options: aets,
      showStar: true,
      description: "Application Entity Title",
      placeholder: "Application Entity Title"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dcmKeycloakClientID",
      description: "Keycloak Client ID",
      placeholder: "Keycloak Client ID"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomApplicationCluster",
      description: "Application Cluster",
      placeholder: "Application Cluster"
    }, {
      tag: "button",
      text: "SUBMIT",
      description: "Get Web Apps"
    }];
  }
  getWebApps(filter2) {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}webapps/${j4care.param(filter2)}`);
  }
  getTableSchema() {
    return [new TableSchemaElement({
      type: "index",
      pxWidth: 40
    }), new TableSchemaElement({
      type: "value",
      title: "Device",
      header: "Device",
      widthWeight: 0.6,
      pathToValue: "dicomDeviceName"
    }), new TableSchemaElement({
      type: "value",
      title: "Name",
      header: "Name",
      widthWeight: 1,
      pathToValue: "dcmWebAppName"
    }), new TableSchemaElement({
      type: "value",
      title: "Description",
      header: "Description",
      widthWeight: 2,
      pathToValue: "dicomDescription"
    }), new TableSchemaElement({
      type: "value",
      title: "Services",
      header: "Services",
      widthWeight: 2,
      pathToValue: "dcmWebServiceClass"
    }), new TableSchemaElement({
      type: "value",
      title: "URLs",
      header: "URLs",
      widthWeight: 2,
      pathToValue: "url"
    })];
  }
}, _a10.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: DevicesService
}, {
  type: AeListService
}, {
  type: AppService
}], _a10);
WebAppsListService = __decorate([Injectable()], WebAppsListService);

// src/app/configuration/control/control.service.ts
var _a11;
var ControlService = (_a11 = class {
  constructor($http, appService) {
    this.$http = $http;
    this.appService = appService;
    this.fetchStatus = url => this.$http.get(this.getUrl(url, "status"));
    this.startArchive = url => this.$http.post(this.getUrl(url, "start"), {});
    this.stopArchive = url => this.$http.post(this.getUrl(url, "stop"), {});
    this.reloadArchive = url => this.$http.post(this.getUrl(url, "reload"), {});
  }
  removeSlashOnTheEndOfUrl(url) {
    if (url && url != "" && url.slice(-1) === "/") {
      return url.slice(0, -1);
    }
    return url;
  }
  getUrl(url, mode) {
    if (url) {
      return `${this.removeSlashOnTheEndOfUrl(url)}/dcm4chee-arc/ctrl/${mode}`.replace("/dcm4chee-arc/dcm4chee-arc", "/dcm4chee-arc");
    } else {
      return `${j4care.addLastSlash(this.appService.baseUrl)}ctrl/${mode}`;
    }
  }
  getTableSchema() {
    return [{
      title: "&nbsp;",
      code: "actions",
      pxWidth: 123,
      calculatedWidth: "20%"
    }, {
      title: "Device Name",
      code: "dcmuiDeviceURLName",
      description: "Archive device name",
      widthWeight: 1,
      calculatedWidth: "20%"
    }, {
      title: "Device Description",
      code: "dicomDescription",
      description: "Archive device description",
      widthWeight: 3,
      calculatedWidth: "20%"
    }, {
      title: "Manufacturer",
      code: "dicomManufacturer",
      description: "Manufacturer",
      widthWeight: 1,
      calculatedWidth: "20%"
    }, {
      title: "Model Name",
      code: "dicomManufacturerModelName",
      description: "Manufacturer model name",
      widthWeight: 1,
      calculatedWidth: "20%"
    }, {
      title: "Primary Device Type",
      code: "dicomPrimaryDeviceType",
      widthWeight: 1,
      calculatedWidth: "20%"
    }, {
      title: "Software version",
      code: "dicomSoftwareVersion",
      widthWeight: 1,
      calculatedWidth: "20%"
    }];
  }
  getMyArchivesFromConfig($this, allDevices, callBack) {
    let devices = {};
    try {
      let config = this.appService.global.uiConfig.dcmuiDeviceClusterObject.filter(cluster => {
        let check = false;
        cluster.dcmuiDeviceClusterDevices.forEach(device => {
          if (device === this.appService.archiveDeviceName || device.dcmuiDeviceURLName === this.appService.archiveDeviceName) check = true;
        });
        return check;
      })[0];
      config.dcmuiDeviceClusterDevices.forEach((deviceName, i) => {
        this.appService.global.uiConfig.dcmuiDeviceURLObject.forEach(deviceObject => {
          if (deviceObject.dcmuiDeviceURLName === deviceName || deviceObject.dcmuiDeviceURLName === deviceName.dcmuiDeviceURLName) {
            devices[deviceObject.dcmuiDeviceURLName] = deviceObject;
          }
        });
      });
    } catch (e) {
      devices = this.getArchiveDevices(devices);
    }
    allDevices.forEach(device => {
      if (hasIn_default(devices, device.dicomDeviceName)) {
        devices[device.dicomDeviceName] = devices[device.dicomDeviceName] || {};
        Object.assign(devices[device.dicomDeviceName], device);
      }
    });
    callBack.call($this, devices);
  }
  getArchiveDevices(devices) {
    try {
      if (j4care.is(this.appService, "dcm4cheeArcConfig.hasMoreThanOneBaseUrl", true)) {
        const dcm4cheeArcConfig = get_default(this.appService, "dcm4cheeArcConfig");
        get_default(dcm4cheeArcConfig, "dcm4chee-arc-urls").forEach(deviceUrl => {
          const deviceName = dcm4cheeArcConfig.deviceNameUrlMap[deviceUrl];
          devices[deviceName] = {
            dcmuiDeviceURLName: deviceName,
            dcmuiDeviceURL: deviceUrl
          };
        });
      } else if (this.appService && (this.appService.archiveDeviceName || hasIn_default(this.appService, "archiveDevice.dicomDeviceName"))) {
        const deviceName = this.appService.archiveDeviceName || get_default(this.appService, "archiveDevice.dicomDeviceName");
        devices[deviceName] = {
          dcmuiDeviceURLName: deviceName
        };
      }
    } catch (e) {
      console.error(e);
    }
    return devices;
  }
}, _a11.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}], _a11);
ControlService = __decorate([Injectable()], ControlService);

// src/app/configuration/device-configurator/device-configurator.service.ts
var _a12;
var DeviceConfiguratorService = (_a12 = class {
  constructor($http, mainservice, deviceService, aeListService, hl7service, webAppListService, controlService) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.deviceService = deviceService;
    this.aeListService = aeListService;
    this.hl7service = hl7service;
    this.webAppListService = webAppListService;
    this.controlService = controlService;
    this.getFormaterValue = {};
    this.breadcrumbs = [];
    this.allOptions = {};
    this.defaultOpenBlock = "ext";
    this.breadcrumbs = [{
      url: "/device/devicelist",
      title: "devicelist",
      devicereff: void 0
    }];
    forEach_default(Globalvar.DYNAMIC_FORMATER, (m, i) => {
      if (m.pathInDevice) {
        this.getFormaterValue[i] = {};
        this.getFormaterValue[i] = device => {
          if (hasIn_default(device, m.pathInDevice) && get_default(device, m.pathInDevice)) {
            if (i === "dcmArchiveAETitle") {
              return of(j4care.extendAetObjectWithAliasFromSameObject(get_default(device, m.pathInDevice)));
            } else {
              return of(get_default(device, m.pathInDevice));
            }
          } else {
            return of([]);
          }
        };
      } else {
        switch (i) {
          /*                    case 'webApp':
                                  this.getFormaterValue['webApp'] = {};
                                  this.getFormaterValue['webApp'] = (device)=>{
                                      if(_.hasIn(this.mainservice.global,'webApp')){
                                          return of(this.mainservice.global.webApp);
                                      }else{
                                          return this.webAppListService.getWebApps();
                                      }
                                  };
                                  break;*/
          case "dcmAETitle":
            this.getFormaterValue["dcmAETitle"] = {};
            this.getFormaterValue["dcmAETitle"] = device => {
              if (hasIn_default(this.mainservice.global, "aes")) {
                return of(this.mainservice.global.aes);
              } else {
                return this.aeListService.getAes();
              }
            };
            break;
          case "dicomDeviceName":
            this.getFormaterValue["dicomDeviceName"] = {};
            this.getFormaterValue["dicomDeviceName"] = device => {
              if (hasIn_default(this.mainservice.global, "devices")) {
                return of(this.mainservice.global.devices);
              } else {
                return this.deviceService.getDevices();
              }
            };
            break;
          case "hl7ApplicationName":
            this.getFormaterValue["hl7ApplicationName"] = {};
            this.getFormaterValue["hl7ApplicationName"] = device => {
              if (hasIn_default(this.mainservice.global, "hl7")) {
                return of(this.mainservice.global.hl7);
              } else {
                return this.hl7service.getHl7ApplicationsList("");
              }
            };
            break;
        }
      }
    });
  }
  replaceOldAETitleWithTheNew(object, newAeTitle) {
    let oldAETitle = object.dicomAETitle;
    j4care.traverse(object, (m, i) => {
      if (i != "dicomAETitle" && m === oldAETitle) {
        m = newAeTitle;
      }
      return m;
    });
  }
  getBreadcrumbTitleFromModel(model, schemaObject) {
    let title = "object";
    if (hasIn_default(schemaObject, "type") && schemaObject.type === "array") {
      if (model) {
        title = this.replaceCharactersInTitleKey(schemaObject.titleKey, model);
      } else {
        title = "[NEW]";
      }
    } else {
      if (hasIn_default(schemaObject, "title")) {
        title = schemaObject.title;
      }
    }
    return title;
  }
  removePartFromDevice(path) {
    if (path) {
      try {
        get_default(this.device, path.path).splice(path.index, 1);
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  isSameSiblingUrl(lastUrl, newUrl) {
    try {
      if (lastUrl === newUrl) return true;
      let firstMatch;
      let secondMatch;
      const regex = /\/(\S*)\/((\S*)\[(\d*)\])\/(\S*)/;
      if ((firstMatch = regex.exec(lastUrl)) !== null && (secondMatch = regex.exec(newUrl)) !== null) {
        if (firstMatch[1] === secondMatch[1] && firstMatch[3] === secondMatch[3] && firstMatch[5] === secondMatch[5]) {
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  getObjectsFromPath(path) {
    const regex = /\/(\S*)\/(\S*)\/(\S*)/;
    let m;
    if ((m = regex.exec(path)) !== null) {
      if (m[2] && m[3]) {
        return {
          model: get_default(this.device, m[2]),
          schemaObject: get_default(this.schema, m[3]),
          schema: m[3],
          devicereff: m[2]
        };
      }
    }
    return null;
  }
  getPrefixAndSuffixArray(currentUrl, allArray) {
    try {
      if (allArray.length < 2) {
        return {
          prefix: [],
          suffix: []
        };
      } else {
        let currentSiblingIndex = findIndex_default(allArray, p => {
          return p["url"] === currentUrl;
        });
        if (allArray.length === 2) {
          if (currentSiblingIndex === 0) {
            return {
              prefix: [],
              suffix: allArray.slice(1, 2)
            };
          } else {
            return {
              prefix: allArray.slice(0, 1),
              suffix: []
            };
          }
        } else {
          if (currentSiblingIndex > -1) return {
            prefix: allArray.slice(0, currentSiblingIndex),
            suffix: allArray.slice(currentSiblingIndex + 1, allArray.length)
          };else return {
            prefix: allArray,
            suffix: []
          };
        }
      }
    } catch (e) {
      return {
        prefix: [],
        suffix: []
      };
    }
  }
  getMaterialIconNameForBreadcrumbs(deviceReff) {
    const regex = /\[\d*\]+$/m;
    if (regex.exec(deviceReff) !== null) {
      return "subdirectory_arrow_right";
    }
    return "extension";
  }
  removeExtensionFromDevice(devicereff) {
    console.log("in service devicereff", devicereff);
    unset_default(this.device, devicereff);
    console.log("this.device", this.device);
  }
  getDevice(devicename) {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${devicename}`);
  }
  getSchema(schema) {
    let schemaURL = `./assets/schema/` + schema;
    return this.$http.get(schemaURL);
  }
  getSchemaFromPath(schema, schemaparam) {
    let paramArray = schemaparam.split(".");
    let currentschemaposition = cloneDeep_default(schema);
    let parentkey;
    let parentSchema;
    if (hasIn_default(schema, schemaparam)) {
      forEach_default(paramArray, m => {
        if (!hasIn_default(currentschemaposition, m)) {
          currentschemaposition = null;
          return null;
        } else {
          parentkey = m;
          parentSchema = currentschemaposition;
          currentschemaposition = currentschemaposition[m];
        }
      });
      return currentschemaposition;
    } else {
      return null;
    }
  }
  addChangesToDevice(value, devicereff, device) {
    if (devicereff) {
      if (device) {
        if (hasIn_default(device, devicereff)) {
          this.setWith(get_default(device, devicereff), value);
        } else {
          let newValue = {};
          this.setWith(newValue, value);
          set_default(device, devicereff, newValue);
        }
      } else {
        if (hasIn_default(this.device, devicereff)) {
          this.setWith(get_default(this.device, devicereff), value);
        } else {
          let newValue = {};
          this.setWith(newValue, value);
          set_default(this.device, devicereff, newValue);
        }
      }
    } else {
      if (device) {
        this.setWith(device, value);
      } else {
        this.setWith(this.device, value);
      }
    }
  }
  setWith(device, value) {
    forEach_default(value, (m, i) => {
      if (hasIn_default(device, i)) {
        if (!isPlainObject_default(device[i]) && !(isArray_default(device[i]) && device[i].length > 0 && isPlainObject_default(device[i][0]))) {
          let newValue = this.getWrightValue(device[i], m);
          if (newValue != null) {
            device[i] = newValue;
          }
        }
      } else {
        let newValue = this.getWrightValue(device[i], m);
        if (newValue != null) {
          device[i] = newValue;
        }
      }
    });
    forEach_default(device, (m, i) => {
      if (m === null || isNumber_default(m) && isNaN_default(m) || m === "" || isArray_default(m) && m.length === 0 || m === "inherent") {
        delete device[i];
      }
    });
  }
  getWrightValue(obj, obj2) {
    if (!isEqual_default(obj, obj2)) {
      if (obj === void 0 && obj2 != void 0 && obj2 != "") {
        return obj2;
      }
      if (isString_default(obj) && obj != "" && obj2 === "") {
        return obj2;
      }
      if (isNumber_default(obj) && obj && (obj2 === "" || !obj2) && obj2 != 0) {
        return NaN;
      }
      if (isNumber_default(obj2)) {
        return obj2;
      }
      if (isArray_default(obj) && isArray_default(obj2)) {
        return obj2;
      }
      if (obj === void 0 && isArray_default(obj2) && obj2.length === 1 && obj2[0] === "") {
        return null;
      }
      if (obj != void 0 && obj2 != void 0 && (obj2 != "" && obj2 != "inherent" || obj2.length == 1 && obj2[0] != "")) {
        return obj2;
      }
      if (obj != void 0 && (obj === true || obj === false) && (obj2 === void 0 || obj2 === "")) {
        return null;
      }
      if (obj != void 0 && (obj === true || obj === false) && obj2 != void 0 && (obj2 === true || obj2 === false)) {
        return obj2;
      }
      if (obj === void 0 && (obj2 === false || obj2 === true)) {
        return obj2;
      }
      if ((obj === true || obj === false) && (obj2 === "inherent" || obj2 === false || obj2 === true)) {
        return obj2 === "inherent" ? "inherent" : obj2;
      }
    }
    return null;
  }
  saveDevice() {}
  updateDevice() {
    if (hasIn_default(this.device, "dicomDeviceName") && this.device.dicomDeviceName != "") {
      this.saveLanguageDataToLocalStorageOnSave();
      return this.$http.put(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${this.device.dicomDeviceName}`, this.device);
    } else {
      return null;
    }
  }
  saveLanguageDataToLocalStorageOnSave() {
    if (hasIn_default(this.device, "dcmDevice.dcmuiConfig[0].dcmuiLanguageConfig[0]")) {
      localStorage.setItem("languageConfig", JSON.stringify(get_default(this.device, "dcmDevice.dcmuiConfig[0].dcmuiLanguageConfig[0]")));
    } else {
      localStorage.removeItem("languageConfig");
    }
  }
  createDevice() {
    if (hasIn_default(this.device, "dicomDeviceName") && this.device.dicomDeviceName != "") {
      return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${this.device.dicomDeviceName}`, this.device);
    } else {
      return null;
    }
  }
  replaceCharactersInTitleKey(string, object) {
    let re = /{(.*?)}/g;
    let m;
    let array = [];
    do {
      m = re.exec(string);
      if (m) {
        if (m[1]) {
          array.push(m[1]);
        }
      }
    } while (m);
    forEach_default(array, i => {
      if (hasIn_default(object, i)) {
        string = replace_default(string, "{" + i + "}", object[i]);
      } else {
        string = replace_default(string, "{" + i + "}", "");
      }
    });
    return string || "";
  }
  getFormatValue(format, device) {
    if (this.getFormaterValue[format]) return this.getFormaterValue[format](device);
    return of([]);
  }
  convertSchemaToForm(device, schema, params, defaultOpenBlock) {
    let defaultExplicitSet = defaultOpenBlock;
    this.defaultOpenBlock = defaultOpenBlock || this.defaultOpenBlock;
    let form = [];
    if (hasIn_default(schema, "type")) {
      if (schema.type === "object" && hasIn_default(schema, "properties") || schema.type === "array" && hasIn_default(schema, "items.properties")) {
        let schemaProperties;
        let propertiesPath = "properties";
        let requiredArray;
        if (hasIn_default(schema, "properties")) {
          schemaProperties = schema.properties;
          requiredArray = schema.required || [];
        } else {
          schemaProperties = schema.items.properties;
          propertiesPath = "items.properties";
          requiredArray = schema.items.required || [];
        }
        forEach_default(schemaProperties, (m, i) => {
          if (hasIn_default(m, "format")) {
            this.getFormatValue(m.format, this.device || device).subscribe(formatValue => {
              console.log("formatValue", formatValue);
              if (formatValue && formatValue.length > 0) {
                m.formatValue = formatValue.map(el => {
                  if (typeof el === "string") {
                    return {
                      label: el,
                      value: el
                    };
                  } else {
                    return {
                      label: this.replaceCharactersInTitleKey(Globalvar.DYNAMIC_FORMATER[m.format].labelKey, el),
                      value: el[Globalvar.DYNAMIC_FORMATER[m.format].key]
                    };
                  }
                });
              } else {
                if (Globalvar.DYNAMIC_FORMATER[m.format]) {
                  m.formatValue = {
                    state: "missing",
                    msg: Globalvar.DYNAMIC_FORMATER[m.format].msg
                  };
                }
              }
              this.processSchemaEntries(m, i, requiredArray, propertiesPath, params, device, form);
            }, error => {
              m.formatValue = null;
              this.processSchemaEntries(m, i, requiredArray, propertiesPath, params, device, form);
            });
          } else {
            this.processSchemaEntries(m, i, requiredArray, propertiesPath, params, device, form);
          }
        });
        console.log("params", params);
        this.showNextGroup(form, defaultExplicitSet);
      } else {
        console.error("expected path object, properties, array or item.properties in schema not found: ", schema);
      }
    } else {
      console.error("Schema doesn't have type parameter", schema);
    }
    return form;
  }
  checkIfDuplicatedChild(newValue, params) {
    let titleKeys;
    let newSchema;
    let arraysPath;
    try {
      if (hasIn_default(params, "schema")) {
        newSchema = this.getSchemaFromPath(this.schema, params["schema"]);
        if (newSchema.titleKey) {
          titleKeys = this.getKeysFromTitleKey(newSchema.titleKey);
        }
        if (hasIn_default(params, "devicereff")) {
          arraysPath = this.extractArraysPathFromSpecific(params["devicereff"]);
          return this.checkIfChildeExist(get_default(this.device, arraysPath), titleKeys, newValue);
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  checkIfChildeExist(allArrays, kayArray, newValue) {
    let found = false;
    if (allArrays && allArrays.length > 0) {
      allArrays.forEach(m => {
        let equal = true;
        kayArray.forEach(k => {
          if (m[k] === newValue[k]) {
            equal = equal && true;
          } else {
            equal = false;
          }
        });
        found = found || equal;
      });
      return found;
    } else {
      return false;
    }
  }
  extractArraysPathFromSpecific(path) {
    const regex = /(^.*)\[\d*\]/g;
    let m;
    let endPath;
    while ((m = regex.exec(path)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      if (m[1]) endPath = m[1];
    }
    return endPath;
  }
  getKeysFromTitleKey(titleKey) {
    const regex = /\{(\w*)}/g;
    let m;
    let endArray = [];
    while ((m = regex.exec(titleKey)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      if (m[1]) endArray.push(m[1]);
    }
    return endArray;
  }
  processSchemaEntries(m, i, requiredArray, propertiesPath, params, device, form) {
    let $this = this;
    let value;
    let required = indexOf_default(requiredArray, i) > -1;
    let validation = {
      required
    };
    console.log(`in processSchemaEntries i=${i}, m=`, m);
    if (hasIn_default(m, "minimum")) {
      validation["minimum"] = m.minimum;
    }
    if (hasIn_default(m, "maximum")) {
      validation["maximum"] = m.maximum;
    }
    if (hasIn_default(m, "maxLength")) {
      validation["maxLength"] = m.maxLength;
    }
    if (hasIn_default(m, "minLength")) {
      validation["minLength"] = m.minLength;
    }
    if (hasIn_default(m, "exclusiveMinimum")) {
      validation["exclusiveMinimum"] = m.exclusiveMinimum;
    }
    if (hasIn_default(m, "exclusiveMaximum")) {
      validation["exclusiveMaximum"] = m.exclusiveMaximum;
    }
    if (hasIn_default(m, "pattern")) {
      validation["pattern"] = m.pattern;
    }
    if (hasIn_default(device, i)) {
      value = device[i];
    } else {
      if (hasIn_default(m, "default")) {
        value = m.default;
      }
    }
    let newOrderSuffix = 0;
    if (m.order) {
      newOrderSuffix = parseInt(m.order) / 100;
    }
    let options = [];
    switch (m.type) {
      case "string":
        if (i === "dicomDeviceName" && hasIn_default(device, "dicomDeviceName") && device.dicomDeviceName != "" && this.breadcrumbs.length < 3) {
          form.push({
            controlType: "constantField",
            key: i,
            label: m.title,
            description: m.description,
            order: 5 + newOrderSuffix,
            value,
            show: this.defaultOpenBlock === "attr"
          });
        } else {
          if (hasIn_default(m, "enum") || hasIn_default(m, "formatValue") && m.formatValue) {
            if (hasIn_default(m, "formatValue") && m.formatValue && !hasIn_default(m.formatValue, "state")) {
              forEach_default(m.formatValue, opt => {
                options.push({
                  label: opt.label,
                  value: opt.value,
                  active: opt.value === value
                });
              });
            } else {
              if (!hasIn_default(m.formatValue, "state")) {
                forEach_default(m.enum, opt => {
                  this.addEnumValueToOption(opt, options, value);
                });
              }
            }
            if (hasIn_default(m.formatValue, "state")) {
              if (m.formatValue.state === "missing" && required) form.push({
                controlType: "message",
                key: i,
                label: m.title,
                description: m.description,
                msg: m.formatValue.msg,
                order: 5 + newOrderSuffix,
                show: this.defaultOpenBlock === "attr"
              });else form.push(new InputText({
                key: i,
                label: m.title,
                description: m.description,
                type: "string",
                value,
                order: 5 + newOrderSuffix,
                validation,
                format: m.format,
                show: this.defaultOpenBlock === "attr"
              }));
            } else {
              form.push(new DropdownList({
                key: i,
                label: m.title,
                description: m.description,
                options: new OrderByPipe().transform(options, "label"),
                order: 5 + newOrderSuffix,
                validation,
                value,
                show: this.defaultOpenBlock === "attr"
              }));
            }
          } else {
            if (hasIn_default(m, "format") && (m.format === "dcmAETitle" || m.format === "dicomDeviceName" || m.format === "hl7ApplicationName" || m.format === "webApp")) {
              form.push({
                controlType: "dynamiccheckbox",
                key: i,
                label: m.title,
                description: m.description,
                type: "string",
                value: value ? value : "",
                order: 5 + newOrderSuffix,
                validation,
                format: m.format,
                show: this.defaultOpenBlock === "attr"
              });
            } else {
              if (hasIn_default(m, "format") && m.format === "dcmDefaultLanguage") {
                console.log("default", device);
                console.log("this.device", this.device);
                let options2 = [];
                if (hasIn_default(this.device, "dcmDevice.dcmuiConfig[0].dcmuiLanguageConfig[0].dcmLanguages")) {
                  get_default(this.device, "dcmDevice.dcmuiConfig[0].dcmuiLanguageConfig[0].dcmLanguages").forEach(language => {
                    let langObj = j4care.extractLanguageDataFromString(language);
                    options2.push({
                      label: `${langObj.code} - ${langObj.name} - ${langObj.nativeName}`,
                      value: language,
                      active: language === value
                    });
                  });
                }
                form.push(new DropdownList({
                  key: i,
                  label: m.title,
                  description: m.description,
                  options: options2,
                  order: 5 + newOrderSuffix,
                  validation,
                  value,
                  show: this.defaultOpenBlock === "attr"
                }));
              } else {
                form.push(new InputText({
                  key: i,
                  label: m.title,
                  description: m.description,
                  type: "string",
                  value,
                  order: 5 + newOrderSuffix,
                  validation,
                  format: m.format,
                  show: this.defaultOpenBlock === "attr"
                }));
              }
            }
          }
        }
        break;
      case "boolean":
        if (i === "dicomVendorData") {
          if (hasIn_default(device, "dicomDeviceName") && device.dicomDeviceName != "") {
            if (hasIn_default(device, "dicomVendorData") && device.dicomVendorData === true && hasIn_default(device, "dicomDeviceName") && device.dicomDeviceName != "") {
              form.push({
                controlType: "filedownload",
                key: i,
                label: m.title,
                deviceName: device.dicomDeviceName,
                description: m.description,
                order: 5 + newOrderSuffix,
                downloadUrl: `${j4care.addLastSlash(this.mainservice.baseUrl)}devices/${device.dicomDeviceName}/vendordata`,
                show: this.defaultOpenBlock === "attr"
              });
            } else {
              form.push({
                controlType: "fileupload",
                modus: "upload",
                key: i,
                label: m.title,
                deviceName: device.dicomDeviceName,
                description: m.description,
                order: 5 + newOrderSuffix,
                show: this.defaultOpenBlock === "attr"
              });
            }
          }
        } else {
          if (required) {
            options = [{
              key: "True",
              value: true
            }, {
              key: "False",
              value: false
            }];
            if (value === true || value === false) {
              if (value === true) {
                options[0]["active"] = true;
              } else {
                options[1]["active"] = true;
              }
            }
          } else {
            options = [{
              key: "True",
              value: true
            }, {
              key: "False",
              value: false
            }, {
              key: "Unchecked",
              value: "inherent"
            }];
            if (value === true || value === false) {
              if (value === true) {
                options[0]["active"] = true;
              } else {
                options[1]["active"] = true;
              }
            } else {
              options[2]["active"] = true;
            }
          }
          form.push(new RadioButtons({
            key: i,
            label: m.title,
            description: m.description,
            options,
            order: 5 + newOrderSuffix,
            validation,
            value,
            show: this.defaultOpenBlock === "attr"
          }));
        }
        break;
      case "array":
        if (i == "dicomNetworkConnectionReference" || hasIn_default(m, "formatValue") && m.formatValue && m.formatValue.length > 0) {
          if (hasIn_default(m, "formatValue") && m.formatValue && i != "dicomNetworkConnectionReference") {
            if (!hasIn_default(m.formatValue, "state")) {
              forEach_default(m.formatValue, opt => {
                options.push({
                  key: opt.label,
                  value: opt.value,
                  active: indexOf_default(value, opt.value) > -1
                });
              });
            } else {
              forEach_default(m.enum, opt => {
                this.addEnumValueToOption(opt, options, value, true);
              });
            }
          } else {
            this.device = this.device || device;
            forEach_default(this.device["dicomNetworkConnection"], (opt, i2) => {
              options.push({
                value: "/dicomNetworkConnection/" + i2,
                key: opt.cn + " (" + opt.dicomHostname + (opt.dicomPort ? ":" + opt.dicomPort : "") + ")",
                active: indexOf_default(value, "/dicomNetworkConnection/" + i2) > -1
              });
            });
          }
          if (hasIn_default(m.formatValue, "state")) {
            form.push({
              controlType: "message",
              key: i,
              label: m.title,
              description: m.description,
              msg: m.formatValue.msg,
              order: 5 + newOrderSuffix,
              show: this.defaultOpenBlock === "attr"
            });
          } else {
            form.push(new Checkbox({
              key: i,
              label: m.title,
              format: m.format,
              description: m.description,
              options: new OrderByPipe().transform(options, "key"),
              order: 5 + newOrderSuffix,
              validation,
              search: "",
              show: this.defaultOpenBlock === "attr"
            }));
          }
          console.log(`\xEC= ${i} form= `, form);
        } else {
          console.log("this.device", this.device);
          if (hasIn_default(m, "items.enum")) {
            forEach_default(m.items.enum, opt => {
              this.addEnumValueToOption(opt, options, value, true, true);
            });
            form.push(new Checkbox({
              key: i,
              label: m.title,
              description: m.description,
              options: new OrderByPipe().transform(options, "key"),
              order: 5 + newOrderSuffix,
              validation,
              search: "",
              show: this.defaultOpenBlock === "attr"
            }));
          } else {
            let url2 = "";
            if (hasIn_default(m, "items.$ref")) {
              if (value && isObject_default(value)) {
                if (Object.keys(value).length === 0) {
                  url2 = "/device/edit/" + params.device;
                  url2 = url2 + (params.devicereff ? "/" + params.devicereff + "." + i + "[0]" : "/" + i + "[0]");
                  url2 = url2 + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                  console.log("url", url2);
                  form.push({
                    controlType: "buttondropdown",
                    key: i,
                    label: m.title,
                    description: m.description,
                    addUrl: url2,
                    order: 3 + newOrderSuffix,
                    show: this.defaultOpenBlock === "child"
                  });
                } else {
                  options = [];
                  let maxVali = 0;
                  forEach_default(value, (valm, vali) => {
                    let title;
                    maxVali = parseInt(vali);
                    url2 = "/device/edit/" + params.device;
                    url2 = url2 + (params.devicereff ? "/" + params.devicereff + "." + i + "[" + vali + "]" : "/" + i + "[" + vali + "]");
                    url2 = url2 + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                    if (hasIn_default(m, "titleKey")) {
                      title = $this.replaceCharactersInTitleKey(m.titleKey, valm);
                    } else {
                      title = m.title + "[" + vali + "]";
                    }
                    options.push({
                      title,
                      description: m.description,
                      key: i,
                      url: url2,
                      currentElementUrl: params.devicereff ? params.devicereff + "." + i + "[" + vali + "]" : i + "[" + vali + "]",
                      refString: `/dicomNetworkConnection/${vali}`
                    });
                  });
                  let addUrl = "/device/edit/" + params.device;
                  addUrl = addUrl + (params.devicereff ? "/" + params.devicereff + "." + i + "[" + (maxVali + 1) + "]" : "/" + i + "[" + (maxVali + 1) + "]");
                  addUrl = addUrl + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                  console.log("addUrl", addUrl);
                  new OrderByPipe().transform(options, "title");
                  form.push({
                    controlType: "buttondropdown",
                    key: i,
                    label: m.title,
                    description: m.description,
                    options,
                    addUrl,
                    order: 3 + newOrderSuffix,
                    show: this.defaultOpenBlock === "child"
                  });
                }
              } else {
                let addUrl = "/device/edit/" + params.device;
                addUrl = addUrl + (params.devicereff ? "/" + params.devicereff + "." + i + "[0]" : "/" + i + "[0]");
                addUrl = addUrl + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                form.push({
                  controlType: "buttondropdown",
                  key: i,
                  label: m.title,
                  description: m.description,
                  options: [],
                  addUrl,
                  order: 3 + newOrderSuffix,
                  show: this.defaultOpenBlock === "child"
                });
              }
            } else {
              if (value && isObject_default(value) && Object.keys(value).length > 0 && isObject_default(value[0])) {
                options = [];
                let maxVali = 0;
                forEach_default(value, (valm, vali) => {
                  let title;
                  maxVali = parseInt(vali);
                  url2 = "/device/edit/" + params.device;
                  url2 = url2 + (params.devicereff ? "/" + params.devicereff + "." + i + "[" + vali + "]" : "/" + i + "[" + vali + "]");
                  url2 = url2 + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                  if (hasIn_default(m, "titleKey")) {
                    title = $this.replaceCharactersInTitleKey(m.titleKey, valm);
                  } else {
                    title = m.title + "[" + vali + "]";
                  }
                  options.push({
                    title,
                    description: m.description,
                    key: i,
                    url: url2,
                    currentElementUrl: params.devicereff ? params.devicereff + "." + i + "[" + vali + "]" : i + "[" + vali + "]",
                    order: 3 + newOrderSuffix,
                    show: this.defaultOpenBlock === "child"
                  });
                });
                let addUrl = "/device/edit/" + params.device;
                addUrl = addUrl + (params.devicereff ? "/" + params.devicereff + "." + i + "[" + (maxVali + 1) + "]" : "/" + i + "[" + (maxVali + 1) + "]");
                addUrl = addUrl + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                console.log("*addUrl", addUrl);
                form.push({
                  controlType: "buttondropdown",
                  key: i,
                  label: m.title,
                  description: m.description,
                  options: new OrderByPipe().transform(options, "title"),
                  addUrl,
                  order: 3 + newOrderSuffix
                });
              } else {
                if (hasIn_default(m, "items.properties")) {
                  let addUrl = "/device/edit/" + params.device;
                  addUrl = addUrl + (params.devicereff ? "/" + params.devicereff + "." + i + "[0]" : "/" + i + "[0]");
                  addUrl = addUrl + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
                  form.push({
                    controlType: "buttondropdown",
                    key: i,
                    label: m.title,
                    description: m.description,
                    options: [],
                    addUrl,
                    order: 3 + newOrderSuffix,
                    show: this.defaultOpenBlock === "child"
                  });
                } else {
                  let type = hasIn_default(m, "items.type") ? m.items.type : "text";
                  if (m.format === "dicomDeviceName" || m.format === "dcmAETitle" || m.format === "hl7ApplicationName" || m.format === "webApp") {
                    form.push({
                      controlType: "dynamiccheckbox",
                      key: i,
                      label: m.title,
                      description: m.description,
                      type: "array",
                      value: value ? value : [""],
                      order: 5 + newOrderSuffix,
                      validation,
                      format: m.format,
                      show: this.defaultOpenBlock === "attr"
                    });
                  } else {
                    form.push(new ArrayElement({
                      key: i,
                      label: m.title,
                      description: m.description,
                      type,
                      value: value ? value : [""],
                      order: 5 + newOrderSuffix,
                      validation,
                      format: m.format,
                      show: this.defaultOpenBlock === "attr"
                    }));
                  }
                }
              }
            }
          }
        }
        break;
      case "integer":
        if (hasIn_default(m, "enum")) {
          forEach_default(m.enum, opt => {
            this.addEnumValueToOption(opt, options, value);
          });
          form.push(new DropdownList({
            key: i,
            label: m.title,
            description: m.description,
            options: new OrderByPipe().transform(options, "label"),
            order: 5 + newOrderSuffix,
            validation,
            value,
            type: "number",
            show: this.defaultOpenBlock === "attr"
          }));
        } else {
          form.push(new InputNumber({
            key: i,
            label: m.title,
            description: m.description,
            value: parseFloat(value),
            type: "number",
            order: 5 + newOrderSuffix,
            validation,
            show: this.defaultOpenBlock === "attr"
          }));
        }
        break;
      default:
        if (hasIn_default(device, i) && size_default(value) < 1) {
          value = 1;
        } else {
          value = size_default(value);
        }
        let url = "/device/edit/" + params.device;
        url = url + (params.devicereff ? "/" + params.devicereff + "." + i : "/" + i);
        url = url + (params.schema ? "/" + params.schema + "." + propertiesPath + "." + i : "/properties." + i);
        form.push({
          controlType: "button",
          label: m.title,
          title: m.title,
          description: m.description,
          url,
          devicereff: params.devicereff ? params.devicereff + "." + i : i,
          order: 1 + newOrderSuffix,
          value,
          show: this.defaultOpenBlock === "ext"
        });
    }
  }
  showNextGroup(form, defaultExplicitSet) {
    console.log("defaultExplicitSet", defaultExplicitSet);
    let check = (order, i) => {
      switch (i) {
        case 1:
          return order >= 1 && order < 3;
        case 2:
          return order >= 3 && order < 5;
        case 3:
          return order >= 5;
      }
    };
    let extExist = false;
    Object.keys(form).forEach(element => {
      if (check(form[element]["order"], 1)) extExist = true;
    });
    if (!extExist) {
      let childExist = false;
      Object.keys(form).forEach(element => {
        if (check(form[element]["order"], 2)) {
          childExist = true;
          if (!defaultExplicitSet || defaultExplicitSet === "child" || defaultExplicitSet === "ext") form[element]["show"] = true;
        } else if (!defaultExplicitSet || defaultExplicitSet === "child" || defaultExplicitSet === "ext") form[element]["show"] = false;
      });
      if (!childExist) {
        Object.keys(form).forEach(element => {
          if (check(form[element]["order"], 3)) {
            form[element]["show"] = true;
          }
        });
      }
    }
  }
  /*
  * @param key:string key of the element
  * @param value:ay the new value of the element
  * @param use:string[] references where the new value should be changed elsewhere
  * */
  setValueToReferences(oldValue, newValue, use) {
    console.log("oldValue", oldValue);
    console.log("newValue", newValue);
    console.log("use", use);
    const regex = /([\w.]+)(\[\*\])|([\w.]+)/g;
    let m;
    try {
      use.forEach(ref => {
        let regexPaths = [];
        while ((m = regex.exec(ref)) !== null) {
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          regexPaths.push(m);
        }
        function set(devicePart, paths, pathsCurrentIndex) {
          if (paths[pathsCurrentIndex][1] && hasIn_default(devicePart, paths[pathsCurrentIndex][1].slice(1))) {
            get_default(devicePart, paths[pathsCurrentIndex][1].slice(1)).forEach((element, i) => {
              if (typeof element === "string") {
                if (element === oldValue) {
                  set_default(devicePart, `${paths[pathsCurrentIndex][1].slice(1)}[${i}]`, newValue);
                }
              } else {
                set(element, paths, pathsCurrentIndex + 1);
              }
            });
          }
          if (paths[pathsCurrentIndex][3] && hasIn_default(devicePart, paths[pathsCurrentIndex][3].slice(1))) {
            let returnedElement = get_default(devicePart, paths[pathsCurrentIndex][3].slice(1));
            if (typeof returnedElement === "string") {
              if (returnedElement === oldValue) {
                set_default(devicePart, paths[pathsCurrentIndex][3].slice(1), newValue);
              }
            } else {
              set(get_default(devicePart, paths[pathsCurrentIndex][3].slice(1)), paths, pathsCurrentIndex + 1);
            }
          }
        }
        set(this.device, regexPaths, 0);
      });
      console.log("device", this.device);
    } catch (e) {
      j4care.log("Trying to update the new value in the device according to 'use' array, (device-cofigurator.service.ts)", e);
    }
  }
  getSchemaDeep(currentSchema, schemaPath) {
    let paramArray = schemaPath.split(".");
    return this.getSchemaDeepHelper(currentSchema, paramArray, 0);
  }
  getSchemaDeepHelper(currentSchema, paramArray, currentIndex) {
    let path = paramArray.filter((m, i) => i <= currentIndex).join(".");
    let previousPath = paramArray.filter((m, i) => i < currentIndex).join(".");
    if (hasIn_default(currentSchema, path)) {
      if (currentIndex >= paramArray.length - 1) {
        return this.getSchemaPart(currentSchema, path, paramArray, currentIndex);
      } else {
        return this.getSchemaDeepHelper(currentSchema, paramArray, currentIndex + 1);
      }
    } else {
      return this.getSchemaPart(currentSchema, previousPath, paramArray, currentIndex);
    }
  }
  getSchemaPart(currentSchema, path, paramArray, currentIndex) {
    if (hasIn_default(currentSchema, `${path}.$ref`) || hasIn_default(currentSchema, `${path}.items.$ref`) || hasIn_default(currentSchema, `${path}.properties.$ref`)) {
      let schemaName = get_default(currentSchema, `${path}.$ref`) || get_default(currentSchema, `${path}.items.$ref`) || get_default(currentSchema, `${path}.properties.$ref`);
      let schemaRefPath = hasIn_default(currentSchema, `${path}.$ref`) && `${path}.$ref` || hasIn_default(currentSchema, `${path}.items.$ref`) && `${path}.items.$ref` || `${path}.properties.$ref`;
      return this.getSchema(schemaName).pipe(switchMap(newSchema => {
        let schemaPathWithoutRef = schemaRefPath.replace(".$ref", "");
        set_default(currentSchema, schemaPathWithoutRef, newSchema);
        return this.getSchemaDeepHelper(currentSchema, paramArray, currentIndex + 1);
      }));
    } else {
      return of(currentSchema);
    }
  }
  getMissingBreadcrumbObjects(lastBreadcrumbObject, breadcrumbs) {
    if (lastBreadcrumbObject.url != this.breadcrumbs[this.breadcrumbs.length - 1].url) {
      breadcrumbs.push(lastBreadcrumbObject);
      let previousBreadcrumb = this.getPreviousBreadcrumbObject(lastBreadcrumbObject);
      return this.getMissingBreadcrumbObjects(previousBreadcrumb, breadcrumbs);
    } else {
      return breadcrumbs.reverse();
    }
  }
  getPreviousBreadcrumbObject(params) {
    const regex = /\/(.*)\/(.*)\/(.*)\/(.*)/g;
    let match;
    let prevUrl;
    if ((match = regex.exec(params.url)) !== null) {
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      let prevSchemaPath = this.getPreviousPathPart(match[4]);
      let prevDevicePath = this.getPreviousPathPart(match[3]);
      let newModel = get_default(this.device, prevDevicePath);
      let newSchema = get_default(this.schema, prevSchemaPath);
      console.log("schema", newSchema);
      console.log("device", newModel);
      console.log("title", this.getBreadcrumbTitleFromModel(newModel, newSchema));
      prevUrl = prevDevicePath && prevSchemaPath ? `/${match[1]}/${match[2]}/${prevDevicePath}/${prevSchemaPath}` : `/${match[1]}/${match[2]}`;
      console.log("prevUrl", prevUrl);
      console.log("params", params);
      console.log("getPrefixAndSuffixArray=", this.getPrefixAndSuffixArray(prevUrl, this.allOptions[prevSchemaPath]));
      console.log("getoption", this.getBreadcrumbOptions(prevDevicePath, prevSchemaPath, this.allOptions, this.device, `/${match[1]}/${match[2]}`));
      let prefixSuffix = this.getPrefixAndSuffixArray(prevUrl, this.allOptions[prevSchemaPath]);
      return {
        url: prevUrl,
        prefixArray: prefixSuffix.prefix,
        suffixArray: prefixSuffix.suffix,
        allArray: [...prefixSuffix.prefix, ...prefixSuffix.suffix],
        title: this.getBreadcrumbTitleFromModel(newModel, newSchema),
        childObjectTitle: newSchema && newSchema.title ? newSchema.title : "",
        devicereff: prevDevicePath,
        materialIconName: this.getMaterialIconNameForBreadcrumbs(prevDevicePath)
      };
    }
  }
  getBreadcrumbOptions(devicePath, schemaPath, allOptions, deviceObject, prefixUrl) {
    try {
      if (devicePath.indexOf("[") > -1) {
        let pathWithoutIndex = this.extractArraysPathFromSpecific(devicePath);
        let options = get_default(deviceObject, pathWithoutIndex).map((el, i) => {
          return {
            title: this.getBreadcrumbTitleFromModel(el, get_default(this.schema, schemaPath)),
            currentElementUrl: `${pathWithoutIndex}[${i}]`,
            url: `${prefixUrl}/${pathWithoutIndex}[${i}]/${schemaPath}`
          };
        });
        allOptions[schemaPath] = new OrderByPipe().transform(options, "title") || [];
        return allOptions[schemaPath];
      }
    } catch (e) {
      return [];
    }
  }
  getPreviousPathPart(path) {
    console.log("path", path);
    try {
      let splited = path.split(".");
      let i = splited.length - 1;
      let groupString = "";
      let tempArray = [];
      while (i > -1) {
        if (groupString === "") {
          groupString = splited[i];
          i--;
        } else {
          if (["properties", "items"].indexOf(splited[i]) > -1) {
            groupString = `${splited[i]}.${groupString}`;
            i--;
          } else {
            tempArray.push(groupString);
            groupString = "";
          }
        }
      }
      if (groupString) {
        tempArray.push(groupString);
      }
      tempArray.splice(0, 1);
      return tempArray.reverse().join(".");
    } catch (e) {
      console.error(e);
      return path;
    }
  }
  reloadArchive() {
    let archiveUrl;
    try {
      const deviceName = get_default(this.device, "dicomDeviceName");
      if (hasIn_default(this.mainservice, "dcm4cheeArcConfig.deviceNameUrlMap")) {
        const mappedArchiveDevices = this.mainservice["dcm4cheeArcConfig"]["deviceNameUrlMap"];
        Object.keys(mappedArchiveDevices).forEach(url => {
          if (mappedArchiveDevices[url] === deviceName) {
            archiveUrl = url;
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
    return this.controlService.reloadArchive(archiveUrl);
  }
  addEnumValueToOption(opt, options, value, useKey, checkContainingIndex) {
    try {
      let optObject = {};
      if (opt && typeof opt === "string" && opt.indexOf("|") > -1) {
        let [optValue, description, label] = opt.split("|");
        optObject = {
          description: description ?? "",
          value: optValue ?? "",
          active: optValue === value || checkContainingIndex && indexOf_default(value, optValue) > -1
        };
        if (useKey) {
          optObject["key"] = label || optValue || "";
        } else {
          optObject["label"] = label || optValue || "";
        }
      } else {
        optObject = {
          value: opt,
          active: opt === value || checkContainingIndex && indexOf_default(value, opt) > -1
        };
        if (useKey) {
          optObject["key"] = opt;
        } else {
          optObject["label"] = opt;
        }
      }
      options.push(optObject);
    } catch (e) {
      console.error(e);
    }
  }
}, _a12.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}, {
  type: DevicesService
}, {
  type: AeListService
}, {
  type: Hl7ApplicationsService
}, {
  type: WebAppsListService
}, {
  type: ControlService
}], _a12);
DeviceConfiguratorService = __decorate([Injectable()], DeviceConfiguratorService);

// src/app/models/gsps-query-params.ts
var GSPSQueryParams = class {
  constructor(studyUID, seriesUID, objectUID, contentType, frameNumber, presentationSeriesUID, presentationUID) {
    this._studyUID = studyUID;
    this._seriesUID = seriesUID;
    this._objectUID = objectUID;
    this._contentType = contentType;
    this._frameNumber = frameNumber;
    this._presentationSeriesUID = presentationSeriesUID;
    this._presentationUID = presentationUID;
  }
  get studyUID() {
    return this._studyUID;
  }
  set studyUID(value) {
    this._studyUID = value;
  }
  get seriesUID() {
    return this._seriesUID;
  }
  set seriesUID(value) {
    this._seriesUID = value;
  }
  get objectUID() {
    return this._objectUID;
  }
  set objectUID(value) {
    this._objectUID = value;
  }
  get contentType() {
    return this._contentType;
  }
  set contentType(value) {
    this._contentType = value;
  }
  get frameNumber() {
    return this._frameNumber;
  }
  set frameNumber(value) {
    this._frameNumber = value;
  }
  get presentationSeriesUID() {
    return this._presentationSeriesUID;
  }
  set presentationSeriesUID(value) {
    this._presentationSeriesUID = value;
  }
  get presentationUID() {
    return this._presentationUID;
  }
  set presentationUID(value) {
    this._presentationUID = value;
  }
};

// src/app/monitoring/storage-systems/storage-systems.service.ts
var _a13;
var StorageSystemsService = (_a13 = class {
  constructor($http, mainservice) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.usage = [{
      value: "dcmObjectStorageID",
      text: "Object Storage"
    }, {
      value: "dcmMetadataStorageID",
      text: "Metadata Storage"
    }, {
      value: "dcmSeriesMetadataStorageID",
      text: "SeriesMetadata Storage"
    }];
    this.uriSchema = [{
      text: "file",
      value: "file"
    }, {
      text: "jclouds",
      value: "jclouds"
    }, {
      text: "emc-ecs-s3",
      value: "emc-ecs-s3"
    }, {
      text: "hcp",
      value: "hcp"
    }, {
      text: "documentum",
      value: "documentum"
    }];
  }
  search(filters, offset) {
    return this.$http.get(`${j4care.addLastSlash(this.mainservice.baseUrl)}storage?${this.mainservice.param(this.queryParams(filters, offset))}`);
  }
  queryParams(filters, offset) {
    filters.offset = offset && offset != "" ? offset : 0;
    if (filters.status && filters.status === "*") {
      delete filters.status;
    }
    if (filters.ExporterID && filters.ExporterID === "*") {
      delete filters.ExporterID;
    }
    return filters;
  }
  flush(status, before) {
    let urlParam = this.mainservice.param({
      status,
      updatedBefore: before
    });
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}stgcmt?${urlParam}`);
  }
  delete(pk) {
    return this.$http.delete(`${j4care.addLastSlash(this.mainservice.baseUrl)}stgcmt/'${pk}`);
  }
  getFiltersSchema(aets) {
    return [[[{
      tag: "html-select",
      options: aets.map(d => {
        return {
          text: d.dicomAETitle,
          value: d.dicomAETitle
        };
      }),
      showStar: true,
      showSearchField: true,
      filterKey: "dicomAETitle",
      description: "AE Title",
      placeholder: "AE Title"
    }, {
      tag: "select",
      options: this.uriSchema,
      showStar: true,
      filterKey: "uriScheme",
      description: "Uri Schema",
      placeholder: "Uri Schema"
    }], [{
      tag: "select",
      options: this.usage,
      showStar: true,
      filterKey: "usage",
      description: "Usage",
      placeholder: "Usage"
    }, {
      tag: "combined",
      firstField: {
        tag: "number",
        type: "number",
        min: 1,
        filterKey: "usableSpaceBelow",
        placeholder: "UsableSpace below",
        title: "UsableSpace below"
      },
      secondField: {
        tag: "select",
        filterKey: "usableSpaceBelowMode",
        showStar: false,
        options: [{
          "value": "TB",
          text: "TB"
        }, {
          "value": "GB",
          text: "GB"
        }, {
          "value": "MB",
          text: "MB"
        }, {
          "value": "BYTE",
          text: "Byte"
        }],
        placeholder: "Unit",
        title: "Unit"
      }
    }]], [[{
      tag: "input",
      type: "text",
      filterKey: "dcmStorageClusterID",
      placeholder: "Storage Cluster ID",
      description: "Storage Cluster ID"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Get Storage commitments"
    }], []]];
  }
  getNextStorage(storages) {
    let grouped = {};
    storages.forEach(storage => {
      if (j4care.isSetInObject(storage, "dicomAETitle")) {
        storage["dicomAETitle"].forEach(aet => {
          grouped[aet] = grouped[aet] || [];
          grouped[aet].push(storage);
        });
      }
    });
  }
  changeLocationStatus(storageID, params) {
    return this.$http.post(`${j4care.addLastSlash(this.mainservice.baseUrl)}storage/${storageID}/changestatus${j4care.param(params)}`, {});
  }
}, _a13.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: AppService
}], _a13);
StorageSystemsService = __decorate([Injectable()], StorageSystemsService);

// src/app/helpers/dicom-studies-table/dicom-studies-table.interfaces.ts
var DynamicPipe = class {
  constructor(pipeToken, pipeArgs) {
    this._pipeToken = pipeToken;
    this._pipeArgs = pipeArgs;
  }
  get pipeToken() {
    return this._pipeToken;
  }
  set pipeToken(value) {
    this._pipeToken = value;
  }
  get pipeArgs() {
    return this._pipeArgs;
  }
  set pipeArgs(value) {
    this._pipeArgs = value;
  }
};

// src/app/pipes/content-description.pipe.ts
var ContentDescriptionPipe = class ContentDescriptionPipe2 {
  transform(value, args) {
    function valueOf(attrs, code) {
      try {
        return attrs[code].Value[0];
      } catch (e) {
        return false;
      }
    }
    ;
    function valuesOf(attr) {
      return attr && attr.Value && attr.Value.join();
    }
    ;
    function imageDescriptionOf(attrs) {
      let cols = valueOf(attrs, "00280011");
      return cols && cols + "x" + valueOf(attrs, "00280010") + (valueOf(attrs, "00280008") > 1 ? "x" + valueOf(attrs, "00280008") + " " : " ") + " " + valueOf(attrs, "00280100") + " bit " + valuesOf(attrs["00080008"]);
    }
    ;
    function srDescriptionOf(attrs) {
      let code = valueOf(attrs, "0040A043");
      return code && [valueOf(attrs, "0040A496"),
      // PreliminaryFlag
      valueOf(attrs, "0040A491"),
      // CompletionFlag
      valueOf(attrs, "0040A493"),
      // VerificationFlag
      valueOf(code, "00080104")
      // CodeMeaning
      ].filter(function (obj) {
        return obj;
      }).join(" ");
    }
    ;
    return valueOf(value, "00700081") || imageDescriptionOf(value) || srDescriptionOf(value) || valueOf(value, "00420010") || "";
  }
};
ContentDescriptionPipe = __decorate([Pipe({
  name: "contentDescription",
  standalone: false
})], ContentDescriptionPipe);

// src/app/pipes/patient-issuer.pipe.ts
var PatientIssuerPipe = class PatientIssuerPipe2 {
  transform(attrs, args) {
    function valueOf(attrs2, tag) {
      try {
        return attrs2[tag].Value[0];
      } catch (e) {
        return false;
      }
    }
    function valueOfItem(attrs2, seqTag, tag) {
      try {
        let item = attrs2[seqTag].Value[0];
        return valueOf(item, tag);
      } catch (e) {
        return false;
      }
    }
    function patientIdentifiersOf(attrs2) {
      let pid = valueOf(attrs2, "00100020");
      let issuerOfPID = valueOf(attrs2, "00100021");
      let typeOfPID = valueOf(attrs2, "00100022");
      let issuerOfPIDQualifiersUniversalEntityID = valueOfItem(attrs2, "00100024", "00400032");
      let issuerOfPIDQualifiersUniversalEntityIDType = valueOfItem(attrs2, "00100024", "00400033");
      let issuerOfPIDQualifiers = issuerOfPIDQualifiersUniversalEntityID === false ? issuerOfPIDQualifiersUniversalEntityIDType == false ? false : "&" + issuerOfPIDQualifiersUniversalEntityIDType : issuerOfPIDQualifiersUniversalEntityIDType == false ? issuerOfPIDQualifiersUniversalEntityID + "&" : issuerOfPIDQualifiersUniversalEntityID + "&" + issuerOfPIDQualifiersUniversalEntityIDType;
      let issuer = issuerOfPID === false ? issuerOfPIDQualifiers === false ? "" : "&" + issuerOfPIDQualifiers : issuerOfPIDQualifiers === false ? issuerOfPID : issuerOfPID + "&" + issuerOfPIDQualifiers;
      const tooltipVersion = pid === false ? "" : issuer == "" ? typeOfPID === false ? `${pid}` : `${pid}^^^^` + typeOfPID : typeOfPID === false ? `${pid}^^^` + issuer : `${pid}^^^` + issuer + "^" + typeOfPID;
      const htmlVersion = pid === false ? "" : issuer == "" ? typeOfPID === false ? `<b>${pid}</b>` : `<b>${pid}</b><span>${typeOfPID}</span>` : typeOfPID === false ? `<b>${pid}</b><span>${issuer}</span>` : `<b>${pid}</b><span>${issuer}^${typeOfPID}</span>`;
      if (tooltipVersion != "") {
        return {
          tooltip: tooltipVersion,
          html: `<span class="mixed_size">${htmlVersion}</span>`
        };
      }
      return "";
    }
    if (j4care.is(args, "dcmuiHideOtherPatientIDs", true)) {
      return patientIdentifiersOf(attrs);
    } else {
      const allParts = [patientIdentifiersOf(attrs)];
      if (hasIn_default(attrs, '["00101002"].Value')) {
        get_default(attrs, '["00101002"].Value').forEach(subAttrs => {
          allParts.push(patientIdentifiersOf(subAttrs));
        });
      }
      if (allParts && allParts[0] && typeof allParts[0] === "string") {
        return allParts.join(", ");
      } else {
        let tooltipPart = [];
        let htmlPart = "";
        allParts.forEach(part => {
          if (part && part.tooltip) {
            tooltipPart.push(part.tooltip);
          }
          htmlPart += part.html || "";
        });
        return {
          tooltip: tooltipPart.join(", "),
          html: htmlPart
        };
      }
    }
  }
};
PatientIssuerPipe = __decorate([Pipe({
  name: "patientIssuer",
  standalone: true
})], PatientIssuerPipe);

// src/app/models/patient-dicom.ts
var PatientDicom = class {
  constructor(attrs, studies, showAttributes, showStudies, offset, mwls, showMwls, diffs, showDiffs, uwls, showUwls, mpps, showMpps) {
    this._attrs = attrs;
    this._studies = studies;
    this._mwls = mwls;
    this._mpps = mpps;
    this._uwls = uwls;
    this._diffs = diffs;
    this._showAttributes = showAttributes || false;
    this._showStudies = showStudies || false;
    this._showMwls = showMwls || false;
    this._showMpps = showMpps || false;
    this._showDiffs = showDiffs || false;
    this._offset = offset || 0;
    this._showUwls = showUwls;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get studies() {
    return this._studies;
  }
  set studies(value) {
    this._studies = value;
  }
  get mwls() {
    return this._mwls;
  }
  set mwls(value) {
    this._mwls = value;
  }
  get mpps() {
    return this._mpps;
  }
  set mpps(value) {
    this._mpps = value;
  }
  get uwls() {
    return this._uwls;
  }
  set uwls(value) {
    this._uwls = value;
  }
  get diffs() {
    return this._diffs;
  }
  set diffs(value) {
    this._diffs = value;
  }
  get showMwls() {
    return this._showMwls;
  }
  set showMwls(value) {
    this._showMwls = value;
  }
  get showMpps() {
    return this._showMpps;
  }
  set showMpps(value) {
    this._showMpps = value;
  }
  get showUwls() {
    return this._showUwls;
  }
  set showUwls(value) {
    this._showUwls = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get showStudies() {
    return this._showStudies;
  }
  set showStudies(value) {
    this._showStudies = value;
  }
  get showDiffs() {
    return this._showDiffs;
  }
  set showDiffs(value) {
    this._showDiffs = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
};
var PATIENT_NAME_PARTS = ["FAMILY-NAME", "GIVEN-NAME", "MIDDLE-NAME", "NAME-PREFIX", "NAME-SUFFIX", "I_FAMILY-NAME", "I_GIVEN-NAME", "I_MIDDLE-NAME", "I_NAME-PREFIX", "I_NAME-SUFFIX", "P_FAMILY-NAME", "P_GIVEN-NAME", "P_MIDDLE-NAME", "P_NAME-PREFIX", "P_NAME-SUFFIX"];
var PERSON_NAME_PARTS_BY_LES_PROBABILITY = ["P_NAME-SUFFIX", "I_NAME-SUFFIX", "P_NAME-PREFIX", "I_NAME-PREFIX", "P_MIDDLE-NAME", "I_MIDDLE-NAME", "P_FAMILY-NAME", "I_FAMILY-NAME", "P_GIVEN-NAME", "I_GIVEN-NAME", "NAME-SUFFIX", "NAME-PREFIX", "MIDDLE-NAME", "FAMILY-NAME", "GIVEN-NAME"];

// src/app/pipes/person-name.pipe.ts
var PersonNamePipe = class PersonNamePipe2 {
  transform(nameObject, format) {
    if ((!format || format === "") && nameObject && nameObject.Alphabetic) {
      return nameObject.Alphabetic;
    }
    format = format || `{NAME-PREFIX} {GIVEN-NAME} {MIDDLE-NAME} {FAMILY-NAME}, {NAME-SUFFIX}`;
    const nameKeys = PATIENT_NAME_PARTS;
    try {
      const regex = {
        names: /({FAMILY-NAME})|({GIVEN-NAME})|({MIDDLE-NAME})|({NAME-PREFIX})|({NAME-SUFFIX})|({I_FAMILY-NAME})|({I_GIVEN-NAME})|({I_MIDDLE-NAME})|({I_NAME-PREFIX})|({I_NAME-SUFFIX})|({P_FAMILY-NAME})|({P_GIVEN-NAME})|({P_MIDDLE-NAME})|({P_NAME-PREFIX})|({P_NAME-SUFFIX})/g,
        //startingEndingSpaces: /^(\s*[\(\[\,.|\s]]*\s*[\)\[\],.|\s]*\s*)|(\s*[\(\[\,|]]*\s*[\)\[\],.|]*\s*)$/gm,
        startingEndingSpaces: /^(\s*[\[,.|\s]]*\s*[\[\],.|\s]*\s*)|(\s*[\[,| ]]*\s*[\[\],.|]*\s*)$/gm,
        parenthesesWithSpaces: /([({\[]\s*[)}\]])/gm,
        multipleSpaces: /(^\s|\s$|\s{2,})/gm
      };
      if (typeof nameObject === "string") {
        if (nameObject.startsWith("==") && format.indexOf("P_") > -1) {
          nameObject = {
            Phonetic: nameObject.replace(/=/g, "")
          };
        } else if (nameObject.startsWith("=") && format.indexOf("I_") > -1) {
          nameObject = {
            Ideographic: nameObject.replace(/=/g, "")
          };
        } else {
          nameObject = {
            Alphabetic: nameObject.replace(/=/g, "")
          };
        }
      }
      if (format && typeof format === "string" && (hasIn_default(nameObject, "Alphabetic") || hasIn_default(nameObject, "Ideographic") || hasIn_default(nameObject, "Phonetic"))) {
        let names = extractNameElements(nameObject);
        let formattedName = format.replace(regex.names, (...args) => {
          let i = 0;
          while (i <= 14) {
            if (args[i + 1]) {
              return names[nameKeys[i]] || "";
            }
            i++;
          }
          return "";
        });
        formattedName = formattedName.replace(regex.parenthesesWithSpaces, (...args) => "");
        formattedName = formattedName.replace(regex.startingEndingSpaces, (...args) => "");
        formattedName = formattedName.replace(regex.multipleSpaces, (...args) => " ");
        return formattedName;
      }
    } catch (e) {
      if (hasIn_default(nameObject, "Alphabetic")) {
        return get_default(nameObject, "Alphabetic");
      }
      return "";
    }
    function extractNameElements(tempNameObject) {
      let result = {};
      ["Alphabetic", "Ideographic", "Phonetic"].forEach((key, keyIndex) => {
        if (hasIn_default(tempNameObject, key) && typeof get_default(tempNameObject, key) === "string") {
          tempNameObject[key].split("^").forEach((el, i) => {
            result[nameKeys[i + 5 * keyIndex]] = el;
          });
        }
      });
      return result;
    }
  }
};
PersonNamePipe = __decorate([Pipe({
  name: "personName",
  standalone: false
})], PersonNamePipe);

// src/app/pipes/format-tm.pipe.ts
var FormatTMPipe = class FormatTMPipe2 {
  transform(value, args) {
    if (!value || value.length < 3) return value;
    if (value.charAt(2) === ":") return value.substr(0, 8);
    let hh_mm = value.substr(0, 2) + ":" + value.substr(2, 2);
    return value.length < 5 ? hh_mm : hh_mm + ":" + value.substr(4, 2);
  }
};
FormatTMPipe = __decorate([Pipe({
  name: "formatTM",
  standalone: false
})], FormatTMPipe);

// src/app/pipes/format-da.pipe.ts
var FormatDAPipe = class FormatDAPipe2 {
  transform(value, args) {
    return value && value.length == 8 ? value.substr(0, 4) + "-" + value.substr(4, 2) + "-" + value.substr(6) : value;
  }
};
FormatDAPipe = __decorate([Pipe({
  name: "formatDA",
  standalone: false
})], FormatDAPipe);

// src/app/pipes/format-attribute-value.pipe.ts
var FormatAttributeValuePipe = class FormatAttributeValuePipe2 {
  transform(value, args) {
    try {
      if (value && value.Value && value.Value.length) {
        switch (value.vr) {
          case "SQ":
            return value.Value.length + " Item(s)";
          case "PN":
            if (value.Value && value.Value[0]) {
              return value.Value.map(function (value2) {
                return value2.Alphabetic;
              }).join();
            } else {
              return "";
            }
          default:
            return value.Value.join();
        }
      }
      return value.BulkDataURI || "";
    } catch (e) {
      return value;
    }
  }
};
FormatAttributeValuePipe = __decorate([Pipe({
  name: "formatAttributeValue",
  standalone: true
})], FormatAttributeValuePipe);

// src/app/pipes/custom-date.pipe.ts
var CustomDatePipe = class CustomDatePipe2 {
  transform(value, args) {
    try {
      if (value && typeof value === "string" || hasIn_default(value, "Value[0]") && typeof get_default(value, "Value[0]") === "string") {
        let tempValue;
        if (hasIn_default(value, "Value[0]")) {
          tempValue = get_default(value, "Value[0]");
        } else {
          tempValue = value;
        }
        if (args) {
          let extractedDateTime = j4care.extractDateTimeFromString(tempValue);
          if (extractedDateTime.firstDateTime.FullYear && extractedDateTime.firstDateTime.Hours) {
            return j4care.formatDate(extractedDateTime.firstDateTime.dateObject, args.dateTimeFormat) || tempValue;
          }
          if (extractedDateTime.firstDateTime.FullYear && !extractedDateTime.firstDateTime.Hours) {
            return j4care.formatDate(extractedDateTime.firstDateTime.dateObject, args.dateFormat) || tempValue;
          }
          if (!extractedDateTime.firstDateTime.FullYear && extractedDateTime.firstDateTime.Hours) {
            return j4care.formatDate(extractedDateTime.firstDateTime.dateObject, args.timeFormat) || tempValue;
          }
        } else {
          return tempValue;
        }
      }
    } catch (e) {
      console.groupCollapsed("Custom Date Pipe params:");
      console.log("value", value);
      console.log("args", args);
      console.error("Formatting doesn't work", e);
      console.groupEnd();
      return value;
    }
    return value;
  }
};
CustomDatePipe = __decorate([Pipe({
  name: "customDate",
  standalone: true
})], CustomDatePipe);

// src/app/study/study/study.service.ts
var _a14;
var StudyService = (_a14 = class {
  constructor(aeListService, $http, storageSystems, devicesService, webAppListService, permissionService, _keycloakService, appService, appRequest) {
    this.aeListService = aeListService;
    this.$http = $http;
    this.storageSystems = storageSystems;
    this.devicesService = devicesService;
    this.webAppListService = webAppListService;
    this.permissionService = permissionService;
    this._keycloakService = _keycloakService;
    this.appService = appService;
    this.appRequest = appRequest;
    this.iod = {};
    this.integerVr = ["DS", "FL", "FD", "IS", "SL", "SS", "UL", "US"];
    this.dicomHeader = new HttpHeaders({
      "Content-Type": "application/dicom+json"
    });
    this.jsonHeader = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.sharedObservables$ = {};
    this.getDiffAttributeSet = baseUrl => this.$http.get(`${baseUrl ? j4care.addLastSlash(baseUrl) : j4care.addLastSlash(this.appService.baseUrl)}attribute-set/DIFF_RS`);
    this.verifyStorage = (attrs, studyWebService, level, param) => {
      let url = `${this.getURL(attrs, studyWebService.selectedWebService, level)}/stgver${j4care.param(param)}`;
      return this.$http.post(url, {}, this.dicomHeader);
    };
    this.schedulestorageVerificationStudies = (param, studyWebService) => this.$http.post(`${this.getDicomURL("study", studyWebService.selectedWebService)}/stgver${j4care.param(param)}`, {});
    this.schedulestorageVerificationSeries = (param, studyWebService) => this.$http.post(`${this.getDicomURL("series", studyWebService.selectedWebService)}/stgver${j4care.param(param)}`, {});
    this.supplementIssuer = (issuer, testSupplement, param, studyWebService) => {
      let paramString = `${j4care.param(param)}`;
      paramString = testSupplement ? paramString == "" ? "?test=" + testSupplement : paramString + "&test=" + testSupplement : paramString;
      return this.$http.post(`${this.getDicomURL("patient", studyWebService.selectedWebService)}/issuer/${issuer}${paramString}`, {});
    };
    this.updateCharset = (charset, testUpdateCharset, param, studyWebService) => {
      let paramString = `${j4care.param(param)}`;
      paramString = testUpdateCharset ? paramString == "" ? "?test=" + testUpdateCharset : paramString + "&test=" + testUpdateCharset : paramString;
      return this.$http.post(`${this.getDicomURL("patient", studyWebService.selectedWebService)}/charset/${charset}${paramString}`, {});
    };
    this.mergePatientsByPk = (selectedElements, deviceWebservice) => {
      if (selectedElements.preActionElements.getAttrs("patient").length > 1) {
        return throwError({
          error: "Multi patient merge is not supported!"
        });
      } else {
        return this.getModifyPatientUrl(deviceWebservice).pipe(switchMap(url => {
          console.log("url", url);
          const prePatientPk = this.getPatientPk(selectedElements.preActionElements.getAttrs("patient")[0]);
          return this.$http.put(`${url}/id/${prePatientPk}?merge=true`, selectedElements.postActionElements.getAttrs("patient"), this.jsonHeader);
        }));
      }
    };
    this.deleteStudy = (studyInstanceUID, dcmWebApp, param) => this.$http.delete(`${this.getDicomURL("study", dcmWebApp)}/${studyInstanceUID}${j4care.param(param)}`);
    this.deleteRejectedInstances = (reject, params) => this.$http.delete(`${j4care.addLastSlash(this.appService.baseUrl)}reject/${reject}${j4care.param(params)}`);
    this.export = (url, objects, urlSuffix, selectedWebService) => {
      if (url) {
        return this.$http.post(url, {}, this.jsonHeader);
      } else {
        return forkJoin(objects.getAllAsArray().filter(element => element.dicomLevel != "patient").map(element => {
          return this.$http.post(this.getURL(element.object.attrs, selectedWebService, element.dicomLevel) + urlSuffix, {}, this.jsonHeader);
        }));
      }
    };
    this.retrieve = (webApp, param, object, level, multipleObjects) => {
      let tempParam = clone_default(param);
      delete tempParam["destination"];
      if (multipleObjects) {
        return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel != "patient").map(element => {
          return this.$http.post(`${this.getURL(element.object.attrs, webApp, element.dicomLevel)}/export/dicom:${param.destination}${j4care.param(tempParam)}`, {}, this.jsonHeader);
        }));
      } else {
        return this.$http.post(`${this.getURL(object.attrs, webApp, level)}/export/dicom:${param.destination}${j4care.param(tempParam)}`, {});
      }
    };
    this.getInstitutions = entity => {
      if (this.institutions) {
        return of(this.institutions);
      } else {
        return this.appRequest.getUiConfig().pipe(map(uiConfig => {
          if (hasIn_default(uiConfig, "dcmuiInstitutionNameFilterType")) {
            if (!this.dcmuiInstitutionNameFilterType) {
              this.dcmuiInstitutionNameFilterType = get_default(uiConfig, "dcmuiInstitutionNameFilterType");
            }
            if (this.dcmuiInstitutionNameFilterType === "ui_config") {
              if (hasIn_default(uiConfig, "dcmuiInstitutionName")) {
                if (!this.institutions) {
                  this.institutions = get_default(uiConfig, "dcmuiInstitutionName");
                }
              }
              if (this.institutions && this.institutions.length > 0) {
                return this.institutions;
              }
            }
            if (this.dcmuiInstitutionNameFilterType === "db") {
              return "db";
            }
          }
          return;
        }), switchMap(state2 => {
          if (state2 && state2 === "db") {
            return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}institutions?entity=${entity}`);
          }
          if (state2 && state2.length && state2.length > 0) {
            return of({
              Institutions: state2
            });
          }
          return of();
        }));
      }
    };
    this.createEmptyStudy = (patientDicomAttrs, dcmWebApp) => this.$http.post(this.getDicomURL("study", dcmWebApp), patientDicomAttrs, this.dicomHeader);
  }
  getWebApps(filter2) {
    const filterMarker = [filter2?.dcmWebServiceClass || "", filter2?.dicomDeviceName || ""].join("_") || "all";
    if (!(this.sharedObservables$["webapps"] && this.sharedObservables$["webapps"][filterMarker])) {
      this.sharedObservables$["webapps"] = this.sharedObservables$["webapps"] || {};
      this.sharedObservables$["webapps"][filterMarker] = this.webAppListService.getWebApps(filter2).pipe(map(webApp => this.webAppHasPermission(webApp)), shareReplay(1));
    }
    return this.sharedObservables$["webapps"][filterMarker];
  }
  getEntrySchema(devices, aetWebService) {
    return {
      schema: j4care.prepareFlatFilterObject(Globalvar.STUDY_FILTER_ENTRY_SCHEMA(devices, aetWebService), 1),
      lineLength: 1
    };
  }
  getTokenService(studyWebService, dcmWebApp) {
    if (studyWebService && studyWebService.selectedWebService && hasIn_default(studyWebService.selectedWebService, "dcmKeycloakClientID")) {
      return this.$http.getRealm(studyWebService.selectedWebService);
    } else {
      if (dcmWebApp) {
        return this.$http.getRealm(dcmWebApp);
      }
      return this._keycloakService.getToken();
    }
  }
  getPatientPk(patientAttrs) {
    try {
      console.log("patient attributes", patientAttrs);
      let attrs;
      if (hasIn_default(patientAttrs, "[0]")) {
        attrs = patientAttrs[0];
      } else {
        attrs = patientAttrs;
      }
      return attrs["77771016"].Value[0];
    } catch (e) {
      return "";
    }
  }
  /*
  * return patientid - combination of patient id, issuer
  * */
  getPatientId(patient) {
    try {
      console.log("patient", patient);
      let obj;
      if (hasIn_default(patient, "[0]")) {
        obj = patient[0];
      } else {
        obj = patient;
      }
      const allParts = [this.getPatientIdentifierOf(obj)];
      if (hasIn_default(obj, '["00101002"].Value')) {
        get_default(obj, '["00101002"].Value').forEach(subAttrs => {
          allParts.push(this.getPatientIdentifierOf(subAttrs));
        });
      }
      return allParts.join("~");
    } catch (e) {
      return "";
    }
  }
  getPatientIdentifierOf(attrs) {
    let patientId = "";
    if (attrs.PatientID || hasIn_default(attrs, '["00100020"].Value[0]') && attrs["00100020"].Value[0] != "") {
      if (attrs.PatientID) {
        patientId = attrs.PatientID;
      }
      if (attrs.IssuerOfPatientID && attrs.IssuerOfPatientID != "") {
        patientId += "^^^" + attrs.IssuerOfPatientID;
      }
      if (hasIn_default(attrs, "IssuerOfPatientIDQualifiers.UniversalEntityID") && get_default(attrs, "IssuerOfPatientIDQualifiers.UniversalEntityID") != "") {
        patientId += "&" + attrs.IssuerOfPatientIDQualifiers.UniversalEntityID;
      }
      if (hasIn_default(attrs, "IssuerOfPatientIDQualifiers.UniversalEntityIDType") && get_default(attrs, "IssuerOfPatientIDQualifiers.UniversalEntityIDType") != "") {
        patientId += "&" + attrs.IssuerOfPatientIDQualifiers.UniversalEntityIDType;
      }
      if (hasIn_default(attrs, '["00100020"].Value[0]') && get_default(attrs, '["00100020"].Value[0]') != "") {
        patientId += attrs["00100020"].Value[0];
      }
      if (hasIn_default(attrs, '["00100021"].Value[0]') && get_default(attrs, '["00100021"].Value[0]') != "") patientId += "^^^" + attrs["00100021"].Value[0];else {
        if (hasIn_default(attrs, '["00100024"].Value[0]["00400032"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400032"].Value[0]') != "" || hasIn_default(attrs, '["00100024"].Value[0]["00400033"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400033"].Value[0]') != "" || hasIn_default(attrs, '["00100024"].Value[0]["00400035"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400035"].Value[0]') != "") patientId += "^^^";
      }
      if (hasIn_default(attrs, '["00100024"].Value[0]["00400032"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400032"].Value[0]') != "") {
        patientId += "&" + attrs["00100024"].Value[0]["00400032"].Value[0];
      }
      if (hasIn_default(attrs, '["00100024"].Value[0]["00400033"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400033"].Value[0]') != "") {
        patientId += "&" + attrs["00100024"].Value[0]["00400033"].Value[0];
      }
      if (hasIn_default(attrs, '["00100024"].Value[0]["00400035"].Value[0]') && get_default(attrs, '["00100024"].Value[0]["00400035"].Value[0]') != "") {
        patientId += "^" + attrs["00100024"].Value[0]["00400035"].Value[0];
      }
      return replace_default(patientId, "/", "%2F");
    } else {
      return void 0;
    }
  }
  getUpsWorkitemUID(attr) {
    return get_default(attr, "00080018.Value[0]");
  }
  removeUpsWorkitemUID(attr) {
    hasIn_default(attr, "00080018");
    delete attr["00080018"];
    return attr;
  }
  clearPatientObject(object) {
    let $this = this;
    forEach_default(object, function (m, i) {
      if (typeof m === "object" && i != "vr") {
        $this.clearPatientObject(m);
      } else {
        let check = typeof i === "number" || i === "vr" || i === "Value" || i === "Alphabetic" || i === "Ideographic" || i === "Phonetic" || i === "items";
        if (!check) {
          delete object[i];
        }
      }
    });
  }
  convertStringToNumber(object) {
    let $this = this;
    forEach_default(object, function (m, i) {
      if (typeof m === "object" && i != "vr") {
        $this.convertStringToNumber(m);
      } else {
        if (i === "vr") {
          if ($this.integerVr.indexOf(object.vr) > -1 && object.Value && object.Value.length > 0) {
            if (object.Value.length > 1) {
              forEach_default(object.Value, (k, j) => {
                object.Value[j] = Number(object.Value[j]);
              });
            } else {
              object.Value[0] = Number(object.Value[0]);
            }
          }
        }
      }
    });
  }
  initEmptyValue(object) {
    forEach_default(object, (m, k) => {
      console.log("m", m);
      if (m && m.vr && m.vr === "PN" && m.vr != "SQ" && (!m.Value || m.Value[0] === null)) {
        console.log("in pnvalue=", m);
        object[k]["Value"] = [{
          Alphabetic: ""
        }];
      }
      if (m && m.vr && m.vr != "SQ" && !m.Value) {
        object[k]["Value"] = [""];
      }
      if (m && (isArray_default(m) || m && isObject_default(m))) {
        console.log("beforecall", m);
        this.initEmptyValue(m);
      }
    });
    return object;
  }
  replaceKeyInJson(object, key, key2) {
    let $this = this;
    forEach_default(object, function (m, k) {
      if (m[key]) {
        object[k][key2] = [object[k][key]];
        delete object[k][key];
      }
      if (m.vr && m.vr != "SQ" && !m.Value) {
        if (m.vr === "PN") {
          object[k]["Value"] = object[k]["Value"] || [{
            Alphabetic: ""
          }];
          object[k]["Value"] = [{
            Alphabetic: ""
          }];
        } else {
          object[k]["Value"] = [""];
        }
      }
      if (Object.prototype.toString.call(m) === "[object Array]" || object[k] !== null && typeof object[k] == "object") {
        $this.replaceKeyInJson(m, key, key2);
      }
    });
    return object;
  }
  getArrayFromIod(res) {
    let dropdown = [];
    forEach_default(res, function (m, i) {
      if (i === "00400100") {
        forEach_default(m.items || m.Value[0], function (l, j) {
          dropdown.push({
            "code": "00400100:" + j,
            "codeComma": ">" + j.slice(0, 4) + "," + j.slice(4),
            "name": DCM4CHE.elementName.forTag(j)
          });
        });
      } else {
        dropdown.push({
          "code": i,
          "codeComma": i.slice(0, 4) + "," + i.slice(4),
          "name": DCM4CHE.elementName.forTag(i)
        });
      }
    });
    return dropdown;
  }
  clearFilterObject(tab, filterObject) {
    let keys = this.getFilterKeysFromTab(tab);
    keys = keys || [];
    keys.push("webApp");
    Object.keys(filterObject.filterModel).forEach(filterKey => {
      if (keys.indexOf(filterKey) === -1) {
        delete filterObject.filterModel[filterKey];
      }
    });
  }
  getFilterKeysFromTab(tab) {
    if (tab) {
      return (() => {
        switch (tab) {
          case "patient":
            return [...Globalvar.PATIENT_FILTER_SCHEMA([], false), ...Globalvar.PATIENT_FILTER_SCHEMA([], true)].filter(filter2 => {
              return filter2.filterKey != "aet";
            });
          case "series":
            return [...Globalvar.SERIES_FILTER_SCHEMA([], [], [], false), ...Globalvar.SERIES_FILTER_SCHEMA([], [], [], true)].filter(filter2 => {
              return filter2.filterKey != "aet";
            });
          case "mwl":
            return [...Globalvar.MWL_FILTER_SCHEMA([], false), ...Globalvar.MWL_FILTER_SCHEMA([], true)];
          case "mpps":
            return [...Globalvar.MPPS_FILTER_SCHEMA(false), ...Globalvar.MPPS_FILTER_SCHEMA(true)];
          case "uwl":
            return [...Globalvar.UWL_FILTER_SCHEMA(false), ...Globalvar.UWL_FILTER_SCHEMA(true)];
          case "diff":
            return [...Globalvar.DIFF_FILTER_SCHEMA([], [], [], false), ...Globalvar.DIFF_FILTER_SCHEMA([], [], [], true)].filter(filter2 => {
              return filter2.filterKey != "aet";
            });
          default:
            return [...Globalvar.STUDY_FILTER_SCHEMA([], [], [], false), ...Globalvar.STUDY_FILTER_SCHEMA([], [], [], true)].filter(filter2 => {
              return filter2.filterKey != "aet";
            });
        }
      })().map(filterSchemaElement => {
        return filterSchemaElement.filterKey;
      });
    }
    return [];
  }
  getFilterSchema(tab, aets, quantityText, filterMode, storages, institutions, studyWebService, attributeSet, showCount, showSize, filter2, hook) {
    let schema;
    let lineLength = 3;
    switch (tab) {
      case "patient":
        schema = Globalvar.PATIENT_FILTER_SCHEMA(aets, filterMode === "expand").filter(filter3 => {
          return filter3.filterKey != "aet";
        });
        lineLength = filterMode === "expand" ? 1 : 3;
        break;
      case "series":
        schema = Globalvar.SERIES_FILTER_SCHEMA(aets, storages, institutions, filterMode === "expand").filter(filter3 => {
          return filter3.filterKey != "aet";
        });
        lineLength = 3;
        break;
      case "mwl":
        schema = Globalvar.MWL_FILTER_SCHEMA(institutions, filterMode === "expand", get_default(this.appService.global, "uiConfig.dcmuiMWLWorklistLabel"));
        lineLength = filterMode === "expand" ? 1 : 3;
        break;
      case "mpps":
        schema = Globalvar.MPPS_FILTER_SCHEMA(filterMode === "expand");
        lineLength = filterMode === "expand" ? 1 : 3;
        break;
      case "uwl":
        schema = Globalvar.UWL_FILTER_SCHEMA(filterMode === "expand");
        lineLength = filterMode === "expand" ? 2 : 3;
        break;
      case "diff":
        schema = Globalvar.DIFF_FILTER_SCHEMA(aets, attributeSet, institutions, filterMode === "expand").filter(filter3 => {
          return filter3.filterKey != "aet";
        });
        break;
      default:
        schema = Globalvar.STUDY_FILTER_SCHEMA(aets, storages, institutions, filterMode === "expand").filter(filter3 => {
          return filter3.filterKey != "aet";
        });
        lineLength = 3;
    }
    if (filterMode === "main") {
      if (tab != "diff") {
        let orderby = Globalvar.ORDERBY_NEW.filter(order => order.mode === tab).map(order => {
          return new SelectDropdown(order.value, order.label, order.title, order.title, order.label);
        });
        schema.push({
          tag: "html-select",
          options: orderby,
          filterKey: "orderby",
          text: "Order By",
          title: "Order By",
          placeholder: "Order By",
          cssClass: "study_order"
        });
      }
      if (studyWebService) {
        schema.push({
          tag: "html-select",
          options: studyWebService?.webServices.map(webApp => {
            return new SelectDropdown(webApp.dcmWebAppName, webApp.dcmWebAppName, webApp.dicomDescription, void 0, void 0, webApp, studyWebService.selectedWebService && studyWebService.selectedWebService.dcmWebAppName === webApp.dcmWebAppName);
          }),
          filterKey: "webApp",
          text: "Web App Service",
          title: "Web App Service",
          showStar: tab === "diff",
          placeholder: "Web App Service",
          cssClass: "study_order",
          showSearchField: true
        });
      }
      if (j4care.arrayIsNotEmpty(studyWebService, "webServices")) schema.push({
        tag: "button",
        id: "submit",
        text: "SUBMIT",
        description: this.getSubmitText(tab)
      });
      if (tab != "diff" && tab != "uwl" && tab != "study" && tab != "mwl") {
        schema.push({
          tag: "dummy"
        });
      } else {}
      if (tab != "diff") {
        if (showCount) {
          schema.push({
            tag: "button",
            id: "count",
            text: quantityText.count,
            showRefreshIcon: true,
            showDynamicLoader: false,
            description: "Query only the count"
          });
        } else {
          schema.push({
            tag: "dummy"
          });
        }
      }
      if (tab === "study" && showSize) {
        schema.push({
          tag: "button",
          id: "size",
          showRefreshIcon: true,
          showDynamicLoader: false,
          text: quantityText.size,
          description: "Query only size of studies"
        });
      }
    }
    if (hook) {
      schema = hook.call(this, schema);
    }
    return {
      lineLength,
      schema: j4care.prepareFlatFilterObject(schema, lineLength)
    };
  }
  getNoServiceSpecificWebApps(tab) {
    let webServiceClass = "QIDO_RS";
    let entityOp = "view studies";
    switch (tab) {
      case "patient":
        entityOp = "view patients";
        break;
      case "series":
        entityOp = "view series";
        break;
      case "mwl":
        webServiceClass = "MWL_RS";
        entityOp = "view MWLs";
        break;
      case "mpps":
        webServiceClass = "MPPS_RS";
        entityOp = "view MPPS";
        break;
      case "uwl":
        webServiceClass = "UPS_RS";
        entityOp = "view UPS Workitems";
        break;
      case "diff":
        webServiceClass = "DCM4CHEE_ARC_AET_DIFF";
        entityOp = "compare studies between two archives";
        break;
    }
    return "Configure at least one web application with " + webServiceClass + "\n web service class to " + entityOp + "\n";
  }
  getSubmitText(tab) {
    switch (tab) {
      case "study":
        return "Query Studies";
      case "patient":
        return "Query Patients";
      case "series":
        return "Query Series";
      case "mwl":
        return "Query MWL";
      case "mpps":
        return "Query MPPS";
      case "uwl":
        return "Query UWL";
      case "diff":
        return "Show DIFFs";
    }
  }
  getMWL(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("mwl", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  getMPPS(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("mpps", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  getUWL(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("uwl", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  triggerDiff(filterModel, studyWebService, mode, dicomResponseType, file, fileField) {
    if (get_default(studyWebService, "selectedWebService.dcmWebServiceClass") && studyWebService.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET_DIFF") > -1) {
      if (dicomResponseType === "csv") {
        return this.$http.post(this.getDicomURL(mode, studyWebService.selectedWebService, dicomResponseType, fileField) + j4care.objToUrlParams(filterModel, true), file);
      } else {
        return this.$http.get(this.getDicomURL(mode, studyWebService.selectedWebService, dicomResponseType) + j4care.objToUrlParams(filterModel, true));
      }
    } else {
      return throwError({
        error: "Web Application Service with the web service class " + "DCM4CHEE_ARC_AET_DIFF" + " not found!"
      });
    }
  }
  getDiff(filterModel, studyWebService, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let batchID;
    let taskID;
    let url;
    if (hasIn_default(filterModel, "batchID") && get_default(filterModel, "batchID") != "" || hasIn_default(filterModel, "taskID") && get_default(filterModel, "taskID") != "") {
      batchID = get_default(filterModel, "batchID");
      taskID = get_default(filterModel, "taskID");
      delete filterModel["batchID"];
      delete filterModel["taskID"];
      if (batchID && batchID != "") {
        url = `${j4care.addLastSlash(this.appService.baseUrl)}monitor/diff/batch/${batchID}/studies${j4care.objToUrlParams(j4care.clearEmptyObject(filterModel), true)}`;
      } else {
        if (taskID) {
          url = `${j4care.addLastSlash(this.appService.baseUrl)}monitor/diff/${taskID}/studies${j4care.objToUrlParams(j4care.clearEmptyObject(filterModel), true)}`;
        }
      }
    }
    if ((batchID || taskID) && url) {
      return this.$http.get(url, header);
    } else {
      return this.getWebAppFromWebServiceClassAndSelectedWebApp(studyWebService, "DCM4CHEE_ARC_AET_DIFF", "DCM4CHEE_ARC_AET_DIFF").pipe(map(webApp => {
        return `${j4care.getUrlFromDcmWebApplication(webApp, this.appService.baseUrl)}`;
      })).pipe(switchMap(url2 => {
        return this.$http.get(`${url2}${j4care.param(filterModel) || ""}`, header);
      }));
    }
  }
  getDiffHeader(study, code) {
    let value;
    let sqValue;
    if (hasIn_default(study, [code, "Value", 0])) {
      if (study[code].vr === "PN") {
        if (hasIn_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0, "Alphabetic"])) {
          value = get_default(study, [code, "Value", 0, "Alphabetic"]);
          sqValue = get_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0, "Alphabetic"]);
          if (value === sqValue) {
            return {
              Value: [value],
              showBorder: false
            };
          } else {
            return {
              Value: [value + "/" + sqValue],
              showBorder: true
            };
          }
        } else {
          return {
            Value: [study[code].Value[0].Alphabetic],
            showBorder: false
          };
        }
      } else {
        switch (code) {
          case "00080061":
            value = new FormatAttributeValuePipe().transform(study[code]);
            if (hasIn_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0])) {
              sqValue = new FormatAttributeValuePipe().transform(get_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code]));
              if (value === sqValue) {
                return {
                  Value: [value],
                  showBorder: false
                };
              } else {
                return {
                  Value: [value + "/" + sqValue],
                  showBorder: true
                };
              }
            }
            break;
          case "00080020":
            value = new FormatDAPipe().transform(get_default(study, [code, "Value", 0]));
            if (hasIn_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0])) {
              sqValue = new FormatDAPipe().transform(get_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0]));
              if (value === sqValue) {
                return {
                  Value: [value],
                  showBorder: false
                };
              } else {
                return {
                  Value: [value + "/" + sqValue],
                  showBorder: true
                };
              }
            }
            break;
          case "00080030":
            value = new FormatTMPipe().transform(get_default(study, [code, "Value", 0]));
            if (hasIn_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0])) {
              sqValue = new FormatTMPipe().transform(get_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0]));
              if (value === sqValue) {
                return {
                  Value: [value],
                  showBorder: false
                };
              } else {
                return {
                  Value: [value + "/" + sqValue],
                  showBorder: true
                };
              }
            }
            break;
          default:
            if (hasIn_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0])) {
              value = get_default(study, [code, "Value", 0]);
              sqValue = get_default(study, ["04000561", "Value", 0, "04000550", "Value", 0, code, "Value", 0]);
              if (value === sqValue) {
                return {
                  Value: [value],
                  showBorder: false
                };
              } else {
                return {
                  Value: [value + "/" + sqValue],
                  showBorder: true
                };
              }
            }
        }
      }
      return {
        Value: [study[code].Value[0]],
        showBorder: false
      };
    } else {
      return {
        Value: [""],
        showBorder: false
      };
    }
  }
  deletePatientByPk(dcmWebApp, patientPk) {
    return this.$http.delete(`${this.getDicomURL("patient", dcmWebApp)}/id/${patientPk}`, void 0, true);
  }
  unmergePatientByPk(dcmWebApp, patientPk) {
    return this.$http.post(`${this.getDicomURL("patient", dcmWebApp)}/id/${patientPk}/unmerge`, void 0, true);
  }
  deleteMWL(dcmWebApp, studyInstanceUID, scheduledProcedureStepID, responseType) {
    return this.$http.delete(`${this.getDicomURL("mwl", dcmWebApp, responseType)}/${studyInstanceUID}/${scheduledProcedureStepID}`);
  }
  getPatients(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("patient", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  getStudies(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("study", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  getSeries(filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("series", dcmWebApp, responseType)}${params || ""}`, header, false, dcmWebApp);
  }
  getSeriesOfStudy(studyInstanceUID, filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("study", dcmWebApp, responseType)}/${studyInstanceUID}/series${params || ""}`, header, false, dcmWebApp);
  }
  testAet(url, dcmWebApp) {
    return this.$http.get(url,
    //`http://test-ng:8080/dcm4chee-arc/ui2/rs/aets`,
    this.jsonHeader, false, dcmWebApp);
  }
  getInstances(studyInstanceUID, seriesInstanceUID, filterModel, dcmWebApp, responseType) {
    let header;
    if (!responseType || responseType === "object") {
      header = this.dicomHeader;
    }
    let params = j4care.objToUrlParams(filterModel);
    params = params ? `?${params}` : params;
    return this.$http.get(`${this.getDicomURL("study", dcmWebApp, responseType)}/${studyInstanceUID}/series/${seriesInstanceUID}/instances${params || ""}`, header, false, dcmWebApp);
  }
  getStudyInstanceUID(model) {
    try {
      return get_default(model, "0020000D.Value[0]");
    } catch (e) {
      return void 0;
    }
  }
  getSeriesInstanceUID(model) {
    try {
      return get_default(model, "0020000E.Value[0]");
    } catch (e) {
      return void 0;
    }
  }
  getDicomURL(mode, dcmWebApp, responseType, csvField) {
    console.log("object", dcmWebApp);
    if (dcmWebApp) {
      try {
        let url = j4care.getUrlFromDcmWebApplication(dcmWebApp, this.appService.baseUrl);
        if (url.endsWith("/")) {
          url = url.slice(0, -1);
        }
        if (url) {
          switch (mode) {
            case "patient":
              url += "/patients";
              break;
            case "mwl":
              url += "/mwlitems";
              break;
            case "mpps":
              url += "/mpps";
              break;
            case "uwl":
              url += "/workitems";
              break;
            case "export":
              url += "/studies/export";
              break;
            case "study":
              url += "/studies";
              break;
            case "series":
              url += "/series";
              break;
            case "diff":
              break;
            default:
              url;
          }
          if (mode != "diff" && responseType) {
            if (responseType === "count") url += "/count";
            if (responseType === "size") url += "/size";
          }
          if (responseType && responseType === "csv") url += `/csv:${csvField}`;
          return url;
        } else {
          j4care.log("Url is undefined");
        }
      } catch (e) {
        j4care.log("Error on getting dicomURL in study.service.ts", e);
      }
    } else {
      j4care.log("WebApp is undefined");
    }
  }
  wadoURL(webService, ...args) {
    let arg = arguments;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "WADO_URI", "WADO_URI").pipe(map(webApp => {
      let i,
        url = `${j4care.getUrlFromDcmWebApplication(webApp, this.appService.baseUrl)}?requestType=WADO`;
      for (i = 1; i < arg.length; i++) {
        forEach_default(arg[i], (value, key) => {
          url += "&" + key.replace(/^(_){1}(\w*)/, (match, p1, p2) => {
            return p2;
          }) + "=" + value;
        });
      }
      return url;
    }));
  }
  renderURL(webService, inst) {
    if (inst.video) return this.wadoURL(webService, inst.wadoQueryParams, {
      contentType: "video/*"
    });
    if (inst.numberOfFrames) return this.wadoURL(webService, inst.wadoQueryParams, {
      contentType: "image/jpeg",
      frameNumber: inst.view
    });
    if (inst.gspsQueryParams.length) return this.wadoURL(webService, inst.gspsQueryParams[inst.view - 1]);
    return this.wadoURL(webService, inst.wadoQueryParams);
  }
  recreateDBRecord(filters, selectedWebService, studyObject) {
    return this.$http.post(`${this.studyURL(studyObject.attrs, selectedWebService)}/reimport${j4care.param(filters)}`, {}, this.jsonHeader, void 0, selectedWebService);
  }
  diffUrl(callingAet, firstExternalAet, secondExternalAet, baseUrl) {
    return `${baseUrl ? j4care.addLastSlash(baseUrl) : j4care.addLastSlash(this.appService.baseUrl)}aets/${callingAet.dicomAETitle}/dimse/${firstExternalAet.dicomAETitle}/diff/${secondExternalAet.dicomAETitle}/studies`;
  }
  /*    private rsURL(callingAet:Aet, accessLocation?:AccessLocation,  externalAet?:Aet, baseUrl?:string) {
          if(accessLocation === "external" && externalAet){
              return `${baseUrl || '..'}/aets/${callingAet.dicomAETitle}/dims/${externalAet.dicomAETitle}`;
          }
          return `${baseUrl || '..'}/aets/${callingAet.dicomAETitle}/rs`;
      }*/
  getAttributeFilter(entity, baseUrl) {
    return this.$http.get(`${baseUrl ? j4care.addLastSlash(baseUrl) : j4care.addLastSlash(this.appService.baseUrl)}attribute-filter/${entity || "Patient"}`).pipe(map(res => {
      if ((!entity || entity === "Patient") && res["dcmTag"]) {
        let privateAttr = [parseInt("77770010", 16), parseInt("77771010", 16), parseInt("77771011", 16)];
        res["dcmTag"].push(...privateAttr);
      }
      if (entity && entity === "Study" && res["dcmTag"]) {
        let privateAttr = [parseInt("77770010", 16), parseInt("77771020", 16), parseInt("77771021", 16), parseInt("77771022", 16)];
        res["dcmTag"].push(...privateAttr);
      }
      return res;
    }));
  }
  getAets() {
    if (!this.sharedObservables$["aets"]) {
      this.sharedObservables$["aets"] = this.aeListService.getAets().pipe(shareReplay(1));
    }
    return this.sharedObservables$["aets"];
  }
  getAes() {
    if (!this.sharedObservables$["aes"]) {
      this.sharedObservables$["aes"] = this.aeListService.getAes().pipe(shareReplay(1));
    }
    return this.sharedObservables$["aes"];
  }
  equalsIgnoreSpecificCharacterSet(attrs, other) {
    return Object.keys(attrs).filter(tag => tag != "00080005").every(tag => isEqual_default(attrs[tag], other[tag])) && Object.keys(other).filter(tag => tag != "00080005").every(tag => attrs[tag]);
  }
  updatePatientDemographics(dcmWebApp, patient, PDQServiceID, adjustIssuerOfPatientID) {
    let url = `${this.getDicomURL("patient", dcmWebApp)}/${this.getPatientId(patient.attrs)}/pdq/${PDQServiceID}`;
    if (adjustIssuerOfPatientID === true) url += `?adjustIssuerOfPatientID=true`;
    return this.$http.post(url, void 0, true);
  }
  queryPatientDemographics(patientID, PDQServiceID, url) {
    return this.$http.get(`${url ? j4care.addLastSlash(url) : j4care.addLastSlash(this.appService.baseUrl)}pdq/${PDQServiceID}/patients/${patientID}`);
  }
  queryNationalPatientRegister(patientID) {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}xroad/RR441/${patientID}`);
  }
  extractAttrs(attrs, tags, extracted) {
    for (let tag in attrs) {
      if (indexOf_default(tags, tag) > -1) {
        extracted[tag] = attrs[tag];
      }
    }
  }
  createGSPSQueryParams(attrs) {
    let sopClass = j4care.valueOf(attrs["00080016"]),
      refSeries = j4care.valuesOf(attrs["00081115"]),
      queryParams = [];
    if (sopClass === "1.2.840.10008.5.1.4.1.1.11.1" && refSeries) {
      refSeries.forEach(seriesRef => {
        j4care.valuesOf(seriesRef["00081140"]).forEach(objRef => {
          queryParams.push(new GSPSQueryParams(attrs["0020000D"].Value[0], seriesRef["0020000E"].Value[0], objRef["00081155"].Value[0], "image/jpeg", j4care.valueOf(objRef["00081160"]) || 1, attrs["0020000E"].Value[0], attrs["00080018"].Value[0]));
        });
      });
    }
    return queryParams;
  }
  studyURL(attrs, webApp) {
    return `${this.getDicomURL("study", webApp)}/${attrs["0020000D"].Value[0]}`;
  }
  seriesURL(attrs, webApp) {
    return this.studyURL(attrs, webApp) + "/series/" + attrs["0020000E"].Value[0];
  }
  instanceURL(attrs, webApp) {
    return this.seriesURL(attrs, webApp) + "/instances/" + attrs["00080018"].Value[0];
  }
  getObjectUniqueId(attrs, dicomLevel) {
    let idObject = {
      id: this.getPatientId(attrs),
      idParts: [this.getPatientId(attrs)]
    };
    if (dicomLevel != "patient") {
      idObject.id += `_${attrs["0020000D"].Value[0]}`;
      idObject.idParts.push(attrs["0020000D"].Value[0]);
    }
    if (dicomLevel === "series" || dicomLevel === "instance") {
      idObject.id += `_${attrs["0020000E"].Value[0]}`;
      idObject.idParts.push(attrs["0020000E"].Value[0]);
    }
    if (dicomLevel === "instance") {
      idObject.id += `_${attrs["00080018"].Value[0]}`;
      idObject.idParts.push(attrs["00080018"].Value[0]);
    }
    if (dicomLevel === "mwl" && hasIn_default(attrs, "[00400100].Value[0][00400009].Value[0]")) {
      idObject.id += `_${get_default(attrs, "[00400100].Value[0][00400009].Value[0]")}`;
      idObject.idParts.push(get_default(attrs, "[00400100].Value[0][00400009].Value[0]"));
    }
    return idObject;
  }
  addObjectOnSelectedElements(dicomLevel, selectedValue, object, selectedElements) {
    try {
      const uniqueID = this.getObjectUniqueId(object.attrs, dicomLevel);
      if (selectedValue && !selectedElements.hasIn(dicomLevel, uniqueID)) {
        selectedElements.preActionElements.toggle(dicomLevel, uniqueID, object);
      }
    } catch (e) {
      console.error(e);
    }
  }
  getURL(attrs, webApp, dicomLevel) {
    if (dicomLevel === "series") return this.seriesURL(attrs, webApp);
    if (dicomLevel === "instance") return this.instanceURL(attrs, webApp);
    return this.studyURL(attrs, webApp);
  }
  studyFileName(attrs) {
    return attrs["0020000D"].Value[0];
  }
  seriesFileName(attrs) {
    return this.studyFileName(attrs) + "_" + attrs["0020000E"].Value[0];
  }
  instanceFileName(attrs) {
    return this.seriesFileName(attrs) + "_" + attrs["00080018"].Value[0];
  }
  isVideo(attrs) {
    let sopClass = j4care.valueOf(attrs["00080016"]);
    return ["1.2.840.10008.5.1.4.1.1.77.1.1.1", "1.2.840.10008.5.1.4.1.1.77.1.2.1", "1.2.840.10008.5.1.4.1.1.77.1.4.1"].indexOf(sopClass) != -1;
  }
  isImage(attrs) {
    let sopClass = j4care.valueOf(attrs["00080016"]);
    let bitsAllocated = j4care.valueOf(attrs["00280100"]);
    return bitsAllocated && bitsAllocated != "" && sopClass != "1.2.840.10008.5.1.4.1.1.481.2";
  }
  createArray(n) {
    let a = [];
    for (let i = 1; i <= n; i++) a.push(i);
    return a;
  }
  getStorageSystems() {
    if (!this.sharedObservables$["storageSystems"]) {
      this.sharedObservables$["storageSystems"] = this.sharedObservables$["storageSystems"] || {};
      this.sharedObservables$["storageSystems"] = this.storageSystems.search({}, 0).pipe(shareReplay(1));
    }
    return this.sharedObservables$["storageSystems"];
  }
  storageVerificationForSelected(multipleObjects, studyWebService, param) {
    return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel === "study" || element.dicomLevel === "instance" || element.dicomLevel === "series").map(element => {
      return this.$http.post(`${this.getURL(element.object.attrs, studyWebService.selectedWebService, element.dicomLevel)}/stgver${j4care.param(param)}`, {});
    }));
  }
  sendStorageCommitmentRequestForMatchingStudies(studyWebService, stgCmtSCP, filters) {
    return this.$http.post(`${this.getDicomURL("study", studyWebService.selectedWebService)}/stgcmt/${stgCmtSCP}${j4care.param(filters)}`, {});
  }
  sendStorageCommitmentRequestForMatchingSeries(studyWebService, stgCmtSCP, filters) {
    return this.$http.post(`${this.getDicomURL("series", studyWebService.selectedWebService)}/stgcmt/${stgCmtSCP}${j4care.param(filters)}`, {});
  }
  sendStorageCommitmentRequestForSelected(multipleObjects, studyWebService, stgCmtSCP) {
    return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel === "study" || element.dicomLevel === "instance" || element.dicomLevel === "series").map(element => {
      return this.$http.post(`${this.getURL(element.object.attrs, studyWebService.selectedWebService, element.dicomLevel)}/stgcmt/dicom:${stgCmtSCP}`, {});
    }));
  }
  sendStorageCommitmentRequestForSingle(attrs, studyWebService, level, stgCmtSCP) {
    let url = `${this.getURL(attrs, studyWebService.selectedWebService, level)}/stgcmt/dicom:${stgCmtSCP}`;
    return this.$http.post(url, {});
  }
  sendInstanceAvailabilityNotificationForMatchingStudies(studyWebService, ianscp, filters) {
    return this.$http.post(`${this.getDicomURL("study", studyWebService.selectedWebService)}/ian/${ianscp}${j4care.param(filters)}`, {});
  }
  sendInstanceAvailabilityNotificationForMatchingSeries(studyWebService, ianscp, filters) {
    return this.$http.post(`${this.getDicomURL("series", studyWebService.selectedWebService)}/ian/${ianscp}${j4care.param(filters)}`, {});
  }
  sendInstanceAvailabilityNotificationForSelected(multipleObjects, studyWebService, ianscp) {
    return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel === "study" || element.dicomLevel === "instance" || element.dicomLevel === "series").map(element => {
      return this.$http.post(`${this.getURL(element.object.attrs, studyWebService.selectedWebService, element.dicomLevel)}/ian/dicom:${ianscp}`, {});
    }));
  }
  sendInstanceAvailabilityNotificationForSingle(attrs, studyWebService, level, ianscp) {
    let url = `${this.getURL(attrs, studyWebService.selectedWebService, level)}/ian/dicom:${ianscp}`;
    return this.$http.post(url, {});
  }
  getDevices() {
    return this.devicesService.getDevices();
  }
  checkSchemaPermission(schema) {
    Object.keys(schema).forEach(levelKey => {
      schema[levelKey].forEach(element => {
        if (element && element.type) {
          if (element.type === "actions" || element.type === "actions-menu") {
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
          }
        } else {
          return false;
        }
      });
    });
    console.log("schema", schema);
    return schema;
  }
  selectedWebServiceHasClass(selectedWebService, serviceClass) {
    if (selectedWebService && serviceClass && serviceClass != "") {
      return hasIn_default(selectedWebService, "dcmWebServiceClass") && get_default(selectedWebService, "dcmWebServiceClass").indexOf(serviceClass) > -1;
    }
    return false;
  }
  PATIENT_STUDIES_TABLE_SCHEMA($this, actions, options) {
    let schema = {
      patient: [new TableSchemaElement({
        type: "dummy",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            console.log("e", e);
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-unchecked",
              text: ""
            },
            click: e => {
              e.selected = !e.selected;
            },
            title: "Select",
            showIf: (e, config) => {
              return !config.showCheckboxes && !e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-check",
              text: ""
            },
            click: e => {
              console.log("e", e);
              e.selected = !e.selected;
            },
            title: "Unselect",
            showIf: (e, config) => {
              return !config.showCheckboxes && e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "xroad_icon",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "pdq_patient"
              }, e);
            },
            title: "Query Patient Demographics Service",
            showIf: (e, config) => {
              return j4care.is(options, "appService['xRoad']") || j4care.is(options, "appService.global['PDQs']") && options.appService.global["PDQs"].length > 0;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon person_check`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "pdq_patient_update"
              }, e);
            },
            title: "Update Patient Demographics",
            showIf: () => {
              return j4care.is(options, "appService.global['PDQs']") && options.appService.global["PDQs"].length > 0 && this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-pencil",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "edit_patient"
              }, e);
            },
            showIf: (e, config) => {
              return !hasIn_default(e, "attrs.77771015");
            },
            title: "Edit this Patient",
            permission: {
              id: "action-studies-patient",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "delete_patient"
              }, e);
            },
            title: "Delete this Patient",
            permission: {
              id: "action-studies-patient",
              param: "delete"
            },
            showIf: (e, config) => {
              return (!hasIn_default(e, "attrs.77771015") && hasIn_default(e, "attrs.00201200.Value[0]") && e.attrs["00201200"].Value[0] == "0" && !(hasIn_default(options, "selectedWebService.dicomAETitleObject.dcmAllowDeletePatient") && get_default(options, "selectedWebService.dicomAETitleObject.dcmAllowDeletePatient") === "NEVER") || hasIn_default(options, "selectedWebService.dicomAETitleObject.dcmAllowDeletePatient") && get_default(options, "selectedWebService.dicomAETitleObject.dcmAllowDeletePatient") === "ALWAYS") && this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-plus",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "create_mwl"
              }, e);
            },
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET") && !hasIn_default(e, "attrs.77771015");
            },
            title: "Add new MWL",
            permission: {
              id: "action-studies-mwl",
              param: "create"
            },
            id: "patient_create_mwl"
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "file_upload"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "upload_file"
              }, e);
            },
            showIf: (e, config) => {
              return !hasIn_default(e, "attrs.77771015");
            },
            id: "patient_upload_file",
            title: "Upload file",
            permission: {
              id: "action-studies-study",
              param: "upload"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon csv_icon_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "download_csv"
              }, e);
            },
            showIf: (e, config) => {
              return get_default(e, "attrs[00201200].Value[0]") > 0 && this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            id: "study_download_csv",
            title: "Download as CSV",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-eye-open",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "open_viewer"
              }, e);
            },
            id: "patient_open_viewer",
            title: "Open patient in the viewer",
            permission: {
              id: "action-studies-viewer",
              param: "visible"
            },
            showIf: (e, config) => {
              return hasIn_default(options, "selectedWebService.IID_PATIENT_URL") && !hasIn_default(e, "attrs.77771015");
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon unmerge_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "patient",
                action: "unmerge_patient"
              }, e);
            },
            id: "patient_unmerge_patient",
            title: "Unmerge this Patient",
            permission: {
              id: "action-studies-patient",
              param: "unmerge"
            },
            showIf: (e, config) => {
              return hasIn_default(e, "attrs.77771015") && this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            }
          }]
        },
        headerDescription: "Actions",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Toggle Attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-down",
            text: ""
          },
          click: e => {
            console.log("e", e);
            switch (options.studyConfig.tab) {
              case "mwl":
                e.showMwls = !e.showMwls;
                break;
              case "mpps":
                e.showMpps = !e.showMpps;
                break;
              case "diff":
                e.showDiffs = !e.showDiffs;
                break;
              case "uwl":
                e.showUwls = !e.showUwls;
                break;
              default:
                actions.call($this, {
                  event: "click",
                  level: "patient",
                  action: "toggle_studies"
                }, e);
            }
          },
          title: ((string, ...keys) => {
            let msg = "Studies";
            if (!options.cd_mode) {
              switch (options.studyConfig.tab) {
                case "mwl":
                  msg = "MWLs";
                  break;
                case "mpps":
                  msg = "MPPSs";
                  break;
                case "diff":
                  msg = "DIFFs";
                  break;
                case "uwl":
                  msg = "UWLs";
                  break;
              }
            }
            return string[0] + msg;
          })`Hide ${""}`,
          showIf: e => {
            if (!options.cd_mode) {
              switch (options.studyConfig.tab) {
                case "mwl":
                  return e.showMwls;
                case "mpps":
                  return e.showMpps;
                case "diff":
                  return e.showDiffs;
                case "uwl":
                  return e.showUwls;
                default:
                  return e.showStudies;
              }
            } else {
              return false;
            }
          }
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-right",
            text: ""
          },
          click: e => {
            console.log("e", e);
            switch (options.studyConfig.tab) {
              case "mwl":
                e.showMwls = !e.showMwls;
                break;
              case "mpps":
                e.showMpps = !e.showMpps;
                break;
              case "diff":
                e.showDiffs = !e.showDiffs;
                break;
              case "uwl":
                e.showUwls = !e.showUwls;
                break;
              default:
                actions.call($this, {
                  event: "click",
                  level: "patient",
                  action: "toggle_studies"
                }, e);
            }
          },
          title: ((string, ...keys) => {
            let msg = "Studies";
            if (!options.cd_mode) {
              switch (options.studyConfig.tab) {
                case "mwl":
                  msg = "MWLs";
                  break;
                case "mpps":
                  msg = "MPPSs";
                  break;
                case "diff":
                  msg = "DIFFs";
                  break;
                case "uwl":
                  msg = "UWLs";
                  break;
              }
            }
            return string[0] + msg;
          })`Show ${""}`,
          showIf: e => {
            if (!options.cd_mode) {
              switch (options.studyConfig.tab) {
                case "mwl":
                  return !e.showMwls;
                case "mpps":
                  return !e.showMpps;
                case "diff":
                  return !e.showDiffs;
                case "uwl":
                  return !e.showUwls;
                default:
                  return !e.showStudies;
              }
            } else {
              return false;
            }
          }
        }],
        headerDescription: ((string, ...keys) => {
          let msg = "Studies";
          switch (options.studyConfig.tab) {
            case "mwl":
              msg = "MWLs";
              break;
            case "mpps":
              msg = "MPPSs";
              break;
            case "diff":
              msg = "DIFFs";
              break;
            case "uwl":
              msg = "UWLs";
              break;
          }
          return string[0] + msg;
        })`Toggle ${""}`,
        pxWidth: 40
      }), new TableSchemaElement({
        type: "pipe",
        header: "Patient's Name",
        headerDescription: "Patient's Name",
        widthWeight: 1.5,
        saveTheOriginalValueOnTooltip: true,
        calculatedWidth: "20%",
        pathToValue: "00100010.Value.0",
        pipe: new DynamicPipe(PersonNamePipe, [options.configuredPersonNameFormat])
      }), new TableSchemaElement({
        type: "pipe",
        header: "Patient Identifiers",
        headerDescription: "Patient Identifiers",
        widthWeight: 2,
        cssClass: "big_field",
        // hideTooltip:true,
        calculatedWidth: "40%",
        pipe: new DynamicPipe(PatientIssuerPipe, [this.appService.global])
      }), new TableSchemaElement({
        type: "pipe",
        header: "Birth Date",
        pathToValue: "00100030.Value[0]",
        headerDescription: "Patient's Birth Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
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
        header: "Patient Comments",
        pathToValue: "00104000.Value[0]",
        headerDescription: "Patient Comments",
        widthWeight: 3,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "#S",
        pathToValue: "00201200.Value[0]",
        headerDescription: "Number of Patient Related Studies",
        widthWeight: 0.2,
        calculatedWidth: "20%"
      })],
      studies: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            console.log("e", e);
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-unchecked",
              text: ""
            },
            click: e => {
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level: "study",
                action: "select"
              }, e);
            },
            title: "Select",
            showIf: (e, config) => {
              return !config.showCheckboxes && !e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-check",
              text: ""
            },
            click: e => {
              console.log("e", e);
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level: "study",
                action: "select"
              }, e);
            },
            title: "Unselect",
            showIf: (e, config) => {
              return !config.showCheckboxes && e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-pencil",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "edit_study"
              }, e);
            },
            id: "study_edit_study",
            title: "Edit this study",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "material-icons",
              text: "visibility_off"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "mark_as_requested_unscheduled"
              }, e);
            },
            title: "Mark study as Requested or Unscheduled",
            id: "study_mark_as_requested_unscheduled",
            permission: {
              id: "action-studies-study",
              param: "edit"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "history"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "modify_expired_date"
              }, e);
            },
            id: "study_modify_expired_date",
            title: "Set/Change expired date",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: j4care.is(options, "trash.active") ? "glyphicon glyphicon-repeat" : "glyphicon glyphicon-trash",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "reject"
              }, e);
            },
            id: "study_reject",
            title: j4care.is(options, "trash.active") ? "Restore study" : "Reject study",
            permission: {
              id: "action-studies-study",
              param: j4care.is(options, "trash.active") ? "restore" : "reject"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-ok",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "verify_storage"
              }, e);
            },
            id: "study_verify_storage",
            title: "Verify storage commitment",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-save",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "download"
              }, e);
            },
            id: "study_download",
            title: "Download",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "file_upload"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "upload_file"
              }, e);
            },
            id: "study_upload_file",
            title: "Upload file",
            permission: {
              id: "action-studies-study",
              param: "upload"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon recreate_record`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "recreate_record"
              }, e);
            },
            id: "study_recreate_record",
            title: "Recreate DB Record",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "recreate"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-export",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "export"
              }, e);
            },
            id: "study_export",
            title: options.internal ? "Export study" : "Retrieve Study",
            permission: {
              id: "action-studies-study",
              param: "export"
            },
            showIf: e => {
              return options.internal || this.webAppGroupHasClass(options.studyWebService, "MOVE");
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "delete"
              }, e);
            },
            id: "study_delete",
            title: "Delete study permanently",
            showIf: e => {
              return (j4care.is(options, "trash.active") || j4care.is(options, "selectedWebService.dicomAETitleObject.dcmAllowDeleteStudyPermanently", "ALWAYS")) && this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "delete"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon csv_icon_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "download_csv"
              }, e);
            },
            id: "series_download_csv",
            title: "Download as CSV",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "vpn_key"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "update_access_control_id"
              }, e);
            },
            id: "study_update_access_control_id",
            title: "Update Study Access Control ID",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon hand_shake_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "send_storage_commit"
              }, e);
            },
            id: "study_send_storage_commit",
            title: "Send Storage Commitment Request for this study",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon ticker_export_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "send_instance_availability_notification"
              }, e);
            },
            id: "study_send_instance_availability_notification",
            title: "Send Instance Availability Notification for this study",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-eye-open",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "open_viewer"
              }, e);
            },
            id: "study_open_viewer",
            title: "Open study in the viewer",
            permission: {
              id: "action-studies-viewer",
              param: "visible"
            },
            showIf: (e, config) => {
              return hasIn_default(options, "selectedWebService.IID_STUDY_URL");
            }
          }, {
            icon: {
              svg: `<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.6503 26.3611C19.0306 32.0027 19.7237 37.6552 22.2761 41.9121C16.4125 39.4121 11 29.5 18.5 20.5C26.5 12.5 25 9 25 6C27.5 10.5 31.4056 19.5794 24.6503 26.3611Z" fill="currentColor"/>
                                                <path d="M23.4963 42C22.2997 39.4068 21.0522 33.1354 24.6754 29.5003C31.2042 22.7706 30.156 16.8728 30.0108 16.517C30.0037 16.5057 30 16.5 30 16.5C30.0025 16.5 30.0062 16.5057 30.0108 16.517C30.2787 16.9411 35.3998 25.2461 31.6314 34.5C33.8055 33.2442 34.7301 31.5286 35 31C33.8743 40.1244 28.1182 41.6255 23.4963 42Z" fill="currentColor"/>
                                                <path d="M21.5001 15.5C18.5001 17.3333 11.7183 22 11.3183 28C10.9183 34 14.3183 36.5 16.3183 38.5C15.3183 37 13.3183 33.3 13.3183 28.5C13.3183 23.7 18.8334 17.6667 21.5001 15.5Z" fill="currentColor"/>
                                           </svg>
                                          `
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "study",
                action: "create_fhir"
              }, e);
            },
            id: "create_fhir",
            title: "Create FHIR Imaging Study"
            /*                                ,
                                            permission: {
                                                id: 'action-studies-create-fhir',
                                                param: 'visible'
                                            }*/
          }]
        },
        headerDescription: "Actions",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Toggle Attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-down",
            text: ""
          },
          click: e => {
            actions.call($this, {
              event: "click",
              level: "study",
              action: "toggle_series"
            }, e);
          },
          title: "Hide Series",
          showIf: e => {
            return e.showSeries;
          },
          permission: {
            id: "action-studies-serie",
            param: "visible"
          }
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-right",
            text: ""
          },
          click: e => {
            actions.call($this, {
              event: "click",
              level: "study",
              action: "toggle_series"
            }, e);
          },
          title: "Show Series",
          showIf: e => {
            return !e.showSeries;
          },
          permission: {
            id: "action-studies-serie",
            param: "visible"
          }
        }],
        headerDescription: "Show studies",
        widthWeight: 0.3,
        calculatedWidth: "6%"
      }), new TableSchemaElement({
        type: "value",
        header: "Study ID",
        pathToValue: "[00200010].Value[0]",
        headerDescription: "Study ID",
        widthWeight: 0.9,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Instance UID",
        pathToValue: "[0020000D].Value[0]",
        headerDescription: "Study Instance UID",
        widthWeight: 2.5,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Study Date",
        pathToValue: "[00080020].Value[0]",
        headerDescription: "Study Date",
        widthWeight: 0.6,
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Study Time",
        pathToValue: "[00080030].Value[0]",
        headerDescription: "Study Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.6,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "R. Physician's Name",
        headerDescription: "Referring physician name",
        widthWeight: 1,
        calculatedWidth: "20%",
        pathToValue: "00080090.Value.0",
        pipe: new DynamicPipe(PersonNamePipe, [options.configuredPersonNameFormat])
      }), new TableSchemaElement({
        type: "value",
        header: "Accession Number",
        pathToValue: "[00080050].Value[0]",
        headerDescription: "Accession Number",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Admission ID",
        pathToValue: "[00380010].Value[0]",
        headerDescription: "Admission ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Modalities",
        pathToValue: "[00080061].Value",
        headerDescription: "Modalities in Study",
        widthWeight: 0.5,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Description",
        pathToValue: "[00081030].Value[0]",
        headerDescription: "Study Description",
        widthWeight: 2,
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
      })],
      series: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: j4care.is(options, "trash.active") ? "glyphicon glyphicon-repeat" : "glyphicon glyphicon-trash",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "reject"
              }, e);
            },
            id: "series_reject",
            title: j4care.is(options, "trash.active") ? "Restore series" : "Reject series",
            permission: {
              id: "action-studies-serie",
              param: j4care.is(options, "trash.active") ? "restore" : "reject"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "history"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "modify_expired_date_series"
              }, e);
            },
            id: "series_modify_expired_date",
            title: "Set/Change expired date",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-serie",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-pencil",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "edit_series"
              }, e);
            },
            id: "series_edit_series",
            title: "Edit this series",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-serie",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "material-icons",
              text: "visibility_off"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "mark_as_requested_unscheduled"
              }, e);
            },
            id: "series_mark_as_requested_unscheduled",
            title: "Mark series as Requested or Unscheduled",
            permission: {
              id: "action-studies-serie",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-ok",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "verify_storage"
              }, e);
            },
            id: "series_verify_storage",
            title: "Verify storage commitment",
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-save",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "download"
              }, e);
            },
            id: "series_download",
            title: "Download",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "file_upload"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "upload_file"
              }, e);
            },
            id: "series_upload_file",
            title: "Upload file",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-export",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "export"
              }, e);
            },
            id: "series_export",
            title: options.internal ? "Export series" : "Retrieve series",
            permission: {
              id: "action-studies-serie",
              param: "export"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "vpn_key"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "update_access_control_id"
              }, e);
            },
            id: "series_update_access_control_id",
            title: "Update Series Access Control ID",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-study",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon hand_shake_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "send_storage_commit"
              }, e);
            },
            id: "series_send_storage_commit",
            title: "Send Storage Commitment Request for this series",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon ticker_export_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "series",
                action: "send_instance_availability_notification"
              }, e);
            },
            id: "series_send_instance_availability_notification",
            title: "Send Instance Availability Notification for this Series",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon csv_icon_black`,
              text: ""
            },
            click: e => {
              console.log("e", e);
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "download_csv"
              }, e);
            },
            id: "instance_download_csv",
            title: "Download as CSV",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }]
        },
        headerDescription: "Actions",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-down",
            text: ""
          },
          click: e => {
            actions.call($this, {
              event: "click",
              level: "series",
              action: "toggle_instances"
            }, e);
          },
          title: "Hide Instances",
          showIf: e => {
            return e.showInstances;
          },
          permission: {
            id: "action-studies-serie",
            param: "visible"
          }
        }, {
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-chevron-right",
            text: ""
          },
          click: e => {
            actions.call($this, {
              event: "click",
              level: "series",
              action: "toggle_instances"
            }, e);
          },
          title: "Show Instances",
          showIf: e => {
            return !e.showInstances;
          },
          permission: {
            id: "action-studies-serie",
            param: "visible"
          }
        }],
        headerDescription: "Show Instances",
        widthWeight: 0.2,
        calculatedWidth: "6%"
      }), new TableSchemaElement({
        type: "value",
        header: "Station Name",
        pathToValue: "00081010.Value[0]",
        headerDescription: "Station Name",
        widthWeight: 0.9,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Series Number",
        pathToValue: "00200011.Value[0]",
        headerDescription: "Series Number",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS Start Date",
        pathToValue: "[00400244].Value[0]",
        showBorderPath: "[00400244].showBorder",
        headerDescription: "Performed Procedure Step Start Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.6,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS Start Time",
        pathToValue: "[00400245].Value[0]",
        showBorderPath: "[00400245].showBorder",
        headerDescription: "Performed Procedure Step Start Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.6,
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
        header: "Series Description",
        pathToValue: "0008103E.Value[0]",
        headerDescription: "Series Description",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "#I",
        pathToValue: "00201209.Value[0]",
        headerDescription: "Number of Series Related Instances",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      })],
      instance: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            console.log("e", e);
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: j4care.is(options, "trash.active") ? "glyphicon glyphicon-repeat" : "glyphicon glyphicon-trash",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "reject"
              }, e);
            },
            id: "instance_reject",
            title: j4care.is(options, "trash.active") ? "Restore instance" : "Reject instance",
            permission: {
              id: "action-studies-instance",
              param: j4care.is(options, "trash.active") ? "restore" : "reject"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-ok",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "verify_storage"
              }, e);
            },
            id: "instance_edit_series",
            title: "Verify storage commitment",
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-save",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "download"
              }, e);
            },
            id: "instance_verify_storage",
            title: "Download DICOM Object",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-export",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "export"
              }, e);
            },
            id: "instance_download",
            title: options.internal ? "Export instance" : "Retrieve instance",
            permission: {
              id: "action-studies-instance",
              param: "export"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-picture",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "view"
              }, e);
            },
            id: "instance_upload_file",
            title: "View DICOM Object",
            permission: {
              id: "action-studies-download",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon hand_shake_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "send_storage_commit"
              }, e);
            },
            id: "instance_export",
            title: "Send Storage Commitment Request for this instance",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon ticker_export_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "instance",
                action: "send_instance_availability_notification"
              }, e);
            },
            id: "instance_send_storage_commit",
            title: "Send Instance Availability Notification for this Instance",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-verify_storage_commitment",
              param: "visible"
            }
          }]
        },
        headerDescription: "Actions",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showFileAttributes = false;
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = false;
            e.showFileAttributes = !e.showFileAttributes;
          },
          title: "Show attributes from file"
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "value",
        header: "SOP Class Name",
        pathToValue: "00080016.Value[0]",
        headerDescription: "SOP Class Name",
        widthWeight: 0.9,
        calculatedWidth: "20%",
        cssClass: "border-left",
        hook: options.getSOPClassUIDName
      }), new TableSchemaElement({
        type: "value",
        header: "Instance Number",
        pathToValue: "00200013.Value[0]",
        headerDescription: "Instance Number",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Content Date",
        pathToValue: "00080023.Value[0]",
        headerDescription: "Content Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Content Time",
        pathToValue: "00080033.Value[0]",
        headerDescription: "Content Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Content Description",
        headerDescription: "Content Description",
        widthWeight: 1.5,
        calculatedWidth: "20%",
        pipe: new DynamicPipe(ContentDescriptionPipe, void 0)
      }), new TableSchemaElement({
        type: "value",
        header: "#F",
        pathToValue: "00280008.Value[0]",
        headerDescription: "Number of Frames",
        widthWeight: 0.3,
        calculatedWidth: "20%"
      })],
      mwl: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            console.log("e", e);
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-pencil",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "mwl",
                action: "edit_mwl"
              }, e);
            },
            title: "Edit MWL",
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            permission: {
              id: "action-studies-mwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-remove",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "mwl",
                action: "delete_mwl"
              }, e);
            },
            showIf: (e, config) => {
              return this.selectedWebServiceHasClass(options.selectedWebService, "DCM4CHEE_ARC_AET");
            },
            title: "Delete MWL",
            permission: {
              id: "action-studies-mwl",
              param: "delete"
            }
          }, {
            icon: {
              tag: "i",
              cssClass: "material-icons",
              text: "file_upload"
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "mwl",
                action: "upload_file"
              }, e);
            },
            title: "Upload file",
            permission: {
              id: "action-studies-mwl",
              param: "upload"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon calendar_step_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "mwl",
                action: "change_sps_status"
              }, e);
            },
            title: "Change SPS status",
            permission: {
              id: "action-studies-mwl",
              param: "edit"
            }
          }]
        },
        headerDescription: "Actions",
        pxWidth: 35
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "value",
        header: "Worklist Label",
        pathToValue: "00741202.Value[0]",
        headerDescription: "Worklist Label",
        widthWeight: 1.5,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Requested Procedure ID",
        pathToValue: "00401001.Value[0]",
        headerDescription: "Requested Procedure ID",
        widthWeight: 2,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Instance UID",
        pathToValue: "0020000D.Value[0]",
        headerDescription: "Study Instance UID",
        widthWeight: 3.5,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "SPS Start Date",
        pathToValue: "00400100.Value[0].00400002.Value[0]",
        headerDescription: "Scheduled Procedure Step Start Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "SPS Start",
        pathToValue: "00400100.Value[0].00400003.Value[0]",
        headerDescription: "Scheduled Procedure Step Start Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "SP Physician's Name",
        headerDescription: "Scheduled Performing Physician's Name",
        widthWeight: 2,
        calculatedWidth: "20%",
        pathToValue: "00400100.Value[0].00400006.Value[0]",
        pipe: new DynamicPipe(PersonNamePipe, [options.configuredPersonNameFormat])
      }), new TableSchemaElement({
        type: "value",
        header: "Accession Number",
        pathToValue: "00080050.Value[0]",
        headerDescription: "Accession Number",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Admission ID",
        pathToValue: "[00380010].Value[0]",
        headerDescription: "Admission ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Modality",
        pathToValue: "00400100.Value[0].00080060.Value[0]",
        headerDescription: "Modality",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "SPS Description",
        pathToValue: "00400100.Value[0].00400007.Value[0]",
        headerDescription: "Scheduled Procedure Step Description",
        widthWeight: 3,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "SS AET",
        pathToValue: "00400100.Value[0].00400001.Value",
        headerDescription: "Scheduled Station AE Title",
        widthWeight: 1.5,
        calculatedWidth: "20%"
      })],
      mpps: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "value",
        header: "PPS ID",
        pathToValue: "00400253.Value[0]",
        headerDescription: "Performed Procedure Step ID",
        widthWeight: 2,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Instance UID",
        pathToValue: "00400270.Value[0].0020000D.Value[0]",
        headerDescription: "Study Instance UID",
        widthWeight: 3,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS Start Date",
        pathToValue: "00400244.Value[0]",
        headerDescription: "Performed Procedure Step Start Date",
        widthWeight: 1,
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS Start Time",
        pathToValue: "00400245.Value[0]",
        headerDescription: "Performed Procedure Step Start Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS End Date",
        pathToValue: "00400250.Value[0]",
        headerDescription: "Performed Procedure Step End Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "PPS End Time",
        pathToValue: "00400251.Value[0]",
        headerDescription: "Performed Procedure Step End Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Accession Number",
        pathToValue: "00400270.Value[0].00080050.Value[0]",
        headerDescription: "Accession Number",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Requested Procedure ID",
        pathToValue: "00400270.Value[0].00401001.Value[0]",
        headerDescription: "Requested Procedure ID",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "SPS Description",
        pathToValue: "00400270.Value[0].00400007.Value[0]",
        headerDescription: "Scheduled Procedure Step Description",
        widthWeight: 3,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "PS AET",
        pathToValue: "00400241.Value[0]",
        headerDescription: "Performed Station AE Title",
        widthWeight: 1.5,
        calculatedWidth: "20%"
      })],
      uwl: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions-menu",
        header: "",
        menu: {
          toggle: e => {
            console.log("e", e);
            e.showMenu = !e.showMenu;
          },
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-unchecked",
              text: ""
            },
            click: e => {
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "select"
              }, e);
            },
            title: "Select",
            showIf: (e, config) => {
              return !config.showCheckboxes && !e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-check",
              text: ""
            },
            click: e => {
              console.log("e", e);
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "select"
              }, e);
            },
            title: "Unselect",
            showIf: (e, config) => {
              return !config.showCheckboxes && e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-pencil",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "edit_uwl"
              }, e);
            },
            title: "Edit UWL",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-duplicate",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "clone_uwl"
              }, e);
            },
            title: "Clone UWL",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-repeat",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "reschedule_uwl"
              }, e);
            },
            title: "Reschedule UWL",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-ban-circle",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "cancel_uwl"
              }, e);
            },
            title: "Cancel UWL",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: `custom_icon calendar_step_black`,
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "change_ups_state"
              }, e);
            },
            title: "Change UPS state",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-bell",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "subscribe_ups"
              }, e);
            },
            title: "Subscribe UPS",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-trash",
              text: ""
            },
            click: e => {
              actions.call($this, {
                event: "click",
                level: "uwl",
                action: "unsubscribe_ups"
              }, e);
            },
            title: "Unsubscribe UPS",
            permission: {
              id: "action-studies-uwl",
              param: "edit"
            }
          }
          /*                            ,
                                      {
                                          icon: {
                                              tag: 'span',
                                              cssClass: 'glyphicon glyphicon-remove',
                                              text: ''
                                          },
                                          click: (e) => {
                                              actions.call($this, {
                                                  event: "click",
                                                  level: "uwl",
                                                  action: "delete_uwl"
                                              }, e);
                                          },
                                          title: $localize `:@@study.delete_uwl:Delete UWL`,
                                          permission: {
                                              id: 'action-studies-uwl',
                                              param: 'delete'
                                          }
                                      },{
                                          icon: {
                                              tag: 'i',
                                              cssClass: 'material-icons',
                                              text: 'file_upload'
                                          },
                                          click: (e) => {
                                              actions.call($this, {
                                                  event: "click",
                                                  level: "uwl",
                                                  action: "upload_file"
                                              }, e);
                                          },
                                          title: $localize `:@@upload_file:Upload file`,
                                          permission: {
                                              id: 'action-studies-mwl',
                                              param: 'upload'
                                          }
                                      }*/]
        },
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "value",
        header: "Worklist Label",
        pathToValue: "00741202.Value[0]",
        headerDescription: "Worklist Label",
        widthWeight: 2,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Admission ID",
        pathToValue: "[00380010].Value[0]",
        headerDescription: "Admission ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Input Readiness",
        pathToValue: "00404041.Value[0]",
        headerDescription: "Input Readiness State",
        widthWeight: 1.4,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Procedure Step",
        pathToValue: "00741000.Value[0]",
        headerDescription: "Procedure Step State",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Step Priority",
        pathToValue: "00741200.Value[0]",
        headerDescription: "Scheduled Procedure Step Priority",
        widthWeight: 0.9,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Start Date and Time",
        pathToValue: "00404005.Value[0]",
        headerDescription: "Scheduled Procedure Step Start Date and Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Procedure Step Label",
        pathToValue: "00741204.Value[0]",
        headerDescription: "Procedure Step Label",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "E. Completion Time",
        pathToValue: "00404011.Value[0]",
        headerDescription: "Expected Completion Date and Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 2,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Step M. Date and Time",
        pathToValue: "00404010.Value[0]",
        headerDescription: "Scheduled Procedure Step Modification Date and Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 4,
        calculatedWidth: "20%",
        cssClass: "border-left"
      })],
      diff: [new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "actions",
        header: "",
        actions: [{
          icon: {
            tag: "span",
            cssClass: "glyphicon glyphicon-th-list",
            text: ""
          },
          click: e => {
            console.log("e", e);
            e.showAttributes = !e.showAttributes;
          },
          title: "Show attributes",
          permission: {
            id: "action-studies-show-attributes",
            param: "visible"
          }
        }],
        headerDescription: "Actions",
        pxWidth: 40
      }), new TableSchemaElement({
        type: "value",
        header: "Study ID",
        pathToValue: "[00200010].Value[0]",
        showBorderPath: "[00200010].showBorder",
        headerDescription: "Study ID",
        widthWeight: 0.9,
        calculatedWidth: "20%",
        cssClass: "border-left"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Instance UID",
        pathToValue: "[0020000D].Value[0]",
        showBorderPath: "[0020000D].showBorder",
        headerDescription: "Study Instance UID",
        widthWeight: 3,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Study Date",
        pathToValue: "[00080020].Value[0]",
        showBorderPath: "[00080020].showBorder",
        headerDescription: "Study Date",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.6,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "pipe",
        header: "Study Time",
        pathToValue: "[00080030].Value[0]",
        showBorderPath: "[00080030].showBorder",
        headerDescription: "Study Time",
        pipe: new DynamicPipe(CustomDatePipe, [options.configuredDateTimeFormats]),
        widthWeight: 0.6,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "SP Physician's Name",
        pathToValue: "00400100.Value[0].00400006.Value[0]",
        showBorderPath: "00400100.Value[0].00400006.showBorder",
        headerDescription: "Scheduled Performing Physician's Name",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Accession Number",
        pathToValue: "[00080050].Value[0]",
        showBorderPath: "[00080050].showBorder",
        headerDescription: "Accession Number",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Admission ID",
        pathToValue: "[00380010].Value[0]",
        headerDescription: "Admission ID",
        widthWeight: 1,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Modalities",
        pathToValue: "[00080061].Value[0]",
        showBorderPath: "[00080061].showBorder",
        headerDescription: "Modalities in Study",
        widthWeight: 0.5,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "Study Description",
        pathToValue: "[00081030].Value[0]",
        showBorderPath: "[00081030].showBorder",
        headerDescription: "Study Description",
        widthWeight: 2,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "#S",
        pathToValue: "[00201206].Value[0]",
        showBorderPath: "[00201206].showBorder",
        headerDescription: "Number of Study Related Series",
        widthWeight: 0.4,
        calculatedWidth: "20%"
      }), new TableSchemaElement({
        type: "value",
        header: "#I",
        pathToValue: "[00201208].Value[0]",
        showBorderPath: "[00201208].showBorder",
        headerDescription: "Number of Study Related Instances",
        widthWeight: 0.4,
        calculatedWidth: "20%"
      })]
    };
    if (hasIn_default(options, "tableParam.config.showCheckboxes") && options.tableParam.config.showCheckboxes) {
      Object.keys(schema).forEach(mode => {
        schema[mode].splice(1, 0, new TableSchemaElement({
          type: "actions",
          header: "",
          actions: [{
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-unchecked",
              text: ""
            },
            click: (e, level) => {
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level,
                action: "select"
              }, e);
            },
            title: "Select",
            showIf: (e, config) => {
              return !e.selected;
            }
          }, {
            icon: {
              tag: "span",
              cssClass: "glyphicon glyphicon-check",
              text: ""
            },
            click: (e, level) => {
              console.log("e", e);
              e.selected = !e.selected;
              actions.call($this, {
                event: "click",
                level,
                action: "select"
              }, e);
            },
            title: "Unselect",
            showIf: (e, config) => {
              return e.selected;
            }
          }],
          headerDescription: "Select",
          pxWidth: 40
        }));
      });
    }
    if (hasIn_default(options, "studyConfig.tab") && options.studyConfig.tab === "patient") {
      schema.patient.splice(0, 1, new TableSchemaElement({
        type: "index",
        header: "",
        pathToValue: "",
        pxWidth: 40
      }));
    }
    if (j4care.is(options, "studyTagConfig")) {
      Object.keys(schema).forEach(modeKey => {
        console.log("schema\u2122modeKey", schema[modeKey]);
        schema[modeKey].forEach((element, i) => {
          console.log("element", element);
          if (element.type === "actions-menu" && hasIn_default(element, "menu.actions[0]")) {
            element.menu.actions = element.menu.actions.filter(a => hasIn_default(options, "studyTagConfig.takeActionsOver") && options.studyTagConfig.takeActionsOver.indexOf(a.id) > -1);
            if (element.menu.actions.length === 0 && options.studyTagConfig.hideEmptyActionMenu) {
              schema[modeKey].splice(i, 1);
            }
          }
        });
      });
      if (hasIn_default(options, "studyTagConfig.addActions.addPath") && hasIn_default(options, "studyTagConfig.addActions.addFunction")) {
        options.studyTagConfig.addActions.addFunction(actions, $this, get_default(schema, options.studyTagConfig.addActions.addPath), schema);
      }
      if (hasIn_default(options, "studyTagConfig.hookSchema")) {
        options.studyTagConfig.hookSchema(schema, $this);
      }
    }
    return schema;
  }
  updateAccessControlIdOfSelections(multipleObjects, studyWebService, accessControlID) {
    return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel === "study" || element.dicomLevel === "series").map(element => {
      return this.$http.put(`${this.getURL(element.object.attrs, studyWebService.selectedWebService, element.dicomLevel)}/access/${accessControlID}`, {});
    }));
  }
  updateAccessControlIdSingle(attrs, studyWebService, level, accessControlID) {
    return this.$http.put(`${this.getURL(attrs, studyWebService.selectedWebService, level)}/access/${accessControlID}`, {}, this.jsonHeader);
  }
  updateAccessControlIdMatching(studyWebService, level, accessControlID, filters) {
    let url = level === "matching_studies" ? `${this.getDicomURL("study", studyWebService.selectedWebService)}/access/${accessControlID}${j4care.param(filters)}` : `${this.getDicomURL("series", studyWebService.selectedWebService)}/access/${accessControlID}${j4care.param(filters)}`;
    return this.$http.post(url, {}, this.jsonHeader);
  }
  modifySeries(series, deviceWebservice, header, params, studyInstanceUID, seriesInstanceUID) {
    const url = `${this.getModifyStudyUrl(deviceWebservice)}/${studyInstanceUID}/series/${seriesInstanceUID}${params}`;
    if (url) {
      return this.$http.put(url, series, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  getSeriesUrl(selectedWebService, series, studyInstanceUID, seriesInstanceUID) {
    studyInstanceUID = studyInstanceUID || this.getStudyInstanceUID(series.attrs);
    seriesInstanceUID = seriesInstanceUID || this.getSeriesInstanceUID(series.attrs);
    return `${this.getDicomURL("study", selectedWebService)}/${studyInstanceUID}/series/${seriesInstanceUID}`;
  }
  updateMatchingStudies(study, deviceWebservice, header, params) {
    const url = `${this.getModifyStudyUrl(deviceWebservice)}/update?${params}`;
    if (url) {
      return this.$http.post(url, study, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  updateMatchingSeries(series, webApp, header, params) {
    const url = `${this.getDicomURL("series", webApp)}/update?${params}`;
    if (url) {
      return this.$http.post(url, series, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  modifyStudy(study, deviceWebservice, header, params, studyInstanceUID) {
    const url = `${this.getModifyStudyUrl(deviceWebservice)}/${studyInstanceUID}${params}`;
    if (url) {
      return this.$http.put(url, study, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  getModifyStudyUrl(deviceWebservice) {
    return this.getDicomURL("study", this.getModifyStudyWebApp(deviceWebservice));
  }
  getModifyStudyWebApp(deviceWebservice) {
    if (deviceWebservice.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") > -1) {
      return deviceWebservice.selectedWebService;
    } else {
      return void 0;
    }
  }
  modifyMWL(mwl, deviceWebservice, header) {
    const url = this.getModifyMWLUrl(deviceWebservice);
    if (url) {
      return this.$http.post(url, mwl, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  changeSPSStatusSingleMWL(dcmWebApp, spsState, mwlModel) {
    const studyInstanceUID = get_default(mwlModel, "attrs[0020000D].Value[0]");
    const spsID = get_default(mwlModel, "attrs[00400100].Value[0][00400009].Value[0]");
    if (studyInstanceUID && spsID) {
      return this.$http.post(`${this.getDicomURL("mwl", dcmWebApp)}/${studyInstanceUID}/${spsID}/status/${spsState}`, {});
    } else {
      return throwError({
        message: "Scheduled Procedure Step ID or Study Instance UID were missing!"
      });
    }
  }
  changeSPSStatusSelectedMWL(multipleObjects, dcmWebApp, spsState) {
    let observables = [];
    multipleObjects.preActionElements.getAllAsArray().filter(element => element.dicomLevel === "mwl").map(element => {
      const studyInstanceUID = get_default(element.object, "attrs[0020000D].Value[0]");
      const spsID = get_default(element.object, "attrs[00400100].Value[0][00400009].Value[0]");
      observables.push(this.$http.post(`${this.getDicomURL("mwl", dcmWebApp)}/${studyInstanceUID}/${spsID}/status/${spsState}`, {}).pipe(catchError(err => of({
        isError: true,
        error: err
      }))));
    });
    return forkJoin(observables);
  }
  changeSPSStatusMatchingMWL(dcmWebApp, status, filters) {
    return this.$http.post(`${this.getDicomURL("mwl", dcmWebApp)}/status/${status}${j4care.param(filters)}`, {});
  }
  importMatchingSPS(dcmWebApp, destination, filters) {
    return this.$http.post(`${this.getDicomURL("mwl", dcmWebApp)}/import/${destination}${j4care.param(filters)}`, {});
  }
  modifyUWL(uwl, deviceWebservice, header) {
    const url = this.getModifyMWLUrl(deviceWebservice);
    if (url) {
      return this.$http.post(url, uwl, header);
    }
    return throwError({
      error: "Error on getting the WebApp URL"
    });
  }
  getModifyMWLUrl(deviceWebservice) {
    return this.getDicomURL("mwl", this.getModifyMWLWebApp(deviceWebservice));
  }
  getModifyUWLUrl(deviceWebservice) {
    return this.getDicomURL("uwl", this.getModifyMWLWebApp(deviceWebservice));
  }
  getModifyMWLWebApp(deviceWebservice) {
    if (deviceWebservice.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") > -1) {
      return deviceWebservice.selectedWebService;
    } else {
      return void 0;
    }
  }
  getModifyUWLWebApp(deviceWebservice) {
    if (deviceWebservice.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") > -1) {
      return deviceWebservice.selectedWebService;
    } else {
      return void 0;
    }
  }
  copyMove(selectedElements, dcmWebApp, rejectionCode) {
    try {
      const target = selectedElements.postActionElements.getAllAsArray()[0];
      let studyInstanceUID;
      let patientParams = {};
      let observables = [];
      if (!hasIn_default(target, "requestReady.StudyInstanceUID")) {
        studyInstanceUID = j4care.generateOIDFromUUID();
        if (target.dicomLevel === "patient") {
          patientParams["PatientID"] = get_default(target.object, "attrs.00100020.Value[0]");
          patientParams["IssuerOfPatientID"] = get_default(target.object, "attrs.00100021.Value[0]");
        }
      } else {
        studyInstanceUID = get_default(target, "requestReady.StudyInstanceUID");
      }
      let url = `${this.getDicomURL("study", dcmWebApp)}/${studyInstanceUID}/${selectedElements.action}`;
      if (selectedElements.action === "move") {
        url += `/` + rejectionCode;
      }
      url += j4care.param(patientParams);
      const objects = this.collectSelectedObjects(selectedElements.preActionElements.getAllAsArray().map(object => object.requestReady));
      objects.forEach(object => {
        console.log("oncopyobject = ", object);
        observables.push(this.$http.post(url, object).pipe(catchError(err => of({
          isError: true,
          error: err
        }))));
      });
      return forkJoin(observables);
    } catch (e) {
      return throwError(e);
    }
  }
  collectSelectedObjects(objects) {
    let groupObject = {};
    objects.forEach(object => {
      if (object.StudyInstanceUID && groupObject[object.StudyInstanceUID]) {
        if (object.ReferencedSeriesSequence && groupObject[object.StudyInstanceUID].ReferencedSeriesSequence) {
          let foundTheSameRefSeriesSec = false;
          groupObject[object.StudyInstanceUID].ReferencedSeriesSequence.forEach(availableReferencedSeriesSequenceObject => {
            object.ReferencedSeriesSequence.forEach(newReferencedSeriesSequenceObject => {
              if (availableReferencedSeriesSequenceObject.SeriesInstanceUID === newReferencedSeriesSequenceObject.SeriesInstanceUID) {
                foundTheSameRefSeriesSec = true;
                if (availableReferencedSeriesSequenceObject.ReferencedSOPSequence && newReferencedSeriesSequenceObject.ReferencedSOPSequence) {
                  let newReferencedSOPSequence = [];
                  availableReferencedSeriesSequenceObject.ReferencedSOPSequence.forEach(availableReferencedSOPSeq => {
                    newReferencedSeriesSequenceObject.ReferencedSOPSequence.forEach(newReferencedSOPSeq => {
                      if (availableReferencedSOPSeq.ReferencedSOPClassUID != newReferencedSOPSeq.ReferencedSOPClassUID || availableReferencedSOPSeq.ReferencedSOPInstanceUID != newReferencedSOPSeq.ReferencedSOPInstanceUID) {
                        newReferencedSOPSequence.push(newReferencedSOPSeq);
                      }
                    });
                  });
                  if (newReferencedSOPSequence.length > 0) {
                    availableReferencedSeriesSequenceObject.ReferencedSOPSequence = uniq_default([...availableReferencedSeriesSequenceObject.ReferencedSOPSequence, ...newReferencedSOPSequence]);
                  }
                }
              }
            });
          });
          if (!foundTheSameRefSeriesSec) {
            groupObject[object.StudyInstanceUID].ReferencedSeriesSequence = uniq_default([...groupObject[object.StudyInstanceUID].ReferencedSeriesSequence, ...object.ReferencedSeriesSequence]);
          }
        }
      } else {
        groupObject[object.StudyInstanceUID] = object;
      }
    });
    return Object.values(groupObject);
  }
  linkStudyToMwl(selectedElements, dcmWebApp, rejectionCode) {
    try {
      let observables = [];
      const target = selectedElements.postActionElements.getAllAsArray()[0];
      selectedElements.preActionElements.getAllAsArray().forEach(object => {
        const url = `${this.getDicomURL("mwl", dcmWebApp)}/${target.object.attrs["0020000D"].Value[0]}/${get_default(target.object.attrs, "[00400100].Value[0][00400009].Value[0]")}/move/${rejectionCode}`;
        observables.push(this.$http.post(url, object.requestReady, this.jsonHeader).pipe(catchError(err => of({
          isError: true,
          error: err
        }))));
      });
      return forkJoin(observables);
    } catch (e) {
      return throwError(e);
    }
  }
  rescheduleUPS(workitemUID, deviceWebservice, model) {
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        if (workitemUID) {
          return this.$http.post(`${url}/${workitemUID}/reschedule${j4care.objToUrlParams(model, true)}`, {});
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  changeUPSState(workitemUID, deviceWebservice, requester, changeUPSStateAttrs) {
    let xmlHttpRequest = new XMLHttpRequest();
    let url;
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(returnedUrl => {
      url = returnedUrl;
      return this.getTokenService(deviceWebservice);
    }), map(token => {
      console.log("token1", token);
      if (hasIn_default(token, "token")) {
        return get_default(token, "token");
      }
      return;
    }), switchMap(token => {
      console.log("token", token);
      if (url) {
        xmlHttpRequest.open("PUT", `${url}/${workitemUID}/state/${requester}`, false);
        if (token) {
          xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
        }
        xmlHttpRequest.setRequestHeader("Content-Type", "application/dicom+json");
        xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
        xmlHttpRequest.send(changeUPSStateAttrs);
        let status = xmlHttpRequest.status;
        if (status === 200) {
          this.appService.showMsg("UPS Workitem state was changed successfully!");
        } else {
          this.appService.showError("UPS workitem change state failed with status " + status + `
- ` + xmlHttpRequest.getResponseHeader("Warning"));
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  unsubscribeOrSuspendUPS(suspend, workitemUID, deviceWebservice, subscriber) {
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        if (subscriber) {
          return suspend === true ? this.$http.post(`${url}/${workitemUID}/subscribers/${subscriber}/suspend`, {}) : this.$http.delete(`${url}/${workitemUID}/subscribers/${subscriber}`, {});
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  cancelUPS(workitemUID, deviceWebservice, requester) {
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        if (requester) {
          return this.$http.post(`${url}/${workitemUID}/cancelrequest/${requester}`, {});
        } else this.appService.showWarning("Requester AET should be set");
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  subscribeUPS(workitemUID, params, deviceWebservice, subscriber) {
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        if (subscriber) {
          return this.$http.post(`${url}/${workitemUID}/subscribers/${subscriber}?${params}`, {});
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  modifyUPS(workitemUID, object, deviceWebservice, msg, mode, template) {
    let xmlHttpRequest = new XMLHttpRequest();
    let url;
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(returnedUrl => {
      url = returnedUrl;
      return this.getTokenService(deviceWebservice);
    }), map(token => {
      console.log("token1", token);
      if (hasIn_default(token, "token")) {
        return get_default(token, "token");
      }
      return;
    }), switchMap(token => {
      console.log("token", token);
      if (url) {
        if (workitemUID) {
          xmlHttpRequest.open("POST", `${url}/${workitemUID}`, false);
          if (token) {
            xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
          }
          xmlHttpRequest.setRequestHeader("Content-Type", "application/dicom+json");
          xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
          xmlHttpRequest.send(JSON.stringify(j4care.removeKeyFromObject(object, ["required", "enum", "multi"])));
          let status = xmlHttpRequest.status;
          if (status === 200) {
            this.appService.showMsg(msg);
          } else {
            this.appService.showError("UPS workitem update failed with status " + status + `
- ` + xmlHttpRequest.getResponseHeader("Warning"));
          }
        } else {
          xmlHttpRequest.open("POST", url + j4care.objToUrlParams({
            template
          }, true), false);
          if (token) {
            xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
          }
          xmlHttpRequest.setRequestHeader("Content-Type", "application/dicom+json");
          xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
          xmlHttpRequest.send(JSON.stringify(j4care.removeKeyFromObject(object, ["required", "enum", "multi"])));
          let status = xmlHttpRequest.status;
          if (status === 201) {
            this.appService.showMsg(msg + xmlHttpRequest.getResponseHeader("Location"));
          } else {
            let errMsg = template ? mode === "create" ? "UPS template creation failed with status " : "UPS template cloning failed with status " : mode === "create" ? "UPS workitem creation failed with status " : "UPS workitem cloning failed with status ";
            this.appService.showError(errMsg + status + `<br>
- ` + xmlHttpRequest.getResponseHeader("Warning"));
          }
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  getModifyUPSUrl(deviceWebService) {
    return this.getDicomURLFromWebService(deviceWebService, "uwl");
  }
  modifyPatientByPk(patientPk, patientObject, deviceWebservice, queued, batchID, additionalParams) {
    return this.getModifyPatientUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        return this.$http.put(`${url}/id/${patientPk}${j4care.objToUrlParams(__spreadValues({
          queued,
          batchID
        }, additionalParams), true)}`, patientObject, void 0, true);
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"PAM\")"
      });
    }));
  }
  modifyPatient(patientId, patientObject, deviceWebservice, queued, batchID, additionalParams) {
    return this.getModifyPatientUrl(deviceWebservice).pipe(switchMap(url => {
      if (url) {
        if (patientId) {
          return this.$http.put(`${url}/${patientId}${j4care.objToUrlParams(__spreadValues({
            queued,
            batchID
          }, additionalParams), true)}`, patientObject, void 0, true);
        } else {
          return this.$http.post(`${url}${j4care.objToUrlParams(__spreadValues({}, additionalParams), true)}`, patientObject);
        }
      }
      return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"PAM\")"
      });
    }));
  }
  getModifyPatientUrl(deviceWebService) {
    return this.getDicomURLFromWebService(deviceWebService, "patient");
  }
  getModifyPatientWebApp(deviceWebService) {
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(deviceWebService, "DCM4CHEE_ARC_AET", "PAM");
  }
  getDicomURLFromWebService(deviceWebService, mode) {
    return this.getModifyPatientWebApp(deviceWebService).pipe(map(webApp => {
      return this.getDicomURL(mode, webApp);
    }));
  }
  webAppGroupHasClass(studyWebService, webServiceClass) {
    try {
      return hasIn_default(studyWebService, "selectedWebService.dcmWebServiceClass") && studyWebService.selectedWebService.dcmWebServiceClass.indexOf(webServiceClass) > -1 || studyWebService.webServices.filter(webService => webService.dicomDeviceName === studyWebService.selectedWebService.dicomDeviceName && webService.dcmWebServiceClass.indexOf(webServiceClass) > -1).length > 0 || studyWebService.allWebServices.filter(webService => webService.dicomDeviceName === studyWebService.selectedWebService.dicomDeviceName && webService.dcmWebServiceClass.indexOf(webServiceClass) > -1).length > 0;
    } catch (e) {
      return false;
    }
  }
  getWebAppFromWebServiceClassAndSelectedWebApp(deviceWebService, neededWebServiceClass, alternativeWebServiceClass) {
    if (hasIn_default(deviceWebService, "selectedWebService.dcmWebServiceClass") && deviceWebService.selectedWebService.dcmWebServiceClass.indexOf(neededWebServiceClass) > -1) {
      return of(deviceWebService.selectedWebService);
    } else {
      try {
        return this.webAppListService.getWebApps({
          dcmWebServiceClass: alternativeWebServiceClass,
          dicomAETitle: deviceWebService.selectedWebService.dicomAETitle
        }).pipe(map(webApps => webApps[0]));
      } catch (e) {
        j4care.log(`Error on getting the ${alternativeWebServiceClass} WebApp getModifyPatientUrl`, e);
        return throwError("Error on getting the " + alternativeWebServiceClass + "\n WebApp getModifyPatientUrl");
      }
    }
  }
  getUploadFileWebApp(deviceWebService) {
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(deviceWebService, "STOW_RS", "STOW_RS");
  }
  appendPatientIdTo(patient, obj) {
    if (hasIn_default(patient, "00100020")) {
      obj["00100020"] = obj["00100020"] || {};
      obj["00100020"] = patient["00100020"];
    }
    if (hasIn_default(patient, "00100021")) {
      obj["00100021"] = obj["00100021"] || {};
      obj["00100021"] = patient["00100021"];
    }
    if (hasIn_default(patient, "00100024")) {
      obj["00100024"] = obj["00100024"] || {};
      obj["00100024"] = patient["00100024"];
    }
  }
  getIod(fileIodName) {
    fileIodName = fileIodName || "study";
    if (this.iod[fileIodName]) {
      return of(this.iod[fileIodName]);
    } else {
      return this.$http.get(`assets/iod/${fileIodName}.iod.json`).pipe(map(iod => {
        this.iod[fileIodName] = iod;
        return iod;
      }));
    }
  }
  getIodObjectsFromNames(iodFileNames) {
    const iodServices = [];
    iodFileNames.forEach(iodFileName => {
      iodServices.push(this.getIod(iodFileName));
    });
    return forkJoin(iodServices);
  }
  iodToSelectedDropdown(iodObject) {
    return this.getAllAttributeKeyPathsFromIODObject(iodObject).map(iodKey => {
      let label = this.getLabelFromIODTag(iodKey);
      return new SelectDropdown(iodKey, label, `${label} ( ${iodKey} )`, void 0, void 0, {
        key: iodKey,
        label
      });
    });
  }
  getLabelFromIODTag(dicomTagPath) {
    return dicomTagPath.replace(/(\w){8}/g, g => {
      return DCM4CHE.elementName.forTag(g);
    });
  }
  getAllAttributeKeyPathsFromIODObject(iodObject) {
    return uniqWith_default(Object.keys(j4care.flatten(iodObject)).map(key => {
      return key.replace(/\.items|\.enum|\.multi|\.required|\.vr|\[\w\]/g, "");
    }), isEqual_default);
  }
  /*
  *
      Upload Context              None	    Patient	    Study	    Series	    MWL
      Patient IE   	            editable	read-only	read-only	read-only	read-only
      Study IE	                editable	editable	read-only	read-only	read-only
      Series IE	                editable	editable	editable	read-only	editable
      Equipment IE	            editable	editable	editable	read-only	editable
      Image IE	                editable	editable	editable	editable	editable
      Encapsulated Document IE	editable	editable	editable	editable	editable
  * */
  getIodFromContext(fileTypeOrExt, context) {
    let level;
    let iodFileNames = [];
    if (context === "patient") {
      level = 0;
    }
    if (context === "study" || context === "mwl") {
      level = 1;
    }
    if (context === "series") {
      level = 2;
    }
    if (fileTypeOrExt === "mtl" || fileTypeOrExt === "obj" || fileTypeOrExt === "stl" || fileTypeOrExt === "genozip" || fileTypeOrExt === "vcf.bz2" || fileTypeOrExt === "vcfbzip2" || fileTypeOrExt === "vcfbz2" || fileTypeOrExt === "boz" || fileTypeOrExt === "bz2") {
      iodFileNames = ["study", "series", "equipment", "scEquipment", "sop", "encapsulatedDocument"];
    } else {
      if (fileTypeOrExt.indexOf("video") > -1) {
        iodFileNames = ["study", "series", "equipment", "image", "sop", "vlImageAcquisitionContext", "multiFrame"];
      }
      if (fileTypeOrExt.indexOf("image") > -1 || fileTypeOrExt === "jph" || fileTypeOrExt === "jhc" || fileTypeOrExt === "j2c") {
        iodFileNames = ["study", "series", "equipment", "photographicEquipment", "image", "sop", "vlImageAcquisitionContext"];
      }
      if (fileTypeOrExt.indexOf("pdf") > -1 || fileTypeOrExt.indexOf("xml") > -1 || fileTypeOrExt.indexOf("model/mtl") > -1 || fileTypeOrExt.indexOf("model/obj") > -1 || fileTypeOrExt.indexOf("application/x-tgif") > -1 || fileTypeOrExt.indexOf("application/vnd.genozip") > -1 || fileTypeOrExt.indexOf("application/prs.vcfbzip2") > -1 || fileTypeOrExt.indexOf("application/x-bzip2") > -1 || fileTypeOrExt.indexOf("application/sla") > -1 || fileTypeOrExt.indexOf("model/x.stl-binary") > -1 || fileTypeOrExt.indexOf("model/stl") > -1) {
        iodFileNames = ["study", "series", "equipment", "scEquipment", "sop", "encapsulatedDocument"];
      }
    }
    return forkJoin(iodFileNames.filter((m, i) => i >= level).map(m => this.getIod(m))).pipe(map(res => {
      let merged = {};
      res.forEach(o => {
        merged = Object.assign(merged, o);
      });
      return merged;
    }));
  }
  getUPSIod(mode) {
    if (mode && (mode === "create" || mode === "clone" || mode === "subscribe")) {
      let iodFileNames = ["patient", "upsCreate"];
      return forkJoin(iodFileNames.map(m => this.getIod(m))).pipe(map(res => {
        let merged = {};
        res.forEach(o => {
          merged = Object.assign(merged, o);
        });
        return merged;
      }));
    }
    return this.getIod("upsUpdate");
  }
  getPatientIod() {
    return this.getIod("patient");
  }
  getStudyIod() {
    return this.getIod("study");
  }
  getSeriesIod() {
    return this.getIod("series");
  }
  getMwlIod() {
    return this.getIod("mwl");
  }
  getPrepareParameterForExpirationDialogSeries(series, exporters) {
    let expiredDate;
    let title = "Set expired date for the series.";
    let schema = [[[{
      tag: "label",
      text: "Expired Date"
    }, {
      tag: "p-calendar",
      filterKey: "expiredDate",
      description: "Expired Date"
    }]]];
    let schemaModel = {};
    if (hasIn_default(series.attrs, "77771033.Value.0") && series.attrs["77771033"].Value[0] != "") {
      let expiredDateString = series.attrs["77771033"].Value[0];
      expiredDate = /* @__PURE__ */new Date(expiredDateString.substring(0, 4) + "." + expiredDateString.substring(4, 6) + "." + expiredDateString.substring(6, 8));
    } else {
      expiredDate = /* @__PURE__ */new Date();
    }
    schemaModel = {
      expiredDate: j4care.formatDate(expiredDate, "yyyyMMdd")
    };
    title += "<p>Set exporter if you want to export series on expiration date too.";
    schema = [[[{
      tag: "label",
      text: "Expired Date"
    }, {
      tag: "p-calendar",
      filterKey: "expiredDate",
      description: "Expired Date"
    }], [{
      tag: "label",
      text: "Exporter"
    }, {
      tag: "select",
      filterKey: "exporter",
      description: "Exporter",
      options: exporters.map(exporter => new SelectDropdown(exporter.id, exporter.description || exporter.id))
    }]]];
    return {
      content: title,
      form_schema: schema,
      result: {
        schema_model: schemaModel
      },
      saveButton: "SAVE"
    };
  }
  requestCancellationForUPS(workitemUID, deviceWebservice, requester, requestUPSCancelActionInfoAttrs) {
    let xmlHttpRequest = new XMLHttpRequest();
    let url;
    return this.getModifyUPSUrl(deviceWebservice).pipe(switchMap(returnedUrl => {
      url = returnedUrl;
      return this.getTokenService(deviceWebservice);
    }), map(token => {
      console.log("token1", token);
      if (hasIn_default(token, "token")) {
        return get_default(token, "token");
      }
      return;
    }), switchMap(token => {
      console.log("token", token);
      if (url) {
        xmlHttpRequest.open("POST", `${url}/${workitemUID}/cancelrequest/${requester}`, false);
        if (token) {
          xmlHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
        }
        xmlHttpRequest.setRequestHeader("Content-Type", "application/dicom+json");
        xmlHttpRequest.setRequestHeader("Accept", "application/dicom+json");
        xmlHttpRequest.send(requestUPSCancelActionInfoAttrs);
        let status = xmlHttpRequest.status;
        let warning = xmlHttpRequest.getResponseHeader("Warning");
        if (status === 202) {
          if (warning) {
            this.appService.showWarning(warning);
          } else this.appService.showMsg("Cancellation of the UPS Workitem was requested successfully!");
        } else {
          this.appService.showError("Request cancellation of UPS workitem failed with status " + status + `
- ` + warning);
        }
      } else return throwError({
        error: "Error on getting the needed WebApp (with one of the web service classes \"DCM4CHEE_ARC_AET\" or \"UPS_RS\")"
      });
    }));
  }
  getPrepareParameterForExpiriationDialog(study, exporters, infinit) {
    let expiredDate;
    let title = "Set expired date for the study.";
    let schema = [[[{
      tag: "label",
      text: "Expired Date"
    }, {
      tag: "p-calendar",
      filterKey: "expiredDate",
      description: "Expired Date"
    }]]];
    let schemaModel = {};
    if (infinit) {
      if (hasIn_default(study, "7777102B.Value[0]") && study["7777102B"].Value[0] === "FROZEN") {
        schemaModel = {
          setExpirationDateToNever: false,
          FreezeExpirationDate: false
        };
        title = "Unfreeze/Unprotect Expiration Date of the Study";
        schema = [[[{
          tag: "label",
          text: "Expired Date"
        }, {
          tag: "p-calendar",
          filterKey: "expiredDate",
          description: "Expired Date"
        }], [{
          tag: "label",
          text: "Exporter"
        }, {
          tag: "select",
          filterKey: "exporter",
          description: "Exporter",
          options: exporters.map(exporter => new SelectDropdown(exporter.id, exporter.description || exporter.id))
        }]]];
      } else {
        title = "Freeze/Protect Expiration Date of the Study";
        schemaModel = {
          setExpirationDateToNever: true,
          FreezeExpirationDate: true
        };
        schema = [[[{
          tag: "label",
          text: "Expired Date",
          showIf: model => {
            return !model.setExpirationDateToNever;
          }
        }, {
          tag: "p-calendar",
          filterKey: "expiredDate",
          description: "Expired Date",
          showIf: model => {
            return !model.setExpirationDateToNever;
          }
        }], [{
          tag: "dummy"
        }, {
          tag: "checkbox",
          filterKey: "setExpirationDateToNever",
          description: "Set Expiration Date to 'never' if you want also to protect the study",
          text: "Set Expiration Date to 'never' if you want also to protect the study"
        }], [{
          tag: "dummy"
        }, {
          tag: "checkbox",
          filterKey: "FreezeExpirationDate",
          description: "Freeze Expiration Date",
          text: "Freeze Expiration Date"
        }]]];
      }
    } else {
      if (hasIn_default(study.attrs, "77771023.Value.0") && study.attrs["77771023"].Value[0] != "") {
        expiredDate = this.extractExpireDate(study);
      } else {
        expiredDate = /* @__PURE__ */new Date();
      }
      schemaModel = {
        expiredDate: j4care.formatDate(expiredDate, "yyyyMMdd")
      };
      title += "<p>Set exporter if you want to export on expiration date too.";
      schema = [[[{
        tag: "label",
        text: "Expired Date"
      }, {
        tag: "p-calendar",
        filterKey: "expiredDate",
        description: "Expired Date"
      }], [{
        tag: "label",
        text: "Exporter"
      }, {
        tag: "select",
        filterKey: "exporter",
        description: "Exporter",
        options: exporters.map(exporter => new SelectDropdown(exporter.id, exporter.description || exporter.id))
      }], [{
        tag: "label",
        text: "Freeze Expiration Date"
      }, {
        tag: "select",
        options: [new SelectDropdown(null, "-"), new SelectDropdown("true", "FREEZE", "Freeze expiration date and set expiration state to FROZEN"), new SelectDropdown("false", "UNFREEZE", "Unfreeze expiration date and set expiration state to UPDATEABLE")],
        filterKey: "freezeExpirationDate",
        description: "Freeze Expiration Date Options",
        placeholder: "Freeze Expiration Date"
      }], [{
        tag: "label",
        text: "Protect Study"
      }, {
        tag: "checkbox",
        filterKey: "protectStudy",
        description: "Existing / new Expiration Date will be nullified and study expiration state will be set to FROZEN to protect the study from being expired or rejected"
      }]]];
    }
    return {
      content: title,
      form_schema: schema,
      result: {
        schema_model: schemaModel
      },
      saveButton: "SAVE"
    };
  }
  extractExpireDate(study) {
    try {
      const expiredDateString = study.attrs["77771023"].Value[0];
      return /* @__PURE__ */new Date(expiredDateString.substring(0, 4) + "." + expiredDateString.substring(4, 6) + "." + expiredDateString.substring(6, 8));
    } catch (e) {
      return void 0;
    }
  }
  setExpiredDateSeries(deviceWebservice, studyUID, seriesUID, expiredDate, exporter) {
    const url = this.getModifyStudyUrl(deviceWebservice);
    let localParams = "";
    if (exporter) {
      localParams = `?ExporterID=${exporter}`;
    }
    return this.$http.put(`${url}/${studyUID}/series/${seriesUID}/expire/${expiredDate}${localParams}`, {});
  }
  setExpiredDate(deviceWebservice, studyUID, expiredDate, exporter, freezeExpirationDate, params) {
    const url = this.getModifyStudyUrl(deviceWebservice);
    let localParams = "";
    if (exporter) {
      localParams = `?ExporterID=${exporter}`;
      if (freezeExpirationDate != null) localParams += `&FreezeExpirationDate=${freezeExpirationDate}`;
    } else {
      if (freezeExpirationDate != null) localParams += `?FreezeExpirationDate=${freezeExpirationDate}`;
    }
    if (params && Object.keys(params).length > 0) {
      if (localParams) {
        localParams += j4care.objToUrlParams(params);
      } else {
        localParams = `?${j4care.objToUrlParams(params)}`;
      }
    }
    return this.$http.put(`${url}/${studyUID}/expire/${expiredDate}${localParams}`, {});
  }
  getExporters() {
    if (!this.sharedObservables$["export"]) {
      this.sharedObservables$["export"] = this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}export`).pipe(shareReplay(1));
    }
    return this.sharedObservables$["export"];
  }
  rejectRestoreMultipleObjects(multipleObjects, selectedWebService, rejectionCode) {
    return forkJoin(multipleObjects.getAllAsArray().filter(element => element.dicomLevel != "patient").map(element => {
      return this.$http.post(`${this.getURL(element.object.attrs, selectedWebService, element.dicomLevel)}/reject/${rejectionCode}`, {}, this.jsonHeader);
    }));
  }
  deleteMultipleObjects(multipleObjects, selectedWebService, param) {
    return forkJoin(multipleObjects.getAllAsArray().map(element => {
      if (element.dicomLevel === "patient" && hasIn_default(element, "object.attrs")) {
        return this.deletePatientByPk(selectedWebService, this.getPatientPk(element.object.attrs));
      }
      if (element.dicomLevel === "study" && hasIn_default(element, "object.attrs")) {
        return this.deleteStudy(this.getStudyInstanceUID(element.object.attrs), selectedWebService, param);
      }
    }));
  }
  rejectMatchingStudies(webApp, rejectionCode, params) {
    return this.$http.post(`${this.getDicomURL("study", webApp)}/reject/${rejectionCode}${j4care.param(params)}`, {}, this.jsonHeader);
  }
  rejectMatchingSeries(webApp, rejectionCode, params) {
    return this.$http.post(`${this.getDicomURL("series", webApp)}/reject/${rejectionCode}${j4care.param(params)}`, {}, this.jsonHeader);
  }
  applyRetentionPolicyMatchingSeries(webApp, params) {
    return this.$http.post(`${this.getDicomURL("series", webApp)}/expire${j4care.param(params)}`, {}, this.jsonHeader);
  }
  createUPSMatchingStudies(webApp, params) {
    return this.$http.post(`${this.getDicomURL("study", webApp)}/workitems${j4care.param(params)}`, {}, this.jsonHeader);
  }
  exportMatching(mode, studyWebService, params) {
    let _webApp;
    const exporterID = params["exporterID"];
    delete params["exporterID"];
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(studyWebService, "DCM4CHEE_ARC_AET", "MOVE_MATCHING").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.getDicomURL(mode, webApp)}/export/${exporterID}${j4care.param(params)}`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  exportMatchingDialogSchema(exporterIDs) {
    return [[[{
      tag: "label",
      text: "Exporter"
    }, {
      tag: "select",
      type: "text",
      options: exporterIDs.map(exporter => {
        return new SelectDropdown(exporter.id, exporter.id);
      }),
      filterKey: "exporterID",
      description: "Exporter",
      placeholder: "Exporter"
    }], [{
      tag: "label",
      text: "Batch ID"
    }, {
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }], [{
      tag: "label",
      text: "Schedule at"
    }, {
      tag: "single-date-time-picker",
      type: "text",
      filterKey: "scheduledTime",
      description: "Schedule at (if not set, schedule immediately)"
    }]]];
  }
  rejectMatchingSeriesDialogSchema(rjNoteCodes) {
    return [[[{
      tag: "label",
      text: "Rejection Reason"
    }, {
      tag: "select",
      type: "text",
      options: rjNoteCodes,
      filterKey: "rjNoteCode",
      description: "Rejection Reason",
      placeholder: "Rejection Reason"
    }], [{
      tag: "label",
      text: "Batch ID"
    }, {
      tag: "input",
      type: "text",
      filterKey: "batchID",
      description: "Batch ID",
      placeholder: "Batch ID"
    }], [{
      tag: "label",
      text: "Schedule at"
    }, {
      tag: "single-date-time-picker",
      type: "text",
      filterKey: "scheduledTime",
      description: "Schedule at (if not set, schedule immediately)"
    }]]];
  }
  restoreStudy(studyAttr, webService) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.studyURL(studyAttr, webApp)}/reject/REVOKE_REJECTION^99DCM4CHEE`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  rejectStudy(studyAttr, webService, rejectionCode, param) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.studyURL(studyAttr, webApp)}/reject/${rejectionCode}${j4care.param(param)}`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  restoreSeries(seriesAttr, webService) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.seriesURL(seriesAttr, webApp)}/reject/REVOKE_REJECTION^99DCM4CHEE`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  rejectSeries(seriesAttr, webService, rejectionCode, param) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.seriesURL(seriesAttr, webApp)}/reject/${rejectionCode}${j4care.param(param)}`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  restoreInstance(instanceAttr, webService, rejectionCode) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.instanceURL(instanceAttr, webApp)}/reject/${rejectionCode}`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  rejectInstance(instanceAttr, webService, rejectionCode, param) {
    let _webApp;
    return this.getWebAppFromWebServiceClassAndSelectedWebApp(webService, "DCM4CHEE_ARC_AET", "REJECT").pipe(map(webApp => {
      _webApp = webApp;
      return `${this.instanceURL(instanceAttr, webApp)}/reject/${rejectionCode}${j4care.param(param)}`;
    })).pipe(switchMap(url => {
      return this.$http.post(url, {}, this.jsonHeader, void 0, _webApp);
    }));
  }
  mapCode(m, i, newObject, mapCodes) {
    if (hasIn_default(mapCodes, i)) {
      if (isArray_default(mapCodes[i])) {
        forEach_default(mapCodes[i], (seq, j) => {
          newObject[seq.code] = get_default(m, seq.map);
          newObject[seq.code].vr = seq.vr;
        });
      } else {
        newObject[mapCodes[i].code] = m;
        newObject[mapCodes[i].code].vr = mapCodes[i].vr;
      }
    }
  }
  getMsgFromResponse(res, defaultMsg = null) {
    let msg;
    let endMsg = "";
    if (hasIn_default(res, "error") && hasIn_default(res.error, "errorMessage")) {
      endMsg = endMsg + `${res.error.errorMessage}<br>`;
    } else {
      try {
        msg = res.json();
        if (hasIn_default(msg, "completed")) {
          endMsg = `Completed: ${msg.completed}<br>`;
        }
        if (hasIn_default(msg, "warning")) {
          endMsg = endMsg + `Warning: ${msg.warning}<br>`;
        }
        if (hasIn_default(msg, "failed")) {
          endMsg = endMsg + `Failed: ${msg.failed}<br>`;
        }
        if (hasIn_default(msg, "errorMessage")) {
          endMsg = endMsg + `${msg.errorMessage}<br>`;
        }
        if (hasIn_default(msg, "error")) {
          endMsg = endMsg + `${msg.error}<br>`;
        }
        if (endMsg === "") {
          endMsg = defaultMsg;
        }
      } catch (e) {
        if (defaultMsg) {
          endMsg = defaultMsg;
        } else {
          endMsg = res.statusText;
        }
      }
    }
    return endMsg;
  }
  getQueueNames() {
    if (!this.sharedObservables$["queue_names"]) {
      this.sharedObservables$["queue_names"] = this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}queue`).pipe(shareReplay(1));
    }
    return this.sharedObservables$["queue_names"];
  }
  getRejectNotes(params) {
    if (!this.sharedObservables$["reject_notes"]) {
      this.sharedObservables$["reject_notes"] = this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}reject/${j4care.param(params)}`).pipe(shareReplay(1));
    }
    return this.sharedObservables$["reject_notes"];
  }
  convertStringLDAPParamToObject(object, path, keys) {
    try {
      get_default(object, path).forEach(param => {
        keys.forEach(key => {
          if (param.indexOf(key) > -1) {
            object[key] = param.replace(key + "=", "");
          }
        });
      });
    } catch (e) {}
  }
  webAppHasPermission(webApps) {
    if (this.appService.user && this.appService.user.roles && this.appService.user.roles.length > 0 && this.appService.user.su || this.appService.global && this.appService.global.notSecure) {
      return webApps;
    } else {
      return webApps.filter(webApp => {
        if (hasIn_default(webApp, "dcmProperty") && webApp.dcmProperty.length > 0) {
          let roles = this.getWebAppRoles(webApp) || [];
          if (roles.length > 0) {
            let check = false;
            roles.forEach(role => {
              check = check || this.appService.user.roles.indexOf(role) > -1;
            });
            return check;
          } else {
            j4care.log("No role found in the property dcmProperty of WebApp", webApp);
            return true;
          }
        } else {
          return true;
        }
      });
    }
  }
  getWebAppRoles(webApp) {
    try {
      const regex = /roles=(.*)/gm;
      const regex2 = /([\w-]+)/gm;
      let roles = [];
      let m, m2;
      while ((m = regex.exec(webApp.dcmProperty)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        while ((m2 = regex2.exec(m[1])) !== null) {
          if (m2.index === regex2.lastIndex) {
            regex2.lastIndex++;
          }
          roles.push(m2[1]);
        }
      }
      return roles;
    } catch (e) {
      console.log("webApp=", webApp);
      j4care.log("Something went wrong on extracting roles from dcmProperty of WebApp", e);
      return [];
    }
  }
  getTextFromAction(action) {
    switch (action) {
      case "copy":
        return "Copy";
      case "cut":
        return "Cut";
      case "link":
        return "Link";
      case "merge":
        return "Merge";
      default:
        return "Move";
    }
  }
  getLevelText(level) {
    switch (level) {
      case "study":
        return "study";
      case "series":
        return "Series";
      case "instance":
        return "instance";
      case "patient":
        return "patient";
      case "diff":
        return "diff";
      case "mwl":
        return "MWL";
    }
  }
  markAsRequestedOrUnscheduled(dcmWebApp, studyInstanceUID, object, dicomLevel, dicomObject) {
    dicomLevel = dicomLevel || "study";
    if (dicomLevel === "study") {
      return this.$http.put(`${this.getDicomURL(dicomLevel, dcmWebApp)}/${studyInstanceUID}/request`, object, new HttpHeaders({
        "Content-Type": "application/dicom+json"
      }), void 0, dcmWebApp);
    }
    if (dicomLevel === "series") {
      return this.$http.put(`${this.getSeriesUrl(dcmWebApp, dicomObject)}/request`, object, new HttpHeaders({
        "Content-Type": "application/dicom+json"
      }), void 0, dcmWebApp);
    }
  }
  createFHIRImageStudy(dcmWebApp, studyInstanceUID, studyWebApp) {
    console.log("baseUrl", this.appService.baseUrl);
    console.log("dcmWebServicePath", studyWebApp.dcmWebServicePath);
    console.log("combined path=", `${this.appService.baseUrl}${studyWebApp.dcmWebServicePath}/studies/${studyInstanceUID}/fhir/${dcmWebApp.dcmWebAppName}`.replace(/dcm4chee-arc\/dcm4chee-arc/gi, "dcm4chee-arc").replace(/\/\//gi, "/").replace(/(http:\/)(\w)(.*)/gm, function (g1, g2, g3, g4) {
      if (g3 != "/") {
        return g2 + "/" + g3 + g4;
      } else {
        return g2 + g3 + g4;
      }
    }));
    console.log("combined without replace=", `${this.appService.baseUrl}${studyWebApp.dcmWebServicePath}/studies/${studyInstanceUID}/fhir/${dcmWebApp.dcmWebAppName}`);
    console.log("dcmWebApp", dcmWebApp);
    console.log("studyWebApp", studyWebApp);
    let webAppTemp = cloneDeep_default(studyWebApp);
    console.log("webAppTemp", webAppTemp);
    webAppTemp.dcmWebServicePath = webAppTemp.dcmWebServicePath + `/studies/${studyInstanceUID}/fhir/${dcmWebApp.dcmWebAppName}`;
    return this.$http.post("", {}, new HttpHeaders({
      "Content-Type": "application/fhir+json",
      "Accept": "application/fhir+json"
    }), void 0, webAppTemp);
  }
  getRequestSchema() {
    let requestSchema = [];
    return this.getIod("series").pipe(map(res => {
      const requestIOD = get_default(res, "00400275.items");
      Object.keys(requestIOD).forEach(dicomKey => {
        if (requestIOD[dicomKey].vr === "SQ" && hasIn_default(requestIOD[dicomKey], "items")) {
          requestSchema.push([{
            tag: "label_large",
            text: DCM4CHE.elementName.forTag(dicomKey)
          }]);
          const subItems = get_default(requestIOD[dicomKey], "items");
          Object.keys(subItems).forEach(itemKey => {
            requestSchema.push([{
              tag: "label",
              text: DCM4CHE.elementName.forTag(itemKey),
              prefix: "> "
            }, {
              tag: "input",
              type: "text",
              filterKey: `${dicomKey}.${itemKey}`,
              description: DCM4CHE.elementName.forTag(itemKey),
              placeholder: DCM4CHE.elementName.forTag(itemKey)
            }]);
          });
        } else {
          requestSchema.push([{
            tag: "label",
            text: DCM4CHE.elementName.forTag(dicomKey)
          }, {
            tag: "input",
            type: "text",
            filterKey: dicomKey,
            description: DCM4CHE.elementName.forTag(dicomKey),
            placeholder: DCM4CHE.elementName.forTag(dicomKey)
          }]);
        }
      });
      return [requestSchema, requestIOD];
    }));
  }
  /*
       {
          00080050: "test1",
          00080051.00400031: "test2"
       }
  
       to
       {
          00080050:{
              vr:"SH",
              Value:["test1"]
          },
          00080051:{
              vr:"SQ",
              Value:[
                  {
                      00400031:{
                          vr:"SH",
                          Value:["test1"]
                      }
                  }
              ]
          }
       }
      *
      * */
  convertFilterModelToDICOMObject(object, iod, exception = []) {
    let newObject = {};
    Object.keys(object).forEach(modelKey => {
      if (exception.indexOf(modelKey) === -1) {
        if (modelKey.indexOf(".") > -1) {
          const [firstKey, secondKey] = modelKey.split(".");
          console.log("first", firstKey);
          console.log("second", secondKey);
          const iodObject = get_default(iod, `${firstKey}.items.${secondKey}`);
          delete iodObject["required"];
          if (iodObject) {
            if (newObject[firstKey]) {
              set_default(newObject, `${firstKey}.Value[0].${secondKey}`, __spreadProps(__spreadValues({}, iodObject), {
                Value: [object[modelKey]]
              }));
            } else {
              newObject[firstKey] = {
                "vr": "SQ",
                "Value": [{
                  [secondKey]: __spreadProps(__spreadValues({}, iodObject), {
                    Value: [object[modelKey]]
                  })
                }]
              };
            }
          }
        } else {
          const iodObject = get_default(iod, modelKey);
          delete iodObject["required"];
          if (iodObject) {
            newObject[modelKey] = __spreadProps(__spreadValues({}, iodObject), {
              Value: [object[modelKey]]
            });
          }
        }
      }
    });
    return newObject;
  }
}, _a14.ctorParameters = () => [{
  type: AeListService
}, {
  type: J4careHttpService
}, {
  type: StorageSystemsService
}, {
  type: DevicesService
}, {
  type: WebAppsListService
}, {
  type: PermissionService
}, {
  type: KeycloakService
}, {
  type: AppService
}, {
  type: AppRequestsService
}], _a14);
StudyService = __decorate([Injectable()], StudyService);

// src/app/pipes/trim.pipe.ts
var TrimPipe = class TrimPipe2 {
  transform(value, l) {
    let limit = !isNaN(l) ? parseInt(l, 10) : 10;
    let trail = isNaN(limit) ? value : "...";
    return value && value.length > limit ? value.substring(0, limit) + trail : value;
  }
};
TrimPipe = __decorate([Pipe({
  name: "trim",
  standalone: true
})], TrimPipe);

// angular:jit:template:src\app\widgets\modified-widget\modified-widget.component.html
var modified_widget_component_default = `<div class="modified_widget">\r
    <div class="main_input_block" title="{{title}}">\r
<!--        <input class="main_input" [ngClass]="{'ng-invalid':(!maiInputValid)}" type="text" [(ngModel)]="model" placeholder="{{placeholder}}"  (ngModelChange)="filterChanged()" (click)="selectorOpen = true">-->\r
        <label class="main_input" [ngClass]="{'black':stateText}" (click)="toggleSelector()" title="{{stateTextHover || placeholder}}">\r
            {{stateText || placeholder}}\r
        </label>\r
        <span *ngIf="model" class="glyphicon glyphicon-remove clear_picker" (click)="hardClear()"></span>\r
<!--        <i class="material-icons filter_button" (click)="toggleSelector()">\r
            subdirectory_arrow_right\r
        </i>-->\r
        <i class="glyphicon glyphicon-pencil filter_button" (click)="toggleSelector()">\r
        </i>\r
        <ng-container *ngIf="selectorOpen">\r
            <div class="overlay" (click)="selectorOpen = false">\r
            </div>\r
            <div class="content_block">\r
                <h5 class="title" *ngIf="title">{{title}}</h5>\r
                <div class="filter">\r
                    <div class="line">\r
                        <label>All modified:</label>\r
                        <input type="checkbox" [(ngModel)]="allModified" (change)="changeAllModified($event)"><br/>\r
                    </div>\r
                    <div class="line">\r
                        <label>Modified DICOM attributes:</label>\r
                        <div *ngIf="iod" >\r
                            <div class="add_block" [ngClass]="{'empty':modifiedAttr.size === 0}">\r
                                <dcm-drop-down\r
                                        [options]="iod"\r
                                        [(model)]="newAttribute"\r
                                        [showSearchField]="true"\r
                                        [multiSelectMode]="false"\r
                                        [placeholder]="placeholder"\r
                                        (modelChange)="onDropdownChange($event)"\r
                                ></dcm-drop-down>\r
<!--\r
                                <i title="Add" class="material-icons" (click)="addAttribute(newAttribute)">add</i>\r
-->\r
                            </div>\r
                            <ul class="modified_list" [ngClass]="{'not-empty':modifiedAttr && modifiedAttr.size && modifiedAttr.size > 0}">\r
                                <li *ngFor="let attr of Array.from(modifiedAttr.values())">\r
                                    <label title="{{attr}}">{{getLabelFromIODTag(attr)}}</label><i title="Delete" (click)="remove(attr)" class="material-icons">clear</i>\r
                                </li>\r
                            </ul>\r
                        </div>\r
\r
                    </div>\r
<!--                    <ng-container *ngIf="!allModified && iod">\r
                        <div class="line">\r
                            <label>Modified DICOM attributes:</label>\r
                            <dcm-drop-down\r
                                    [options]="iod"\r
                                    [(model)]="modifiedAttr"\r
                                    [showSearchField]="true"\r
                                    [multiSelectMode]="true"\r
                                    (modelChange)="modifiedAttrChanged($event)"\r
                            ></dcm-drop-down>\r
                        </div>\r
                    </ng-container>-->\r
                </div>\r
                <div class="dialogbuttons">\r
                    <button class="set_button save"  [disabled]="!(modifiedAttr && modifiedAttr.size > 0)" (click)="setFilter()" i18n="@@Set">Set</button>\r
                    <button class="cancle" type="button" (click)="clear()" i18n="@@Clear">Clear</button>\r
                </div>\r
            </div>\r
        </ng-container>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\modified-widget\modified-widget.component.scss
var modified_widget_component_default2 = "/* src/app/widgets/modified-widget/modified-widget.component.scss */\n.main_input_block {\n  position: relative;\n  height: 27px;\n}\n.main_input_block .main_input {\n  width: 100%;\n  height: 100%;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  background: transparent;\n  border-bottom: 1px solid #ccc;\n  padding-left: 6px;\n  color: #777;\n  font-style: italic;\n}\n.main_input_block .main_input.black {\n  color: black;\n  font-style: normal;\n}\n.main_input_block .filter_button {\n  background: var(--backgroundColor);\n  color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  line-height: 27px;\n  text-align: center;\n  height: 27px;\n}\n.main_input_block .filter_button:hover {\n  cursor: pointer;\n}\n.main_input_block .codes .code {\n  margin: 10px 0;\n  float: left;\n  width: 100%;\n}\n.main_input_block .codes .code .code_label {\n  width: 50%;\n  text-align: right;\n  padding-right: 10px;\n}\n.main_input_block .codes .code .code_model {\n  width: 50%;\n  float: right;\n}\n.main_input_block .issuers .issuer {\n  margin: 10px 0;\n  float: left;\n  width: 100%;\n}\n.main_input_block .issuers .issuer .issuer_label {\n  width: 50%;\n  text-align: right;\n  padding-right: 10px;\n}\n.main_input_block .issuers .issuer .issuer_model {\n  width: 50%;\n  float: right;\n}\n.main_input_block .add_block {\n  margin-bottom: 15px;\n  float: left;\n  width: 100%;\n  border: 1px solid black;\n}\n.main_input_block .add_block dcm-drop-down {\n  width: calc(100% - 9px);\n  float: left;\n}\n.main_input_block .add_block i.material-icons {\n  float: right;\n  background: rgba(6, 29, 47, 0.84);\n  color: white;\n  cursor: pointer;\n  width: 24px;\n}\n.content_block {\n  display: block;\n  position: fixed;\n  background: white;\n  z-index: 9999;\n  box-shadow: 7px 10px 10px 5px #444;\n  padding: 30px;\n  min-width: 560px;\n  border-top: 20px solid var(--backgroundHoverColor);\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  color: black;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.content_block h5 {\n  font-size: 18px;\n}\n.content_block .set_button {\n  background: var(--backgroundHoverColor);\n  color: white;\n  border: 0;\n  width: 24%;\n  float: right;\n}\n.content_block .filter {\n  width: 100%;\n}\n.content_block .filter .line input[type=checkbox] {\n  width: 10%;\n  min-height: 15px;\n}\n.content_block ul {\n  list-style: none;\n  float: left;\n  max-height: 125px;\n  overflow: auto;\n  width: 100%;\n  padding: 3px;\n}\n.content_block ul.not-empty {\n  border: 1px solid #6d6d6d;\n}\n.content_block ul li {\n  border: 1px solid;\n  padding-left: 9px;\n  float: left;\n  width: 100%;\n  vertical-align: middle;\n  margin-bottom: 2px;\n}\n.content_block ul li label {\n  width: calc(100% - 24px);\n  float: left;\n}\n.content_block ul li i.material-icons {\n  float: right;\n  background: rgba(6, 29, 47, 0.84);\n  color: white;\n  cursor: pointer;\n  width: 24px;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.32);\n}\n.clear_picker {\n  position: absolute;\n  right: 25px;\n  top: 5px;\n}\n";

// src/app/widgets/modified-widget/modified-widget.component.ts
var _a15;
var ModifiedWidgetComponent = (_a15 = class {
  set model(value) {
    this._model = value;
  }
  get model() {
    return this._model;
  }
  constructor(studyService) {
    this.studyService = studyService;
    this.stateText = "";
    this.modelChange = new EventEmitter();
    this.selectorOpen = false;
    this.filterModel = {};
    this.Object = Object;
    this.Array = Array;
    this.allModified = false;
    this.modifiedAttr = /* @__PURE__ */new Set();
    this.stateTextHover = "";
    this.trim = new TrimPipe();
  }
  ngOnInit() {
    if (!this.iodFileNames || this.iodFileNames.length === 0) {
      this.iodFileNames = ["patient", "study"];
    }
    if (!this.placeholder) {
      this.placeholder = "Modified";
    }
    this.getIodObjects();
  }
  getIodObjects() {
    this.studyService.getIodObjectsFromNames(this.iodFileNames).subscribe(iod => {
      this.iod = this.studyService.iodToSelectedDropdown(iod.reduce((n0, n1) => Object.assign(n0, n1)));
    });
  }
  getLabelFromIODTag(dicomTagPath) {
    return this.studyService.getLabelFromIODTag(dicomTagPath);
  }
  remove(attr) {
    try {
      this.modifiedAttr.delete(attr);
    } catch (e) {}
  }
  addAttribute(e) {
    try {
      console.log("newAttribute", this.newAttribute);
      console.log("toggleattr", e);
      if (!this.modifiedAttr.has(e) && this.newAttribute) {
        this.modifiedAttr.add(e);
      }
      this.newAttribute = void 0;
    } catch (e2) {
      e2;
    }
  }
  onDropdownChange(e) {
    this.addAttribute(e);
  }
  toggleSelector() {
    this.selectorOpen = !this.selectorOpen;
  }
  hardClear() {
    this.allModified = false;
    this.modifiedAttr.clear();
    this.stateText = "";
    this.stateTextHover = "";
    this.modelChange.emit(void 0);
  }
  changeAllModified(e) {
    this.allModified = e.target.checked;
    if (this.allModified && this.modifiedAttr.size > 0) {
      this.stateText = "All modified";
      this.stateTextHover = "All modified";
    } else {
      this.stateText = "";
      this.stateTextHover = "";
    }
  }
  filterChanged() {}
  setFilter() {
    let toReturnObject = {};
    if (this.allModified) {
      toReturnObject = {
        allmodified: true
      };
    }
    if (this.modifiedAttr && this.modifiedAttr.size > 0) {
      toReturnObject["modified"] = Array.from(this.modifiedAttr.values());
      this.modelChange.emit(toReturnObject);
      if (this.modifiedAttr && this.modifiedAttr.size > 0 && this.modifiedAttr.size) {
        this.stateText = this.trim.transform(Array.from(this.modifiedAttr.values()).map(kode => this.studyService.getLabelFromIODTag(kode)).join(", "), 18);
      }
      this.stateTextHover = Array.from(this.modifiedAttr.values()).map(kode => this.studyService.getLabelFromIODTag(kode)).join(", ");
      this.selectorOpen = false;
    }
  }
  clear() {
    this.modifiedAttr.clear();
    this.allModified = false;
    this.modelChange.emit({});
    this.selectorOpen = false;
  }
  modifiedAttrChanged(e) {
    if (this.modifiedAttr && this.modifiedAttr.size > 0) {
      this.stateText = `( ${this.modifiedAttr.size} ) selected`;
    } else {
      this.stateText = "";
    }
  }
}, _a15.ctorParameters = () => [{
  type: StudyService
}], _a15.propDecorators = {
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  iodFileNames: [{
    type: Input
  }],
  model: [{
    type: Input,
    args: ["model"]
  }],
  modelChange: [{
    type: Output
  }]
}, _a15);
ModifiedWidgetComponent = __decorate([Component({
  selector: "modified-widget",
  template: modified_widget_component_default,
  imports: [NgClass, FormsModule, DcmDropDownComponent, CommonModule],
  standalone: true,
  styles: [modified_widget_component_default2]
})], ModifiedWidgetComponent);

// angular:jit:template:src\app\widgets\issuer-selector\issuer-selector.component.html
var issuer_selector_component_default = `<div class="patient_name_picker" [ngClass]="{'open':selectorOpen}">\r
    <div class="input_field">\r
        <div class="input_block">\r
            <input class="model_input" type="text" [(ngModel)]="model" placeholder="{{placeholder}}" title="{{title}}" (ngModelChange)="filterChanged()">\r
            <span class="glyphicon glyphicon-remove" *ngIf="model" (click)="hardClear()"></span>\r
        </div>\r
        <i class="material-icons filter_button" (click)="togglePicker()">\r
            subdirectory_arrow_right\r
        </i>\r
    </div>\r
    <div class="overlay" *ngIf="selectorOpen" (click)="selectorOpen = false"></div>\r
    <div class="dialog" [hidden]="!selectorOpen">\r
        <div class="dialog_block">\r
            <ng-container *ngIf="selectorOpen">\r
                <div class="content_block">\r
                    <h5 class="title" *ngIf="title">{{title}}</h5>\r
                    <ng-container *ngIf="issuers && issuers.length <= viewLimit">\r
                        <div class="table widget_table">\r
                            <div class="tr">\r
                                <div class="th" *ngFor="let issuer of issuers">{{issuer.label}}</div>\r
                            </div>\r
                            <div class="tr">\r
                                <div class="td" *ngFor="let issuer of issuers;trackBy: trackById">\r
                                    <input type="text" class="issuer_model" [placeholder]="issuer.label" [(ngModel)]="filterModel[issuer.key]" (ngModelChange)="set()">\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </ng-container>\r
                    <ng-container *ngIf="issuers && issuers.length > viewLimit">\r
                        <div class="issuers" *ngFor="let issuer of issuers">\r
                            <div class="issuer" title="{{issuer.key}}">\r
                                <label class="issuer_label">{{issuer.label}}</label>\r
                                <input type="text" class="issuer_model" [(ngModel)]="filterModel[issuer.key]" (ngModelChange)="set()">\r
                            </div>\r
                        </div>\r
                    </ng-container>\r
                </div>\r
            </ng-container>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\issuer-selector\issuer-selector.component.scss
var issuer_selector_component_default2 = "/* src/app/widgets/issuer-selector/issuer-selector.component.scss */\n.patient_name_picker {\n  position: relative;\n  color: black;\n}\n.patient_name_picker .input_field {\n  display: grid;\n  grid-template-columns: auto 26px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.patient_name_picker .input_field input {\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.patient_name_picker .input_field i.material-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #161d23;\n  color: white;\n}\n.patient_name_picker .input_field i.material-icons:hover {\n  cursor: pointer;\n}\n.patient_name_picker .input_field .input_block {\n  position: relative;\n}\n.patient_name_picker .input_field .input_block span.glyphicon-remove {\n  display: none;\n  position: absolute;\n  right: 3px;\n  top: 7px;\n  background: transparent;\n  color: black;\n}\n.patient_name_picker .input_field .input_block span.glyphicon-remove:hover {\n  cursor: pointer;\n}\n.patient_name_picker .input_field:hover .input_block span.glyphicon-remove {\n  display: block;\n}\n.patient_name_picker .dialog {\n  position: absolute;\n  background: white;\n  padding: 20px;\n  -webkit-box-shadow: 3px 4px 8px #cccccc;\n  -moz-box-shadow: 3px 4px 8px #cccccc;\n  box-shadow: 3px 4px 8px #cccccc;\n  z-index: 1001;\n}\n.patient_name_picker .dialog input {\n  color: black;\n}\n.patient_name_picker .dicom_components {\n  display: grid;\n  grid-template-columns: 90px 10px 90px 10px 90px 10px 60px 10px 60px;\n  float: left;\n}\n.patient_name_picker .dicom_components span {\n  display: flex;\n  justify-content: center;\n}\n.patient_name_picker.open .input_field input {\n  z-index: 1002;\n  position: relative;\n  background: white;\n  color: black;\n}\n.patient_name_picker.open .input_field:hover .input_block span.glyphicon-remove {\n  display: block;\n  z-index: 10004;\n}\n.main_input_block {\n  position: relative;\n  height: 27px;\n}\n.main_input_block .main_input {\n  width: 100%;\n  height: 100%;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  background: transparent;\n}\n.main_input_block .filter_button {\n  background: var(--backgroundColor);\n  color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 27px;\n}\n.main_input_block .filter_button:hover {\n  cursor: pointer;\n}\n.main_input_block .issuers .issuer {\n  margin: 10px 0;\n  float: left;\n  width: 100%;\n}\n.main_input_block .issuers .issuer .issuer_label {\n  width: 50%;\n  text-align: right;\n  padding-right: 10px;\n}\n.main_input_block .issuers .issuer .issuer_model {\n  width: 50%;\n  float: right;\n  color: black;\n}\n.content_block {\n}\n.content_block::placeholder {\n  color: black;\n}\n.content_block h5 {\n  font-weight: bold;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n.content_block .set_button {\n  background: var(--backgroundHoverColor);\n  color: white;\n  border: 0;\n  width: 150px;\n  float: right;\n}\n.content_block .table {\n  min-width: 600px;\n  box-shadow: none;\n  margin: 20px 0;\n}\n.content_block .table .tr {\n  display: flex;\n  align-items: center;\n}\n.content_block .table .tr.active .td,\n.content_block .table .tr.active .th {\n  color: black;\n  border: 1px solid rgba(0, 0, 0, 0.768627451);\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.768627451);\n}\n.content_block .table .tr.active .td input,\n.content_block .table .tr.active .th input {\n  width: 100%;\n  min-width: 50px;\n  color: black;\n}\n.content_block .table .tr.active .td input::placeholder,\n.content_block .table .tr.active .th input::placeholder {\n  color: #666666;\n}\n.content_block .table .tr .td,\n.content_block .table .tr .th {\n  color: rgba(51, 51, 51, 0.5607843137);\n  width: 200px;\n}\n.content_block .table .tr .td input,\n.content_block .table .tr .th input {\n  width: 100%;\n  height: 30px;\n  min-width: 50px;\n  color: black;\n}\n.content_block .table .tr .td input::placeholder,\n.content_block .table .tr .th input::placeholder {\n  color: rgba(51, 51, 51, 0.5607843137);\n}\n.content_block .table .tr .td span,\n.content_block .table .tr .th span {\n  padding: 3px 7px;\n  height: 30px;\n  line-height: 30px;\n}\n.content_block .table .tr .th {\n  color: black;\n}\n.content_block .table .tr .td {\n  border: 1px solid rgba(0, 0, 0, 0.768627451);\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.768627451);\n}\n.clear_picker {\n  position: absolute;\n  right: 25px;\n  top: 5px;\n}\n";

// src/app/widgets/issuer-selector/issuer-selector.component.ts
var _a16;
var IssuerSelectorComponent = (_a16 = class {
  set model(value) {
    if (value && this.issuers && this.issuers.length > 0) {
      this.setFilterModel(value);
    }
  }
  get model() {
    return this._model;
  }
  constructor() {
    this.splitters = [];
    this.suffixDropdownKeyConfig = {
      "dcmuiIssuerOfAccessionNumberSequence": {
        mainKey: "AccessionNumber",
        suffixSplitChar: "^",
        mergeChar: "^",
        secondaryKeys: ["IssuerOfAccessionNumberSequence.LocalNamespaceEntityID", "IssuerOfAccessionNumberSequence.UniversalEntityID", "IssuerOfAccessionNumberSequence.UniversalEntityIDType"]
      },
      "dcmuiIssuerOfAdmissionIDSequence": {
        mainKey: "AdmissionID",
        suffixSplitChar: "&",
        mergeChar: "^^^",
        secondaryKeys: ["IssuerOfAdmissionIDSequence.LocalNamespaceEntityID", "IssuerOfAdmissionIDSequence.UniversalEntityID", "IssuerOfAdmissionIDSequence.UniversalEntityIDType"]
      },
      "dcmuiIssuerOfPatientIDSequence": {
        mainKey: "PatientID",
        suffixSplitChar: "&",
        mergeChar: "^^^",
        secondaryKeys: ["IssuerOfPatientID", "IssuerOfPatientIDQualifiersSequence.UniversalEntityID", "IssuerOfPatientIDQualifiersSequence.UniversalEntityIDType"]
      }
    };
    this.modelChange = new EventEmitter();
    this.selectorOpen = false;
    this.filterModel = {};
    this.maiInputValid = true;
    this.viewLimit = 4;
  }
  ngOnInit() {
    this.initSplitters();
  }
  setFilterModel(value) {
    try {
      if (typeof value === "string") {
        this.triggerExtraction(value);
      } else {
        this.issuers.forEach(issuer => {
          if (value && value[issuer.key]) {
            this.filterModel[issuer.key] = value[issuer.key];
          } else {
            this.filterModel[issuer.key] = "";
          }
        });
        this.set();
      }
    } catch (e) {}
  }
  set() {
    if (this.filterModel && this.filterModel["AccessionNumber"]) {
      let issuerPart = values_default(pickBy_default(this.filterModel, (value, key) => key != "AccessionNumber"));
      issuerPart = j4care.removeLastEmptyStringsFromArray(issuerPart).join("^");
      if (issuerPart) {
        this._model = `${j4care.appendStringIfExist(this.filterModel["AccessionNumber"], "^")}${issuerPart}`;
      } else {
        this._model = `${this.filterModel?.["AccessionNumber"] || ""}`;
      }
      this.modelChange.emit(this.filterModel);
    } else if (this.filterModel && this.filterModel["ScheduledStepAttributesSequence.AccessionNumber"]) {
      let issuerPart = values_default(pickBy_default(this.filterModel, (value, key) => key != "ScheduledStepAttributesSequence.AccessionNumber"));
      issuerPart = j4care.removeLastEmptyStringsFromArray(issuerPart).join("^");
      if (issuerPart) {
        this._model = `${j4care.appendStringIfExist(this.filterModel["ScheduledStepAttributesSequence.AccessionNumber"], "^")}${issuerPart}`;
      } else {
        this._model = `${this.filterModel?.["ScheduledStepAttributesSequence.AccessionNumber"] || ""}`;
      }
      this.modelChange.emit(this.filterModel);
    } else if (this.filterModel && this.filterModel["PatientID"]) {
      let issuerPart = values_default(pickBy_default(this.filterModel, (value, key) => key != "PatientID"));
      issuerPart = j4care.removeLastEmptyStringsFromArray(issuerPart).join("&");
      if (issuerPart) {
        this._model = `${j4care.appendStringIfExist(this.filterModel["PatientID"], "^^^")}${issuerPart}`;
      } else {
        this._model = `${this.filterModel?.["PatientID"] || ""}`;
      }
      this.modelChange.emit(this.filterModel);
    } else if (this.filterModel && this.filterModel["AdmissionID"]) {
      let issuerPart = values_default(pickBy_default(this.filterModel, (value, key) => key != "AdmissionID"));
      issuerPart = j4care.removeLastEmptyStringsFromArray(issuerPart).join("&");
      if (issuerPart) {
        this._model = `${j4care.appendStringIfExist(this.filterModel["AdmissionID"], "^^^")}${issuerPart}`;
      } else {
        this._model = `${this.filterModel?.["AdmissionID"] || ""}`;
      }
      this.modelChange.emit(this.filterModel);
    }
  }
  togglePicker() {
    this.selectorOpen = !this.selectorOpen;
  }
  hardClear() {
    this.clearInnerModels();
    this.model = "";
    this.modelChange.emit(void 0);
  }
  filterChanged() {
    this.triggerExtraction();
    this.modelChange.emit(this.filterModel);
  }
  initSplitters() {
    this.splitters = [];
    if (this.issuers && this.issuers.length > 0) {
      Object.keys(this.suffixDropdownKeyConfig).forEach(suffixDropdownKey => {
        if (this.splitters.length === 0) {
          const configObject = this.suffixDropdownKeyConfig[suffixDropdownKey];
          if (hasIn_default(this.filterModel, configObject.mainKey)) {
            this.splitters[0] = configObject.mergeChar;
            this.issuers.forEach((issuer, i) => {
              if (i > 0 && i < this.issuers.length - 1) {
                this.splitters[i] = configObject.suffixSplitChar;
              }
            });
          }
        }
      });
    }
  }
  triggerExtraction(value) {
    try {
      if (value || this._model) {
        value = value || this._model;
        let modelTemp = value;
        this.initSplitters();
        this.filterModel = this.extractModelsFromString(modelTemp, this.filterModel, this.issuers, this.splitters);
        this.set();
        this.modelChange.emit(this.filterModel);
      } else {
        this.clearInnerModels();
      }
    } catch (e) {}
  }
  extractModelsFromString(model, filterModel = this.filterModel, issuers = this.issuers, splitters = this.splitters) {
    try {
      if (model) {
        console.log("suffixDropdownKeyConfig", this.suffixDropdownKeyConfig);
        issuers.forEach((value, i) => {
          const split = splitters[i] || "&";
          let splitted = model.split(split);
          filterModel[issuers[i].key] = splitted[0].replace(/\&/g, "").replace(/\^/g, "") || "";
          splitted.shift();
          model = splitted.join(split);
        });
        return filterModel;
      }
    } catch (e) {
      return filterModel;
    }
  }
  trackById(index, item) {
    return item.key || index;
  }
  clearInnerModels() {
    this.issuers.forEach(issue => {
      this.filterModel[issue.key] = "";
    });
    this._model = "";
  }
}, _a16.ctorParameters = () => [], _a16.propDecorators = {
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  issuers: [{
    type: Input
  }],
  model: [{
    type: Input,
    args: ["model"]
  }],
  modelChange: [{
    type: Output
  }]
}, _a16);
IssuerSelectorComponent = __decorate([Component({
  selector: "issuer-selector",
  template: issuer_selector_component_default,
  imports: [NgClass, FormsModule, CommonModule],
  standalone: true,
  styles: [issuer_selector_component_default2]
})], IssuerSelectorComponent);

// angular:jit:template:src\app\widgets\code-selector\code-selector.component.html
var code_selector_component_default = `<div class="code_selector">\r
    <div class="main_input_block" title="{{title}}">\r
        <input class="main_input" [ngClass]="{'ng-invalid':(!maiInputValid)}" type="text" [(ngModel)]="model" placeholder="{{placeholder}}"  (ngModelChange)="filterChanged()" (click)="selectorOpen = true">\r
        <span *ngIf="model" class="glyphicon glyphicon-remove clear_picker" (click)="hardClear()"></span>\r
        <i class="material-icons filter_button" (click)="togglePicker()">\r
            subdirectory_arrow_right\r
        </i>\r
        <ng-container *ngIf="selectorOpen">\r
            <div class="overlay" (click)="selectorOpen = false">\r
            </div>\r
            <div class="content_block">\r
                <h5 class="title" *ngIf="title">{{title}}</h5>\r
                <div class="codes" *ngFor="let code of codes">\r
                    <div class="code" title="{{code.key}}">\r
                        <label class="code_label">{{code.label}}</label>\r
                        <input type="text" class="code_model" [(ngModel)]="filterModel[code.key]">\r
                    </div>\r
                </div>\r
                <button class="set_button" (click)="set()" i18n="@@SET">SET</button>\r
            </div>\r
        </ng-container>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\widgets\code-selector\code-selector.component.scss
var code_selector_component_default2 = "/* src/app/widgets/code-selector/code-selector.component.scss */\n.main_input_block {\n  position: relative;\n  height: 27px;\n}\n.main_input_block .main_input {\n  width: 100%;\n  height: 100%;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  background: transparent;\n}\n.main_input_block .filter_button {\n  background: var(--backgroundColor);\n  color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 27px;\n}\n.main_input_block .filter_button:hover {\n  cursor: pointer;\n}\n.main_input_block .codes .code {\n  margin: 10px 0;\n  float: left;\n  width: 100%;\n}\n.main_input_block .codes .code .code_label {\n  width: 50%;\n  text-align: right;\n  padding-right: 10px;\n}\n.main_input_block .codes .code .code_model {\n  width: 50%;\n  float: right;\n}\n.content_block {\n  display: block;\n  position: absolute;\n  background: white;\n  z-index: 9999;\n  box-shadow: 7px 10px 10px 5px #444;\n  padding: 20px 15px;\n  min-width: 560px;\n  border-top: 20px solid var(--backgroundHoverColor);\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.content_block h5 {\n  font-size: 18px;\n}\n.content_block .set_button {\n  background: var(--backgroundHoverColor);\n  color: white;\n  border: 0;\n  width: 24%;\n  float: right;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.32);\n}\n.clear_picker {\n  position: absolute;\n  right: 25px;\n  top: 5px;\n}\n";

// src/app/widgets/code-selector/code-selector.component.ts
var _a17;
var CodeSelectorComponent = (_a17 = class {
  set model(value) {
    console.log("value", value);
    this._model = value;
  }
  get model() {
    return this._model;
  }
  constructor() {
    this.modelChange = new EventEmitter();
    this.selectorOpen = false;
    this.filterModel = {};
    this.maiInputValid = true;
  }
  ngOnInit() {}
  set() {
    this.model = `(${values_default(this.filterModel).join(", ")})`;
    this.modelChange.emit(this.filterModel);
    this.selectorOpen = false;
  }
  togglePicker() {
    this.selectorOpen = !this.selectorOpen;
  }
  hardClear() {
    this.model = "";
    this.modelChange.emit(void 0);
  }
  filterChanged() {}
}, _a17.ctorParameters = () => [], _a17.propDecorators = {
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  codes: [{
    type: Input
  }],
  model: [{
    type: Input,
    args: ["model"]
  }],
  modelChange: [{
    type: Output
  }]
}, _a17);
CodeSelectorComponent = __decorate([Component({
  selector: "code-selector",
  template: code_selector_component_default,
  imports: [NgClass, FormsModule, CommonModule],
  standalone: true,
  styles: [code_selector_component_default2]
})], CodeSelectorComponent);

// node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs
var _MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: __MatInternalFormField,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.0.0",
    type: __MatInternalFormField,
    isStandalone: true,
    selector: "div[mat-internal-form-field]",
    inputs: {
      labelPosition: "labelPosition"
    },
    host: {
      properties: {
        "class.mdc-form-field--align-end": 'labelPosition === "before"'
      },
      classAttribute: "mdc-form-field mat-internal-form-field"
    },
    ngImport: core_exports,
    template: "<ng-content></ng-content>",
    isInline: true,
    styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: _MatInternalFormField,
  decorators: [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }],
  propDecorators: {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  }
});

// node_modules/@angular/material/fesm2022/radio.mjs
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  /** Selected value for the radio group. */
  _value = null;
  /** The HTML name attribute applied to radio buttons in this group. */
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  /** The currently selected radio button. Should match value. */
  _selected = null;
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  _labelPosition = "after";
  /** Whether the radio group is disabled. */
  _disabled = false;
  /** Whether the radio group is required. */
  _required = false;
  /** Subscription to changes in amount of radio buttons. */
  _buttonChanges;
  /** The method to be called in order to update ngModel */
  _controlValueAccessorChangeFn = () => {};
  /**
   * onTouch function registered via registerOnTouch (ControlValueAccessor).
   * @docs-private
   */
  onTouched = () => {};
  /**
   * Event emitted when the group value changes.
   * Change events are only emitted when the value changes due to user interaction with
   * a radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** Child radio buttons. */
  _radios;
  /**
   * Theme color of the radio buttons in the group. This API is supported in M2
   * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  constructor() {}
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find(radio => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRadioGroup,
    deps: [],
    target: FactoryTarget.Directive
  });
  static ɵdir = ɵɵngDeclareDirective({
    minVersion: "16.1.0",
    version: "20.0.0",
    type: _MatRadioGroup,
    isStandalone: true,
    selector: "mat-radio-group",
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: ["disabled", "disabled", booleanAttribute],
      required: ["required", "required", booleanAttribute],
      disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    host: {
      attributes: {
        "role": "radiogroup"
      },
      classAttribute: "mat-mdc-radio-group"
    },
    providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }],
    queries: [{
      propertyName: "_radios",
      predicate: forwardRef(() => MatRadioButton),
      descendants: true
    }],
    exportAs: ["matRadioGroup"],
    ngImport: core_exports
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatRadioGroup,
  decorators: [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  }
});
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  /** The unique ID for the radio button. */
  id = this._uniqueId;
  /** Analog to HTML 'name' attribute used to group radios for unique selection. */
  name;
  /** Used to set the 'aria-label' attribute on the underlying input element. */
  ariaLabel;
  /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
  ariaLabelledby;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /** Whether ripples are disabled inside the radio button */
  disableRipple = false;
  /** Tabindex of the radio button. */
  tabIndex = 0;
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    if (value !== this._required) {
      this._changeDetector.markForCheck();
    }
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /**
   * Event emitted when the checked state of this radio button changes.
   * Change events are only emitted when the value changes due to user interaction with
   * the radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** The parent radio group. May or may not be present. */
  radioGroup;
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether this radio is checked. */
  _checked = false;
  /** Whether this radio is disabled. */
  _disabled;
  /** Whether this radio is required. */
  _required;
  /** Value assigned to this radio. */
  _value = null;
  /** Unregister function for _radioDispatcher */
  _removeUniqueSelectionListener = () => {};
  /** Previous value of the input's tabindex. */
  _previousTabIndex;
  /** The native `<input type=radio>` element */
  _inputElement;
  /** Trigger elements for the ripple events. */
  _rippleTrigger;
  /** Whether animations are disabled. */
  _noopAnimations = _animationsDisabled();
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event2) {
    event2.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event2) {
    this._onInputInteraction(event2);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Called when the input is clicked. */
  _onInputClick = event2 => {
    if (this.disabled && this.disabledInteractive) {
      event2.preventDefault();
    }
  };
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group2 = this.radioGroup;
    let value;
    if (!group2 || !group2.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group2.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group2 && group2.selected && group2.selected !== this && document.activeElement === input) {
              group2.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRadioButton,
    deps: [],
    target: FactoryTarget.Component
  });
  static ɵcmp = ɵɵngDeclareComponent({
    minVersion: "16.1.0",
    version: "20.0.0",
    type: _MatRadioButton,
    isStandalone: true,
    selector: "mat-radio-button",
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
      disableRipple: ["disableRipple", "disableRipple", booleanAttribute],
      tabIndex: ["tabIndex", "tabIndex", value => value == null ? 0 : numberAttribute(value)],
      checked: ["checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: ["disabled", "disabled", booleanAttribute],
      required: ["required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    host: {
      listeners: {
        "focus": "_inputElement.nativeElement.focus()"
      },
      properties: {
        "attr.id": "id",
        "class.mat-primary": 'color === "primary"',
        "class.mat-accent": 'color === "accent"',
        "class.mat-warn": 'color === "warn"',
        "class.mat-mdc-radio-checked": "checked",
        "class.mat-mdc-radio-disabled": "disabled",
        "class.mat-mdc-radio-disabled-interactive": "disabledInteractive",
        "class._mat-animation-noopable": "_noopAnimations",
        "attr.tabindex": "null",
        "attr.aria-label": "null",
        "attr.aria-labelledby": "null",
        "attr.aria-describedby": "null"
      },
      classAttribute: "mat-mdc-radio-button"
    },
    viewQueries: [{
      propertyName: "_inputElement",
      first: true,
      predicate: ["input"],
      descendants: true
    }, {
      propertyName: "_rippleTrigger",
      first: true,
      predicate: ["formField"],
      descendants: true,
      read: ElementRef,
      static: true
    }],
    exportAs: ["matRadioButton"],
    ngImport: core_exports,
    template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
    styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'],
    dependencies: [{
      kind: "directive",
      type: MatRipple,
      selector: "[mat-ripple], [matRipple]",
      inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"],
      exportAs: ["matRipple"]
    }, {
      kind: "component",
      type: _MatInternalFormField,
      selector: "div[mat-internal-form-field]",
      inputs: ["labelPosition"]
    }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatRadioButton,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n']
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    id: [{
      type: Input
    }],
    name: [{
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
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: value => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  }
});
var MatRadioModule = class _MatRadioModule {
  static ɵfac = ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRadioModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static ɵmod = ɵɵngDeclareNgModule({
    minVersion: "14.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRadioModule,
    imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
    exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
  });
  static ɵinj = ɵɵngDeclareInjector({
    minVersion: "12.0.0",
    version: "20.0.0",
    ngImport: core_exports,
    type: _MatRadioModule,
    imports: [MatCommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
  });
};
ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.0.0",
  ngImport: core_exports,
  type: MatRadioModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }]
});

// angular:jit:template:src\app\widgets\dropdown\dropdown.component.html
var dropdown_component_default = `    <!--selectedDropdown:{{selectedDropdown|json}}-->\r
<div class="j4care_dropdown" (clickOutside)="showDropdown = false" [clickOutsideExceptionClass]="['option', 'dropdown_input', 'input_part', 'selected_value', 'glyphicon-triangle-bottom', 'select']">\r
    <div class="dropdown_input" (click)="toggleDropdown()">\r
        <div class="input_part">\r
            <ng-container *ngIf="multiSelectMode">\r
                <div class="selected_value" *ngIf="multiSelectValue && multiSelectValue.length > 0 && multiSelectValue.length <= maxSelectedValueShown">{{multiSelectValue}}</div>\r
                <div class="selected_value" *ngIf="multiSelectValue && multiSelectValue.length > maxSelectedValueShown">( {{multiSelectValue.length}} ) <ng-container i18n="@@selected">selected</ng-container></div>\r
                <div class="selected_value" *ngIf="!multiSelectValue || multiSelectValue.length === 0">{{placeholder}}</div>\r
            </ng-container>\r
            <ng-container *ngIf="!multiSelectMode && (selectedValue && selectedDropdown)">\r
                <div class="selected_value" *ngIf="!(selectedDropdown && selectedDropdown.htmlLabel)">{{selectedDropdown.label || selectedDropdown.text || selectedDropdown.value}}</div>\r
                <div class="selected_value" *ngIf="selectedDropdown && selectedDropdown.htmlLabel" [innerHTML]="selectedDropdown.htmlLabel"></div>\r
            </ng-container>\r
            <div *ngIf="!(selectedValue && selectedDropdown) && !multiSelectMode" class="selected_value empty_field">{{placeholder}}</div>\r
        </div>\r
        <span class="glyphicon glyphicon-triangle-bottom"></span>\r
    </div>\r
    <div class="select" [@showHide]="showDropdown ? 'show':'hide'" >\r
        <div action="" class="search_block" *ngIf="showSearchField">\r
            <input type="checkbox" [(ngModel)]="isAllCheck"(change)="allChecked($event)">\r
            <input type="text" i18n-placeholder="@@search" placeholder="Search" [(ngModel)]="search" (keyup)="searchEvent()">\r
        </div>\r
        <ng-content></ng-content>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dropdown\dropdown.component.scss
var dropdown_component_default2 = "/* src/app/widgets/dropdown/dropdown.component.scss */\n.j4care_dropdown {\n  float: left;\n  position: relative;\n  width: 100%;\n}\n.j4care_dropdown .dropdown_input {\n  min-width: 100px;\n  border-bottom: 1px solid #cccccc;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 7px;\n}\n.j4care_dropdown .dropdown_input:hover {\n  cursor: pointer;\n}\n.j4care_dropdown .dropdown_input span.glyphicon-triangle-bottom {\n  width: 10px;\n  font-size: 9px;\n}\n.j4care_dropdown .dropdown_input .input_part {\n  width: calc(100% - 10px);\n  display: inline-block;\n  float: left;\n  min-height: 25px;\n}\n.j4care_dropdown .dropdown_input .selected_value.empty_field {\n  font-style: italic;\n  color: #444;\n}\n.j4care_dropdown .dropdown_input .selected_value:hover,\n.j4care_dropdown .dropdown_input .selected_value *:hover {\n  cursor: pointer;\n}\n.j4care_dropdown .select {\n  -webkit-box-shadow: 2px 2px 11px 0px #333;\n  -moz-box-shadow: 2px 2px 11px 0px #333;\n  box-shadow: 2px 2px 11px 0px #333;\n  position: fixed;\n  background: white;\n  z-index: 99999;\n  min-width: 200px;\n  max-height: 250px;\n  overflow: auto;\n  margin-bottom: 5px;\n}\n.j4care_dropdown .search_block {\n  width: 98%;\n  height: 30px;\n  float: left;\n  margin-left: 2px;\n}\n.j4care_dropdown .search_block input[type=text] {\n  width: calc(100% - 37px);\n  float: left;\n}\n.j4care_dropdown .search_block input[type=checkbox] {\n  width: 35px;\n  float: left;\n  margin-top: 9px;\n}\n";

// angular:jit:style:inline:src\app\widgets\dropdown\option.component.ts;CiAgICAgICAgLm9wdGlvbi5hY3RpdmUgewogICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjOwogICAgICAgIH0KCiAgICAgICAgLm9wdGlvbiB7CiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4OwogICAgICAgIH0KCiAgICAgICAgLm9wdGlvbjpob3ZlciB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMzYsIDQzLCAwLjEpOwogICAgICAgIH0KICAgIA==
var option_component_default = "/* angular:styles/component:css;da409288fb196150f337f4d9723c956a41a29c0c897944734c41226c5843176c;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\dropdown\\option.component.ts */\n.option.active {\n  background: #cccccc;\n}\n.option {\n  padding: 5px 10px;\n}\n.option:hover {\n  cursor: pointer;\n  background: rgba(28, 36, 43, 0.1);\n}\n";

// src/app/widgets/dropdown/option.component.ts
var _a18;
var OptionComponent = (_a18 = class {
  constructor(parent) {
    this.parent = parent;
    this._selected = false;
    this.multiSelectMode = false;
    this.selectEvent = new EventEmitter();
    this.showElement = true;
  }
  ngOnInit() {}
  select(e) {
    this.selectEvent.emit(this);
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
}, _a18.ctorParameters = () => [{
  type: ElementRef
}], _a18.propDecorators = {
  value: [{
    type: Input
  }],
  htmlLabel: [{
    type: Input
  }],
  title: [{
    type: Input
  }]
}, _a18);
OptionComponent = __decorate([Component({
  selector: "j4care-option",
  template: `
        <div [hidden]="!showElement" class="option" (click)="select($event)" #options [ngClass]="{'active':selected}"
             title="{{title || ''}}">
            <div *ngIf="htmlLabel" [innerHTML]="htmlLabel"></div>
            <input type="checkbox" *ngIf="value && value != '' && multiSelectMode" [(ngModel)]="selected">
            <ng-content *ngIf="!htmlLabel">
            </ng-content>
        </div>
    `,
  imports: [FormsModule, NgClass, CommonModule],
  standalone: true,
  styles: [option_component_default]
})], OptionComponent);

// src/app/widgets/dropdown/dropdown.component.ts
var _a19;
var DropdownComponent = (_a19 = class {
  set model(value) {
    if (!(this.selectedDropdown && this.selectedDropdown.value === value) && !this.multiSelectMode) {
      this.selectedValue = value;
      this.selectedDropdown = this.getSelectDropdownFromValue(value);
      this.setSelectedElement();
    } else {
      this.multiSelectValue = value;
      this.setSelectedElement();
    }
  }
  constructor() {
    this.multiSelectMode = false;
    this.showSearchField = false;
    this.maxSelectedValueShown = 2;
    this.modelChange = new EventEmitter();
    this.showDropdown = false;
    this.multiSelectValue = [];
    this.search = "";
    this.isAllCheck = false;
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  ngAfterContentInit() {
    this.children.forEach(result => {
      setTimeout(() => {
        result.multiSelectMode = this.multiSelectMode;
      }, 100);
      result.selectEvent.subscribe(e => {
        if (this.multiSelectMode) {
          if (e.value === "") {
            this.multiSelectValue = [];
            this.isAllCheck = false;
          } else {
            if (this.multiSelectValue && this.multiSelectValue.indexOf(e.value) > -1) {
              this.multiSelectValue.splice(this.multiSelectValue.indexOf(e.value), 1);
            } else {
              this.multiSelectValue = this.multiSelectValue || [];
              this.multiSelectValue.push(e.value);
            }
          }
          this.modelChange.emit(this.multiSelectValue);
        } else {
          this.modelChange.emit(e.value);
          this.showDropdown = false;
        }
        console.log("multiSelectValue", this.multiSelectValue);
      });
    });
    if (this.selectedValue) {
      this.selectedDropdown = this.getSelectDropdownFromValue(this.selectedValue);
    }
  }
  searchEvent() {
    this.children.forEach(childe => {
      if (childe.value.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || childe.htmlLabel && JSON.stringify(childe.htmlLabel).toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
        childe.showElement = true;
      } else {
        childe.showElement = false;
      }
    });
  }
  allChecked(e) {
    console.log("e", e);
    console.log("checked", e.target.checked);
    console.log("isAllCheck", this.isAllCheck);
    if (!this.isAllCheck) {
      this.multiSelectValue = [];
    }
    this.children.forEach(element => {
      element.selected = this.isAllCheck;
      if (this.isAllCheck) {
        this.multiSelectValue.push(element.value);
      }
    });
  }
  getSelectDropdownFromValue(value) {
    let endDropdown = new SelectDropdown(value, "");
    if (value && this.children) {
      this.children.forEach(element => {
        if (element.value === value) {
          endDropdown = element;
        }
      });
    }
    return endDropdown;
  }
  setSelectedElement() {
    if (this.multiSelectMode) {
      if (this.children && this.multiSelectValue) {
        let count = 0;
        this.children.forEach(element => {
          if (this.multiSelectValue.indexOf(element.value) > -1) {
            element.selected = true;
            count++;
          } else {
            element.selected = false;
          }
        });
        if (count === this.children.length - 1) {
          this.isAllCheck = true;
        }
      }
    } else {
      if (this.children && this.selectedValue) {
        this.children.forEach(element => {
          if (element.value === this.selectedValue || element.value === this.selectedValue) {
            element.selected = true;
          } else {
            element.selected = false;
          }
        });
      }
    }
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      this.setSelectedElement();
    }, 100);
  }
}, _a19.ctorParameters = () => [], _a19.propDecorators = {
  placeholder: [{
    type: Input
  }],
  multiSelectMode: [{
    type: Input
  }],
  showSearchField: [{
    type: Input
  }],
  maxSelectedValueShown: [{
    type: Input
  }],
  model: [{
    type: Input,
    args: ["model"]
  }],
  template: [{
    type: ContentChild,
    args: [OptionComponent, {
      static: true
    }]
  }],
  children: [{
    type: ContentChildren,
    args: [OptionComponent]
  }],
  modelChange: [{
    type: Output
  }]
}, _a19);
DropdownComponent = __decorate([Component({
  selector: "j4care-select",
  template: dropdown_component_default,
  animations: [trigger("showHide", [state("show", style({
    padding: "*",
    height: "*",
    opacity: 1
  })), state("hide", style({
    padding: "0",
    opacity: 0,
    height: "0px",
    margin: "0"
  })), transition("show => hide", [animate("0.1s")]), transition("hide => show", [animate("0.2s cubic-bezier(.52,-0.01,.15,1)")])])],
  imports: [FormsModule, ClickOutsideDirective, CommonModule],
  standalone: true,
  styles: [dropdown_component_default2]
})], DropdownComponent);

// angular:jit:template:src\app\widgets\person-name-picker\person-name-picker.component.html
var person_name_picker_component_default = `<div class="patient_name_picker" [ngClass]="{'open':dialogOpen}">\r
    <div class="input_field">\r
        <div class="input_block">\r
            <input type="text" [(ngModel)]="internModel" placeholder="{{placeholder}}" title="{{title}}" (ngModelChange)="onInternModelChange($event)">\r
            <span class="glyphicon glyphicon-remove" *ngIf="internModel" (click)="clear()"></span>\r
        </div>\r
        <span class="glyphicon glyphicon-pencil" (click)="toggleDialog()"></span>\r
    </div>\r
    <div class="overlay" *ngIf="dialogOpen" (click)="dialogOpen = false"></div>\r
    <div class="dialog" [hidden]="!dialogOpen">\r
        <div class="dialog_block">\r
            <h5>Person Name Components:</h5>\r
<!--            <div class="dicom_components" (keyup)="onComponentChange()">\r
                <input type="text" [(ngModel)]="familyName" placeholder="Family Name" title="Family Name">\r
                <span>^</span>\r
                <input type="text" [(ngModel)]="givenName" placeholder="Given Name" title="Given Name">\r
                <span>^</span>\r
                <input type="text" [(ngModel)]="middleName" placeholder="Middle Name" title="Middle Name">\r
                <span>^</span>\r
                <input type="text" [(ngModel)]="namePrefix" placeholder="Prefix" title="Name Prefix">\r
                <span>^</span>\r
                <input type="text" [(ngModel)]="nameSuffix" placeholder="Suffix" title="Name Suffix">\r
            </div>-->\r
            <div class="table" (keyup)="onComponentChange()">\r
                <div class="tr">\r
                    <div class="th"></div>\r
                    <div class="th">Family Name</div>\r
                    <div class="th">Given Name</div>\r
                    <div class="th">Middle Name</div>\r
                    <div class="th">Prefix</div>\r
                    <div class="th">Suffix</div>\r
                </div>\r
                <div class="tr" (click)="mode('alphabetic')" [ngClass]="{'active':inputMode ==='alphabetic'}">\r
                    <div class="td"><span>Alphabetic</span></div>\r
                    <div class="td"><input type="text" [(ngModel)]="familyName" placeholder="Family Name" title="Family Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="givenName" placeholder="Given Name" title="Given Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="middleName" placeholder="Middle Name" title="Middle Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="namePrefix" placeholder="Prefix" title="Name Prefix"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="nameSuffix" placeholder="Suffix" title="Name Suffix"></div>\r
                </div>\r
                <div class="tr"  (click)="mode('ideographic')"  [ngClass]="{'active':inputMode ==='ideographic'}">\r
                    <div class="td"><span>Ideographic</span></div>\r
                    <div class="td"><input type="text" [(ngModel)]="i_familyName" placeholder="Family Name" title="Family Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="i_givenName" placeholder="Given Name" title="Given Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="i_middleName" placeholder="Middle Name" title="Middle Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="i_namePrefix" placeholder="Prefix" title="Name Prefix"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="i_nameSuffix" placeholder="Suffix" title="Name Suffix"></div>\r
                </div>\r
                <div class="tr"  (click)="mode('phonetic')"  [ngClass]="{'active':inputMode ==='phonetic'}">\r
                    <div class="td"><span>Phonetic</span></div>\r
                    <div class="td"><input type="text" [(ngModel)]="p_familyName" placeholder="Family Name" title="Family Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="p_givenName" placeholder="Given Name" title="Given Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="p_middleName" placeholder="Middle Name" title="Middle Name"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="p_namePrefix" placeholder="Prefix" title="Name Prefix"></div>\r
                    <div class="td"><input type="text" [(ngModel)]="p_nameSuffix" placeholder="Suffix" title="Name Suffix"></div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="dialog_block"  *ngIf=" namePrefix || givenName || middleName || familyName || nameSuffix || asFilterModel">\r
            <h5>DICOM version ( Will be used as filter ):</h5>\r
            <div>\r
                {{asFilterModel}}\r
            </div>\r
\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\widgets\person-name-picker\person-name-picker.component.scss
var person_name_picker_component_default2 = "/* src/app/widgets/person-name-picker/person-name-picker.component.scss */\n.patient_name_picker {\n  position: relative;\n  color: black;\n}\n.patient_name_picker .input_field {\n  display: grid;\n  grid-template-columns: auto 26px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.patient_name_picker .input_field input {\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.patient_name_picker .input_field span.glyphicon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #161d23;\n  color: white;\n}\n.patient_name_picker .input_field span.glyphicon:hover {\n  cursor: pointer;\n}\n.patient_name_picker .input_field .input_block {\n  position: relative;\n}\n.patient_name_picker .input_field .input_block span.glyphicon-remove {\n  display: none;\n  position: absolute;\n  right: 3px;\n  top: 7px;\n  background: transparent;\n  color: black;\n}\n.patient_name_picker .input_field .input_block span.glyphicon-remove:hover {\n  cursor: pointer;\n}\n.patient_name_picker .input_field:hover .input_block span.glyphicon-remove {\n  display: block;\n}\n.patient_name_picker .dialog {\n  position: absolute;\n  background: white;\n  padding: 20px;\n  -webkit-box-shadow: 3px 4px 8px #cccccc;\n  -moz-box-shadow: 3px 4px 8px #cccccc;\n  box-shadow: 3px 4px 8px #cccccc;\n  z-index: 1001;\n}\n.patient_name_picker .dialog .dialog_block {\n  margin-bottom: 10px;\n  float: left;\n  padding-bottom: 10px;\n  width: 100%;\n}\n.patient_name_picker .dialog .dialog_block .table {\n  min-width: 600px;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  display: grid;\n  box-shadow: none;\n}\n.patient_name_picker .dialog .dialog_block .table .tr {\n  display: grid;\n  grid-template-columns: 100px 1fr 1fr 1fr 70px 70px;\n}\n.patient_name_picker .dialog .dialog_block .table .tr.active .td,\n.patient_name_picker .dialog .dialog_block .table .tr.active .th {\n  color: black;\n  border: 1px solid rgba(0, 0, 0, 0.768627451);\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.768627451);\n}\n.patient_name_picker .dialog .dialog_block .table .tr.active .td input,\n.patient_name_picker .dialog .dialog_block .table .tr.active .th input {\n  width: 100%;\n  min-width: 50px;\n  color: black;\n}\n.patient_name_picker .dialog .dialog_block .table .tr.active .td input::placeholder,\n.patient_name_picker .dialog .dialog_block .table .tr.active .th input::placeholder {\n  color: #666666;\n}\n.patient_name_picker .dialog .dialog_block .table .tr .td,\n.patient_name_picker .dialog .dialog_block .table .tr .th {\n  color: rgba(51, 51, 51, 0.5607843137);\n}\n.patient_name_picker .dialog .dialog_block .table .tr .td input,\n.patient_name_picker .dialog .dialog_block .table .tr .th input {\n  width: 100%;\n  height: 100%;\n  min-width: 50px;\n  color: rgba(51, 51, 51, 0.5607843137);\n}\n.patient_name_picker .dialog .dialog_block .table .tr .td input::placeholder,\n.patient_name_picker .dialog .dialog_block .table .tr .th input::placeholder {\n  color: rgba(51, 51, 51, 0.5607843137);\n}\n.patient_name_picker .dialog .dialog_block .table .tr .td span,\n.patient_name_picker .dialog .dialog_block .table .tr .th span {\n  padding: 3px 7px;\n  height: 30px;\n  line-height: 30px;\n}\n.patient_name_picker .dialog .dialog_block .table .tr .th {\n  color: black;\n}\n.patient_name_picker .dialog h5 {\n  font-weight: bold;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n.patient_name_picker .dialog input {\n  color: black;\n}\n.patient_name_picker .dialog input::placeholder {\n  color: black;\n}\n.patient_name_picker .dicom_components {\n  display: grid;\n  grid-template-columns: 90px 10px 90px 10px 90px 10px 60px 10px 60px;\n  float: left;\n}\n.patient_name_picker .dicom_components span {\n  display: flex;\n  justify-content: center;\n}\n.patient_name_picker.open .input_field input {\n  z-index: 1002;\n  position: relative;\n  background: white;\n  color: black;\n}\n.patient_name_picker.open .input_field:hover .input_block span.glyphicon-remove {\n  display: block;\n  z-index: 10004;\n}\n";

// src/app/widgets/person-name-picker/person-name-picker.service.ts
var _a20;
var PersonNamePickerService = (_a20 = class {
  constructor(appService) {
    this.appService = appService;
    this.nameKeys = PATIENT_NAME_PARTS;
  }
  convertPNameFromFormattedToDicomForm(inputPersonName, format = `{NAME-PREFIX} {GIVEN-NAME} {MIDDLE-NAME} {FAMILY-NAME}, {NAME-SUFFIX}`) {
    if (inputPersonName.indexOf("^") > -1) {
      return inputPersonName;
    }
    let splittedName = this.splitToModules(inputPersonName);
    let splittedFormat = this.splitToModules(format);
    let collectedParts = {};
    if (splittedFormat.length === splittedName.length) {
      this.mapOnEqual(splittedFormat, splittedName, collectedParts);
    } else {
      let usedText = [];
      splittedFormat = splittedFormat.filter((format2, i) => {
        let check = true;
        if (format2.indexOf("PREFIX") > -1 || format2.indexOf("SUFFIX") > -1) {
          splittedName = splittedName.filter(name => {
            if (name && name.indexOf(".") > -1) {
              let cleanedFormatPart = this.nameKeys.filter(e => format2.indexOf(e) > -1)[0];
              const extractedString = this.extractPatientComponent(splittedFormat[i], cleanedFormatPart, name);
              if (cleanedFormatPart && !collectedParts[cleanedFormatPart] && usedText.indexOf(extractedString) === -1) {
                collectedParts[cleanedFormatPart] = extractedString;
                usedText.push(extractedString);
                check = false;
                return false;
              }
            }
            return true;
          });
        }
        return check;
      });
      if (splittedFormat.length > splittedName.length) {
        [splittedFormat, splittedName] = this.equalizeFormatWithNameComponents(splittedFormat, splittedName);
        this.mapOnEqual(splittedFormat, splittedName, collectedParts);
      }
    }
    return this.addCarets(collectedParts["FAMILY-NAME"] || "", collectedParts["GIVEN-NAME"] || "", collectedParts["MIDDLE-NAME"] || "", collectedParts["NAME-PREFIX"] || "", collectedParts["NAME-SUFFIX"] || "");
  }
  mapOnEqual(formats, names, collectedParts) {
    for (let i = 0; i < formats.length; i++) {
      let cleanedFormatPart = this.nameKeys.filter(e => formats[i].indexOf(e) > -1)[0];
      if (cleanedFormatPart) {
        collectedParts[cleanedFormatPart] = this.extractPatientComponent(formats[i], cleanedFormatPart, names[i]);
      }
    }
  }
  equalizeFormatWithNameComponents(formats, names) {
    try {
      if (formats.length > names.length) {
        formats = this.removeFormatComponentByProbability(formats);
      } else {
        if (formats.length === names.length) {
          return [formats, names];
        } else {
          names = j4care.mergeArrayAtPosition(names, 0);
        }
      }
      return this.equalizeFormatWithNameComponents(formats, names);
    } catch (e) {}
  }
  removeFormatComponentByProbability(formats) {
    try {
      let removed = 0;
      let filtered;
      PERSON_NAME_PARTS_BY_LES_PROBABILITY.every(nameComponent => {
        filtered = formats.filter(format => {
          if (format.indexOf(nameComponent) > -1) {
            removed++;
            return false;
          } else {
            return true;
          }
        });
        if (removed > 0) {
          return false;
        }
        return true;
      });
      return filtered;
    } catch (e) {
      return formats;
    }
  }
  extractPatientComponent(formatterKey, key, string) {
    try {
      const regexString = formatterKey.replace(`{${key}}`, `([\\w. *-]+)`);
      const regex = new RegExp(regexString);
      let extracted = regex.exec(string);
      return extracted[1];
    } catch (e) {
      return string;
    }
  }
  splitToModules(string) {
    const splitted = string.split(" ");
    let prev = "";
    let newArray = [];
    splitted.forEach((el, i) => {
      if (prev.indexOf(".") > -1 && el.indexOf(".") > -1) {
        if (newArray.length > 0) {
          newArray.splice(newArray.length - 1, 1);
        }
        newArray.push(prev + " " + el);
      } else {
        newArray.push(el);
      }
      prev = el;
    });
    return newArray;
  }
  convertPNameFromDicomFormToFormatted(input, format = `{NAME-PREFIX} {GIVEN-NAME} {MIDDLE-NAME} {FAMILY-NAME}, {NAME-SUFFIX}`) {
    const formatPipe = new PersonNamePipe();
    return formatPipe.transform(input.replace(/\*/, ""), format);
  }
  addCarets(familyName, givenName, middleName, namePrefix, nameSuffix) {
    let collected = [familyName, givenName, middleName, namePrefix, nameSuffix];
    if (collected.join("") != "") {
      collected = this.removeLastEmptyParts(collected);
    }
    return collected.map(element => element == "" || element == void 0 ? "*" : element).join("^");
  }
  removeLastEmptyParts(array) {
    let stop = false;
    while (array.length > 0 && !stop) {
      if (array[array.length - 1] == "" || array[array.length - 1] == void 0) {
        array = array.slice(0, -1);
      } else {
        stop = true;
      }
    }
    return array;
  }
}, _a20.ctorParameters = () => [{
  type: AppService
}], _a20);
PersonNamePickerService = __decorate([Injectable({
  providedIn: "root"
})], PersonNamePickerService);

// src/app/widgets/person-name-picker/person-name-picker.component.ts
var _a21;
var PersonNamePickerComponent = (_a21 = class {
  get model() {
    return this._model;
  }
  set model(value) {
    this._model = value;
    this.asFilterModel = value;
    if (!this._internModel) {
      this.internModel = value;
    }
  }
  constructor(appService, personNameService) {
    this.appService = appService;
    this.personNameService = personNameService;
    this.dialogOpen = false;
    this._asFilterModel = "";
    this.inputMode = "alphabetic";
    this.format = `{NAME-PREFIX} {GIVEN-NAME} {MIDDLE-NAME} {FAMILY-NAME}, {NAME-SUFFIX}`;
    this.modelChange = new EventEmitter();
  }
  ngOnInit() {
    this._internModel = this.model;
    if (hasIn_default(this.appService, "global.personNameFormat")) {
      this.format = this.appService.global.personNameFormat;
    }
  }
  onInternModelChange(e) {
    if (this._internModel && this._internModel.indexOf(" ") > -1) {
      this.asFilterModel = this.personNameService.convertPNameFromFormattedToDicomForm(this._internModel, this.format);
      [this.familyName, this.givenName, this.middleName, this.namePrefix, this.nameSuffix] = this._asFilterModel.split("^");
    } else {
      if (this._internModel != "" && this._internModel.indexOf(" ") === -1) {
        this.asFilterModel = this._internModel;
        this.familyName = "";
        this.givenName = "";
        this.middleName = "";
        this.namePrefix = "";
        this.nameSuffix = "";
      } else {
        this.asFilterModel = "";
        this.familyName = "";
        this.givenName = "";
        this.middleName = "";
        this.namePrefix = "";
        this.nameSuffix = "";
      }
    }
  }
  toggleDialog() {
    this.dialogOpen = !this.dialogOpen;
  }
  get internModel() {
    return this._internModel;
  }
  set internModel(value) {
    this._internModel = value;
  }
  onComponentChange() {
    let collected;
    let filterPrefix = "";
    if (this.inputMode === "ideographic") {
      collected = [this.i_familyName, this.i_givenName, this.i_middleName, this.i_namePrefix, this.i_nameSuffix];
      filterPrefix = "=";
    } else if (this.inputMode === "phonetic") {
      collected = [this.p_familyName, this.p_givenName, this.p_middleName, this.p_namePrefix, this.p_nameSuffix];
      filterPrefix = "==";
    } else {
      collected = [this.familyName, this.givenName, this.middleName, this.namePrefix, this.nameSuffix];
    }
    if (collected.join("") != "") {
      this.asFilterModel = filterPrefix + this.personNameService.addCarets(collected[0], collected[1], collected[2], collected[3], collected[4]);
      this._internModel = this.personNameService.convertPNameFromDicomFormToFormatted(this._asFilterModel, this.format);
    } else {
      this.asFilterModel = "";
      this._internModel = "";
    }
  }
  get asFilterModel() {
    return this._asFilterModel;
  }
  set asFilterModel(value) {
    this._asFilterModel = value;
    this.modelChange.emit(value);
  }
  clear() {
    this._internModel = "";
    this.onInternModelChange(void 0);
  }
  mode(mode) {
    this.inputMode = mode;
    this.onComponentChange();
  }
}, _a21.ctorParameters = () => [{
  type: AppService
}, {
  type: PersonNamePickerService
}], _a21.propDecorators = {
  placeholder: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  familyName: [{
    type: Input
  }],
  givenName: [{
    type: Input
  }],
  middleName: [{
    type: Input
  }],
  namePrefix: [{
    type: Input
  }],
  nameSuffix: [{
    type: Input
  }],
  i_familyName: [{
    type: Input
  }],
  i_givenName: [{
    type: Input
  }],
  i_middleName: [{
    type: Input
  }],
  i_namePrefix: [{
    type: Input
  }],
  i_nameSuffix: [{
    type: Input
  }],
  p_familyName: [{
    type: Input
  }],
  p_givenName: [{
    type: Input
  }],
  p_middleName: [{
    type: Input
  }],
  p_namePrefix: [{
    type: Input
  }],
  p_nameSuffix: [{
    type: Input
  }],
  model: [{
    type: Input
  }],
  modelChange: [{
    type: Output
  }]
}, _a21);
PersonNamePickerComponent = __decorate([Component({
  selector: "person-name-picker",
  template: person_name_picker_component_default,
  imports: [NgClass, FormsModule, CommonModule],
  standalone: true,
  styles: [person_name_picker_component_default2]
})], PersonNamePickerComponent);

// angular:jit:template:src\app\widgets\modality\modality.component.html
var modality_component_default = `<input type="text" [(ngModel)]="model" (keyup)="selectModality(model)" (click)="showModalitySelector = !showModalitySelector" i18n-placeholder="@@modality" placeholder="Modality"  class="col-md-12 input_field"/>\r
<div class="modality_selector [hidden]" *ngIf="showModalitySelector"  (clickOutside)="closeFromOutside()" [clickOutsideExceptionClass]="['form-group','more_block','more','input_field', 'no-closing-on-click']">\r
  <a href="" (click)="showModalitySelector=false" class="close"><i class="glyphicon glyphicon-remove"></i></a>\r
  <div class="common">\r
    <a href="" *ngFor="let key of Object.keys(modalities.common)" (click)="$event.preventDefault();selectModality(key)" title="{{modalities.common[key]}}">{{key}}</a>\r
  </div>\r
  <button (click)="clear()" class="clear custom_button" i18n="@@Clear">Clear</button>\r
  <!-- <div class="col-md-12"></div> -->\r
  <a class="no-closing-on-click" (click)="$event.preventDefault();showMore=!showMore" class="more">\r
      <span class="no-closing-on-click" *ngIf="!showMore" class="">\r
          <span class="no-closing-on-click" i18n="@@modality.more">more</span><i class="no-closing-on-click glyphicon glyphicon-triangle-bottom"></i>\r
      </span>\r
      <span class="no-closing-on-click" *ngIf="showMore" >\r
          <span class="no-closing-on-click" i18n="@@modality.less">less</span><i class="no-closing-on-click glyphicon glyphicon-triangle-top"></i>\r
      </span>\r
  </a>\r
  <div class="more_block" *ngIf="showMore">\r
    <div class="more_buttons_block">\r
      <a href="" *ngFor="let key of Object.keys(modalities.more)" (click)="$event.preventDefault();selectModality(key)" title="{{modalities.more[key]}}">{{key}}</a>\r
    </div>\r
    <div class="form-group">\r
      <label i18n="@@custom_modality_code">Custom modality code:</label>\r
      <input [(ngModel)]="model" />\r
      <button (click)="add()" class="custom_button" i18n="@@Add">Add</button>\r
    </div>\r
  </div>\r
</div>`;

// angular:jit:style:inline:src\app\widgets\modality\modality.component.ts;CiAgICAgICAgLmlucHV0X2ZpZWxkIHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAg
var modality_component_default2 = "/* angular:styles/component:css;937518e0915bea44bfe5bffe9bca0891e744aca8a4ed8023595b6cdc75dce279;C:\\Users\\USER\\dcm4chee-arc-light\\dcm4chee-arc-ui2\\src\\app\\widgets\\modality\\modality.component.ts */\n.input_field {\n  width: 100%;\n}\n";

// src/app/widgets/modality/modality.component.ts
var _a22;
var ModalityComponent = (_a22 = class {
  constructor() {
    this.modelChange = new EventEmitter();
    this.Object = Object;
    this.showModalitySelector = false;
    this.showMore = false;
    this.modalities = Globalvar.MODALITIES;
  }
  selectModality(key) {
    this.model = key;
    this.modelChange.emit(this.model);
    this.showModalitySelector = false;
  }
  clear() {
    this.model = "";
    this.modelChange.emit(this.model);
    this.showModalitySelector = false;
  }
  closeFromOutside() {
    this.showModalitySelector = false;
  }
  add() {
    this.modelChange.emit(this.model);
    this.showModalitySelector = false;
  }
  ngOnInit() {}
}, _a22.ctorParameters = () => [], _a22.propDecorators = {
  model: [{
    type: Input
  }],
  modelChange: [{
    type: Output
  }]
}, _a22);
ModalityComponent = __decorate([Component({
  selector: "modality",
  template: modality_component_default,
  imports: [FormsModule, ClickOutsideDirective, CommonModule],
  standalone: true,
  styles: [modality_component_default2]
})], ModalityComponent);

// angular:jit:template:src\app\widgets\size-range-picker\size-range-picker.component.html
var size_range_picker_component_default = '\r\n<div class="size_range_picker" >\r\n    <div class="main_input_block">\r\n        <input class="main_input" type="text" [(ngModel)]="model" i18n-placeholder="@@placeholder.study_size_range"  placeholder="Study Size Range" i18n-title="@@title.size-range-picker.study_size_range_in_kb" title="Study Size Range in KB" (keyup)="keyUpMainInput()">\r\n        <span class="size_range_icon" (click)="togglePicker()"></span>\r\n    </div>\r\n    <div class="picker" *ngIf="showPicker">\r\n        <h5 i18n="@@size-range-picker.title">Set Size Range:</h5>\r\n        <div class="input_block" (keyup)="onInputChange()">\r\n            <div class="input_part">\r\n                <input class="min" type="number" min="1" [(ngModel)]="value.min" i18n-placeholder="@@placeholder.min" placeholder="min"/>\r\n                <span class="minus">-</span>\r\n                <input class="max" type="number" min="1" [(ngModel)]="value.max" i18n-placeholder="@@placeholder.max" placeholder="max"/>\r\n            </div>\r\n            <mat-select class="unit" [(ngModel)]="value.unit" i18n-placeholder="@@unit" placeholder="Unit" (selectionChange)="onInputChange()">\r\n                <mat-option value="">*</mat-option>\r\n                <mat-option *ngFor="let option of units" value="{{option.value}}" title="{{option.description || option.title}}">{{option.text}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <button (click)="setRange()" i18n="@@Set">Set</button>\r\n        <button class="clear" (click)="clear()" i18n="@@Clear">Clear</button>\r\n    </div>\r\n</div>\r\n<div class="overlay" *ngIf="showPicker" (click)="closeFromOutside()"></div>\r\n';

// angular:jit:style:src\app\widgets\size-range-picker\size-range-picker.component.scss
var size_range_picker_component_default2 = "/* src/app/widgets/size-range-picker/size-range-picker.component.scss */\n.size_range_picker {\n  position: relative;\n}\n.size_range_picker .main_input_block {\n  width: 100%;\n}\n.size_range_picker .main_input_block .main_input {\n  width: calc(100% - 27px);\n  float: left;\n  margin-top: 0;\n  border-right: none;\n}\n.size_range_picker .main_input_block .size_range_icon {\n  width: 27px;\n  display: inline-block;\n  height: 30px;\n  color: #ffffff;\n  float: right;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 30px;\n  top: 0;\n}\n.size_range_picker .main_input_block .size_range_icon:hover {\n  cursor: pointer;\n}\n.size_range_picker .main_input_block:hover .clear_picker {\n  display: block;\n}\n.size_range_picker .picker {\n  z-index: 1002;\n  float: left;\n  padding: 15px 20px;\n  display: block;\n  width: 400px;\n  min-height: 50px;\n  background: white;\n  position: absolute;\n  top: 28px;\n  -webkit-box-shadow: 2px 2px 13px 0px #777;\n  -moz-box-shadow: 2px 2px 13px 0px #777;\n  box-shadow: 2px 2px 13px 0px #777;\n}\n.size_range_picker .picker .min,\n.size_range_picker .picker .minus,\n.size_range_picker .picker .max,\n.size_range_picker .picker mat-select {\n  float: left;\n  border: none;\n}\n.size_range_picker .picker .min,\n.size_range_picker .picker .max,\n.size_range_picker .picker mat-select {\n  border-bottom: 1px solid #cccccc;\n}\n.size_range_picker .picker .min,\n.size_range_picker .picker .max {\n  width: calc(50% - 12px);\n}\n.size_range_picker .picker .minus {\n  width: 24px;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  color: black;\n}\n.size_range_picker .picker .input_block {\n  float: left;\n  margin-bottom: 20px;\n}\n.size_range_picker .picker .input_part {\n  float: left;\n  width: 70%;\n}\n.size_range_picker .picker mat-select {\n  width: calc(30% - 10px);\n  border: none;\n  border-left: 1px solid #ccc;\n  margin-left: 10px;\n  padding-left: 10px;\n}\n.size_range_picker .picker button {\n  background: var(--backgroundColor);\n  color: white;\n  border: 0;\n  width: 24%;\n  float: right;\n}\n.size_range_picker .picker button.clear {\n  margin-right: 4px;\n}\n.size_range_picker .picker button:hover {\n  background: var(--backgroundColorHover);\n}\n.size_range_picker .picker button {\n  width: calc(30% - 13px);\n}\n.size_range_picker .close {\n  position: absolute;\n  z-index: 999999;\n  right: 7px;\n  top: 7px;\n  font-size: 16px;\n}\n";

// src/app/widgets/size-range-picker/size-range-picker.component.ts
var _a23;
var SizeRangePickerComponent = (_a23 = class {
  constructor() {
    this.units = [new SelectDropdown("GB", "GB"), new SelectDropdown("MB", "MB"), new SelectDropdown("KB", "KB")];
    this.value = {
      min: "",
      max: "",
      unit: "MB"
    };
    this.showPicker = false;
    this.modelChange = new EventEmitter();
  }
  get model() {
    return this.modelValue;
  }
  set model(val) {
    this.modelValue = val;
    this.modelChange.emit(this.modelValue);
  }
  ngOnInit() {
    this.extractValueFromMainInput();
  }
  keyUpMainInput() {
    this.extractValueFromMainInput();
  }
  extractValueFromMainInput() {
    const regex = /(\d*) *(-) *(\d*)/;
    let m;
    if ((m = regex.exec(this.model)) !== null && m[2] === "-") {
      this.value.unit = "KB";
      this.value.min = m[1] || "";
      this.value.max = m[3] || "";
    }
  }
  togglePicker() {
    this.showPicker = !this.showPicker;
  }
  closeFromOutside() {
    if (this.showPicker) this.showPicker = false;
  }
  clear() {
    this.value = {
      min: "",
      max: "",
      unit: "MB"
    };
    this.updateValue();
  }
  setRange() {
    this.updateValue();
    this.togglePicker();
  }
  updateValue() {
    this.modelValue = this.value.min || this.value.max ? `${this.convert(this.value.min, this.value.unit)}-${this.convert(this.value.max, this.value.unit)}` : "";
    this.modelChange.emit(this.modelValue);
  }
  onInputChange() {
    this.updateValue();
  }
  convert(value, mode) {
    if (value != "") {
      let endValue;
      switch (mode) {
        case "GB":
          endValue = value * 1e6;
          break;
        case "MB":
          endValue = value * 1e3;
          break;
      }
      return endValue || value;
    }
    return "";
  }
}, _a23.propDecorators = {
  modelChange: [{
    type: Output
  }],
  model: [{
    type: Input
  }]
}, _a23);
SizeRangePickerComponent = __decorate([Component({
  selector: "size-range-picker",
  template: size_range_picker_component_default,
  imports: [FormsModule, MatSelect, MatOption, CommonModule],
  standalone: true,
  styles: [size_range_picker_component_default2]
})], SizeRangePickerComponent);

// src/app/helpers/filter-generator/filter-generator.component.ts
var _a24;
var FilterGeneratorComponent = (_a24 = class {
  get schema() {
    return this._schema;
  }
  set schema(value) {
    this._schema = value;
    this.saveDataInMemory();
    this.triggerFilterLoadFinish();
  }
  constructor(inj, appService, viewContainerRef, dialog, deviceConfigurator, devices, rangePicker, studyService) {
    this.inj = inj;
    this.appService = appService;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this.deviceConfigurator = deviceConfigurator;
    this.devices = devices;
    this.rangePicker = rangePicker;
    this.studyService = studyService;
    this._filterTreeHeight = 2;
    this.submit = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onTemplateSet = new EventEmitter();
    this.onFilterClear = new EventEmitter();
    this.onFilterLoadFinish = new EventEmitter();
    this.cssBlockClass = "";
    this.hideLoader = false;
    this.filterTemplatePath = 'dcmDevice.dcmuiConfig["0"].dcmuiFilterTemplateObject';
    this.showFilterTemplateList = false;
    this.showFilterButtons = false;
    this.hoverActive = false;
    this.noFilterFound = false;
    this.Array = Array;
    this.dualIndex = [0, 1];
    this.dynamicAttributeConfig = {
      iods: [],
      dynamicAttributes: null,
      newAttribute: null,
      newValue: null,
      dropdownPlaceholder: "Select attribute",
      labels: {
        dynamic_value: "Dynamic value",
        add_title: "Add",
        delete_title: "Remove"
      }
    };
    console.log("test", this._filterTreeHeight);
    this.getDataFromMemory();
  }
  triggerFilterLoadFinish() {
    if (this._schema && this._schema.length > 0 && this.filterTreeHeight) {
      this.onFilterLoadFinish.emit();
    }
  }
  getDataFromMemory() {
    try {
      if ((!j4care.isSet(this._schema) || this._schema.length === 0) && this.filterID) {
        const savedSchema = localStorage.getItem("schema_" + this.filterID);
        this._schema = JSON.parse(savedSchema);
      }
      if (!j4care.isSet(this._filterTreeHeight) && this.filterID) {
        const savedTreeHeight = localStorage.getItem("tree_height_" + this.filterID);
        this._schema = JSON.parse(savedTreeHeight);
      }
      if (j4care.isSet(this._schema) && this._filterTreeHeight) {
        this.hideLoader = true;
      }
    } catch (e) {}
  }
  saveDataInMemory() {
    try {
      if (j4care.isSet(this._schema) && this.filterID) {
        localStorage.setItem("schema_" + this.filterID, JSON.stringify(this._schema));
      }
      if (j4care.isSet(this._filterTreeHeight) && this.filterID) {
        localStorage.setItem("tree_height_" + this.filterID, JSON.stringify(this._filterTreeHeight));
      }
    } catch (e) {}
  }
  get filterTreeHeight() {
    return this._filterTreeHeight;
  }
  set filterTreeHeight(value) {
    this._filterTreeHeight = value || 2;
    if (this._filterTreeHeight) {
      this.cssBlockClass = `height_${this._filterTreeHeight}`;
    }
    this.saveDataInMemory();
    this.triggerFilterLoadFinish();
  }
  ngOnInit() {
    this.getDataFromMemory();
    if (this._filterTreeHeight) {
      this.cssBlockClass = `height_${this._filterTreeHeight}`;
    }
    if (this.filterTreeHeight) {
      this.cssBlockClass = `height_${this.filterTreeHeight}`;
    }
    if (!this.filterID) {
      try {
        this.filterID = `${location.hostname}-${this.inj["view"].parentNodeDef.renderParent.element.name}`;
      } catch (e) {
        this.filterID = `${location.hostname}-${location.pathname.replace(/\/dcm4chee-arc\/ui2\//g, "").replace(/\//g, "-")}`;
      }
    }
    if (!isBoolean_default(this.doNotSave)) {
      let savedFilters = localStorage.getItem(this.filterID);
      let parsedFilter = JSON.parse(savedFilters);
      if (this.doNotSave) {
        this.doNotSave.forEach(f => {
          if (parsedFilter && parsedFilter[f]) {
            delete parsedFilter[f];
          }
        });
      }
      if (savedFilters) {
        this.model = mergeWith_default(this.model, parsedFilter, (a, b) => {
          if (a) {
            return a;
          }
          if (!a && a != "" && b) {
            return b;
          } else {
            return a;
          }
        });
        this.onTemplateSet.emit(this.model);
      }
    }
    if (this._schema) {
      j4care.penetrateArrayToObject(this._schema, obj => {
        if (obj.hasOwnProperty("tag") && obj["tag"] === "dynamic-attributes" && obj.hasOwnProperty("iodFileNames")) {
          console.log("iodFilenames", obj["iodFileNames"]);
          const iodFileNames = obj["iodFileNames"] || ["patient", "study"];
          this.studyService.getIodObjectsFromNames(iodFileNames).subscribe(iod => {
            this.dynamicAttributeConfig.iods = this.studyService.iodToSelectedDropdown(iod.reduce((n0, n1) => Object.assign(n0, n1)));
          });
        }
      });
    }
    this.onTemplateSet.emit(this.model);
  }
  getLabelFromIODTag(dicomTagPath) {
    return this.studyService.getLabelFromIODTag(dicomTagPath);
  }
  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.submitEmit(this.defaultSubmitId);
    }
  }
  addNewDynamicAttribute() {
    this.dynamicAttributeConfig.dynamicAttributes = this.dynamicAttributeConfig.dynamicAttributes || /* @__PURE__ */new Map();
    if (this.dynamicAttributeConfig.newAttribute && this.dynamicAttributeConfig.newValue) {
      this.dynamicAttributeConfig.dynamicAttributes.set(this.dynamicAttributeConfig.newAttribute, this.dynamicAttributeConfig.newValue);
      this.model[this.dynamicAttributeConfig.newAttribute] = this.dynamicAttributeConfig.newValue;
      this.dynamicAttributeConfig.newAttribute = void 0;
      this.dynamicAttributeConfig.newValue = "";
    }
    console.log("model", this.model);
  }
  removeDynamicAttribute(attr) {
    try {
      this.dynamicAttributeConfig.dynamicAttributes.delete(attr);
      delete this.model[attr];
    } catch (e) {}
    console.log("model", this.model);
  }
  submitEmit(id) {
    this.model = j4care.clearEmptyObject(this.model);
    if (id) {
      this.submit.emit({
        model: this.model,
        id
      });
    } else {
      this.submit.emit(this.model);
    }
  }
  filterChange(test) {
    console.log("this.model", this.model);
    console.log("this.schema", this._schema);
    if (this.onFilterChangeHook) {
      this.onFilterChangeHook(event, this.model, this._schema);
    }
    this.onChange.emit(this.model);
  }
  codeChanged(codes, e) {
    Object.keys(codes).forEach(code => {
      if (hasIn_default(e, codes[code].key)) {
        this.model[codes[code].key] = e[codes[code].key];
      } else {
        delete this.model[codes[code].key];
      }
    });
    this.filterChange(e);
  }
  issuerChanged(issuers, e) {
    Object.keys(issuers).forEach(issuer => {
      if (hasIn_default(e, issuers[issuer].key)) {
        this.model[issuers[issuer].key] = e[issuers[issuer].key];
      } else {
        delete this.model[issuers[issuer].key];
      }
    });
    this.filterChange(e);
  }
  modifiedWidget(e) {
    ["modified", "allmodified"].forEach(key => {
      if (hasIn_default(e, key)) {
        this.model[key] = e[key];
      } else {
        delete this.model[key];
      }
    });
  }
  clear() {
    Object.keys(this.model).forEach(filter2 => {
      this.model[filter2] = "";
    });
    this.codeSelectorComponent.forEach(component => component.hardClear());
    this.personNamePickerComponent.forEach(component => component.clear());
    this.issuerSelectorComponent.forEach(component => component.hardClear());
    this.modifiedWidgetComponent.forEach(component => component.clear());
    this.onFilterClear.emit(this.model);
  }
  trackByFn(index, item) {
    return index;
  }
  ngAfterContentChecked() {
    if (!this.hideLoader) {
      setTimeout(() => {
        this.hideLoader = true;
      }, 100);
    }
  }
  dateChanged(key, e) {
    if (e) {
      this.model[key] = e;
    } else {
      delete this.model[key];
    }
    this.filterChange(e);
  }
  splitDateRangeChanged(e) {
    if (e) {
      this.model["SplitStudyDateRange"] = e;
    } else {
      delete this.model["SplitStudyDateRange"];
    }
    this.filterChange(e);
  }
  confirm(confirmparameters) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width: "465px"
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  createNewFilterTemplateToDevice(newTemplateName, device) {
    let newObject = {
      dcmuiFilterTemplateDefault: false,
      dcmuiFilterTemplateDescription: "Test description",
      dcmuiFilterTemplateFilters: Object.keys(this.model).filter(m => {
        return this.model[m];
      }).map(k => {
        return `${k}=${this.model[k]}`;
      }),
      dcmuiFilterTemplateGroupName: newTemplateName,
      dcmuiFilterTemplateID: this.filterIdTemplate || this.filterID
    };
    if (hasIn_default(device, this.filterTemplatePath)) {
      get_default(device, this.filterTemplatePath).push(newObject);
    } else {
      set_default(device, this.filterTemplatePath, [newObject]);
    }
    console.log("device", device);
    return device;
  }
  removeFilterTemplate(filter2) {
    this.confirm({
      content: "Are you sure you want to remove this filter-template?"
    }).subscribe(ok => {
      if (ok) {
        console.log("filter", filter2);
      }
    });
  }
  saveFilterTemplate() {
    if (!this.appService.deviceName) {
      this.confirm({
        content: "Archive device name not found, reload the page and try again!"
      }).subscribe(ok => {});
    } else {
      console.log("device name", this.appService.deviceName);
      this.deviceConfigurator.getDevice(this.appService.deviceName).subscribe(arch => {
        console.log("arch", arch);
        this.confirm({
          content: "Set the name for the new filter template:",
          input: {
            name: "newdevice",
            type: "text"
          },
          result: {
            input: ""
          },
          saveButton: "SAVE"
        }).subscribe(ok => {
          if (ok) {
            console.log("result.input", ok.input);
            let device = this.createNewFilterTemplateToDevice(ok.input, arch);
            console.log("device", device);
            this.devices.saveDeviceChanges(this.appService.deviceName, device).subscribe(res => {}, err => {
              console.error(err);
            });
          }
        });
      }, err => {
        console.log("arch", err);
      });
    }
  }
  openTemplateList() {
    if (!this.appService.deviceName) {
      this.confirm({
        content: "Archive device name not found, reload the page and try again!"
      }).subscribe(ok => {});
    } else {
      console.log("device name", this.appService.deviceName);
      this.showFilterTemplateList = true;
      this.deviceConfigurator.getDevice(this.appService.deviceName).subscribe(arch => {
        if (hasIn_default(arch, this.filterTemplatePath)) {
          this.filterTemplates = get_default(arch, this.filterTemplatePath).filter(filter2 => {
            return filter2.dcmuiFilterTemplateID === this.filterIdTemplate;
          });
        } else {
          console.log("no filter template found");
        }
      }, err => {
        console.error(err);
      });
    }
  }
  mouseEnterFilter() {
    this.hoverActive = true;
    this.showFilterButtons = true;
  }
  mouseLeaveFilter() {
    this.hoverActive = false;
    setTimeout(() => {
      if (this.hoverActive === false) {
        this.showFilterTemplateList = false;
        this.showFilterButtons = false;
      }
    }, 500);
  }
  inFilterClicked() {
    this.showFilterTemplateList = false;
  }
  openTemplateFilter(filter2) {
    this.showFilterTemplateList = false;
    this.showFilterButtons = false;
    const regex = /(\w*)=(\w*)/;
    let newObject = {};
    let m;
    filter2.dcmuiFilterTemplateFilters.forEach(filter3 => {
      if ((m = regex.exec(filter3)) !== null) {
        newObject[m[1]] = m[2];
      }
    });
    console.log("newOjbect", newObject);
    this.model = newObject;
    this.onTemplateSet.emit(this.model);
  }
  ngOnDestroy() {
    if (!isBoolean_default(this.doNotSave)) {
      if (this.doNotSave) {
        this.doNotSave.forEach(f => {
          if (this.model[f]) {
            delete this.model[f];
          }
        });
      }
      localStorage.setItem(this.filterID, JSON.stringify(this.model));
      this.saveDataInMemory();
    }
  }
}, _a24.ctorParameters = () => [{
  type: Injector
}, {
  type: AppService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: DeviceConfiguratorService
}, {
  type: DevicesService
}, {
  type: RangePickerService
}, {
  type: StudyService
}], _a24.propDecorators = {
  model: [{
    type: Input
  }],
  filterID: [{
    type: Input
  }],
  hideClearButtons: [{
    type: Input
  }],
  filterIdTemplate: [{
    type: Input
  }],
  doNotSave: [{
    type: Input
  }],
  submit: [{
    type: Output
  }],
  onChange: [{
    type: Output
  }],
  onTemplateSet: [{
    type: Output
  }],
  onFilterClear: [{
    type: Output
  }],
  onFilterLoadFinish: [{
    type: Output
  }],
  ignoreOnClear: [{
    type: Input
  }],
  defaultSubmitId: [{
    type: Input
  }],
  onFilterChangeHook: [{
    type: Input
  }],
  codeSelectorComponent: [{
    type: ViewChildren,
    args: [CodeSelectorComponent]
  }],
  personNamePickerComponent: [{
    type: ViewChildren,
    args: [PersonNamePickerComponent]
  }],
  issuerSelectorComponent: [{
    type: ViewChildren,
    args: [IssuerSelectorComponent]
  }],
  modifiedWidgetComponent: [{
    type: ViewChildren,
    args: [ModifiedWidgetComponent]
  }],
  schema: [{
    type: Input
  }],
  filterTreeHeight: [{
    type: Input,
    args: ["filterTreeHeight"]
  }]
}, _a24);
FilterGeneratorComponent = __decorate([Component({
  selector: "filter-generator",
  template: filter_generator_component_default,
  imports: [MatProgressSpinner, TrimPipe, DcmDropDownComponent, ModifiedWidgetComponent, IssuerSelectorComponent, CodeSelectorComponent, RangePickerComponent, MatRadioGroup, MatRadioButton, DropdownComponent, OptionComponent, PersonNamePickerComponent, ModalityComponent, MatSelect, FormsModule, NgClass, NgStyle, SizeRangePickerComponent, MatOption, NgSwitch, CommonModule],
  standalone: true,
  styles: [filter_generator_component_default2]
})], FilterGeneratorComponent);

// src/app/widgets/dialogs/confirm/confirm.component.ts
var _a25;
var ConfirmComponent = (_a25 = class {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this._ = lodash_exports;
  }
  get parameters() {
    return this._parameters;
  }
  set parameters(value) {
    if (!hasIn_default(value, "cancelButton")) {
      value.cancelButton = "CANCEL";
    }
    this._parameters = value;
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
}, _a25.ctorParameters = () => [{
  type: MatDialogRef
}], _a25);
ConfirmComponent = __decorate([Component({
  selector: "app-confirm",
  template: confirm_component_default,
  imports: [NgClass, RangePickerComponent, FormsModule, FilterGeneratorComponent, CommonModule],
  standalone: true
})], ConfirmComponent);

// src/app/configuration/devices/devices.service.ts
var _a26;
var DevicesService = (_a26 = class {
  constructor($http, dialog, appService) {
    this.$http = $http;
    this.dialog = dialog;
    this.appService = appService;
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  removeEmptyFieldsFromExporter(exporter) {
    forEach_default(exporter, (m, i) => {
      if (m === "" || m === void 0) {
        delete exporter[i];
      }
    });
    return exporter;
  }
  changeAetOnClone(device, aes) {
    if (hasIn_default(device, "dicomNetworkAE") && size_default(device.dicomNetworkAE) > 0) {
      forEach_default(device.dicomNetworkAE, (m, i) => {
        if (hasIn_default(m, "dicomAETitle")) {
          m.dicomAETitle = this.generateNewAETitle(m.dicomAETitle, 1, 0, aes, "dicomAETitle");
        }
      });
    }
  }
  changeWebAppOnClone(device, aes) {
    if (hasIn_default(device, "dcmDevice.dcmWebApp") && size_default(device.dcmDevice.dcmWebApp) > 0) {
      forEach_default(device.dcmDevice.dcmWebApp, (m, i) => {
        if (hasIn_default(m, "dcmWebAppName")) {
          m.dcmWebAppName = this.generateNewTitle(m.dcmWebAppName, aes, "dcmWebAppName");
        }
      });
    }
  }
  changeHl7ApplicationNameOnClone(device, hl7) {
    if (hasIn_default(device, "dcmDevice.hl7Application") && size_default(device.dcmDevice.hl7Application) > 0) {
      forEach_default(device.dcmDevice.hl7Application, (m, i) => {
        if (hasIn_default(m, "hl7ApplicationName")) {
          m.hl7ApplicationName = this.generateNewTitle(m.hl7ApplicationName, hl7, "hl7ApplicationName");
        }
      });
    }
  }
  createDevice(deviceName, object) {
    return this.$http.post(`${j4care.addLastSlash(this.appService.baseUrl)}devices/${deviceName}`, object, this.headers);
  }
  saveDeviceChanges(deviceName, object) {
    return this.$http.put(`${j4care.addLastSlash(this.appService.baseUrl)}devices/${deviceName}`, object, this.headers);
  }
  getDevices() {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}devices`);
  }
  getDevice(deviceName) {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}devices/${deviceName}`);
  }
  cloneVendorData(oldDeviceName, newDeviceName) {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}devices/${oldDeviceName.trim()}/vendordata`, {
      responseType: "blob"
    }).pipe(switchMap(vendorData => this.$http.put(`${j4care.addLastSlash(this.appService.baseUrl)}devices/${newDeviceName.trim()}/vendordata`, vendorData, new HttpHeaders({
      "Content-Type": "application/zip"
    }))));
  }
  getAes() {
    return this.$http.get(`${j4care.addLastSlash(this.appService.baseUrl)}aes`);
  }
  generateNewTitle(oldTitle, nodes, titleName) {
    let newTitle;
    if (endsWith_default(oldTitle, "_CLONE")) newTitle = oldTitle + "(1)";else {
      if (endsWith_default(oldTitle, ")")) {
        let split = split_default(oldTitle, "(");
        let index = last_default(split);
        split.pop();
        index = replace_default(index, ")", "");
        let indexInt = parseInt_default(index);
        newTitle = split + "(" + add_default(indexInt, 1) + ")";
      } else newTitle = oldTitle + "_CLONE";
    }
    return this.nodeExists(newTitle, nodes, titleName) ? this.generateNewTitle(newTitle, nodes, titleName) : newTitle;
  }
  generateNewAETitle(oldAETitle, sliceUpto, existsCounter, aes, titleName) {
    let newAETitle;
    if (oldAETitle.length > 16) newAETitle = this.newAETitleFrom(oldAETitle, 15);else {
      let lastChar = parseInt_default(oldAETitle.slice(-1));
      let lastCharIsNotDigit = isNaN_default(lastChar);
      newAETitle = oldAETitle.length < 16 ? lastCharIsNotDigit ? oldAETitle + 1 : oldAETitle.slice(0, -1) + (lastChar + 1) : lastCharIsNotDigit ? oldAETitle.slice(0, -1) + 1 : lastChar < 9 ? oldAETitle.slice(0, -1) + (lastChar + 1) : this.newAETitleFrom(oldAETitle, 15);
    }
    let aeExists = this.nodeExists(newAETitle, aes, titleName);
    if (aeExists && newAETitle.length == 16 && existsCounter == 9) {
      sliceUpto = sliceUpto + 1;
      newAETitle = this.newAETitleFrom(oldAETitle, 16 - sliceUpto);
    }
    return aeExists ? this.generateNewAETitle(newAETitle, sliceUpto, existsCounter, aes, titleName) : newAETitle;
  }
  newAETitleFrom(oldAETitle, substringUpto) {
    let trimmedOldAETitle = oldAETitle.substring(0, substringUpto);
    let lastChar = parseInt_default(trimmedOldAETitle.slice(-1));
    let lastCharIsNotDigit = isNaN_default(lastChar);
    return lastCharIsNotDigit ? trimmedOldAETitle + 1 : trimmedOldAETitle.slice(0, -1) + (lastChar + 1);
  }
  nodeExists(nodeTitle, nodes, titleName) {
    return nodes && findIndex_default(nodes, function (o) {
      return hasIn_default(o, titleName) && o[titleName] == nodeTitle;
    }) > -1;
  }
  selectParameters(callBack, devices, addScheduleTime, addQueueName, queueNames, title) {
    let setParams = function (tempDevices) {
      let schema = {
        content: "Reschedule task",
        doNotSave: true,
        form_schema: [[[{
          tag: "label",
          text: "Device"
        }, {
          tag: "select",
          options: tempDevices,
          showStar: true,
          filterKey: "newDeviceName",
          description: "Device",
          placeholder: "Device"
        }], [{
          tag: "label",
          text: "Schedule at (if not set, schedule immediately)"
        }, {
          tag: "single-date-time-picker",
          type: "text",
          filterKey: "scheduledTime",
          description: "Schedule at (if not set, schedule immediately)"
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "SUBMIT"
      };
      if (addQueueName) {
        const options = queueNames || Array.from(Array(13).keys()).map(i => {
          const val = `Retrieve${i + 1}`;
          return new SelectDropdown(val, val);
        });
        schema.form_schema[0].push([{
          tag: "label",
          text: "Queue Name"
        }, {
          tag: "select",
          options,
          filterKey: "newQueueName",
          description: "Queue Name",
          placeholder: "Queue Name"
        }]);
      }
      return schema;
    };
    this.openDialog(setParams(devices)).subscribe(callBack);
  }
  selectParametersForMatching(callBack, devices, addQueueName, queueNames) {
    let setParams = function (tempDevices) {
      let schema = {
        content: "Reschedule all matching tasks",
        doNotSave: true,
        form_schema: [[[{
          tag: "label",
          text: "Device"
        }, {
          tag: "multi-select",
          options: tempDevices,
          showStar: true,
          filterKey: "newDeviceName",
          description: "Device",
          placeholder: "Device"
        }], [{
          tag: "label",
          text: "Schedule at (if not set, schedule immediately)"
        }, {
          tag: "single-date-time-picker",
          type: "text",
          filterKey: "scheduledTime",
          description: "Schedule at (if not set, schedule immediately)"
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "SUBMIT"
      };
      if (addQueueName) {
        const options = queueNames || Array.from(Array(13).keys()).map(i => {
          const val = `Retrieve${i + 1}`;
          return new SelectDropdown(val, val);
        });
        schema.form_schema[0].push([{
          tag: "label",
          text: "Queue Name"
        }, {
          tag: "select",
          options,
          filterKey: "newQueueName",
          description: "Queue Name",
          placeholder: "Queue Name"
        }]);
      }
      return schema;
    };
    this.openDialog(setParams(devices)).subscribe(callBack);
  }
  openDialog(parameters, width, height) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: height || "auto",
      width: width || "500px"
    });
    this.dialogRef.componentInstance.parameters = parameters;
    return this.dialogRef.afterClosed();
  }
  getFiltersSchema() {
    return j4care.prepareFlatFilterObject([{
      tag: "input",
      type: "text",
      filterKey: "dicomDeviceName",
      description: "Device Name",
      placeholder: "Device Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomDeviceDescription",
      description: "Device Description",
      placeholder: "Device Description"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomManufacturer",
      description: "Manufacturer",
      placeholder: "Manufacturer"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomManufacturerModelName",
      description: "Manufacturer model name",
      placeholder: "Manufacturer model name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomSoftwareVersion",
      description: "Software version",
      placeholder: "Software version"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomStationName",
      description: "Station Name",
      placeholder: "Station Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomPrimaryDeviceType",
      description: "Primary Device Type",
      placeholder: "Primary Device Type"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomInstitutionName",
      description: "Institution Name",
      placeholder: "Institution Name"
    }, {
      tag: "input",
      type: "text",
      filterKey: "dicomInstitutionDepartmentName",
      description: "Institution department name",
      placeholder: "Institution department name"
    }, {
      tag: "select",
      options: [new SelectDropdown("true", "Installed"), new SelectDropdown("false", "Not installed")],
      showStar: true,
      filterKey: "dicomInstalled",
      description: "Device installed",
      placeholder: "Installed"
    }, {
      tag: "button",
      id: "submit",
      text: "SUBMIT",
      description: "Query Devices"
    }], 2);
  }
}, _a26.ctorParameters = () => [{
  type: J4careHttpService
}, {
  type: MatDialog
}, {
  type: AppService
}], _a26);
DevicesService = __decorate([Injectable()], DevicesService);
export { _MatInternalFormField, _ErrorStateTracker, ErrorStateMatcher, _StructuralStylesLoader, getSupportedInputTypes, defaultRippleAnimationConfig, RippleRenderer, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, MatOption, MatRippleModule, MatFormFieldControl, MAT_FORM_FIELD, SearchPipe, FormElement, IssuerSelectorComponent, RangePickerService, TimePickerComponent, DurationPickerComponent, DatePickerComponent, ClickOutsideDirective, RangePickerComponent, AnimationMetadataType, AUTO_STYLE, trigger, animate, sequence, style, state, transition, NoopAnimationPlayer, AnimationGroupPlayer, ɵPRE_STYLE, ArrayToStringPipe, DcmDropDownComponent, MatFormFieldModule, MatSelect, MatSelectModule, DevicesService, AeListService, Hl7ApplicationsService, TableSchemaElement, WebAppsListService, ControlService, DeviceConfiguratorService, StorageSystemsService, DynamicPipe, ContentDescriptionPipe, PatientIssuerPipe, PatientDicom, PersonNamePipe, FormatAttributeValuePipe, CustomDatePipe, StudyService, TrimPipe, ModifiedWidgetComponent, CodeSelectorComponent, MatRadioModule, OptionComponent, DropdownComponent, PersonNamePickerComponent, ModalityComponent, SizeRangePickerComponent, FilterGeneratorComponent, ConfirmComponent };
/*! Bundled license information:

@angular/animations/fesm2022/private_export-B_vy_9K7.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.0.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/