import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationTabComponent } from './generation-tab.component';

describe('GenerationTabComponent', () => {
  let component: GenerationTabComponent;
  let fixture: ComponentFixture<GenerationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
