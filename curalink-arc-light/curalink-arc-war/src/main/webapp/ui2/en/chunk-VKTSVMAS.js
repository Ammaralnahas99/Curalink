import { ComparewithiodPipe, DeleteRejectedInstancesComponent, DynamicPipePipe, EditMwlComponent, EditPatientComponent, EditSeriesComponent, EditStudyComponent, ExportDialogComponent, MatMenu, MatMenuTrigger, ModifyUpsComponent, SelectionsDicomViewComponent, StudyTransferringOverviewComponent, UploadDicomComponent, UploadFilesComponent, ViewerComponent } from "./chunk-G7GH5NDV.js";
import "./chunk-ECXQZT4K.js";
import { AttributeListComponent, TooltipDirective } from "./chunk-CJ4Z3CIK.js";
import { ClickOutsideDirective, ConfirmComponent, DcmDropDownComponent, DeviceConfiguratorService, FilterGeneratorComponent, PatientDicom, StudyService, animate, state, style, transition, trigger } from "./chunk-DJWZKPOC.js";
import { PermissionDirective } from "./chunk-ZNRT3XRK.js";
import { LoadingBarService } from "./chunk-GBOOVM47.js";
import { FormsModule, PermissionService, environment } from "./chunk-YEAVTBOB.js";
import { ActivatedRoute, AppService, ChangeDetectorRef, CommonModule, Component, Directive, ElementRef, EventEmitter, HostListener, HttpErrorHandler, HttpHeaders, Injectable, Input, J4careHttpService, JsonPipe, KeycloakService, MatDialog, MatDialogRef, NgClass, NgStyle, NgSwitch, Observable, Output, Pipe, RouterLink, RouterLinkActive, SelectDropdown, ViewChild, ViewContainerRef, WindowRefService, __decorate, __objRest, __spreadValues, assign_default, cloneDeep_default, clone_default, forEach_default, get_default, hasIn_default, indexOf_default, isArray_default, j4care, lodash_exports, map, merge_default, replace_default, set_default, size_default, switchMap, uniq_default, values_default } from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\study\study\study.component.html
var study_component_default = `<!--\r
<button (click)="testKeycloak()" style="position: fixed;top: 10px;left:10px">TESTkeyclok</button>\r
-->\r
\r
<div class="main_content white_design" >\r
  <study-tab></study-tab>\r
  <div class="tab-content tab_content_with_fixed_header">\r
    <div class="sticky" #stickyHeader [ngClass]="{'fixed_header':fixedHeader}">\r
      <h2>{{studyConfig.title}}</h2>\r
        <ng-container *ngIf="studyConfig && studyConfig.tab">\r
          <div class="filter_line">\r
            <div class="filter_block" >\r
              <filter-generator filterID="{{'study-filter-' + studyConfig.tab}}"  [filterTreeHeight]="filter.filterSchemaMain.lineLength"  [schema]="filter.filterSchemaMain.schema" [doNotSave]="[]" [model]="filter.filterModel" (submit)="search('current', $event)" (onChange)="filterChanged()" [defaultSubmitId]="'submit'" (onTemplateSet)="onFilterTemplateSet($event)" (onFilterClear)="onFilterClear($event)"></filter-generator>\r
            </div>\r
          </div>\r
          <div class="filter_line" [hidden]="!filter.expand">\r
            <div class="filter_block">\r
              <filter-generator *ngIf="filter.filterSchemaExpand.lineLength" [schema]="filter.filterSchemaExpand.schema" filterID="{{'study-filter-' + studyConfig.tab}}" [doNotSave]="[]" [model]="filter.filterModel" [filterTreeHeight]="filter.filterSchemaExpand.lineLength" (onChange)="filterChanged()" [defaultSubmitId]="'submit'" (onTemplateSet)="onFilterTemplateSet($event)"></filter-generator>\r
            </div>\r
          </div>\r
        </ng-container>\r
  </div>\r
      <div class="filter_line more_function_block" *ngIf="studyConfig\r
                        || (studyWebService && studyWebService.selectedWebService\r
                            && !(studyConfig && (studyConfig.tab === 'diff' || studyConfig.tab === 'uwl' || studyConfig.tab === 'mpps')))\r
                        || (studyWebService && studyWebService.selectedWebService\r
                            && patients && patients.length > 0 && !(studyConfig && (studyConfig.tab === 'diff' || studyConfig.tab === 'uwl' || studyConfig.tab === 'mpps')))">\r
        <div class="filter single_block">\r
          <div class="filter_block" *ngIf="studyConfig">\r
            <div class="line">\r
              <a href="" (click)="$event.preventDefault();toggleMore(true)" *ngIf="!filter.expand && studyConfig.tab != 'patient'" class="more pull-left"><ng-container i18n="@@more">More</ng-container><i class="glyphicon glyphicon-triangle-bottom"></i></a>\r
              <a href="" (click)="$event.preventDefault();toggleMore(false)" *ngIf="filter.expand && studyConfig.tab != 'patient'" class="more [hidden] pull-left">\r
                  <ng-container  i18n="@@close_more_block">Close More Block</ng-container>\r
                  <i class="glyphicon glyphicon-triangle-top"></i>\r
              </a>\r
              <input *ngIf="patients && patients.length > 0"  i18n-title="@@title.study.search_current_list" title="Search current local list ( That's NOT searching in the Server! )" type="text" [(ngModel)]="searchCurrentList"  i18n-placeholder="@@placeholder.study.search_current_list" placeholder="Search current list">\r
            </div>\r
          </div>\r
          <div class="filter_block">\r
            <div class="line">\r
              <dcm-drop-down\r
                  [placeholder]="moreFunctionConfig.placeholder"\r
                  [options]="moreFunctionConfig.options | dynamicPipe:undefined:moreFunctionFilterPipe:internal:studyConfig"\r
                  [editable]="false"\r
                  [(model)]="moreFunctionConfig.model"\r
                  [showSearchField]="false"\r
                  [multiSelectMode]="false"\r
                  (modelChange)="moreFunctionChanged($event)"\r
                  [showStar]="false"\r
                  *ngIf="(studyWebService && studyWebService.selectedWebService && !(studyConfig && (studyConfig.tab === 'diff' || studyConfig.tab === 'mpps')))"\r
                  [permission]="{id:'action-studies-more_function',param:'visible'}"\r
              ></dcm-drop-down>\r
              <dcm-drop-down\r
                      [placeholder]="actionsSelections.placeholder"\r
                      [options]="actionsSelections.options | dynamicPipe:undefined:actionsSelectionsFilterPipe:internal:trash.active:studyConfig"\r
                      [editable]="false"\r
                      [(model)]="actionsSelections.model"\r
                      [showSearchField]="false"\r
                      [multiSelectMode]="false"\r
                      (modelChange)="actionsSelectionsChanged($event)"\r
                      [showStar]="false"\r
                      *ngIf="studyWebService\r
                                && studyWebService.selectedWebService\r
                                && ((patients && patients.length > 0)\r
                                    || (patients1 && patients1.length > 0))\r
                                && !(studyConfig && (studyConfig.tab === 'diff' || studyConfig.tab === 'uwl' || studyConfig.tab === 'mpps'))"\r
                      [permission]="{id:'action-studies-more_function',param:'visible'}"\r
              ></dcm-drop-down>\r
<!--              <dcm-drop-down\r
                   i18n-placeholder="@@placeholder.study.primary_aet" placeholder="Primary AET"\r
                  [options]="diffOptions.aes"\r
                  [editable]="false"\r
                  [(model)]="diffOptions.primaryAET"\r
                  [showSearchField]="false"\r
                  [multiSelectMode]="false"\r
                  (modelChange)="moreFunctionChanged($event)"\r
                  [showStar]="false"\r
                  *ngIf="studyConfig && studyConfig.tab === 'diff'"\r
                  [permission]="{id:'action-studies-more_function',param:'visible'}"\r
              ></dcm-drop-down>\r
              <dcm-drop-down\r
                       i18n-placeholder="@@placeholder.study.secondary_aet" placeholder="Secondary AET"\r
                      [options]="diffOptions.aes"\r
                      [editable]="false"\r
                      [(model)]="diffOptions.secondaryAET"\r
                      [showSearchField]="false"\r
                      [multiSelectMode]="false"\r
                      (modelChange)="actionsSelectionsChanged($event)"\r
                      [showStar]="false"\r
                      *ngIf="studyConfig && studyConfig.tab === 'diff'"\r
                      [permission]="{id:'action-studies-more_function',param:'visible'}"\r
              ></dcm-drop-down>-->\r
            </div>\r
          </div>\r
            <div class="filter_block" *ngIf="((patients && patients.length > 0) || (studyConfig && studyConfig.tab === 'diff'))">\r
                <div class="line">\r
\r
                </div>\r
            </div>\r
        </div>\r
      </div>\r
      <div class="selection_actions" *ngIf="tableParam.config.showCheckboxes && studyWebService && studyWebService.selectedWebService && studyWebService.selectedWebService.dcmWebServiceClass.indexOf('DCM4CHEE_ARC_AET') > -1" [permission]="{id:'action-studies-copy_merge_move',param:'visible'}">\r
          <ul class="selection_functions">\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" [ngClass]="{'active':checkboxFunctions}" (click)="selectionAction('checkbox_functions')"><i class="ignore_click_outside material-icons">playlist_add_check</i></button></li>\r
              <li *ngIf='studyWebService.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") > -1'><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('copy')"  i18n-title="@@title.study.mark_selected_study_for_copy" title="Mark selected Studies/Series/Instances for copy"><i class="material-icons">content_copy</i></button></li>\r
              <li><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('move')"  i18n-title="@@title.study.mark_selected_study_for_move" title="Mark selected Studies/Series/Instances for move"><i class="material-icons">content_cut</i></button></li>\r
              <li><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('link')"  i18n-title="@@title.study.mark_selected_study_for_linking_with_mwl" title="Mark selected Studies/Series/Instances for linking with MWL"><i class="material-icons">link</i></button></li>\r
              <li><button [disabled]="selectedElements.action" (click)="selectionAction('patient_merge')"  i18n-title="@@title.study.mark_selected_patient_for_merge" title="Mark selected patient for merge"><i class="material-icons">supervisor_account</i></button></li>\r
              <li><button (click)="selectionAction('paste')"  i18n-title="@@title.study.start_the_process_of_copieng_moving_linked_or_merge" title="Start the process of copying/moving/linking or merging"><i class="glyphicon glyphicon-paste"></i></button></li>\r
          </ul>\r
          <ul *ngIf="checkboxFunctions" class="checkbox_functions" (clickOutside)='checkboxFunctions = !checkboxFunctions' [clickOutsideExceptionClass]="['ignore_click_outside']">\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('remove_selection')" i18n="@@remove_all_selections">Remove all selections</button></li>\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('check_selection_study')" i18n="@@select_all_studies">Select all studies</button></li>\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('uncheck_selection_study')" i18n="@@unselect_all_studies">Unselect all studies</button></li>\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('check_selection_patient')" i18n="@@select_all_patients">Select all patients</button></li>\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('uncheck_selection_patient')" i18n="@@unselect_all_patients">Unselect all patients</button></li>\r
              <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('hide_checkboxes')" i18n="@@hide_checkboxes">Hide checkboxes</button></li>\r
          </ul>\r
      </div>\r
    <div class="selection_actions" *ngIf="tableParam.config.showCheckboxes && studyWebService && studyWebService.selectedWebService && studyWebService.selectedWebService.dcmWebServiceClass.indexOf('DCM4CHEE_ARC_AET') == -1" [permission]="{id:'action-studies-copy_merge_move',param:'visible'}">\r
        <ul class="selection_functions">\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" [ngClass]="{'active':checkboxFunctions}" (click)="selectionAction('checkbox_functions')"><i class="ignore_click_outside material-icons">playlist_add_check</i></button></li>\r
<!--            <li><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('copy')"  i18n-title="@@title.study.mark_selected_study_for_copy" title="Mark selected study for copy"><i class="material-icons">content_copy</i></button></li>-->\r
<!--            <li><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('move')"  i18n-title="@@title.study.mark_selected_study_for_move" title="Mark selected study for move"><i class="material-icons">content_cut</i></button></li>-->\r
<!--            <li><button [disabled]="selectedElements.action || selectedElements.preActionElements.getSpecificObjectSize('patient') > 0" (click)="selectionAction('link')"  i18n-title="@@title.study.mark_selected_study_for_linking_with_mwl" title="Mark selected study for linking with MWL"><i class="material-icons">link</i></button></li>-->\r
<!--            <li><button [disabled]="selectedElements.action" (click)="selectionAction('patient_merge')"  i18n-title="@@title.study.mark_selected_patient_for_merge" title="Mark selected patient for merge"><i class="material-icons">supervisor_account</i></button></li>-->\r
<!--            <li><button (click)="selectionAction('paste')"  i18n-title="@@title.study.start_the_process_of_copieng_moving_linked_or_merge" title="Start the process of copying/moving/linking or merging"><i class="glyphicon glyphicon-paste"></i></button></li>-->\r
        </ul>\r
        <ul *ngIf="checkboxFunctions" class="checkbox_functions" (clickOutside)='checkboxFunctions = !checkboxFunctions' [clickOutsideExceptionClass]="['ignore_click_outside']">\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('remove_selection')" i18n="@@remove_all_selections">Remove all selections</button></li>\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('check_selection_study')" i18n="@@select_all_studies">Select all studies</button></li>\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('uncheck_selection_study')" i18n="@@unselect_all_studies">Unselect all studies</button></li>\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('check_selection_patient')" i18n="@@select_all_patients">Select all patients</button></li>\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('uncheck_selection_patient')" i18n="@@unselect_all_patients">Unselect all patients</button></li>\r
            <li class="ignore_click_outside"><button class="ignore_click_outside" (click)="selectionAction('hide_checkboxes')" i18n="@@hide_checkboxes">Hide checkboxes</button></li>\r
        </ul>\r
    </div>\r
    <div class="left_arrow arrow"   i18n-title="@@title.preview_page" title="Preview page" *ngIf="( patients && patients.length > 0 ) || ( patients1 && patients1.length > 0 )" [ngClass]="{'active':filter.filterModel.offset > 0}" (click)="search('prev',{id:'submit'})"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></div>\r
    <div class="right_arrow arrow"  i18n-title="@@title.next_page" title="Next page" *ngIf="( patients && patients.length > 0 ) || ( patients1 && patients1.length > 0 )" [ngClass]="{'active':more}" (click)="search('next',{id:'submit'})"><span class="glyphicon glyphicon glyphicon-chevron-right"></span></div>\r
    <dicom-studies-table [patients]="patients" [patients1]="patients1" [tableSchema]="tableParam.tableSchema" [config]="tableParam.config" [studyWebService]="studyWebService" (onPaginationClick)="onSubPaginationClick($event)" [searchList]="searchCurrentList"></dicom-studies-table>\r
  </div>\r
    <div id="clipboard" class="clipboard said"  *ngIf="selectedElements.preActionElements && selectedElements.preActionElements.size > 0">\r
        <div id="clipboardtoggle" class="toggle_button" (click)="showClipboardContent = !showClipboardContent">\r
            <span class="selected_size">{{selectedElements.preActionElements.size}}</span>\r
            <i id="clipboardtoggle_icon" class="glyphicon glyphicon-copy"></i>\r
        </div>\r
        <div class="content" id="clipboard_content" *ngIf="showClipboardContent">\r
            <h5 *ngIf="selectedElements.action" i18n="@@selected_objects_to_action">Selected Objects to {{selectedElements.action}}</h5>\r
            <h5 *ngIf="!selectedElements.action" i18n="@@selected_objects">Selected Objects</h5>\r
            <a class="clear_clipboard"  i18n-title="@@title.study.clear_clipboard" title="Clear clipboard" href="" (click)="$event.preventDefault();clearClipboard()">\r
                Clear <span class="glyphicon glyphicon-remove"></span>\r
            </a>\r
            <div class="table_block">\r
                <ng-container  *ngFor="let level of ['patient','study','series','instance']">\r
                    <selections-dicom-view *ngIf="selectedElements.preActionElements[level] && Object.keys(selectedElements.preActionElements[level]) && Object.keys(selectedElements.preActionElements[level]).length > 0" [selectionsDicomObjects]="selectedElements.preActionElements[level]" [dicomLevel]="level" (onRemoveFromSelection)="onRemoveFromSelection($event)"></selections-dicom-view>\r
                </ng-container>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\study\study\study.component.scss
var study_component_default2 = "/* src/app/study/study/study.component.scss */\n:host {\n  display: block;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n  float: left;\n  width: 100%;\n  overflow: auto;\n  height: 1000px;\n}\n.fixed_header {\n  background: white;\n  float: left;\n  z-index: 10;\n}\n.sticky {\n  position: sticky;\n  top: 0;\n  z-index: 14;\n  width: 100%;\n}\n.main_content .tab_content_with_fixed_header .j4care_dynamic_table .th {\n  position: sticky;\n  width: 100%;\n}\n.more_function_block {\n  position: relative;\n}\n.filter_line {\n  -webkit-box-shadow: 4px 0px 13px -3px rgba(68, 68, 68, 0.93);\n  -moz-box-shadow: 4px 0px 13px -3px rgba(68, 68, 68, 0.93);\n  box-shadow: 4px 0px 13px -3px rgba(68, 68, 68, 0.93);\n}\n.selection_actions {\n  position: fixed;\n  left: 0;\n  z-index: 999;\n  top: 28%;\n}\n.selection_actions ul.selection_functions {\n  list-style: none;\n  padding: 0;\n  width: 35px;\n}\n.selection_actions ul.selection_functions li {\n  float: left;\n}\n.selection_actions ul.selection_functions li button {\n  width: 35px;\n  height: 30px;\n  background: var(--backgroundColor);\n  border: none;\n  color: rgba(255, 255, 255, 0.47);\n  margin-bottom: 2px;\n  -webkit-box-shadow: 4px 4px 11px 0px rgba(28, 36, 43, 0.78);\n  -moz-box-shadow: 4px 4px 11px 0px rgba(28, 36, 43, 0.78);\n  box-shadow: 4px 4px 11px 0px rgba(28, 36, 43, 0.78);\n  background: var(--backgroundColor);\n}\n.selection_actions ul.selection_functions li button:hover,\n.selection_actions ul.selection_functions li button.active {\n  color: white;\n}\n.selection_actions ul.selection_functions li button:disabled {\n  color: rgba(68, 68, 68, 0.93);\n}\n.selection_actions ul.selection_functions li button .glyphicon {\n  font-size: 20px;\n}\n.selection_actions ul.checkbox_functions {\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  left: 36px;\n  top: 28%;\n}\n.selection_actions ul.checkbox_functions li {\n  width: 210px;\n  margin-bottom: 2px;\n  background: var(--backgroundColor);\n}\n.selection_actions ul.checkbox_functions li button {\n  height: 30px;\n  line-height: 30px;\n  text-align: left;\n  background: transparent;\n  border: none;\n  color: rgba(255, 255, 255, 0.47);\n  width: 100%;\n}\n.selection_actions ul.checkbox_functions li button:hover {\n  color: white;\n}\n.worklist_study,\n.worklist_mwl {\n  position: relative;\n}\n.worklist_study .right_arrow,\n.worklist_mwl .right_arrow {\n  position: absolute;\n  right: -40px;\n  top: 80%;\n}\n.worklist_study .left_arrow,\n.worklist_mwl .left_arrow {\n  position: absolute;\n  left: -35px;\n  top: 80%;\n}\n.unwrapped {\n  margin: 0;\n}\n";

// src/app/models/patient1-dicom.ts
var Patient1Dicom = class {
  constructor(attrs, studies, showAttributes, showStudies, offset) {
    this._attrs = attrs;
    this._studies = studies;
    this._showAttributes = showAttributes || false;
    this._showStudies = showStudies || false;
    this._offset = offset || 0;
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

// src/app/models/study-dicom.ts
var StudyDicom = class {
  constructor(attrs, patient, offset, hasMore, showPaginations, series, showAttributes, fromAllStudies, selected, showSeries) {
    this._attrs = attrs;
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._showPaginations = showPaginations || false;
    this._series = series || null;
    this._showAttributes = showAttributes || false;
    this._fromAllStudies = fromAllStudies || false;
    this._selected = selected || false;
    this._showSeries = showSeries || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get series() {
    return this._series;
  }
  set series(value) {
    this._series = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get fromAllStudies() {
    return this._fromAllStudies;
  }
  set fromAllStudies(value) {
    this._fromAllStudies = value;
  }
  get showSeries() {
    return this._showSeries;
  }
  set showSeries(value) {
    this._showSeries = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// src/app/models/study1-dicom.ts
var Study1Dicom = class {
  constructor(attrs, patient, offset, hasMore, showPaginations, series, showAttributes, fromAllStudies, selected, showSeries) {
    this._attrs = attrs;
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._showPaginations = showPaginations || false;
    this._series = series || null;
    this._showAttributes = showAttributes || false;
    this._fromAllStudies = fromAllStudies || false;
    this._selected = selected || false;
    this._showSeries = showSeries || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get series() {
    return this._series;
  }
  set series(value) {
    this._series = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get fromAllStudies() {
    return this._fromAllStudies;
  }
  set fromAllStudies(value) {
    this._fromAllStudies = value;
  }
  get showSeries() {
    return this._showSeries;
  }
  set showSeries(value) {
    this._showSeries = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// src/app/models/series1-dicom.ts
var Series1Dicom = class {
  constructor(attrs, patient, study, offset, hasMore, showPaginations, instances, moreInstances, showAttributes, selected, showInstances) {
    this._attrs = attrs;
    this._patient = patient;
    this._study = study;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._showPaginations = showPaginations || false;
    this._showInstances = showInstances || false;
    this._instances = instances;
    this._moreInstances = moreInstances || false;
    this._showAttributes = showAttributes || false;
    this._selected = selected || false;
    this._showInstances = showInstances || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get study() {
    return this._study;
  }
  set study(value) {
    this._study = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
  get instances() {
    return this._instances;
  }
  set instances(value) {
    this._instances = value;
  }
  get moreInstances() {
    return this._moreInstances;
  }
  set moreInstances(value) {
    this._moreInstances = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showInstances() {
    return this._showInstances;
  }
  set showInstances(value) {
    this._showInstances = value;
  }
};

// src/app/models/series-dicom.ts
var SeriesDicom = class {
  constructor(study, attrs, offset, hasMore, showPaginations, instances, moreInstances, showAttributes, selected, showInstances) {
    this._study = study;
    this._attrs = attrs;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._showPaginations = showPaginations || false;
    this._showInstances = showInstances || false;
    this._instances = instances;
    this._moreInstances = moreInstances || false;
    this._showAttributes = showAttributes || false;
    this._selected = selected || false;
    this._showInstances = showInstances || false;
  }
  get study() {
    return this._study;
  }
  set study(value) {
    this._study = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
  get instances() {
    return this._instances;
  }
  set instances(value) {
    this._instances = value;
  }
  get moreInstances() {
    return this._moreInstances;
  }
  set moreInstances(value) {
    this._moreInstances = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showInstances() {
    return this._showInstances;
  }
  set showInstances(value) {
    this._showInstances = value;
  }
};

// src/app/models/instance-dicom.ts
var InstanceDicom = class {
  constructor(series, offset, attrs, wadoQueryParams, video, image, numberOfFrames, gspsQueryParams, views, view, limit, hasMore, showPaginations, showAttributes, showFileAttributes, selected) {
    this._series = series;
    this._offset = offset;
    this._attrs = attrs;
    this._wadoQueryParams = wadoQueryParams;
    this._video = video;
    this._image = image;
    this._numberOfFrames = numberOfFrames;
    this._gspsQueryParams = gspsQueryParams;
    this._views = views;
    this._view = view;
    this._showAttributes = showAttributes || false;
    this._showFileAttributes = showFileAttributes || false;
    this._selected = selected || false;
    this._limit = limit || 20;
    this._hasMore = hasMore || false;
    this._showPaginations = showPaginations || false;
  }
  get series() {
    return this._series;
  }
  set series(value) {
    this._series = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get showFileAttributes() {
    return this._showFileAttributes;
  }
  set showFileAttributes(value) {
    this._showFileAttributes = value;
  }
  get wadoQueryParams() {
    return this._wadoQueryParams;
  }
  set wadoQueryParams(value) {
    this._wadoQueryParams = value;
  }
  get video() {
    return this._video;
  }
  set video(value) {
    this._video = value;
  }
  get image() {
    return this._image;
  }
  set image(value) {
    this._image = value;
  }
  get numberOfFrames() {
    return this._numberOfFrames;
  }
  set numberOfFrames(value) {
    this._numberOfFrames = value;
  }
  get gspsQueryParams() {
    return this._gspsQueryParams;
  }
  set gspsQueryParams(value) {
    this._gspsQueryParams = value;
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
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get limit() {
    return this._limit;
  }
  set limit(value) {
    this._limit = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// src/app/study/study/wado-wuery-params.ts
var WadoQueryParams = class {
  constructor(studyUID, seriesUID, objectUID) {
    this.studyUID = studyUID;
    this.seriesUID = seriesUID;
    this.objectUID = objectUID;
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
};

// src/app/study/study/study-web-service.model.ts
var StudyWebService = class {
  constructor(object = {}) {
    this.webServices = object.webServices;
    this.allWebServices = object.allWebServices;
    if (hasIn_default(object, "selectedWebService.dcmWebAppName")) {
      object.webServices.forEach(webService => {
        if (object.selectedWebService.dcmWebAppName === webService.dcmWebAppName) {
          this.selectedWebService = webService;
        }
      });
    }
  }
  seletWebAppFromWebAppName(dcmWebAppName) {
    if (this._webServices && dcmWebAppName && dcmWebAppName != "") {
      this._webServices.forEach(webService => {
        if (dcmWebAppName === webService.dcmWebAppName) {
          this._selectedWebService = webService;
        }
      });
    } else {
      this._selectedWebService = void 0;
    }
  }
  getWebAppByName(dcmWebAppName) {
    if (this._webServices && dcmWebAppName && dcmWebAppName != "") {
      return this._webServices.find(webService => dcmWebAppName === webService.dcmWebAppName);
    }
    return void 0;
  }
  get webServices() {
    return this._webServices;
  }
  set webServices(value) {
    this._webServices = value;
    this._selectedWebService = void 0;
    this._selectDropdownWebServices = this._webServices.map(webService => {
      return new SelectDropdown(webService.dcmWebAppName, webService.dcmWebAppName, webService.dicomDescription, void 0, void 0, webService);
    });
  }
  get selectedWebService() {
    return this._selectedWebService;
  }
  set selectedWebService(value) {
    this._selectedWebService = value;
  }
  get selectDropdownWebServices() {
    return this._selectDropdownWebServices;
  }
  set selectDropdownWebServices(value) {
    this._selectDropdownWebServices = value;
  }
  get allWebServices() {
    return this._allWebServices;
  }
  set allWebServices(value) {
    this._allWebServices = value;
  }
};

// src/app/pipes/large-int-format.pipe.ts
var LargeIntFormatPipe = class LargeIntFormatPipe2 {
  transform(value, args) {
    try {
      if (hasIn_default(value, "value")) {
        value = value.value.toString() || value;
      } else {
        value = value.toString() || value;
      }
      if (value && value.length > 3 && value.indexOf(".") === -1) {
        let result = "";
        while (value.length > 3) {
          result = " " + value.slice(-3) + result;
          value = value.slice(0, value.length - 3);
        }
        result = value + result;
        return result;
      }
      return value;
    } catch (e) {
      return value;
    }
  }
};
LargeIntFormatPipe = __decorate([Pipe({
  name: "largeIntFormat",
  standalone: false
})], LargeIntFormatPipe);

// src/app/study/study/selections-dicom-objects.model.ts
var SelectionsDicomObjects = class {
  constructor(object = {}) {
    this.size = 0;
    if (object.patient) {
      this.patient = object.patient;
      this.size += Object.keys(object.patient).length;
    } else {
      this._patient = {};
    }
    if (object.study) {
      this.study = object.study;
      this.size += Object.keys(object.study).length;
    } else {
      this._study = {};
    }
    if (object.series) {
      this.series = object.series;
      this.size += Object.keys(object.series).length;
    } else {
      this._series = {};
    }
    if (object.instance) {
      this.instance = object.instance;
      this.size += Object.keys(object.instance).length;
    } else {
      this._instance = {};
    }
    if (object.mwl) {
      this.mwl = object.mwl;
      this.size += Object.keys(object.mwl).length;
    } else {
      this._mwl = {};
    }
  }
  hasIn(dicomLevel, uniqueSelectIdObject) {
    try {
      return this[dicomLevel][uniqueSelectIdObject.id];
    } catch (e) {
      return false;
    }
  }
  toggle(dicomLevel, uniqueSelectIdObject, object) {
    if (hasIn_default(this, `${dicomLevel}["${uniqueSelectIdObject.id}"]`)) {
      delete this[dicomLevel][uniqueSelectIdObject.id];
      object.selected = false;
      this.size--;
      this.currentIndexes.splice(this.currentIndexes.indexOf(uniqueSelectIdObject.id), 1);
    } else {
      let requestReady;
      if (dicomLevel != "patient") {
        requestReady = {};
        if (hasIn_default(object, "attrs.0020000D.Value[0]")) {
          requestReady["StudyInstanceUID"] = j4care.valueOf(object.attrs["0020000D"]);
        }
        if (hasIn_default(object, "attrs.0020000E.Value[0]")) {
          set_default(requestReady, "ReferencedSeriesSequence[0]SeriesInstanceUID", j4care.valueOf(object.attrs["0020000E"]));
        }
        if (hasIn_default(object, "attrs.00080016.Value[0]")) {
          set_default(requestReady, "ReferencedSeriesSequence[0]ReferencedSOPSequence[0]ReferencedSOPClassUID", j4care.valueOf(object.attrs["00080016"]));
        }
        if (hasIn_default(object, "attrs.00080018.Value[0]")) {
          set_default(requestReady, "ReferencedSeriesSequence[0]ReferencedSOPSequence[0]ReferencedSOPInstanceUID", j4care.valueOf(object.attrs["00080018"]));
        }
      }
      this[dicomLevel][uniqueSelectIdObject.id] = {
        uniqueSelectIdObject,
        object,
        dicomLevel,
        requestReady
      };
      this.currentIndexes = this.currentIndexes || [];
      this.currentIndexes.push(uniqueSelectIdObject.id);
      object.selected = true;
      this.size++;
    }
  }
  getSpecificObjectSize(dicomLevel) {
    try {
      return Object.keys(this[dicomLevel]).length;
    } catch (e) {
      return 0;
    }
  }
  getAttrs(dicomLevel) {
    try {
      return Object.keys(this[dicomLevel]).map(key => this[dicomLevel][key].object.attrs);
    } catch (e) {
      return [];
    }
  }
  getAllAsArray() {
    return [...values_default(this._patient), ...values_default(this._study), ...values_default(this._series), ...values_default(this._instance), ...values_default(this._mwl)];
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get study() {
    return this._study;
  }
  set study(value) {
    this._study = value;
  }
  get series() {
    return this._series;
  }
  set series(value) {
    this._series = value;
  }
  get instance() {
    return this._instance;
  }
  set instance(value) {
    this._instance = value;
  }
  get currentIndexes() {
    return this._currentIndexes;
  }
  set currentIndexes(value) {
    this._currentIndexes = value;
  }
  get mwl() {
    return this._mwl;
  }
  set mwl(value) {
    this._mwl = value;
  }
};

// src/app/study/study/selection-action-element.models.ts
var SelectionActionElement = class {
  constructor(object) {
    if (this.action) {
      this.postActionElements = this.postActionElements || new SelectionsDicomObjects(object);
    } else {
      this.preActionElements = this.preActionElements || new SelectionsDicomObjects(object);
    }
  }
  hasIn(dicomLevel, uniqueSelectIdObject) {
    try {
      return this.preActionElements.hasIn(dicomLevel, uniqueSelectIdObject) || this.postActionElements.hasIn(dicomLevel, uniqueSelectIdObject);
    } catch (e) {
      return false;
    }
  }
  toggle(dicomLevel, uniqueSelectIdObject, object, part) {
    if (part) {
      if (!this[part]) {
        this[part] = new SelectionsDicomObjects();
      }
      this[part].toggle(dicomLevel, uniqueSelectIdObject, object);
      if (part === "preActionElements" && this.preActionElements.size === 0) {
        this.action = void 0;
      }
    } else {
      if (this.action) {
        if (!this.postActionElements) {
          this.postActionElements = new SelectionsDicomObjects();
        }
        this.postActionElements.toggle(dicomLevel, uniqueSelectIdObject, object);
      } else {
        if (!this.preActionElements) {
          this.preActionElements = new SelectionsDicomObjects();
        }
        this.preActionElements.toggle(dicomLevel, uniqueSelectIdObject, object);
      }
    }
  }
  get size() {
    try {
      if (this.action) return this.postActionElements.size;
      return this.preActionElements.size;
    } catch (e) {
      return void 0;
    }
  }
  get sizes() {
    return (this.postActionElements.size || 0) + (this.preActionElements.size || 0);
  }
  getAllAsArray() {
    if (this.action) return this.postActionElements.getAllAsArray();
    return this.preActionElements.getAllAsArray();
  }
  reset(all) {
    if (all) {
      this.action = void 0;
      this.preActionElements = new SelectionsDicomObjects();
      this.postActionElements = new SelectionsDicomObjects();
    } else {
      if (this.action) {
        this.preActionElements = new SelectionsDicomObjects();
      }
    }
  }
  resetByDicomLevel(dicomLevel, prePostMode) {
    if (prePostMode) {
      this[prePostMode] = new SelectionsDicomObjects();
    }
  }
};

// src/app/models/mwl-dicom.ts
var MwlDicom = class {
  constructor(attrs, patient, offset, hasMore, showPaginations, showAttributes, selected) {
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._attrs = attrs;
    this._showAttributes = showAttributes || false;
    this._selected = selected || false;
    this._showPaginations = showPaginations || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// src/app/models/mpps-dicom.ts
var MppsDicom = class {
  constructor(attrs, patient, offset, hasMore, showPaginations, showAttributes, selected) {
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._attrs = attrs;
    this._showAttributes = showAttributes || false;
    this._selected = selected || false;
    this._showPaginations = showPaginations || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// src/app/models/diff-dicom.ts
var DiffDicom = class {
  constructor(attrs, patient, offset, diffHeaders, showBorder, hasMore, showPaginations, showAttributes) {
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._showBorder = showBorder || false;
    this._attrs = attrs;
    this._diffHeaders = diffHeaders;
    this._showAttributes = showAttributes || false;
    this._showPaginations = showPaginations || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
  get showBorder() {
    return this._showBorder;
  }
  set showBorder(value) {
    this._showBorder = value;
  }
  get diffHeaders() {
    return this._diffHeaders;
  }
  set diffHeaders(value) {
    this._diffHeaders = value;
  }
};

// src/app/models/uwl-dicom.ts
var UwlDicom = class {
  constructor(attrs, patient, offset, hasMore, showPaginations, showAttributes, selected) {
    this._patient = patient;
    this._offset = offset || 0;
    this._hasMore = hasMore || false;
    this._attrs = attrs;
    this._showAttributes = showAttributes || false;
    this._selected = selected || false;
    this._showPaginations = showPaginations || false;
  }
  get patient() {
    return this._patient;
  }
  set patient(value) {
    this._patient = value;
  }
  get offset() {
    return this._offset;
  }
  set offset(value) {
    this._offset = value;
  }
  get hasMore() {
    return this._hasMore;
  }
  set hasMore(value) {
    this._hasMore = value;
  }
  get attrs() {
    return this._attrs;
  }
  set attrs(value) {
    this._attrs = value;
  }
  get showAttributes() {
    return this._showAttributes;
  }
  set showAttributes(value) {
    this._showAttributes = value;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
  }
  get showPaginations() {
    return this._showPaginations;
  }
  set showPaginations(value) {
    this._showPaginations = value;
  }
};

// angular:jit:template:src\app\helpers\dicom-studies-table\dicom-studies-table.component.html
var dicom_studies_table_component_default = `<h3 *ngIf="title">{{title}}</h3>\r
<div class="j4care_dynamic_table" [ngClass]="config?.cssTableClass" *ngIf="patients && patients.length > 0" (mouseleave)="active_td = ''">\r
    <!--Headers 1:-->\r
        <div class="th {{hover_mode}}" [ngClass]="config?.cssThClass" [ngStyle]="{top:config.headerTop || '186px'}">\r
            <div class="td"\r
                 *ngFor="let table of tableSchema[hover_mode]"\r
                 [ngClass]="[config?.cssTdClass || '',(table.type != 'value' && table.type != 'pipe')?'empty_td':'not_empty_td', (table.elementId && active_td === table.elementId) ? 'active':'', table.type || '']"\r
                 [ngStyle]="{width: table.calculatedWidth}"\r
            >\r
                <ng-container *ngIf="table.type === 'value' || table.type === 'pipe'">{{table.header}}</ng-container>\r
                <ng-container *ngIf="!(table.type === 'value' || table.type === 'pipe')">&nbsp;</ng-container>\r
            </div>\r
        </div>\r
    <!--1:END;-->\r
