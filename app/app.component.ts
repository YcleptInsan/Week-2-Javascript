import { Component } from '@angular/core';
import { Animal  } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 id="main-page-title">Welcome to the Zoo Portal</h1>
    <br>
    <br>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (editDoneSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="newAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  //initial value of selected animal equaling null
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Artic Fox", "Jessie", 5 , "Carnivore", "North Pole", 2, "Female", "Cold Weather", "Humans"),
    new Animal("Black Bear", "James", 1 ,"Carnivore", "Western Hemisphere", 3, "Male", "Bear-ies", "Loud noises"),
    new Animal("Pacific Walrus", "Fred", 12 , "Carnivore", "North Pole", 8, "Male", "Cold Water", "Killer Whales"),
  ];
  //setting the selected animal equal to the clicked animal
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  //setting value back to null once the user is done editing the information.
  finishedEditing() {
      this.selectedAnimal = null;
  }

  //pushed newly created Animal to the master List of Animals
  newAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
