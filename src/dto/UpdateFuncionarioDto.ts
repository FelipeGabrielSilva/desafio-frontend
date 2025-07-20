import { Categoria } from "../enum/Categoria";

export interface UpdateFuncionarioDto {
  nome: string;
  email: string;
  cnh: string;
  categoria: Categoria;
}
