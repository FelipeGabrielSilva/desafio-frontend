import { Input, Select, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import Cabecalho from "../../component/Cabecalho";
import { Categoria } from "../../enum/Categoria";
import { getEnumOptions } from "../../hook/getEnum";
import { Funcionario } from "../../interface/Funcionario";
import { useState } from "react";
import { funcionarioService } from "../../service/funcionarioService";

const validate = (f: Funcionario) => {
  const errors: any = {};

  if (!f.nome) {
    errors.nome = "Obrigatório";
  } else if (f.nome.length > 150) {
    errors.nome = "O nome deve ter no máximo 150 caracteres.";
  }

  if (!f.email) {
    errors.email = "Obrigatório";
  } else if (f.email.length > 100) {
    errors.email = "O e-mail deve ter no máximo 100 caracteres.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(f.email)) {
    errors.email = "E-mail informado é inválido.";
  }

  if (!f.cnh) {
    errors.cnh = "Obrigatório";
  } else if (f.cnh.length > 11 || f.cnh.length < 11) {
    errors.cnh = "A CNH deve ter 11 caracteres.";
  }

  if (!f.categoria) {
    errors.categoria = "Obrigatório";
  }

  return errors;
};

const CFuncionario: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cnh: "",
      categoria: Categoria.ACC,
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      await funcionarioService.getAll();
    },
  });

  const opt = getEnumOptions(Categoria);

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
            <label>Nome completo:</label>
            <Input
              id="nome"
              name="nome"
              type="nome"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.nome}
            />
            {submit && formik.errors.nome ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.nome}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>E-mail:</label>
            <Input
              width={280}
              id="email"
              name="email"
              type="email"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {submit && formik.errors.email ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.email}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>CNH:</label>
            <Input
              width={280}
              id="cnh"
              name="cnh"
              type="cnh"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.cnh}
            />
            {submit && formik.errors.cnh ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.cnh}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Categoria:</label>
            <Select
              id="categoria"
              options={opt}
              style={{ width: "200px" }}
              onChange={(value) => formik.setFieldValue("categoria", value)}
              value={formik.values.categoria}
            />
            {submit && formik.errors.categoria ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.categoria}
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

export default CFuncionario;
