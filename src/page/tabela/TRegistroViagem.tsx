import type { TableProps } from "antd";
import { Button, notification, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";
import { RegistroViagem } from "../../interface/RegistroViagem";
import { registroViagemService } from "../../service/registroViagemService";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TRegistroViagem: React.FC = () => {
  const [viagens, setViagens] = useState<RegistroViagem[]>([]);
  const [loading, setLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();

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

  useEffect(() => {
    loadViagens();
  }, []);

  const deletar = async (id: number) => {
    try {
      await registroViagemService.delete(id);

      loadViagens();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Ocorreu um erro ao deletar o registro.";

      api.error({
        message: "Erro ao deletar o registro",
        description: errorMessage,
        placement: "topRight",
      });
    }
  };

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
    {
      title: "AÇÕES",
      render: (_, record) => (
        <Space>
          <Button danger onClick={() => deletar(record.id!)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

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
        {contextHolder}

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
