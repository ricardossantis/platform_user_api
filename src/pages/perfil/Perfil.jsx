import React, { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  CardBox,
  ProfileMeta,
  BackGround,
  LoginContainer,
  StyledForm,
  StyledButton,
  StyledModal,
  StyledSelect,
} from "./Perfil.js";
import StylezedInput from "../../components/input/Input.jsx";
import Api from "../../services/api.js";
import { Input } from "antd";
import { message } from "antd";
import profilePicMale from "../../assets/images/maleAvatar.svg";
import profilePicFemale from "../../assets/images/femaleAvatar.svg";

function Perfil() {
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
      setProfileData({
        name: res.data.name,
        about: res.data.about,
        email: res.data.email,
        user: res.data.user,
        address: res.data.address,
        image_url: res.data.image_url,
      });
    });
  }, []);

  const info = (infoMessage) => {
    message.info(infoMessage);
  };

  const onFinish = (values) => {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("authToken");
    let apiObject = { user: values };
    if (values.image_url) apiObject.user.image_url = values.image_url.value;
    Api.put(
      `users/${id}`,
      { ...apiObject },
      {
        headers: { Authorization: token },
      }
    )
      .then((res) => {
        info("Edit successful");
        handleCancel();
        setProfileData({
          name: res.data.name,
          about: res.data.about,
          email: res.data.email,
          user: res.data.user,
          address: res.data.address,
          image_url: res.data.image_url,
        });
      })
      .catch((err) => {
        info("Edit failed");
      });
  };

  return (
    <BackGround>
      <CardBox
        cover={
          <img
            alt="example"
            src={
              profileData.image_url === "male"
                ? profilePicMale
                : profilePicFemale
            }
          />
        }
        actions={[<EditOutlined key="edit" onClick={showModal} />]}
      >
        <ProfileMeta
          style={{ marginBottom: "50px" }}
          title={profileData.name}
          description={profileData.about}
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

      <StyledModal visible={visible} onCancel={handleCancel} footer="">
        <LoginContainer>
          <StyledForm onFinish={onFinish}>
            <div>Select your avatar</div>
            <StyledForm.Item name="image_url">
              <StyledSelect
                value={selectedOption}
                options={imageOptions}
                onChange={handleSelectChange}
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
