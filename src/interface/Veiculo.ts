import { Localizacao } from "../enum/Localizacao";

export interface Veiculo {
  id?: number;
  placa: string;
  marca: string;
  modelo: string;
  status?: Localizacao;
  criadoEm?: Date;
  atualizadoEm?: Date;
}
