import { Typography } from "antd";
import type React from "react";

const { Text } = Typography;

const Cabecalho: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "80px",
        background: "#006400",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          background: "#006400",
        }}
      >
        <Text style={{ color: "white", fontSize: "16px" }}>Funcionário</Text>
        <Text style={{ color: "white", fontSize: "16px" }}>Veículo</Text>
        <Text style={{ color: "white", fontSize: "16px" }}>Registro de Viagem</Text>
      </div>
    </div>
  );
};

export default Cabecalho;
