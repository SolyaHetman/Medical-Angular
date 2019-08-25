import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule} from '@angular/http';

import {  AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { PatientComponentsComponent } from './components/patient-components/patient-components.component';
import { ImmunoglobulinReplacementTherapyComponent } from './components/patient-components/immunoglobulin-replacement-therapy/immunoglobulin-replacement-therapy.component';
import { StemcellsComponent } from './components/patient-components/stemcells/stemcells.component';
import { WayToDiagnoseComponent } from './components/patient-components/way-to-diagnose/way-to-diagnose.component';
import { DiagnosisPidComponent } from './components/patient-components/diagnosis-pid/diagnosis-pid.component';
import { GeneralDataComponent } from './components/patient-components/general-data/general-data.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    PatientComponentsComponent,
    ImmunoglobulinReplacementTherapyComponent,
    StemcellsComponent,
    WayToDiagnoseComponent,
    DiagnosisPidComponent,
    GeneralDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutes
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
