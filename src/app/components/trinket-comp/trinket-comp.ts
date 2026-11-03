import { Component, input, output } from '@angular/core';
import { Trinket } from '../../shared/interfaces/trinket.interface';

@Component({
  imports: [],
  selector: 'app-trinket-comp',
  styleUrl: './trinket-comp.scss',
  templateUrl: './trinket-comp.html',
})
export class TrinketComp {
  // receives the current trinket from parent (landing)
  trinket = input<Trinket>();
  // sends output to parent 
  imageLoaded = output<{ id: number; width: number; height: number }>();

  // event.target — gets the HTML element that triggered the event.
  // as HTMLImageElement — tells TypeScript that this element is an image.
  // getBoundingClientRect() gives us the rendered dimensions, which is what we want.
  // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

  onImageLoad(event: Event) {
    const image = event.target as HTMLImageElement;

    const imageWidth: number = image.getBoundingClientRect().width;
    const imageHeight: number = image.getBoundingClientRect().height;

    console.log(imageWidth, imageHeight);

    // send the values as output signal to parent comp (landing) so that it can pass the img dimensions to the trinket service
    this.imageLoaded.emit({ id: this.trinket()!.id, width: imageWidth, height: imageHeight });
  }
}
