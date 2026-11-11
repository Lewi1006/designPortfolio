import { Component, inject, signal, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendListService } from '../../shared/services/frontend-list.service';
import { DesignListService } from '../../shared/services/design-list.service';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  imports: [],
  selector: 'app-project-detail-comp',
  styleUrl: './project-detail-comp.scss',
  templateUrl: './project-detail-comp.html',
})
export class ProjectDetailComp implements OnInit {
  ngOnInit() {
    this.findProject();
  }

  designListService = inject(DesignListService);
  frontendListService = inject(FrontendListService);

  project = signal<Project | undefined>(undefined);

  // Gives us access to information about the currently active route (URL).
  route = inject(ActivatedRoute);
  
  // Reads the value of the 'slug' parameter from the URL.
  // Example: /design/spielraum → slug = 'spielraum'
  slug = this.route.snapshot.paramMap.get('slug');

  // Reads the first segment of the URL to identify the project category.
  // Example: /design/spielraum → category = 'design'
  //          /frontend/my-website → category = 'frontend'
  category = this.route.snapshot.url[0].path;

  findProject() {
    if (this.category === 'design') {
      const foundProject = this.designListService
        .projects()
        .find((project) => project.slug === this.slug);

      this.project.set(foundProject);
    }

    if (this.category === 'frontend') {
      const foundProject = this.frontendListService
        .projects()
        .find((project) => project.slug === this.slug);
      this.project.set(foundProject);
    }
  }
}
