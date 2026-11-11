import { Injectable, signal } from '@angular/core';
import { DesignProject } from '../interfaces/project.interface';
import { DESIGNPROJECTSDB } from '../../data/design-project.db';

@Injectable({
  providedIn: 'root',
})
export class DesignListService {
  projects = signal<DesignProject[]>(DESIGNPROJECTSDB);
}
