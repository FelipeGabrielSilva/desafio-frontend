import type { TableProps } from "antd";
import { Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";
import { RegistroViagem } from "../../interface/RegistroViagem";
import { registroViagemService } from "../../service/registroViagemService";

const { Title } = Typography;

const columns: TableProps<RegistroViagem>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "PLACA",
    dataIndex: ["veiculo", "placa"],
    key: "placa",
  },
  {
    title: "MOTORISTA",
    dataIndex: ["motorista", "nome"],
    key: "nome",
  },
  {
    title: "SAÍDA",
    key: "saida",
    dataIndex: "saida",
    render: (saida) => <p>{formatarData(saida)}</p>,
  },
  {
    title: "RETORNO",
    key: "retorno",
    dataIndex: "retorno",
    render: (retorno) =>
      retorno ? <p>{formatarData(retorno)}</p> : "Em viagem",
  },
  {
    title: "PASSAGEIROS",
    key: "passageiros",
    dataIndex: "passageiros",
    render: (passageiros) => (passageiros ? passageiros : "Sem passageiros"),
  },
];

const TRegistroViagem: React.FC = () => {
  const [viagens, setViagens] = useState<RegistroViagem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadViagens = async () => {
      try {
        setLoading(true);
        const data = await registroViagemService.getAll();
        setViagens(data);
      } catch (error) {
        console.error("Erro ao carregar viagens:", error);
      } finally {
        setLoading(false);
      }
    };

    loadViagens();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Cabecalho />

      <Space
        direction="vertical"
        size="large"
        style={{ width: "90%", maxWidth: "1200px", marginTop: "40px" }}
      >
        <Title level={2}>Registros de Viagem</Title>

        <Table<RegistroViagem>
          columns={columns}
          dataSource={viagens}
          loading={loading}
          rowKey="id"
        />
      </Space>
    </div>
  );
};

export default TRegistroViagem;
