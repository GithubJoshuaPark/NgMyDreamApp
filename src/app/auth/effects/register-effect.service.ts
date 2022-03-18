import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../store/actions';
import { AuthService } from '../services/auth.service';
import { CurrentUser } from '../../interfaces/current-user';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from '../services/persistance.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterEffectService {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            // window.localStorage.setItem('accessToken', currentUser.token);
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),

          // in case failure
          catchError((errorResp: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResp.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
