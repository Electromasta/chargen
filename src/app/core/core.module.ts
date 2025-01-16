import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SpeedLabelComponent } from './components/speed-label/speed-label.component';
import { TileComponent } from './components/tile/tile.component';
import { IncrementerComponent } from './components/incrementer/incrementer.component';
import { EditableLabelComponent } from './components/editable-label/editable-label.component';
import { FeatPickerComponent } from './components/feat-picker/feat-picker.component';

@NgModule({
  declarations: [
    SpeedLabelComponent,
    TileComponent,
    IncrementerComponent,
    EditableLabelComponent,
    FeatPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    TooltipModule,
    BrowserAnimationsModule,
    TooltipModule,
    BsDropdownModule
  ],
  exports:  [
    SpeedLabelComponent,
    TileComponent,
    IncrementerComponent,
    EditableLabelComponent,
    FeatPickerComponent
  ]
})
export class CoreModule { }
