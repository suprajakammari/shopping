import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdetailsService } from '../../../services/userdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  formSubmitted = false;
  constructor(private userdetailsService: UserdetailsService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }
  get f(){ return this.login.controls; }
  submit(): void{
    this.formSubmitted = true;
    if (this.login.valid) {
      const payload = {
        // username: 'suppu',
        // email: 'jithender@yopmail.com',
        // password: 'admin'
        username: this.login.get('username').value,
        password: this.login.get('password').value,
      };
      this.userdetailsService.getLogin(payload).subscribe(res => {
       alert('login Successfully');
       this.login.reset();
      }, (err) => {
        alert('login Unsuccessfully');
      });
    }
  }
}
