import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  @HostListener('mouseenter') onEnter() {
    this._el.nativeElement.style.color = 'hotpink';
  }
  @HostListener('mouseleave') onLeave() {
    this._el.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event']) onClick(ev: any) {
    console.log(ev);
    this._el.nativeElement.style.transform = 'translate(100px)';
    const styles = (window as any).getComputedStyle(ev.target);
    console.log(styles);
  }

  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.color = 'red';
    this._el.nativeElement.style.fontWeigt = 'bold';
  }
}
