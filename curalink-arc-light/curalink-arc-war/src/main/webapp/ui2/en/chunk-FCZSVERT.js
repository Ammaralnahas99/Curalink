import {
  ActivatedRoute,
  AppService,
  CommonModule,
  Component,
  J4careHttpService,
  __decorate
} from "./chunk-V54BIW7M.js";

// angular:jit:template:src\app\hospital-dashboard\hospital-dashboard.component.html
var hospital_dashboard_component_default = `<div class="dashboard-container">\r
    <div class="dashboard-header">\r
        <h1>{{ specificHospital ? specificHospital + ' Dashboard' : 'Hospital Dashboard' }}</h1>\r
        <p>{{ specificHospital ? 'Overview of ' + specificHospital + ' statistics' : 'Overview of all hospitals and\r
            their statistics' }}</p>\r
    </div>\r
    <div *ngIf="loading">Loading...</div>\r
    <div *ngIf="error" style="color:red">{{ error }}</div>\r
    <div *ngIf="!loading && !error && hospitals.length === 0">No hospitals found.</div>\r
\r
\r
    <div class="hospital-cards">\r
        <div class="hospital-card" *ngFor="let hospital of hospitals">\r
            <div class="card-header" [class.active]="hospital.active">\r
                <div class="hospital-icon">\r
                    <i class="material-icons">local_hospital</i>\r
                </div>\r
                <div class="hospital-name">\r
                    <h2>{{ hospital.name }}</h2>\r
                    <span class="status-badge" *ngIf="hospital.active">ACTIVE</span>\r
                </div>\r
            </div>\r
\r
            <div class="card-body">\r
                <div class="location" *ngIf="hospital.location">\r
                    <i class="material-icons">location_on</i>\r
                    <span>{{ hospital.location }}</span>\r
                </div>\r
\r
                <div class="last-study" *ngIf="hospital.lastStudyDate">\r
                    <i class="material-icons">calendar_today</i>\r
                    <span>Last study: {{ hospital.lastStudyDate }}</span>\r
                </div>\r
\r
                <div class="statistics">\r
                    <div class="stat-box">\r
                        <div class="stat-label">Patients</div>\r
                        <div class="stat-value">{{ hospital.patients }}</div>\r
                    </div>\r
                    <div class="stat-box">\r
                        <div class="stat-label">Studies</div>\r
                        <div class="stat-value">{{ hospital.studies }}</div>\r
                    </div>\r
                </div>\r
\r
                <div class="modalities-section" *ngIf="hospital.modalities && hospital.modalities.length > 0">\r
                    <div class="section-label">MODALITIES</div>\r
                    <div class="tags">\r
                        <span class="tag" *ngFor="let modality of hospital.modalities">{{ modality }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="departments-section" *ngIf="hospital.departments && hospital.departments.length > 0">\r
                    <div class="section-label">DEPARTMENTS</div>\r
                    <div class="tags">\r
                        <span class="tag department-tag" *ngFor="let dept of hospital.departments">{{ dept }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="card-footer">\r
                    <span class="footer-text">Click to view hospital details</span>\r
                    <button class="view-button" (click)="viewHospitalDetails(hospital)">\r
                        View Details <i class="material-icons">arrow_forward</i>\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;

// angular:jit:style:src\app\hospital-dashboard\hospital-dashboard.component.scss
var hospital_dashboard_component_default2 = "/* src/app/hospital-dashboard/hospital-dashboard.component.scss */\n.dashboard-container {\n  padding: 30px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.dashboard-header {\n  margin-bottom: 30px;\n}\n.dashboard-header h1 {\n  font-size: 32px;\n  color: #2c3e50;\n  margin: 0 0 10px 0;\n}\n.dashboard-header p {\n  color: #7f8c8d;\n  font-size: 16px;\n  margin: 0;\n}\n.hospital-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  gap: 25px;\n}\n.hospital-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.hospital-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #2c7a7b 0%,\n      #38a89d 100%);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  color: white;\n}\n.card-header.active {\n  position: relative;\n}\n.hospital-icon {\n  background: rgba(255, 255, 255, 0.2);\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hospital-icon i {\n  font-size: 32px;\n}\n.hospital-name {\n  flex: 1;\n}\n.hospital-name h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.status-badge {\n  background: #48bb78;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-left: 10px;\n}\n.card-body {\n  padding: 20px;\n}\n.location,\n.last-study {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #718096;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.location i,\n.last-study i {\n  font-size: 18px;\n}\n.statistics {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.stat-box {\n  background: #f7fafc;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n.stat-label {\n  color: #718096;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.stat-value {\n  color: #2d3748;\n  font-size: 32px;\n  font-weight: 700;\n}\n.modalities-section,\n.departments-section {\n  margin-bottom: 20px;\n}\n.section-label {\n  color: #a0aec0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag {\n  background: #e6fffa;\n  color: #234e52;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.department-tag {\n  background: #f0f4ff;\n  color: #3c366b;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 15px;\n  border-top: 1px solid #e2e8f0;\n}\n.footer-text {\n  color: #a0aec0;\n  font-size: 14px;\n}\n.view-button {\n  background: transparent;\n  border: none;\n  color: #2c7a7b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 12px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.view-button:hover {\n  background: #e6fffa;\n}\n.view-button i {\n  font-size: 18px;\n}\n.loading-message,\n.error-message {\n  text-align: center;\n  padding: 60px 20px;\n}\n.loading-message i,\n.error-message i {\n  font-size: 48px;\n  color: #718096;\n  margin-bottom: 16px;\n}\n.loading-message p,\n.error-message p {\n  font-size: 18px;\n  color: #4a5568;\n  margin: 0;\n}\n.loading-message i.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message i {\n  color: #e53e3e;\n}\n.error-message button {\n  margin-top: 20px;\n  padding: 10px 24px;\n  background: #2c7a7b;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.error-message button:hover {\n  background: #234e52;\n}\n";

// src/app/hospital-dashboard/hospital-dashboard.component.ts
var _a;
var HospitalDashboardComponent = (_a = class {
  constructor($http, mainservice, route) {
    this.$http = $http;
    this.mainservice = mainservice;
    this.route = route;
    this.hospitals = [];
    this.loading = true;
    this.error = "";
    this.specificHospital = null;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.specificHospital = params["hospitalName"] || null;
      this.loadHospitalStatistics();
    });
  }
  loadHospitalStatistics() {
    this.loading = true;
    this.error = "";
    let url;
    if (this.specificHospital) {
      url = `../aets/${this.mainservice.archiveDeviceName || "DCM4CHEE"}/rs/hospitals/${encodeURIComponent(this.specificHospital)}/statistics`;
      this.$http.get(url).subscribe({
        next: (data) => {
          this.hospitals = [{
            name: data.name,
            patients: data.patients || 0,
            studies: data.studies || 0,
            active: data.active !== false,
            modalities: [],
            departments: []
          }];
          this.loadHospitalModalities(this.hospitals[0]);
          this.loading = false;
        },
        error: (err) => {
          console.error("Error loading hospital statistics:", err);
          this.error = "Failed to load hospital statistics. Please try again.";
          this.loading = false;
        }
      });
    } else {
      url = `../aets/${this.mainservice.archiveDeviceName || "DCM4CHEE"}/rs/hospitals/statistics`;
      this.$http.get(url).subscribe({
        next: (data) => {
          this.hospitals = data.map((hospital) => ({
            name: hospital.name,
            patients: hospital.patients || 0,
            studies: hospital.studies || 0,
            active: hospital.active !== false,
            modalities: [],
            departments: []
          }));
          this.hospitals.forEach((hospital) => {
            this.loadHospitalModalities(hospital);
          });
          this.loading = false;
        },
        error: (err) => {
          console.error("Error loading hospital statistics:", err);
          this.error = "Failed to load hospital statistics. Please try again.";
          this.loading = false;
        }
      });
    }
  }
  loadHospitalModalities(hospital) {
    const url = `../aets/${this.mainservice.archiveDeviceName || "DCM4CHEE"}/rs/hospitals/${encodeURIComponent(hospital.name)}/modalities`;
    this.$http.get(url).subscribe({
      next: (modalities) => {
        hospital.modalities = modalities;
      },
      error: (err) => {
        console.error(`Error loading modalities for ${hospital.name}:`, err);
      }
    });
  }
  viewHospitalDetails(hospital) {
    console.log("View details for:", hospital.name);
    window.location.href = `#/study/study?hospitalName=${encodeURIComponent(hospital.name)}`;
  }
}, _a.ctorParameters = () => [
  { type: J4careHttpService },
  { type: AppService },
  { type: ActivatedRoute }
], _a);
HospitalDashboardComponent = __decorate([
  Component({
    selector: "app-hospital-dashboard",
    template: hospital_dashboard_component_default,
    standalone: true,
    imports: [CommonModule],
    styles: [hospital_dashboard_component_default2]
  })
], HospitalDashboardComponent);
export {
  HospitalDashboardComponent
};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
