import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(c => c.id !== id);
    });
  }
}
