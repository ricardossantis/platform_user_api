import styled from "styled-components";
import { Row } from "antd";
import { Pagination } from "antd";

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    var(--color-primary-lighter),
    var(--color-primary-dark)
  );
  overflow: hidden;
`;

export const StyledRow = styled(Row)`
  justify-content: space-around;
  padding: 50px 0;
`;

export const StyledPagination = styled(Pagination)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
`;
