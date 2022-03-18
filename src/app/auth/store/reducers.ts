import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth-state';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions';
import { isSubmittingSelector } from './selctors';

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  validationError: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationError: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: true,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors,
    })
  )
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
