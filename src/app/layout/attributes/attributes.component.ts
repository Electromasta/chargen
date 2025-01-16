import { Component, Output, EventEmitter } from '@angular/core';
import { Attribute, Attributes, toArray, getBonus, renderBonus } from '../../data/interfaces/attribute';

@Component({
  selector: 'attributes',
  standalone: false,
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  @Output() bonusesEvent = new EventEmitter<Array<number>>();
  attributes: Array<Attribute> = toArray(Attributes);
  bonuses: number[] = [ 10, 10, 10, 10, 10, 10 ];
  getBonus = getBonus; renderBonus = renderBonus;

  emitBonuses() { this.bonusesEvent.emit(this.bonuses); }
}