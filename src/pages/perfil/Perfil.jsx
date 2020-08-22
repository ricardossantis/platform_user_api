import React, { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { CardBox, ProfileMeta, BackGround, BorderDiv } from "./Perfil.js";
import ProfIcon from "../../assets/images/undraw_profile_pic_ic5t.png";
import Api from "../../services/api.js";

function Perfil() {
  const [profileData, setProfileData] = useState({
    name: "Name",
    about: "",
    email: "",
    user: "",
    address: "",
  });

  const handleEdit = () => {};

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

  return (
    <BackGround>
      <BorderDiv>
        <CardBox
          cover={<img alt="example" src={ProfIcon} />}
          actions={[<EditOutlined key="edit" onClick={handleEdit} />]}
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
    </BackGround>
  );
}

export default Perfil;
