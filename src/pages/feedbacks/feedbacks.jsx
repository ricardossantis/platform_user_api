import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  BoxInfos,
  BoxImg,
  BoxTable,
  BackGround,
  Container,
  StyledModal,
  StyledButton,
} from "./feedbacks.js";
import Api from "../../services/api.js";
import MaleAvatar from "../../assets/images/maleAvatar.svg";
import { useParams } from "react-router-dom";
import { Table, Descriptions, Form, Input } from "antd";

const Feedbacks = () => {
  const { id } = useParams();
  const [visible, setVisibility] = useState(false);
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

  const showModal = () => {
    setVisibility(true);
  };

  const handleCancel = (e) => {
    setVisibility(false);
  };

  const handleModalSubmit = (values) => {
    const token = window.localStorage.getItem("authToken");
    const idUser = window.localStorage.getItem("id");
    let sendObject = { feedback: { name: "", ...values } };
    console.log(sendObject);
    Api.post(`/users/${idUser}/feedbacks`, sendObject, {
      headers: { Authorization: token },
    }).then((res) => {
      setFeedbacks([...feedbacks, { ...res.data, ...res.data.creator }]);
    });
    handleCancel();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
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
            <Descriptions.Item label="Telephone">
              {cellphone ? cellphone : "none"}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {address ? address : "none"}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
          </Descriptions>
        </BoxInfos>
      </Container>
      <StyledModal visible={visible} onCancel={handleCancel} footer="">
        <Form onFinish={handleModalSubmit} style={{ margin: "30px" }}>
          <Form.Item name="comment">
            <Input.TextArea placeholder="Comment" rows={4} />
          </Form.Item>
          <Form.Item name="grade">
            <Input placeholder="Grade" />
          </Form.Item>
          <StyledButton type="submit" htmlType="submit">
            Post Feedback
          </StyledButton>
        </Form>
      </StyledModal>
      <StyledButton onClick={showModal}>New Feedback</StyledButton>
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
