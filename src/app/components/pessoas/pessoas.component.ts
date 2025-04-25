import { Component } from '@angular/core';
import { PessoasService } from 'src/app/Service/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent {
  constructor(private readonly pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.getAllMembros();
  }

  getAllMembros() {
    this.pessoasService.getAllPessoas().subscribe({
      next: (response: any[]) => {
        console.log('response', response);
      },
      error: () => { },
      complete: () => { },
    })
  }
}
