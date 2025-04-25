import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss']
})
export class ChurchComponent {
  constructor(private readonly router: Router) { }

  showMembrosList: boolean = false;

  membrosList() {
    this.showMembrosList = !this.showMembrosList;
  }

  ngOnInit(): void {
    console.log('chegou aqui');
    // Any initialization logic can go here
  }

  // Add any methods or properties needed for the component here
}
