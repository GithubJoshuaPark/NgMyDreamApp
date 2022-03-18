import { createAction, props } from '@ngrx/store';
import { ActionType } from './action-type.enum';
import { RegisterRequest } from '../../interfaces/register-request';
import { CurrentUser } from '../../interfaces/current-user';
import { BackendErros } from '../../interfaces/backend-erros';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: BackendErros }>()
);
