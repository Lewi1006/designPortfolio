import { Component, inject, signal } from '@angular/core';
import { DesignListService } from '../../shared/services/design-list.service';
import { TwoDigitPipe } from '../../shared/pipes/two-digit-pipe';
import { RouterLink } from '@angular/router';
import { DesignProject } from '../../shared/interfaces/design-project.interface';

@Component({
  imports: [TwoDigitPipe, RouterLink],
  selector: 'app-design-comp',
  styleUrl: './design-comp.scss',
  templateUrl: './design-comp.html',
})
export class DesignComp {
  designListService = inject(DesignListService);

  // stores the project currently being hovered over
  hoveredProject = signal<DesignProject | null>(null);

  // stores the mouse coordinates.
  cursorPosition = signal<{ x: number; y: number }>({ x: 0, y: 0 });

  onProjectHover(project: DesignProject, event: MouseEvent) {
    this.hoveredProject.set(project);
    this.cursorPosition.set({ x: event.clientX, y: event.clientY });
  }

  onProjectLeave() {
    this.hoveredProject.set(null);
  }
}
