import { api } from "../hook/api";
import { Veiculo } from "../interface/Veiculo";

export const getAllVeiculo = async (): Promise<Veiculo[]> => {
  try {
    const response = await api.get("/veiculos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar veiculos:", error);
    throw error;
  }
};

export const veiculoService = {
  getAll: getAllVeiculo,
};
