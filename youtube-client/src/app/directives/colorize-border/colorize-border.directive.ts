import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Colors } from '../../consts';

@Directive({
  selector: '[appColorizeBorder]',
})
export class ColorizeBorderDirective implements OnInit {
  @Input('appColorizeBorder') publishedDate?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const now = new Date();
    const date = new Date(this.publishedDate as string);

    const days = Math.floor((now.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

    const color =
      days > 180
        ? Colors.moreSixMonth
        : days < 30
        ? days < 7
          ? Colors.lessWeek
          : Colors.lessMonth
        : Colors.default;

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', color);
  }
}
