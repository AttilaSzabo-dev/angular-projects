import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { StatsComponent } from './stats/stats.component';
import { ArenaComponent } from './arena/arena.component';
import { HealthComponent } from './stats/health/health.component';
import { AttackComponent } from './stats/attack/attack.component';
import { DefenseComponent } from './stats/defense/defense.component';
import { EnergyComponent } from './stats/energy/energy.component';
import { GearComponent } from './stats/gear/gear.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    StatsComponent,
    ArenaComponent,
    HealthComponent,
    AttackComponent,
    DefenseComponent,
    EnergyComponent,
    GearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
