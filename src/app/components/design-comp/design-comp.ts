import { Component, inject} from '@angular/core';
import { DesignListService } from '../../shared/services/design-list.service';
import { ProjectListComp } from '../project-list-comp/project-list-comp';

@Component({
  imports: [ProjectListComp],
  selector: 'app-design-comp',
  styleUrl: './design-comp.scss',
  templateUrl: './design-comp.html',
})
export class DesignComp {
  designListService = inject(DesignListService);
}
