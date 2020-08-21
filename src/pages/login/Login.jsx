import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Wave from "../../assets/images/wave.png";
import Goals from "../../assets/images/undraw_shared_goals_3d12.svg";
import ProfIcon from "../../assets/images/undraw_profile_pic_ic5t.png";
import { Form, Input, Button } from "antd";
import api from "../../services/api";

const Login = ({ setAuth }) => {
  let history = useHistory();
  const onFinish = (values) => {
    api
      .post("authenticate", values)
      .then((res) => {
        window.localStorage.setItem("id", res.data.user.id);
        window.localStorage.setItem("authToken", res.data.auth_token);
        history.push("/users");
        setAuth(true);
      })
      .catch((res) => {});
  };

  return (
    <>
      <img className="wave" src={Wave} alt="" />
      <div className="container">
        <div className="img">
          <img src={Goals} alt="" />
        </div>
        <div className="login-container">
          <Form onFinish={onFinish}>
            <img className="avatar" src={ProfIcon} alt="" />
            <h2 className="title">Welcome</h2>
            <div
              className="input-div one"
              onFocus={(e) =>
                (e.currentTarget.className = "input-div one focus")
              }
              onBlur={(e) =>
                e.target.value === "" &&
                (e.currentTarget.className = "input-div one")
              }
            >
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="input-box">
                <h5>Username</h5>
                <Form.Item name="user">
                  <Input className="input" type="text" />
                </Form.Item>
              </div>
            </div>
            <div
              className="input-div two"
              onFocus={(e) =>
                (e.currentTarget.className = "input-div two focus")
              }
              onBlur={(e) =>
                e.target.value === "" &&
                (e.currentTarget.className = "input-div two")
              }
            >
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <Form.Item name="password">
                  <Input className="input" type="password" />
                </Form.Item>
              </div>
            </div>
            <a href="#">Forgot Password ?</a>
            <Button type="submit" htmlType="submit" className="btn">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
