import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h3><strong>Name:</strong>{{childSelectedKeg.name}}</h3>
        <hr>
        <h3>Edit Keg:</h3>
        <label>Enter Keg Name</label>
        <input [(ngModel)]="childSelectedKeg.name"><br>
        <label>Enter Keg Price</label>
        <input [(ngModel)]="childSelectedKeg.price"><br>
        <label>Enter Keg Abv</label>
        <input [(ngModel)]="childSelectedKeg.abv"><br>
        <label>Enter Pints Remaining</label>
        <input [(ngModel)]="childSelectedKeg.pint"><br>
        <button (click)="editDoneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() editDoneSender = new EventEmitter();

  editDoneButtonClicked() {
    this.editDoneSender.emit();
  }
}
