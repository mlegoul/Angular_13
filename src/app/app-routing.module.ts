import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginGuard} from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
