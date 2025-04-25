import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private readonly router: Router) { }

  openHome() {
    console.log('Home menu clicked');

    this.router.navigate(['/']);
  }

  openChurch() {
    console.log('Church menu clicked');

    this.router.navigate(['/church']);
  }

  openSmAcai() {
    console.log('Church menu clicked');

    this.router.navigate(['/sm-acai']);
  }

  openBrazilianAutomoveis() {
    console.log('Church menu clicked');

    this.router.navigate(['/brazilian-automoveis']);
  }

  // Add any methods or properties needed for the component here
}
