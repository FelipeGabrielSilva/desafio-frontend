import { Image, Typography } from "antd";
import type React from "react";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Cabecalho: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: "80px",
        alignItems: "center",
        height: "80px",
        background: "#C4C4C4",
      }}
    >
      <Link to="/">
        <img
          src="src\img\logo.png"
          alt="A description of the image"
          width="100"
          height="70"
        />
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Link to="/funcionario">
          <Text
            style={{
              fontSize: "16px",
            }}
          >
            Funcionário
          </Text>
        </Link>

        <Link to="/veiculo">
          <Text
            style={{
              fontSize: "16px",
              textDecoration: "none",
              textDecorationLine: "none",
            }}
          >
            Veículo
          </Text>
        </Link>

        <Link to="/registro-viagem">
          <Text
            style={{
              fontSize: "16px",
              textDecoration: "none",
              textDecorationLine: "none",
            }}
          >
            Registro de Viagem
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default Cabecalho;
