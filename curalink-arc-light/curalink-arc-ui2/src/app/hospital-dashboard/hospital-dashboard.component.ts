import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { J4careHttpService } from '../helpers/j4care-http.service';
import { AppService } from '../app.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {j4care} from '../helpers/j4care.service';

interface Hospital {
    name: string;
    location?: string;
    patients: number;
    studies: number;
    modalities?: string[];
    departments?: string[];
    lastStudyDate?: string;
    active: boolean;
}

interface AETitle {
    dicomAETitle: string;
    dicomDescription?: string;
}

interface AEDashboard {
    aeTitle: string;
    description?: string;
    hospitals: Hospital[];
    totalPatients: number;
    totalStudies: number;
    loading: boolean;
}

@Component({
    selector: 'app-hospital-dashboard',
    templateUrl: './hospital-dashboard.component.html',
    styleUrls: ['./hospital-dashboard.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class HospitalDashboardComponent implements OnInit {
    hospitals: Hospital[] = [];
    loading: boolean = true;
    error: string = '';
    specificHospital: string | null = null;
    specificAETitle: string | null = null;
    aeDashboards: AEDashboard[] = [];
    viewMode: 'all' | 'ae-specific' | 'hospital-specific' = 'all';

    constructor(
        private $http: J4careHttpService,
        private mainservice: AppService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Check if we're viewing a specific hospital or AE title
        this.route.params.subscribe(params => {
            this.specificHospital = params['hospitalName'] || null;
            this.specificAETitle = params['aeTitle'] || null;

            if (this.specificAETitle) {
                this.viewMode = 'ae-specific';
                this.loadAESpecificDashboard(this.specificAETitle);
            } else if (this.specificHospital) {
                this.viewMode = 'hospital-specific';
                this.loadHospitalStatistics();
            } else {
                this.viewMode = 'all';
                this.loadAllAEDashboards();
            }
        });
    }

    loadAllAEDashboards(): void {
        this.loading = true;
        this.error = '';

        // First, get all AE titles
        this.getAETitles().subscribe({
            next: (aeTitles: AETitle[]) => {
                if (aeTitles.length === 0) {
                    this.error = 'No AE titles found';
                    this.loading = false;
                    return;
                }

                // Create a dashboard for each AE title
                this.aeDashboards = aeTitles.map(ae => ({
                    aeTitle: ae.dicomAETitle,
                    description: ae.dicomDescription,
                    hospitals: [],
                    totalPatients: 0,
                    totalStudies: 0,
                    loading: true
                }));

                // Load statistics for each AE title
                this.aeDashboards.forEach(dashboard => {
                    this.loadAEStatistics(dashboard);
                });

                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading AE titles:', err);
                this.error = 'Failed to load AE titles. Please try again.';
                this.loading = false;
            }
        });
    }

    loadAESpecificDashboard(aeTitle: string): void {
        this.loading = true;
        this.error = '';

        const dashboard: AEDashboard = {
            aeTitle: aeTitle,
            hospitals: [],
            totalPatients: 0,
            totalStudies: 0,
            loading: true
        };

        this.aeDashboards = [dashboard];
        this.loadAEStatistics(dashboard);
        this.loading = false;
    }

    loadAEStatistics(dashboard: AEDashboard): void {
        const url = `/curalink/aets/${dashboard.aeTitle}/rs/hospitals/statistics`;

        this.$http.get(url).subscribe({
            next: (data: any[]) => {
                dashboard.hospitals = data.map(hospital => ({
                    name: hospital.name,
                    patients: hospital.patients || 0,
                    studies: hospital.studies || 0,
                    active: hospital.active !== false,
                    modalities: [],
                    departments: []
                }));

                // Calculate totals
                dashboard.totalPatients = dashboard.hospitals.reduce((sum, h) => sum + h.patients, 0);
                dashboard.totalStudies = dashboard.hospitals.reduce((sum, h) => sum + h.studies, 0);

                // Load modalities for each hospital
                dashboard.hospitals.forEach(hospital => {
                    this.loadHospitalModalitiesForAE(dashboard.aeTitle, hospital);
                });

                dashboard.loading = false;
            },
            error: (err) => {
                console.error(`Error loading statistics for AE ${dashboard.aeTitle}:`, err);
                dashboard.loading = false;
            }
        });
    }

    loadHospitalStatistics(): void {
        this.loading = true;
        this.error = '';

        let url: string;
        const aetTitle = this.mainservice.archiveDeviceName || 'dcm4chee-arc';

        if (this.specificHospital) {
            // Load specific hospital statistics
            url = `/curalink/aets/${aetTitle}/rs/hospitals/${encodeURIComponent(this.specificHospital)}/statistics`;

            this.$http.get(url).subscribe({
                next: (data: any) => {
                    this.hospitals = [{
                        name: data.name,
                        patients: data.patients || 0,
                        studies: data.studies || 0,
                        active: data.active !== false,
                        modalities: [],
                        departments: []
                    }];

                    // Load modalities for the hospital
                    this.loadHospitalModalities(this.hospitals[0]);

                    this.loading = false;
                },
                error: (err) => {
                    console.error('Error loading hospital statistics:', err);
                    this.error = 'Failed to load hospital statistics. Please try again.';
                    this.loading = false;
                }
            });
        } else {
            // Load all hospitals statistics
            url = `/curalink/aets/${aetTitle}/rs/hospitals/statistics`;

            this.$http.get(url).subscribe({
                next: (data: any[]) => {
                    this.hospitals = data.map(hospital => ({
                        name: hospital.name,
                        patients: hospital.patients || 0,
                        studies: hospital.studies || 0,
                        active: hospital.active !== false,
                        modalities: [],
                        departments: []
                    }));

                    // Load modalities for each hospital
                    this.hospitals.forEach(hospital => {
                        this.loadHospitalModalities(hospital);
                    });

                    this.loading = false;
                },
                error: (err) => {
                    console.error('Error loading hospital statistics:', err);
                    this.error = 'Failed to load hospital statistics. Please try again.';
                    this.loading = false;
                }
            });
        }
    }

    getAETitles() {
        const url = `${j4care.addLastSlash(this.mainservice.baseUrl)}aes`;
        return this.$http.get(url).pipe(
            catchError(err => {
                console.error('Error fetching AE titles:', err);
                return of([]);
            })
        );
    }

    loadHospitalModalities(hospital: Hospital): void {
        const aetTitle = this.mainservice.archiveDeviceName || 'dcm4chee-arc';
        const url = `/curalink/aets/${aetTitle}/rs/hospitals/${encodeURIComponent(hospital.name)}/modalities`;

        this.$http.get(url).subscribe({
            next: (modalities: string[]) => {
                hospital.modalities = modalities;
            },
            error: (err) => {
                console.error(`Error loading modalities for ${hospital.name}:`, err);
            }
        });
    }

    loadHospitalModalitiesForAE(aeTitle: string, hospital: Hospital): void {
        const url = `/curalink/aets/${aeTitle}/rs/hospitals/${encodeURIComponent(hospital.name)}/modalities`;

        this.$http.get(url).subscribe({
            next: (modalities: string[]) => {
                hospital.modalities = modalities;
            },
            error: (err) => {
                console.error(`Error loading modalities for ${hospital.name} (AE: ${aeTitle}):`, err);
            }
        });
    }

    viewHospitalDetails(hospital: Hospital, aeTitle?: string): void {
        console.log('View details for:', hospital.name);
        // Navigate to studies filtered by hospital
        if (aeTitle) {
            window.location.href = `#/study/study?hospitalName=${encodeURIComponent(hospital.name)}&aet=${encodeURIComponent(aeTitle)}`;
        } else {
            window.location.href = `#/study/study?hospitalName=${encodeURIComponent(hospital.name)}`;
        }
    }

    viewAEDashboard(aeTitle: string): void {
        this.router.navigate(['/dashboard/ae', aeTitle]);
    }

    getTitle(): string {
        if (this.specificAETitle) {
            return `${this.specificAETitle} Dashboard`;
        } else if (this.specificHospital) {
            return `${this.specificHospital} Dashboard`;
        } else {
            return 'Hospital Dashboard by AE Title';
        }
    }

    getSubtitle(): string {
        if (this.specificAETitle) {
            return `Overview of all hospitals for AE Title: ${this.specificAETitle}`;
        } else if (this.specificHospital) {
            return `Overview of ${this.specificHospital} statistics`;
        } else {
            return 'Overview of all hospitals grouped by Application Entity (AE) Title';
        }
    }
}

