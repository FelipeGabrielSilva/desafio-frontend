import type React from "react";
import Drop from "./Drop";
import DropViagem from "./DropViagem";

const Cabecalho: React.FC = () => {
  return (
    <div
      style={{
        height: "80px !important",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: "80px",
        alignItems: "center",
        background: "#693382",
      }}
    >
      <a href="/">
        <img
          src="src\img\logo.png"
          alt="Logo da empresa"
          width="100"
          height="70"
        />
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Drop pagina="Funcionário" rota="funcionario" />
        <Drop pagina="Veículo" rota="veiculo" />
        <DropViagem pagina="Registro Viagem" rota="registro-viagem" />
      </div>
    </div>
  );
};

export default Cabecalho;
