import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreModule } from '../core/core.module';
import { StateTabsComponent } from './state-tabs/state-tabs.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AttributesComponent } from './attributes/attributes.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ClassesComponent } from './classes/classes.component';
import { SkillsComponent } from './skills/skills.component';
import { FeaturesComponent } from './features/features.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { JobsComponent } from './jobs/jobs.component'; 



@NgModule({
  declarations: [
    StateTabsComponent,
    AttributesComponent,
    BackgroundsComponent,
    ClassesComponent,
    SkillsComponent,
    FeaturesComponent,
    EquipmentComponent,
    CharsheetComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    FontAwesomeModule,
    ProgressbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule,
    BsDropdownModule
  ],
  exports: [
    StateTabsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
