import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.controls.email.value == 'a@gmail.com' && this.loginForm.controls.password.value == 'pw') {
      this.router.navigate(['admin']);
    } else if (this.loginForm.controls.email.value == 'u@gmail.com' && this.loginForm.controls.password.value == 'pw') {
      this.router.navigate(['user']);
    } else {
      this.invalidLogin = true;
    }
  }

  gotoDasboard() {
    this.router.navigate(['/user']);
  }

}
