import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpeedLabelComponent } from './components/speed-label/speed-label.component';
import { TileComponent } from './components/tile/tile.component';
import { IncrementerComponent } from './components/incrementer/incrementer.component';
import { EditableLabelComponent } from './components/editable-label/editable-label.component';

@NgModule({
  declarations: [
    SpeedLabelComponent,
    TileComponent,
    IncrementerComponent,
    EditableLabelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:  [
    SpeedLabelComponent,
    TileComponent,
    IncrementerComponent,
    EditableLabelComponent
  ]
})
export class CoreModule { }
