import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
    <h3><strong>Name:  </strong> {{childSelectedAnimal.name}} </h3>
      <hr>
      <h3>Edit Animal Information :</h3>
      <label>Enter {{childSelectedAnimal.name}} Species</label>
      <input [(ngModel)]="childSelectedAnimal.species"><br>
      <label>Enter {{childSelectedAnimal.name}} Name</label>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Enter {{childSelectedAnimal.name}} Age</label>
      <input [(ngModel)]="childSelectedAnimal.age"><br>
      <label>Enter {{childSelectedAnimal.name}} Diet</label>
      <input [(ngModel)]="childSelectedAnimal.diet"><br>
      <label>Enter {{childSelectedAnimal.name}} Location</label>
      <input [(ngModel)]="childSelectedAnimal.location"><br>
      <label>Enter the Number of Caretakers needed for {{childSelectedAnimal.name}}</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
      <label>Enter {{childSelectedAnimal.name}} Sex</label>
      <input [(ngModel)]="childSelectedAnimal.sex"><br>
      <label>Enter {{childSelectedAnimal.name}} Likes</label>
      <input [(ngModel)]="childSelectedAnimal.likes"><br>
      <label>Enter {{childSelectedAnimal.name}} Dislikes</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes"><br>



      <button (click)="editDoneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editDoneSender = new EventEmitter;

  editDoneButtonClicked() {
    this.editDoneSender.emit();
  }
}
