import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.contactId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.contactService.getContact(this.contactId).subscribe(contact => {
      this.contactForm.patchValue(contact);
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.updateContact({ ...this.contactForm.value, id: this.contactId }).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
