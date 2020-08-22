import React from "react";
import { CardBox, ProfileMeta, BorderDiv } from "./Card.js";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import ProfIcon from "../../assets/images/undraw_profile_pic_ic5t.png";

function Card(props) {
  return (
    <BorderDiv>
      <CardBox cover={<img alt="example" src={ProfIcon} />}>
        <ProfileMeta title={props.name} />

        <ProfileMeta
          avatar={<i className="fas fa-user" />}
          description={props.user}
        />

        <ProfileMeta
          avatar={<i className="fas fa-envelope-open-text"></i>}
          description={props.email}
        />
      </CardBox>
    </BorderDiv>
  );
}

export default Card;
