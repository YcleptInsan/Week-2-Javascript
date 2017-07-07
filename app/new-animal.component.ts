import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h3> Add A New Animal</h3>
    <div class="all-field-animal-add">
      <div>
        <label>Enter A New Species</label>
        <br>
        <input #newSpecies>
      </div>
      <div>
        <label>Enter A New Name</label>
        <br>
        <input #newName>
      </div>
      <div>
        <label>Enter A New Age</label>
        <br>
        <input #newAge>
      </div>
      <div>
        <label>Enter A New Diet</label>
        <br>
        <input #newDiet>
      </div>
      <div>
        <label>Enter A New Location</label>
        <br>
        <input #newLocation>
      </div>
      <div>
        <label>Enter Number of Caretakers needed</label>
        <br>
        <input #newCaretaker>
      </div>
      <div>
        <label>Enter A New Sex</label>
        <br>
        <input #newSex>
      </div>
      <div>
        <label>Enter A New Like</label>
        <br>
        <input #newLikes>
      </div>
      <div>
        <label>Enter A New Dislike</label>
        <br>
        <input #newDislikes>
      </div>
        <br>
        <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLikes.value, newDislikes.value);newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add New Animal
        </button>
  `
})

export class NewAnimalComponent {
  //Action up Sender in class declaration
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes)
      this.newAnimalSender.emit(newAnimalToAdd);
  }
}
