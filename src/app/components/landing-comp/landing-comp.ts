import { Component, inject } from '@angular/core';
import { TrinketService } from '../../shared/services/trinket.service';
import { TrinketComp } from '../trinket-comp/trinket-comp';

@Component({
  imports: [TrinketComp],
  selector: 'app-landing-comp',
  styleUrl: './landing-comp.scss',
  templateUrl: './landing-comp.html',
})
export class LandingComp {
  trinketService = inject(TrinketService);
}
