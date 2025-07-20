import type { TableProps } from "antd";
import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";
import { Veiculo } from "../../interface/Veiculo";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { veiculoService } from "../../service/veiculoService";
import { useNavigate } from "react-router";

const TVeiculo: React.FC = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVeiculos = async () => {
      try {
        setLoading(true);
        const data = await veiculoService.getAll();
        setVeiculos(data);
      } catch (error) {
        console.error("Erro ao carregar funcionários:", error);
      } finally {
        setLoading(false);
      }
    };

    loadVeiculos();
  }, []);

  const paginaAtualizar = (id: number) => {
    navigate(`/veiculo/${id}`);
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
          <Button danger onClick={() => paginaAtualizar(record.id!)}>
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
        gap: "40px",
      }}
    >
      <Cabecalho />

      <Table<Veiculo>
        columns={columns}
        dataSource={veiculos}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
};

export default TVeiculo;
