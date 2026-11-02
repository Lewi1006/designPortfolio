import { Injectable, signal } from '@angular/core';
import { Trinket } from '../interfaces/trinket.interface';
import { TRINKETSDB } from '../../data/trinkets.db';


@Injectable({
  providedIn: 'root'
})

export class TrinketService {
 
    trinkets = signal<Trinket[]>(TRINKETSDB)



}
