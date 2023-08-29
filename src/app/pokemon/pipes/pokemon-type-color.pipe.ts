import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "PokemonTypeColorPipe",
    standalone: true
})

export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {
    
      let color: string;
    
      switch (type) {
        case 'Feu':
          color = '#fc2b2b';
          break;
        case 'Eau':
          color = '#2b5efc';
          break;
        case 'Plante':
          color = '#31fc2b';
          break;
        case 'Insecte':
          color = '#d98e28';
          break;
        case 'Normal':
          color = '#cdd1d3';
          break;
        case 'Vol':
          color = '#2bc3fc';
          break;
        case 'Poison':
          color = '#c62bfc';
          break;
        case 'Fée':
          color = '#fc2bf2';
          break;
          case 'Psy':
            color = '#be0ca6';
            break;
        case 'Electrique':
          color = '#fcf62b';
          break;
        case 'Combat':
          color = '#fca02b';
          break;
          case 'Psy':
            color = '#be0ca6';
            break;
        default:
          color = '#e9e8e8';
          break;
      }
    
      return color;
    
    }
  
}