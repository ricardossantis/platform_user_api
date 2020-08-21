import React, { useState } from "react";
// import "./Login.css";

import WaveImg from "../../assets/images/wave.png";
import Celebration from "../../assets/images/undraw_celebration_0jvk.svg";
import ProfIcon from "../../assets/images/undraw_profile_pic_ic5t.png";
import api from "../../services/api";

import {
  Wave,
  Container,
  BoxImg,
  ImgGoals,
  LoginContainer,
  StyledForm,
  Avatar,
  H2Form,
  StyledButton,
  LinkA,
} from "./Register";
import StylezedInput from "../../components/input/Input.jsx";

const Register = () => {
  const onFinish = (values) => {
    api
      .post("authenticate", values)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
      })
      .catch((res) => {});
  };

  return (
    <>
      <Wave src={WaveImg} alt="" />
      <Container>
        <BoxImg>
          <ImgGoals src={Celebration} alt="" />
        </BoxImg>
        <LoginContainer>
          <StyledForm onFinish={onFinish}>
            <Avatar src={ProfIcon} alt="" />
            <H2Form>Join us!</H2Form>
            <StylezedInput
              icon="fas fa-user"
              name="name"
              label="Name"
              type="text"
            />
            <StylezedInput
              icon="fas fa-user"
              name="user"
              label="Username"
              type="text"
            />
            <StylezedInput
              icon="fas fa-lock"
              name="email"
              label="Email"
              type="text"
            />
            <StylezedInput
              icon="fas fa-lock"
              name="password"
              label="Password"
              type="password"
            />
            <StylezedInput
              icon="fas fa-lock"
              name="confirmPassword"
              label="Confirm password"
              type="password"
            />
            <LinkA href="#">Forgot Password ?</LinkA>
            <StyledButton type="submit" htmlType="submit">
              Register
            </StyledButton>
          </StyledForm>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Register;

// name: "name"
// user: "user200"
// about: "about"
// address: "Rua dos Alfeneiros, nº4"
// email: "test200@test.com"
