import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../../services/userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser: any;
  constructor(public api: UserdetailsService, public router: Router) {
    this.api.currentUserSubject.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }
  logout() {
    this.api.logout();
    this.router.navigate(['/login']);
  }

}
