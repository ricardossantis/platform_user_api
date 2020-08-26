import styled from "styled-components";
import { Pagination, Input, Button } from "antd";
const { Search } = Input;

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

export const StyledSearch = styled(Search)`
  width: 40%;
  height: 35px;
  margin: 0 auto;
  margin-top: 40px
  .ant-input {
    border-radius: 100px;
    border: 1px solid var();
  }
  .ant-input-group-addon {
    border-radius: 100px;
    background-image: radial-gradient(
      var(--color-sixth-dark),
      var(--color-sixth-light)
    );
  }
  .ant-btn,
  .ant-input-search-button,
  .ant-btn-icon-only {
    border-radius: 100px;
    background-image: radial-gradient(
      var(--color-sixth),
      var(--color-sixth-dark)
    );
  }
`;
