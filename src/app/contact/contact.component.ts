import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';    /**import the core Angular dependencies,3rd party dependencies,custom dependencies*/
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],//always import common module for the *ngif and *ngfor directives
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    fullName: '',
    email: '',
    message: '',
    phone: ''
  };

  /** import FormsModule in your component or app
     * we can conclude an observable stream by subscribing to it using the subscribe method
     * oNext is used when new data arrives
     * onError is called when an error is thrown
     * the backend server was made with node.js and hosted with render
     * onSubmit calls your method when a form is submited
     * Use HtttpClient to send data to the backend server
     * added a loading bar to the forms page
    */
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.isLoading = true; // start the spinner

    this.http.post('https://real-estate-backend-dxa1.onrender.com/contact', this.contact).subscribe({
      next: (res) => {
        alert('✅ Message sent successfully!');
        this.contact = { fullName: '', email: '', phone: '', message: '' }; 
        this.isLoading = false; // stop  the spinner
      },
      error: (err) => {
        console.error('❌ Error sending message:', err);
        alert('Something went wrong. Please try again.');
        this.isLoading = false; // stop spinner
      }
    });
  }
}