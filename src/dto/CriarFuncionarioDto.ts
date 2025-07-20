import { Categoria } from "../enum/Categoria";

export interface CriarFuncionarioDto {
  nome: string;
  email: string;
  cnh: string;
  categoria: Categoria;
}
