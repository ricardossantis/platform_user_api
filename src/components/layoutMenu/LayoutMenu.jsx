import React, { useState } from "react";
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
import "./LayoutMenu.css";
import ProfilePic from "../../assets/images/undraw_profile_pic_ic5t.png";

const { Header, Sider, Content } = Layout;

const LayoutMenu = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <StyledSider trigger={null} collapsible collapsed={collapsed}>
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
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Perfil
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <i className="fas fa-users" style={{ marginRight: "8px" }} />
              }
            >
              My feedbacks
            </Menu.Item>
          </Menu>
        </StyledSider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content className="site-layout-background">{children}</Content>
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
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
`;

const StyledSider = styled(Sider)`
  background-color: var(--color-primary);
`;
