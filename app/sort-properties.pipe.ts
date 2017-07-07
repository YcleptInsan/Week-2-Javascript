import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'propertySort',
  pure: false
})

export class PropertySortPipe implements PipeTransform {
  transform(inputs: Animal[], species: string): Animal[]) {
    return inputs.filter(input => input.species === species);
  }
}
