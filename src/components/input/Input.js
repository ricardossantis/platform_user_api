import styled from "styled-components"
import { Form, Input } from "antd";


export const StyledForm = styled(Form)`
  width: 360px;
`

/** Input*/
export const InputContainer = styled.div` 
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  margin: ${(props)=> props.margin};
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;

  ${(props) => props.focusActive && `
      border-bottom: 2px solid var(--color-primary);


`}

`
export const Icon = styled.i`
  color: #d9d9d9;
  margin-top:60%;
  ${(props) => props.focusActive && `
  color: var(--color-primary);
`}

`
export const H5Form = styled.h5`
position: absolute;
  left: 0;
  top: 20%;
  color: #999;
  font-size: 18px;
  transition: 0.3s;

${(props) => props.focusActive && `
top: -10px;
  font-size: 15px;
`}
`
export const boxIcon = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputBox = styled.div`
position: relative;
  height: 45px;
 `

export const StyledInput = styled(Input)`
position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none !important;
  outline: none !important;
  box-shadow:none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif !important;
  color: #555;

  &&&:focus{
    border:none ;
    outline: none ;
  background: none ;
  box-shadow:none ;


  }
`
