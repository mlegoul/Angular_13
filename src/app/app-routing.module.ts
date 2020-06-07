import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
