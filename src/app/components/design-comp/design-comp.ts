import { Component, inject } from '@angular/core';
import { DesignListService } from '../../shared/services/design-list.service';
import { TwoDigitPipe } from '../../shared/pipes/two-digit-pipe';

@Component({
  imports: [TwoDigitPipe],
  selector: 'app-design-comp',
  styleUrl: './design-comp.scss',
  templateUrl: './design-comp.html',
})
export class DesignComp {
  designListService = inject(DesignListService);
}
