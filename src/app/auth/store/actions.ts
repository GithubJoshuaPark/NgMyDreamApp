import { createAction, props } from '@ngrx/store';
import { ActionType } from './action-type.enum';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ username: string; password: string; email: string }>()
);
