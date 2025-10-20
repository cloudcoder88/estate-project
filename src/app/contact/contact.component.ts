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
    email: '', // changed from 'emailField' to 'email' to match the backend
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

  submitted = false; //add this to track form submission status

  serverMessage = '';// these properties are used to tract server responses
  isSucess: boolean = false;  //fixed ,added type annotation

  constructor(private http: HttpClient) {}

  onSubmit(contactForm: any) {
    this.submitted = true; // accept the form parameter and set submitted to true



    //check if form is valid before submitting it
    if(contactForm.invalid){
      alert('❌ Please fill out all required fields correctly!.');
      return;
    }
    this.isLoading =true;
    this.serverMessage ='';
    this.isSucess = false;
    this.http.post('https://real-estate-backend-dxa1.onrender.com', this.contact).subscribe({
      next: (res) => {
        //Sucess - use the custom messages instead of alert
       this.serverMessage ='✅ Message sent successfully!';
       this.isSucess =true;
        this.contact = { fullName: '', email: '', phone: '', message: '' }; 
        this.isLoading = false; // stop  the spinner
        this.submitted = false; //reset form submission status
        contactForm.reset();// this will clear the form validation states
      },
      error: (err) => {
        // Error - use the custom message instead of the javascript alert
        this.serverMessage ='❌ Something went wrong. Please try again.';
        this.isSucess = false; // stop spinner
        console.error('Error sending message:',err);
        this.isLoading = false;
      }
    });
  }
}