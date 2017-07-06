import { Component, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "new-keg",
  template: `
    <h3> Add new Keg </h3>
    <div>
      <label>Enter A New Name</label>
      <input #newName>
    </div>
    <div>
      <label>Enter A New Price</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter A New ABV</label>
      <input #newABV>
      <br>
      <button (click)="submitForm(newName.value, newPrice.value, newABV.value); newName.value=''; newPrice.value=''; newABV.value='';">Create Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, price: number, abv: number){
    var newKegToAdd: Keg = new Keg(name, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }

}
