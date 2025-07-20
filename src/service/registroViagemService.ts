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

export const registroViagemService = {
  getAll: getAllRegistroViagem,
};
