import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group">
    <div *ngIf="childSelectedAnimal">
    <h3><strong>Name:  </strong> {{childSelectedAnimal.name}} </h3>
      <hr>
      <h3>Edit Animal Information :</h3>
      <label>Enter {{childSelectedAnimal.name}} Species</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species"><br>
      <label>Enter {{childSelectedAnimal.name}} Name</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Enter {{childSelectedAnimal.name}} Age</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.age"><br>
      <label>Enter {{childSelectedAnimal.name}} Diet</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.diet"><br>
      <label>Enter {{childSelectedAnimal.name}} Location</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.location"><br>
      <label>Enter the Number of Caretakers needed for {{childSelectedAnimal.name}}</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers"><br>
      <label>Enter {{childSelectedAnimal.name}} Sex</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.sex"><br>
      <label>Enter {{childSelectedAnimal.name}} Likes</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes"><br>
      <label>Enter {{childSelectedAnimal.name}} Dislikes</label><br>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes"><br>

      <button class="btn btn-primary" (click)="editDoneButtonClicked()">Done</button>
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
