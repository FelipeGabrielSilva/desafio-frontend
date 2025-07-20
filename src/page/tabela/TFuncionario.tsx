import type { TableProps } from "antd";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Funcionario } from "../../interface/Funcionario";
import { funcionarioService } from "../../service/funcionarioService";
import Cabecalho from "../../component/Cabecalho";
import { formatarData } from "../../hook/formatarData";

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
];

const TFuncionario: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);

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

      <Table<Funcionario>
        columns={columns}
        dataSource={funcionarios}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
};

export default TFuncionario;
