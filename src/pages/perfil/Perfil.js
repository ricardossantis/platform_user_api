import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    var(--color-primary-lighter),
    var(--color-primary-dark)
  );
`;

export const CardBox = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
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
