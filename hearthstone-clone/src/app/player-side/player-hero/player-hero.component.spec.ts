import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeroComponent } from './player-hero.component';

describe('PlayerHeroComponent', () => {
  let component: PlayerHeroComponent;
  let fixture: ComponentFixture<PlayerHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
