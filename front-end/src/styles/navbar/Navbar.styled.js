import styled from 'styled-components';

const NavbarButton = styled.button`
  height: 50px;
  width: 90%;
  margin: 0 auto;
  outline: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  gap: 20px;
  color: #fff;
  background-color: transparent;
  border-radius: 10px;
  :hover {
    background-color: #424242;
  }
`;

const NavbarContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  width: 339px;
  background-color: #242425;
  h1 {
    color: #fff;
  }
  p {
    margin-top: -10px;
    color: #6a6a6a;
    font-weight: lighter;
    font-size: 20px;
  }
`;

export { NavbarButton, NavbarContainer };
