import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="add-animal-container">
      <div id="add-menu-header">
        <h2> Add A New Animal</h2>
      </div>
      <hr>
      <div class="form-group">
        <div>
          <label>Enter A New Species</label>
          <br>
          <input class="form-control" #newSpecies>
        </div>
        <div>
          <label>Enter A New Name</label>
          <br>
          <input class="form-control" #newName>
        </div>
        <div>
          <label>Enter A New Age</label>
          <br>
          <input class="form-control" #newAge>
        </div>
        <div>
          <label>Enter A New Diet</label>
          <br>
          <input class="form-control" #newDiet>
        </div>
        <div>
          <label>Enter A New Location</label>
          <br>
          <input class="form-control" #newLocation>
        </div>
        <div>
          <label>Enter Number of Caretakers needed</label>
          <br>
          <input class="form-control" #newCaretaker>
        </div>
        <div>
          <label>Enter A New Sex</label>
          <br>
          <input class="form-control" #newSex>
        </div>
        <div>
          <label>Enter A New Like</label>
          <br>
          <input class="form-control" #newLikes>
        </div>
        <div>
          <label>Enter A New Dislike</label>
          <br>
          <input class="form-control" #newDislikes>
        </div>
          <br>
          <button class="btn btn-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLikes.value, newDislikes.value);newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add New Animal
          </button>
      </div>
    </div>
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
