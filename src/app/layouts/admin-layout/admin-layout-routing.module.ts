import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/gaurds/auth.guards';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRouting: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('../../pages/dashboard/dashboard.module').then(
          (m) => m.DashboardModule
        ),
        data: { title: 'Dashboard', display:false, href:"dashboard" },
      },
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRouting)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
