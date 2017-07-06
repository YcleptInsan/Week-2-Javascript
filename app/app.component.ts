import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
        <h1>Welcome to Roots</h1>

        <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSenderServe)="servePint($event)"></keg-list>
        <edit-keg [childSelectedKeg]= "selectedKeg" (editDoneSender)="finishedEditing()"></edit-keg>
        <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
    `
})

export class AppComponent {
    selectedKeg = null;

    masterKegList: Keg[] = [
        new Keg('Falling Sky Honzo', 4, 4.8),
        new Keg('Santaim Spitfire', 4, 6.2),
        new Keg('New West Armadillo', 4, 6.4)
      ];

    servePint(clickedKeg) {
        this.selectedKeg = clickedKeg;
    }

    editKeg(clickedKeg) {
        this.selectedKeg = clickedKeg;
    }

    finishedEditing() {
      this.selectedKeg = null;
    }

    addKeg(newKegFromChild: Keg) {
      this.masterKegList.push(newKegFromChild);
    }

}
