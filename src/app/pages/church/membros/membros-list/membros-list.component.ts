import { Component } from '@angular/core';
import { PessoasService } from 'src/app/Service/pessoas.service';
import { Pessoa } from 'src/app/shared/interfaces/pessoa.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-membros-list',
  templateUrl: './membros-list.component.html',
  styleUrls: ['./membros-list.component.scss']
})
export class MembrosListComponent {
  constructor(private readonly pessoasService: PessoasService) { }

  displayedColumns: string[] = ['nome', 'data_nascimento', 'situacao', 'email', 'telefone', 'estado_civil', 'sexo'];
  dataSource = ELEMENT_DATA;
  membrosList: Pessoa[] = [];

  addNewMembro: boolean = false;

  listarMembros() {
    this.pessoasService.getAllPessoas().subscribe({
      next: (response: Pessoa[]) => {
        this.membrosList = response;
        console.log(this.membrosList);
      },
      error: (error) => {
        console.error('Error fetching membros:', error);
      },
      complete: () => {
        console.log('Membros fetched successfully!');
      }
    });
  }

  incluirMembro() {


  }

  addData() {

    this.addNewMembro = !this.addNewMembro;

  }

  removeData() {
    console.log('function removeData called');
  }

  ngOnInit(): void {
    this.listarMembros();
  }



}
