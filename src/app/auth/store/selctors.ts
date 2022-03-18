import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state';
import { AuthState } from 'src/app/interfaces/auth-state';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationError
);
