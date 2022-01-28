import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  formSubmitted = false;
  constructor() { }

  ngOnInit(): void {
    this.register = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confrimpassword: new FormControl('', [Validators.required])
    });
  }
  get f(){ return this.register.controls; }
  submit(): void{
    this.formSubmitted = true;
    if (this.register.valid) {
      console.log(this.register, 'sdfsdf');
    }
  }

}
