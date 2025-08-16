import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import  {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
})
export class AppComponent {
  title = 'real-estate-app';
  properties=[
    {name:'ikeja Apartment',
    price:'120,000,000',
    location:'lekki',
    beds: 4,
    baths: 4,
    description: 'A luxurious apartment in the heart of Ikeja.',
    image:'https://pictures-nigeria.jijistatic.net/176111110_MTIwMC0xNjAwLTNhOGU5YmQ2ZmY.webp',
    
    },
    {name:'5 bedroom Bungalow in goshen estate,Abuja',
    price:'120,000,000',
    location:'goshen estate,Abuja',
    beds: 5,
    baths: 6,
    description: 'fully furnished,located in a serene environment, reliable power supply with backup generator,constant water supply,parking space',
    image:'https://pictures-nigeria.jijistatic.net/175019180_MTQ4OC0xNjAwLTgyMGRmMzRhOTk.webp',

    },
    {
      name:'Ajah Bungalow',
      price:'65,000,000',
      location:'Ajah, Lagos',
      beds: 2,
      baths: 2,
      description: 'A cozy bungalow located in the peaceful Ajah area.',
      image:'https://pictures-nigeria.jijistatic.net/164240528_MTYwMC0yMTMzLWRhMWQ4NmE3ZjM.webp',
    },
    {name:'2bedroom Apartment in Ologolo, Lekki for sale',
    price:'1,000,000',
    location:'Ologolo, Lekki',
    beds: 2,
    baths: 2,
    description: 'elegantly designed units of 2-bedroom apartments overlooking the ocean.',
    image:'https://pictures-nigeria.jijistatic.net/165107236_MTIwMC0xNjAwLTI5NzVjZWIyOTY.webp',
    },
    {name:'Ikeja Lodge',
    price:'1,000,000',
    location:'ologolo, Lagos',
    beds: 1,
    baths: 1,
    description: 'A luxurious lodge with modern amenities in Ologolo.',
    image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645642762.jpg?k=46bec7c1caa1d746c339f5a1171247a427e636b97edb5e2fd9fbcd62067c4118&o',
    },
    {name:'Lekki Apartment',
    price:'120,000,000',
    location:'Lekki, Lagos',
    beds: 4,
    baths: 4,
    description: 'A luxurious apartment in the heart of Lekki.',
    image:'https://pictures-nigeria.jijistatic.net/176111110_MTIwMC0xNjAwLTNhOGU5YmQ2ZmY.webp',
    },
    {
      name:'three bedroom duplex in Abuja karshi for sale',
      price:'65,000,000',
      location:'Abuja, karshi',
      beds:'3',
      baths:'4',
      description:'A beautiful 3bedroom Semi-Detached Duplex in a beautiful serene estate',
      image:'https://pictures-nigeria.jijistatic.net/142025268_MTA4MC04MTAtMjAyN2FjOTlmMg.webp',
    },
    {
      name:'4bedroom Duplex in Sangotedo for sale',
      price:'165,000,000',
      location:'Sangotedo, Lagos',
      beds:'4',
      baths:'4',
      description:'A spacious 4-bedroom duplex located in the serene Sangotedo area.',
      image:'https://pictures-nigeria.jijistatic.net/168832901_MTIwMC0xNjAwLWVkMTYyODIzNzE.webp'
    },

    {
      name:'4 bedroom Duplex in sangotedo for sale',
      price:'165,000,000',
      location:'Sangotedo,Lagos',
      beds:'4',
      baths:'4',
      description:'A spacious 4-bedroom duplex located in the serence Sangotedo area .',
      image:'https://pictures-nigeria.jijistatic.net/168832901_MTIwMC0xNjAwLWVkMTYyODIzNzE.webp',

    }
  ];
  inquire(propertyName: string): void {
    alert(`thanks for your interest in : ${propertyName}. we will get back to you shortly`);
  }
}

