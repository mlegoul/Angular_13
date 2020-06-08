import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['test@gmail.com' || null, [Validators.required, Validators.email]],
      password: ['toto' || null, [Validators.required]],
    });
  }

  sendLoginForm() {
    const values = this.loginForm.value;
    return this.authService.loginFromService$(values.email, values.password)
      .pipe(
        take(1),
        tap(x => console.log(x)),
      )
      .subscribe();
  }

}
