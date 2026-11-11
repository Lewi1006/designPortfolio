import { Component, inject } from '@angular/core';
import { FrontendListService } from '../../shared/services/frontend-list.service';
import { ProjectListComp } from '../project-list-comp/project-list-comp';

@Component({
  imports: [ProjectListComp],
  selector: 'app-frontend-comp',
  styleUrl: './frontend-comp.scss',
  templateUrl: './frontend-comp.html',
})
export class FrontendComp {
  frontendListService = inject(FrontendListService);
}
