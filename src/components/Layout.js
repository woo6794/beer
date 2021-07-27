import styled from "styled-components";
import { Layout as AntdLayout, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link, useHistory } from "react-router-dom";
const { Header } = AntdLayout;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to={"/home"}>Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/beerlist"}>BeerList</Link>
    </Menu.Item>
  </Menu>
);

const Layout = ({ children }) => {
  const history = useHistory();
  console.log(history);
  return (
    <LayoutContainer className="layout">
      <HeaderContainer>
        <Title>Glass Beer</Title>
        <DropdownStyle overlay={menu} placement="bottomCenter" arrow>
          <Button>
            Pages
            <DownOutlined />
          </Button>
        </DropdownStyle>
      </HeaderContainer>
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled(AntdLayout)`
  height: 100%;
  background-color: #ffffff !important;
`;

const HeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e9e6eb !important;
`;

const DropdownStyle = styled(Dropdown)`
  padding: 15px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #ffc522;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 50px;
  color: #ffbc00;
`;

export default Layout;
