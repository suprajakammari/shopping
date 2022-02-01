import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdetailsService } from '../../../services/userdetails.service';
import * as _ from 'lodash';
import { ValidationService } from '../../../services/validation.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  formSubmitted = false;
  title = 'toaster-not';
  constructor(
    private userdetailsService: UserdetailsService,
    private router: Router,
    private fb: FormBuilder,
    private _validation: ValidationService,
    private notifyService: NotificationService) { }
    validationMessages = {
      username: {
        required: 'Name is required.',
      },
      email: {
        required: 'Email is required.',
        pattern: 'Please provide valid Email ID'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password should be greated then 6 charectors'
      },
      confrimpassword: {
        required: 'Confirm Password is required.',
        mismatch: 'Password and Confirm Password do not match',
        minlength: 'Password should be greated then 6 charectors'
      }
    };

    formErrors: any = {};

    ngOnInit(): void {
    this.register = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this._validation.regex.email)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confrimpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {
      validator: this._validation.matchConfirmItems('password', 'confrimpassword'),
    });
    this.register.valueChanges.subscribe(
      value => {
        this.logValidationErrors();
      }
    );
  }

  logValidationErrors() {
    this.formErrors = this._validation.getValidationErrors(this.register, this.validationMessages);
  }

  get f(){ return this.register.controls; }

  submit(): boolean{
    this.formSubmitted = true;
    if (!this.register.valid) { return false; }
    let payload = this.register.value;
    payload = _.omit(payload, ['confrimpassword']);
    this.userdetailsService.getSignup(this.register.value).subscribe(res => {
      this.notifyService.showSuccess('Register successfully');
      this.router.navigate(['/login']);
    }, (err) => {
      this.notifyService.showError('Register Unsuccessfully');
    });
  }

}
