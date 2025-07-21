import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface DropProps {
  pagina: string;
  rota: string;
}

const DropViagem: React.FC<DropProps> = ({ pagina, rota }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={`/${rota}/saida`}>Saída</Link>,
    },
    {
      key: "2",
      label: <Link to={`/${rota}/retorno`}>Retorno</Link>,
    },
    {
      key: "3",
      label: <Link to={`/tabela/${rota}`}>Tabela</Link>,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space style={{ color: "white" }}>
          {pagina}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropViagem;
