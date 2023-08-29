import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  isConnected: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isConnected = (name == 'pikachu' && password == 'pikachu');
    return of(isConnected).pipe(delay(1000), 
    tap(isConnected => this.isConnected = isConnected));
  }

  logout() {
    this.isConnected = false;
  }
  
  
}
