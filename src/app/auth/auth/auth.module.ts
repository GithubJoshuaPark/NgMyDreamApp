import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from '../components/register/register.component';
import { BackendErrorMsgComponent } from '../components/backend-error-msg/backend-error-msg.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { EffectsModule } from '@ngrx/effects';

import { RegisterEffectService } from '../effects/register-effect.service';
import { PersistanceService } from '../services/persistance.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffectService]),
  ],
  exports: [BackendErrorMsgComponent],
  declarations: [RegisterComponent, BackendErrorMsgComponent],
  providers: [PersistanceService],
})
export class AuthModule {}
