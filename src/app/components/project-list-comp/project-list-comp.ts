import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TwoDigitPipe } from '../../shared/pipes/two-digit-pipe';
import { DesignProject } from '../../shared/interfaces/project.interface';

@Component({
  imports: [RouterLink, TwoDigitPipe],
  selector: 'app-project-list-comp',
  styleUrl: './project-list-comp.scss',
  templateUrl: './project-list-comp.html',
})
export class ProjectListComp {

  projects = input<DesignProject[]>([]);


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
