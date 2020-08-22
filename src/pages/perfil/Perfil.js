import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    var(--color-primary-lighter),
    var(--color-primary-dark)
  );
`;

export const CardBox = styled(Card)`
  width: 600px;
  border: none;
`;

export const ProfileMeta = styled(Meta)`
  margin: 5px 0;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--color-primary-dark);
  .ant-card-meta-description {
    color: var(--color-text);
  }
  i {
    color: var(--color-primary-dark);
  }
  .ant-card-meta-title {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
  }
`;

export const BorderDiv = styled.div`
  width: 850px;
  height: 90%;
  border-radius: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
`;
