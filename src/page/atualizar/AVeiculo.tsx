import { Input, Select, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cabecalho from "../../component/Cabecalho";
import { UpdateVeiculoDto } from "../../dto/UpdateVeiculoDto";
import { Localizacao } from "../../enum/Localizacao";
import { getEnumOptions } from "../../hook/getEnum";
import { Veiculo } from "../../interface/Veiculo";
import { veiculoService } from "../../service/veiculoService";

const validate = (f: Partial<Veiculo>) => {
  const errors: any = {};

  if (!f.placa) {
    errors.placa = "Obrigatório";
  } else if (f.placa.length < 7 || f.placa.length > 7) {
    errors.nome = "O nome deve ter no máximo 7 caracteres.";
  }

  if (!f.marca) {
    errors.marca = "Obrigatório";
  } else if (f.marca.length > 11 || f.marca.length < 11) {
    errors.marca = "A marca deve ter 2 e 20 caracteres.";
  }

  if (!f.modelo) {
    errors.modelo = "Obrigatório";
  } else if (f.modelo.length > 11 || f.modelo.length < 11) {
    errors.modelo = "A modelo deve ter 2 e 20 caracteres.";
  }

  return errors;
};

const AVeiculo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [submit, setSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      placa: "",
      marca: "",
      modelo: "",
      status: undefined,
    },
    validate,
    onSubmit: async (values: UpdateVeiculoDto) => {
      if (!id) return;
      try {
        await veiculoService.patch(Number(id), values);
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadFuncionario = async () => {
      try {
        setLoading(true);
        const data = await veiculoService.getOne(Number(id));

        if (data) {
          formik.setValues(data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    loadFuncionario();
  }, [id]);

  const opt = getEnumOptions(Localizacao);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    formik.handleSubmit(e);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Carregando dados do veículo...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Cabecalho />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            width: "auto",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Space direction="vertical">
            <label>Placa:</label>
            <Input
              id="placa"
              name="placa"
              type="placa"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.placa}
            />
            {submit && formik.errors.placa ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.placa}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Marca:</label>
            <Input
              id="marca"
              name="marca"
              type="marca"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.marca}
            />
            {submit && formik.errors.marca ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.marca}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Modelo:</label>
            <Input
              id="modelo"
              name="modelo"
              type="modelo"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.modelo}
            />
            {submit && formik.errors.modelo ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.modelo}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Status:</label>
            <Select
              id="status"
              options={opt}
              style={{ width: "200px" }}
              onChange={(value) => formik.setFieldValue("status", value)}
              value={formik.values.status}
            />
            {submit && formik.errors.status ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.status}
              </p>
            ) : null}
          </Space>

          <button type="submit" style={{ width: "15%" }}>
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AVeiculo;
