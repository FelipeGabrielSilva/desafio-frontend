import { Route, Routes } from "react-router";
import Home from "./page/Home";
import CFuncionario from "./page/CFuncionario";
import CVeiculo from "./page/CVeiculo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<CFuncionario />} />
      <Route path="/veiculo" element={<CVeiculo />} />
    </Routes>
  );
}

export default App;
