import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyManaComponent } from './enemy-mana.component';

describe('EnemyManaComponent', () => {
  let component: EnemyManaComponent;
  let fixture: ComponentFixture<EnemyManaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyManaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
