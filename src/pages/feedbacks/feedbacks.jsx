import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  BoxInfos,
  BoxImg,
  BoxTable,
  BackGround,
  Container,
} from "./feedbacks.js";
import Api from "../../services/api.js";
import MaleAvatar from "../../assets/images/maleAvatar.svg";
import { useParams } from "react-router-dom";
import { Table, Descriptions } from "antd";

const Feedbacks = () => {
  const { id } = useParams();

  const [feedbacks, setFeedbacks] = useState([]);
  const [{ name, user, email, address, cellphone }, setUserInfo] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    Api.get(`users/${id}/feedbacks`, {
      headers: { Authorization: token },
    }).then(({ data }) => {
      setFeedbacks(
        data.map(
          (item, index, array) =>
            (array[index] = { ...item, ...item.creator, key: index })
        )
      );
    });
  }, [id]);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    Api.get(`users/${id}`, {
      headers: { Authorization: token },
    }).then(({ data }) => setUserInfo(data));
  }, [id]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "User",
      dataIndex: "User",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Grade",
      dataIndex: "grade",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log(pagination, filters, sorter, extra);
  }

  return (
    <BackGround>
      <Container>
        <BoxImg>
          <img
            src={MaleAvatar}
            alt="MaleAvatar"
            style={{ width: "100%", height: "100%" }}
          />
        </BoxImg>
        <BoxInfos>
          <Descriptions title="User Info">
            <Descriptions.Item label="Name">{name}</Descriptions.Item>
            <Descriptions.Item label="UserName">{user}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{cellphone}</Descriptions.Item>
            <Descriptions.Item label="Address">
              {address ? address : "none"}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
          </Descriptions>
        </BoxInfos>
      </Container>
      <BoxTable>
        <Table
          id="table"
          columns={columns}
          dataSource={feedbacks}
          onChange={onChange}
          pagination={true}
        />
      </BoxTable>
    </BackGround>
  );
};

export default Feedbacks;
