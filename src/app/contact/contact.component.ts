import { Component } from '@angular/core';     
import { HttpClient } from '@angular/common/http';       /**import the core Angular dependencies,3rd party dependencies,custom dependencies*/
import { FormsModule } from '@angular/forms';
import { FormsDataService } from '../formsdata.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private http: HttpClient, private formsDataService: FormsDataService) {}

  ngOnInit() {
    // Load saved form data when navigating back
    this.contact = this.formsDataService.getFormData();
  }

  onInputChange() {
    // Save form data on each change
    this.formsDataService.setFormData(this.contact);
  }

  onSubmit() {
    /** we can conclude an observable stream by subscribing to it using the subscribe method
     * oNext is used when new data arrives
     * onError is called when an error is thrown
     * the backend server was made with node.js and hosted with render
    */
    this.http.post('https://real-estate-backend-dxa1.onrender.com/contact', this.contact).subscribe({
      next: () => {
        alert('✅ Message sent successfully!');
        this.contact = { fullName: '', email: '', phone: '', message: '' };
        this.formsDataService.setFormData(this.contact); // reset stored data
      },
      error: (err) => {
        console.error('❌ Error sending message:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}