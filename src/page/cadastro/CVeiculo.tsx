import { Input, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import Cabecalho from "../../component/Cabecalho";

const CVeiculo: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      placa: "",
      marca: "",
      modelo: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
