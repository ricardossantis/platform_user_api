import React, { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  CardBox,
  ProfileMeta,
  BackGround,
  BorderDiv,
  LoginContainer,
  StyledForm,
  StyledButton,
  StyledModal,
} from "./Perfil.js";
import StylezedInput from "../../components/input/Input.jsx";
import ProfIcon from "../../assets/images/undraw_profile_pic_ic5t.png";
import Api from "../../services/api.js";
import { Input } from "antd";
import Select from "react-select";
import logo from "../../assets/images/undraw_profile_pic_ic5t.png";
import { message } from "antd";

function Perfil() {
  const imageOptions = [
    {
      value: "male",
      label: (
        <div>
          <img style={{ width: "50px", height: "50px" }} src={logo} /> {" Male"}
        </div>
      ),
    },
    {
      value: "female",
      label: (
        <div>
          <img style={{ width: "50px", height: "50px" }} src={logo} />
          {" Female"}
        </div>
      ),
    },
  ];

  const [profileData, setProfileData] = useState({
    name: "Name",
    about: "",
    email: "",
    user: "",
    address: "",
  });
  const [visible, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  const showModal = () => {
    setVisibility(true);
  };

  const handleCancel = (e) => {
    setVisibility(false);
  };

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("authToken");
    Api.get(`users/${id}`, {
      headers: { Authorization: token },
    }).then((res) => {
      console.log(res);
      setProfileData({
        name: res.data.name,
        about: res.data.about,
        email: res.data.email,
        user: res.data.user,
        address: res.data.address,
      });
    });
  }, []);

  const info = (infoMessage) => {
    message.info(infoMessage);
  };

  const onFinish = (values) => {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("authToken");
    console.log(id);
    let editObject = { user: {} };
    let apiObject = { user: values };
    if (values.image_url) apiObject.user.values.image_url = values.image_url;
    Object.entries(apiObject.user).forEach((key) => {
      if (key[1] !== undefined) {
        Object.defineProperty(editObject.user, `${key[0]}`, {
          value: key[1],
        });
      }
    });
    console.log(editObject);
    Api.put(`users/${id}`, {
      headers: { Authorization: token },
      data: editObject,
    })
      .then((res) => {
        info("Edit successful");
        console.log(res);
      })
      .catch((err) => {
        info("Edit failed");
      });
  };

  return (
    <BackGround>
      <BorderDiv>
        <CardBox
          cover={<img alt="example" src={ProfIcon} />}
          actions={[<EditOutlined key="edit" onClick={showModal} />]}
        >
          <ProfileMeta
            title={profileData.name}
            description={`Bio: ${profileData.about}`}
          />

          <ProfileMeta
            avatar={<i className="fas fa-user" />}
            description={profileData.user}
          />

          <ProfileMeta
            avatar={<i className="fas fa-envelope-open-text"></i>}
            description={profileData.email}
          />

          <ProfileMeta
            avatar={<i className="fas fa-map-marker-alt"></i>}
            description={profileData.address}
          />
        </CardBox>
      </BorderDiv>
      <StyledModal visible={visible} onCancel={handleCancel} footer="">
        <LoginContainer>
          <StyledForm onFinish={onFinish}>
            <div>Select your avatar</div>
            <StyledForm.Item>
              <Select
                value={selectedOption}
                options={imageOptions}
                onChange={handleSelectChange}
                name="image_url"
              />
            </StyledForm.Item>

            <div>
              <p> </p>
            </div>
            <StyledForm.Item name="about" label="Bio">
              <Input.TextArea allowClear={true} rows={3} />
            </StyledForm.Item>

            <StylezedInput
              icon="fas fa-user"
              name="name"
              label="Name"
              type="text"
              rules={[
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
                {
                  min: 6,
                  message: "Username must be at least 6 characters long",
                },
              ]}
            />
            <StylezedInput
              name="address"
              label="Address"
              icon="fas fa-map-marker-alt"
            />
            <StylezedInput
              icon="fas fa-lock"
              name="email"
              label="Email"
              type="text"
              rules={[
                {
                  pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/gi,
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
                {
                  min: 6,
                  message: "Password must be at least 6 characters long",
                },
                {
                  pattern: /(?=.*[}{,^?~=+\-_*\-+|!])/,
                  message: "Must contain at least on special character",
                },
              ]}
            />
            <StylezedInput
              icon="fas fa-lock"
              name="confirmPassword"
              label="Confirm password"
              type="password"
              rules={[
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
            <StyledButton type="submit" htmlType="submit">
              Confirm
            </StyledButton>
          </StyledForm>
        </LoginContainer>
      </StyledModal>
    </BackGround>
  );
}

export default Perfil;
