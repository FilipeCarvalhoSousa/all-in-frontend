import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  image = {
    src: 'assets/img/all-In.svg',
    alt: 'Logo All In criada no canva',
    title: 'All In Logo'
  }

  title = 'All In - Management System';
  subtitle = 'Tudo que você precisa para gerenciar seus negócios está aqui!';
  description = '+55 61-98174-7292 |  filipecarvalhosousa@gmail.com  |  filipecarvalho.com.br';

}
