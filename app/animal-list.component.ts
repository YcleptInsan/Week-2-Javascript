import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      <strong>Species:</strong> {{currentAnimal.species}}
      <br>
      <strong>Name:</strong> {{currentAnimal.name}}
      <br>
      <strong>Age:</strong> {{currentAnimal.age}}
      <br>
      <strong>Diet:</strong> {{currentAnimal.diet}}
      <br>
      <strong>Location:</strong> {{currentAnimal.location}}
      <br>
      <strong>Caretakers:</strong> {{currentAnimal.caretakers}}
      <br>
      <strong>Sex:</strong> {{currentAnimal.sex}}
      <br>
      <strong>Likes:</strong> {{currentAnimal.likes}}
      <br>
      <strong>Dislikes:</strong> {{currentAnimal.dislikes}}
      <br>
      <button (click)="editButtonHasBeenClicked(currentAnimal)"> Edit
      </button>
      <br>
      <br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;

  filterAnimalsBy: string ="allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}