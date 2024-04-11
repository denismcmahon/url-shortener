import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShorteningFormComponent } from './url-shortening-form.component';

describe('UrlShorteningFormComponent', () => {
  let component: UrlShorteningFormComponent;
  let fixture: ComponentFixture<UrlShorteningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlShorteningFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShorteningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
