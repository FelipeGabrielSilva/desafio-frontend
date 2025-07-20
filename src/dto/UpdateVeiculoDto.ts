import { Localizacao } from "../enum/Localizacao";

export interface UpdateVeiculoDto {
  placa: string;
  marca: string;
  modelo: string;
  status?: Localizacao;
}
