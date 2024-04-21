import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[faaHighlight]'
})
export class HighlightDirective {
  @Input() faaHighlight: string = ''

  constructor(
    private elementRef: ElementRef,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.faaHighlight || 'yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color
  }

}
