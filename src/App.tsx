import { Route, Routes } from "react-router";
import Home from "./page/Home";
import CFuncionario from "./page/cadastro/CFuncionario";
import CVeiculo from "./page/cadastro/CVeiculo";
import CRegistroViagem from "./page/cadastro/CRegistroViagem";
import TFuncionario from "./page/tabela/TFuncionario";
import TVeiculo from "./page/tabela/TVeiculo";
import TRegistroViagem from "./page/tabela/TRegistroViagem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<CFuncionario />} />
      <Route path="/veiculo" element={<CVeiculo />} />
      <Route path="/registro-viagem" element={<CRegistroViagem />} />
      <Route path="/tabela/funcionario" element={<TFuncionario />} />
      <Route path="/tabela/veiculo" element={<TVeiculo />} />
      <Route path="/tabela/registro-viagem" element={<TRegistroViagem />} />
    </Routes>
  );
}

export default App;
