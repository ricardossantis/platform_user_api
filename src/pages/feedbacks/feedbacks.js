import styled from "styled-components";
import { Card, Modal, Button } from "antd";
const { Meta } = Card;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const StyledButton = styled(Button)`
  margin: 50px 0;
  width: 200px;
  border-radius: 25px;
  background-color: var(--color-primary);
  font-weight: bold;

  &:hover {
    background-color: var(--color-primary-dark);
    color: var(--color-sixth-dark);
    border-color: var(--color-sixth);
  }
`;

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    100.72% 100.72% at 50% 50%,
    #c0fabe 0%,
    rgba(49, 142, 53, 0.901042) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  justify-self: flex-start;
  width: 95%;
  height: 150px;
  background: white;
  margin-top: -250px;
  margin-bottom: 50px;
  border-radius: 25px;
  padding: 10px;
`;

export const BoxTable = styled.div`
  width: 95%;
  height: 150px;

  .ant-table-wrapper {
    background: radial-gradient(
      100.72% 100.72% at 50% 50%,
      #c0fabe 0%,
      rgba(49, 142, 53, 0.901042) 100%
    );
  }
`;

export const BoxImg = styled.div`
  flex: 1;
`;

export const BoxInfos = styled.div`
  flex: 3;
`;
