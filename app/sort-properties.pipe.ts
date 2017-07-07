import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'propertySort',
  pure: false
})

export class PropertySortPipe implements PipeTransform {
  transform(input: Animal[], sortBy) {
    var output: Animal[] = [];
    if(sortBy === "species") {
      for(let i = 0; i < input.length; i++) {
        if(input[i].species === Animal.species) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortBy === "name"){
        for(let i =0; i < input.length; i++) {
          if(input[i].name === Animal.name) {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input 
    }
  }
}
