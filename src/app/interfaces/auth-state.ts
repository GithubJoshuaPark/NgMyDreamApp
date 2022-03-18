import { CurrentUser } from './current-user';
import { BackendErros } from './backend-erros';
export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationError: BackendErros | null;
}