\r
    <!--Patient Table 1:-->\r
    <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let patient of patients|searchDicom:searchList;let i = index">\r
        <div class="patient_block table_item" (mouseenter)="hover_mode = 'patient'" [ngClass]="{'selected':patient.selected}" (click)="onBlockClick(patient)">\r
            <div class="td"\r
                 *ngFor="let patient_table of tableSchema.patient"\r
                 [ngClass]="[config?.cssTdClass || '', patient_table.cssClass || '', patient_table.type || '']"\r
                 [ngStyle]="{width: patient_table.calculatedWidth}"\r
                 [ngSwitch]="patient_table.type"\r
                 (mouseenter)="active_td = patient_table.elementId"\r
                 tooltip="{{getTooltip(patient, patient_table)}}"\r
            >\r
                <ng-container *ngSwitchCase="'dummy'"></ng-container>\r
                <ng-container *ngSwitchCase="'index'">{{patient.offset + 1}}</ng-container>\r
                <ng-container *ngSwitchCase="'actions'">\r
<!--                    <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="patient.selected = !patient.selected">\r
                        <span *ngIf="!patient.selected" class="glyphicon glyphicon-unchecked"></span>\r
                        <span *ngIf="patient.selected" class="glyphicon glyphicon-check"></span>\r
                    </button>-->\r
                    <ng-container *ngFor="let action of patient_table.actions">\r
                      <a class="pointer dicom_table_buttons" *ngIf="(!action.showIf || action.showIf(patient, config))" (click)="$event.preventDefault();action.click(patient,'patient')" title="{{action.title || ''}}">\r
                          <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                          <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                          @if(action.icon.svg && action.icon.svg != ''){\r
                              <div [innerHTML]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                          }\r
                      </a>\r
                    </ng-container>\r
                </ng-container>\r
                <ng-container *ngSwitchCase="'actions-menu'">\r
                    <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                    <mat-menu #menu="matMenu" class="study_action_buttons patient">\r
<!--                        <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="patient.selected = !patient.selected">\r
                            <span *ngIf="!patient.selected" class="glyphicon glyphicon-unchecked"></span>\r
                            <span *ngIf="patient.selected" class="glyphicon glyphicon-check"></span>\r
                        </button>-->\r
                        <ng-container *ngFor="let action of patient_table.menu.actions">\r
                            <a *ngIf="(!action.showIf || action.showIf(patient, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(patient,'patient')" title="{{action.title || ''}}">\r
                                <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                @if(action.icon.svg && action.icon.svg != ''){\r
                                    <div [innerHTML]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                }\r
                            </a>\r
                        </ng-container>\r
                    </mat-menu>\r
                </ng-container>\r
                <ng-container *ngSwitchCase="'pipe'">\r
                    <span [innerHTML]="getDynamicPipeValue(patient,patient_table)"></span>\r
<!--                    <span *ngIf="patient_table.pathToValue" [innerHTML]="_.get(patient.attrs,patient_table.pathToValue) | dynamicPipe:patient_table.pipe">\r
                    </span>\r
                    <span *ngIf="!patient_table.pathToValue" [innerHTML]="patient.attrs | dynamicPipe:patient_table.pipe">\r
                    </span>-->\r
                </ng-container>\r
                <ng-container *ngSwitchCase="'value'">\r
                    <ng-container *ngIf="!patient_table.hook">\r
                        {{_.get(patient.attrs,patient_table.pathToValue) || '&nbsp;'}}\r
                    </ng-container>\r
                    <ng-container *ngIf="patient_table.hook">\r
                        {{patient_table.hook(_.get(patient.attrs,patient_table.pathToValue) || '&nbsp;')}}\r
                    </ng-container>\r
                </ng-container>\r
            </div>\r
            <attribute-list *ngIf="patient.showAttributes" [attrs]="patient.attrs"></attribute-list>\r
            <label class="padding-left" *ngIf="patient.showAttributes && patient.xroad" i18n="@@pdw_response:">PDQs Response:</label>\r
            <attribute-list *ngIf="patient.showAttributes && patient.xroad" [attrs]="patient.xroad"></attribute-list>\r
            <custom-attribute-list *ngIf="patient && patient.showCustomAttributes" [dicomAttributesAsSubAttribute]="config.dicomAttributesAsSubAttribute"  [attributesHook]="config.attributesHook" [attributes]="patient"></custom-attribute-list>\r
        </div>\r
\r
        <!--Studies 2:-->\r
        <div *ngIf="patient.showStudies" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let study of patient.studies;let i = index">\r
                <div class="study_block table_item" (mouseenter)="hover_mode = 'studies'" [ngClass]="{'selected':study.selected}">\r
                    <div class="td"\r
                         *ngFor="let studies_table of tableSchema.studies"\r
                         [ngClass]="[config?.cssTdClass || '', studies_table.cssClass || '', studies_table.type || '']"\r
                         [ngStyle]="{width: studies_table.calculatedWidth}"\r
                         [ngSwitch]="studies_table.type"\r
                         (mouseenter)="active_td = studies_table.elementId"\r
                         tooltip="{{getTooltip(study, studies_table)}}"\r
                    >\r
                        <ng-container *ngSwitchCase="'index'">{{study.offset + 1}}</ng-container>\r
                        <ng-container *ngSwitchCase="'actions'">\r
<!--                            <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="study.selected = !study.selected">\r
                                <span *ngIf="!study.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                <span *ngIf="study.selected" class="glyphicon glyphicon-check"></span>\r
                            </button>-->\r
                            <ng-container *ngFor="let action of studies_table.actions">\r
                                <a *ngIf="(!action.showIf || action.showIf(study, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(study,'study')" title="{{action.title || ''}}">\r
                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                        <div [innerHTML]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                    }\r
                                </a>\r
                            </ng-container>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'actions-menu'">\r
<!--                            <button (click)="showStudyMenu = !showStudyMenu"><span class="glyphicon glyphicon-option-vertical"></span></button>\r
                            <div class="study_action_buttons" *ngIf="showStudyMenu">\r
                                <ng-container *ngFor="let action of studies_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(study, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(study)" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                    </a>\r
                                </ng-container>\r
                            </div>-->\r
                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                            <mat-menu #menu="matMenu" class="study_action_buttons study" (click)="$event.stopPropagation()">\r
<!--                                <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="study.selected = !study.selected">\r
                                    <span *ngIf="!study.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                    <span *ngIf="study.selected" class="glyphicon glyphicon-check"></span>\r
                                </button-->\r
                                <ng-container *ngFor="let action of studies_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(study, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(study,'study')" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                        }\r
                                    </a>\r
\r
                                </ng-container>\r
                            </mat-menu>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'pipe'">\r
                            <span [innerHTML]="getDynamicPipeValue(study,studies_table)"></span>\r
<!--\r
                            <ng-container *ngIf="studies_table.pathToValue">\r
                                {{_.get(study.attrs,studies_table.pathToValue) | dynamicPipe:studies_table.pipe}}\r
                            </ng-container>\r
                            <ng-container *ngIf="!studies_table.pathToValue">\r
                                {{study.attrs | dynamicPipe:studies_table.pipe}}\r
                            </ng-container>-->\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'value'">\r
                            <ng-container *ngIf="!studies_table.hook">\r
                                {{_.get(study.attrs, studies_table.pathToValue) || '&nbsp;'}}\r
                            </ng-container>\r
                            <ng-container *ngIf="studies_table.hook">\r
                                {{studies_table.hook(_.get(study.attrs, studies_table.pathToValue), study.attrs,studies_table.pathToValue, study)}}\r
                            </ng-container>\r
                        </ng-container>\r
                    </div>\r
                    <attribute-list *ngIf="study.showAttributes" [attrs]="study.attrs"></attribute-list>\r
                    <custom-attribute-list *ngIf="study && study.showCustomAttributes" [dicomAttributesAsSubAttribute]="config.dicomAttributesAsSubAttribute" [attributesHook]="config.attributesHook" [attributes]="study"></custom-attribute-list>\r
                </div>\r
                <!--Series 3:-->\r
                <div *ngIf="study.showSeries" class="series_main_block">\r
                    <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let serie of study.series;let i = index">\r
                        <div class="series_block table_item" (mouseenter)="hover_mode = 'series'" [ngClass]="{'selected':serie.selected}">\r
                            <div class="td"\r
                                 *ngFor="let serie_table of tableSchema.series"\r
                                 [ngClass]="[config?.cssTdClass || '', serie_table.cssClass || '', serie_table.type || '']"\r
                                 [ngStyle]="{width: serie_table.calculatedWidth}"\r
                                 [ngSwitch]="serie_table.type"\r
                                 (mouseenter)="active_td = serie_table.elementId"\r
                                 tooltip="{{getTooltip(serie, serie_table)}}"\r
                            >\r
                                <ng-container *ngSwitchCase="'index'">{{serie.offset + 1}}</ng-container>\r
                                <ng-container *ngSwitchCase="'actions'">\r
<!--                                    <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="serie.selected = !serie.selected">\r
                                        <span *ngIf="!serie.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                        <span *ngIf="serie.selected" class="glyphicon glyphicon-check"></span>\r
                                    </button>-->\r
                                    <ng-container *ngFor="let action of serie_table.actions">\r
                                        <a *ngIf="(!action.showIf || action.showIf(serie, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(serie,'series')" title="{{action.title || ''}}">\r
                                            <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                            <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                            @if(action.icon.svg && action.icon.svg != ''){\r
                                                <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                            }\r
                                        </a>\r
                                    </ng-container>\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'actions-menu'">\r
                                    <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                                    <mat-menu #menu="matMenu" class="study_action_buttons series">\r
<!--                                        <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="serie.selected = !serie.selected">\r
                                            <span *ngIf="!serie.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                            <span *ngIf="serie.selected" class="glyphicon glyphicon-check"></span>\r
                                        </button>-->\r
                                        <ng-container *ngFor="let action of serie_table.menu.actions">\r
                                            <a *ngIf="(!action.showIf || action.showIf(serie, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(serie,'series')" title="{{action.title || ''}}">\r
                                                <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                                <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                                @if(action.icon.svg && action.icon.svg != ''){\r
                                                    <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                }\r
                                            </a>\r
                                        </ng-container>\r
                                    </mat-menu>\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'pipe'">\r
                                    <span [innerHTML]="getDynamicPipeValue(serie,serie_table)"></span>\r
<!--\r
                                    <ng-container *ngIf="serie_table.pathToValue">\r
                                        {{_.get(serie.attrs,serie_table.pathToValue) | dynamicPipe:serie_table.pipe}}\r
                                    </ng-container>\r
                                    <ng-container *ngIf="!serie_table.pathToValue">\r
                                        {{serie.attrs | dynamicPipe:serie_table.pipe}}\r
                                    </ng-container>-->\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'value'">\r
                                    <ng-container *ngIf="!serie_table.hook">\r
                                        {{_.get(serie.attrs, serie_table.pathToValue) || '&nbsp;'}}\r
                                    </ng-container>\r
                                    <ng-container *ngIf="serie_table.hook">\r
                                        {{serie_table.hook(_.get(serie.attrs, serie_table.pathToValue) || '&nbsp;', serie.attrs,serie_table.pathToValue, serie)}}\r
                                    </ng-container>\r
                                </ng-container>\r
                            </div>\r
                            <attribute-list *ngIf="serie.showAttributes" [attrs]="serie.attrs"></attribute-list>\r
                            <custom-attribute-list *ngIf="serie && serie.showCustomAttributes"  [attributesHook]="config.attributesHook" [attributes]="serie" [dicomAttributesAsSubAttribute]="config.dicomAttributesAsSubAttribute"></custom-attribute-list>\r
                        </div>\r
\r
                        <!--Instance 4:-->\r
                        <div *ngIf="serie.showInstances" class="instance_main_block">\r
                            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let instance of serie.instances;let i = index">\r
                                <div class="instance_block table_item" (mouseenter)="hover_mode = 'instance'" [ngClass]="{'selected':instance.selected}">\r
                                    <div class="td"\r
                                         *ngFor="let instance_table of tableSchema.instance"\r
                                         [ngClass]="[config?.cssTdClass || '', instance_table.cssClass || '', instance_table.type || '']"\r
                                         [ngStyle]="{width: instance_table.calculatedWidth}"\r
                                         [ngSwitch]="instance_table.type"\r
                                         (mouseenter)="active_td = instance_table.elementId"\r
                                         tooltip="{{getTooltip(instance, instance_table)}}"\r
                                    >\r
                                        <ng-container *ngSwitchCase="'index'">{{instance.offset + 1}}</ng-container>\r
<!--                                        <ng-container *ngSwitchCase="'selected-checkbox'">\r
                                            <a class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="instance.selected = !instance.selected">\r
                                                <span *ngIf="!instance.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                <span *ngIf="instance.selected" class="glyphicon glyphicon-check"></span>\r
                                            </a>\r
                                        </ng-container>-->\r
                                        <ng-container *ngSwitchCase="'actions'">\r
                                            <ng-container *ngFor="let action of instance_table.actions">\r
                                                <a *ngIf="(!action.showIf || action.showIf(instance, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(instance,'instance')" title="{{action.title || ''}}">\r
                                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                    }\r
                                                </a>\r
                                            </ng-container>\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'actions-menu'">\r
                                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                                            <mat-menu #menu="matMenu" class="study_action_buttons instance">\r
<!--                                                <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="instance.selected = !instance.selected">\r
                                                    <span *ngIf="!instance.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                    <span *ngIf="instance.selected" class="glyphicon glyphicon-check"></span>\r
                                                </button>-->\r
                                                <ng-container *ngFor="let action of instance_table.menu.actions">\r
                                                    <a *ngIf="(!action.showIf || action.showIf(instance, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(instance,'instance')" title="{{action.title || ''}}">\r
                                                        <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                        }\r
                                                    </a>\r
                                                </ng-container>\r
                                            </mat-menu>\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'pipe'">\r
                                            <span [innerHTML]="getDynamicPipeValue(instance,instance_table)"></span>\r
                                            <!--\r
                                            <ng-container *ngIf="instance_table.pathToValue">\r
                                                  {{_.get(instance.attrs,instance_table.pathToValue) | dynamicPipe:instance_table.pipe}}\r
                                              </ng-container>\r
                                              <ng-container *ngIf="!instance_table.pathToValue">\r
                                                  {{instance.attrs | dynamicPipe:instance_table.pipe}}\r
                                              </ng-container>-->\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'value'">\r
                                            <ng-container *ngIf="!instance_table.hook">\r
                                                {{_.get(instance.attrs,instance_table.pathToValue) || '&nbsp;'}}\r
                                            </ng-container>\r
                                            <ng-container *ngIf="instance_table.hook">\r
                                                {{instance_table.hook(_.get(instance.attrs,instance_table.pathToValue) || '&nbsp;', instance.attrs, instance_table.pathToValue, instance)}}\r
                                            </ng-container>\r
                                        </ng-container>\r
                                    </div>\r
                                    <attribute-list *ngIf="instance.showAttributes" [attrs]="instance.attrs"></attribute-list>\r
                                    <attribute-list\r
                                            *ngIf="instance.showFileAttributes"\r
                                            [studyWebService]="studyWebService"\r
                                            [studyuid]="instance.wadoQueryParams.studyUID"\r
                                            [seriesuid]="instance.wadoQueryParams.seriesUID"\r
                                            [objectuid]="instance.wadoQueryParams.objectUID">\r
                                    </attribute-list>\r
                                    <custom-attribute-list *ngIf="instance && instance.showCustomAttributes" [dicomAttributesAsSubAttribute]="config.dicomAttributesAsSubAttribute" [attributesHook]="config.attributesHook" [attributes]="instance"></custom-attribute-list>\r
                                </div>\r
                            </div>\r
                            <div class="tr" *ngIf="serie.instances && serie.instances.length > 0 && serie.instances[0].showPaginations">\r
                                <div class="instance_block table_item">\r
                                    <div class="td td_with_centered_child">\r
                                        <div class="centered_child">\r
                                            <button\r
                                                    title="Preview page of instances"\r
                                                    class="transparent_button"\r
                                                    (click)="paginationClick(serie, 'instance', 'prev')"\r
                                                    [disabled]="serie.instances[0].offset === 0"\r
                                            ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                                            <button\r
                                                    title="Next page of instances"\r
                                                    class="transparent_button"\r
                                                    (click)="paginationClick(serie, 'instance', 'next')"\r
                                                    [disabled]="!serie.instances[0].hasMore"\r
                                            ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <!--4:END;-->\r
                    </div>\r
                    <div class="tr" *ngIf="study.series && study.series.length > 0 && study.series[0].showPaginations">\r
                        <div class="series_block table_item">\r
                            <div class="td td_with_centered_child">\r
                                <div class="centered_child">\r
                                    <button\r
                                            title="Preview page of series"\r
                                            class="transparent_button"\r
                                            (click)="paginationClick(study, 'series', 'prev')"\r
                                            [disabled]="study.series[0].offset === 0"\r
                                    ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                                    <button\r
                                            title="Next page of series"\r
                                            class="transparent_button"\r
                                            (click)="paginationClick(study, 'series', 'next')"\r
                                            [disabled]="!study.series[0].hasMore"\r
                                    ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <!--3:END;-->\r
            </div>\r
            <div class="tr" *ngIf="patient.studies && patient.studies.length > 0 && patient.studies[0].showPaginations">\r
                <div class="instance_block table_item">\r
                    <div class="td td_with_centered_child">\r
                        <div class="centered_child">\r
                            <button\r
                                    title="Preview page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'study', 'prev')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                            <button\r
                                    title="Next page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'study', 'next')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!--2:END;-->\r
        <!--mwl 2:-->\r
        <div *ngIf="patient.showMwls" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let mwl of patient.mwls;let i = index">\r
                <div class="mwl_block table_item" (mouseenter)="hover_mode = 'mwl'" [ngClass]="{'selected':mwl.selected}">\r
                    <div class="td"\r
                         *ngFor="let mwl_table of tableSchema.mwl"\r
                         [ngClass]="[config?.cssTdClass || '', mwl_table.type || '']"\r
                         [ngStyle]="{width: mwl_table.calculatedWidth}"\r
                         [ngSwitch]="mwl_table.type"\r
                         (mouseenter)="active_td = mwl_table.elementId"\r
                         tooltip="{{getTooltip(mwl, mwl_table)}}"\r
                    >\r
                        <ng-container *ngSwitchCase="'index'">{{mwl.offset + 1}}</ng-container>\r
                        <ng-container *ngSwitchCase="'actions'">\r
<!--                            <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="mwl.selected = !mwl.selected">\r
                                <span *ngIf="!mwl.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                <span *ngIf="mwl.selected" class="glyphicon glyphicon-check"></span>\r
                            </button>-->\r
                            <ng-container *ngFor="let action of mwl_table.actions">\r
                                <a *ngIf="(!action.showIf || action.showIf(mwl, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(mwl,'mwl')" title="{{action.title || ''}}">\r
                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                    }\r
                                </a>\r
                            </ng-container>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'actions-menu'">\r
                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                            <mat-menu #menu="matMenu" class="mwl_action_buttons" (click)="$event.stopPropagation()">\r
                                <ng-container *ngFor="let action of mwl_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(mwl, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(mwl,'mwl')" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                        }\r
                                    </a>\r
                                </ng-container>\r
                            </mat-menu>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'pipe'">\r
                            <span [innerHTML]="getDynamicPipeValue(mwl,mwl_table)"></span>\r
\r
<!--                            <ng-container *ngIf="mwl_table.pathToValue">\r
                                {{_.get(mwl.attrs,mwl_table.pathToValue) | dynamicPipe:mwl_table.pipe}}\r
                            </ng-container>\r
                            <ng-container *ngIf="!mwl_table.pathToValue">\r
                                {{mwl.attrs | dynamicPipe:mwl_table.pipe}}\r
                            </ng-container>-->\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'value'">{{_.get(mwl.attrs, mwl_table.pathToValue) || '&nbsp;'}}</ng-container>\r
                    </div>\r
                    <attribute-list *ngIf="mwl.showAttributes" [attrs]="mwl.attrs"></attribute-list>\r
                </div>\r
            </div>\r
        </div>\r
        <!--mwl 2:END;-->\r
        <!--uwl 2:-->\r
        <div *ngIf="patient.showUwls" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let uwl of patient.uwls;let i = index">\r
                <div class="mwl_block table_item" (mouseenter)="hover_mode = 'uwl'" [ngClass]="{'selected':uwl.selected}">\r
                    <div class="td"\r
                         *ngFor="let uwl_table of tableSchema.uwl"\r
                         [ngClass]="[config?.cssTdClass || '', uwl_table.type || '']"\r
                         [ngStyle]="{width: uwl_table.calculatedWidth}"\r
                         [ngSwitch]="uwl_table.type"\r
                         (mouseenter)="active_td = uwl_table.elementId"\r
                         tooltip="{{getTooltip(uwl, uwl_table)}}"\r
                    >\r
                        <ng-container *ngSwitchCase="'index'">{{uwl.offset + 1}}</ng-container>\r
                        <ng-container *ngSwitchCase="'actions'">\r
                            <!--                            <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="uwl.selected = !uwl.selected">\r
                                                            <span *ngIf="!uwl.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                            <span *ngIf="uwl.selected" class="glyphicon glyphicon-check"></span>\r
                                                        </button>-->\r
                            <ng-container *ngFor="let action of uwl_table.actions">\r
                                <a *ngIf="(!action.showIf || action.showIf(uwl, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(uwl,'uwl')" title="{{action.title || ''}}">\r
                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                    }\r
                                </a>\r
                            </ng-container>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'actions-menu'">\r
                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                            <mat-menu #menu="matMenu" class="uwl_action_buttons" (click)="$event.stopPropagation()">\r
                                <ng-container *ngFor="let action of uwl_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(uwl, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(uwl,'uwl')" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                        }\r
                                    </a>\r
                                </ng-container>\r
                            </mat-menu>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'pipe'">\r
                            <span [innerHTML]="getDynamicPipeValue(uwl,uwl_table)"></span>\r
\r
<!--                            <ng-container *ngIf="uwl_table.pathToValue">\r
                                {{_.get(uwl.attrs,uwl_table.pathToValue) | dynamicPipe:uwl_table.pipe}}\r
                            </ng-container>\r
                            <ng-container *ngIf="!uwl_table.pathToValue">\r
                                {{uwl.attrs | dynamicPipe:uwl_table.pipe}}\r
                            </ng-container>-->\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'value'">{{_.get(uwl.attrs, uwl_table.pathToValue) || '&nbsp;'}}</ng-container>\r
                    </div>\r
                    <attribute-list *ngIf="uwl.showAttributes" [attrs]="uwl.attrs"></attribute-list>\r
                </div>\r
            </div>\r
        </div>\r
        <!--uwl 2:END;-->\r
        <!--mpps 2:-->\r
        <div *ngIf="patient.showMpps" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let mpps of patient.mpps;let i = index">\r
                <div class="mwl_block table_item" (mouseenter)="hover_mode = 'mpps'" [ngClass]="{'selected':mpps.selected}">\r
                    <div class="td"\r
                         *ngFor="let mpps_table of tableSchema.mpps"\r
                         [ngClass]="[config?.cssTdClass || '', mpps_table.type || '']"\r
                         [ngStyle]="{width: mpps_table.calculatedWidth}"\r
                         [ngSwitch]="mpps_table.type"\r
                         (mouseenter)="active_td = mpps_table.elementId"\r
                         tooltip="{{getTooltip(mpps, mpps_table)}}"\r
                    >\r
                        <ng-container *ngSwitchCase="'index'">{{mpps.offset + 1}}</ng-container>\r
                        <ng-container *ngSwitchCase="'actions'">\r
                            <ng-container *ngFor="let action of mpps_table.actions">\r
                                <a *ngIf="(!action.showIf || action.showIf(mpps, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(mpps,'mpps')" title="{{action.title || ''}}">\r
                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                    }\r
                                </a>\r
                            </ng-container>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'actions-menu'">\r
                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                            <mat-menu #menu="matMenu" class="mpps_action_buttons" (click)="$event.stopPropagation()">\r
                                <ng-container *ngFor="let action of mpps_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(mpps, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(mpps,'mpps')" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                        }\r
                                    </a>\r
                                </ng-container>\r
                            </mat-menu>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'pipe'">\r
                            <span [innerHTML]="getDynamicPipeValue(mpps,mpps_table)"></span>\r
\r
<!--                            <ng-container *ngIf="mpps_table.pathToValue">\r
                                {{_.get(mpps.attrs,mpps_table.pathToValue) | dynamicPipe:mpps_table.pipe}}\r
                            </ng-container>\r
                            <ng-container *ngIf="!mpps_table.pathToValue">\r
                                {{mpps.attrs | dynamicPipe:mpps_table.pipe}}\r
                            </ng-container>-->\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'value'">{{_.get(mpps.attrs, mpps_table.pathToValue) || '&nbsp;'}}</ng-container>\r
                    </div>\r
                    <attribute-list *ngIf="mpps.showAttributes" [attrs]="mpps.attrs"></attribute-list>\r
                </div>\r
            </div>\r
        </div>\r
        <!--mpps 2:END;-->\r
        <!--diff 2:-->\r
        <div *ngIf="patient.showDiffs" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let diff of patient.diffs;let i = index">\r
                <div class="diff_block table_item" (mouseenter)="hover_mode = 'diff'" [ngClass]="{'selected':diff.selected}">\r
                    <div class="td"\r
                         *ngFor="let diff_table of tableSchema.diff"\r
                         [ngClass]="[config?.cssTdClass || '', diff_table.type || '']"\r
                         [ngStyle]="{width: diff_table.calculatedWidth}"\r
                         [ngSwitch]="diff_table.type"\r
                         (mouseenter)="active_td = diff_table.elementId"\r
                         tooltip="{{getTooltip(diff, diff_table)}}"\r
                    >\r
                        <ng-container *ngSwitchCase="'index'">{{diff.offset + 1}}</ng-container>\r
                        <ng-container *ngSwitchCase="'actions'">\r
                            <ng-container *ngFor="let action of diff_table.actions">\r
                                <a *ngIf="(!action.showIf || action.showIf(diff, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(diff,'diff')" title="{{action.title || ''}}">\r
                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                    }\r
                                </a>\r
                            </ng-container>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'actions-menu'">\r
                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                            <mat-menu #menu="matMenu" class="diff_action_buttons" (click)="$event.stopPropagation()">\r
                                <ng-container *ngFor="let action of diff_table.menu.actions">\r
                                    <a *ngIf="(!action.showIf || action.showIf(diff, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(diff,'diff')" title="{{action.title || ''}}">\r
                                        <span *ngIf="action.icon.tag === 'span' " class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                        }\r
                                    </a>\r
                                </ng-container>\r
                            </mat-menu>\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'pipe'">\r
                            <span [innerHTML]="getDynamicPipeValue(diff,diff_table)"></span>\r
\r
<!--                            <ng-container *ngIf="diff_table.pathToValue">\r
                                {{_.get(diff.attrs,diff_table.pathToValue) | dynamicPipe:diff_table.pipe}}\r
                            </ng-container>\r
                            <ng-container *ngIf="!diff_table.pathToValue">\r
                                {{diff.attrs | dynamicPipe:diff_table.pipe}}\r
                            </ng-container>-->\r
                        </ng-container>\r
                        <ng-container *ngSwitchCase="'value'">\r
                            <ng-container *ngIf="_.get(diff.diffHeaders, diff_table.showBorderPath)">\r
                                <span class="red_border">{{_.get(diff.diffHeaders, diff_table.pathToValue) || '&nbsp;'}}</span>\r
                            </ng-container>\r
                            <ng-container *ngIf="!_.get(diff.diffHeaders, diff_table.showBorderPath)">\r
                                {{_.get(diff.diffHeaders, diff_table.pathToValue) || '&nbsp;'}}\r
                            </ng-container>\r
                        </ng-container>\r
                    </div>\r
                    <attribute-list *ngIf="diff.showAttributes" [attrs]="diff.attrs"></attribute-list>\r
                </div>\r
            </div>\r
            <div class="tr" *ngIf="patient.diffs && patient.diffs.length > 0 && patient.diffs[0].showPaginations">\r
                <div class="instance_block table_item">\r
                    <div class="td td_with_centered_child">\r
                        <div class="centered_child">\r
                            <button\r
                                    title="Preview page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'diff', 'prev')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                            <button\r
                                    title="Next page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'diff', 'next')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!--diff 2:END;-->\r
\r
    </div>\r
    <!--1:END;-->\r
</div>\r
\r
\r
\r
<div class="j4care_dynamic_table" [ngClass]="config?.cssTableClass" *ngIf="patients1 && patients1.length > 0" (mouseleave)="active_td = ''">\r
    <!--Headers 1:-->\r
    <div class="th {{hover_mode}}" [ngClass]="config?.cssThClass" [ngStyle]="{top:config.headerTop || '186px'}">\r
        <div class="td"\r
             *ngFor="let table of tableSchema[hover_mode]"\r
             [ngClass]="[config?.cssTdClass || '',(table.type != 'value' && table.type != 'pipe')?'empty_td':'not_empty_td', (table.elementId && active_td === table.elementId) ? 'active':'', table.type || '']"\r
             [ngStyle]="{width: table.calculatedWidth}"\r
        >\r
            <ng-container *ngIf="table.type === 'value' || table.type === 'pipe'">{{table.header}}</ng-container>\r
            <ng-container *ngIf="!(table.type === 'value' || table.type === 'pipe')">&nbsp;</ng-container>\r
        </div>\r
    </div>\r
    <!--1:END;-->\r
\r
    <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let patient of patients1|searchDicom:searchList;let i = index">\r
        <div *ngIf="patient.showStudies" class="study_main_block">\r
            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let study of patient.studies;let i = index">\r
                <!--Series 3:-->\r
                <div *ngIf="study.showSeries" class="series_main_block">\r
                    <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let serie of study.series;let i = index">\r
                        <div class="series_block table_item" (mouseenter)="hover_mode = 'series'" [ngClass]="{'selected':serie.selected}">\r
                            <div class="td"\r
                                 *ngFor="let serie_table of tableSchema.series"\r
                                 [ngClass]="[config?.cssTdClass || '', serie_table.cssClass || '', serie_table.type || '']"\r
                                 [ngStyle]="{width: serie_table.calculatedWidth}"\r
                                 [ngSwitch]="serie_table.type"\r
                                 (mouseenter)="active_td = serie_table.elementId"\r
                                 tooltip="{{getTooltip(serie, serie_table)}}"\r
                            >\r
                                <ng-container *ngSwitchCase="'index'">{{serie.offset + 1}}</ng-container>\r
                                <ng-container *ngSwitchCase="'actions'">\r
                                    <!--                                    <button class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="serie.selected = !serie.selected">\r
                                                                            <span *ngIf="!serie.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                                            <span *ngIf="serie.selected" class="glyphicon glyphicon-check"></span>\r
                                                                        </button>-->\r
                                    <ng-container *ngFor="let action of serie_table.actions">\r
                                        <a *ngIf="(!action.showIf || action.showIf(serie, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(serie,'series')" title="{{action.title || ''}}">\r
                                            <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                            <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                            @if(action.icon.svg && action.icon.svg != ''){\r
                                                <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                            }\r
                                        </a>\r
                                    </ng-container>\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'actions-menu'">\r
                                    <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                                    <mat-menu #menu="matMenu" class="study_action_buttons series">\r
                                        <!--                                        <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="serie.selected = !serie.selected">\r
                                                                                    <span *ngIf="!serie.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                                                    <span *ngIf="serie.selected" class="glyphicon glyphicon-check"></span>\r
                                                                                </button>-->\r
                                        <ng-container *ngFor="let action of serie_table.menu.actions">\r
                                            <a *ngIf="(!action.showIf || action.showIf(serie, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(serie,'series')" title="{{action.title || ''}}">\r
                                                <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                                <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                                @if(action.icon.svg && action.icon.svg != ''){\r
                                                    <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                }\r
                                            </a>\r
                                        </ng-container>\r
                                    </mat-menu>\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'pipe'">\r
                                    <span [innerHTML]="getDynamicPipeValue(serie,serie_table)"></span>\r
\r
<!--                                    <ng-container *ngIf="serie_table.pathToValue">\r
                                        {{_.get(serie.attrs,serie_table.pathToValue) | dynamicPipe:serie_table.pipe}}\r
                                    </ng-container>\r
                                    <ng-container *ngIf="!serie_table.pathToValue">\r
                                        {{serie.attrs | dynamicPipe:serie_table.pipe}}\r
                                    </ng-container>-->\r
                                </ng-container>\r
                                <ng-container *ngSwitchCase="'value'">\r
                                    <ng-container *ngIf="!serie_table.hook">\r
                                        {{_.get(serie.attrs, serie_table.pathToValue) || '&nbsp;'}}\r
                                    </ng-container>\r
                                    <ng-container *ngIf="serie_table.hook">\r
                                        {{serie_table.hook(_.get(serie.attrs, serie_table.pathToValue) || '&nbsp;', serie.attrs,serie_table.pathToValue, serie)}}\r
                                    </ng-container>\r
                                </ng-container>\r
                            </div>\r
                            <attribute-list *ngIf="serie.showAttributes" [attrs]="serie.attrs"></attribute-list>\r
                        </div>\r
\r
                        <!--Instance 4:-->\r
                        <div *ngIf="serie.showInstances" class="instance_main_block">\r
                            <div class="tr" [ngClass]="config?.cssTrClass" *ngFor="let instance of serie.instances;let i = index">\r
                                <div class="instance_block table_item" (mouseenter)="hover_mode = 'instance'" [ngClass]="{'selected':instance.selected}">\r
                                    <div class="td"\r
                                         *ngFor="let instance_table of tableSchema.instance"\r
                                         [ngClass]="[config?.cssTdClass || '', instance_table.cssClass || '', instance_table.type || '']"\r
                                         [ngStyle]="{width: instance_table.calculatedWidth}"\r
                                         [ngSwitch]="instance_table.type"\r
                                         (mouseenter)="active_td = instance_table.elementId"\r
                                         tooltip="{{getTooltip(instance, instance_table)}}"\r
                                    >\r
                                        <ng-container *ngSwitchCase="'index'">{{instance.offset + 1}}</ng-container>\r
                                        <!--                                        <ng-container *ngSwitchCase="'selected-checkbox'">\r
                                                                                    <a class="pointer dicom_table_buttons" *ngIf="config.showCheckboxes" title="Select" (click)="instance.selected = !instance.selected">\r
                                                                                        <span *ngIf="!instance.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                                                        <span *ngIf="instance.selected" class="glyphicon glyphicon-check"></span>\r
                                                                                    </a>\r
                                                                                </ng-container>-->\r
                                        <ng-container *ngSwitchCase="'actions'">\r
                                            <ng-container *ngFor="let action of instance_table.actions">\r
                                                <a *ngIf="(!action.showIf || action.showIf(instance, config))" class="pointer dicom_table_buttons"  (click)="$event.preventDefault();action.click(instance,'instance')" title="{{action.title || ''}}">\r
                                                    <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</span>\r
                                                    <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}}">{{action.icon.text||''}}</i>\r
                                                    @if(action.icon.svg && action.icon.svg != ''){\r
                                                        <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                    }\r
                                                </a>\r
                                            </ng-container>\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'actions-menu'">\r
                                            <a mat-button [matMenuTriggerFor]="menu" class="pointer dicom_table_buttons" ><span class="glyphicon glyphicon-option-vertical"></span></a>\r
                                            <mat-menu #menu="matMenu" class="study_action_buttons instance">\r
                                                <!--                                                <button class="pointer dicom_table_buttons" *ngIf="!config.showCheckboxes" title="Select" (click)="instance.selected = !instance.selected">\r
                                                                                                    <span *ngIf="!instance.selected" class="glyphicon glyphicon-unchecked"></span>\r
                                                                                                    <span *ngIf="instance.selected" class="glyphicon glyphicon-check"></span>\r
                                                                                                </button>-->\r
                                                <ng-container *ngFor="let action of instance_table.menu.actions">\r
                                                    <a *ngIf="(!action.showIf || action.showIf(instance, config))" class="pointer dicom_table_buttons" (click)="$event.preventDefault();action.click(instance,'instance')" title="{{action.title || ''}}">\r
                                                        <span *ngIf="action.icon.tag === 'span'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</span>\r
                                                        <i *ngIf="action.icon.tag === 'i'" class="{{action.icon.cssClass||''}} menu_icon">{{action.icon.text||''}}</i>\r
                                                        @if(action.icon.svg && action.icon.svg != ''){\r
                                                            <div [svg]="action.icon.svg" class="{{action.icon.cssClass||''}}"></div>\r
                                                        }\r
                                                    </a>\r
                                                </ng-container>\r
                                            </mat-menu>\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'pipe'">\r
                                            <span [innerHTML]="getDynamicPipeValue(instance,instance_table)"></span>\r
