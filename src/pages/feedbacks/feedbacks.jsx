import React, { useEffect, useState, useParams } from "react";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { CardBox, ProfileMeta, BackGround, BorderDiv } from "./feedbacks.js";
import Api from "../../services/api.js";
import styled from "styled-components";
const Feedbacks = () => {
  //   const user = useParams();

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
      <Container>
        <BoxImg></BoxImg>
        <BoxInfos></BoxInfos>
      </Container>
    </BackGround>
  );
};

export default Feedbacks;

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 300px;
  background: blue;
  align-self: flex-start;
`;

const BoxImg = styled.div`
  flex: 1;
  background: red;
`;

const BoxInfos = styled.div`
  flex: 1;
`;
