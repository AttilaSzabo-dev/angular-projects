import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsHandComponent } from './cards-hand/cards-hand.component';
import { CardItemComponent } from './cards-hand/card-item/card-item.component';
import { HistoryComponent } from './history/history.component';
import { ManaComponent } from './cards-hand/mana/mana.component';
import { HeroComponent } from './hero/hero.component';
import { HeroPowerComponent } from './hero/hero-power/hero-power.component';
import { ArenaComponent } from './arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsHandComponent,
    CardItemComponent,
    HistoryComponent,
    ManaComponent,
    HeroComponent,
    HeroPowerComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
