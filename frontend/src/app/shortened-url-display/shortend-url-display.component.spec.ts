import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortendUrlDisplayComponent } from './shortened-url-display.component';

describe('ShortendUrlDisplayComponent', () => {
  let component: ShortendUrlDisplayComponent;
  let fixture: ComponentFixture<ShortendUrlDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortendUrlDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortendUrlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
