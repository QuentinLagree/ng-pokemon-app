import { Component } from '@angular/core';

@Component({
    selector: 'loader',
    template: `
    <div class="spinner-border text-secondary mt-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  `,
    standalone: true
})
export class LoaderComponent {

}
