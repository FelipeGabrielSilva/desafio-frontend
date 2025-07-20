import { Input, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import { useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { CriarRetornoDto } from "../../dto/CriarRetornoDto";
import { registroViagemService } from "../../service/registroViagemService";

const validate = (f: CriarRetornoDto) => {
  const errors: any = {};

  if (!f.placa) {
    errors.placa = "Obrigatório";
  }

  return errors;
};

const CRetornoViagem: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      placa: "",
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: CriarRetornoDto) => {
      try {
        let res = await registroViagemService.postRetorno(values);
        console.log(res);
      } catch (error) {
        console.error("Erro ao criar registro:", error);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    formik.handleSubmit(e);
  };

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
            <label>Placa do veículo:</label>
            <Input
              id="placa"
              name="placa"
              type="text"
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

          <button type="submit" style={{ width: "15%" }}>
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CRetornoViagem;
