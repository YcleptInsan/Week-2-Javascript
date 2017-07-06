import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

<select (change)="onchange($event.target.value)">
  <option value="allKegs">All Kegs</option>
  <option value="lessThanTarget">Low Pint level</option>
</select>
<br>
<br>
<select (change)="onSort($event.target.value)">
  <option value="priceSort">Sort by Price</option>
  <option value="abvSort">Sort by Abv</option>
</select>
<br>
<br>

  <ul>
    <li *ngFor="let currentKeg of childKegList | kegLow:filterByLowLevel | abvSort:filterByOptions"><strong>Name:</strong> {{currentKeg.name}}<br><strong>Price:</strong> {{currentKeg.price}}<br><strong>abv: </strong>{{currentKeg.abv}}<br><strong>Pint Remaining: </strong>{{currentKeg.pint}}<br>
    <button (click)="editButtonHasBeenClicked(currentKeg)"> Edit </button>
    <button (click)="serveButton(currentKeg)">Serve Pint</button>
    <br><br>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;
  @Output() clickSenderServe = new EventEmitter;

  filterByLowLevel: string ="allKegs";

  filterByOptions: string ="";

  onSort(optionFromMenu) {
    this.filterByOptions = optionFromMenu;
  }

  onchange(optionFromMenu) {
    this.filterByLowLevel = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);

  }
  serveButton(kegToServe) {
    kegToServe.pint = kegToServe.pint -1;
  }

}
