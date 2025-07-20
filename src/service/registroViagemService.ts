import { CriarRetornoDto } from "../dto/CriarRetornoDto";
import { CriarSaidaDto } from "../dto/CriarSaidaDto";
import { api } from "../hook/api";
import { RegistroViagem } from "../interface/RegistroViagem";

export const getAllRegistroViagem = async (): Promise<RegistroViagem[]> => {
  try {
    const response = await api.get("/viagens/registros");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar viagens:", error);
    throw error;
  }
};

export const postSaida = async (dto: CriarSaidaDto): Promise<void> => {
  try {
    const response = await api.post("/viagens/saida", dto);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar saída:", error);
    throw error;
  }
};

export const postRetorno = async (dto: CriarRetornoDto): Promise<void> => {
  try {
    const response = await api.post("/viagens/retorno", dto);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar retorno:", error);
    throw error;
  }
};

export const deletRegistro = async (id: number): Promise<void> => {
  try {
    const response = await api.delete(`/viagens/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar registro:", error);
    throw error;
  }
};

export const registroViagemService = {
  getAll: getAllRegistroViagem,
  postSaida: postSaida,
  postRetorno: postRetorno,
  delete: deletRegistro,
};
