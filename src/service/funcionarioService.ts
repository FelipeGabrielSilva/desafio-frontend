import { CriarFuncionarioDto } from "../dto/CriarFuncionarioDto";
import { UpdateFuncionarioDto } from "../dto/UpdateFuncionarioDto";
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

export const getOne = async (id: number): Promise<Funcionario> => {
  try {
    const response = await api.get(`/funcionario/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionário:", error);
    throw error;
  }
};

export const postFuncionario = async (
  dto: CriarFuncionarioDto
): Promise<Funcionario> => {
  try {
    const response = await api.post("/funcionario", dto);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar funcionário:", error);
    throw error;
  }
};

export const deleteFuncionario = async (id: number): Promise<void> => {
  try {
    const response = await api.delete(`/funcionario/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar funcionário:", error);
    throw error;
  }
};

export const updateFuncionario = async (
  id: number,
  updateDto: UpdateFuncionarioDto
): Promise<void> => {
  try {
    const response = await api.patch(`/funcionario/${id}`, updateDto);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar funcionário:", error);
    throw error;
  }
};

export const funcionarioService = {
  getAll: getAllFuncionarios,
  getOne: getOne,
  post: postFuncionario,
  delete: deleteFuncionario,
  patch: updateFuncionario,
};
