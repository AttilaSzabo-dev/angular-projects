import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyHeroComponent } from './enemy-hero.component';

describe('EnemyHeroComponent', () => {
  let component: EnemyHeroComponent;
  let fixture: ComponentFixture<EnemyHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
