import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import ProfilePic from "../../assets/images/maleavatar2.svg";

const { Header, Sider } = Layout;

const LayoutMenu = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <StyledSider collapsible collapsed={collapsed} onCollapse={toggle}>
          <ProfileDiv className="logo">
            <img
              src={ProfilePic}
              alt="profile"
              style={{
                width: "70%",
                height: "100%",
                borderRadius: "100%",
              }}
            />
          </ProfileDiv>
          <StyledMenu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[`${pathname}`]}
          >
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Perfil</Link>
            </Menu.Item>
            <Menu.Item key="/users/1" icon={<VideoCameraOutlined />}>
              <Link to="/users/1"> Users</Link>
            </Menu.Item>
            <Menu.Item
              key="/feedbacks/:id"
              icon={
                <i className="fas fa-users" style={{ marginRight: "8px" }} />
              }
            >
              <Link to="/feedbacks/:id">{collapsed ? "" : "My feedbacks"}</Link>
            </Menu.Item>
            <Menu.Item key="/ranking" icon={<VideoCameraOutlined />}>
              <Link to="/ranking">Ranking</Link>
            </Menu.Item>
          </StyledMenu>
        </StyledSider>
        <Layout className="site-layout">
          <StyledHeader
            className="site-layout-background"
            style={{ padding: 0 }}
          >
            <H3Header>{pathname.slice(1)}</H3Header>
          </StyledHeader>
          <StyledContent>{children}</StyledContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutMenu;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px 20px 0px;
`;

const StyledSider = styled(Sider)`
  background: radial-gradient(
    146.49% 63.82% at 50.14% 50%,
    #7a7a7a 0%,
    #343434 100%
  );
  .ant-menu,
  .ant-menu-dark {
    background: #343434;
  }
  .ant-layout-sider-trigger {
    background: var(--color-fifth-dark);
  }
`;

const StyledContent = styled.div`
  height: 100vh;
`;

const StyledMenu = styled(Menu)`
  background-color: var(--color-primary);
`;

const StyledHeader = styled(Header)``;

const H3Header = styled.h3`
  margin-left: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
`;
