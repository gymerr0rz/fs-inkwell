import styled from 'styled-components';

const NavbarButton = styled.button`
  height: 60px;
  width: 309px;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  cursor: pointer;
  margin: 5px 0;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  width: 339px;
`;

export { NavbarButton, NavbarContainer };
