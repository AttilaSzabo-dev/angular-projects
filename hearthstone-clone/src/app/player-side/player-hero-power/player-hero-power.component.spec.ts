import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeroPowerComponent } from './player-hero-power.component';

describe('PlayerHeroPowerComponent', () => {
  let component: PlayerHeroPowerComponent;
  let fixture: ComponentFixture<PlayerHeroPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHeroPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
