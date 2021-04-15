import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemySideComponent } from './enemy-side.component';

describe('EnemySideComponent', () => {
  let component: EnemySideComponent;
  let fixture: ComponentFixture<EnemySideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemySideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
