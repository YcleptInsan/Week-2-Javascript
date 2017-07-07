import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'ageSort',
  pure: false
})

export class AgeSortPipe implements PipeTransform {
  transform(input: Animal[], sortBy) {
    var output: Animal[] = [];
    if(sortBy === "ageLessThan2"){
      for(let i =0; i < input.length; i++) {
        if(input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortBy === "ageGreaterThan2"){
        for(let i =0; i < input.length; i++) {
          if(input[i].age >= 2) {
            output.push(input[i]);
          }

        }return output;
    } else {
      return input

    }
  }
}
