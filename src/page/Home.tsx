import type React from "react";
import Cabecalho from "../component/Cabecalho";
import { Button, Card, Flex, Space } from "antd";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
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

        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            height: "100%",
          }}
        >
          <Card title="Funcionário" variant="borderless" style={{ width: 300 }}>
            <Space
              direction="horizontal"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/funcionario">
                <Button>Cadastrar</Button>
              </Link>

              <Link to="/tabela/funcionario">
                <Button>Tabela</Button>
              </Link>
            </Space>
          </Card>

          <Card title="Veículo" variant="borderless" style={{ width: 300 }}>
            <Space
              direction="horizontal"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/veiculo">
                <Button>Cadastrar</Button>
              </Link>
              <Link to="/tabela/veiculo">
                <Button>Tabela</Button>
              </Link>
            </Space>
          </Card>

          <Card
            title="Registro de Viagem"
            variant="borderless"
            style={{ width: 300 }}
          >
            <Space
              direction="horizontal"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/registro-viagem">
                <Button>Cadastrar</Button>
              </Link>
              <Link to="/tabela/registro-viagem">
                <Button>Tabela</Button>
              </Link>
            </Space>
          </Card>
        </Flex>
      </div>
    </>
  );
};

export default Home;
