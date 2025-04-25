export interface Pessoa {
  nome: string;
  data_nascimento: Date;
  situacao: string;
  cpf: string;
  email: string;
  telefone: string;
  estado_civil: number;
  sexo: number;
  endereco: Endereco;
}

interface Endereco {
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}
