import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "kegLow",
  pure: false
})

export class KegLowPipe implements PipeTransform {

transform(input: Keg[], LowLevelTarget) {
  var output: Keg[] = [];
  if(LowLevelTarget === "lessThanTarget") {
    for (var i = 0; i < input.length; i++) {
      if(input[i].pint <= 120) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
