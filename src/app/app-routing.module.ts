import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SmAcaiComponent } from './pages/sm-acai/sm-acai.component';
import { ChurchComponent } from './pages/church/church.component';
import { BrazilianAutomoveisComponent } from './pages/brazilian-automoveis/brazilian-automoveis.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sm-acai',
        component: SmAcaiComponent
      },
      {
        path: 'church',
        component: ChurchComponent
      },
      {
        path: 'brazilian-automoveis',
        component: BrazilianAutomoveisComponent
      },
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
