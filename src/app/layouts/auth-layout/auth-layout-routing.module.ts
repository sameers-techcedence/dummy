import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthGuard } from 'src/app/gaurds/un-auth.guard';
import { AuthLayoutComponent } from './auth-layout.component';

export const AuthLayoutRouting: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate:[UnAuthGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
        import('./pages/login/login.module').then(
          (m) => m.LoginModule
        )
    }
]
}
];

@NgModule({
imports: [RouterModule.forChild(AuthLayoutRouting)],
exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }