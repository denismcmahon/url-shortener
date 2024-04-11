import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedUrlDisplayComponent } from './shortened-url-display.component';

describe('ShortendUrlDisplayComponent', () => {
  let component: ShortenedUrlDisplayComponent;
  let fixture: ComponentFixture<ShortenedUrlDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenedUrlDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenedUrlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
