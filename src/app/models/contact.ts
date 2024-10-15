export interface Contact {
    id: number;        // Auto-incrementing integer
    firstName: string; // Required field for first name
    lastName: string;  // Required field for last name
    email: string;     // Required field for email, must follow a valid format
  
    // constructor(id: number, firstName: string, lastName: string, email: string) {
    //   this.id = id;
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.email = email;
    // }
  }
  
  