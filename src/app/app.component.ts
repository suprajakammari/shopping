import { Component } from '@angular/core';
import { UserdetailsService } from '../services/userdetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';
  currentUser: any;
  constructor(public api: UserdetailsService) {
    this.api.currentUserSubject.subscribe(x => this.currentUser = x);
  }
}
