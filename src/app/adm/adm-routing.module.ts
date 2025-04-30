import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'adm',
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: '**',
        redirectTo: 'adm' // Redirect to home for any unmatched routes
      }
    ]
  },
  /* {
    path: 'login',
    component: LoginComponent // Assuming you have a LoginComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
