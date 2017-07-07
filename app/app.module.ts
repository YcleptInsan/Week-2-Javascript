import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgeSortPipe } from './sort-age.pipe';
import { PropertySortPipe } from './sort-properties';



@NgModule({
    imports: [ BrowserModule,
               FormsModule ],
    declarations: [ AppComponent,
                    AnimalListComponent,
                    EditAnimalComponent,
                    NewAnimalComponent,
                    AgeSortPipe,
                    PropertySortPipe
                  ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
