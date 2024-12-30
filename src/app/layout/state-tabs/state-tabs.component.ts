import { Component } from '@angular/core';

@Component({
  selector: 'state-tabs',
  standalone: false,
  templateUrl: './state-tabs.component.html',
  styleUrl: './state-tabs.component.css'
})
export class StateTabsComponent {
  state = 1;
  progress = 10;

  tabs = [
    { title: "Attributes", state: 1 },
    { title: "Backgrounds", state: 2 },
    { title: "Classes", state: 3 },
    { title: "Skills", state: 4 },
    { title: "Features", state: 5 },
    { title: "Equipment", state: 6 }
  ]
}
