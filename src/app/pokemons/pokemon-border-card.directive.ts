import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appPokemonBorderCard]'
})
export class PokemonBorderCardDirective {

  constructor(private el:ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }
 private setBorder(color :string){
  this.el.nativeElement.style.border = "solid 4px "+color;
 }
 private setHeight(height:number){
  this.el.nativeElement.style.height = `${height} px`;
 }
}
