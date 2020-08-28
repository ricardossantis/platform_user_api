import React, { useState } from "react";
import WaveImg from "../../assets/images/wave.png";
import Celebration from "../../assets/images/undraw_celebration_0jvk.svg";
import api from "../../services/api";
import Select from "react-select";
import profilePicMale from "../../assets/images/maleAvatar.svg";
import profilePicFemale from "../../assets/images/femaleAvatar.svg";
import { message } from "antd";

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
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const imageOptions = [
    {
      value: "male",
      label: (
        <div>
          <img style={{ width: "50px", height: "50px" }} src={profilePicMale} />
        </div>
      ),
    },
    {
      value: "female",
      label: (
        <div>
          <img
            style={{ width: "50px", height: "50px" }}
            src={profilePicFemale}
          />
        </div>
      ),
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  const info = (infoMessage) => {
    message.info(infoMessage);
  };

  const onFinish = (values) => {
    let apiObject = { user: values };
    apiObject.user.image_url = values.image_url.value;
    api
      .post("users", apiObject)
      .then((res) => {
        info("Register successful");
        history.push("/");
      })
      .catch((res) => {
        info("Register Failed");
      });
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
            <Avatar src={profilePicMale} alt="" />
            <H2Form>Join us!</H2Form>
            <div>Select your avatar</div>
            <StyledForm.Item
              name="image_url"
              rules={[{ required: true, message: "Please select an avatar" }]}
            >
              <Select
                value={selectedOption}
                options={imageOptions}
                onChange={handleSelectChange}
              />
            </StyledForm.Item>
            <StylezedInput
              icon="fas fa-user"
              name="name"
              label="Name"
              type="text"
              rules={[
                { required: true, message: "Please type your name!" },
                {
                  pattern: /[A-Z][a-z]* [A-Z][a-z]*/,
                  message: "Your name must be (Name Last-name)",
                },
              ]}
            />
            <StylezedInput
              icon="fas fa-user"
              name="user"
              label="Username"
              type="text"
              rules={[
                { required: true, message: "Please input your username!" },
                {
                  min: 6,
                  message: "Username must be at least 6 characters long",
                },
              ]}
            />
            <StylezedInput
              icon="fas fa-lock"
              name="email"
              label="Email"
              type="text"
              rules={[
                { required: true, message: "Please type your Email!" },
                {
                  pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/gi,
                  message: "Email must be example@example.com",
                },
              ]}
            />
            <StylezedInput
              icon="fas fa-lock"
              name="password"
              label="Password"
              type="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long",
                },
                {
                  pattern: /(?=.*[}{,^?~=+\-_*\-+|!@#$%&-+¨´"'])/,
                  message: "Must contain at least one special character",
                },
              ]}
            />
            <StylezedInput
              icon="fas fa-lock"
              name="confirmPassword"
              label="Confirm password"
              type="password"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            />
            <LinkA to="/">
              {" "}
              <i className="fas fa-sign-out-alt"></i>Voltar
            </LinkA>
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
