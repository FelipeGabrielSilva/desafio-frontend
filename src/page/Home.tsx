import { Button, Card, Flex, Space, Typography } from "antd";
import type React from "react";
import { Link } from "react-router-dom";
import Cabecalho from "../component/Cabecalho";

const { Text } = Typography;

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
          <Card
            title="Viagem"
            variant="borderless"
            style={{
              width: 370,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1, padding: "16px 0" }}>
              <Text style={{ textAlign: "left", display: "block" }}>
                Painel de controle para gerenciamento de viagens com ações
                rápidas:
              </Text>
            </div>
            <Space
              direction="horizontal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 24,
                marginTop: "auto",
              }}
              wrap={true}
            >
              <Link to="/registro-viagem/saida">
                <Button size="large">Registrar Saída</Button>
              </Link>
              <Link to="/registro-viagem/retorno">
                <Button size="large">Registrar Retorno</Button>
              </Link>
              <Link to="/tabela/registro-viagem">
                <Button size="large">Tabela</Button>
              </Link>
            </Space>
          </Card>

          <Card
            title="Funcionário"
            variant="borderless"
            style={{
              width: 370,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1, padding: "16px 0" }}>
              <Text style={{ textAlign: "left", display: "block" }}>
                Painel para gestão de colaboradores com acesso:
              </Text>
            </div>
            <Space
              direction="horizontal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 24,
                marginTop: "auto",
              }}
            >
              <Link to="/funcionario">
                <Button size="large">Cadastrar</Button>
              </Link>
              <Link to="/tabela/funcionario">
                <Button size="large">Tabela</Button>
              </Link>
            </Space>
          </Card>

          <Card
            title="Veículo"
            variant="borderless"
            style={{
              width: 370,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1, padding: "16px 0" }}>
              <Text style={{ textAlign: "left", display: "block" }}>
                Painel de administração de frota contendo:
              </Text>
            </div>
            <Space
              direction="horizontal"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 24,
                marginTop: "auto",
              }}
            >
              <Link to="/veiculo">
                <Button size="large">Cadastrar</Button>
              </Link>
              <Link to="/tabela/veiculo">
                <Button size="large">Tabela</Button>
              </Link>
            </Space>
          </Card>
        </Flex>
      </div>
    </>
  );
};

export default Home;
