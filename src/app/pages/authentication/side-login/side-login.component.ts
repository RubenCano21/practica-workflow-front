import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {

  credentials = { username: '', password: '' };

  constructor(private router: Router,
              private loginService: LoginService) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit(): void {
    this.loginService.login(this.credentials.username, this.credentials.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        alert(response.message("Login successful"));
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        alert(error.error.message || "Error en el inicio de sesión");
      }
    });
    // console.log(this.form.value);
  }

  protected readonly FormGroup = FormGroup;
}
