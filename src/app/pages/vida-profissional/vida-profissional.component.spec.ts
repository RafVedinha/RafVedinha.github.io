import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaProfissionalComponent } from './vida-profissional.component';

describe('VidaProfissionalComponent', () => {
  let component: VidaProfissionalComponent;
  let fixture: ComponentFixture<VidaProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidaProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
