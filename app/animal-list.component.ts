import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div id="selectNav">
  <select class="form-control"(change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="ageLessThan2">Age: Less Than 2 Years Old</option>
    <option value="ageGreaterThan2">Age: Greater Than 2 Years Old</option>
  </select>
  </div>
  <br>
  <div id="sortNav">
  <select class="form-control"(change)="onSelection($event.target.value)">
    <option value="filter">Filter</option>
    <option value="species">Species</option>
    <option value="name">Name</option>
    <option value="age">Age</option>
    <option value="diet">Diet</option>
    <option value="location">Location</option>
    <option value="sex">Sex</option>
    <option value="likes">Likes</option>
    <option value="dislikes">Dislikes</option>
  </select>
  </div>
  <br>

  <ol class="list-group">
    <li class="list-group-item" id="list-animals" *ngFor="let currentAnimal of childAnimalList | ageSort:filterByOptions">
    <hr>
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
      <br>
      <button class="btn btn-info" (click)="editButtonHasBeenClicked(currentAnimal)"> Edit
      </button>
      <br>
      <hr>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;


  filterByOptions: string ="allAnimals";
  filterByProperties: string ="filter";

  onChange(optionFromMenu) {
    this.filterByOptions = optionFromMenu;
  }

  onSelection(optionFromMenu) {
    this.filterByProperties = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
