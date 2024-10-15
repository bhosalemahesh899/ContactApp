import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.css'
})
export class ContactAddComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
