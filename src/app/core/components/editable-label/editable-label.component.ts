import { Component, Input  } from '@angular/core';
import { faPenToSquare, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'editable-label',
  standalone: false,
  
  templateUrl: './editable-label.component.html',
  styleUrl: './editable-label.component.css'
})
export class EditableLabelComponent {
  @Input() label: string = "";
  editMode = false;
  faPenToSquare = faPenToSquare; faFloppyDisk = faFloppyDisk;
  test = "";
}
