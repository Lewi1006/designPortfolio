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

  // offsetX and offsetY: where on the image the user grabbed it.
  pointerStarted = output<{
    id: number;
    offsetX: number;
    offsetY: number;
  }>();
  // clientX and clientY: the pointer's position in the viewport.
  pointerMoved = output<{
    id: number;
    clientX: number;
    clientY: number;
  }>();

  isDragging = false;

  // event.target — gets the HTML element that triggered the event.
  // as HTMLImageElement — tells TypeScript that this element is an image.
  // getBoundingClientRect() gives us the rendered dimensions, which is what we want.
  // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

  onImageLoad(event: Event) {
    const image = event.target as HTMLImageElement;

    const imageWidth: number = image.getBoundingClientRect().width;
    const imageHeight: number = image.getBoundingClientRect().height;

    // console.log(imageWidth, imageHeight);

    // send the values as output signal to parent comp (landing) so that it can pass the img dimensions to the trinket service
    // data object is emitted as $event here
    this.imageLoaded.emit({ id: this.trinket()!.id, width: imageWidth, height: imageHeight });
  }

  // coordinates where the trinket was clicked
  onPointerDown(event: PointerEvent) {
    this.isDragging = true;

    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    // event.currentTarget refers to the element the event listener is attached to (our image).
    // 'as HTMLImageElement' tells TypeScript that this element is an image.
    // setPointerCapture() makes sure the image continues receiving pointer events,
    // even when the pointer moves outside the image, until the interaction ends.
    const image = event.currentTarget as HTMLImageElement;
    image.setPointerCapture(event.pointerId);

    this.pointerStarted.emit({
      id: this.trinket()!.id,
      offsetX: offsetX,
      offsetY: offsetY,
    });

    console.log('Grab position:', offsetX, offsetY);
  }

  // coordinates of where the pointer moves
  onPointerMove(event: PointerEvent) {
    if (!this.isDragging) return;

    this.pointerMoved.emit({
      id: this.trinket()!.id,
      clientX: event.clientX,
      clientY: event.clientY,
    });

    console.log(event.clientX, event.clientY);
  }

  onPointerUp(event: PointerEvent) {
    this.isDragging = false;
  }
}
