import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManaComponent } from './player-mana.component';

describe('PlayerManaComponent', () => {
  let component: PlayerManaComponent;
  let fixture: ComponentFixture<PlayerManaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerManaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
