import { Route, Routes } from "react-router";
import Home from "./page/Home";
import CFuncionario from "./page/cadastro/CFuncionario";
import CRetornoViagem from "./page/cadastro/CRetornoViagem";
import CSaidaViagem from "./page/cadastro/CSaidaViagem";
import CVeiculo from "./page/cadastro/CVeiculo";
import TFuncionario from "./page/tabela/TFuncionario";
import TRegistroViagem from "./page/tabela/TRegistroViagem";
import TVeiculo from "./page/tabela/TVeiculo";
import AFuncionario from "./page/atualizar/AFuncionario";
import AVeiculo from "./page/atualizar/AVeiculo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<CFuncionario />} />
      <Route path="/funcionario/:id" element={<AFuncionario />} />
      <Route path="/veiculo" element={<CVeiculo />} />
      <Route path="/veiculo/:id" element={<AVeiculo />} />
      <Route path="/registro-viagem/saida" element={<CSaidaViagem />} />
      <Route path="/registro-viagem/retorno" element={<CRetornoViagem />} />
      <Route path="/tabela/funcionario" element={<TFuncionario />} />
      <Route path="/tabela/veiculo" element={<TVeiculo />} />
      <Route path="/tabela/registro-viagem" element={<TRegistroViagem />} />
    </Routes>
  );
}

export default App;
