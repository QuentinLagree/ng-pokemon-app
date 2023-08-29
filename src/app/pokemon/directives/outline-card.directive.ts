import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'outline-hover-card',
    inputs: ['outlineColor', 'type'],
    standalone: true
})
export class OutlineCardDirective {

  private initialColor: string = '#f5f5f5'
  private defaultColor: string = '#009688'
  private defaultTypeOutline: string = 'solid'
  private defaultHeight: number = 150 

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setOutline(this.initialColor)
    this.el.nativeElement.style.transition = ".3s"
    this.el.nativeElement.style.cursor = "pointer"
   }

   type: string;
   outlineColor: string;


   @HostListener('mouseenter') onMouseEnter() {
    this.setOutline(this.outlineColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave () {
    this.setOutline(this.initialColor)
   }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${this.defaultHeight}px`
  }

  setOutline(color: string) {
    this.el.nativeElement.style.outline = `thick ${this.type || this.defaultTypeOutline} ${color}`
  }

}
