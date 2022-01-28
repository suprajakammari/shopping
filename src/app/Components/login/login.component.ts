import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  formSubmitted = false;
  constructor() { }

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
      console.log(this.login, 'sdfsdf');
    }
  }

}
