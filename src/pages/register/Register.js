import styled from "styled-components";
import { Form, Button, Select } from "antd";
import { Link } from "react-router-dom";

export const Wave = styled.img`
  position: fixed;
  width: 55%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

export const Container = styled.div`
  font-family: "Poppins", sans-serif !important;

  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ImgGoals = styled.img`
  width: 500px;
`;

export const LoginContainer = styled.div`

  display: flex;
  align-items: center;
  text-align: center;

  .ant-select-selector{
  height:55px !important;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
};
.ant-select-selection-item{
  margin-top:30px;
}


`;

export const StyledForm = styled(Form)`
  width: 360px;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const H2Form = styled.h2`
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
`;

export const LinkA = styled(Link)`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(
    to right,
    var(--color-primary-lighter),
    var(--color-primary),
    var(--color-primary-dark)
  );
  text-transform: uppercase;
  font-family: "Poppins", sans-serif !important;
  background-size: 200%;
  transition: 0.5s;

  &:hover {
    background-image: linear-gradient(
      to right,
      var(--color-primary-lighter),
      var(--color-primary),
      var(--color-primary-dark)
    );
    color: var(--color-sixth-dark);
  }

  &:focus {
    background-image: linear-gradient(
      to right,
      var(--color-primary-light),
      var(--color-primary),
      var(--color-primary-dark)
    );
    color: var(--color-sixth-dark);
  }
`;

export const StyledSelect = styled(Select)`


`
