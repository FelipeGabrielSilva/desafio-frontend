import { api } from "../hook/api";
import { Funcionario } from "../interface/Funcionario";

export const getAllFuncionarios = async (): Promise<Funcionario[]> => {
  try {
    const response = await api.get("/funcionario");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    throw error;
  }
};

export const funcionarioService = {
  getAll: getAllFuncionarios,
};
