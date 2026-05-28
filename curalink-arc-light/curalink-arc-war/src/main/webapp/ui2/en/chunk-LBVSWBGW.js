import {
  Component,
  Input,
  __decorate,
  forEach_default
} from "./chunk-V54BIW7M.js";

// src/app/helpers/connection-formater/connection-formater.component.ts
var _a;
var ConnectionFormaterComponent = (_a = class {
  constructor() {
  }
  ngOnInit() {
    forEach_default(this.dicomNetworkConnection, (m, i) => {
      if (m.dicomTLSCipherSuite) {
        if (m.dicomTLSCipherSuite[0] && m.dicomTLSCipherSuite[1]) {
          m.dicomTLSCipherSuite = m.dicomTLSCipherSuite[0] + "\n" + m.dicomTLSCipherSuite[1];
        }
      }
    });
  }
}, _a.ctorParameters = () => [], _a.propDecorators = {
  dicomNetworkConnection: [{ type: Input }]
}, _a);
ConnectionFormaterComponent = __decorate([
  Component({
    selector: "connection-formater",
    template: `
        <div *ngFor="let connblock of dicomNetworkConnection">
            <span>
                {{connblock.dicomHostname}}
                    <ng-container *ngIf="connblock.dicomPort">:</ng-container>
                {{connblock.dicomPort}}
            </span>
            <i *ngIf="connblock.dicomTLSCipherSuite" title="{{connblock.dicomTLSCipherSuite}}" class="material-icons connection_tls" i18n="@@vpn_key">vpn_key</i>
        </div>
    `,
    standalone: true
  })
], ConnectionFormaterComponent);

export {
  ConnectionFormaterComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
