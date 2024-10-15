import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact/contact-list/contact-list.component';
import { ContactAddComponent } from './pages/contact/contact-add/contact-add.component';
import { ContactEditComponent } from './pages/contact/contact-edit/contact-edit.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: ContactAddComponent },
  { path: 'contact-edit/:id', component: ContactEditComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
