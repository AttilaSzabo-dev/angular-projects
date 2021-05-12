import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { StatsComponent } from './stats/stats.component';
import { ArenaComponent } from './arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    StatsComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