\r
   <!--                                         <ng-container *ngIf="instance_table.pathToValue">\r
                                                {{_.get(instance.attrs,instance_table.pathToValue) | dynamicPipe:instance_table.pipe}}\r
                                            </ng-container>\r
                                            <ng-container *ngIf="!instance_table.pathToValue">\r
                                                {{instance.attrs | dynamicPipe:instance_table.pipe}}\r
                                            </ng-container>-->\r
                                        </ng-container>\r
                                        <ng-container *ngSwitchCase="'value'">\r
                                            <ng-container *ngIf="!instance_table.hook">\r
                                                {{_.get(instance.attrs,instance_table.pathToValue) || '&nbsp;'}}\r
                                            </ng-container>\r
                                            <ng-container *ngIf="instance_table.hook">\r
                                                {{instance_table.hook(_.get(instance.attrs,instance_table.pathToValue) || '&nbsp;', instance.attrs, instance_table.pathToValue, instance)}}\r
                                            </ng-container>\r
                                        </ng-container>\r
                                    </div>\r
                                    <attribute-list *ngIf="instance.showAttributes" [attrs]="instance.attrs"></attribute-list>\r
                                    <attribute-list\r
                                            *ngIf="instance.showFileAttributes"\r
                                            [studyWebService]="studyWebService"\r
                                            [studyuid]="instance.wadoQueryParams.studyUID"\r
                                            [seriesuid]="instance.wadoQueryParams.seriesUID"\r
                                            [objectuid]="instance.wadoQueryParams.objectUID">\r
                                    </attribute-list>\r
                                </div>\r
                            </div>\r
                            <div class="tr" *ngIf="serie.instances && serie.instances.length > 0 && serie.instances[0].showPaginations">\r
                                <div class="instance_block table_item">\r
                                    <div class="td td_with_centered_child">\r
                                        <div class="centered_child">\r
                                            <button\r
                                                    title="Preview page of instances"\r
                                                    class="transparent_button"\r
                                                    (click)="paginationClick(serie, 'instance', 'prev')"\r
                                                    [disabled]="serie.instances[0].offset === 0"\r
                                            ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                                            <button\r
                                                    title="Next page of instances"\r
                                                    class="transparent_button"\r
                                                    (click)="paginationClick(serie, 'instance', 'next')"\r
                                                    [disabled]="!serie.instances[0].hasMore"\r
                                            ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <!--4:END;-->\r
                    </div>\r
                    <div class="tr" *ngIf="study.series && study.series.length > 0 && study.series[0].showPaginations">\r
                        <div class="series_block table_item">\r
                            <div class="td td_with_centered_child">\r
                                <div class="centered_child">\r
                                    <button\r
                                            title="Preview page of series"\r
                                            class="transparent_button"\r
                                            (click)="paginationClick(study, 'series', 'prev')"\r
                                            [disabled]="study.series[0].offset === 0"\r
                                    ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                                    <button\r
                                            title="Next page of series"\r
                                            class="transparent_button"\r
                                            (click)="paginationClick(study, 'series', 'next')"\r
                                            [disabled]="!study.series[0].hasMore"\r
                                    ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <!--3:END;-->\r
            </div>\r
            <div class="tr" *ngIf="patient.studies && patient.studies.length > 0 && patient.studies[0].showPaginations">\r
                <div class="instance_block table_item">\r
                    <div class="td td_with_centered_child">\r
                        <div class="centered_child">\r
                            <button\r
                                    title="Preview page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'study', 'prev')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-left"></span></button>\r
                            <button\r
                                    title="Next page of studies"\r
                                    class="transparent_button"\r
                                    (click)="paginationClick(patient, 'study', 'next')"\r
                            ><span class="glyphicon glyphicon glyphicon-chevron-right"></span></button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!--2:END;-->\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\helpers\dicom-studies-table\dicom-studies-table.component.scss
var dicom_studies_table_component_default2 = "/* src/app/helpers/dicom-studies-table/dicom-studies-table.component.scss */\n.j4care_dynamic_table {\n  float: left;\n  width: 100%;\n  margin-bottom: 40px;\n}\n.j4care_dynamic_table .th {\n  width: 100%;\n  float: left;\n  background: var(--backgroundColor);\n  color: white;\n  -webkit-box-shadow: 5px 3px 13px 0px rgba(68, 68, 68, 0.93);\n  -moz-box-shadow: 5px 3px 13px 0px rgba(68, 68, 68, 0.93);\n  box-shadow: 5px 3px 13px 0px rgba(68, 68, 68, 0.93);\n  margin-bottom: 1px;\n}\n.j4care_dynamic_table .th.studies,\n.j4care_dynamic_table .th.uwl,\n.j4care_dynamic_table .th.mpps {\n  padding-left: 13px;\n}\n.j4care_dynamic_table .th.series {\n  padding-left: 33px;\n}\n.j4care_dynamic_table .th.instance {\n  padding-left: 50px;\n}\n.j4care_dynamic_table .th.diff {\n  padding-left: 42px;\n}\n.j4care_dynamic_table .th .td {\n  float: left;\n  padding: 5px 7px;\n}\n.j4care_dynamic_table .th .td:last-child {\n  border: none;\n}\n.j4care_dynamic_table .th .td.not_empty_td {\n  border-left: 1px solid white;\n  overflow: hidden;\n  max-height: 30px;\n}\n.j4care_dynamic_table .th .td.value.active,\n.j4care_dynamic_table .th .td.pipe.active {\n  background: var(--pink);\n  color: white;\n}\n.j4care_dynamic_table .tr {\n  width: 100%;\n  float: left;\n}\n.j4care_dynamic_table .tr .td {\n  float: left;\n  padding: 5px 7px;\n  overflow: hidden;\n  height: 30px;\n}\n.j4care_dynamic_table .tr .td.actions,\n.j4care_dynamic_table .tr .td.actions-menu {\n  border-right: none;\n}\n.j4care_dynamic_table .tr .td.value,\n.j4care_dynamic_table .tr .td.pipe {\n  border-right: 1px solid rgba(0, 0, 0, 0.19);\n}\n.j4care_dynamic_table .tr .td.value:first-child {\n  border-left: 1px solid rgba(0, 0, 0, 0.19);\n}\n.j4care_dynamic_table .tr .td.border-left {\n  border-left: 1px solid rgba(0, 0, 0, 0.19);\n}\n.j4care_dynamic_table .tr .td.border-right {\n  border-right: 1px solid rgba(0, 0, 0, 0.19);\n}\n.j4care_dynamic_table .tr .td:last-child {\n  border: none;\n}\n.j4care_dynamic_table .tr .td a .glyphicon {\n  position: static;\n}\n.j4care_dynamic_table .tr .td.active,\n.j4care_dynamic_table .tr .td.value:hover,\n.j4care_dynamic_table .tr .td.pipe:hover {\n  background: var(--pink);\n  color: white;\n}\n.j4care_dynamic_table .tr .td .actions_menu {\n  background: white;\n  display: block;\n  max-width: 90px;\n  z-index: 9999;\n  position: fixed;\n  -webkit-box-shadow: 2px 2px 2px #444;\n  -moz-box-shadow: 2px 2px 2px #444;\n  box-shadow: 2px 2px 2px #444;\n  margin-top: 40px;\n}\n.j4care_dynamic_table .tr .td .actions_menu ul {\n  list-style: none;\n  padding: 0;\n}\n.j4care_dynamic_table .tr .td .actions_menu ul li {\n  display: block;\n  width: 30px;\n  height: 25px;\n  float: left;\n}\n.j4care_dynamic_table .tr .td .actions_menu ul li a {\n  width: 100%;\n  height: 100%;\n}\n.j4care_dynamic_table .tr .td.actions-menu .dicom_table_buttons,\n.j4care_dynamic_table .tr .td.actions .dicom_table_buttons {\n  text-align: center;\n  float: left;\n}\n.j4care_dynamic_table .tr .td.index {\n  text-align: center;\n}\n.j4care_dynamic_table .tr .td .dicom_table_buttons {\n  width: 25px;\n  display: block;\n  text-align: center;\n  min-width: 25px;\n  height: 20px;\n  line-height: 12px;\n  padding: 0;\n}\n.j4care_dynamic_table .tr .td .red_border {\n  border-bottom: 1px solid red;\n}\n.j4care_dynamic_table .tr .td.big_field:hover {\n  position: relative;\n  overflow: visible;\n  animation: 0.5s height ease-in-out;\n}\n.j4care_dynamic_table .tr .td.big_field:hover span {\n  height: auto;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  background: #6b4470;\n  padding: 5px 7px;\n  color: white;\n  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.7882352941);\n}\n.j4care_dynamic_table .table_item {\n  float: left;\n  width: 100%;\n  background: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.46);\n  margin-bottom: 1px;\n}\n.j4care_dynamic_table .table_item.patient_block {\n  -webkit-box-shadow: 4px 3px 6px rgba(68, 68, 68, 0.57);\n  -moz-box-shadow: 4px 3px 6px rgba(68, 68, 68, 0.57);\n  box-shadow: 4px 3px 6px rgba(68, 68, 68, 0.57);\n  z-index: 4;\n  position: relative;\n}\n.j4care_dynamic_table .table_item.patient_block.selected {\n  background: var(--tableSelectColor);\n}\n.j4care_dynamic_table .table_item.study_block,\n.j4care_dynamic_table .table_item.mwl_block,\n.j4care_dynamic_table .table_item.diff_block {\n  -webkit-box-shadow: 2px 3px 10px 0px rgba(68, 68, 68, 0.7);\n  -moz-box-shadow: 2px 3px 10px 0px rgba(68, 68, 68, 0.7);\n  box-shadow: 2px 3px 10px 0px rgba(68, 68, 68, 0.7);\n  margin-left: 2px;\n  width: calc(100% - 2px);\n  background: rgba(235, 235, 235, 0.9);\n  padding-left: 13px;\n  position: relative;\n  z-index: 3;\n}\n.j4care_dynamic_table .table_item.study_block.selected,\n.j4care_dynamic_table .table_item.mwl_block.selected,\n.j4care_dynamic_table .table_item.diff_block.selected {\n  background: rgba(67, 139, 173, 0.78);\n}\n.j4care_dynamic_table .table_item.diff_block {\n  padding-left: 42px;\n}\n.j4care_dynamic_table .table_item.series_block {\n  -webkit-box-shadow: 1px 1px 8px 0px rgba(68, 68, 68, 0.7);\n  -moz-box-shadow: 1px 1px 8px 0px rgba(68, 68, 68, 0.7);\n  box-shadow: 1px 1px 8px 0px rgba(68, 68, 68, 0.7);\n  margin-left: 4px;\n  width: calc(100% - 4px);\n  background: rgba(215, 215, 215, 0.8);\n  padding-left: 30px;\n  position: relative;\n  z-index: 2;\n}\n.j4care_dynamic_table .table_item.series_block.selected {\n  background: rgba(67, 139, 173, 0.68);\n}\n.j4care_dynamic_table .table_item.instance_block {\n  -webkit-box-shadow: 1px 0px 8px 0px rgba(68, 68, 68, 0.7);\n  -moz-box-shadow: 1px 0px 8px 0px rgba(68, 68, 68, 0.7);\n  box-shadow: 1px 0px 8px 0px rgba(68, 68, 68, 0.7);\n  margin-left: 6px;\n  width: calc(100% - 6px);\n  background: rgba(195, 195, 195, 0.7);\n  padding-left: 45px;\n  position: relative;\n  z-index: 1;\n}\n.j4care_dynamic_table .table_item.instance_block.selected {\n  background: rgba(67, 139, 173, 0.58);\n}\n.j4care_dynamic_table .td_with_centered_child {\n  text-align: center;\n  width: 100%;\n}\n.j4care_dynamic_table .td_with_centered_child .centered_child {\n  display: inline-block;\n}\n.j4care_dynamic_table .td_with_centered_child .centered_child button {\n  color: rgba(28, 36, 43, 0.85);\n}\n.j4care_dynamic_table .td_with_centered_child .centered_child button:hover {\n  color: #1c242b;\n  cursor: pointer;\n}\n.j4care_dynamic_table .td_with_centered_child .centered_child button[disabled],\n.j4care_dynamic_table .td_with_centered_child .centered_child button[disabled]:hover {\n  color: rgba(28, 36, 43, 0.6);\n}\n";

// angular:jit:template:src\app\helpers\custom-attribute-list\custom-attribute-list.component.html
var custom_attribute_list_component_default = '<table class="table table-bordered table-condensed attribute_list custom_attribute_list">\r\n    <ng-container *ngIf="localAttributes">\r\n        <tr *ngFor="let elem of localAttributes">\r\n            <ng-container *ngIf="dicomAttributesAsSubAttribute && elem.key === dicomAttributesAsSubAttribute.key">\r\n                <td colspan="2">\r\n                    <attribute-list [attrs]="elem.value"></attribute-list>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container *ngIf="!(dicomAttributesAsSubAttribute && elem.key === dicomAttributesAsSubAttribute.key)">\r\n                <td>{{elem.key}}</td>\r\n                <td>{{elem.value}}</td>\r\n            </ng-container>\r\n        </tr>\r\n    </ng-container>\r\n</table>';

// angular:jit:style:src\app\helpers\custom-attribute-list\custom-attribute-list.component.scss
var custom_attribute_list_component_default2 = "/* src/app/helpers/custom-attribute-list/custom-attribute-list.component.scss */\n";

// src/app/helpers/custom-attribute-list/custom-attribute-list.component.ts
var _a;
var CustomAttributeListComponent = (_a = class {
  set attributes(value) {
    if (this.attributesHook) {
      this.localAttributes = this.attributesHook(value);
    } else {
      this.localAttributes = value;
    }
  }
  get visible() {
    return this.localAttributes;
  }
  constructor() {}
  ngOnInit() {}
}, _a.ctorParameters = () => [], _a.propDecorators = {
  dicomAttributesAsSubAttribute: [{
    type: Input
  }],
  attributesHook: [{
    type: Input
  }],
  attributes: [{
    type: Input
  }]
}, _a);
CustomAttributeListComponent = __decorate([Component({
  selector: "custom-attribute-list",
  template: custom_attribute_list_component_default,
  imports: [AttributeListComponent, CommonModule],
  standalone: true,
  styles: [custom_attribute_list_component_default2]
})], CustomAttributeListComponent);

// src/app/pipes/search-dicom.pipe.ts
var SearchDicomPipe = class SearchDicomPipe2 {
  transform(value, args) {
    if (args === "" || !args) {
      return value;
    } else {
      if (value) {
        return value.filter(obj => {
          let studies = "";
          if (hasIn_default(obj, "studies[0].attrs")) {
            get_default(obj, "studies").forEach(study => {
              studies += JSON.stringify(study.attrs).toLowerCase();
            });
          } else {
            if (hasIn_default(obj, "attrs[0]")) {
              studies = JSON.stringify(obj.attrs).toLowerCase();
            }
          }
          return studies.indexOf(args.toLowerCase()) !== -1;
        });
      }
    }
  }
};
SearchDicomPipe = __decorate([Pipe({
  name: "searchDicom",
  standalone: true
})], SearchDicomPipe);

// src/app/helpers/svg/svg.directive.ts
var _a2;
var SvgDirective = (_a2 = class {
  constructor(el) {
    this.el = el;
    this.parser = new DOMParser();
  }
  ngOnInit() {
    if (this.svg && this.svg.trim().substring(0, 4) === "<svg" && this.svg.trim().substring(this.svg.trim().length - 6) === "</svg>") {
      this.createSvg();
    }
  }
  createSvg() {
    let img = this.parser.parseFromString(this.svg, "image/svg+xml");
    if (this.svgWidth) {
      img.documentElement.setAttribute("width", this.svgWidth);
    }
    if (this.svgHeight) {
      img.documentElement.setAttribute("height", this.svgHeight);
    }
    this.el.nativeElement.appendChild(img.documentElement);
  }
}, _a2.ctorParameters = () => [{
  type: ElementRef
}], _a2.propDecorators = {
  svg: [{
    type: Input
  }],
  svgWidth: [{
    type: Input
  }],
  svgHeight: [{
    type: Input
  }]
}, _a2);
SvgDirective = __decorate([Directive({
  selector: "[svg]",
  standalone: true
})], SvgDirective);

// src/app/helpers/dicom-studies-table/dicom-studies-table.component.ts
var _a3;
var DicomStudiesTableComponent = (_a3 = class {
  constructor(dynamicPipe) {
    this.dynamicPipe = dynamicPipe;
    this._ = lodash_exports;
    this.onPaginationClick = new EventEmitter();
    this.hover_mode = "patient";
    this.active_td = "";
    this.showStudyMenu = false;
  }
  ngOnInit() {
    this._config.offset = this._config.offset || 0;
  }
  get tableSchema() {
    return this._tableSchema;
  }
  set tableSchema(value) {
    value.patient = j4care.calculateWidthOfTable(value.patient);
    value.studies = j4care.calculateWidthOfTable(value.studies);
    value.series = j4care.calculateWidthOfTable(value.series);
    value.instance = j4care.calculateWidthOfTable(value.instance);
    value.mwl = j4care.calculateWidthOfTable(value.mwl);
    value.mpps = j4care.calculateWidthOfTable(value.mpps);
    value.uwl = j4care.calculateWidthOfTable(value.uwl);
    value.diff = j4care.calculateWidthOfTable(value.diff);
    this._tableSchema = value;
  }
  get config() {
    return this._config;
  }
  set config(config) {
    config.offset = config.offset || 0;
    this._config = config;
  }
  paginationClick(object, level, direction) {
    this.onPaginationClick.emit({
      object,
      level,
      direction
    });
  }
  keyDown(event) {
    console.log("e", event);
    console.log("this.presedKey", this.pressedKey);
    this.pressedKey = event.keyCode;
  }
  keyUp(event) {
    console.log("e", event);
    console.log("this.presedKey", this.pressedKey);
    this.pressedKey = void 0;
  }
  onBlockClick(object) {
    console.log("this.presedKey", this.pressedKey);
    if (this.pressedKey === 17) {
      object.selected = !object.selected;
    }
  }
  getTooltip(object, table) {
    if (table.type === "value") {
      if (table.hook) {
        return table.hook(get_default(object.attrs, table.pathToValue), object.attrs, table.pathToValue, object);
      } else {
        return get_default(object.attrs, table.pathToValue);
      }
    } else {
      if (table.type === "pipe" || table.pipe) {
        if (table.hideTooltip) {
          return;
        }
        if (table.pathToValue) {
          if (table.saveTheOriginalValueOnTooltip) {
            let extractOriginal = get_default(object.attrs, table.pathToValue);
            if (extractOriginal && extractOriginal["Alphabetic"]) {
              extractOriginal = extractOriginal["Alphabetic"];
            }
            return JSON.stringify({
              original: extractOriginal,
              transformed: this.dynamicPipe.transform(get_default(object.attrs, table.pathToValue), table.pipe)
            });
          } else {
            return this.getDynamicPipeValue(object, table, true);
          }
        }
        return this.getDynamicPipeValue(object, table, true);
      }
    }
  }
  getDynamicPipeValue(object, table, tooltipMode) {
    return j4care.getDynamicPipeValue(object, table, this.dynamicPipe, tooltipMode);
  }
}, _a3.ctorParameters = () => [{
  type: DynamicPipePipe
}], _a3.propDecorators = {
  patients: [{
    type: Input
  }],
  patients1: [{
    type: Input
  }],
  title: [{
    type: Input
  }],
  studyWebService: [{
    type: Input
  }],
  onPaginationClick: [{
    type: Output
  }],
  searchList: [{
    type: Input
  }],
  tableSchema: [{
    type: Input,
    args: ["tableSchema"]
  }],
  config: [{
    type: Input,
    args: ["config"]
  }],
  keyDown: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }],
  keyUp: [{
    type: HostListener,
    args: ["document:keyup", ["$event"]]
  }]
}, _a3);
DicomStudiesTableComponent = __decorate([Component({
  selector: "dicom-studies-table",
  template: dicom_studies_table_component_default,
  imports: [NgClass, NgStyle, NgSwitch, TooltipDirective, MatMenuTrigger, MatMenu, AttributeListComponent, CustomAttributeListComponent, CommonModule, SearchDicomPipe, SvgDirective],
  standalone: true,
  styles: [dicom_studies_table_component_default2]
})], DicomStudiesTableComponent);

// src/app/study/study-tab.component.ts
var _a4;
var StudyTabComponent = (_a4 = class {
  constructor() {}
}, _a4.ctorParameters = () => [], _a4);
StudyTabComponent = __decorate([Component({
  selector: "study-tab",
  template: `
        <ul class="nav nav-tabs" role="tablist">
            <li [permission]="{id:'tab-study-patient',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                         routerLink="/study/patient"
                                                                                                                         routerLinkActive="active"
                                                                                                                         i18n="@@patients">Patients</a>
            </li>
            <li [permission]="{id:'tab-study-study',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                       routerLink="/study/study"
                                                                                                                       routerLinkActive="active"
                                                                                                                       i18n="@@studies">Studies</a>
            </li>
            <li [permission]="{id:'tab-study-series',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                        routerLink="/study/series"
                                                                                                                        routerLinkActive="active"
                                                                                                                        i18n="@@series">Series</a>
            </li>
            <li [permission]="{id:'tab-study-mwl',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                     routerLink="/study/mwl"
                                                                                                                     routerLinkActive="active"
                                                                                                                     i18n="@@mwl">MWL</a>
            </li>
            <li [permission]="{id:'tab-study-mpps',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                      routerLink="/study/mpps"
                                                                                                                      routerLinkActive="active"
                                                                                                                      i18n="@@mpps">MPPS</a>
            </li>
            <li [permission]="{id:'tab-study-uwl',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                     routerLink="/study/uwl"
                                                                                                                     routerLinkActive="active"
                                                                                                                     i18n="@@work_items">Work
                Items</a></li>
            <li [permission]="{id:'tab-study-diff',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab"
                                                                                                                      routerLink="/study/diff"
                                                                                                                      routerLinkActive="active"
                                                                                                                      i18n="@@navigation.tab.diffs">Compare</a>
            </li>
        </ul>
    `,
  imports: [PermissionDirective, RouterLinkActive, RouterLink, CommonModule],
  standalone: true
})], StudyTabComponent);

// angular:jit:template:src\app\widgets\dialogs\fhir-dialog\fhir-dialog.component.html
var fhir_dialog_component_default = `<div class="vex vex-theme-os clone" xmlns="http://www.w3.org/1999/html">\r
    <div class="vex-dialog-form">\r
        <h5 i18n="@@study.confirm_create_fhir_image_study">Creating a FHIR Imaging Study</h5>\r
        <div class="content">\r
            <div class="filter">\r
                <div class="filter_block">\r
                    <div class="line">\r
                        <label i18n="@@web_app_service">Web App Service</label>\r
                        <dcm-drop-down [options]="fhirWebAppsSelectDropdowns.selectDropdownWebServices" [(model)]="selectedWebServiceName"\r
                                       [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                                       (modelChange)="webAppModelChange($event)">\r
                        </dcm-drop-down>\r
                    </div>\r
                    <div class="line">\r
                        <label i18n="@@accpet_header">Accept Header</label>\r
                        <dcm-drop-down [options]="responseTypeHeaderDropdowns" [(model)]="responseHeaderType"\r
                                       [editable]="false" [showSearchField]="false" [multiSelectMode]="false" [showStar]="false"\r
                                       (modelChange)="responseHeaderType = $event">\r
                        </dcm-drop-down>\r
                    </div>\r
                </div>\r
            </div>\r
            @if (response) {\r
                <div class="form_input response_block">\r
                    <div class="response_switch_buttons">\r
                        @if (responseType === 'xml') {\r
                            <button class="btn-default" [ngClass]="{'active':responseButton==='xml'}" (click)="responseButton =  'xml'">XML</button>\r
                        } @else if (responseType === 'json') {\r
                            <button class="btn-default" [ngClass]="{'active':responseButton==='json'}" (click)="responseButton =  'json'">JSON</button>\r
                        }\r
                        <button class="btn-default" [ngClass]="{'active':responseButton==='headers'}" (click)="responseButton =  'headers'">HEADERS</button>\r
                    </div>\r
                    <div class="response_content">\r
                        @switch (responseButton) {\r
                            @case ("xml") {\r
                                <pre class="json_response">{{response}}</pre>\r
                            }\r
                            @case ("json") {\r
                                <pre class="json_response">{{response|json}}</pre>\r
                            }\r
                            @case ("headers") {\r
                                <table>\r
                                    <tr>\r
                                        <th i18n="@@header_key">Header key</th>\r
                                        <th i18n="@@header_value">Header value</th>\r
                                    </tr>\r
                                    @for (header of headers; track header.key){\r
                                        <tr>\r
                                            <td>{{header.key}}:</td>\r
                                            <td>{{header.value}}</td>\r
                                        </tr>\r
                                    }\r
                                </table>\r
                            }\r
                        }\r
                    </div>\r
\r
                </div>\r
            }\r
        </div>\r
        <div class="dialogbuttons">\r
            <button [disabled]="response" class="save" type="button" (click)="save()" i18n="@@SAVE">SAVE</button>\r
            <button class="cancle" type="button" (click)="dialogRef.close(null)" i18n="@@CLOSE">CLOSE</button>\r
        </div>\r
    </div>\r
</div>\r
`;

// angular:jit:style:src\app\widgets\dialogs\fhir-dialog\fhir-dialog.component.scss
var fhir_dialog_component_default2 = "/* src/app/widgets/dialogs/fhir-dialog/fhir-dialog.component.scss */\n.json_response {\n  overflow: auto;\n  max-height: 300px;\n}\n.filter {\n  width: 100%;\n}\n.filter .filter_block {\n  width: 100%;\n}\n.response_block {\n  border: 1px solid #ccc;\n  display: block;\n  float: left;\n  width: 100%;\n  padding: 20px;\n  margin-top: 20px;\n}\n.response_switch_buttons button {\n  min-width: 150px;\n  float: left;\n  margin-right: 2px;\n  background: #ccc;\n  border: none;\n  color: black;\n}\n.response_switch_buttons button.active {\n  background: var(--backgroundColor);\n  color: var(--backgroundColorWhite);\n}\n.response_switch_buttons button.active:hover {\n  background: var(--backgroundColorHover);\n}\n.response_content {\n  float: left;\n  width: 100%;\n  background: #f9f9f9;\n  padding: 20px;\n}\n.response_content table td,\n.response_content table th {\n  padding: 2px 5px;\n  border: 1px solid #ccc;\n}\n";

// src/app/widgets/dialogs/fhir-dialog/fhir-dialog.service.ts
var _a5;
var FhirDialogService = (_a5 = class {
  constructor($http) {
    this.$http = $http;
  }
  createFHIRImageStudy(dcmWebApp, studyInstanceUID, studyWebApp, responseHeaderType = "*/*", responseType = "json") {
    let webAppTemp = cloneDeep_default(studyWebApp);
    webAppTemp.dcmWebServicePath = webAppTemp.dcmWebServicePath + `/studies/${studyInstanceUID}/fhir/${dcmWebApp.dcmWebAppName}`;
    let headers = new HttpHeaders().set("Content-Type", "application/fhir+" + responseType).set("Accept", responseHeaderType);
    if (responseType === "json") {
      return this.$http.post("", {}, headers, void 0, webAppTemp, {}, false, "response");
    } else {
      return this.$http.post("", {}, headers, void 0, webAppTemp, {}, false, void 0, "text");
    }
  }
}, _a5.ctorParameters = () => [{
  type: J4careHttpService
}], _a5);
FhirDialogService = __decorate([Injectable({
  providedIn: "root"
})], FhirDialogService);

// src/app/widgets/dialogs/fhir-dialog/fhir-dialog.component.ts
var _a6;
var FhirDialogComponent = (_a6 = class {
  constructor(dialogRef, service, studyService, appService) {
    this.dialogRef = dialogRef;
    this.service = service;
    this.studyService = studyService;
    this.appService = appService;
    this.responseButton = "headers";
    this.responseTypeHeaderDropdowns = [new SelectDropdown("application/fhir+json", "application/fhir+json"), new SelectDropdown("application/fhir+xml", "application/fhir+xml"), new SelectDropdown("*/*", "*/*")];
    this.responseHeaderType = "*/*";
    this.responseType = "json";
  }
  save() {
    if (!this.response) {
      this.service.createFHIRImageStudy(this.fhirWebAppsSelectDropdowns.selectedWebService, this.studyService.getStudyInstanceUID(this.study), this.selectedWebService, this.responseHeaderType, this.responseType).subscribe(res => {
        try {
          let extractedType = "";
          this.headers = res.headers.keys().map(key => {
            const value = res.headers.get(key);
            if (key.toLowerCase() === "content-type") {
              if (value.includes("json")) {
                extractedType = "json";
              } else if (value.includes("xml")) {
                extractedType = "xml";
              }
            }
            return {
              key,
              value
            };
          });
          extractedType = this.extractTypeFromResponse(extractedType, res) || this.responseType;
          this.responseType = extractedType;
          if (this.responseType === "json") {
            if (typeof res.body === "string" && (res.body.indexOf("\n") === -1 || res.body.indexOf(" ") === -1)) {
              this.response = JSON.stringify(res.body, null, 2);
            } else {
              this.response = res.body;
            }
          } else {
            this.response = res.body;
          }
          this.appService.showMsg("FHIR Imaging Study created successfully");
        } catch (e) {
          this.response = res;
        }
      }, err => {
        console.error(err);
        this.appService.showError("Create FHIR Imaging Study failed");
      });
    }
  }
  extractTypeFromResponse(extractedType, res) {
    try {
      if (extractedType === "") {
        const regex = /<[\w.<\/>="" :\.\\]*>[\n \.]*<[\w.<\/>="" :\.\\]*>/;
        if (regex.test(res.body)) {
          extractedType = "xml";
        } else {
          extractedType = "json";
        }
      }
      return extractedType;
    } catch (e) {
      return extractedType;
    }
  }
  webAppModelChange($event) {
    this.fhirWebAppsSelectDropdowns.seletWebAppFromWebAppName($event);
    const properties = j4care.extractPropertiesFromWebApp(this.fhirWebAppsSelectDropdowns.selectedWebService);
    if (j4care.hasSet(properties, "ImagingStudy")) {
      if (properties["ImagingStudy"] === "FHIR_R5_XML" || properties["ImagingStudy"] === "LTNHR_V1_XML" || properties["ImagingStudy"].includes("XML")) {
        this.responseType = "xml";
      } else {
        this.responseType = "json";
      }
    }
  }
}, _a6.ctorParameters = () => [{
  type: MatDialogRef
}, {
  type: FhirDialogService
}, {
  type: StudyService
}, {
  type: AppService
}], _a6);
FhirDialogComponent = __decorate([Component({
  selector: "app-fhir-dialog",
  imports: [FormsModule, DcmDropDownComponent, NgClass, JsonPipe],
  template: fhir_dialog_component_default,
  standalone: true,
  styles: [fhir_dialog_component_default2]
})], FhirDialogComponent);

