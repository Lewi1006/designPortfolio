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

  trinketAreaWidth = 0;
  trinketAreaHeight = 0;
  trinketAreaLeft = 0;
  trinketAreaTop = 0;

  dragOffsetX = 0;
  dragOffsetY = 0;

  // gets dimension values passed into from landing comp,
  // which meassures the trinketArea
  setRandomPositions(width: number, height: number, left: number, top: number) {
    this.trinketAreaWidth = width;
    this.trinketAreaHeight = height;
    this.trinketAreaLeft = left;
    this.trinketAreaTop = top;
  }

  // gets dimensions of each trinket
  // Updates the imageDimensions signal:
  // existingDimensions = the array currently stored in the signal (automatically passed by .update())
  // ...existingDimensions = copies all existing objects into a new array
  // imageDimensions = adds the newly received dimensions object to the array
  setImageDimensions(imageDimensions: { id: number; width: number; height: number }) {
    this.imageDimensions.update((existingDimensions) => [...existingDimensions, imageDimensions]);

    if (this.imageDimensions().length === TRINKETSDB.length) {
      console.log('All images loaded!');
      this.randomizePositions();
    }
  }

  // this.trinkets() gets the current array of trinkets.
  // .map() goes through each trinket, one at a time.
  // .map() loops through items and creates a new array from the returned values.
  // trinket represents the current trinket being processed.
  // updatedTrinkets will contain the new array that .map() creates

  // maxX: the furthest right the image can go without leaving the area.
  // maxY: the furthest down the image can go without leaving the area.
  // Math.random(): gives us a random number between 0 (inclusive) and 1 (exclusive).
  // Multiplying it by maxX or maxY gives us a random position within the available space.

  randomizePositions() {
    // 1. Find the dimensions
    // find the img dimensions for every trinket
    // matches both our arrays that are stored in the signals to the right trinket (id compare)
    const updatedTrinkets = this.trinkets().map((trinket) => {
      const dimensions = this.imageDimensions().find((image) => image.id === trinket.id);

      // 2. Calculate random coordinates
      const maxX = this.trinketAreaWidth - dimensions!.width;
      const maxY = this.trinketAreaHeight - dimensions!.height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      // 3. Return the updated trinket
      // copy all the existing properties of the trinket into a new object
      // x and y are overwritten with new random coordinates
      return { ...trinket, x: randomX, y: randomY };
    });

    // 4. Update the signal with the new array
    this.trinkets.set(updatedTrinkets);
  }

  setDragOffset(offsetX: number, offsetY: number) {
    this.dragOffsetX = offsetX;
    this.dragOffsetY = offsetY;
  }

  dragTrinket(id: number, clientX: number, clientY: number) {
    // find the dimensions of the trinket image
    const dimensions = this.imageDimensions().find((image) => image.id === id);

    // calculate new x and y coordinates
    const newX = clientX - this.trinketAreaLeft - this.dragOffsetX;
    const newY = clientY - this.trinketAreaTop - this.dragOffsetY;

    // trinketarea bounds --> making sure trinket stays in container
    const maxX = this.trinketAreaWidth - dimensions!.width;
    const maxY = this.trinketAreaHeight - dimensions!.height;

    // clamp coordinates so the cannot extend the trinketarea --> maxX and max>
    // making sure newX and newY never go below 0 or above maxX / maxY.
    const x = Math.min(Math.max(0, newX), maxX);
    const y = Math.min(Math.max(0, newY), maxY);

    // 1. .update() updates the signal using its current array.
    // 2. .map() goes through every trinket.
    // 3. trinket.id === id checks whether this is the trinket we're dragging.
    // 4. If it matches, we create a copy with the new x and y.
    // 5. If it doesn't match, we return the original trinket unchanged.
    // This way, we only update the position of the trinket being dragged.

    this.trinkets.update((existingTrinkets) =>
      existingTrinkets.map((trinket) => (trinket.id === id ? { ...trinket, x: x, y: y } : trinket)),
    );
  }

  // this.trinkets() gets the array.
  // .map() creates a new array containing only the zIndex values.
  // ... spreads those numbers out as individual arguments.
  // Math.max() returns the highest number.

  bringToFront(id: number) {
    const highestZIndex = Math.max(...this.trinkets().map((trinket) => trinket.zIndex));
    const newZIndex = highestZIndex + 1;

    this.trinkets.update((existingTrinkets) =>
      existingTrinkets.map((trinket) =>
        trinket.id === id ? { ...trinket, zIndex: newZIndex } : trinket,
      ),
    );
  }
}
