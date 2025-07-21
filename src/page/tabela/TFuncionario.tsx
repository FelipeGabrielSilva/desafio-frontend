import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button, notification, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";
import { Funcionario } from "../../interface/Funcionario";
import { funcionarioService } from "../../service/funcionarioService";

const { Title } = Typography;

const TFuncionario: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

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

  useEffect(() => {
    loadFuncionarios();
  }, []);

  const paginaAtualizar = (id: number) => {
    navigate(`/funcionario/${id}`);
  };

  const deletar = async (id: number) => {
    try {
      await funcionarioService.delete(id);

      loadFuncionarios();
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
        style={{ width: "100%", maxWidth: "1200px", marginTop: "40px" }}
      >
        {contextHolder}

        <Title level={2}>Funcionários</Title>

        <Table<Funcionario>
          columns={columns}
          dataSource={funcionarios}
          loading={loading}
          rowKey="id"
        />
      </Space>
    </div>
  );
};

export default TFuncionario;
