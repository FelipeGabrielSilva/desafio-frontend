import { CriarVeiculoDto } from "../dto/CriarVeiculoDto";
import { UpdateVeiculoDto } from "../dto/UpdateVeiculoDto";
import { Localizacao } from "../enum/Localizacao";
import { api } from "../hook/api";
import { Veiculo } from "../interface/Veiculo";

export const getAllVeiculo = async (
  status?: Localizacao
): Promise<Veiculo[]> => {
  try {
    const response = await api.get("/veiculos", {
      params: {
        status: status,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar veiculos:", error);
    throw error;
  }
};

export const getOne = async (id: number): Promise<Veiculo> => {
  try {
    const response = await api.get(`/veiculos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar veiculo:", error);
    throw error;
  }
};

export const postVeiculo = async (dto: CriarVeiculoDto): Promise<Veiculo> => {
  try {
    const response = await api.post("/veiculos", dto);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar veiculo:", error);
    throw error;
  }
};

export const deleteVeiculo = async (id: number): Promise<void> => {
  try {
    const response = await api.delete(`/veiculos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar veiculo:", error);
    throw error;
  }
};

export const updateVeiculo = async (
  id: number,
  updateDto: UpdateVeiculoDto
): Promise<void> => {
  try {
    const response = await api.patch(`/veiculos/${id}`, updateDto);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar veículo:", error);
    throw error;
  }
};

export const veiculoService = {
  getAll: getAllVeiculo,
  getOne: getOne,
  post: postVeiculo,
  delete: deleteVeiculo,
  patch: updateVeiculo,
};
