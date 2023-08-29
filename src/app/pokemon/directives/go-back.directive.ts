import { Directive, HostListener, Input} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector: '[goBack]',
    inputs: ['path'],
    standalone: true
})
export class GoBackDirective {

  constructor(private router: Router) { }

  @Input("goBack") path: string;

  @HostListener('click') onClick() {
    this.router.navigate([this.path])
   }

}
