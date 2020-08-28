import styled from "styled-components";
import {Pagination} from "antd";

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

export const StyledPagination = styled(Pagination)`
  align-self: center;
`;


