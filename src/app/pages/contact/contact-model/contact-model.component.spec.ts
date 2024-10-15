import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModelComponent } from './contact-model.component';

describe('ContactModelComponent', () => {
  let component: ContactModelComponent;
  let fixture: ComponentFixture<ContactModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
