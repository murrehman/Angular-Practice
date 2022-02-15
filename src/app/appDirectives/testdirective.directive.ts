import { Directive, ElementRef, Host, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  @HostBinding('style.backgroundColor') bgColor: any;
  @HostBinding('class.myClass') className: any;
  @HostBinding('attr.title') myTitle: any;

  constructor(private el: ElementRef, private rederer: Renderer2) {
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

  changeBg(color: string) {
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('click') myClick() {
    // alert('clicked In Directive')
    // this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
    this.bgColor = 'blue'
    this.className = true;
    this.myTitle = 'This is hostbinding test title'
  }

  @HostListener('mouseover') myMouseOver() {
    // alert('Mouse Over In Directive')
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray')
  }

  @HostListener('mouseout') myMouseOut() {
    // alert('Mouse Out In Directive')
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', 'white')
  }


}
