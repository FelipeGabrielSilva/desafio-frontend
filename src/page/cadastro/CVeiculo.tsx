import { Input, notification, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import Cabecalho from "../../component/Cabecalho";
import { CriarVeiculoDto } from "../../dto/CriarVeiculoDto";
import { veiculoService } from "../../service/veiculoService";

const CVeiculo: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const formik = useFormik({
    initialValues: {
      placa: "",
      marca: "",
      modelo: "",
    },
    onSubmit: async (values: CriarVeiculoDto) => {
      try {
        await veiculoService.post(values);

        api.success({
          message: "Sucesso!",
          description: `Veículo com a placa "${values.placa}" criado com sucesso.`,
          placement: "topRight",
        });

        formik.resetForm();
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          "Ocorreu um erro ao criar o veículo.";

        api.error({
          message: "Erro no cadastro de veículo",
          description: errorMessage,
          placement: "topRight",
        });
      }
    },
  });

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
        {contextHolder}

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            width: "auto",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Space direction="vertical">
            <label>Placa do veículo:</label>
            <Input
              id="placa"
              name="placa"
              type="placa"
              placeholder="Ex: ABC1234"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.placa}
            />
          </Space>

          <Space direction="vertical">
            <label>Marca:</label>
            <Input
              width={280}
              id="marca"
              name="marca"
              type="marca"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.marca}
            />
          </Space>

          <Space direction="vertical">
            <label>Modelo:</label>
            <Input
              width={280}
              id="modelo"
              name="modelo"
              type="modelo"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.modelo}
            />
          </Space>

          <button type="submit" style={{ width: "15%" }}>
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CVeiculo;
