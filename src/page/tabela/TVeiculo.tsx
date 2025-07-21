import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button, notification, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cabecalho from "../../component/Cabecalho";
import { Localizacao } from "../../enum/Localizacao";
import { formatarData } from "../../hook/formatarData";
import { Veiculo } from "../../interface/Veiculo";
import { veiculoService } from "../../service/veiculoService";

const { Title } = Typography;

const TVeiculo: React.FC = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const loadVeiculos = async (status?: Localizacao) => {
    setVeiculos([]);

    try {
      setLoading(true);
      const data = await veiculoService.getAll(status);
      setVeiculos(data);
    } catch (error) {
      console.error("Erro ao carregar funcionários:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVeiculos();
  }, []);

  const paginaAtualizar = (id: number) => {
    navigate(`/veiculo/${id}`);
  };

  const deletar = async (id: number) => {
    try {
      await veiculoService.delete(id);

      loadVeiculos();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Ocorreu um erro ao deletar o funcionário.";

      api.error({
        message: "Erro ao deletar de funcionário",
        description: errorMessage,
        placement: "topRight",
      });
    }
  };

  const columns: TableProps<Veiculo>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "PLACA",
      dataIndex: "placa",
      key: "placa",
    },
    {
      title: "MODELO",
      dataIndex: "modelo",
      key: "modelo",
    },
    {
      title: "STATUS",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "CRIADO",
      key: "criadoEm",
      dataIndex: "criadoEm",
      render: (criadoEm) => <p>{formatarData(criadoEm)}</p>,
    },
    {
      title: "ATUALIZADO",
      key: "atualizadoEm",
      dataIndex: "atualizadoEm",
      render: (atualizadoEm) => <p>{formatarData(atualizadoEm)}</p>,
    },
    {
      title: "Açoes",
      render: (_, record) => (
        <Space>
          <Button onClick={() => paginaAtualizar(record.id!)}>
            <EditOutlined />
          </Button>
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

        <Title level={2}>Veículos</Title>

        <Space style={{ marginBottom: 16 }}>
          <Button onClick={() => loadVeiculos()}>Mostrar Todos</Button>
          <Button onClick={() => loadVeiculos(Localizacao.EM_VIAGEM)}>
            Apenas em Viagem
          </Button>
          <Button onClick={() => loadVeiculos(Localizacao.NO_PATIO)}>
            Apenas no Pátio
          </Button>
        </Space>

        <Table<Veiculo>
          columns={columns}
          dataSource={veiculos}
          loading={loading}
          rowKey="id"
        />
      </Space>
    </div>
  );
};

export default TVeiculo;
