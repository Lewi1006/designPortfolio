import { Component, inject, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { TrinketService } from '../../shared/services/trinket.service';
import { TrinketComp } from '../trinket-comp/trinket-comp';

@Component({
  imports: [TrinketComp],
  selector: 'app-landing-comp',
  styleUrl: './landing-comp.scss',
  templateUrl: './landing-comp.html',
})
export class LandingComp implements AfterViewInit {
  trinketService = inject(TrinketService);

  trinketArea = viewChild<ElementRef<HTMLDivElement>>('trinketArea');
  trinketAreaWidth = 0;
  trinketAreaHeight = 0;

  ngAfterViewInit(){
    this.showDimensions();

  }
  
  showDimensions() {
    const trinketArea = this.trinketArea()?.nativeElement;
    
    if (!trinketArea) return;
    
    this.trinketAreaWidth = trinketArea.clientWidth;
    this.trinketAreaHeight = trinketArea.clientHeight;
    
    console.log(this.trinketAreaWidth, this.trinketAreaHeight);
    // passes the dimensions to the service so trinkets can get random positions
    this.trinketService.setRandomPositions(
      this.trinketAreaWidth,
      this.trinketAreaHeight
    )
  }


  onImageLoaded(imageDimensions: {id:number; width: number; height:number}){
    console.log("Dimensions:", imageDimensions);

    this.trinketService.setImageDimensions(imageDimensions);
  }
}
