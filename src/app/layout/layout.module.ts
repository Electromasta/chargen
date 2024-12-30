import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { StateTabsComponent } from './state-tabs/state-tabs.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    StateTabsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProgressbarModule
  ],
  exports: [
    StateTabsComponent
  ]
})
export class LayoutModule { }
