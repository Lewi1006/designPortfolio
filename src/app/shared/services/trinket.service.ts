import { Injectable, signal } from '@angular/core';
import { Trinket } from '../interfaces/trinket.interface';
import { TRINKETSDB } from '../../data/trinkets.db';

@Injectable({
  providedIn: 'root',
})
export class TrinketService {
  trinkets = signal<Trinket[]>(TRINKETSDB);

  // gets dimension values passed into from landing comp,
  // which meassures the trinketArea
  setRandomPositions(width: number, height: number) {
    console.log('Width:', width);
    console.log('Height:', height);
  }

  setImageDimensions(imageDimensions: {id: number; width: number; height: number}){
    console.log('Received in service:', imageDimensions);
  }
}
