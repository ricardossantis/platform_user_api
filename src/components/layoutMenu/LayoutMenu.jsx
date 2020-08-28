import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Button } from "antd";
import styled from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  ProfileDiv,
  StyledSider,
  StyledContent,
  StyledMenu,
  StyledHeader,
  H3Header,
  StyledLayout,
  StyledSearch,
} from "./LayoutMenu.js";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import profilePicMale from "../../assets/images/maleAvatar.svg";
import profilePicFemale from "../../assets/images/femaleAvatar.svg";
import Logout from "../logout/Logout.jsx";
import Api from "../../services/api.js";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const LayoutMenu = ({ children, setSearchUsers }) => {
  const { pathname } = useLocation();
  const [profilePic, setProfilePic] = useState(profilePicMale);

  console.log(pathname.slice(0, 6));

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("authToken");

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

  console.log(window.innerWidth);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <StyledLayout style={{ width: "100vw", height: "100vh" }}>
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
            <StyledMenu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Perfil</Link>
            </StyledMenu.Item>
            <StyledMenu.Item
              key={`/users/${pathname.slice(7)}`}
              icon={<VideoCameraOutlined />}
            >
              <Link to="/users/1"> Users</Link>
            </StyledMenu.Item>
            <StyledMenu.Item
              key={`/feedbacks/${pathname.slice(11)}`}
              icon={
                <i className="fas fa-users" style={{ marginRight: "8px" }} />
              }
            >
              <Link to={`/feedbacks/${id}`}>
                {collapsed ? "" : "My feedbacks"}
              </Link>
            </StyledMenu.Item>
            <StyledMenu.Item key="/ranking" icon={<VideoCameraOutlined />}>
              <Link to="/ranking">Ranking</Link>
            </StyledMenu.Item>
          </StyledMenu>
        </StyledSider>
        <Layout className="site-layout">
          <StyledHeader
            className="site-layout-background"
            style={{ padding: 0 }}
          >
            <H3Header>{pathname.slice(1).capitalize()}</H3Header>
            {pathname.slice(0, 6) === "/users" && (
              <StyledSearch
                placeholder="Insert user name"
                onSearch={(value) => setSearchUsers(value)}
                enterButton={<Button icon={<SearchOutlined />} />}
              />
            )}
            <Logout />
          </StyledHeader>
          <StyledContent>{children}</StyledContent>
        </Layout>
      </StyledLayout>
    </div>
  );
};

export default LayoutMenu;
