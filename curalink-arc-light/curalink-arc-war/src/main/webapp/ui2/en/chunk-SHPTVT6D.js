import {
  PermissionDirective
} from "./chunk-ZNRT3XRK.js";
import {
  Component,
  RouterLink,
  RouterLinkActive,
  __decorate
} from "./chunk-V54BIW7M.js";

// src/app/monitoring/monitoring-tabs.component.ts
var MonitoringTabsComponent = class MonitoringTabsComponent2 {
};
MonitoringTabsComponent = __decorate([
  Component({
    selector: "monitoring-tabs",
    template: `
        <ul class="nav nav-tabs" role="tablist">
            <li [permission]="{id:'tab-monitoring->associations',param:'visible'}" role="presentation" routerLinkActive="active"><a
                    role="tab" routerLink="/monitoring/associations" routerLinkActive="active" i18n="@@monitoring.tab.associations">Associations</a>
            </li>
            <li [permission]="{id:'tab-monitoring->queues',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                              routerLink="/monitoring/queues"
                                                                                                                              routerLinkActive="active"
                                                                                                                              i18n="@@queues">Queues</a>
            </li>
            <li [permission]="{id:'tab-monitoring->export',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                              routerLink="/monitoring/export"
                                                                                                                              routerLinkActive="active"
                                                                                                                              i18n="@@export.export">Export</a>
            </li>
            <li [permission]="{id:'tab-monitoring->external_retrieve',param:'visible'}" role="presentation" routerLinkActive="active"><a
                    role="tab" routerLink="/monitoring/external" routerLinkActive="active" i18n="@@retrieve">Retrieve</a></li>
            <li [permission]="{id:'tab-monitoring->diff',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                            routerLink="/monitoring/diff"
                                                                                                                            routerLinkActive="active"
                                                                                                                            i18n="@@monitoring.tab.diff">Compare</a>
            </li>

            <!--<li role="presentation" routerLinkActive="active"><a role="tab" routerLink="/monitoring/statistics" routerLinkActive="active">Statistics</a></li>-->
            <!--// <li role="presentation" routerLinkActive="active"><a role="tab" routerLink="/monitoring/lifecycle-management" routerLinkActive="active">Lifecycle managements</a></li>-->
            <li [permission]="{id:'tab-monitoring->storage_commitments',param:'visible'}" role="presentation" routerLinkActive="active"><a
                    role="tab" routerLink="/monitoring/storage-commitment" routerLinkActive="active" i18n="@@storage_commitments">Storage
                commitments</a></li>
            <li [permission]="{id:'tab-monitoring->storage_systems',param:'visible'}" role="presentation" routerLinkActive="active"><a
                    role="tab" routerLink="/monitoring/storage-systems" routerLinkActive="active" i18n="@@storage_systems">Storage
                systems</a></li>
            <li [permission]="{id:'tab-monitoring->storage_verification',param:'visible'}" role="presentation" routerLinkActive="active"><a
                    role="tab" routerLink="/monitoring/storage-verification" routerLinkActive="active" i18n="@@storage_verification">Storage
                Verification</a></li>
            <li [permission]="{id:'tab-monitoring->metrics',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                               routerLink="/monitoring/metrics"
                                                                                                                               routerLinkActive="active"
                                                                                                                               i18n="@@metrics.metrics">Metrics</a>
            </li>
        </ul>
    `,
    imports: [
      PermissionDirective,
      RouterLink,
      RouterLinkActive
    ],
    standalone: true
  })
], MonitoringTabsComponent);

export {
  MonitoringTabsComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
