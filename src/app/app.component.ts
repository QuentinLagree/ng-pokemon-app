import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [NgIf, RouterLink, RouterOutlet]
})
export class AppComponent {

  constructor (public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }
  
}
