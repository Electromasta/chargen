import { Component, Output, EventEmitter } from '@angular/core';
import { toArray } from '../../data/interfaces/attribute';
import { Equipment, Armors, Weapons, Bundles, StarterGear } from '../../data/interfaces/equipment';

@Component({
  selector: 'equipment',
  standalone: false,
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  @Output() armorEvent = new EventEmitter<string>();
  Armors: Array<Equipment> = toArray(Armors);
  Weapons: Array<Equipment> = toArray(Weapons);
  Bundles: Array<Equipment> = toArray(Bundles);
  StarterGear: Array<Equipment> = toArray(StarterGear);

  armor: Equipment = Armors.Tunic;
  picked: Array<Equipment> = [];
  bundle: Equipment = Bundles.Survival;

  train(weapons: Equipment) {
    this.picked.push(weapons);
  }

  remove(i: number) {
    this.picked.splice(i, 1);
  }

  pickArmor(armor: Equipment) {
    this.armor = armor;
    this.armorEvent.emit(armor.value);
  }

  pickBundle(bundle: Equipment) {
    this.bundle = bundle;
  }
}
