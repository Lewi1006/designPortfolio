import { Injectable, signal } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { FRONTENDPROJECTSDB } from '../../data/frontend-project.db';

@Injectable({
  providedIn: 'root',
})
export class FrontendListService {
    projects = signal<Project[]>(FRONTENDPROJECTSDB);
}
