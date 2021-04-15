import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyArenaComponent } from './enemy-arena.component';

describe('EnemyArenaComponent', () => {
  let component: EnemyArenaComponent;
  let fixture: ComponentFixture<EnemyArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
