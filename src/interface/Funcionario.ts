import type { Categoria } from "../enum/Categoria";

export interface Funcionario {
  number?: IdleDeadline;
  nome: string;
  email: string;
  cnh: string;
  categoria: Categoria;
  criadoEm?: Date;
  atualizadoEm?: Date;
}
