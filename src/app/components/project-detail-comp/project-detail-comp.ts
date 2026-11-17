import { Component, inject, signal, OnInit, HostListener } from '@angular/core';
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
  selectedImageIndex = signal<number | null>(null);

  cursorPosition = signal({ x: 0, y: 0 });
  navigationDirection = signal<'previous' | 'next' | null>(null);
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

  openGallery(index: number, dialog: HTMLDialogElement) {
    this.selectedImageIndex.set(index);
    dialog.showModal();
  }

  closeGallery(dialog: HTMLDialogElement) {
    dialog.close();
    this.selectedImageIndex.set(null);
    this.navigationDirection.set(null);
  }

  getSelectedImage(images: string[] | undefined): string {
    const index = this.selectedImageIndex();
    if (index === null || images === undefined) {
      return '';
    }

    return images[index];
  }

  onDialogMouseMove(event: MouseEvent) {
    const dialog = event.currentTarget as HTMLDialogElement;
    const dialogWidth = dialog.clientWidth;
    const mouseX = event.clientX;

    this.cursorPosition.set({
      x: event.clientX,
      y: event.clientY,
    });

    if (event.clientY <= 80) {
      this.navigationDirection.set(null);
    } else if (mouseX <= 200) {
      this.navigationDirection.set('previous');
    } else if (mouseX >= dialogWidth - 200) {
      this.navigationDirection.set('next');
    } else {
      this.navigationDirection.set(null);
    }
  }


  showPrevious(images: string[] | undefined) {
  const index = this.selectedImageIndex();

  if (index === null || !images) return;

  if (index > 0) {
    this.selectedImageIndex.set(index - 1);
  } else {
    this.selectedImageIndex.set(images.length - 1);
  }
}

showNext(images: string[] | undefined) {
  const index = this.selectedImageIndex();

  if (index === null || !images) return;

  if (index < images.length - 1) {
    this.selectedImageIndex.set(index + 1);
  } else {
    this.selectedImageIndex.set(0);
  }
}
}
