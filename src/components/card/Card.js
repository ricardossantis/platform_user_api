import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardBox = styled(Card)`
  width: 80%;
  margin: 10px 0;
  border: none;
`;

export const ProfileMeta = styled(Meta)`
  margin: 2px 0;
  padding-bottom: 5px;
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
    font-size: 20px;
  }
`;

export const BorderDiv = styled.div`
  width: 50%;
  height: fit-content;
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
