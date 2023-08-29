import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styles: [],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class LoginFormComponent implements OnInit {
  message: string = "Connecte toi avec tes identifiants..."
  name: string;
  password: string;
  auth: AuthService;

  constructor (
    private authService: AuthService,
    private router: Router
    ) {}


  ngOnInit(): void {
    this.auth = this.authService;
  }
  

  setMessage() {

    this.message = (this.auth.isConnected) ? "Vous êtes connecté!" : "Identifiant ou Mot de passe incorrect..."

  }
  
  login() {
    this.message = "Tentative de connexion en cours..."
    this.auth.login(this.name, this.password)
    .subscribe((isConnected: boolean) => {
      this.setMessage();
      (isConnected) ? this.router.navigate(['/pokemons']) : this.router.navigate(['/login']);
    })
  }


  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté.'
  }
}
