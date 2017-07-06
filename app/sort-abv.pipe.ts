import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name:"abvSort",
  pure: false
})

export class AbvSortPipe implements PipeTransform {
  transform(input: Keg[], sortBy) {
    var output: Keg[] = [];
    if(sortBy === "abvSort") {
      return input.sort(function(a, b){
        return b.abv - a.abv;
      });
    } else if(sortBy === "priceSort") {
      return input.sort(function(a, b){
        return b.price - a.price;
    });
  }
}
