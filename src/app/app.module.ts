import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { SmAcaiComponent } from './pages/sm-acai/sm-acai.component';
import { ChurchComponent } from './pages/church/church.component';
import { BrazilianAutomoveisComponent } from './pages/brazilian-automoveis/brazilian-automoveis.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './main/menu/menu.component';
import { MembrosFormComponent } from './pages/church/membros/membros-form/membros-form.component';
import { MembrosListComponent } from './pages/church/membros/membros-list/membros-list.component';
import { AdmModule } from './adm/adm.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SmAcaiComponent,
    ChurchComponent,
    BrazilianAutomoveisComponent,
    MenuComponent,
    MembrosFormComponent,
    MembrosListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    AdmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
