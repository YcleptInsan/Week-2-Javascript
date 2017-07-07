import { Component } from '@angular/core';
import { Animal  } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Welcome to the Zoo Portal</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"> </animal-list>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Artic Fox", "Jessie", 5 , "Carnivore", "North Pole", 2, "Female", "Cold Weather", "Humans"),
    new Animal("Black Bear", "James", 1 ,"Carnivore", "Western Hemisphere", 3, "Male", "Bear-ies", "Loud noises"),
    new Animal("Pacific Walrus", "Fred", 12 , "Carnivore", "North Pole", 8, "Male", "Cold Water", "Killer Whales"),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}
