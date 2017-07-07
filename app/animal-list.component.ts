import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="ageLessThan2">Age: Less Than 2 Years Old</option>
    <option value="ageGreaterThan2">Age: Greater Than 2 Years Old</option>
  </select>
  <ol>
    <li id="list-animals"*ngFor="let currentAnimal of childAnimalList | ageSort:filterByOptions">
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
      <hr>
      <br>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;


  filterByOptions: string ="allAnimals";

  onChange(optionFromMenu) {
    this.filterByOptions = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
