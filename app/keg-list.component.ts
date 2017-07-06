import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList"><strong>Name:</strong> {{currentKeg.name}}<br><strong>Price:</strong> {{currentKeg.price}}<br><strong>abv: </strong>{{currentKeg.abv}}<br><strong>Pint Remaining: </strong>{{currentKeg.pint}}<br>
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

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);

  }
  serveButton(kegToServe) {
    kegToServe.pint = kegToServe.pint -1;
  }

}
