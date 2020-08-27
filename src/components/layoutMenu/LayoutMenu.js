import styled from 'styled-components'

import { Menu, Layout ,Input, Button } from "antd";
const { Header, Sider } = Layout;
const { Search } = Input;


export const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px 20px 0px;
`;

export const StyledSider = styled(Sider)`
  background: radial-gradient(
    146.49% 63.82% at 50.14% 50%,
    #7a7a7a 0%,
    #343434 100%
  );
  .ant-menu,
  .ant-menu-dark {
    background: #343434;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: var(--color-sixth-dark);
  }
  .ant-layout-sider-trigger {
    background: var(--color-fifth-dark);
  }
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;

  .ant-layout ,.site-layout{
    background: radial-gradient(
    100.72% 100.72% at 50% 50%,
    #c0fabe 0%,
    rgba(49, 142, 53, 0.901042) 100%
  );

  }
  

`;
export const StyledContent = styled.div`
  height: 100vh;
 
`;

export const StyledMenu = styled(Menu)`
  background-color: var(--color-primary);
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: #003018;
`;

export const H3Header = styled.h3`
  margin-left: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
`;

export const StyledSearch = styled(Search)`
  width: 40%;
  height: 35px;
  margin:auto;
  .ant-input {
    border-radius: 100px;
    border: 1px solid var();
  };
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
      var(--color-primary),
      #a75241
    );
  }
`;