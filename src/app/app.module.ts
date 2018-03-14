import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropDirectiveModule} from "angular4-drag-drop";

import { AppComponent } from './app.component';
import { DropAreaComponent } from './drop-area/drop-area.component';
import { GenericBoxComponent } from './generic-box/generic-box.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    DropAreaComponent,
    GenericBoxComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
