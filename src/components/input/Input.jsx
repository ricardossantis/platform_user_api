import React, { useState } from "react";

import {
  InputContainer,
  Icon,
  boxIcon,
  H5Form,
  InputBox,
  StyledInput,
  StyledForm,
} from "./Input";

const StylezedInput = ({ icon, name, label, type }) => {
  const [focusActive, setFocusActive] = useState(false);

  return (
    <InputContainer
      focusActive={focusActive}
      onFocus={() => setFocusActive(true)}
      onBlur={(e) => e.target.value === "" && setFocusActive(false)}
    >
      {/* boxIcon */}
      <boxIcon>
        {/* Icon */}
        <Icon focusActive={focusActive} className={icon}></Icon>
      </boxIcon>
      {/*  InputBox*/}
      <InputBox>
        <H5Form focusActive={focusActive}>{label}</H5Form>
        <StyledForm.Item name={name}>
          <StyledInput type={type} />
        </StyledForm.Item>
      </InputBox>
    </InputContainer>
  );
};

export default StylezedInput;
