import { Pipe, PipeTransform } from '@angular/core';
import { Lines } from 'src/app/models/lines.model';

@Pipe({
  name: 'searchList'
})
export class SearchListPipe implements PipeTransform {

  transform(value: Array<Lines>, search: string, ...args: any[]): any {
    if (!!search )
      return value.filter(line => line.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    else{
      return value
    }
    }

}
