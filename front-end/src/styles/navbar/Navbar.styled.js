import styled from 'styled-components';

const NavbarNoProps = styled.button`
  position: relative;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  color: #fff;
  background-color: transparent;
  border-radius: 10px;
  :hover {
    background-color: #424242;
  }
`;

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
  position: relative;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  min-width: 100% !important;
  background-color: #202123;
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

const NavbarContainerProps = styled.div`
  position: relative;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  min-width: 100% !important;
  background-color: #202123;
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

const NavFixed = styled.div`
  position: relative;
  height: 100vh;
  min-width: 100px !important;
  background-color: #202123;
`;

const NavNoFixed = styled.div`
  position: relative;
  height: 100vh;
  min-width: 300px !important;
  background-color: #202123;
`;

const NavClosed = styled.button`
  position: absolute;
  background-color: #1c1c1c;
  height: 25px;
  width: 25px;
  top: 25px;
  right: -10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #363535;
  z-index: 99;
  cursor: pointer;
`;

const NavOpen = styled.button`
  position: absolute;
  background-color: #1c1c1c;
  height: 25px;
  width: 25px;
  top: 25px;
  right: -10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #363535;
  z-index: 99;
  cursor: pointer;
`;

export {
  NavbarButton,
  NavbarContainer,
  NavbarNoProps,
  NavbarContainerProps,
  NavClosed,
  NavFixed,
  NavOpen,
  NavNoFixed,
};