// src/app/study/study/study.component.ts
var _a7;
var StudyComponent = (_a7 = class {
  testToggle() {
    this.isOpen = !this.isOpen;
  }
  get filter() {
    return this._filter;
  }
  set filter(value) {
    this.tableParam.config.offset = value.filterModel.offset;
    this._filter = value;
  }
  constructor(route, service, permissionService, appService, httpErrorHandler, cfpLoadingBar, deviceConfigurator, viewContainerRef, dialog, _keycloakService, changeDetector) {
    this.route = route;
    this.service = service;
    this.permissionService = permissionService;
    this.appService = appService;
    this.httpErrorHandler = httpErrorHandler;
    this.cfpLoadingBar = cfpLoadingBar;
    this.deviceConfigurator = deviceConfigurator;
    this.viewContainerRef = viewContainerRef;
    this.dialog = dialog;
    this._keycloakService = _keycloakService;
    this.changeDetector = changeDetector;
    this.onAction = new EventEmitter();
    this.onFilterChange = new EventEmitter();
    this.onStudyWebServiceChange = new EventEmitter();
    this.onPasteEvent = new EventEmitter();
    this.isOpen = true;
    this.Object = Object;
    this.studyConfig = {
      tab: "study",
      title: "Studies"
    };
    this._filter = {
      filterSchemaEntry: {
        lineLength: void 0,
        schema: []
      },
      filterSchemaMain: {
        lineLength: void 0,
        schema: []
      },
      filterSchemaExpand: {
        lineLength: 2,
        schema: []
      },
      filterEntryModel: {},
      filterModel: {
        limit: 20,
        offset: 0,
        includefield: "all"
      },
      expand: false,
      quantityText: {
        count: "COUNT",
        size: "SIZE"
      }
    };
    this.applicationEntities = {
      aes: [],
      aets: [],
      aetsAreSet: false
    };
    this.trash = {
      reject: void 0,
      rjnotes: void 0,
      rjcode: void 0,
      active: false
    };
    this.tableParam = {
      tableSchema: this.getSchema(),
      config: {
        offset: 0,
        showCheckboxes: false
      }
    };
    this.showClipboardContent = false;
    this.moreFunctionConfig = {
      placeholder: "More functions",
      options: [new SelectDropdown("create_patient", "Create patient"), new SelectDropdown("supplement_issuer", "Supplement Issuer"), new SelectDropdown("update_charset", "Update Character Set of Patients"), new SelectDropdown("create_ups", "Create new UPS Workitem"), new SelectDropdown("subscribe_uwl", "Subscribe to Unified Worklist"), new SelectDropdown("unsubscribe_uwl", "Unsubscribe from Unified Worklist"), new SelectDropdown("suspend_uwl", "Suspend Unified Worklist"), new SelectDropdown("upload_dicom", "Upload DICOM Object"), new SelectDropdown("permanent_delete", "Permanent delete rejected instances", "Delete rejected Instances permanently"), new SelectDropdown("export_multiple_study", "Export matching studies"), new SelectDropdown("apply_retention_multiple_series", "Apply retention policy to matching series"), new SelectDropdown("export_multiple_series", "Export matching series"), new SelectDropdown("reject_multiple_study", "Reject matching studies"), new SelectDropdown("reject_multiple_series", "Reject matching series"), new SelectDropdown("retrieve_multiple", "Retrieve matching studies"), new SelectDropdown("update_access_control_id_to_matching", "Update access Control ID to matching studies"), new SelectDropdown("update_access_control_id_to_matching_series", "Update access Control ID to matching series"), new SelectDropdown("storage_verification_studies", "Storage Verification Studies"), new SelectDropdown("storage_verification_series", "Storage Verification Series"), new SelectDropdown("download_patients", "Download patients as CSV"), new SelectDropdown("download_studies", "Download studies as CSV"), new SelectDropdown("download_series", "Download series as CSV"), new SelectDropdown("download_mwl", "Download MWL as CSV"), new SelectDropdown("download_uwl", "Download UPS Workitems as CSV"), new SelectDropdown("trigger_diff", "Trigger Diff"), new SelectDropdown("change_sps_status_on_matching", "Change SPS Status on matching MWL"), new SelectDropdown("import_matching_sps_to_archive", "Import matching SPS to archive"), new SelectDropdown("schedule_storage_commit_for_matching_studies", "Schedule Storage Commitment for matching Studies"), new SelectDropdown("schedule_storage_commit_for_matching_series", "Schedule Storage Commitment for matching Series"), new SelectDropdown("instance_availability_notification_for_matching_studies", "Instance Availability Notification for matching Studies"), new SelectDropdown("instance_availability_notification_for_matching_series", "Instance Availability Notification for matching Series"), new SelectDropdown("update_matching_studies", "Update matching Studies"), new SelectDropdown("update_matching_series", "Update matching Series")],
      model: void 0
    };
    this.actionsSelections = {
      placeholder: "Actions for selections",
      options: [new SelectDropdown("toggle_checkboxes", "Toggle checkboxes", "Toggle checkboxes for selection"), new SelectDropdown("export_object", "Export selections", "Export selected studies, series or instances"), new SelectDropdown("retrieve_object", "Retrieve selections", "Retrieve selected studies, series or instances"), new SelectDropdown("reject_object", "Reject selections", "Reject selected studies, series or instances"), new SelectDropdown("restore_object", "Restore selections", "Restore selected studies, series or instances"), new SelectDropdown("update_access_control_id_to_selections", "Access Control ID to selections", "Updated Access Control ID to selected studies"), new SelectDropdown("storage_verification_for_selections", "Storage Verification for selections", "Storage Verification for selected objects"), new SelectDropdown("send_storage_commitment_request_for_selections", "Send Storage Commitment Request for selections", "Send Storage Commitment Request for selected objects"), new SelectDropdown("send_ian_request_for_selections", "Send IAN for selections", "Send Instance Availability Notification Request for selected objects"), new SelectDropdown("delete_object", "Delete selections", "Delete selected studies, series or instances permanently"), new SelectDropdown("change_sps_status_on_selections", "SPS Status on selections", "Change SPS Status on selected MWL")],
      model: void 0
    };
    this.internal = true;
    this.testShow = true;
    this.fixedHeader = false;
    this.patients = [];
    this.patients1 = [];
    this.studies = [];
    this.moreState = {
      "study": false,
      "patient": false,
      "series": false,
      "mwl": false,
      "mpps": false,
      "uwl": false,
      "diff": false,
      "export": false
    };
    this.searchCurrentList = "";
    this.filterButtonPath = {
      count: [],
      size: []
    };
    this.checkboxFunctions = false;
    this.currentWebAppClass = "QIDO_RS";
    this.headerTop = {
      "true": void 0,
      "false": void 0
    };
    this.querySubmit = false;
    this.moreFunctionFilterPipe = (value, args) => {
      let internal = args[0];
      let studyConfig = args[1];
      return value.filter(option => {
        if (option.value === "create_patient" || option.value === "supplement_issuer" || option.value === "update_charset" || option.value === "download_patients") {
          return studyConfig && studyConfig.tab === "patient" && this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET");
        } else {
          if (studyConfig && studyConfig.tab === "mwl") {
            return option.value === "import_matching_sps_to_archive" && !this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET") || option.value === "change_sps_status_on_matching" && this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET") || option.value === "download_mwl" && this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET");
          } else {
            if (!(studyConfig && studyConfig.tab === "patient")) {
              if (studyConfig && studyConfig.tab === "uwl") {
                return option.value === "download_uwl" || option.value === "create_ups" || option.value === "subscribe_uwl" || option.value === "unsubscribe_uwl" || option.value === "suspend_uwl";
              } else {
                switch (option.value) {
                  case "retrieve_multiple":
                    return (!internal || this.service.webAppGroupHasClass(this.studyWebService, "MOVE_MATCHING")) && studyConfig && studyConfig.tab === "study";
                  case "upload_dicom":
                    return this.service.webAppGroupHasClass(this.studyWebService, "STOW_RS") && studyConfig && studyConfig.tab === "study";
                  case "trigger_diff":
                    return studyConfig && studyConfig.tab === "diff";
                  case "export_multiple_study":
                  case "permanent_delete":
                  case "download_studies":
                  case "reject_multiple_study":
                  case "update_access_control_id_to_matching":
                  case "storage_verification_studies":
                  case "schedule_storage_commit_for_matching_studies":
                  case "instance_availability_notification_for_matching_studies":
                  case "update_matching_studies":
                    return studyConfig && studyConfig.tab === "study" && this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET");
                  case "apply_retention_multiple_series":
                  case "export_multiple_series":
                  case "reject_multiple_series":
                  case "download_series":
                  case "update_access_control_id_to_matching_series":
                  case "storage_verification_series":
                  case "schedule_storage_commit_for_matching_series":
                  case "instance_availability_notification_for_matching_series":
                  case "update_matching_series":
                    return studyConfig && studyConfig.tab === "series" && this.service.webAppGroupHasClass(this.studyWebService, "DCM4CHEE_ARC_AET");
                  case "change_sps_status_on_matching":
                  case "download_mwl":
                  case "import_matching_sps_to_archive":
                  case "download_uwl":
                  case "create_ups":
                  case "subscribe_uwl":
                  case "unsubscribe_uwl":
                  case "suspend_uwl":
                    return false;
                }
              }
              return true;
            } else {
              return false;
            }
          }
        }
      });
    };
    console.log("in construct", this.service.selectedElements);
  }
  setFiltersFromQueryParams(queryParameter) {
    if (this.studyConfig.tab != "diff") {
      const validFilters = this.service.getFilterKeysFromTab(this.studyConfig.tab);
      validFilters.forEach(filter => {
        if (filter && hasIn_default(queryParameter, filter) && queryParameter[filter] != void 0) this.filter.filterModel[filter] = queryParameter[filter];
      });
      if (hasIn_default(queryParameter, "webApp")) {
        this.filter.filterModel["webApp"] = queryParameter["webApp"];
        this.querySubmit = true;
        this.filterChanged();
      }
    }
  }
  ngOnInit() {
    this.largeIntFormat = new LargeIntFormatPipe();
    if (this.service.selectedElements) {
      this.selectedElements = this.service.selectedElements;
    } else {
      this.selectedElements = new SelectionActionElement({});
    }
    console.log("this.studyWebService", this.studyWebService);
    this.getPatientAttributeFilters();
    this.getStudyAttributeFilters();
    this.route.params.subscribe(params => {
      this.filterTemplate = void 0;
      this.studyWebService = void 0;
      this.patients = [];
      this.patients1 = [];
      this.internal = !this.internal;
      this.service.clearFilterObject(params.tab, this.filter);
      this.studyConfig.tab = void 0;
      console.log("this.studyWebService", this.studyWebService);
      setTimeout(() => {
        this.internal = !this.internal;
        this.studyConfig.tab = params.tab;
        this.route.queryParams.subscribe(queryParams => {
          console.log("in query paramt", queryParams);
          this.setFiltersFromQueryParams(queryParams);
        });
        switch (this.studyConfig.tab) {
          case "diff":
            this.currentWebAppClass = "DCM4CHEE_ARC_AET_DIFF";
            break;
          case "mwl":
            this.currentWebAppClass = "MWL_RS";
            break;
          case "mpps":
            this.currentWebAppClass = "MPPS_RS";
            break;
          case "uwl":
            this.currentWebAppClass = "UPS_RS";
            break;
          default:
            this.currentWebAppClass = "QIDO_RS";
        }
        if (hasIn_default(this.studyWebService, "selectedWebService.dcmWebAppName") && !hasIn_default(this._filter, "filterModel.webApp")) {
          this._filter.filterModel["webApp"] = this.studyWebService.selectedWebService.dcmWebAppName;
        }
        ;
        this.studyConfig.title = this.tabToTitleMap(params.tab);
        this.initWebApps();
        if (this.studyConfig.tab === "diff") {
          this.getDiffAttributeSet(this, () => {
            this.route.queryParams.subscribe(queryParams => {
              if (hasIn_default(queryParams, "taskID") || hasIn_default(queryParams, "batchID")) {
                if (queryParams.batchID) {
                  this.filter.filterModel["batchID"] = queryParams.batchID;
                }
                if (queryParams.different) {
                  this.filter.filterModel["different"] = queryParams.different;
                }
                if (queryParams.comparefield) {
                  this.filter.filterModel["comparefield"] = queryParams.comparefield;
                }
                if (queryParams.missing) {
                  this.filter.filterModel["missing"] = queryParams.missing;
                }
                if (queryParams.taskID) {
                  this.filter.filterModel["taskID"] = queryParams.taskID;
                }
                this.getDiff(cloneDeep_default(this.filter.filterModel));
              }
            });
            this.initWebApps();
          });
        }
        if (this.studyConfig.tab === "study" || this.studyConfig.tab === "series" || this.studyConfig.tab === "diff") {
          this.getInstitutions(this, "Series", () => {
            this.getStorages(this, () => {
              this.initWebApps();
            });
          });
        }
        if (this.studyConfig.tab === "mwl") {
          this.getInstitutions(this, "MWL", () => {
            this.initWebApps();
          });
        }
        this.more = false;
        this._filter.filterModel.offset = 0;
        this.setTableSchema();
        if (this.studyConfig.tab != "study" && this.studyConfig.tab != "series" && this.studyConfig.tab != "diff") {
          this.initWebApps();
        }
      }, 1);
    });
    this.moreFunctionConfig.options.filter(option => {
      if (option.value === "retrieve_multiple" || option.value === "import_matching_sps_to_archive") {
        return !this.internal;
      } else {
        return true;
      }
    });
    this.actionsSelections.options.filter(option => {
      if (option.value === "retrieve_object") {
        return !this.internal;
      } else {
        return true;
      }
    });
  }
  onFilterTemplateSet(object) {
    this.filterTemplate = object;
    this.setTemplateToFilter();
    this.onFilterChange.emit(this.filter.filterModel);
  }
  setTemplateToFilter() {
    if (this.filterTemplate && this.studyWebService && this.studyWebService.selectDropdownWebServices && this.studyWebService.selectDropdownWebServices.length > 0) {
      this.filter.filterModel = {};
      Object.keys(this.filterTemplate).forEach(key => {
        if (key === "webApp") {
          this.studyWebService.seletWebAppFromWebAppName(this.filterTemplate.webApp);
        } else {
          this.filter.filterModel[key] = this.filterTemplate[key];
        }
      });
    }
    this.setTableSchema();
    this.setSchema();
  }
  tabToTitleMap(tab) {
    return {
      "study": "Studies",
      "patient": "Patients",
      "series": "Series",
      "mwl": "MWL",
      "uwl": "UWL",
      "diff": "Difference",
      "mpps": "MPPS"
    }[tab] || "Studies";
  }
  get more() {
    return this.moreState[this.studyConfig.tab];
  }
  set more(value) {
    this.moreState[this.studyConfig.tab] = value;
  }
  //
  setTopToTableHeader() {
    if (this.stickyHeaderView.nativeElement.scrollHeight && this.stickyHeaderView.nativeElement.scrollHeight > 0 && this.tableParam.config.headerTop != `${this.stickyHeaderView.nativeElement.scrollHeight}px`) {
      this.tableParam.config.headerTop = `${this.stickyHeaderView.nativeElement.scrollHeight}px`;
    }
  }
  toggleMore(expand) {
    this.filter.expand = expand;
    if (!this.headerTop[expand]) {
      this.headerTop[expand] = this.stickyHeaderView.nativeElement.scrollHeight;
    } else {
      this.tableParam.config.headerTop = `${this.headerTop[expand]}px`;
    }
    setTimeout(() => {
      this.setTopToTableHeader();
    }, 1);
  }
  onWindowScroll(e) {
    let html = document.documentElement;
    if (html.scrollTop > 63) {
      this.fixedHeader = true;
      this.testShow = false;
    } else {
      this.fixedHeader = false;
      this.testShow = true;
    }
  }
  moreFunctionChanged(e) {
    console.log("e", e);
    switch (e) {
      case "create_patient":
        this.createPatient();
        break;
      case "supplement_issuer":
        this.supplementIssuer();
        break;
      case "update_charset":
        this.updateCharset();
        break;
      case "create_ups":
        this.createUPS();
        break;
      case "subscribe_uwl":
        this.subscribeUWL(void 0, "uwl", "Subscribe to Unified Worklist", "Unified Worklist subscribed successfully!");
        break;
      case "unsubscribe_uwl":
        this.unsubscribeOrSuspendUWL(false);
        break;
      case "suspend_uwl":
        this.unsubscribeOrSuspendUWL(true);
        break;
      case "permanent_delete":
        this.deleteRejectedInstances();
        break;
      case "upload_dicom":
        this.uploadDicom();
        break;
      case "export_multiple_study":
        this.exportMatching("Export all matching studies", "study");
        break;
      case "apply_retention_multiple_series":
        this.applyRetentionPolicyMatchingSeries();
        break;
      case "export_multiple_series":
        this.exportMatching("Export all matching series", "series");
        break;
      case "reject_multiple_study":
        this.rejectMatchingStudies();
        break;
      case "reject_multiple_series":
        this.rejectMatchingSeries();
        break;
      case "retrieve_multiple":
        this.retrieveMultipleStudies();
        break;
      case "storage_verification_studies":
        this.storageVerificationStudies();
        break;
      case "storage_verification_series":
        this.storageVerificationSeries();
        break;
      case "download_patients":
        this.downloadCSV(void 0, "patient");
        break;
      case "download_studies":
        this.downloadCSV(void 0, "study");
        break;
      case "download_series":
        this.downloadCSV(void 0, "series");
        break;
      case "download_mwl":
        this.downloadCSV(void 0, "mwl");
        break;
      case "download_uwl":
        this.downloadCSV(void 0, "uwl");
        break;
      case "update_access_control_id_to_matching":
        this.updateAccessControlId("matching_studies", e);
        break;
      case "update_access_control_id_to_matching_series":
        this.updateAccessControlId("matching_series", e);
        break;
      case "schedule_storage_commit_for_matching_studies":
        this.sendStorageCommitmentRequestMatchingStudies();
        break;
      case "schedule_storage_commit_for_matching_series":
        this.sendStorageCommitmentRequestMatchingSeries();
        break;
      case "instance_availability_notification_for_matching_studies":
        this.sendInstanceAvailabilityNotificationMatchingStudies();
        break;
      case "instance_availability_notification_for_matching_series":
        this.sendInstanceAvailabilityNotificationMatchingSeries();
        break;
      case "update_matching_studies":
        this.updateMatchingStudies();
        break;
      case "update_matching_series":
        this.updateMatchingSeries();
        break;
      case "create_ups_matching_studies":
        this.createUPSMatchingStudies();
        break;
      case "change_sps_status_on_matching":
        this.changeSPSStatus(e, "matching");
        break;
      case "import_matching_sps_to_archive":
        this.importMatchingSPS();
        break;
    }
    setTimeout(() => {
      this.moreFunctionConfig.model = void 0;
    }, 1);
  }
  actionsSelectionsChanged(e) {
    if (e === "toggle_checkboxes") {
      this.tableParam.config.showCheckboxes = !this.tableParam.config.showCheckboxes;
      this.setTableSchema();
    }
    if (e === "export_object") {
      this.exporter(void 0, "Export selected objects", "multipleExportSelections", void 0, void 0, this.selectedElements);
    }
    if (e === "retrieve_object") this.retrieveObject(void 0, void 0, this.selectedElements);
    if (e === "reject_object" || e === "restore_object") {
      this.rejectRestoreMultipleObjects();
    }
    if (e === "update_access_control_id_to_selections") {
      this.updateAccessControlId("update_access_control_id_to_selections", e);
    }
    if (e === "change_sps_status_on_selections") {
      this.changeSPSStatus(e, "selected");
    }
    if (e === "storage_verification_for_selections") {
      this.storageCommitmen(void 0, void 0);
    }
    if (e === "send_storage_commitment_request_for_selections") {
      this.sendStorageCommitmentRequestSingle();
    }
    if (e === "send_ian_request_for_selections") {
      this.sendInstanceAvailabilityNotificationSingle();
    }
    if (e === "delete_object") {
      this.deleteSelectedObjects();
    }
    setTimeout(() => {
      this.actionsSelections.model = void 0;
    }, 1);
  }
  selectionAction(id) {
    console.log("this.patient", this.patients);
    switch (id) {
      case "checkbox_functions":
        {
          this.checkboxFunctions = !this.checkboxFunctions;
          break;
        }
      case "copy":
        {
          this.setSelectedElementAction(id);
          this.resetSetSelectionObject(void 0, void 0, true);
          break;
        }
      case "move":
        {
          this.setSelectedElementAction(id);
          this.resetSetSelectionObject(void 0, void 0, true);
          break;
        }
      case "link":
        {
          this.setSelectedElementAction(id);
          this.resetSetSelectionObject(void 0, void 0, true);
          break;
        }
      case "patient_merge":
        {
          this.setSelectedElementAction("merge");
          this.resetSetSelectionObject(void 0, void 0, true);
          break;
        }
      case "paste":
        {
          this.paste();
          break;
        }
      case "remove_selection":
        {
          this.resetSetSelectionObject();
          break;
        }
      case "uncheck_selection_study":
        {
          this.resetSetSelectionObject(["study"], false);
          this.checkboxFunctions = false;
          break;
        }
      case "check_selection_study":
        {
          this.resetSetSelectionObject(["study"], true);
          this.checkboxFunctions = false;
          break;
        }
      case "check_selection_patient":
        {
          this.resetSetSelectionObject(["patient"], true);
          this.checkboxFunctions = false;
          break;
        }
      case "uncheck_selection_patient":
        {
          this.resetSetSelectionObject(["patient"], false);
          this.checkboxFunctions = false;
          break;
        }
      case "hide_checkboxes":
        {
          this.resetSetSelectionObject();
          this.tableParam.config.showCheckboxes = false;
          this.setTableSchema();
          break;
        }
    }
  }
  paste() {
    console.log("past,this.selectedEleents", this.selectedElements);
    if (this.selectedElements && this.selectedElements.postActionElements && this.selectedElements.postActionElements.size > 0 && this.selectedElements.preActionElements && this.selectedElements.preActionElements.size > 0) {
      if (!this.selectedElements.postActionElements || this.selectedElements.postActionElements.currentIndexes.length > 1) {
        this.appService.showError("More than one target selected!");
      }
      if (this.selectedElements.action == "merge" && this.selectedElements.preActionElements.currentIndexes.length > 1) {
        this.appService.showError("More than one source patient selected for merge!");
      } else {
        if (this.selectedElements.preActionElements.currentIndexes.indexOf(this.selectedElements.postActionElements.currentIndexes[0]) > -1) {
          this.appService.showError("Target object can not be in the clipboard");
        } else {
          this.dialogRef = this.dialog.open(StudyTransferringOverviewComponent, {
            height: "auto",
            width: "90%"
          });
          let select = [];
          forEach_default(this.trash.rjnotes, (m, i) => {
            select.push(new SelectDropdown(m.codeValue + "^" + m.codingSchemeDesignator, m.label, m.codeMeaning));
          });
          this.dialogRef.componentInstance.selectedElements = this.selectedElements;
          this.dialogRef.componentInstance.rjnotes = select;
          this.dialogRef.componentInstance.title = this.service.getTextFromAction(this.selectedElements.action);
          this.dialogRef.afterClosed().subscribe(result => {
            console.log("result", result);
            console.log("selectedElements", this.selectedElements);
            if (result) {
              this.cfpLoadingBar.start();
              switch (this.selectedElements.action) {
                case "merge":
                  this.service.mergePatientsByPk(this.selectedElements, this.studyWebService).subscribe(res => {
                    this.appService.showMsg("Patients merged successfully!");
                    this.clearClipboard();
                    this.cfpLoadingBar.complete();
                    this.onPasteEvent.emit({
                      mode: "success",
                      response: res
                    });
                  }, err => {
                    this.cfpLoadingBar.complete();
                    this.httpErrorHandler.handleError(err);
                    this.onPasteEvent.emit({
                      mode: "error",
                      response: err
                    });
                  });
                  break;
                case "link":
                  this.service.linkStudyToMwl(this.selectedElements, this.studyWebService.selectedWebService, result.reject).subscribe(res => {
                    console.log("res", res);
                    this.cfpLoadingBar.complete();
                    this.appService.showMsgCopyMoveLink(res, this.service.getTextFromAction(this.selectedElements.action));
                    this.clearClipboard();
                    this.onPasteEvent.emit({
                      mode: "success",
                      response: res
                    });
                  }, err => {
                    this.cfpLoadingBar.complete();
                    this.httpErrorHandler.handleError(err);
                    this.onPasteEvent.emit({
                      mode: "error",
                      response: err
                    });
                  });
                  break;
                default:
                  this.service.copyMove(this.selectedElements, this.studyWebService.selectedWebService, result.reject).subscribe(res => {
                    try {
                      console.log("res", res);
                      this.appService.showMsgCopyMoveLink(res, this.service.getTextFromAction(this.selectedElements.action));
                    } catch (e) {
                      this.httpErrorHandler.handleError(res);
                    }
                    this.clearClipboard();
                    this.cfpLoadingBar.complete();
                    this.onPasteEvent.emit({
                      mode: "success",
                      response: res
                    });
                  }, err => {
                    this.cfpLoadingBar.complete();
                    this.httpErrorHandler.handleError(err);
                    this.onPasteEvent.emit({
                      mode: "error",
                      response: err
                    });
                  });
              }
            } else {
              this.clearClipboard();
              this.onPasteEvent.emit({
                mode: "cancel",
                response: this.selectedElements
              });
            }
            this.dialogRef = null;
          });
        }
      }
    } else {
      if (!this.selectedElements.postActionElements || !this.selectedElements.postActionElements.size || this.selectedElements.postActionElements.size === 0) {
        this.appService.showWarning("No target object was selected!");
      }
    }
  }
  setSelectedElementAction(id) {
    if (this.selectedElements.postActionElements && this.selectedElements.postActionElements.size > 0 || this.selectedElements.preActionElements && this.selectedElements.preActionElements.size > 0) {
      this.selectedElements.action = id;
    }
  }
  resetSetSelectionObject(resetIds, selectedValue, noResetSelectElements, allReset) {
    let newObject = {};
    selectedValue = selectedValue || false;
    resetIds = resetIds || ["instance", "series", "patient", "study", "mwl"];
    resetIds.forEach(id => {
      newObject[id] = {};
    });
    if (!noResetSelectElements) {
      if (resetIds.length < 5) {
        resetIds.forEach(level => {
          try {
            Object.keys(this.selectedElements.preActionElements[level]).forEach(id => {
              this.selectedElements.preActionElements.toggle(level, {
                id,
                idParts: []
              }, {});
            });
            Object.keys(this.selectedElements.postActionElements[level]).forEach(id => {
              this.selectedElements.postActionElements.toggle(level, {
                id,
                idParts: []
              }, {});
            });
          } catch (e) {}
        });
      } else {
        if (this.selectedElements) {
          this.selectedElements.reset(allReset);
        }
      }
    }
    this.patients.forEach(patient => {
      if (resetIds.indexOf("patient") > -1) {
        patient.selected = selectedValue;
        this.service.addObjectOnSelectedElements("patient", selectedValue, patient, this.selectedElements);
      }
      if (patient.studies && resetIds.indexOf("study") > -1) patient.studies.forEach(study => {
        study.selected = selectedValue;
        this.service.addObjectOnSelectedElements("study", selectedValue, study, this.selectedElements);
        if (study.series && resetIds.indexOf("series") > -1) study.series.forEach(serie => {
          serie.selected = selectedValue;
          this.service.addObjectOnSelectedElements("series", selectedValue, serie, this.selectedElements);
          if (serie.instances && resetIds.indexOf("instance") > -1) serie.instances.forEach(instance => {
            instance.selected = selectedValue;
            this.service.addObjectOnSelectedElements("instance", selectedValue, instance, this.selectedElements);
          });
        });
      });
      if (patient.mwls && resetIds.indexOf("mwl") > -1) {
        patient.mwls.forEach(study => {
          study.selected = selectedValue;
        });
      }
    });
  }
  select(object, dicomLevel) {
    this.selectedElements.toggle(dicomLevel, this.service.getObjectUniqueId(object.attrs, dicomLevel), object);
    console.log("selectedElements", this.selectedElements);
  }
  clearClipboard() {
    this.resetSetSelectionObject(void 0, void 0, void 0, true);
  }
  onFilterClear(e) {
    console.log("e", e);
    if (hasIn_default(e, "webApp") && e.webApp === "") {
      this.studyWebService.selectedWebService = void 0;
    }
  }
  onRemoveFromSelection(e) {
    console.log("e", e);
    this.selectedElements.toggle(e.dicomLevel, e.uniqueSelectIdObject, e.object, "preActionElements");
  }
  actions(id, model) {
    console.log("id", id);
    console.log("model", model);
    if (this.studyWebService.selectedWebService) {
      if (id.action === "select") {
        this.select(model, id.level);
        console.log("this.selectedElement", this.selectedElements);
      }
      if (id.action === "toggle_studies") {
        if (!model.studies || model.studies.length === 0) {
          console.log("models", model);
          let filterModel = this.getFilterClone();
          if (filterModel.limit) {
            filterModel.limit++;
          }
          this.getAllStudiesToPatient(model, filterModel, 0);
        } else {
          model.studies = [];
          model.showStudies = !model.showStudies;
        }
      }
      if (id.action === "toggle_series") {
        if (!model.series) {
          this.getSeriesOfStudy(model, 0);
        } else {
          model.showSeries = !model.showSeries;
        }
      }
      if (id.action === "toggle_instances") {
        if (!model.instances) {
          this.getInstances(model, 0);
        } else {
          model.showInstances = !model.showInstances;
        }
      }
      if (id.action === "edit_patient") {
        this.editPatient(model);
      }
      if (id.action === "edit_uwl") {
        this.editUPS(model);
      }
      if (id.action === "clone_uwl") {
        this.cloneUPS(model);
      }
      if (id.action === "reschedule_uwl") {
        this.rescheduleUPS(model);
      }
      if (id.action === "cancel_uwl") {
        this.cancelUPS(model);
      }
      if (id.action === "change_ups_state") {
        this.changeUPSState(model);
      }
      if (id.action === "subscribe_ups") {
        this.subscribeUWL(model, "ups", "Subscribe to Unified Procedure Step", "Unified Procedure Step subscribed successfully!");
      }
      if (id.action === "unsubscribe_ups") {
        this.unsubscribeUPS(model);
      }
      if (id.action === "delete_patient") {
        this.deletePatientByPk(model);
      }
      if (id.action === "unmerge_patient") {
        this.unmergePatientByPk(model);
      }
      if (id.action === "pdq_patient") {
        this.queryNationalPatientRegister(model);
      }
      if (id.action === "pdq_patient_update") {
        this.updatePatientDemographics(model);
      }
      if (id.action === "download") {
        if (id.level === "instance") {
          if (id.mode === "uncompressed") {
            this.downloadURL(model);
          } else {
            this.downloadURL(model, "*");
          }
        } else {
          this.downloadZip(model, id.level, id.mode);
        }
      }
      if (id.action === "reject") {
        if (id.level === "study") {
          this.rejectStudy(model);
        }
        if (id.level === "series") {
          this.rejectSeries(model);
        }
        if (id.level === "instance") {
          this.rejectInstance(model);
        }
      }
      if (id.action === "delete") {
        if (id.level === "study") {
          this.deleteStudy(model);
        }
      }
      if (id.action === "verify_storage") {
        this.storageCommitmen(id.level, model);
      }
      if (id.action === "export") {
        if (this.internal) {
          if (id.level === "study") {
            this.exportStudy(model);
          }
          if (id.level === "instance") {
            this.exportInstance(model);
          }
          if (id.level === "series") {
            this.exportSeries(model);
          }
        } else {
          this.retrieveObject(id.level, model);
        }
      }
      if (id.action === "edit_study") {
        this.editStudy(model);
      }
      if (id.action === "edit_series") {
        this.editSeries(model);
      }
      if (id.action === "edit_study") {}
      if (id.action === "delete_mwl") {
        this.deleteMWL(model);
      }
      if (id.action === "modify_expired_date") {
        this.setExpiredDate(model);
      }
      if (id.action === "modify_expired_date_series") {
        this.setExpiredDateSeries(model);
      }
      if (id.action === "mark_as_requested_unscheduled") {
        this.markAsRequestedOrUnscheduled(model, id.level);
      }
      if (id.action === "create_mwl") {
        this.createMWL(model);
      }
      if (id.action === "edit_mwl") {
        console.log("id", id);
        console.log("model", model);
        this.editMWL(model.patient, model);
      }
      if (id.action === "download_csv") {
        this.downloadCSV(model.attrs, id.level);
      }
      if (id.action === "open_viewer") {
        this.openViewer(model.attrs, id.level);
      }
      if (id.action === "create_fhir") {
        this.createFHIRImageStudy(model, id.level);
      }
      if (id.action === "upload_file") {
        this.uploadFile(model, id.level);
      }
      if (id.action === "view") {
        this.viewInstance(model);
      }
      if (id.action === "update_access_control_id") {
        this.updateAccessControlId(id.level, id.action, model);
      }
      if (id.action === "change_sps_status") {
        this.changeSPSStatus(model, "single");
      }
      if (id.action === "send_storage_commit") {
        this.sendStorageCommitmentRequestSingle(id.level, model);
      }
      if (id.action === "send_instance_availability_notification") {
        this.sendInstanceAvailabilityNotificationSingle(id.level, model);
      }
      if (id.action === "recreate_record") {
        this.recreateDBRecord(id.level, model);
      }
    } else {
      this.appService.showError("No Web Application Service was selected!");
    }
  }
  uploadDicom() {
    this.dialogRef = this.dialog.open(UploadDicomComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.selectedWebApp = this.studyWebService.selectedWebService;
    this.dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
      if (result) {}
    });
  }
  uploadInPatient(object) {
    console.log("in uuploadInPatient", object);
    this.service.createEmptyStudy(object.attrs, this.studyWebService.selectedWebService).subscribe(res => {
      this.uploadFile({
        attrs: res
      }, "patient");
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  uploadFile(object, mode) {
    let tempObject = cloneDeep_default(object);
    if (mode === "mwl") {
      let newObject = {
        "00400275": {
          "Value": [{}],
          "vr": "SQ"
        }
      };
      let inSequenceCodes = ["00401001", "00321060", "00400009", "00400007", "00400008"];
      let mapCodes = {
        "00401001": {
          "code": "00200010",
          "vr": "SH"
        },
        "00321060": {
          "code": "00081030",
          "vr": "LO"
        },
        "00400100": [{
          "map": "Value[0]['00400002']",
          "code": "00080020",
          "vr": "DA"
        }, {
          "map": "Value[0]['00400003']",
          "code": "00080030",
          "vr": "TM"
        }]
      };
      let removeCode = ["00401001",
      //"00400100",
      "00321060", "00321064"];
      forEach_default(tempObject.attrs, (m, i) => {
        if (indexOf_default(inSequenceCodes, i) > -1) {
          newObject["00400275"].Value[0][i] = m;
          this.service.mapCode(m, i, newObject, mapCodes);
        } else {
          if (indexOf_default(removeCode, i) === -1) {
            newObject[i] = m;
          } else {
            this.service.mapCode(m, i, newObject, mapCodes);
          }
        }
      });
      tempObject.attrs = newObject;
    }
    this.dialogRef = this.dialog.open(UploadFilesComponent, {
      height: "auto",
      width: "900px"
    });
    this.dialogRef.componentInstance.preselectedWebApp = this.studyWebService.selectedWebService;
    this.dialogRef.componentInstance.dicomObject = cloneDeep_default(tempObject);
    this.dialogRef.componentInstance.mode = mode;
    this.dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
      if (result) {}
      this.dialogRef.componentInstance.dicomObject = void 0;
      this.dialogRef.componentInstance.tempAttributes = void 0;
    });
  }
  deletePatientByPk(patient) {
    const patientPk = this.service.getPatientPk(patient.attrs);
    let $this = this;
    this.confirm({
      content: "Are you sure you want to delete this patient?"
    }).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.deletePatientByPk(this.studyWebService.selectedWebService, patientPk).subscribe(response => {
          $this.appService.showMsg("Patient deleted successfully!");
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.httpErrorHandler.handleError(err);
          $this.cfpLoadingBar.complete();
        });
      }
    });
  }
  unmergePatientByPk(patient) {
    const patientPk = this.service.getPatientPk(patient.attrs);
    let $this = this;
    this.confirm({
      content: "Are you sure you want to unmerge this patient?"
    }).subscribe(result => {
      if (result) {
        $this.cfpLoadingBar.start();
        this.service.unmergePatientByPk(this.studyWebService.selectedWebService, patientPk).subscribe(response => {
          $this.appService.showMsg("Patient unmerged successfully!");
          $this.cfpLoadingBar.complete();
        }, err => {
          $this.httpErrorHandler.handleError(err);
          $this.cfpLoadingBar.complete();
        });
      }
    });
  }
  deleteMWL(mwl) {
    this.confirm({
      content: "Are you sure you want to delete this MWL?"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        let studyInstanceUID = j4care.valueOf(mwl.attrs["0020000D"]);
        let scheduledProcedureStepID = get_default(mwl.attrs, "['00400100'].Value[0]['00400009'].Value[0]");
        if (studyInstanceUID && scheduledProcedureStepID) {
          this.service.deleteMWL(this.studyWebService.selectedWebService, studyInstanceUID, scheduledProcedureStepID).subscribe(response => {
            this.appService.showMsg("MWL deleted successfully!");
            this.cfpLoadingBar.complete();
            this.search("current", {
              id: "submit"
            });
          }, err => {
            this.httpErrorHandler.handleError(err);
            this.cfpLoadingBar.complete();
          });
        } else {
          this.appService.showError("Study Instance UID or Scheduled Procedure Step ID is missing!");
        }
      }
    });
  }
  editMWL(patient, mwl) {
    let config = {
      saveLabel: "SAVE",
      titleLabel: "Edit MWL of patient "
    };
    config.titleLabel = "Edit MWL of patient ";
    config.titleLabel += hasIn_default(patient, "attrs.00100010.Value.0.Alphabetic") ? "<b>" + patient.attrs["00100010"].Value[0]["Alphabetic"] + "</b>" : " ";
    config.titleLabel += hasIn_default(patient, "attrs.00100020.Value.0") ? " with ID: <b>" + patient.attrs["00100020"].Value[0] + "</b>" : "";
    this.modifyMWL(patient, "edit", "", "", mwl, config);
  }
  createMWL(patient) {
    let mwl = {
      "attrs": {
        "00400100": {
          "vr": "SQ",
          "Value": [{
            "00400001": {
              "vr": "AE",
              "Value": [""]
            },
            "00400009": {
              "vr": "SH",
              "Value": [""]
            }
          }]
        },
        "0020000D": {
          "vr": "UI",
          "Value": [""]
        },
        "00080050": {
          "vr": "SH",
          "Value": [""]
        },
        "00401001": {
          "vr": "SH",
          "Value": [""]
        },
        "00741202": {
          "vr": "LO",
          "Value": [""]
        }
      }
    };
    let config = {
      saveLabel: "CREATE",
      titleLabel: "Create new MWL"
    };
    this.modifyMWL(patient, "create", "", "", mwl, config);
  }
  modifyMWL(patient, mode, patientkey, mwlkey, mwl, config) {
    let originalMwlObject = cloneDeep_default(mwl);
    this.lastPressedCode = 0;
    if (mode === "edit") {
      forEach_default(mwl.attrs, function (value, index) {
        let checkValue = "";
        if (value.Value && value.Value.length) {
          checkValue = value.Value.join("");
        }
        if (!(value.Value && checkValue != "")) {
          delete mwl.attrs[index];
        }
      });
      if (mwl.attrs["00400100"].Value[0]["00400002"] && !mwl.attrs["00400100"].Value[0]["00400002"].Value) {
        mwl.attrs["00400100"].Value[0]["00400002"]["Value"] = [""];
      }
    }
    let $this = this;
    this.service.getMwlIod().subscribe(res => {
      let iod = $this.service.replaceKeyInJson(res, "items", "Value");
      let mwlFiltered = cloneDeep_default(mwl);
      mwlFiltered.attrs = new ComparewithiodPipe().transform(mwl.attrs, iod);
      $this.service.initEmptyValue(mwlFiltered.attrs);
      $this.dialogRef = $this.dialog.open(EditMwlComponent, {
        height: "auto",
        width: "90%"
      });
      $this.dialogRef.componentInstance.iod = iod;
      $this.dialogRef.componentInstance.mode = mode;
      $this.dialogRef.componentInstance.dropdown = $this.service.getArrayFromIod(res);
      $this.dialogRef.componentInstance.mwl = mwlFiltered;
      $this.dialogRef.componentInstance.mwlkey = mwlkey;
      $this.dialogRef.componentInstance.saveLabel = config.saveLabel;
      $this.dialogRef.componentInstance.titleLabel = config.titleLabel;
      $this.dialogRef.afterClosed().subscribe(result => {
        console.log("result", result);
        if (result) {
          $this.service.clearPatientObject(mwlFiltered.attrs);
          $this.service.convertStringToNumber(mwlFiltered.attrs);
          let local = {};
          $this.service.appendPatientIdTo(patient.attrs, local);
          forEach_default(mwlFiltered.attrs, function (m, i) {
            if (res[i]) {
              local[i] = m;
            }
          });
          forEach_default(mwlFiltered.attrs, function (m, i) {
            if (res && res[i] && res[i].vr != "SQ" && m.Value && m.Value.length === 1 && m.Value[0] === "") {
              delete mwlFiltered.attrs[i];
            }
          });
          console.log("on post", local);
          this.service.modifyMWL(local, this.studyWebService, new HttpHeaders({
            "Content-Type": "application/dicom+json"
          })).subscribe(response => {
            if (mode === "edit") {
              $this.appService.showMsg("MWL saved successfully!");
            } else {
              $this.appService.showMsg("MWL created successfully!");
            }
          }, response => {
            $this.httpErrorHandler.handleError(response);
          });
        } else {
          assign_default(mwl, originalMwlObject);
        }
        $this.dialogRef = null;
      });
    }, err => {
      console.log("error", err);
    });
  }
  createFHIRImageStudy(study, level) {
    this.dialogRef = this.dialog.open(FhirDialogComponent, {
      height: "auto",
      width: "50vw"
    });
    this.dialogRef.componentInstance.fhirWebAppsSelectDropdowns = this.fhirWebAppsSelectDropdowns;
    this.dialogRef.componentInstance.selectedWebService = this.studyWebService.selectedWebService;
    this.dialogRef.componentInstance.study = study.attrs;
  }
  importMatchingSPS() {
    this.confirm({
      content: "Import matching Scheduled Procedure Steps to archive",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Destination AET"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName == this.appService.archiveDeviceName),
        filterKey: "destination",
        description: "Destination AET",
        placeholder: "Destination AET"
      }], [{
        tag: "label",
        text: "Filter By SCU"
      }, {
        tag: "checkbox",
        filterKey: "filterbyscu",
        description: "Apply specified filter on matches returned by external MWL SCP"
      }], [{
        tag: "label",
        text: "Delete"
      }, {
        tag: "checkbox",
        filterKey: "delete",
        description: "Delete Scheduled Procedure Steps from local MWL not returned by external MWL SCP"
      }], [{
        tag: "label",
        text: "Test"
      }, {
        tag: "checkbox",
        filterKey: "test",
        description: "Only test import from external MWL SCP without performing the operation"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "IMPORT"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.destination")) {
        this.service.importMatchingSPS(this.studyWebService.selectedWebService, ok.schema_model.destination, this.createStudyFilterParams(true, true)).subscribe(res => {
          console.log("res", res);
          this.cfpLoadingBar.complete();
          let count = get_default(res, "count");
          let created = hasIn_default(res, "created") ? get_default(res, "created") : "";
          let updated = hasIn_default(res, "updated") ? get_default(res, "updated") : "";
          let deleted = hasIn_default(res, "deleted") ? get_default(res, "deleted") : "";
          let failures = hasIn_default(res, "failures") ? get_default(res, "failures") : "";
          let error = hasIn_default(res, "error") ? get_default(res, "error") : "";
          let msg = `Count: ` + count;
          if (created != "") msg = msg + `<br>
Created: ` + created;
          if (updated != "") msg = msg + `<br>
Updated: ` + updated;
          if (deleted != "") msg = msg + `<br>
Deleted: ` + deleted;
          if (failures != "") msg = msg + `<br>
Failures: ` + failures;
          if (error != "") msg = msg + `<br>
Error: ` + error;
          if (failures != "" || error != "") {
            if (count != "" || created != "" || updated != "" || deleted != "") this.appService.showWarning(msg);else this.appService.showError(msg);
          } else this.appService.showMsg(msg);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  changeSPSStatus(model, spsMode) {
    console.log("model", model);
    console.log("status", get_default(model, "attrs[00400100].Value[0][00400020].Value[0]"));
    console.log("spsID", get_default(model, "attrs[00400100].Value[0][00400009].Value[0]"));
    const currentStatus = get_default(model, "attrs[00400100].Value[0][00400020].Value[0]");
    let headerMsg;
    switch (spsMode) {
      case "single":
        headerMsg = "Change Scheduled Procedure Step Status of the MWL";
        break;
      case "matching":
        headerMsg = "Change Scheduled Procedure Step Status of the matching MWL";
        break;
      case "selected":
        headerMsg = "Change Scheduled Procedure Step Status of the selected MWL";
        break;
    }
    this.confirm({
      content: headerMsg,
      doNotSave: true,
      form_schema: [[[{
        tag: "label_large",
        text: "Select the Scheduled Procedure Step Status"
      }], [{
        tag: "label",
        text: "SPS Status"
      }, {
        tag: "select",
        options: [new SelectDropdown("SCHEDULED", "SCHEDULED"), new SelectDropdown("ARRIVED", "ARRIVED"), new SelectDropdown("READY", "READY"), new SelectDropdown("STARTED", "STARTED"), new SelectDropdown("DEPARTED", "DEPARTED"), new SelectDropdown("CANCELED", "CANCELED"), new SelectDropdown("DISCONTINUED", "DISCONTINUED"), new SelectDropdown("COMPLETED", "COMPLETED")],
        filterKey: "spsState",
        description: "Scheduled Procedure Step Status",
        placeholder: "SPS Status"
      }]]],
      result: {
        schema_model: {
          spsState: currentStatus
        }
      },
      saveButton: "APPLY"
    }).subscribe(ok => {
      if (ok && ok.schema_model.spsState && (spsMode === "single" && ok.schema_model.spsState != currentStatus || spsMode != "single")) {
        this.cfpLoadingBar.start();
        switch (spsMode) {
          case "single":
            this.service.changeSPSStatusSingleMWL(this.studyWebService.selectedWebService, ok.schema_model.spsState, model).subscribe(res => {
              this.appService.showMsg("Status changed successfully");
              this.cfpLoadingBar.complete();
              set_default(model, "attrs[00400100].Value[0][00400020].Value[0]", ok.schema_model.spsState);
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
          case "matching":
            this.service.changeSPSStatusMatchingMWL(this.studyWebService.selectedWebService, ok.schema_model.spsState, this.createStudyFilterParams(true, true, true)).subscribe(res => {
              this.cfpLoadingBar.complete();
              this.appService.showMsgUpdateMatchingMWLs(res, "MWL Items' SPS Status changed successfully");
              this.search("current", {
                id: "submit"
              });
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
          case "selected":
            this.service.changeSPSStatusSelectedMWL(this.selectedElements, this.studyWebService.selectedWebService, ok.schema_model.spsState).subscribe(res => {
              this.cfpLoadingBar.complete();
              try {
                const errorCount = res.filter(result => result && result.isError).length;
                if (errorCount > 0) {
                  this.appService.showMsg("Process executed successfully:<br>\nErrors: " + errorCount + "\n<br>\nSuccessful: " + (res.length - errorCount) + "");
                } else {
                  this.appService.showMsg("Status changed successfully");
                }
                this.clearClipboard();
              } catch (e) {
                j4care.log("Error on change sps status on selected mode result", e);
                this.appService.showMsg("Status changed successfully");
              }
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
            break;
        }
      }
    });
  }
  /*
  * @confirmparameters is an object that can contain title, content
  * */
  confirm(confirmparameters, width) {
    width = width || "500px";
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      height: "auto",
      width
    });
    this.dialogRef.componentInstance.parameters = confirmparameters;
    return this.dialogRef.afterClosed();
  }
  openViewer(model, mode) {
    try {
      let token;
      let url;
      const target = this.studyWebService.selectedWebService["IID_URL_TARGET"] || "";
      let encodeValue = this.studyWebService.selectedWebService["IID_ENCODE"];
      const encodeCheck = encodeValue === void 0 || encodeValue === "" || encodeValue && encodeValue == "true" || encodeValue && encodeValue == "True";
      let configuredUrlString = mode === "study" ? this.studyWebService.selectedWebService["IID_STUDY_URL"] : this.studyWebService.selectedWebService["IID_PATIENT_URL"];
      let studyUID = this.service.getStudyInstanceUID(model) || "";
      let patientID = this.service.getPatientId(model);
      let patientBirthDate = get_default(model, "00100030.Value.0");
      let accessionNumber = get_default(model, "00080050.Value.0");
      let patientName = get_default(model, "00100010.Value[0].Alphabetic");
      let dcmWebServicePath = this.studyWebService.selectedWebService.dcmWebServicePath;
      let qidoBaseURL = j4care.getUrlFromDcmWebApplication(this.studyWebService.selectedWebService, this.appService.baseUrl, true);
      let replaceDoubleBraces = (url2, result) => {
        return url2.replace(/{{(currentDateTime-)?(.+?)}}/g, (match, g1, g2) => {
          if (g1) {
            return j4care.formatDate(j4care.createDateFromDuration(j4care.extractDurationFromValue(g2)), "yyyy-MM-dd");
          } else {
            return result[g2] == null ? g2 : result[g2];
          }
        });
      };
      let substitutions;
      this.service.getTokenService(this.studyWebService).subscribe(response => {
        if (!this.appService.global.notSecure) {
          token = response.token;
        }
        substitutions = {
          "patientID": patientID,
          "patientBirthDate": patientBirthDate,
          "studyUID": studyUID,
          "patientName": patientName,
          "accessionNumber": accessionNumber,
          "access_token": token,
          "qidoBasePath": dcmWebServicePath,
          "qidoBaseURL": qidoBaseURL
        };
        url = replaceDoubleBraces(configuredUrlString, substitutions).trim();
        if (encodeCheck) {
          url = encodeURI(url);
        }
        console.log("Prepared URL: ", url);
        console.groupEnd();
        if (target) {
          window.open(url, target);
        } else {
          window.open(url);
        }
      });
    } catch (e) {
      j4care.log("Something went wrong while opening the Viewer", e);
      this.appService.showError("Something went wrong while opening the Viewer open the inspect to see more details");
    }
  }
  viewInstance(inst) {
    let token;
    let urlObservable;
    let contentType;
    this.service.getTokenService(this.studyWebService).subscribe(response => {
      if (!this.appService.global.notSecure) {
        token = response.token;
      }
      if (inst.video || inst.image || inst.numberOfFrames || inst.gspsQueryParams.length) {
        if (inst.gspsQueryParams.length) {
          urlObservable = this.service.wadoURL(this.studyWebService, inst.gspsQueryParams[inst.view - 1]);
        }
        if (inst.numberOfFrames || inst.image && !inst.video) {
          contentType = "image/jpeg";
          urlObservable = this.service.wadoURL(this.studyWebService, inst.wadoQueryParams, {
            contentType: "image/jpeg"
          });
        }
        if (inst.video) {
          contentType = "video/*";
          urlObservable = this.service.wadoURL(this.studyWebService, inst.wadoQueryParams, {
            contentType: "video/*"
          });
        }
      } else {
        urlObservable = this.service.wadoURL(this.studyWebService, inst.wadoQueryParams);
      }
      if (!contentType) {
        if (hasIn_default(inst, "attrs.00420012.Value.0") && inst.attrs["00420012"].Value[0] != "") {
          contentType = inst.attrs["00420012"].Value[0];
        }
      }
      if (!contentType || contentType.toLowerCase() === "application/pdf" || contentType.toLowerCase().indexOf("video") > -1 || contentType.toLowerCase() === "text/xml") {
        this.service.renderURL(this.studyWebService, inst).subscribe(renderUrl => {
          if (!this.appService.global.notSecure) {
            WindowRefService.nativeWindow.open(renderUrl + `&access_token=${token}`);
          } else {
            WindowRefService.nativeWindow.open(renderUrl);
          }
        });
      } else {
        urlObservable.subscribe(url => {
          this.dialogRef = this.dialog.open(ViewerComponent, {
            height: "auto",
            width: "auto",
            panelClass: "viewer_dialog"
          });
          this.dialogRef.componentInstance.views = inst.views;
          this.dialogRef.componentInstance.view = inst.view;
          this.dialogRef.componentInstance.studyWebService = this.studyWebService;
          this.dialogRef.componentInstance.contentType = contentType;
          this.dialogRef.componentInstance.url = url;
          this.dialogRef.afterClosed().subscribe();
        });
      }
    });
  }
  applyRetentionPolicyMatchingSeries() {
    this.confirm({
      content: "Apply retention policy to all matching series",
      cancelButton: "CANCEL",
      saveButton: "APPLY"
    }).subscribe(() => {
      this.cfpLoadingBar.start();
      this.service.applyRetentionPolicyMatchingSeries(this.studyWebService.selectedWebService, this.createStudyFilterParams(true, true)).subscribe(res => {
        console.log("res", res);
        this.cfpLoadingBar.complete();
        try {
          let count = res["count"];
          let studyInMsg = count == 1 ? "study" : "studies";
          let msg = count == 0 ? "Configured Retention policies do not match with matching series <br>Or <br>Expiration State of studies of matching series is set to FROZEN" : "Configured Retention policies applied successfully to matching series of " + count + " " + studyInMsg + "";
          this.appService.showMsg(msg);
        } catch (e) {
          j4care.log("Could not get count from res=", e);
        }
      }, err => {
        this.httpErrorHandler.handleError(err);
        this.cfpLoadingBar.complete();
      });
    });
  }
  downloadCSV(attr, mode) {
    let queryParameters = this.createQueryParams(0, 1e3, this.createStudyFilterParams());
    this.confirm({
      content: "Do you want to use semicolon as delimiter?",
      cancelButton: "No",
      saveButton: "Yes",
      result: "yes"
    }).subscribe(ok => {
      let semicolon = false;
      if (ok) semicolon = true;
      let token;
      let url;
      this.service.getTokenService(this.studyWebService).subscribe(response => {
        if (!this.appService.global.notSecure) {
          token = response.token;
        }
        let filterClone = cloneDeep_default(queryParameters);
        delete filterClone["offset"];
        delete filterClone["limit"];
        filterClone["accept"] = `text/csv${semicolon ? ";delimiter=semicolon" : ""}`;
        let fileName = "dcm4chee.csv";
        if (attr && mode) {
          url = this.service.getDicomURL("study", this.studyWebService.selectedWebService);
          filterClone["PatientID"] = j4care.valueOf(attr["00100020"]);
          filterClone["IssuerOfPatientID"] = j4care.valueOf(attr["00100021"]);
          if (mode === "series" && hasIn_default(attr, "0020000D")) {
            url = `${url}/${j4care.valueOf(attr["0020000D"])}/series`;
            fileName = `${j4care.valueOf(attr["0020000D"])}.csv`;
          }
          if (mode === "instance") {
            url = `${url}/${j4care.valueOf(attr["0020000D"])}/series/${j4care.valueOf(attr["0020000E"])}/instances`;
            fileName = `${j4care.valueOf(attr["0020000D"])}_${j4care.valueOf(attr["0020000E"])}.csv`;
          }
        } else {
          if (attr === void 0 && mode === "patient") {
            url = `${this.service.getDicomURL("patient", this.studyWebService.selectedWebService)}`;
          }
          if (attr === void 0 && mode === "study") {
            url = `${this.service.getDicomURL("study", this.studyWebService.selectedWebService)}`;
          }
          if (attr === void 0 && mode === "series") {
            url = `${this.service.getDicomURL("series", this.studyWebService.selectedWebService)}`;
          }
          if (attr === void 0 && mode === "mwl") {
            url = `${this.service.getDicomURL("mwl", this.studyWebService.selectedWebService)}`;
          }
          if (attr === void 0 && mode === "uwl") {
            url = `${this.service.getDicomURL("uwl", this.studyWebService.selectedWebService)}`;
          }
        }
        if (!this.appService.global.notSecure) {
          filterClone["access_token"] = token;
        }
        j4care.downloadFile(`${url}?${this.appService.param(filterClone)}`, fileName);
      });
    });
  }
  downloadZip(object, level, mode) {
    this.confirm({
      content: "Download this " + this.service.getLevelText(level) + "",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Compress"
      }, {
        tag: "checkbox",
        filterKey: "compressed"
      }], [{
        tag: "label",
        text: "Include DICOMDIR"
      }, {
        tag: "checkbox",
        filterKey: "includingdicomdir"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "Download"
    }).subscribe(ok => {
      if (ok) {
        let token;
        let param = {
          accept: "application/zip"
        };
        console.log("url", this.service.getDicomURL(mode, this.studyWebService.selectedWebService));
        let url = this.service.studyURL(object.attrs, this.studyWebService.selectedWebService);
        let fileName = this.service.studyFileName(object.attrs);
        if (hasIn_default(ok, "schema_model.compressed") && get_default(ok, "schema_model.compressed")) {
          param.accept += ";transfer-syntax=*";
        }
        if (hasIn_default(ok, "schema_model.includingdicomdir") && get_default(ok, "schema_model.includingdicomdir")) {
          param["dicomdir"] = true;
        }
        if (level === "series") {
          url = this.service.seriesURL(object.attrs, this.studyWebService.selectedWebService);
          fileName = this.service.seriesFileName(object.attrs);
        }
        this.service.getTokenService(this.studyWebService).subscribe(response => {
          if (!this.appService.global.notSecure) {
            token = response.token;
          }
          if (!this.appService.global.notSecure) {
            j4care.downloadFile(`${url}?${j4care.objToUrlParams(param)}&access_token=${token}`, `${fileName}.zip`);
          } else {
            j4care.downloadFile(`${url}?${j4care.objToUrlParams(param)}`, `${fileName}.zip`);
          }
        });
      }
    });
  }
  downloadURL(inst, transferSyntax) {
    let token;
    let url = "";
    let fileName = "dcm4che.dcm";
    this.confirm({
      content: "Download this " + this.service.getLevelText("instance") + "",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Compress"
      }, {
        tag: "checkbox",
        filterKey: "compressed"
      }], [{
        tag: "label",
        text: "Include DICOMDIR"
      }, {
        tag: "checkbox",
        filterKey: "includingdicomdir"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "Download"
    }).subscribe(ok => {
      if (ok) {
        this.service.getTokenService(this.studyWebService).subscribe(response => {
          if (!this.appService.global.notSecure) {
            token = response.token;
          }
          var includeDicomDir = hasIn_default(ok, "schema_model.includingdicomdir") && get_default(ok, "schema_model.includingdicomdir");
          let exQueryParams = includeDicomDir === true ? {
            accept: "application/zip"
          } : {
            contentType: "application/dicom"
          };
          var compressed = hasIn_default(ok, "schema_model.compressed") && get_default(ok, "schema_model.compressed");
          console.log("keys", Object.keys(inst.wadoQueryParams));
          console.log("keys", Object.getOwnPropertyNames(inst.wadoQueryParams));
          console.log("keys", inst.wadoQueryParams);
          if (includeDicomDir === true) {
            exQueryParams["dicomdir"] = true;
            if (compressed === true) exQueryParams.accept += ";transfer-syntax=*";
            url = this.service.instanceURL(inst.attrs, this.studyWebService.selectedWebService);
            fileName = this.service.instanceFileName(inst.attrs);
            this.service.getTokenService(this.studyWebService).subscribe(response2 => {
              if (!this.appService.global.notSecure) {
                token = response2.token;
              }
              if (!this.appService.global.notSecure) {
                j4care.downloadFile(`${url}?${j4care.objToUrlParams(exQueryParams)}&access_token=${token}`, `${fileName}.zip`);
              } else {
                j4care.downloadFile(`${url}?${j4care.objToUrlParams(exQueryParams)}`, `${fileName}.zip`);
              }
            });
          } else {
            if (compressed === true) exQueryParams["transferSyntax"] = transferSyntax;
            this.service.wadoURL(this.studyWebService, inst.wadoQueryParams, exQueryParams).subscribe(urlWebApp => {
              if (!this.appService.global.notSecure) {
                url = urlWebApp + `&access_token=${token}`;
              } else {
                url = urlWebApp;
              }
              if (j4care.hasSet(inst, "attrs[00080018].Value[0]")) {
                fileName = `${get_default(inst, "attrs[00080018].Value[0]")}.dcm`;
              }
              j4care.downloadFile(url, fileName);
            });
          }
        });
      }
    });
  }
  createQueryParams(offset, limit, filter) {
    let params = {
      offset,
      limit
    };
    for (let key in filter) {
      if ((filter[key] || filter[key] === false) && key != "allAttributes" && key != "webApp") {
        params[key] = filter[key];
      }
    }
    return params;
  }
  createStudyFilterParams(withoutPagination, withoutDefaultQueryStudyParam, leaveSPSparamters) {
    let filter = this.getFilterClone();
    if (!leaveSPSparamters) {
      delete filter["ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate"];
      delete filter["ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime"];
    }
    if (withoutPagination) {
      delete filter["offset"];
    }
    if (withoutDefaultQueryStudyParam) {
      delete filter["orderby"];
      delete filter["includefield"];
      delete filter["limit"];
    }
    return filter;
  }
  createPatientFilterParams(withoutPagination) {
    let filter = this.getFilterClone();
    if (withoutPagination) {
      delete filter["offset"];
      delete filter["orderby"];
      delete filter["limit"];
      delete filter["includefield"];
    }
    return filter;
  }
  onSubPaginationClick(e) {
    console.log("e", e);
    if (e.level === "instance") {
      console.log("e.object", e.object);
      if (e.direction === "next") {
        this.getInstances(e.object, e.object.instances[0].offset * 1 + this._filter.filterModel.limit * 1);
      }
      if (e.direction === "prev") {
        this.getInstances(e.object, e.object.instances[0].offset - this._filter.filterModel.limit);
      }
    }
    if (e.level === "series") {
      console.log("e.object", e.object);
      if (e.direction === "next") {
        this.getSeriesOfStudy(e.object, e.object.series[0].offset * 1 + this._filter.filterModel.limit * 1);
      }
      if (e.direction === "prev") {
        this.getSeriesOfStudy(e.object, e.object.series[0].offset - this._filter.filterModel.limit);
      }
    }
    if (e.level === "study") {
      console.log("e.object", e.object);
      let filterModel = this.getFilterClone();
      if (filterModel.limit) {
        filterModel.limit++;
      }
      if (e.direction === "next") {
        this.getAllStudiesToPatient(e.object, filterModel, e.object.studies[0].offset * 1 + this._filter.filterModel.limit * 1);
      }
      if (e.direction === "prev") {
        this.getAllStudiesToPatient(e.object, filterModel, e.object.studies[0].offset - this._filter.filterModel.limit);
      }
    }
  }
  getFilterClone() {
    let filterModel = clone_default(this._filter.filterModel);
    delete filterModel.webApp;
    return j4care.clearEmptyObject(filterModel);
  }
  search(mode, e) {
    console.log("e", e);
    console.log("this", this.filter);
    let filterModel = this.getFilterClone();
    if (this.studyWebService.selectedWebService || this.studyConfig.tab === "diff" && hasIn_default(filterModel, "batchID")) {
      if (filterModel.limit) {
        filterModel.limit++;
      }
      if (e.id === "submit") {
        if (!mode || mode === "current") {
          filterModel.offset = 0;
          this.submit(filterModel);
        } else {
          if (mode === "next" && this.more) {
            filterModel.offset = filterModel.offset * 1 + this._filter.filterModel.limit * 1;
            this.submit(filterModel);
          }
          if (mode === "prev" && filterModel.offset > 0) {
            filterModel.offset = filterModel.offset - this._filter.filterModel.limit;
            this.submit(filterModel);
          }
        }
      }
      if (e.id === "count") {
        console.log("filter", this._filter.filterSchemaMain);
        this.getQuantity("count");
      }
      if (e.id === "size") {
        console.log("filter", this._filter.filterSchemaMain);
        this.getQuantity("size");
      }
      if (e.id === "show_diff") {}
    } else {
      this.appService.showError("No Web Application Service was selected!");
    }
  }
  submit(filterModel) {
    if (this.showNoFilterWarning(filterModel)) {
      this.confirm({
        content: "No filter are set, are you sure you want to continue?"
      }).subscribe(result => {
        if (result) {
          this.triggerQueries(filterModel);
        }
      });
    } else {
      this.triggerQueries(filterModel);
    }
  }
  triggerQueries(filterModel) {
    switch (this.studyConfig.tab) {
      case "study":
        this.getStudies(filterModel);
        break;
      case "patient":
        this.getPatients(filterModel);
        break;
      case "series":
        this.getSeries(filterModel);
        break;
      case "mwl":
        this.getMWL(filterModel);
        break;
      case "mpps":
        this.getMPPS(filterModel);
        break;
      case "uwl":
        this.getUWL(filterModel);
        break;
      case "diff":
        this.getDiff(filterModel);
        break;
    }
  }
  getDiff(filterModel) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    delete filterModel.orderby;
    if (hasIn_default(filterModel, "taskID") || hasIn_default(filterModel, "batchID") && !this.studyWebService.selectedWebService) {
      this.service.getDiff(filterModel, this.studyWebService).subscribe(res => {
        console.log("res", res);
        this.cfpLoadingBar.complete();
        this.patients = [];
        this._filter.filterModel.offset = filterModel.offset;
        if (size_default(res) > 0) {
          this.prepareDiffData(res, filterModel.offset);
        } else {
          this.appService.showMsg("No Diff Results found!");
        }
      }, err => {
        this.patients = [];
        this.httpErrorHandler.handleError(err);
        this.cfpLoadingBar.complete();
      });
    } else {
      this.service.triggerDiff(filterModel, this.studyWebService, "study", "object").subscribe(res => {
        this.cfpLoadingBar.complete();
        this.patients = [];
        this._filter.filterModel.offset = filterModel.offset;
        if (size_default(res) > 0) {
          this.prepareDiffData(res, filterModel.offset);
        } else {
          if (hasIn_default(filterModel, "queue") && filterModel.queue === true) {
            this.appService.showMsg("Diff triggered successfully!");
          } else {
            this.appService.showMsg("No Diff Results found!");
          }
        }
      }, err => {
        this.cfpLoadingBar.complete();
        this.patients = [];
        this.httpErrorHandler.handleError(err);
      });
    }
  }
  /*    getDiffTaskResults(params,offset?){
  /!*        let filter = Object.assign({},params);
          filter['offset'] = offset ? offset:0;
          filter['limit'] = this.limit + 1;
          let mode = 'pk';
          this.cfpLoadingBar.start();
          if(this.taskPK != ''){
              filter['pk'] = this.taskPK;
          }else{
              mode = 'batch';
              filter['batchID'] = this.batchID;
          }*!/
          this.service.gitDiffTaskResults(filter,mode).subscribe(res=>{
              console.log("res",res);
              this.patients = [];
  /!*            this.morePatients = undefined;
              this.moreDiffs = undefined;
              this.moreStudies = undefined;*!/
  
              if (_.size(res) > 0) {
                  // this.moreDiffs = res.length > this.limit;
                  this.prepareDiffData(res, offset);
              }else{
                  this.appService.setMessage({
                      'title': 'Info',
                      'text': 'No Diff Results found!',
                      'status': 'info'
                  });
              }
              this.cfpLoadingBar.complete();
          },err=>{
              this.patients = [];
              this.httpErrorHandler.handleError(err);
              this.cfpLoadingBar.complete();
          });
      }*/
  prepareDiffData(res, offset) {
    let haederCodes = ["00200010", "0020000D", "00080020", "00080030", "00080090", "00080050", "00080061", "00081030", "00201206", "00201208"];
    let index = 0;
    while (this.patientAttributes.dcmTag[index] && this.patientAttributes.dcmTag[index] < "00201200") {
      index++;
    }
    this.patientAttributes.dcmTag.splice(index, 0, "00201200");
    let patient;
    let diff,
      patAttrs,
      tags = this.patientAttributes.dcmTag;
    console.log("res", res);
    res.forEach((studyAttrs, index2) => {
      patAttrs = {};
      this.service.extractAttrs(studyAttrs, tags, patAttrs);
      if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
        patient = new PatientDicom(patAttrs, [], void 0, void 0, void 0, void 0, void 0, [], true);
        this.patients.push(patient);
      }
      let showBorder = false;
      let diffHeaders = {};
      forEach_default(haederCodes, m => {
        diffHeaders[m] = this.service.getDiffHeader(studyAttrs, m);
      });
      diff = new DiffDicom(studyAttrs, patient, this._filter.filterModel.offset + index2, diffHeaders);
      console.log("diffHeaders", diffHeaders);
      patient.diffs.push(diff);
    });
    if (this.more = res.length > this._filter.filterModel.limit) {
      patient.diffs.pop();
      if (patient.diffs.length === 0) {
        this.patients.pop();
      }
    }
  }
  showNoFilterWarning(queryParameters) {
    let param = clone_default(queryParameters);
    if (hasIn_default(param, "includefield")) {
      delete param["includefield"];
    }
    if (hasIn_default(param, "limit")) {
      delete param["limit"];
    }
    if (hasIn_default(param, "offset")) {
      delete param["offset"];
    }
    if (hasIn_default(param, "orderby")) {
      delete param["orderby"];
    }
    if (size_default(param) < 1) {
      return true;
    } else {
      for (let p in param) {
        if (param[p] == "") delete param[p];
      }
    }
    return size_default(param) < 1 ? true : false;
  }
  getQuantity(quantity) {
    let filterModel = this.getFilterClone();
    if (this.showNoFilterWarning(filterModel)) {
      this.confirm({
        content: "No filter are set, are you sure you want to continue?"
      }).subscribe(result => {
        if (result) {
          this.getQuantityService(filterModel, quantity);
        }
      });
    } else {
      this.getQuantityService(filterModel, quantity);
    }
  }
  getQuantityService(filterModel, quantity) {
    delete filterModel.orderby;
    delete filterModel.limit;
    delete filterModel.offset;
    let quantityText = quantity === "count" ? "COUNT" : "SIZE";
    set_default(this._filter.filterSchemaMain.schema, [...(this.filterButtonPath[quantity] || []), ...["quantityText"]], false);
    set_default(this._filter.filterSchemaMain.schema, [...(this.filterButtonPath[quantity] || []), ...["text"]], quantityText);
    set_default(this._filter.filterSchemaMain.schema, [...(this.filterButtonPath[quantity] || []), ...["showDynamicLoader"]], true);
    this.getService(filterModel, quantity).subscribe(studyCount => {
      console.log("studyCount", studyCount);
      let value = studyCount[quantity];
      if (quantity === "size") {
        value = j4care.convertBtoHumanReadable(value, 1);
      }
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["showRefreshIcon"]], false);
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["showDynamicLoader"]], false);
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["text"]], `( ${this.largeIntFormat.transform(value)} ) ${quantityText}`);
    }, err => {
      j4care.log("Something went wrong on search", err);
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["showRefreshIcon"]], true);
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["showDynamicLoader"]], false);
      set_default(this._filter.filterSchemaMain.schema, [...this.filterButtonPath[quantity], ...["text"]], quantityText);
      this.httpErrorHandler.handleError(err);
    });
  }
  getService(filterModel, quantity) {
    switch (this.studyConfig.tab) {
      case "uwl":
        return this.service.getUWL(filterModel, this.studyWebService.selectedWebService, quantity);
      case "mwl":
        return this.service.getMWL(filterModel, this.studyWebService.selectedWebService, quantity);
      case "mpps":
        return this.service.getMPPS(filterModel, this.studyWebService.selectedWebService, quantity);
      case "patient":
        return this.service.getPatients(filterModel, this.studyWebService.selectedWebService, quantity);
      case "series":
        return this.service.getSeries(filterModel, this.studyWebService.selectedWebService, quantity);
      default:
        return this.service.getStudies(filterModel, this.studyWebService.selectedWebService, quantity);
    }
  }
  getMWL(filterModel) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    if (this.studyConfig.tab === "mwl" && !hasIn_default(filterModel, "includefield")) {
      filterModel["includefield"] = "all";
    }
    this.service.getMWL(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients = [];
      this.patients = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (res) {
        this.setTopToTableHeader();
        let patient;
        let mwl;
        let patAttrs;
        let tags = this.patientAttributes.dcmTag;
        res.forEach((mwlAttrs, index) => {
          patAttrs = {};
          this.service.extractAttrs(mwlAttrs, tags, patAttrs);
          if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
            patient = new PatientDicom(patAttrs, [], false, true, 0, [], true);
            this.patients.push(patient);
          }
          mwl = new MwlDicom(mwlAttrs, patient, this._filter.filterModel.offset + index);
          patient.mwls.push(mwl);
        });
        if (this.more = res.length > this._filter.filterModel.limit) {
          patient.mwls.pop();
          if (patient.mwls.length === 0) {
            this.patients.pop();
          }
        }
        console.log("patient", this.patients);
      } else {
        this.appService.showMsg("No matching Modality Worklist Entries found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  getMPPS(filterModel) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    if (this.studyConfig.tab === "mpps" && !hasIn_default(filterModel, "includefield")) {
      filterModel["includefield"] = "all";
    }
    this.service.getMPPS(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients = [];
      this.patients = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (res) {
        this.setTopToTableHeader();
        let patient;
        let mpps;
        let patAttrs;
        let tags = this.patientAttributes.dcmTag;
        res.forEach((mppsAttrs, index) => {
          patAttrs = {};
          this.service.extractAttrs(mppsAttrs, tags, patAttrs);
          if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
            patient = new PatientDicom(patAttrs, [], false, true, 0, void 0, false, void 0, false, void 0, false, [], true);
            this.patients.push(patient);
          }
          mpps = new MppsDicom(mppsAttrs, patient, this._filter.filterModel.offset + index);
          patient.mpps.push(mpps);
        });
        if (this.more = res.length > this._filter.filterModel.limit) {
          patient.mpps.pop();
          if (patient.mpps.length === 0) {
            this.patients.pop();
          }
        }
        console.log("patient", this.patients);
      } else {
        this.appService.showMsg("No matching Modality Performed Procedure Step entries found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  getUWL(filterModel) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    if (this.studyConfig.tab === "uwl" && !hasIn_default(filterModel, "includefield")) {
      filterModel["includefield"] = "all";
    }
    this.service.getUWL(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients = [];
      this.patients = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (res) {
        this.setTopToTableHeader();
        let patient;
        let uwl;
        let patAttrs;
        let tags = this.patientAttributes.dcmTag;
        res.forEach((uwlAttrs, index) => {
          patAttrs = {};
          this.service.extractAttrs(uwlAttrs, tags, patAttrs);
          if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
            patient = new PatientDicom(patAttrs, [], false, false, 0, void 0, false, void 0, void 0, [], true);
            this.patients.push(patient);
          }
          uwl = new UwlDicom(uwlAttrs, patient, this._filter.filterModel.offset + index);
          patient.uwls.push(uwl);
        });
        if (this.more = res.length > this._filter.filterModel.limit) {
          patient.uwls.pop();
          if (patient.uwls.length === 0) {
            this.patients.pop();
          }
        }
        console.log("patient", this.patients);
      } else {
        this.appService.showMsg("No matching Unified Worklist Entries found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  getPatients(filterModel) {
    this.cfpLoadingBar.start();
    if (this.studyConfig.tab === "patient" && !hasIn_default(filterModel, "includefield")) {
      filterModel["includefield"] = "all";
    }
    this.service.getPatients(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (size_default(res) > 0) {
        this.setTopToTableHeader();
        this.patients = res.map((attrs, index) => {
          return new PatientDicom(attrs, [], false, false, filterModel.offset + index);
        });
        if (this.more = this.patients.length > this._filter.filterModel.limit) {
          this.patients.pop();
        }
      } else {
        this.appService.showMsg("No matching Patients found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  getAllStudiesToPatient(patient, filterModel, offset) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    if (offset < 0) offset = 0;
    filterModel["offset"] = offset;
    filterModel["PatientID"] = get_default(patient.attrs, "['00100020'].Value[0]");
    filterModel["IssuerOfPatientID"] = get_default(patient.attrs, "['00100021'].Value[0]");
    filterModel["IssuerOfPatientIDQualifiersSequence.UniversalEntityID"] = get_default(patient.attrs, "['00100024'].Value[0]['00400032'].Value[0]");
    filterModel["IssuerOfPatientIDQualifiersSequence.UniversalEntityIDType"] = get_default(patient.attrs, "['00100024'].Value[0]['00400033'].Value[0]");
    this.service.getStudies(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      if (res && res.length > 0) {
        let hasMore = res.length > this._filter.filterModel.limit;
        patient.studies = res.map((studyAttrs, index) => {
          return new StudyDicom(studyAttrs, patient, offset * 1 + index, hasMore, hasMore || offset > 0);
        });
        patient.showStudies = true;
        if (hasMore) {
          patient.studies.pop();
        }
      } else {
        this.appService.showMsg("No matching Studies found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      this.cfpLoadingBar.complete();
      this.httpErrorHandler.handleError(err);
    });
  }
  getStudies(filterModel) {
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    this.service.getStudies(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (!environment.production) {}
      if (res) {
        this.setTopToTableHeader();
        let index = 0;
        let patient;
        let study;
        let patAttrs;
        let tags = this.patientAttributes.dcmTag;
        while (tags && tags[index] < "00201200") {
          index++;
        }
        tags.splice(index, 0, "00201200");
        tags.push("77770010", "77771010", "77771011", "77771012", "77771013", "77771014", "77771016");
        res.forEach((studyAttrs, index2) => {
          patAttrs = {};
          this.service.extractAttrs(studyAttrs, tags, patAttrs);
          if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
            patient = new PatientDicom(patAttrs, [], false, true);
            this.patients.push(patient);
          }
          study = new StudyDicom(studyAttrs, patient, this._filter.filterModel.offset * 1 + index2);
          patient.studies.push(study);
        });
        if (this.more = this._filter.filterModel.limit && res.length > this._filter.filterModel.limit) {
          patient.studies.pop();
          if (patient.studies.length === 0) {
            this.patients.pop();
          }
        }
      } else {
        this.appService.showMsg("No Studies found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  getSeries(filterModel) {
    console.log("getSeriesCalled");
    this.cfpLoadingBar.start();
    this.searchCurrentList = "";
    this.service.getSeries(filterModel, this.studyWebService.selectedWebService).subscribe(res => {
      this.patients1 = [];
      this.studies = [];
      this._filter.filterModel.offset = filterModel.offset;
      if (res) {
        this.setTopToTableHeader();
        let index = 0;
        let patient;
        let study;
        let series;
        let patAttrs;
        let studyAttrs;
        let tagsPatient = this.patientAttributes.dcmTag;
        let tagsStudy = this.studyAttributes.dcmTag;
        while (tagsPatient && tagsPatient[index] < "00201200") {
          index++;
        }
        tagsPatient.splice(index, 0, "00201200");
        tagsPatient.push("77770010", "77771010", "77771011", "77771012", "77771013", "77771014", "77771016");
        while (tagsStudy && tagsStudy[index] < "00201206") {
          index++;
        }
        tagsStudy.splice(index, 0, "00201206");
        tagsStudy.push("77770010", "77771020", "77771021", "77771022", "77771023", "77771024", "77771025", "77771026", "77771027", "77771028", "77771029", "7777102A", "7777102B", "7777102C");
        res.forEach((seriesAttrs, index2) => {
          patAttrs = {};
          studyAttrs = {};
          this.service.extractAttrs(seriesAttrs, tagsPatient, patAttrs);
          this.service.extractAttrs(seriesAttrs, tagsStudy, studyAttrs);
          if (!(patient && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, patAttrs))) {
            patient = new Patient1Dicom(patAttrs, [], false, true);
            this.patients1.push(patient);
          }
          if (!(study && this.service.equalsIgnoreSpecificCharacterSet(patient.attrs, studyAttrs))) {
            study = new Study1Dicom(studyAttrs, patient, 0, false, false, [], false, false, false, true);
            patient.studies.push(study);
          }
          series = new Series1Dicom(seriesAttrs, patient, study, this._filter.filterModel.offset * 1 + index2);
          study.series.push(series);
        });
        if (this.more = this._filter.filterModel.limit && res.length > this._filter.filterModel.limit) {
          patient.studies.pop();
          if (patient.studies.length === 0) {
            this.patients.pop();
          }
          study.series.pop();
          if (study.series.length === 0) {
            this.studies.pop();
          }
        }
        console.log("patient", this.patients1);
      } else {
        this.appService.showMsg("No Series found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  getSeriesOfStudy(study, offset) {
    console.log("in query sersies study=", study);
    this.cfpLoadingBar.start();
    let filters = this.getFilterClone();
    if (offset < 0) offset = 0;
    filters["offset"] = offset;
    if (filters.limit) {
      filters.limit++;
    }
    delete filters.aet;
    filters["orderby"] = "SeriesNumber";
    this.service.getSeriesOfStudy(study.attrs["0020000D"].Value[0], filters, this.studyWebService.selectedWebService).subscribe(res => {
      if (res) {
        let hasMore = res.length > this._filter.filterModel.limit;
        if (res.length === 0) {
          this.appService.showMsg("No matching series found!");
          console.log("in reslength 0");
        } else {
          study.series = res.map((attrs, index) => {
            return new SeriesDicom(study, attrs, offset * 1 + index, hasMore, hasMore || offset > 0);
          });
          if (hasMore) {
            study.series.pop();
          }
          console.log("study", study);
          console.log("patients", this.patients);
          study.showSeries = true;
        }
      } else {
        this.appService.showMsg("No matching series found!");
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  getInstances(series, offset) {
    this.cfpLoadingBar.start();
    if (offset < 0) offset = 0;
    let filters = this.getFilterClone();
    if (filters.limit) {
      filters.limit++;
    }
    filters["offset"] = offset;
    delete filters.aet;
    filters["orderby"] = "InstanceNumber";
    this.service.getInstances(series.attrs["0020000D"].Value[0], series.attrs["0020000E"].Value[0], filters, this.studyWebService.selectedWebService).subscribe(res => {
      if (res) {
        let hasMore = res.length > this._filter.filterModel.limit;
        series.instances = res.map((attrs, index) => {
          let numberOfFrames = j4care.valueOf(attrs["00280008"]),
            gspsQueryParams = this.service.createGSPSQueryParams(attrs),
            video = this.service.isVideo(attrs),
            image = this.service.isImage(attrs);
          return new InstanceDicom(series, offset * 1 + index, attrs, new WadoQueryParams(attrs["0020000D"].Value[0], attrs["0020000E"].Value[0], attrs["00080018"].Value[0]), video, image, numberOfFrames, gspsQueryParams, this.service.createArray(video || numberOfFrames || gspsQueryParams.length || 1), 1, this._filter.filterModel.limit || 20, hasMore, hasMore || offset > 0);
        });
        if (hasMore) {
          series.instances.pop();
        }
        console.log(series);
        console.log(this.patients);
        series.showInstances = true;
      } else {
        series.instances = [];
        if (series.moreInstances = series.instances.length > this._filter.filterModel.limit) {
          series.instances.pop();
          this.appService.showMsg("No matching Instances found!");
        }
      }
      this.cfpLoadingBar.complete();
    }, err => {
      j4care.log("Something went wrong on search", err);
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  entryFilterChanged(e) {
    console.log("e", e);
    console.log("this.studyWebService", this.studyWebService);
  }
  filterChanged() {
    if (this.studyWebService && get_default(this.studyWebService, "selectedWebService.dcmWebAppName") != get_default(this.filter, "filterModel.webApp")) {
      this.studyWebService.seletWebAppFromWebAppName(get_default(this.filter, "filterModel.webApp"));
      this.onStudyWebServiceChange.emit(this.studyWebService);
      this.internal = !(this.appService.archiveDeviceName && hasIn_default(this.studyWebService, "selectedWebService.dicomDeviceName") && this.studyWebService.selectedWebService.dicomDeviceName != this.appService.archiveDeviceName);
      if (!this.internal) {
        delete this._filter.filterModel.includefield;
      } else {
        this._filter.filterModel.includefield = "all";
      }
      if (hasIn_default(this.studyWebService.selectedWebService, "dcmProperty[0]")) {
        this.studyWebService.selectedWebService.dcmProperty.forEach(propertie => {
          if (propertie.indexOf("MWLWorklistLabel=") > -1) {
            let mwlLabel = propertie;
            mwlLabel = mwlLabel.replace("MWLWorklistLabel=", "");
            this.filter.filterModel.WorklistLabel = mwlLabel;
          }
        });
      }
      this.setMainSchema();
      this.setTrash();
      this.patients = [];
    }
    this.triggerSubmitOnQueryParams();
    this.onFilterChange.emit(this.filter.filterModel);
  }
  triggerSubmitOnQueryParams() {
    if (this.querySubmit && this.studyWebService && this.studyWebService.selectedWebService) {
      this.querySubmit = false;
      this.search("current", {
        id: "submit"
      });
    }
  }
  actionsSelectionsFilterPipe(value, args) {
    console.log("args", args);
    let internal = args[0];
    let trashActive = args[1];
    let studyConfig = args[2];
    return value.filter(option => {
      switch (option.value) {
        case "delete_object":
          return internal && trashActive;
        case "restore_object":
          return internal && trashActive;
        case "reject_object":
          return !trashActive && studyConfig && (studyConfig.tab === "study" || studyConfig.tab === "series");
        case "change_sps_status_on_selections":
          return studyConfig && studyConfig.tab === "mwl";
        case "update_access_control_id_to_selections":
        case "send_storage_commitment_request_for_selections":
        case "send_ian_request_for_selections":
        case "storage_verification_for_selections":
        case "export_object":
          return internal && studyConfig && (studyConfig.tab === "study" || studyConfig.tab === "series");
        case "retrieve_object":
          return !internal && studyConfig && studyConfig.tab === "study";
        default:
          return true;
      }
    });
  }
  setSchema() {
    try {
      this.synchronizeSelectedWebAppWithFilter();
      this._filter.filterSchemaMain.lineLength = void 0;
      this._filter.filterSchemaExpand.lineLength = void 0;
      this._filter.filterSchemaMain.schema = void 0;
      this._filter.filterSchemaExpand.schema = void 0;
      this.setMainSchema();
      this._filter.filterSchemaExpand = this.service.getFilterSchema(this.studyConfig.tab, this.applicationEntities.aes, this._filter.quantityText, "expand", this.storages, this.institutions);
      this.changeDetector.detectChanges();
    } catch (e) {
      j4care.log("Error on schema set", e);
    }
  }
  setMainSchema() {
    const showCount = this.studyConfig.tab == "mwl" || this.studyConfig.tab == "mpps" || this.studyConfig.tab == "uwl" ? !!this.studyWebService.selectedWebService : hasIn_default(this.studyWebService, "selectedWebService.dcmWebServiceClass") && this.studyWebService.selectedWebService.dcmWebServiceClass.indexOf("QIDO_COUNT") > -1;
    const showSize = hasIn_default(this.studyWebService, "selectedWebService.dcmWebServiceClass") && this.studyWebService.selectedWebService.dcmWebServiceClass.indexOf("DCM4CHEE_ARC_AET") > -1;
    this._filter.filterSchemaMain = this.service.getFilterSchema(this.studyConfig.tab, this.applicationEntities.aes, this._filter.quantityText, "main", this.storages, this.institutions, this.studyWebService, this.diffAttributeSets, showCount, showSize, this.filter);
    this.filterButtonPath.count = j4care.getPath(this._filter.filterSchemaMain.schema, "id", "count");
    this.filterButtonPath.size = j4care.getPath(this._filter.filterSchemaMain.schema, "id", "size");
    if (this.filterButtonPath.count) {
      this.filterButtonPath.count.pop();
    }
    if (this.filterButtonPath.size) {
      this.filterButtonPath.size.pop();
    }
  }
  synchronizeSelectedWebAppWithFilter() {
    const selectedWebAppName = get_default(this.studyWebService, "selectedWebService.dcmWebAppName");
    if (selectedWebAppName && this.filter.filterModel.webApp !== selectedWebAppName) {
      this.filter.filterModel.webApp = selectedWebAppName;
    }
  }
  accessLocationChange(e) {
    console.log("e", e.value);
    this.setSchema();
  }
  getPatientAttributeFilters() {
    this.service.getAttributeFilter().subscribe(patientAttributes => {
      this.patientAttributes = patientAttributes;
    }, err => {
      j4care.log("Something went wrong on getting Patient Attributes", err);
      this.httpErrorHandler.handleError(err);
    });
  }
  getStudyAttributeFilters() {
    this.service.getAttributeFilter("Study").subscribe(studyAttributes => {
      this.studyAttributes = studyAttributes;
    }, err => {
      j4care.log("Something went wrong on getting Study Attributes", err);
      this.httpErrorHandler.handleError(err);
    });
  }
  /*    getApplicationEntities(){
          this.service.getAes()
          .subscribe((aes:Aet[])=>{
              this.applicationEntities.aes = aes.map((ae:Aet)=>{
                  return new SelectDropdown(ae.dicomAETitle,ae.dicomAETitle,ae.dicomDescription,undefined,undefined,ae);
              });
              console.log("filter",this.filter);
              this.setSchema();
          },(err)=>{
              this.appService.showError($localize `:@@study.error_getting:_aets:Error getting AETs!`);
              j4care.log("error getting aets in Study page",err);
          });
      }*/
  getDevices() {
    return new Observable(observer => {
      this.service.getDevices().subscribe(devices => {
        observer.next(devices);
      }, err => {
        observer.next([]);
      });
    });
  }
  createPatient() {
    let config = {
      saveLabel: "CREATE",
      titleLabel: "Create new patient"
    };
    let newPatient = {
      "attrs": {
        "00100010": {
          "vr": "PN",
          "Value": [{
            Alphabetic: ""
          }]
        },
        "00100020": {
          "vr": "LO",
          "Value": [""]
        },
        "00100021": {
          "vr": "LO",
          "Value": [""]
        },
        "00100030": {
          "vr": "DA",
          "Value": [""]
        },
        "00100040": {
          "vr": "CS",
          "Value": [""]
        }
      }
    };
    this.modifyPatient(newPatient, "create", config);
  }
  supplementIssuer() {
    this.confirm({
      content: "Supplement new Issuer",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Issuer of Patient"
      }, {
        tag: "input",
        type: "text",
        filterKey: "issuerOfPatient",
        description: "Issuer of Patient",
        placeholder: "Issuer of Patient"
      }], [{
        tag: "label",
        text: "Test"
      }, {
        tag: "checkbox",
        filterKey: "testSupplement",
        description: "Only test, without actually supplementing"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SUPPLEMENT"
    }).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        this.service.supplementIssuer(ok.schema_model.issuerOfPatient, ok.schema_model.testSupplement, this.createPatientFilterParams(true), this.studyWebService).subscribe(res => {
          this.cfpLoadingBar.complete();
          this.appService.showMsgSupplementIssuer(res);
        }, err => {
          this.cfpLoadingBar.complete();
          this.appService.showMsgSupplementIssuer(err.error);
        });
      }
    });
  }
  updateCharset() {
    this.confirm({
      content: "Update Character Set of Patients",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Character Set"
      }, {
        tag: "select",
        options: [{
          value: "ISO_IR 100",
          text: "Latin alphabet No. 1",
          title: "Latin alphabet No. 1 (ISO_IR 100)"
        }, {
          value: "ISO_IR 101",
          text: "Latin alphabet No. 2",
          title: "Latin alphabet No. 2 (ISO_IR 101)"
        }, {
          value: "ISO_IR 109",
          text: "Latin alphabet No. 3",
          title: "Latin alphabet No. 3 (ISO_IR 109)"
        }, {
          value: "ISO_IR 110",
          text: "Latin alphabet No. 4",
          title: "Latin alphabet No. 4 (ISO_IR 110)"
        }, {
          value: "ISO_IR 148",
          text: "Latin alphabet No. 5",
          title: "Latin alphabet No. 5 (ISO_IR 1148)"
        }, {
          value: "ISO_IR 127",
          text: "Arabic",
          title: "Arabic (ISO_IR 127)"
        }, {
          value: "ISO_IR 144",
          text: "Cyrillic",
          title: "Cyrillic (ISO_IR 144)"
        }, {
          value: "ISO_IR 126",
          text: "Greek",
          title: "Greek (ISO_IR 126)"
        }, {
          value: "ISO_IR 138",
          text: "Hebrew",
          title: "Hebrew (ISO_IR 138)"
        }, {
          value: "ISO_IR 13",
          text: "Japanese",
          title: "Japanese (ISO_IR 13)"
        }, {
          value: "ISO_IR 166",
          text: "Thai",
          title: "Thai (ISO_IR 166)"
        }, {
          value: "ISO_IR 192",
          text: "Unicode in UTF-8",
          title: "Unicode in UTF-8 (ISO_IR 192)"
        }, {
          value: "GB18030",
          text: "GB18030",
          title: "GB18030 (GB18030)"
        }, {
          value: "GBK",
          text: "GBK",
          title: "GBK (GBK)"
        }],
        filterKey: "charset",
        description: "Character Set",
        placeholder: "Character Set"
      }], [{
        tag: "label",
        text: "Test"
      }, {
        tag: "checkbox",
        filterKey: "testUpdateCharset",
        description: "Only test, without actually updating charset"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "UPDATE"
    }).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        this.service.updateCharset(ok.schema_model.charset, ok.schema_model.testUpdateCharset, this.createPatientFilterParams(true), this.studyWebService).subscribe(res => {
          this.cfpLoadingBar.complete();
          this.appService.showMsgUpdateCharsets(res);
        }, err => {
          this.cfpLoadingBar.complete();
          this.appService.showMsgUpdateCharsets(err.error);
        });
      }
    });
  }
  subscribeUWL(workitem, subscribeType, title, msg) {
    this.modifyUPS(workitem, "subscribe", subscribeType, {
      saveLabel: "SUBSCRIBE",
      titleLabel: title
    }, msg);
  }
  createUPS() {
    this.modifyUPS(void 0, "create", void 0, {
      saveLabel: "CREATE",
      titleLabel: "Create new UPS Workitem"
    }, "UPS Workitem created successfully at ");
  }
  cloneUPS(workitem) {
    this.modifyUPS(workitem, "clone", void 0, {
      saveLabel: "CLONE",
      titleLabel: "Clone UPS Workitem"
    }, "UPS Workitem cloned successfully at ");
  }
  editUPS(workitem) {
    this.modifyUPS(workitem, "edit", void 0, {
      saveLabel: "SAVE",
      titleLabel: "Edit UPS Workitem"
    }, "UPS Workitem updated successfully");
  }
  modifyUPS(workitem, mode, subscribeType, config, msg) {
    let originalWorkitemObject;
    this.service.getUPSIod(mode).subscribe(iod => {
      if (mode === "edit" || mode === "clone" || mode === "subscribe" && subscribeType === "ups") {
        originalWorkitemObject = cloneDeep_default(workitem);
        workitem.attrs = j4care.intersection(workitem.attrs, iod);
        if (mode === "clone") {
          delete workitem.attrs["00741000"];
          set_default(workitem.attrs, "00741000.Value[0]", "SCHEDULED");
        }
      }
      if (mode === "create" && !workitem || mode === "subscribe" && subscribeType === "uwl") {
        workitem = {
          "attrs": {}
        };
        Object.keys(iod).forEach(dicomAttr => {
          if (iod[dicomAttr].required && iod[dicomAttr].required === 1 || dicomAttr === "00741202" || dicomAttr === "00404005") {
            workitem["attrs"][dicomAttr] = cloneDeep_default(iod[dicomAttr]);
          }
        });
        if (mode === "create") {
          delete workitem.attrs["00741000"];
          set_default(workitem.attrs, "00741000.Value[0]", "SCHEDULED");
        }
      }
      this.service.initEmptyValue(workitem.attrs);
      this.dialogRef = this.dialog.open(ModifyUpsComponent, {
        height: "auto",
        width: "90%"
      });
      this.dialogRef.componentInstance.mode = mode;
      this.dialogRef.componentInstance.subscribeType = subscribeType;
      this.dialogRef.componentInstance.ups = workitem;
      this.dialogRef.componentInstance.dropdown = this.service.getArrayFromIod(iod);
      this.dialogRef.componentInstance.iod = this.service.replaceKeyInJson(iod, "items", "Value");
      this.dialogRef.componentInstance.saveLabel = config.saveLabel;
      this.dialogRef.componentInstance.titleLabel = config.titleLabel;
      this.dialogRef.afterClosed().subscribe(ok => {
        if (ok) {
          j4care.removeKeyFromObject(workitem.attrs, ["required", "enum", "multi"]);
          let createUPS = template => {
            let object = cloneDeep_default(workitem);
            if (template) {
              if (hasIn_default(object, "attrs.00404005")) {
                delete object.attrs["00404005"];
              }
              msg = "UPS template created successfully at ";
            }
            this.service.modifyUPS(void 0, object.attrs, this.studyWebService, msg, mode, template).subscribe(res => {
              this.appService.showMsg(msg);
            });
          };
          if (mode === "edit") {
            this.service.modifyUPS(this.service.getUpsWorkitemUID(originalWorkitemObject.attrs), workitem.attrs, this.studyWebService, msg, mode).subscribe(res => {
              this.appService.showMsg(msg);
            });
          }
          if ((mode === "create" || mode === "clone") && ok.templateParameter) {
            if (ok.templateParameter === "template_too") {
              createUPS(true);
              createUPS();
            } else createUPS(ok.templateParameter != "no_template");
          }
          if (mode === "subscribe") {
            let params = "";
            if (ok.result.subscribeMode === "filtered" || subscribeType === "ups") {
              Object.keys(iod).forEach(dicomAttr => {
                if (hasIn_default(workitem.attrs, dicomAttr) && hasIn_default(workitem.attrs[dicomAttr], "Value") && workitem.attrs[dicomAttr].Value[0] != "") {
                  console.log("ups iod dicom attr is ", dicomAttr, "   ", workitem.attrs[dicomAttr].Value[0]);
                  let vr = workitem.attrs[dicomAttr].vr;
                  if (vr === "PN") {
                    let alphabetic = workitem.attrs[dicomAttr].Value[0].Alphabetic;
                    params += dicomAttr + "=" + replace_default(alphabetic, "^", "%5E") + "&";
                  } else if (vr != "SQ") {
                    let val = workitem.attrs[dicomAttr].Value[0];
                    params += dicomAttr + "=" + replace_default(val, " ", "%20") + "&";
                  } else {
                    if (dicomAttr === "00404034") {
                      let scheduledHumanPerformerItem = workitem.attrs[dicomAttr].Value[0];
                      if (hasIn_default(scheduledHumanPerformerItem["00404009"], "Value")) {
                        let humanPerformerCodeItem = scheduledHumanPerformerItem["00404009"].Value[0];
                        params += dicomAttr + ".00404009.00080100=" + humanPerformerCodeItem["00080100"].Value[0] + "&";
                        params += dicomAttr + ".00404009.00080102=" + humanPerformerCodeItem["00080102"].Value[0] + "&";
                        let codeMeaning = humanPerformerCodeItem["00080104"].Value[0];
                        if (codeMeaning && codeMeaning != "") params += dicomAttr + ".00404009.00080104=" + replace_default(codeMeaning, " ", "%20") + "&";
                      }
                      if (hasIn_default(scheduledHumanPerformerItem["00404036"], "Value")) {
                        let humanPerformerOrganization = scheduledHumanPerformerItem["00404036"].Value[0];
                        if (humanPerformerOrganization && humanPerformerOrganization != "") params += dicomAttr + ".00404036=" + replace_default(humanPerformerOrganization, " ", "%20") + "&";
                      }
                      if (hasIn_default(scheduledHumanPerformerItem["00404037"], "Value")) {
                        let humanPerformerNameAlphabetic = scheduledHumanPerformerItem["00404037"].Value[0].Alphabetic;
                        if (humanPerformerNameAlphabetic && humanPerformerNameAlphabetic != "") params += dicomAttr + ".00404037=" + replace_default(humanPerformerNameAlphabetic, "^", "%5E") + "&";
                      }
                    } else if (dicomAttr === "00404021" || dicomAttr === "0040A370") {} else {
                      let item = workitem.attrs[dicomAttr].Value[0];
                      if (item && item != "") {
                        params += dicomAttr + ".00080100=" + item["00080100"].Value[0] + "&";
                        params += dicomAttr + ".00080102=" + item["00080102"].Value[0] + "&";
                        let codeMeaning = item["00080104"].Value[0];
                        if (codeMeaning && codeMeaning != "") params += dicomAttr + ".00080104=" + replace_default(codeMeaning, " ", "%20") + "&";
                      }
                    }
                  }
                }
              });
            }
            if (ok.result.deletionlock === true) params += "deletionlock=true";
            console.log("ups params for subscription is ", params);
            let workitemUID = subscribeType === "ups" ? this.service.getUpsWorkitemUID(originalWorkitemObject.attrs) : ok.result.subscribeMode === "global" ? "1.2.840.10008.5.1.4.34.5" : "1.2.840.10008.5.1.4.34.5.1";
            this.service.subscribeUPS(workitemUID, params, this.studyWebService, ok.result.subscriberAET).subscribe(res => {
              this.appService.showMsg(msg);
            }, err => {
              this.httpErrorHandler.handleError(err);
            });
          }
        } else {
          assign_default(workitem, originalWorkitemObject);
        }
        this.dialogRef = null;
      });
    });
  }
  rescheduleUPS(workitem) {
    this.confirm({
      content: "Reschedule",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "UID of new created Workitem"
      }, {
        tag: "input",
        type: "text",
        filterKey: "newWorkitem",
        description: "UID of new created Workitem",
        placeholder: "UID of new created Workitem"
      }], [{
        tag: "label",
        text: "Scheduled Procedure Step Start DateTime"
      }, {
        tag: "single-date-time-picker",
        type: "text",
        filterKey: "upsScheduledTime",
        description: "Scheduled Procedure Step Start DateTime (0040,4005) as in created UPS",
        placeholder: "Scheduled Procedure Step Start DateTime"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "RESCHEDULE"
    }).subscribe(ok => {
      if (ok) {
        this.service.rescheduleUPS(this.service.getUpsWorkitemUID(workitem.attrs), this.studyWebService, ok.schema_model).subscribe(res => {
          this.appService.showMsg("UPS Workitem rescheduled successfully!");
        }, err => {
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  unsubscribeOrSuspendUWL(suspend) {
    this.confirm({
      content: suspend === true ? "Suspend Unified Worklist" : "Unsubscribe from Unified Worklist",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Subscriber AET"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes,
        filterKey: "subscriber",
        description: "Subscriber AET",
        placeholder: "Subscriber AET"
      }], [{
        tag: "label",
        text: "Unified Worklist Type"
      }, {
        tag: "select",
        options: [new SelectDropdown("1.2.840.10008.5.1.4.34.5", "Global Worklist"), new SelectDropdown("1.2.840.10008.5.1.4.34.5.1", "Filtered Worklist")],
        filterKey: "uwlType",
        description: suspend === true ? "Select Unified Worklist to suspend" : "Select Unified Worklist to unsubscribe from",
        placeholder: "Unified Worklist Type"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: suspend === true ? "SUSPEND" : "UNSUBSCRIBE"
    }).subscribe(ok => {
      if (ok) {
        if (ok.schema_model.subscriber === void 0) this.appService.showWarning("Subscriber AET should be set");
        if (ok.schema_model.uwlType === void 0) this.appService.showWarning(suspend === true ? "Unified Worklist to suspend should be set" : "Unified Worklist to unsubscribe from should be set");else {
          this.service.unsubscribeOrSuspendUPS(suspend, ok.schema_model.uwlType, this.studyWebService, ok.schema_model.subscriber).subscribe(res => {
            this.appService.showMsg(suspend === true ? "Unified Worklist was suspended successfully!" : "Unified Worklist was unsubscribed successfully!");
          }, err => {
            this.httpErrorHandler.handleError(err);
          });
        }
      }
    });
  }
  unsubscribeUPS(workitem) {
    this.confirm({
      content: "Unsubscribe UPS Workitem",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Subscriber AET"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes,
        filterKey: "subscriber",
        description: "Subscriber AET",
        placeholder: "Subscriber AET"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "UNSUBSCRIBE"
    }).subscribe(ok => {
      if (ok) {
        if (ok.schema_model.subscriber === void 0) this.appService.showWarning("Subscriber AET should be set");else {
          this.service.unsubscribeOrSuspendUPS(false, this.service.getUpsWorkitemUID(workitem.attrs), this.studyWebService, ok.schema_model.subscriber).subscribe(res => {
            this.appService.showMsg("UPS Workitem was unsubscribed successfully!");
          }, err => {
            this.httpErrorHandler.handleError(err);
          });
        }
      }
    });
  }
  changeUPSState(workitem) {
    this.confirm({
      content: "Change Workitem State",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "AET of a Requester"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes,
        filterKey: "requester",
        description: "AET of a Requester",
        placeholder: "AET of a Requester"
      }], [{
        tag: "label",
        text: "Transaction UID"
      }, {
        tag: "input",
        type: "text",
        filterKey: "transactionUID",
        description: "Transaction UID",
        placeholder: "Transaction UID"
      }], [{
        tag: "label",
        text: "Procedure Step State"
      }, {
        tag: "select",
        options: [new SelectDropdown("IN PROGRESS", "IN PROGRESS"), new SelectDropdown("CANCELED", "CANCELED"), new SelectDropdown("COMPLETED", "COMPLETED")],
        filterKey: "upsState",
        description: "UPS Procedure Step State",
        placeholder: "Procedure Step State"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "APPLY"
    }).subscribe(ok => {
      if (ok) {
        if (ok.schema_model.requester === void 0) this.appService.showWarning("Requester AET should be set");else if (ok.schema_model.upsState === void 0) this.appService.showWarning("Procedure Step State should be set");else if (ok.schema_model.upsState === "IN PROGRESS" && ok.schema_model.transactionUID === void 0) this.appService.showWarning("Transaction UID must be set to change UPS state to IN PROGRESS");else if (ok.schema_model.requester && ok.schema_model.upsState) {
          let changeUPSStateAttrsAsStr = '{"00741000":{"vr":"CS","Value":["' + ok.schema_model.upsState;
          if (ok.schema_model.transactionUID === void 0) changeUPSStateAttrsAsStr += '"]}}';else changeUPSStateAttrsAsStr += '"]},"00081195":{"vr":"UI","Value":["' + ok.schema_model.transactionUID + '"]}}';
          this.service.changeUPSState(this.service.getUpsWorkitemUID(workitem.attrs), this.studyWebService, ok.schema_model.requester, changeUPSStateAttrsAsStr).subscribe(res => {
            this.appService.showMsg("UPS Workitem state was changed successfully!");
          });
        }
      }
    });
  }
  cancelUPS(workitem) {
    this.confirm({
      content: "Request Cancellation of Workitem",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "AET of a Requester"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes,
        filterKey: "requester",
        description: "AET of a Requester",
        placeholder: "AET of a Requester"
      }], [{
        tag: "label",
        text: "Reason for Cancellation"
      }, {
        tag: "input",
        type: "text",
        filterKey: "reasonForCancellation",
        description: "Reason for Cancellation",
        placeholder: "Reason for Cancellation"
      }], [{
        tag: "label",
        text: "Procedure Step Discontinuation Reason Code Sequence"
      }], [{
        tag: "label",
        text: "Code Value"
      }, {
        tag: "input",
        type: "text",
        filterKey: "codeValue",
        description: "Code Value",
        placeholder: "Code Value"
      }], [{
        tag: "label",
        text: "Coding Scheme Designator"
      }, {
        tag: "input",
        type: "text",
        filterKey: "codingSchemeDesignator",
        description: "Coding Scheme Designator",
        placeholder: "Coding Scheme Designator"
      }], [{
        tag: "label",
        text: "Code Meaning"
      }, {
        tag: "input",
        type: "text",
        filterKey: "codeMeaning",
        description: "Code Meaning",
        placeholder: "Code Meaning"
      }], [{
        tag: "label",
        text: "Contact URI"
      }, {
        tag: "input",
        type: "text",
        filterKey: "contactURI",
        description: "Contact URI",
        placeholder: "Contact URI"
      }], [{
        tag: "label",
        text: "Contact Display Name"
      }, {
        tag: "input",
        type: "text",
        filterKey: "contactName",
        description: "Contact Display Name",
        placeholder: "Contact Display Name"
      }]]],
      result: {
        schema_model: {
          codeValue: "110513",
          codingSchemeDesignator: "DCM",
          codeMeaning: "Discontinued for unspecified reason"
        }
      },
      saveButton: "Cancel UPS"
    }).subscribe(ok => {
      if (ok) {
        let requestUPSCancelActionInfoAttrs = this.requestUPSCancelActionInfoAttrs(ok.schema_model);
        console.log("created requestUPSCancelActionInfoAttrs are.........", requestUPSCancelActionInfoAttrs);
        this.service.requestCancellationForUPS(this.service.getUpsWorkitemUID(workitem.attrs), this.studyWebService, ok.schema_model.requester, requestUPSCancelActionInfoAttrs).subscribe(res => {
          this.appService.showMsg("Cancellation of the UPS Workitem was requested successfully!");
        });
      }
    });
  }
  requestUPSCancelActionInfoAttrs(schema_model) {
    let discontinuationCode;
    if (schema_model.codeValue && schema_model.codingSchemeDesignator && schema_model.codeMeaning) {
      discontinuationCode = '"0074100E":{"vr":"SQ","Value":[{"00080100":{"vr":"SH","Value":["' + schema_model.codeValue + '"]},"00080102":{"vr":"SH","Value":["' + schema_model.codingSchemeDesignator + '"]},"00080104":{"vr":"LO","Value":["' + schema_model.codeMeaning + '"]}}]}';
    }
    let requestUPSCancelActionInfoAttrs = "{";
    if (schema_model.reasonForCancellation) {
      requestUPSCancelActionInfoAttrs += '"00741238":{"vr":"LT","Value":["' + schema_model.reasonForCancellation + '"]}';
      if (schema_model.contactURI) requestUPSCancelActionInfoAttrs += ',"0074100A":{"vr":"UR","Value":["' + schema_model.contactURI + '"]}';
      if (schema_model.contactName) requestUPSCancelActionInfoAttrs += ',"0074100C":{"vr":"LO","Value":["' + schema_model.contactName + '"]}';
      if (discontinuationCode) requestUPSCancelActionInfoAttrs += "," + discontinuationCode;
    } else {
      if (schema_model.contactURI) {
        requestUPSCancelActionInfoAttrs += '"0074100A":{"vr":"UR","Value":["' + schema_model.contactURI + '"]}';
        if (schema_model.contactName) requestUPSCancelActionInfoAttrs += ',"0074100C":{"vr":"LO","Value":["' + schema_model.contactName + '"]}';
        if (discontinuationCode) requestUPSCancelActionInfoAttrs += "," + discontinuationCode;
      } else {
        if (schema_model.contactName) {
          requestUPSCancelActionInfoAttrs += '"0074100C":{"vr":"LO","Value":["' + schema_model.contactName + '"]}';
          if (discontinuationCode) requestUPSCancelActionInfoAttrs += "," + discontinuationCode;
        } else {
          if (discontinuationCode) requestUPSCancelActionInfoAttrs += discontinuationCode;
        }
      }
    }
    requestUPSCancelActionInfoAttrs += "}";
    return requestUPSCancelActionInfoAttrs;
  }
  editPatient(patient) {
    let config = {
      saveLabel: "SAVE",
      titleLabel: "Edit patient "
    };
    config.titleLabel += hasIn_default(patient, "attrs.00100010.Value.0.Alphabetic") ? "<b>" + patient.attrs["00100010"].Value[0]["Alphabetic"] + "</b>" : " ";
    config.titleLabel += hasIn_default(patient, "attrs.00100020.Value.0") ? " with ID: <b>" + patient.attrs["00100020"].Value[0] + "</b>" : "";
    this.modifyPatient(patient, "edit", config);
  }
  modifyPatient(patient, mode, config) {
    let originalPatientObject;
    if (mode === "edit") {
      originalPatientObject = cloneDeep_default(patient);
    }
    this.lastPressedCode = 0;
    this.service.getPatientIod().subscribe(iod => {
      let patientFiltered = cloneDeep_default(patient);
      let onlyPrivateAttrs;
      [patientFiltered.attrs, onlyPrivateAttrs] = new ComparewithiodPipe().transform(patient.attrs, [iod, "both"]);
      this.service.initEmptyValue(patientFiltered.attrs);
      this.dialogRef = this.dialog.open(EditPatientComponent, {
        height: "auto",
        width: "90%"
      });
      this.dialogRef.componentInstance.mode = mode;
      this.dialogRef.componentInstance.patient = patientFiltered;
      this.dialogRef.componentInstance.patientResults.patient = patientFiltered;
      this.dialogRef.componentInstance.dropdown = this.service.getArrayFromIod(iod);
      this.dialogRef.componentInstance.iod = this.service.replaceKeyInJson(iod, "items", "Value");
      this.dialogRef.componentInstance.saveLabel = config.saveLabel;
      this.dialogRef.componentInstance.titleLabel = config.titleLabel;
      this.dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const _a8 = result,
            {
              patient: formPatient
            } = _a8,
            additionalParams = __objRest(_a8, ["patient"]);
          const tempAttrs = __spreadValues(__spreadValues({}, formPatient.attrs), onlyPrivateAttrs);
          j4care.removeKeyFromObject(tempAttrs, ["required", "enum", "multi"]);
          if (mode === "create") {
            this.service.modifyPatient(void 0, tempAttrs, this.studyWebService, void 0, void 0, additionalParams).subscribe(res => {
              this.appService.showMsg("Patient created successfully");
            }, err => {
              this.httpErrorHandler.handleError(err);
            });
          } else {
            this.service.modifyPatientByPk(this.service.getPatientPk(originalPatientObject.attrs), tempAttrs, this.studyWebService, void 0, void 0, additionalParams).subscribe(res => {
              this.appService.showMsg("Patient updated successfully");
            }, err => {
              assign_default(patient, originalPatientObject);
              this.httpErrorHandler.handleError(err);
            });
          }
          patient.attrs = tempAttrs;
        } else {
          assign_default(patient, originalPatientObject);
        }
        this.dialogRef = null;
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
      console.log("error", err);
    });
  }
  recreateDBRecord(dicomLevel, model) {
    this.confirm({
      content: "Reset to as received",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Source of Previous Values"
      }, {
        tag: "input",
        type: "text",
        filterKey: "sourceOfPreviousValues",
        description: "Source of Previous Values (0400,0561) stored with original Attributes in Original Attributes Sequence (0400,0561)",
        placeholder: "Source of Previous Values"
      }], [{
        tag: "label",
        text: "Reason for Modification"
      }, {
        tag: "select",
        type: "text",
        options: [new SelectDropdown("COERCE", "COERCE"), new SelectDropdown("CORRECT", "CORRECT")],
        filterKey: "reasonForModification",
        description: "Store original values of modified Attributes in Original Attributes Sequence (0400,0561) with given Reason for the Attribute Modification (0400,0565)",
        placeholder: "Reason for Modification"
      }], [{
        tag: "label",
        text: "Update Policy"
      }, {
        tag: "select",
        type: "text",
        options: [new SelectDropdown("SUPPLEMENT", "SUPPLEMENT"), new SelectDropdown("MERGE", "MERGE"), new SelectDropdown("OVERWRITE", "OVERWRITE")],
        filterKey: "updatePolicy",
        description: "Update Policy for modification of original attributes",
        placeholder: "Update Policy"
      }], [{
        tag: "label",
        text: "Read Pixel Data from Storage"
      }, {
        tag: "checkbox",
        filterKey: "readPixelData"
      }], [{
        tag: "dynamic-attributes",
        iodFileNames: ["patient", "study"]
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "RESET"
    }).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        this.service.recreateDBRecord(ok.schema_model, this.studyWebService.selectedWebService, model).subscribe(res => {
          this.cfpLoadingBar.complete();
          this.appService.showMsg("Process executed successfully");
          console.log("res", res);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  updateAccessControlId(dicomLevel, mode, model) {
    let matching = dicomLevel === "matching_studies" || dicomLevel === "matching_series";
    let innerText;
    switch (dicomLevel) {
      case "matching_studies":
        innerText = "of matching studies";
        break;
      case "matching_series":
        innerText = "of matching series";
        break;
      case "study":
        innerText = " of the study";
        break;
      case "series":
        innerText = " of the series";
        break;
      case "update_access_control_id_to_selections":
        innerText = " of the selected entities";
        break;
    }
    this.confirm({
      content: "Update Access Control ID " + innerText + "",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Access Control ID"
      }, {
        tag: "input",
        type: "text",
        filterKey: "accessControlID",
        description: "Access Control ID",
        placeholder: "Access Control ID"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "UPDATE"
    }).subscribe(ok => {
      if (ok) {
        let service;
        let msg;
        if (matching) {
          service = this.service.updateAccessControlIdMatching(this.studyWebService, dicomLevel, ok.schema_model.accessControlID || "null", this.createStudyFilterParams(true, true));
          msg = dicomLevel === "matching_studies" ? "Access Control ID updated successfully to matching studies" : "Access Control ID updated successfully to matching series";
        } else {
          if (dicomLevel === "update_access_control_id_to_selections") {
            service = this.service.updateAccessControlIdOfSelections(this.selectedElements, this.studyWebService, ok.schema_model.accessControlID || "null");
            msg = "Access Control ID updated successfully to selected entities!";
          } else {
            service = this.service.updateAccessControlIdSingle(model.attrs, this.studyWebService, dicomLevel, ok.schema_model.accessControlID || "null");
            msg = dicomLevel === "study" ? "Access Control ID updated successfully to the study!" : "Access Control ID updated successfully to the series!";
          }
        }
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          if (matching) {
            msg = j4care.prepareCountMessage(msg, res);
          }
          this.appService.showMsg(msg);
          if (mode === "update_access_control_id_to_selections") {
            this.clearClipboard();
          }
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendStorageCommitmentRequestSingle(dicomLevel, model) {
    let dialogText;
    switch (dicomLevel) {
      case "series":
        dialogText = "Request Storage Commitment of Series from external Storage Commitment SCP";
        break;
      case "instance":
        dialogText = "Request Storage Commitment of Instance from external Storage Commitment SCP";
        break;
      default:
        dialogText = "Request Storage Commitment of Study from external Storage Commitment SCP";
        break;
    }
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Storage Commitment SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "stgCmtSCP",
        description: "Storage Commitment SCP AE Title",
        placeholder: "Storage Commitment SCP AE Title"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.stgCmtSCP")) {
        let service;
        let msg;
        if (dicomLevel) {
          switch (dicomLevel) {
            case "series":
              msg = "Storage Commitment of Series from external Storage Commitment SCP was requested successfully";
              break;
            case "instance":
              msg = "Storage Commitment of Instance from external Storage Commitment SCP was requested successfully";
              break;
            default:
              msg = "Storage Commitment of Study from external Storage Commitment SCP was requested successfully";
              break;
          }
          service = this.service.sendStorageCommitmentRequestForSingle(model.attrs, this.studyWebService, dicomLevel, ok.schema_model.stgCmtSCP);
        } else {
          msg = "Storage Commitment of selected objects from external Storage Commitment SCP was requested successfully";
          service = this.service.sendStorageCommitmentRequestForSelected(this.selectedElements, this.studyWebService, ok.schema_model.stgCmtSCP);
        }
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          this.appService.showMsg(msg);
          if (!dicomLevel) {
            this.clearClipboard();
          }
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendStorageCommitmentRequestMatchingStudies() {
    let dialogText = "Schedule Storage Commitment of matching Studies from external Storage Commitment SCP";
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Storage Commitment SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "stgCmtSCP",
        description: "Storage Commitment SCP AE Title",
        placeholder: "Storage Commitment SCP AE Title"
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
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.stgCmtSCP")) {
        let stgCmtSCP = ok.schema_model.stgCmtSCP;
        delete ok.schema_model["stgCmtSCP"];
        let service = this.service.sendStorageCommitmentRequestForMatchingStudies(this.studyWebService, stgCmtSCP, merge_default(ok.schema_model, this.createStudyFilterParams(true, true)));
        let msg = "Storage Commitment of matching Studies from external Storage Commitment SCP was scheduled successfully";
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          msg = j4care.prepareCountMessage(msg, res);
          this.appService.showMsg(msg);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendStorageCommitmentRequestMatchingSeries() {
    let dialogText = "Schedule Storage Commitment of matching Series from external Storage Commitment SCP";
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Storage Commitment SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "stgCmtSCP",
        description: "Storage Commitment SCP AE Title",
        placeholder: "Storage Commitment SCP AE Title"
      }], [{
        tag: "label",
        text: "Schedule at"
      }, {
        tag: "single-date-time-picker",
        type: "text",
        filterKey: "scheduledTime",
        description: "Schedule at (if not set, schedule immediately)"
      }], [{
        tag: "label",
        text: "Batch ID"
      }, {
        tag: "input",
        type: "text",
        filterKey: "batchID",
        description: "Batch ID",
        placeholder: "Batch ID"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.stgCmtSCP")) {
        let stgCmtSCP = ok.schema_model.stgCmtSCP;
        delete ok.schema_model["stgCmtSCP"];
        let service = this.service.sendStorageCommitmentRequestForMatchingSeries(this.studyWebService, stgCmtSCP, merge_default(ok.schema_model, this.createStudyFilterParams(true, true)));
        let msg = "Storage Commitment of matching Series from external Storage Commitment SCP was scheduled successfully";
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          msg = j4care.prepareCountMessage(msg, res);
          this.appService.showMsg(msg);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendInstanceAvailabilityNotificationSingle(dicomLevel, model) {
    let dialogText;
    switch (dicomLevel) {
      case "series":
        dialogText = "Request Instance Availability of Series to external Instance Availability SCP";
        break;
      case "instance":
        dialogText = "Request Instance Availability of Instance to external Instance Availability SCP";
        break;
      default:
        dialogText = "Request Instance Availability of Study to external Instance Availability SCP";
        break;
    }
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "IAN SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "ianscp",
        description: "IAN SCP AE Title",
        placeholder: "Instance Availability Notification SCP AE Title"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.ianscp")) {
        let service;
        let msg;
        if (dicomLevel) {
          switch (dicomLevel) {
            case "series":
              msg = "Instance Availability of Series to external Instance Availability SCP was requested successfully";
              break;
            case "instance":
              msg = "Instance Availability of Instance to external Instance Availability SCP was requested successfully";
              break;
            default:
              msg = "Instance Availability of Study to external Instance Availability SCP was requested successfully";
              break;
          }
          service = this.service.sendInstanceAvailabilityNotificationForSingle(model.attrs, this.studyWebService, dicomLevel, ok.schema_model.ianscp);
        } else {
          msg = "Instance Availability of selected objects to external Instance Availability SCP was requested successfully";
          service = this.service.sendInstanceAvailabilityNotificationForSelected(this.selectedElements, this.studyWebService, ok.schema_model.ianscp);
        }
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          this.appService.showMsg(msg);
          if (!dicomLevel) {
            this.clearClipboard();
          }
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendInstanceAvailabilityNotificationMatchingStudies() {
    let dialogText = "Schedule Instance Availability of matching Studies to external Instance Availability SCP";
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "IAN SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "ianscp",
        description: "IAN SCP AE Title",
        placeholder: "Instance Availability Notification SCP AE Title"
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
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.ianscp")) {
        let ianscp = ok.schema_model.ianscp;
        delete ok.schema_model["ianscp"];
        let service = this.service.sendInstanceAvailabilityNotificationForMatchingStudies(this.studyWebService, ianscp, merge_default(ok.schema_model, this.createStudyFilterParams(true, true)));
        let msg = "Instance Availability of matching Studies to external Instance Availability SCP was scheduled successfully";
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          msg = j4care.prepareCountMessage(msg, res);
          this.appService.showMsg(msg);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  sendInstanceAvailabilityNotificationMatchingSeries() {
    let dialogText = "Schedule Instance Availability of matching Series to external Instance Availability SCP";
    console.log("archiveDevice", this.appService.archiveDeviceName);
    this.confirm({
      content: dialogText,
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "IAN SCP AE Title"
      }, {
        tag: "select",
        type: "text",
        options: this.applicationEntities.aes.filter(aes => aes.wholeObject.dicomDeviceName != this.appService.archiveDeviceName),
        filterKey: "ianscp",
        description: "IAN SCP AE Title",
        placeholder: "Instance Availability Notification SCP AE Title"
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
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "SEND"
    }).subscribe(ok => {
      if (ok && hasIn_default(ok, "schema_model.ianscp")) {
        let ianscp = ok.schema_model.ianscp;
        delete ok.schema_model["ianscp"];
        let service = this.service.sendInstanceAvailabilityNotificationForMatchingSeries(this.studyWebService, ianscp, merge_default(ok.schema_model, this.createStudyFilterParams(true, true)));
        let msg = "Instance Availability of matching Series to external Instance Availability SCP was scheduled successfully";
        this.cfpLoadingBar.start();
        service.subscribe(res => {
          this.cfpLoadingBar.complete();
          msg = j4care.prepareCountMessage(msg, res);
          this.appService.showMsg(msg);
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    });
  }
  editSeries(series) {
    let config = {
      saveLabel: "SAVE",
      titleLabel: "Edit series of study "
    };
    config.titleLabel += hasIn_default(series, "attrs.0020000D.Value.0") ? " with IUID: <b>" + series.attrs["0020000D"].Value[0] + "</b>" : "";
    config.titleLabel += hasIn_default(series, "attrs.00100010.Value.0.Alphabetic") ? " of patient <b>" + series.attrs["00100010"].Value[0]["Alphabetic"] + "</b>" : " ";
    config.titleLabel += hasIn_default(series, "attrs.00100020.Value.0") ? " with ID: <b>" + series.attrs["00100020"].Value[0] + "</b>" : "";
    this.modifySeries(series, "edit", config);
  }
  modifySeries(series, mode, config) {
    let $this = this;
    let originalSeriesObject = cloneDeep_default(series);
    if (mode === "edit") {
      forEach_default(series.attrs, function (value, index) {
        let checkValue = "";
        if (value.Value && value.Value.length) {
          checkValue = value.Value.join("");
        }
        if (!(value.Value && checkValue != "")) {
          delete series.attrs[index];
        }
      });
    }
    this.lastPressedCode = 0;
    this.service.getSeriesIod().subscribe(res => {
      let iod = $this.service.replaceKeyInJson(res, "items", "Value");
      let seriesFiltered = cloneDeep_default(series);
      seriesFiltered.attrs = new ComparewithiodPipe().transform(series.attrs, iod);
      $this.service.initEmptyValue(seriesFiltered.attrs);
      $this.dialogRef = $this.dialog.open(EditSeriesComponent, {
        height: "auto",
        width: "90%"
      });
      $this.dialogRef.componentInstance.seriesResult.series = seriesFiltered;
      $this.dialogRef.componentInstance.dropdown = $this.service.getArrayFromIod(res);
      $this.dialogRef.componentInstance.iod = iod;
      $this.dialogRef.componentInstance.saveLabel = config.saveLabel;
      $this.dialogRef.componentInstance.titleLabel = config.titleLabel;
      $this.dialogRef.componentInstance.mode = mode;
      $this.dialogRef.afterClosed().subscribe(ok => {
        if (ok) {
          $this.service.clearPatientObject(seriesFiltered.attrs);
          $this.service.convertStringToNumber(seriesFiltered.attrs);
          let local = {};
          $this.service.appendPatientIdTo(series.attrs, local);
          forEach_default(seriesFiltered.attrs, function (m, i) {
            if (res[i]) {
              local[i] = m;
            }
          });
          let params = ok.sourceOfPrevVals != "" ? ok.reasonForModificationResult != void 0 ? "?sourceOfPreviousValues=" + ok.sourceOfPrevVals + "&reasonForModification=" + ok.reasonForModificationResult : "?sourceOfPreviousValues=" + ok.sourceOfPrevVals : ok.reasonForModificationResult != void 0 ? "?reasonForModification=" + ok.reasonForModificationResult : "";
          this.service.modifySeries(local, this.studyWebService, new HttpHeaders({
            "Content-Type": "application/dicom+json"
          }), params, this.service.getStudyInstanceUID(series.attrs), this.service.getSeriesInstanceUID(series.attrs)).subscribe(() => {
            $this.appService.showMsg("Series saved successfully!");
          }, err => {
            $this.httpErrorHandler.handleError(err);
            assign_default(series, originalSeriesObject);
          });
        } else {
          assign_default(series, originalSeriesObject);
        }
        $this.dialogRef = null;
      });
    });
  }
  editStudy(study) {
    let config = {
      saveLabel: "SAVE",
      titleLabel: "Edit study of patient "
    };
    config.titleLabel += hasIn_default(study, "attrs.00100010.Value.0.Alphabetic") ? "<b>" + study.attrs["00100010"].Value[0]["Alphabetic"] + "</b>" : " ";
    config.titleLabel += hasIn_default(study, "attrs.00100020.Value.0") ? " with ID: <b>" + study.attrs["00100020"].Value[0] + "</b>" : "";
    this.modifyStudy(study, "edit", config);
  }
  updateMatchingStudies() {
    let $this = this;
    this.service.getStudyIod().subscribe(res => {
      let iod = $this.service.replaceKeyInJson(res, "items", "Value");
      let study = {
        "attrs": {}
      };
      Object.keys(iod).forEach(dicomAttr => {
        if (iod[dicomAttr].required && iod[dicomAttr].required === 1) {
          study["attrs"][dicomAttr] = cloneDeep_default(iod[dicomAttr]);
        }
      });
      delete study.attrs["0020000D"];
      this.service.initEmptyValue(study.attrs);
      let studyFiltered = cloneDeep_default(study);
      this.dialogRef = this.dialog.open(EditStudyComponent, {
        height: "auto",
        width: "90%"
      });
      $this.dialogRef.componentInstance.studyResult.editMode = "matching";
      $this.dialogRef.componentInstance.studyResult.study = studyFiltered;
      this.dialogRef.componentInstance.dropdown = this.service.getArrayFromIod(iod);
      this.dialogRef.componentInstance.iod = this.service.replaceKeyInJson(iod, "items", "Value");
      this.dialogRef.componentInstance.saveLabel = "UPDATE";
      this.dialogRef.componentInstance.titleLabel = "Update matching Studies";
      $this.dialogRef.afterClosed().subscribe(ok => {
        if (ok) {
          j4care.removeKeyFromObject(studyFiltered.attrs, ["required", "enum", "multi"]);
          if (hasIn_default(studyFiltered, "attrs.0020000D")) delete studyFiltered.attrs["0020000D"];
          let local = {};
          $this.service.appendPatientIdTo(study.attrs, local);
          forEach_default(studyFiltered.attrs, function (m, i) {
            if (res[i]) {
              local[i] = m;
            }
          });
          this.cfpLoadingBar.start();
          let msg = "Studies";
          this.service.updateMatchingStudies(local, this.studyWebService, new HttpHeaders({
            "Content-Type": "application/dicom+json"
          }), this.appService.param(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.createStudyFilterParams(true, true)), {
            updatePolicy: ok.updatePolicyResult
          }), {
            sourceOfPreviousValues: ok.sourceOfPrevVals
          }), {
            reasonForModification: ok.reasonForModificationResult
          }))).subscribe(res2 => {
            console.log("res", res2);
            this.cfpLoadingBar.complete();
            msg = j4care.prepareCountMessageUpdateMatching(msg, res2);
            this.appService.showMsg(msg);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        }
      });
    });
  }
  updateMatchingSeries() {
    let $this = this;
    this.service.getSeriesIod().subscribe(res => {
      let iod = $this.service.replaceKeyInJson(res, "items", "Value");
      let series = {
        "attrs": {}
      };
      Object.keys(iod).forEach(dicomAttr => {
        if (iod[dicomAttr].required && iod[dicomAttr].required === 1) {
          series["attrs"][dicomAttr] = cloneDeep_default(iod[dicomAttr]);
        }
      });
      delete series.attrs["0020000E"];
      delete series.attrs["00080060"];
      delete series.attrs["00080005"];
      this.service.initEmptyValue(series.attrs);
      let seriesFiltered = cloneDeep_default(series);
      this.dialogRef = this.dialog.open(EditSeriesComponent, {
        height: "auto",
        width: "90%"
      });
      $this.dialogRef.componentInstance.seriesResult.editMode = "matching";
      $this.dialogRef.componentInstance.seriesResult.series = seriesFiltered;
      this.dialogRef.componentInstance.dropdown = this.service.getArrayFromIod(iod);
      this.dialogRef.componentInstance.iod = this.service.replaceKeyInJson(iod, "items", "Value");
      this.dialogRef.componentInstance.saveLabel = "UPDATE";
      this.dialogRef.componentInstance.titleLabel = "Update matching Series";
      $this.dialogRef.afterClosed().subscribe(ok => {
        if (ok) {
          j4care.removeKeyFromObject(seriesFiltered.attrs, ["required", "enum", "multi"]);
          if (hasIn_default(seriesFiltered, "attrs.0020000E")) delete seriesFiltered.attrs["0020000E"];
          let local = {};
          $this.service.appendPatientIdTo(series.attrs, local);
          forEach_default(seriesFiltered.attrs, function (m, i) {
            if (res[i]) {
              local[i] = m;
            }
          });
          this.cfpLoadingBar.start();
          let msg = "Series";
          this.service.updateMatchingSeries(local, this.studyWebService.selectedWebService, new HttpHeaders({
            "Content-Type": "application/dicom+json"
          }), this.appService.param(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.createStudyFilterParams(true, true)), {
            updatePolicy: ok.updatePolicyResult
          }), {
            sourceOfPreviousValues: ok.sourceOfPrevVals
          }), {
            reasonForModification: ok.reasonForModificationResult
          }))).subscribe(res2 => {
            console.log("res", res2);
            this.cfpLoadingBar.complete();
            msg = j4care.prepareCountMessageUpdateMatching(msg, res2);
            this.appService.showMsg(msg);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        }
      });
    });
  }
  createUPSMatchingStudies() {
    this.confirm({
      content: "Create UPS Workitems for matching studies",
      doNotSave: true,
      form_schema: [[{
        tag: "label",
        text: "UPS Label"
      }, {
        tag: "input",
        type: "text",
        filterKey: "upsLabel",
        placeholder: "UPS Label",
        description: "Value of Procedure Step Label (0074,1204) in created UPS."
      }], [{
        tag: "label",
        text: "UPS Scheduled Time"
      }, {
        tag: "single-date-time-picker",
        type: "text",
        filterKey: "upsScheduledTime",
        placeholder: "UPS Scheduled Time",
        description: "Scheduled Procedure Step Start DateTime (0040,4005) as in created UPS."
      }]],
      result: {
        schema_model: {}
      },
      saveButton: "CREATE"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        this.service.createUPSMatchingStudies(this.studyWebService.selectedWebService, merge_default(result.schema_model, this.createStudyFilterParams(true, true))).subscribe(res => {
          console.log("res", res);
          let count = "";
          try {
            count = res["count"];
          } catch (e) {
            j4care.log("Could not get count from res=", e);
          }
          this.appService.showMsg("UPS Workitems created successfully for " + count + " studies");
          this.cfpLoadingBar.complete();
        }, err => {
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    });
  }
  modifyStudy(study, mode, config) {
    let $this = this;
    let originalStudyObject = cloneDeep_default(study);
    if (mode === "edit") {
      forEach_default(study.attrs, function (value, index) {
        let checkValue = "";
        if (value.Value && value.Value.length) {
          checkValue = value.Value.join("");
        }
        if (!(value.Value && checkValue != "")) {
          delete study.attrs[index];
        }
      });
    }
    this.lastPressedCode = 0;
    this.service.getStudyIod().subscribe(res => {
      let iod = $this.service.replaceKeyInJson(res, "items", "Value");
      let studyFiltered = cloneDeep_default(study);
      studyFiltered.attrs = new ComparewithiodPipe().transform(study.attrs, iod);
      $this.service.initEmptyValue(studyFiltered.attrs);
      $this.dialogRef = $this.dialog.open(EditStudyComponent, {
        height: "auto",
        width: "90%"
      });
      $this.dialogRef.componentInstance.studyResult.study = studyFiltered;
      $this.dialogRef.componentInstance.dropdown = $this.service.getArrayFromIod(res);
      $this.dialogRef.componentInstance.iod = iod;
      $this.dialogRef.componentInstance.saveLabel = config.saveLabel;
      $this.dialogRef.componentInstance.titleLabel = config.titleLabel;
      $this.dialogRef.componentInstance.mode = mode;
      $this.dialogRef.afterClosed().subscribe(ok => {
        if (ok) {
          let params = ok.sourceOfPrevVals != "" ? ok.reasonForModificationResult != void 0 ? "?sourceOfPreviousValues=" + ok.sourceOfPrevVals + "&reasonForModification=" + ok.reasonForModificationResult : "?sourceOfPreviousValues=" + ok.sourceOfPrevVals : ok.reasonForModificationResult != void 0 ? "?reasonForModification=" + ok.reasonForModificationResult : "";
          $this.service.clearPatientObject(studyFiltered.attrs);
          $this.service.convertStringToNumber(studyFiltered.attrs);
          let local = {};
          $this.service.appendPatientIdTo(study.attrs, local);
          forEach_default(studyFiltered.attrs, function (m, i) {
            if (res[i]) {
              local[i] = m;
            }
          });
          this.service.modifyStudy(local, this.studyWebService, new HttpHeaders({
            "Content-Type": "application/dicom+json"
          }), params, this.service.getStudyInstanceUID(study.attrs)).subscribe(() => {
            $this.appService.showMsg("Study saved successfully!");
          }, err => {
            $this.httpErrorHandler.handleError(err);
            assign_default(study, originalStudyObject);
          });
        } else {
          assign_default(study, originalStudyObject);
        }
        $this.dialogRef = null;
      });
    });
  }
  setExpiredDate(study) {
    this.setExpiredDateQuery(study, false);
  }
  setExpiredDateSeries(series) {
    this.setExpiredDateQuerySeries(series);
  }
  markAsRequestedOrUnscheduled(e, level) {
    let markModeHover;
    let markModeTitle;
    if (level === "series") {
      markModeHover = "Select mark mode to mark series as Requested or Unscheduled";
      markModeTitle = "Mark series as Requested or Unscheduled";
    } else {
      markModeHover = "Select mark mode to mark all series of study as Requested or Unscheduled";
      markModeTitle = "Mark all series of study as Requested or Unscheduled";
    }
    this.service.getRequestSchema().subscribe(([requestedSchema, iod]) => {
      const mainSchema = [[{
        tag: "label",
        text: "Mark mode"
      }, {
        tag: "select",
        options: [new SelectDropdown("requested", "Requested"), new SelectDropdown("unscheduled", "Unscheduled")],
        filterKey: "markMode",
        description: markModeHover,
        placeholder: "Mark mode"
      }]];
      let schemaMode = "unscheduled";
      this.confirm({
        content: markModeTitle,
        doNotSave: true,
        form_schema: [mainSchema],
        onFilterChangeHook: (e2, model, schema) => {
          console.log("e", e2);
          console.log("model", model);
          console.log("schema", schema);
          if (model && model["markMode"]) {
            if (model["markMode"] === "requested" && schemaMode != "requested") {
              schema[0] = [...mainSchema, ...requestedSchema];
              schemaMode = "requested";
            }
            if (model["markMode"] === "unscheduled" && schemaMode != "unscheduled") {
              schema[0] = mainSchema;
              schemaMode = "unscheduled";
            }
          }
        },
        result: {
          schema_model: {}
        },
        saveButton: "SUBMIT"
      }, "700px").subscribe(ok => {
        if (ok && hasIn_default(ok, "schema_model.markMode")) {
          const studyInstanceUID = j4care.getStudyInstanceUID(e.attrs);
          let toSendObject = [];
          let requested = get_default(ok, "schema_model.markMode") === "requested";
          if (requested) {
            toSendObject = [this.service.convertFilterModelToDICOMObject(ok.schema_model, iod, ["markMode"])];
          }
          this.cfpLoadingBar.start();
          this.service.markAsRequestedOrUnscheduled(this.studyWebService.selectedWebService, studyInstanceUID, toSendObject, level, e).subscribe(res => {
            this.cfpLoadingBar.complete();
            let infoMsg = level === "series" ? requested ? "Series[uid=" + this.service.getSeriesInstanceUID(e.attrs) + "] marked as Requested successfully!" : "Series[uid=" + this.service.getSeriesInstanceUID(e.attrs) + "] marked as Unscheduled successfully!" : requested ? "All Series of Study[uid=" + studyInstanceUID + "] marked as Requested successfully!" : "All Series of Study[uid=" + studyInstanceUID + "] marked as Unscheduled successfully!";
            this.appService.showMsg(infoMsg);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        }
      });
    });
  }
  setExpiredDateQuerySeries(series) {
    this.confirm(this.service.getPrepareParameterForExpirationDialogSeries(series, this.exporters)).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        if (result.schema_model.expiredDate || result.schema_model.protectStudy) {
          this.service.setExpiredDateSeries(this.studyWebService, get_default(series, "attrs.0020000D.Value[0]"), get_default(series, "attrs.0020000E.Value[0]"), result.schema_model.expiredDate, result.schema_model.exporter).subscribe(res => {
            set_default(series, "attrs.77771033.Value[0]", result.schema_model.expiredDate);
            set_default(series, "attrs.77771033.vr", "DA");
            this.appService.showMsg("Expired date set successfully!");
            this.cfpLoadingBar.complete();
          }, err => {
            this.httpErrorHandler.handleError(err);
            this.cfpLoadingBar.complete();
          });
        } else {
          this.appService.showError("Expired date is required!");
        }
      }
    });
  }
  setExpiredDateQuery(study, infinit) {
    this.confirm(this.service.getPrepareParameterForExpiriationDialog(study, this.exporters, infinit)).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        const expiredDate = this.service.extractExpireDate(study);
        if (expiredDate && !result.schema_model.expiredDate) {
          result.schema_model.expiredDate = "never";
        }
        if (!expiredDate && hasIn_default(study, "attrs.7777102B.Value[0]") && get_default(study, "attrs.7777102B.Value[0]") === "FROZEN" && (result.schema_model.FreezeExpirationDate === void 0 || result.schema_model.FreezeExpirationDate === true)) {
          result.schema_model.FreezeExpirationDate = false;
        }
        if (result.schema_model.expiredDate || result.schema_model.protectStudy) {
          this.service.setExpiredDate(this.studyWebService, get_default(study, "attrs.0020000D.Value[0]"), result.schema_model.protectStudy ? "never" : result.schema_model.expiredDate, result.schema_model.exporter, result.schema_model.FreezeExpirationDate).subscribe(res => {
            set_default(study, "attrs.77771023.Value[0]", result.schema_model.expiredDate);
            set_default(study, "attrs.77771023.vr", "DA");
            this.appService.showMsg("Expired date set successfully!");
            this.cfpLoadingBar.complete();
          }, err => {
            this.httpErrorHandler.handleError(err);
            this.cfpLoadingBar.complete();
          });
        } else {
          this.appService.showError("Expired date is required!");
        }
      }
    });
  }
  deleteRejectedInstances() {
    let result = {
      reject: void 0
    };
    this.dialogRef = this.dialog.open(DeleteRejectedInstancesComponent, {
      height: "auto",
      width: "500px"
    });
    this.dialogRef.componentInstance.rjnotes = this.trash.rjnotes;
    this.dialogRef.componentInstance.results = result;
    this.dialogRef.afterClosed().subscribe(re => {
      console.log("afterclose re", re);
      this.cfpLoadingBar.start();
      if (re) {
        let params = {};
        if (re.rejectedBefore) {
          params["rejectedBefore"] = re.rejectedBefore;
        }
        if (re.keepRejectionNote === true) {
          params["keepRejectionNote"] = re.keepRejectionNote;
        }
        console.log("params1", this.appService.param(params));
        console.log("params", params);
        this.service.deleteRejectedInstances(re.reject, params).subscribe(res => {
          console.log("in res", res);
          this.cfpLoadingBar.complete();
          if (hasIn_default(res, "deleted")) {
            this.appService.showMsg("" + res.deleted + " instances deleted successfully!");
          } else {
            this.appService.showMsg("Process executed successfully");
          }
        }, err => {
          console.log("error", err);
          this.httpErrorHandler.handleError(err);
        });
      }
      this.cfpLoadingBar.complete();
      this.dialogRef = null;
    });
  }
  deleteSelectedObjects() {
    let deleteServices = () => {
      if (this.selectedElements.size > 0) {
        this.cfpLoadingBar.start();
        this.service.deleteMultipleObjects(this.selectedElements, this.studyWebService.selectedWebService).subscribe(res => {
          this.appService.showMsg("Deleting multiple objects triggered successfully!");
          this.cfpLoadingBar.complete();
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    };
    let parameters = {
      content: "Delete selected Object ( Only deleting Studies and Patient objects are currently supported ) "
    };
    this.confirm(parameters).subscribe(result => {
      if (result) {
        deleteServices();
      }
    });
  }
  deleteStudy(study) {
    console.log("study", study);
    this.confirm({
      content: "Are you sure you want to delete this study?",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Retain objects on filesystem"
      }, {
        tag: "checkbox",
        filterKey: "retainObj"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "DELETE"
    }).subscribe(result => {
      this.cfpLoadingBar.start();
      if (result) {
        this.service.deleteStudy(get_default(study, "attrs['0020000D'].Value[0]"), this.studyWebService.selectedWebService, result.schema_model).subscribe(response => {
          this.appService.showMsg("Study deleted successfully!");
          this.cfpLoadingBar.complete();
        }, response => {
          this.httpErrorHandler.handleError(response);
          this.cfpLoadingBar.complete();
        });
      }
      this.cfpLoadingBar.complete();
    });
  }
  rejectMatchingStudies() {
    let rjNoteCodes = [];
    forEach_default(this.trash.rjnotes, (m, i) => {
      rjNoteCodes.push({
        title: m.codeMeaning,
        value: m.codeValue + "^" + m.codingSchemeDesignator,
        label: m.label
      });
    });
    this.confirm({
      content: "Select Rejection Note type",
      doNotSave: true,
      form_schema: [[[{
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
      }]]],
      result: {
        schema_model: {
          rjNoteCode: "113039^DCM"
        }
      },
      saveButton: "REJECT"
    }).subscribe(result => {
      if (result) {
        console.log("result", result.rjNoteCode);
        this.cfpLoadingBar.start();
        let rjNoteCode = result.schema_model.rjNoteCode;
        delete result.schema_model["rjNoteCode"];
        this.service.rejectMatchingStudies(this.studyWebService.selectedWebService, rjNoteCode, merge_default(result.schema_model, this.createStudyFilterParams(true, true))).subscribe(res => {
          console.log("res", res);
          let count = "";
          try {
            count = res["count"];
          } catch (e) {
            j4care.log("Could not get count from res=", e);
          }
          this.appService.showMsg(`Objects rejected successfully:<br>Count: ${count}`);
          this.cfpLoadingBar.complete();
        }, err => {
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    });
  }
  rejectMatchingSeries() {
    let rjNoteCodes = [];
    forEach_default(this.trash.rjnotes, (m, i) => {
      rjNoteCodes.push({
        title: m.codeMeaning,
        value: m.codeValue + "^" + m.codingSchemeDesignator,
        label: m.label
      });
    });
    this.confirm({
      content: "Select Rejection Note type",
      doNotSave: true,
      form_schema: this.service.rejectMatchingSeriesDialogSchema(rjNoteCodes),
      result: {
        schema_model: {
          rjNoteCode: "113039^DCM"
        }
      },
      saveButton: "REJECT"
    }).subscribe(result => {
      if (result) {
        console.log("result", result.rjNoteCode);
        this.cfpLoadingBar.start();
        let rjNoteCode = result.schema_model.rjNoteCode;
        delete result.schema_model["rjNoteCode"];
        this.service.rejectMatchingSeries(this.studyWebService.selectedWebService, rjNoteCode, merge_default(result.schema_model, this.createStudyFilterParams(true, true))).subscribe(res => {
          console.log("res", res);
          let count = "";
          try {
            count = res.count;
          } catch (e) {
            j4care.log("Could not get count from res=", e);
          }
          this.appService.showMsg(`Objects rejected successfully:<br>Count: ${count}`);
          this.cfpLoadingBar.complete();
        }, err => {
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    });
  }
  exportMatching(title, mode) {
    this.confirm({
      //content: $localize `:@@study.export_all_matching_series:Export all matching series`,
      content: title,
      doNotSave: true,
      form_schema: this.service.exportMatchingDialogSchema(this.exporters),
      result: {
        schema_model: {}
      },
      saveButton: "EXPORT"
    }).subscribe(result => {
      if (result) {
        this.cfpLoadingBar.start();
        this.service.exportMatching(mode, this.studyWebService, merge_default(result.schema_model, this.createStudyFilterParams(true, true))).subscribe(res => {
          console.log("res", res);
          this.cfpLoadingBar.complete();
          try {
            let count = res["count"] || "";
            this.appService.showMsg(`Objects export successfully:<br>Count: ${count}`);
          } catch (e) {
            j4care.log("Could not get count from res=", e);
          }
        }, err => {
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    });
  }
  rejectRestoreMultipleObjects() {
    let msg = "";
    let select = [];
    let rejectionRestoreService = rejectionCode => {
      if (this.selectedElements.size > 0) {
        this.cfpLoadingBar.start();
        this.service.rejectRestoreMultipleObjects(this.selectedElements, this.studyWebService.selectedWebService, rejectionCode).subscribe(res => {
          this.appService.showMsg(msg);
          this.cfpLoadingBar.complete();
        }, err => {
          this.cfpLoadingBar.complete();
          this.httpErrorHandler.handleError(err);
        });
      }
    };
    if (this.trash.active) {
      msg = "Objects restored successfully!";
      rejectionRestoreService(this.trash.rjcode.codeValue + "^" + this.trash.rjcode.codingSchemeDesignator);
    } else {
      msg = "Objects rejected successfully!";
      forEach_default(this.trash.rjnotes, (m, i) => {
        select.push({
          title: m.codeMeaning,
          value: m.codeValue + "^" + m.codingSchemeDesignator,
          label: m.label
        });
      });
      let parameters = {
        content: "Select Rejection Note type",
        select,
        result: {
          select: this.trash.rjnotes[0].codeValue + "^" + this.trash.rjnotes[0].codingSchemeDesignator
        },
        saveButton: "REJECT"
      };
      this.confirm(parameters).subscribe(result => {
        if (result) {
          rejectionRestoreService(parameters.result.select);
        }
      });
    }
  }
  rejectStudy(study) {
    let $this = this;
    if (this.trash.active) {
      this.service.restoreStudy(study.attrs, this.studyWebService).subscribe(res => {
        $this.appService.showMsg("Study restored successfully!");
      }, response => {
        $this.httpErrorHandler.handleError(response);
        console.log("response", response);
      });
    } else {
      let rjNoteCodes = [];
      forEach_default(this.trash.rjnotes, (m, i) => {
        rjNoteCodes.push({
          title: m.codeMeaning,
          value: m.codeValue + "^" + m.codingSchemeDesignator,
          label: m.label
        });
      });
      this.confirm({
        content: "Select Rejection Note type",
        doNotSave: true,
        form_schema: [[[{
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
          text: "Queue Rejection"
        }, {
          tag: "checkbox",
          filterKey: "queue",
          description: "Queue Rejection",
          placeholder: "Queue Rejection"
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
        }]]],
        result: {
          schema_model: {
            rjNoteCode: "113039^DCM"
          }
        },
        saveButton: "REJECT"
      }).subscribe(result => {
        if (result) {
          $this.cfpLoadingBar.start();
          let rjNoteCode = result.schema_model.rjNoteCode;
          delete result.schema_model["rjNoteCode"];
          this.service.rejectStudy(study.attrs, this.studyWebService, rjNoteCode, result.schema_model).subscribe(response => {
            let msg = result.schema_model.queue === "true" ? "Study queued for rejection successfully" : "Study rejected successfully";
            $this.appService.showMsg(j4care.prepareCountMessage(msg, response));
            $this.cfpLoadingBar.complete();
          }, err => {
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        } else {
          console.log("else", result);
          console.log("parameters", result.schema_model);
        }
      });
    }
  }
  rejectSeries(series) {
    let $this = this;
    if (this.trash.active) {
      this.service.restoreSeries(series.attrs, this.studyWebService).subscribe(res => {
        $this.appService.showMsg("Series restored successfully!");
      }, response => {
        $this.httpErrorHandler.handleError(response);
        console.log("response", response);
      });
    } else {
      let rjNoteCodes = [];
      forEach_default(this.trash.rjnotes, (m, i) => {
        rjNoteCodes.push({
          title: m.codeMeaning,
          value: m.codeValue + "^" + m.codingSchemeDesignator,
          label: m.label
        });
      });
      this.confirm({
        content: "Select Rejection Note type",
        doNotSave: true,
        form_schema: [[[{
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
          text: "Queue Rejection"
        }, {
          tag: "checkbox",
          filterKey: "queue",
          description: "Queue Rejection",
          placeholder: "Queue Rejection"
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
        }]]],
        result: {
          schema_model: {
            rjNoteCode: "113039^DCM"
          }
        },
        saveButton: "REJECT"
      }).subscribe(result => {
        if (result) {
          $this.cfpLoadingBar.start();
          let rjNoteCode = result.schema_model.rjNoteCode;
          delete result.schema_model["rjNoteCode"];
          this.service.rejectSeries(series.attrs, this.studyWebService, rjNoteCode, result.schema_model).subscribe(response => {
            let msg = result.schema_model.queue === "true" ? "Series queued for rejection successfully" : "Series rejected successfully";
            $this.appService.showMsg(j4care.prepareCountMessage(msg, response));
            $this.cfpLoadingBar.complete();
          }, err => {
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        } else {
          console.log("else", result);
          console.log("parameters", result.schema_model);
        }
      });
    }
  }
  rejectInstance(instance) {
    let $this = this;
    if (this.trash.active) {
      this.service.restoreInstance(instance.attrs, this.studyWebService, this.trash.rjcode.codeValue + "^" + this.trash.rjcode.codingSchemeDesignator).subscribe(res => {
        $this.appService.showMsg("Instance restored successfully!");
      }, response => {
        $this.httpErrorHandler.handleError(response);
        console.log("response", response);
      });
    } else {
      let rjNoteCodes = [];
      forEach_default(this.trash.rjnotes, (m, i) => {
        rjNoteCodes.push({
          title: m.codeMeaning,
          value: m.codeValue + "^" + m.codingSchemeDesignator,
          label: m.label
        });
      });
      this.confirm({
        content: "Select Rejection Note type",
        doNotSave: true,
        form_schema: [[[{
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
          text: "Queue Rejection"
        }, {
          tag: "checkbox",
          filterKey: "queue",
          description: "Queue Rejection",
          placeholder: "Queue Rejection"
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
        }]]],
        result: {
          schema_model: {
            rjNoteCode: "113039^DCM"
          }
        },
        saveButton: "REJECT"
      }).subscribe(result => {
        if (result) {
          $this.cfpLoadingBar.start();
          let rjNoteCode = result.schema_model.rjNoteCode;
          delete result.schema_model["rjNoteCode"];
          this.service.rejectInstance(instance.attrs, this.studyWebService, rjNoteCode, result.schema_model).subscribe(response => {
            let msg = result.schema_model.queue === "true" ? "Instance queued for rejection successfully" : "Instance rejected successfully";
            $this.appService.showMsg(j4care.prepareCountMessage(msg, response));
            $this.cfpLoadingBar.complete();
          }, err => {
            $this.httpErrorHandler.handleError(err);
            $this.cfpLoadingBar.complete();
          });
        } else {
          console.log("else", result);
          console.log("parameters", result.schema_model);
        }
      });
    }
  }
  setTrash() {
    if (hasIn_default(this.studyWebService, "selectedWebService.dicomAETitleObject") && this.studyWebService.selectedWebService.dicomAETitleObject.dcmHideNotRejectedInstances) {
      if (!this.trash.rjcode) {
        this.service.getRejectNotes({
          dcmRevokeRejection: true
        }).subscribe(res => {
          this.trash.rjcode = void 0;
          setTimeout(() => {
            this.trash.rjcode = res[0];
            this.setSchema();
          }, 1);
        });
      }
      this.trash.active = true;
    } else {
      this.trash.active = false;
    }
    this.setTableSchema();
  }
  setTableSchema() {
    this.tableParam.tableSchema = this.getSchema();
  }
  getSchema() {
    let dateTimeFormat = hasIn_default(this.appService.global, "dateTimeFormat") ? this.appService.global["dateTimeFormat"] : void 0;
    let personNameFormat = hasIn_default(this.appService.global, "personNameFormat") ? this.appService.global["personNameFormat"] : void 0;
    return this.service.checkSchemaPermission(this.service.PATIENT_STUDIES_TABLE_SCHEMA(this, this.actions, {
      trash: this.trash,
      selectedWebService: get_default(this.studyWebService, "selectedWebService"),
      studyWebService: this.studyWebService,
      tableParam: this.tableParam,
      studyConfig: this.studyConfig,
      appService: this.appService,
      getSOPClassUIDName: this.getSOPClassUIDName,
      internal: this.internal,
      configuredDateTimeFormats: dateTimeFormat,
      configuredPersonNameFormat: personNameFormat
    }));
  }
  retrieveMultipleStudies() {
    this.exporter("", "Retrieve matching studies depending on selected filters, from external C-MOVE SCP", "multiple-retrieve", {}, "");
  }
  retrieveObject(level, object, multipleObjects) {
    console.log("object", object);
    let modalText;
    switch (level) {
      case "study":
        modalText = "Retrieve Study";
        break;
      case "instance":
        modalText = "Retrieve Instance";
        break;
      case "series":
        modalText = "Retrieve Series";
        break;
      default:
        modalText = "Retrieve selected objects";
    }
    this.getDevices().subscribe(devices => {
      this.devices = devices;
      this.confirm({
        content: modalText,
        doNotSave: true,
        form_schema: [[[{
          tag: "label_large",
          text: modalText
        }], [{
          tag: "label",
          text: "Destination AET"
        }, {
          tag: "editable-select",
          options: this.applicationEntities.aes,
          filterKey: "destination",
          showSearchField: true,
          description: "Destination AET",
          placeholder: "Destination AET"
        }], [{
          tag: "label",
          text: "Priority"
        }, {
          tag: "select",
          options: [new SelectDropdown(0, "NORMAL"), new SelectDropdown(1, "HIGH"), new SelectDropdown(2, "LOW")],
          filterKey: "priority",
          type: "number",
          description: "Priority",
          placeholder: "Priority"
        }], [{
          tag: "label",
          text: "Queue Name"
        }, {
          tag: "select",
          options: this.retrieveQueues,
          filterKey: "dcmQueueName",
          description: "Queue Name",
          placeholder: "Queue Name"
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
          text: "Device Name"
        }, {
          tag: "select",
          options: devices.map(device => {
            return new SelectDropdown(device.dicomDeviceName, device.dicomDeviceName, device.dicomDeviceDescription);
          }),
          filterKey: "dicomDeviceName",
          description: "Device Name",
          placeholder: "Device Name"
        }], [{
          tag: "label",
          text: "Scheduled Time"
        }, {
          tag: "single-date-time-picker",
          type: "text",
          filterKey: "scheduledTime",
          description: "Scheduled Time"
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "RETRIEVE"
      }).subscribe(ok => {
        if (ok) {
          console.log("ok", ok);
          this.service.getWebAppFromWebServiceClassAndSelectedWebApp(this.studyWebService, "MOVE", "MOVE_MATCHING").subscribe(webApp => {
            if (webApp) {
              this.cfpLoadingBar.start();
              this.service.retrieve(webApp, ok.schema_model, object, level, multipleObjects).subscribe(res => {
                this.cfpLoadingBar.complete();
                this.appService.showMsg(this.service.getMsgFromResponse(res, "Command executed successfully!"));
              }, err => {
                this.cfpLoadingBar.complete();
                this.httpErrorHandler.handleError(err);
              });
            } else {
              this.appService.showError("Web Application Service with the web service class 'MOVE_MATCHING' not found!");
            }
          });
        }
      });
    });
  }
  exportStudy(study) {
    this.exporter(this.service.studyURL(study.attrs, this.studyWebService.selectedWebService), "Export study", "single", study.attrs, "study");
  }
  exportSeries(series) {
    this.exporter(this.service.seriesURL(series.attrs, this.studyWebService.selectedWebService), "Export series", "single", series.attrs, "series");
  }
  exportInstance(instance) {
    this.exporter(this.service.instanceURL(instance.attrs, this.studyWebService.selectedWebService), "Export instance", "single", instance.attrs, "instance");
  }
  exporter(url, title, mode, objectAttr, dicomMode, multipleObjects) {
    let $this = this;
    let id;
    let urlRest;
    let noDicomExporters = [];
    let dicomPrefixes = [];
    let singleUrlSuffix = "";
    forEach_default(this.exporters, (m, i) => {
      if (m.id.indexOf(":") > -1) {
        dicomPrefixes.push(m);
      } else {
        noDicomExporters.push(m);
      }
    });
    let config = {
      height: "auto",
      width: "500px"
    };
    if (mode === "multiple-retrieve") {
      config = {
        height: "auto",
        width: "600px"
      };
    }
    this.dialogRef = this.dialog.open(ExportDialogComponent, config);
    this.dialogRef.componentInstance.noDicomExporters = noDicomExporters;
    this.dialogRef.componentInstance.dicomPrefixes = dicomPrefixes;
    this.dialogRef.componentInstance.externalInternalAetMode = !this.internal || mode === "multiple-retrieve" ? "external" : "internal";
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.mode = mode == "multipleExportSelections" ? "single" : mode;
    this.dialogRef.componentInstance.queues = this.queues;
    this.dialogRef.componentInstance.newStudyPage = true;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let batchID = "";
        let params = {};
        if (result.batchID) batchID = `batchID=${result.batchID}&`;
        let params1 = result.batchID ? result.scheduledTime ? `batchID=${result.batchID}&scheduledTime=${result.scheduledTime}` : `batchID=${result.batchID}&` : result.scheduledTime ? `scheduledTime=${result.scheduledTime}&` : "";
        $this.cfpLoadingBar.start();
        if (mode === "multiple-retrieve") {
          this.service.getWebAppFromWebServiceClassAndSelectedWebApp(this.studyWebService, "MOVE", "MOVE_MATCHING").subscribe(webApp => {
            if (webApp) {
              urlRest = `${j4care.getUrlFromDcmWebApplication(webApp, this.appService.baseUrl)}/studies/export/dicom:${result.selectedAet}?${params1}${this.appService.param(__spreadValues(__spreadValues({}, this.createStudyFilterParams(true, true)), {
                batchID: result.batchID
              }))}`;
            } else {
              this.appService.showError("Web Application Service with the web service class 'MOVE_MATCHING' not found!");
            }
            fireService(result, multipleObjects, singleUrlSuffix, urlRest, url);
          });
        } else {
          if (mode === "multipleExportSelections") {
            this.service.getWebAppFromWebServiceClassAndSelectedWebApp(this.studyWebService, "DCM4CHEE_ARC_AET", "MOVE_MATCHING").subscribe(webApp => {
              if (webApp) {
                urlRest = `${this.service.getDicomURL("export", webApp)}/${result.selectedExporter}?${params1}${this.appService.param(this.createStudyFilterParams(true, true))}`;
              } else {
                this.appService.showError("Web Application Service with the web service class 'MOVE_MATCHING' not found!");
              }
              if (result.exportType === "dicom") {
                id = "dicom:" + result.selectedAet;
              } else if (result.exportType === "stow") {
                id = "stowrs:" + result.selectedStowWebapp;
              } else {
                id = result.selectedExporter;
              }
              singleUrlSuffix = "/export/" + id + "?" + params1;
              fireService(result, multipleObjects, singleUrlSuffix, urlRest, url);
            });
          } else {
            if (!this.internal) {
              this.service.getWebAppFromWebServiceClassAndSelectedWebApp(this.studyWebService, "DCM4CHEE_ARC_AET", "MOVE").subscribe(webApp => {
                if (webApp) {
                  if (result.dcmQueueName) {
                    params["dcmQueueName"] = result.dcmQueueName;
                  }
                  delete params["limit"];
                  delete params["offset"];
                  delete params["includefield"];
                  delete params["orderby"];
                  urlRest = `${this.service.getDicomURL("export", webApp)}/dicom:${result.selectedAet}${j4care.param(params)}`;
                } else {
                  this.appService.showError("Web Application Service with the web service class " + "MOVE,DCM4CHEE_ARC_AET" + " not found!");
                }
                fireService(result, multipleObjects, singleUrlSuffix, urlRest, url);
              });
            } else {
              if (result.exportType === "dicom") {
                id = "dicom:" + result.selectedAet;
              } else if (result.exportType === "stow") {
                id = "stowrs:" + result.selectedStowWebapp;
              } else {
                id = result.selectedExporter;
              }
              singleUrlSuffix = "/export/" + id + "?" + params1;
              fireService(result, multipleObjects, singleUrlSuffix, urlRest, url);
            }
          }
        }
      }
    });
    let fireService = (result, multipleObjects2, singleUrlSuffix2, urlRest2, url2) => {
      if (multipleObjects2 && multipleObjects2.size > 0) {
        this.service.export(void 0, multipleObjects2, singleUrlSuffix2, this.studyWebService.selectedWebService).subscribe(res => {
          console.log("res", res);
          $this.appService.showMsg($this.service.getMsgFromResponse(result, "Command executed successfully!"));
          $this.cfpLoadingBar.complete();
        }, err => {
          console.log("err", err);
          $this.cfpLoadingBar.complete();
        });
      } else {
        if (singleUrlSuffix2) {
          urlRest2 = url2 + singleUrlSuffix2;
        }
        this.service.export(urlRest2).subscribe(result2 => {
          $this.appService.showMsg($this.service.getMsgFromResponse(result2, "Command executed successfully!"));
          $this.cfpLoadingBar.complete();
        }, err => {
          console.log("err", err);
          $this.appService.setMessage({
            "title": "Error " + err.status + "\n",
            "text": $this.service.getMsgFromResponse(err),
            "status": "error"
          });
          $this.cfpLoadingBar.complete();
        });
      }
    };
  }
  storageVerificationSeries() {
    this.service.getStorageSystems().subscribe(storages => {
      this.confirm({
        content: "Schedule Storage Verification of matching Series",
        doNotSave: true,
        form_schema: [[[{
          tag: "label",
          text: "Verification Policy"
        }, {
          tag: "select",
          options: [{
            value: "DB_RECORD_EXISTS",
            text: "DB_RECORD_EXISTS",
            title: "Check for existence of DB records"
          }, {
            value: "OBJECT_EXISTS",
            text: "OBJECT_EXISTS",
            title: "Check if object exists on Storage System"
          }, {
            value: "OBJECT_SIZE",
            text: "OBJECT_SIZE",
            title: "Check size of object on Storage System"
          }, {
            value: "OBJECT_FETCH",
            text: "OBJECT_FETCH",
            title: "Fetch object from Storage System"
          }, {
            value: "OBJECT_CHECKSUM",
            text: "OBJECT_CHECKSUM",
            title: "recalculate checksum of object on Storage System"
          }, {
            value: "S3_MD5SUM",
            text: "S3_MD5SUM",
            title: "Check MD5 checksum of object on S3 Storage System"
          }],
          showStar: true,
          filterKey: "storageVerificationPolicy",
          description: "Verification Policy",
          placeholder: "Verification Policy"
        }], [{
          tag: "label",
          text: "Update Location DB"
        }, {
          tag: "checkbox",
          filterKey: "storageVerificationUpdateLocationStatus"
        }], [{
          tag: "label",
          text: "Storage ID"
        }, {
          tag: "select",
          options: storages.map(storage => new SelectDropdown(storage.dcmStorageID, storage.dcmStorageID)),
          showStar: true,
          filterKey: "storageVerificationStorageID",
          description: "Storage IDs",
          placeholder: "Storage IDs"
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
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "SAVE"
      }).subscribe(ok => {
        if (ok) {
          let msg;
          this.cfpLoadingBar.start();
          msg = "Storage Verification scheduled successfully!";
          this.service.schedulestorageVerificationSeries(merge_default(ok.schema_model, this.createStudyFilterParams(true, true)), this.studyWebService).subscribe(res => {
            console.log("res", res);
            this.cfpLoadingBar.complete();
            msg = j4care.prepareCountMessage(msg, res);
            this.appService.showMsg(msg);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        }
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  storageVerificationStudies() {
    this.service.getStorageSystems().subscribe(storages => {
      this.confirm({
        content: "Schedule Storage Verification of matching Studies",
        doNotSave: true,
        cssClass: "has_date_picker",
        form_schema: [[[{
          tag: "label",
          text: "Verification Policy"
        }, {
          tag: "select",
          options: [{
            value: "DB_RECORD_EXISTS",
            text: "DB_RECORD_EXISTS",
            title: "Check for existence of DB records"
          }, {
            value: "OBJECT_EXISTS",
            text: "OBJECT_EXISTS",
            title: "Check if object exists on Storage System"
          }, {
            value: "OBJECT_SIZE",
            text: "OBJECT_SIZE",
            title: "Check size of object on Storage System"
          }, {
            value: "OBJECT_FETCH",
            text: "OBJECT_FETCH",
            title: "Fetch object from Storage System"
          }, {
            value: "OBJECT_CHECKSUM",
            text: "OBJECT_CHECKSUM",
            title: "recalculate checksum of object on Storage System"
          }, {
            value: "S3_MD5SUM",
            text: "S3_MD5SUM",
            title: "Check MD5 checksum of object on S3 Storage System"
          }],
          showStar: true,
          filterKey: "storageVerificationPolicy",
          description: "Verification Policy",
          placeholder: "Verification Policy"
        }], [{
          tag: "label",
          text: "Update Location DB"
        }, {
          tag: "checkbox",
          filterKey: "storageVerificationUpdateLocationStatus"
        }], [{
          tag: "label",
          text: "Storage ID"
        }, {
          tag: "select",
          options: storages.map(storage => new SelectDropdown(storage.dcmStorageID, storage.dcmStorageID)),
          showStar: true,
          filterKey: "storageVerificationStorageID",
          description: "Storage IDs",
          placeholder: "Storage IDs"
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
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "SAVE"
      }).subscribe(ok => {
        if (ok) {
          let msg;
          this.cfpLoadingBar.start();
          msg = "Storage Verification scheduled successfully!";
          this.service.schedulestorageVerificationStudies(merge_default(ok.schema_model, this.createStudyFilterParams(true, true)), this.studyWebService).subscribe(res => {
            console.log("res", res);
            this.cfpLoadingBar.complete();
            msg = j4care.prepareCountMessage(msg, res);
            this.appService.showMsg(msg);
          }, err => {
            this.cfpLoadingBar.complete();
            this.httpErrorHandler.handleError(err);
          });
        }
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  storageCommitmen(mode, object) {
    console.log("object", object);
    let dialogText = "Verify Storage of selected entities";
    if (mode) {
      switch (mode) {
        case "study":
          dialogText = "Verify Storage of Study";
          break;
        case "series":
          dialogText = "Verify Storage of Series";
          break;
        case "instance":
          dialogText = "Verify Storage of Instance";
          break;
      }
    }
    this.service.getStorageSystems().subscribe(storages => {
      this.confirm({
        content: dialogText,
        doNotSave: true,
        form_schema: [[[{
          tag: "label",
          text: "Verification Policy"
        }, {
          tag: "select",
          options: [{
            value: "DB_RECORD_EXISTS",
            text: "DB_RECORD_EXISTS",
            title: "Check for existence of DB records"
          }, {
            value: "OBJECT_EXISTS",
            text: "OBJECT_EXISTS",
            title: "Check if object exists on Storage System"
          }, {
            value: "OBJECT_SIZE",
            text: "OBJECT_SIZE",
            title: "Check size of object on Storage System"
          }, {
            value: "OBJECT_FETCH",
            text: "OBJECT_FETCH",
            title: "Fetch object from Storage System"
          }, {
            value: "OBJECT_CHECKSUM",
            text: "OBJECT_CHECKSUM",
            title: "recalculate checksum of object on Storage System"
          }, {
            value: "S3_MD5SUM",
            text: "S3_MD5SUM",
            title: "Check MD5 checksum of object on S3 Storage System"
          }],
          showStar: true,
          filterKey: "storageVerificationPolicy",
          description: "Verification Policy",
          placeholder: "Verification Policy"
        }], [{
          tag: "label",
          text: "Update Location DB"
        }, {
          tag: "checkbox",
          filterKey: "storageVerificationUpdateLocationStatus"
        }], [{
          tag: "label",
          text: "Storage ID"
        }, {
          tag: "select",
          options: storages.map(storage => new SelectDropdown(storage.dcmStorageID, storage.dcmStorageID)),
          showStar: true,
          filterKey: "storageVerificationStorageID",
          description: "Storage IDs",
          placeholder: "Storage IDs"
        }]]],
        result: {
          schema_model: {}
        },
        saveButton: "QUERY"
      }).subscribe(ok => {
        if (ok) {
          if (mode) {
            this.cfpLoadingBar.start();
            this.service.verifyStorage(object.attrs, this.studyWebService, mode, ok.schema_model).subscribe(response => {
              let failed = response[0]["00081198"] && response[0]["00081198"].Value ? response[0]["00081198"].Value.length : 0;
              let success = response[0]["00081199"] && response[0]["00081199"].Value ? response[0]["00081199"].Value.length : 0;
              let msgStatus = "Info";
              if (failed > 0 && success > 0) {
                msgStatus = "Warning";
                this.appService.setMessage({
                  "title": msgStatus,
                  "text": "" + failed + " of " + (success + failed) + " failed!",
                  "status": msgStatus.toLowerCase()
                });
                console.log(failed + " of " + (success + failed) + " failed!");
              }
              if (failed > 0 && success === 0) {
                msgStatus = "Error";
                this.appService.setMessage({
                  "title": msgStatus,
                  "text": "all (" + failed + ") failed!",
                  "status": msgStatus.toLowerCase()
                });
                console.log("all " + failed + "failed!");
              }
              if (failed === 0) {
                console.log(success + " verified successfully 0 failed!");
                this.appService.setMessage({
                  "title": msgStatus,
                  "text": "" + success + " verified successfully\n 0 failed!",
                  "status": msgStatus.toLowerCase()
                });
              }
              this.cfpLoadingBar.complete();
            }, response => {
              this.httpErrorHandler.handleError(response);
              this.cfpLoadingBar.complete();
            });
          } else {
            this.cfpLoadingBar.start();
            this.service.storageVerificationForSelected(this.selectedElements, this.studyWebService, ok.schema_model).subscribe(res => {
              console.log("res", res);
              this.cfpLoadingBar.complete();
              this.appService.showMsg("Storage Verification of selected objects executed successfully!");
            }, err => {
              this.cfpLoadingBar.complete();
              this.httpErrorHandler.handleError(err);
            });
          }
        }
      });
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  initRjNotes(retries) {
    this.service.getRejectNotes().subscribe(res => {
      this.trash.rjnotes = res.sort(function (a, b) {
        if (a.codeValue === "113039" && a.codingSchemeDesignator === "DCM") return -1;
        if (b.codeValue === "113039" && b.codingSchemeDesignator === "DCM") return 1;
        return 0;
      });
      this.trash.reject = this.trash.rjnotes[0].codeValue + "^" + this.trash.rjnotes[0].codingSchemeDesignator;
      this.setSchema();
    }, err => {
      if (retries) this.initRjNotes(retries - 1);
    });
  }
  // aets;
  initWebApps() {
    this.setSchema();
    let aetsTemp;
    let fhirWebApps;
    let aesTemp;
    let webAppsTemp;
    this.service.getAets().pipe(map(aets => {
      aetsTemp = aets;
    }), switchMap(() => {
      return this.service.getAes();
    }), switchMap(aes => {
      aesTemp = aes;
      let filter = {
        dcmWebServiceClass: "MOVE"
      };
      return this.service.getWebApps(filter);
    }), switchMap(webApps => {
      webAppsTemp = webApps;
      let filter = {
        dcmWebServiceClass: "FHIR"
      };
      return this.service.getWebApps(filter);
    }), switchMap(webApps => {
      fhirWebApps = webApps;
      let filter = {
        dcmWebServiceClass: this.currentWebAppClass
      };
      return this.service.getWebApps(filter);
    })).subscribe(webApps => {
      if ((!webApps || !isArray_default(webApps) || webApps.length < 1) && this.studyConfig.tab) {
        this.appService.showMsg(this.service.getNoServiceSpecificWebApps(this.studyConfig.tab));
      }
      this.studyWebService = new StudyWebService({
        webServices: webApps.map(webApp => {
          aetsTemp.forEach(aet => {
            if (webApp.dicomAETitle && webApp.dicomAETitle === aet.dicomAETitle) {
              webApp.dicomAETitleObject = aet;
            }
          });
          this.service.convertStringLDAPParamToObject(webApp, "dcmProperty", ["IID_STUDY_URL", "IID_PATIENT_URL", "IID_URL_TARGET", "IID_ENCODE"]);
          return webApp;
        }),
        selectedWebService: get_default(this.studyWebService, "selectedWebService"),
        allWebServices: uniq_default([...webApps, ...webAppsTemp], "dcmWebAppName")
      });
      this.onStudyWebServiceChange.emit(this.studyWebService);
      this.applicationEntities.aets = aetsTemp.map(ae => {
        return new SelectDropdown(ae.dicomAETitle, ae.dicomAETitle, ae.dicomDescription, void 0, void 0, ae);
      });
      this.applicationEntities.aes = aesTemp.map(ae => {
        return new SelectDropdown(ae.dicomAETitle, ae.dicomAETitle, ae.dicomDescription, void 0, void 0, ae);
      });
      this.fhirWebAppsSelectDropdowns = new StudyWebService({
        webServices: fhirWebApps,
        allWebServices: fhirWebApps
      });
      this.setTemplateToFilter();
      this.initExporters(2);
      this.initRjNotes(2);
      this.getQueueNames();
      this.getRetrieveQueueNames();
      this.triggerSubmitOnQueryParams();
    }, err => {
      console.error("Error on getting webApps", err);
      this.httpErrorHandler.handleError(err);
    });
  }
  initExporters(retries) {
    this.service.getExporters().subscribe(res => {
      this.exporters = res;
      this.setSchema();
    }, res => {
      if (retries) this.initExporters(retries - 1);
    });
  }
  updatePatientDemographics(patient) {
    console.log("global", this.appService.global);
    this.confirm({
      content: "Update Patient Demographics",
      doNotSave: true,
      form_schema: [[[{
        tag: "label",
        text: "Select PDQ Service"
      }, {
        tag: "select",
        options: this.appService.global["PDQs"].map(pdq => {
          return new SelectDropdown(pdq.id, pdq.description || pdq.id);
        }),
        filterKey: "PDQServiceID",
        description: "PDQ ServiceID",
        placeholder: "PDQ ServiceID"
      }], [{
        tag: "label",
        text: "Adjust Issuer of Patient Identifier"
      }, {
        tag: "checkbox",
        filterKey: "adjustIssuerOfPatientID",
        description: "Patient identifier issuer changed in archive if it differs with value in patient demographics supplier"
      }]]],
      result: {
        schema_model: {}
      },
      saveButton: "UPDATE"
    }).subscribe(ok => {
      if (ok) {
        this.cfpLoadingBar.start();
        this.service.updatePatientDemographics(this.studyWebService.selectedWebService, patient, ok.schema_model.PDQServiceID, ok.schema_model.adjustIssuerOfPatientID).subscribe(() => {
          this.appService.showMsg("Patient demographics updated successfully!");
          this.cfpLoadingBar.complete();
        }, err => {
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    });
  }
  queryNationalPatientRegister(patientId) {
    if (patientId.xroad) {
      delete patientId.xroad;
    } else {
      if (hasIn_default(this.appService, "global['PDQs']") && this.appService.global["PDQs"].length > 0) {
        console.log("global", this.appService.global);
        if (this.appService.global["PDQs"].length > 1) {
          this.confirm({
            content: "Query External Patient Demographics Service",
            doNotSave: true,
            form_schema: [[[{
              tag: "label",
              text: "Select PDQ Service"
            }, {
              tag: "select",
              options: this.appService.global["PDQs"].map(pdq => {
                return new SelectDropdown(pdq.id, pdq.description || pdq.id);
              }),
              filterKey: "PDQServiceID",
              description: "PDQ ServiceID",
              placeholder: "PDQ ServiceID"
            }]]],
            result: {
              schema_model: {}
            },
            saveButton: "QUERY"
          }).subscribe(ok => {
            if (ok && ok.schema_model.PDQServiceID) {
              this.queryPDQ(patientId, ok.schema_model.PDQServiceID);
            }
          });
        } else {
          this.queryPDQ(patientId, this.appService.global.PDQs[0].id);
        }
      } else {
        console.log("global", this.appService.global);
        this.cfpLoadingBar.start();
        this.service.queryNationalPatientRegister(this.service.getPatientId(patientId.attrs)).subscribe(xroadAttr => {
          patientId.xroad = xroadAttr;
          this.cfpLoadingBar.complete();
        }, err => {
          console.error("Error Quering National Pation Register", err);
          this.httpErrorHandler.handleError(err);
          this.cfpLoadingBar.complete();
        });
      }
    }
  }
  queryPDQ(patientId, PDQServiceID) {
    this.cfpLoadingBar.start();
    this.service.queryPatientDemographics(this.service.getPatientId(patientId.attrs), PDQServiceID).subscribe(xroadAttr => {
      patientId.xroad = xroadAttr;
      this.cfpLoadingBar.complete();
    }, err => {
      console.error("Error Quering National Patient Register", err);
      this.httpErrorHandler.handleError(err);
      this.cfpLoadingBar.complete();
    });
  }
  getQueueNames() {
    this.service.getQueueNames().subscribe(names => {
      this.queues = void 0;
      setTimeout(() => {
        this.queues = names.map(name => new SelectDropdown(name.name, name.description));
        this.setSchema();
      }, 1);
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  getRetrieveQueueNames() {
    this.service.getQueueNames().subscribe(names => {
      try {
        this.retrieveQueues = names.filter(name => name.name.toLowerCase().indexOf("retrieve") > -1).sort((a, b) => {
          try {
            return parseInt(a.name.replace(/Retrieve/g, "")) - parseInt(b.name.replace(/Retrieve/g, ""));
          } catch (e) {
            return 1;
          }
        }).map(name => new SelectDropdown(name.name, name.description));
      } catch (e) {}
      this.setSchema();
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  getStorages($this, callback) {
    this.service.getStorageSystems().subscribe(storageSystems => {
      this.storages = storageSystems.map(storageSystem => {
        return new SelectDropdown(storageSystem.dcmStorageID, storageSystem.dcmStorageID);
      });
      callback.call($this);
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  getInstitutions($this, entity, callback) {
    this.service.getInstitutions(entity).subscribe(institutions => {
      if (hasIn_default(institutions, "Institutions") && typeof institutions.Institutions === "object" && institutions.Institutions.length > 0 && institutions.Institutions.join("") != "") {
        this.institutions = institutions.Institutions.map(institution => {
          return new SelectDropdown(institution, institution);
        });
      }
      callback.call($this);
    }, err => {
      this.httpErrorHandler.handleError(err);
      this.institutions;
      callback.call($this);
    });
  }
  getDiffAttributeSet($this, callback) {
    this.service.getDiffAttributeSet().subscribe(attributeSets => {
      this.diffAttributeSets = attributeSets.map(attributeSet => {
        return new SelectDropdown(attributeSet.id, attributeSet.title, attributeSet.description, void 0, void 0, attributeSet);
      });
      callback.call($this);
    }, err => {
      this.httpErrorHandler.handleError(err);
    });
  }
  getSOPClassUIDName(classUID) {
    try {
      return DCM4CHE.SOPClass.nameOf(classUID);
    } catch (e) {
      return classUID;
    }
  }
  ngAfterContentChecked() {
    this.changeDetector.detectChanges();
  }
  /*    get selectedWebAppService(): DcmWebApp {
          return this.studyWebService.selectedWebService;
      }
  
      set selectedWebAppService(value: DcmWebApp) {
          this.studyWebService.selectedWebService = value;
          this.setTrash();
      }*/
  /*    testKeycloak(){
          this.service.testKeycloak();
      }*/
  ngOnDestroy() {
    if (this.selectedElements) {
      this.service.selectedElements = this.selectedElements;
    }
  }
}, _a7.ctorParameters = () => [{
  type: ActivatedRoute
}, {
  type: StudyService
}, {
  type: PermissionService
}, {
  type: AppService
}, {
  type: HttpErrorHandler
}, {
  type: LoadingBarService
}, {
  type: DeviceConfiguratorService
}, {
  type: ViewContainerRef
}, {
  type: MatDialog
}, {
  type: KeycloakService
}, {
  type: ChangeDetectorRef
}], _a7.propDecorators = {
  studyTagConfig: [{
    type: Input
  }],
  onAction: [{
    type: Output
  }],
  onFilterChange: [{
    type: Output
  }],
  onStudyWebServiceChange: [{
    type: Output
  }],
  onPasteEvent: [{
    type: Output
  }],
  stickyHeaderView: [{
    type: ViewChild,
    args: ["stickyHeader", {
      static: true
    }]
  }],
  onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }]
}, _a7);
StudyComponent = __decorate([Component({
  selector: "app-study",
  template: study_component_default,
  animations: [trigger("showHide", [state("show", style({
    padding: "*",
    height: "*",
    opacity: 1
  })), state("hide", style({
    padding: "0",
    opacity: 0,
    height: "0px",
    margin: "0"
  })), transition("show => hide", [animate("0.2s")]), transition("hide => show", [animate("0.3s")])])],
  imports: [FilterGeneratorComponent, DcmDropDownComponent, DynamicPipePipe, FormsModule, PermissionDirective, NgClass, ClickOutsideDirective, DicomStudiesTableComponent, SelectionsDicomViewComponent, StudyTabComponent, CommonModule],
  standalone: true,
  styles: [study_component_default2]
})], StudyComponent);
export { StudyComponent };
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/