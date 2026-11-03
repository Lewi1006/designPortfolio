import { Injectable, signal } from '@angular/core';
import { Trinket } from '../interfaces/trinket.interface';
import { TRINKETSDB } from '../../data/trinkets.db';

@Injectable({
  providedIn: 'root',
})
export class TrinketService {
  trinkets = signal<Trinket[]>(TRINKETSDB);
  // imageDimensions signal contains an array with the dimensions of all images that have loaded
  imageDimensions = signal<{ id: number; width: number; height: number }[]>([]);

  // gets dimension values passed into from landing comp,
  // which meassures the trinketArea
  setRandomPositions(width: number, height: number) {
    console.log('Width:', width);
    console.log('Height:', height);
  }

  // gets dimensions of each trinket
  // Updates the imageDimensions signal:
  // existingDimensions = the array currently stored in the signal (automatically passed by .update())
  // ...existingDimensions = copies all existing objects into a new array
  // imageDimensions = adds the newly received dimensions object to the array
  setImageDimensions(imageDimensions: { id: number; width: number; height: number }) {
    this.imageDimensions.update((existingDimensions) => [...existingDimensions, imageDimensions]);

    console.log('All image dimensions:', this.imageDimensions());
  }
}
