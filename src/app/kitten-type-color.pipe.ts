import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kittenTypeColor'
})
export class kittenTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'goutiere':
        color = 'red lighten-1';
        break;
      case 'persan':
        color = 'blue lighten-1';
        break;
      case 'birman':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'siamois':
        color = 'blue lighten-3';
        break;
      case 'tigré':
        color = 'deep-purple accent-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
