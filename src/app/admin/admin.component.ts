import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName: string = 'John Doe'; // Replace with the admin's actual name
  adminPictureUrl: string = 'path-to-picture.jpg'; // Replace with the URL of the admin's picture
  adminEmail: string = 'admin@example.com';

}
