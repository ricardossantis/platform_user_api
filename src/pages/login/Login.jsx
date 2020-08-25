import React, { useState } from "react";
import WaveImg from "../../assets/images/wave.png";
import { useHistory } from "react-router-dom";
import Goals from "../../assets/images/undraw_shared_goals_3d12.svg";
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
} from "./Login";
import StylezedInput from "../../components/input/Input.jsx";

const Login = ({ setAuth }) => {
  let history = useHistory();

  const onFinish = (values) => {
    console.log(values);
    api
      .post("authenticate", values)
      .then((res) => {
        window.localStorage.setItem("id", res.data.user.id);
        window.localStorage.setItem("authToken", res.data.auth_token);
        history.push("/users/1");
        setAuth(true);
      })
      .catch((res) => {});
  };

  return (
    <>
      <Wave src={WaveImg} alt="" />
      <Container>
        <BoxImg>
          <ImgGoals src={Goals} alt="" />
        </BoxImg>
        <LoginContainer>
          <StyledForm onFinish={onFinish}>
            <Avatar c src={ProfIcon} alt="" />
            <H2Form color={"blue"}>Welcome</H2Form>
            {/* InputContainer*/}
            <StylezedInput
              icon="fas fa-user"
              name="user"
              label="Username"
              type="text"
            />

            {/* InputContainer*/}
            <StylezedInput
              icon="fas fa-lock"
              name="password"
              label="Password"
              type="password"
            />

            <LinkA href="#">Forgot Password ?</LinkA>
            <StyledButton type="submit" htmlType="submit">
              Login
            </StyledButton>
          </StyledForm>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
