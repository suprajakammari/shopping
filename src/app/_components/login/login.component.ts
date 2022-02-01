import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdetailsService } from '../../../services/userdetails.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  formSubmitted = false;
  constructor(private userdetailsService: UserdetailsService, private router: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }

  get f(){ return this.login.controls; }

  submit(): any{
    this.formSubmitted = true;
    if (!this.login.valid) { return false; }
    this.userdetailsService.login(this.login.value).subscribe(res => {
      this.router.navigate(['/']);
    }, (err) => {
      this.notifyService.showError('login Unsuccessfully');
    });
  }
}
