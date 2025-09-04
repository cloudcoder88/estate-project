import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 contact={
  fullName:'',
  email:'',
  message:'',
  phone:''
 }

constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:5000/contact', this.contact).subscribe({
      next: (res) => {
        alert('✅ Message sent successfully!');
        this.contact = { fullName: '', email: '', phone: '', message: '' }; // reset form
      },
      error: (err) => {
        console.error('❌ Error sending message:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}