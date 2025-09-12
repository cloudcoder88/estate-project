import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsDataService {
  private formData: any = {};

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
}