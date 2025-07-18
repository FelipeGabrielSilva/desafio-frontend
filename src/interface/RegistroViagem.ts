import { Funcionario } from "./Funcionario";
import { Veiculo } from "./Veiculo";

export interface RegistroViagem {
  id?: number;
  veiculo: Veiculo;
  motorista: Funcionario;
  saida: Date;
  destino: string;
  retorno?: Date;
  passageiros: string;
  criadoEm?: Date;
  atualizadoEm?: Date;
}
