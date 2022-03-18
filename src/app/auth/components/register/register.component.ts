import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { registerAction } from '../../store/actions';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selctors';
// import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../../interfaces/register-request';
import { BackendErros } from 'src/app/interfaces/backend-erros';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // MARK: - Properties
  form!: FormGroup;
  isSubmitting$?: Observable<boolean>;
  backendError$?: Observable<BackendErros | null>;

  // MARK: - Lifecycle
  constructor(
    private fb: FormBuilder,
    private store: Store // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  // MARK: - Methods
  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendError$ = this.store.pipe(select(validationErrorsSelector));
    console.log('hello initializeValues');
  }

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    console.log('hello initializeForm');
  }

  onSubmit() {
    console.log('submit', this.form.value);
    const request: RegisterRequest = {
      user: this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
    // this.authService.register(this.form.value).subscribe((resp) => {
    //   console.log(resp);
    // });
  }
}
