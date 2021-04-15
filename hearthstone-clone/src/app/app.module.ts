import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { EnemySideComponent } from './enemy-side/enemy-side.component';
import { EnemyCardsComponent } from './enemy-side/enemy-cards/enemy-cards.component';
import { EnemyManaComponent } from './enemy-side/enemy-mana/enemy-mana.component';
import { EnemyHeroComponent } from './enemy-side/enemy-hero/enemy-hero.component';
import { EnemyHeroPowerComponent } from './enemy-side/enemy-hero-power/enemy-hero-power.component';
import { EnemyArenaComponent } from './enemy-side/enemy-arena/enemy-arena.component';
import { PlayerSideComponent } from './player-side/player-side.component';
import { PlayerCardsComponent } from './player-side/player-cards/player-cards.component';
import { PlayerManaComponent } from './player-side/player-mana/player-mana.component';
import { PlayerHeroComponent } from './player-side/player-hero/player-hero.component';
import { PlayerHeroPowerComponent } from './player-side/player-hero-power/player-hero-power.component';
import { PlayerArenaComponent } from './player-side/player-arena/player-arena.component';
import { PlayerCardItemComponent } from './player-side/player-cards/player-card-item/player-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    EnemySideComponent,
    EnemyCardsComponent,
    EnemyManaComponent,
    EnemyHeroComponent,
    EnemyHeroPowerComponent,
    EnemyArenaComponent,
    PlayerSideComponent,
    PlayerCardsComponent,
    PlayerManaComponent,
    PlayerHeroComponent,
    PlayerHeroPowerComponent,
    PlayerArenaComponent,
    PlayerCardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
