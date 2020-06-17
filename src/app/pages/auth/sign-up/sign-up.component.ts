import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {take, tap} from 'rxjs/operators';
import {SnackBarService} from '../../../services/snack-bar.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
    );
  }

  sendSignUpForm() {
    const values = this.signUpForm.value;
    return this.authService.createAccount$(values.email, values.password, values.username)
      .pipe(
        take(1),
        tap(() => {
          this.signUpForm.reset();
          this.snackBarService.validSignUpUser();
        }),
      )
      .subscribe();
  }
}
