import { DatePicker, Input, Select, Space } from "antd";
import { useFormik } from "formik";
import type React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { CriarRegistroDto } from "../../dto/CriarRegistroDto";
import { Funcionario } from "../../interface/Funcionario";
import { funcionarioService } from "../../service/funcionarioService";

const validate = (f: CriarRegistroDto) => {
  const errors: any = {};

  if (!f.placa_veiculo) {
    errors.placa_veiculo = "Obrigatório";
  }

  if (!f.id_motorista) {
    errors.id_motorista = "Obrigatório";
  }

  if (!f.saida) {
    errors.saida = "Obrigatório";
  }

  if (!f.destino) {
    errors.destino = "Obrigatório";
  }

  if (!f.passageiros) {
    errors.passageiros = "Obrigatório";
  }

  return errors;
};

const CRegistroViagem: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [motorista, setMotorista] = useState<Funcionario[]>([]);

  useEffect(() => {
    const loadMotoristas = async () => {
      try {
        const motoristas = await funcionarioService.getAll();
        setMotorista(motoristas);
      } catch (error) {
        console.error("Erro ao carregar motoristas:", error);
      }
    };

    loadMotoristas();
  }, []);

  const formik = useFormik({
    initialValues: {
      placa_veiculo: "",
      id_motorista: 0,
      saida: new Date(),
      destino: "",
      passageiros: "",
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        // await registroViagemService.create(values);
        alert(JSON.stringify(values, null, 2));
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
              id="placa_veiculo"
              name="placa_veiculo"
              type="text"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.placa_veiculo}
            />
            {submit && formik.errors.placa_veiculo ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.placa_veiculo}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Motorista:</label>
            <Select
              id="id_motorista"
              options={motorista}
              style={{ width: "400px" }}
              onChange={(value) => formik.setFieldValue("id_motorista", value)}
              value={formik.values.id_motorista}
            />
            {submit && formik.errors.id_motorista ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.id_motorista}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Data de saída:</label>
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              onChange={(date) => formik.setFieldValue("saida", date)}
              style={{ width: "400px" }}
            />
          </Space>

          <Space direction="vertical">
            <label>Destino:</label>
            <Input
              id="destino"
              name="destino"
              type="destino"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.destino}
            />
            {submit && formik.errors.destino ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.destino}
              </p>
            ) : null}
          </Space>

          <Space direction="vertical">
            <label>Passageiros:</label>
            <Input
              id="passageiros"
              name="passageiros"
              type="passageiros"
              style={{ width: "400px" }}
              onChange={formik.handleChange}
              value={formik.values.passageiros}
            />
            {submit && formik.errors.passageiros ? (
              <p style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.passageiros}
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

export default CRegistroViagem;
