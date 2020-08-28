import styled from "styled-components";
import { Card } from "antd";
import { Form, Button, Modal } from "antd";
import Select from "react-select";
const { Meta } = Card;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  .ant-select-selector {
    height: 55px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .ant-select-selection-item {
    margin-top: 30px;
  }
`;

export const StyledForm = styled(Form)`
  width: 360px;
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

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const CardBox = styled(Card)`
  width: 600px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  .ant-card-cover {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }

  .ant-card-body {
    width: 80%;
  }
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
  width: 70%;
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

export const StyledSelect = styled(Select)`
  .css-g1d714-ValueContainer {
    height: 55px;
    justify-content: center;
  }
`;
