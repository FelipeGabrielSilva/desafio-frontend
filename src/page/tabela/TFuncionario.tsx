import type { TableProps } from "antd";
import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";
import { Funcionario } from "../../interface/Funcionario";
import { funcionarioService } from "../../service/funcionarioService";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const TFuncionario: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFuncionarios = async () => {
      try {
        setLoading(true);
        const data = await funcionarioService.getAll();
        setFuncionarios(data);
      } catch (error) {
        console.error("Erro ao carregar funcionários:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFuncionarios();
  }, []);

  const paginaAtualizar = (id: number) => {
    navigate(`/funcionario/${id}`);
  };

  const columns: TableProps<Funcionario>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "NOME",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "E-MAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CNH",
      key: "cnh",
      dataIndex: "cnh",
    },
    {
      title: "CATEGORIA",
      key: "categoria",
      dataIndex: "categoria",
    },
    {
      title: "Criado",
      key: "criadoEm",
      dataIndex: "criadoEm",
      render: (criadoEm) => <p>{formatarData(criadoEm)}</p>,
    },
    {
      title: "Atualizado",
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

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table<Funcionario>
          columns={columns}
          dataSource={funcionarios}
          loading={loading}
          rowKey="id"
          style={{ width: "90%" }}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default TFuncionario;
