import React, { useState, useEffect } from "react";
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
import profilePicMale from "../../assets/images/maleAvatar.svg";
import profilePicFemale from "../../assets/images/femaleAvatar.svg";
import Logout from "../logout/Logout.jsx";
import Api from "../../services/api.js";

const { Header, Sider } = Layout;

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const LayoutMenu = ({ children }) => {
  const { pathname } = useLocation();
  const [profilePic, setProfilePic] = useState(profilePicMale);
  console.log(pathname);

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("authToken");
    let profilePic;
    Api.get(`users/${id}`, {
      headers: { Authorization: token },
    }).then((res) =>
      setProfilePic(
        res.data.image_url === "male" ? profilePicMale : profilePicFemale
      )
    );
  });

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const id = window.localStorage.getItem("id");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <StyledSider collapsible collapsed={collapsed} onCollapse={toggle}>
          <ProfileDiv className="logo">
            <img
              src={profilePic}
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
            <Menu.Item
              key={`/users/${pathname.slice(7)}`}
              icon={<VideoCameraOutlined />}
            >
              <Link to="/users/1"> Users</Link>
            </Menu.Item>
            <Menu.Item
              key={`/feedbacks/${pathname.slice(11)}`}
              icon={
                <i className="fas fa-users" style={{ marginRight: "8px" }} />
              }
            >
              <Link to={`/feedbacks/${id}`}>
                {collapsed ? "" : "My feedbacks"}
              </Link>
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
            <H3Header>{pathname.slice(1).capitalize()}</H3Header>
            <Logout />
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
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: var(--color-sixth-dark);
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

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: #003018;
`;

const H3Header = styled.h3`
  margin-left: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
`;
