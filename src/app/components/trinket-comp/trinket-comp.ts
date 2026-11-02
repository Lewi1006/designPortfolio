import { Component, input } from '@angular/core';
import { Trinket } from '../../shared/interfaces/trinket.interface';

@Component({
  imports: [],
  selector: 'app-trinket-comp',
  styleUrl: './trinket-comp.scss',
  templateUrl: './trinket-comp.html',
})
export class TrinketComp {
  trinket = input<Trinket>();
}
