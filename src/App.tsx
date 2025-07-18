import { Button, Card, Flex, Space, Typography } from "antd";
import Cabecalho from "./component/Cabecalho";

const { Text } = Typography;

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          <Space direction="horizontal">
            <Button>Cadastrar</Button>
            <Button>Tabela</Button>
          </Space>
        </Card>

        <Card title="Veículo" variant="borderless" style={{ width: 300 }}>
          <Space direction="horizontal">
            <Button>Cadastrar</Button>
            <Button>Tabela</Button>
          </Space>
        </Card>

        <Card
          title="Registro de Viagem"
          variant="borderless"
          style={{ width: 300 }}
        >
          <Space direction="horizontal">
            <Button>Cadastrar</Button>
            <Button>Tabela</Button>
          </Space>
        </Card>
      </Flex>
    </div>
  );
}

export default App;
