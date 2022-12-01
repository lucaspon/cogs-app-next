import { Navbar, Dropdown, Avatar } from "flowbite-react";

export default function Nav() {
  return (
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            COGS APP Alpha
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Dropdown label="Cadastros" inline={true}>
            <Dropdown.Item>Insumos</Dropdown.Item>
            <Dropdown.Item>Produtos</Dropdown.Item>
            <Dropdown.Item>Lotes</Dropdown.Item>
            {/* <Dropdown.Divider/> */}
            <Dropdown.Item>Vendas</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Estoques" inline={true}>
            <Dropdown.Item>Insumos</Dropdown.Item>
            <Dropdown.Item>Produtos</Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
  );
}
