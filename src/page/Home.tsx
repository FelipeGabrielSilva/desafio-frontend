import type React from "react";
import Cabecalho from "../component/Cabecalho";
import { Button, Card, Flex, Space } from "antd";

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
              <Button>Cadastrar</Button>
              <Button>Tabela</Button>
            </Space>
          </Card>

          <Card title="Veículo" variant="borderless" style={{ width: 300 }}>
            <Space
              direction="horizontal"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button>Cadastrar</Button>
              <Button>Tabela</Button>
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
              <Button>Cadastrar</Button>
              <Button>Tabela</Button>
            </Space>
          </Card>
        </Flex>
      </div>
    </>
  );
};

export default Home;
