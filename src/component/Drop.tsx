import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

interface DropProps {
  pagina: string;
  rota: string;
}

const Drop: React.FC<DropProps> = ({ pagina, rota }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={`/${rota}`}>Cadastro</Link>,
    },
    {
      key: "2",
      label: <Link to={`/tabela/${rota}`}>Tabela</Link>,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space style={{color: "white"}}>
          {pagina}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Drop;
