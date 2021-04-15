import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyCardsComponent } from './enemy-cards.component';

describe('EnemyCardsComponent', () => {
  let component: EnemyCardsComponent;
  let fixture: ComponentFixture<EnemyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
