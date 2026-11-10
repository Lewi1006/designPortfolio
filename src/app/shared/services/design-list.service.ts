import { Injectable, signal } from '@angular/core';
import { DesignProject } from '../interfaces/design-project.interface';
import { DESIGNPROJECTSDB } from '../../data/design-project.db';

@Injectable({
  providedIn: 'root',
})
export class DesignListService {
  projects = signal<DesignProject[]>(DESIGNPROJECTSDB);
}
