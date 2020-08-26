import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Logout() {
  let history = useHistory();

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <StyledButton onClick={handleLogout}>
      <i class="fas fa-sign-out-alt"></i>
    </StyledButton>
  );
}

export default Logout;

const StyledButton = styled(Button)`
  margin-right: 20px;
  align-self: center;
  border-radius: 20%;
`;
