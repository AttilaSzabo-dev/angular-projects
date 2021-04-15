import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyHeroPowerComponent } from './enemy-hero-power.component';

describe('EnemyHeroPowerComponent', () => {
  let component: EnemyHeroPowerComponent;
  let fixture: ComponentFixture<EnemyHeroPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyHeroPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyHeroPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
