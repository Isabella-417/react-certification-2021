import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  margin: 0;
  padding: 0;
  background-color: #e63946;
`;

export const NavMenu = styled.button`
  height: 80%;
  width: 5em;
  background-color: transparent;
  border: 0;
  fill: white;
`;

export const NavSearchContainer = styled.div`
  width: 100%;
  margin: 1em;
  background-color: transparent;
  @media (min-width: 600px) {
    width: 40em;
  }
`;

export const NavSearch = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 0.2em;
`;

export const NavProfile = styled.div`
  display: none;
  color: #ffffff;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 20em;
    margin: 1em;
  }
`;

export const NavProfilePic = styled.button`
  display: none;
  @media (min-width: 600px) {
    display: block;
    height: 100%;
    width: 4em;
    clip-path: circle(43%);
    background-color: white;
  }
`;

export const NavTheme = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  @media (min-width: 600px) {
    display: block;
    position: relative;
    -webkit-appearance: none;
    width: 80px;
    margin: 1em;
    height: 37px;
    border: 2px solid #d9d9d9;
    outline: none;
    border-radius: 30px;
    transition: 0.3s;

    &:before {
      content: '';
      position: absolute;
      left: 2px;
      width: 34px;
      height: 34px;
      background: #cccccc;
      border-radius: 50%;
      transition: 0.3s ease;
    }

    &:checked:before {
      transform: translateX(40px);
      background-color: #540b0e;
    }

    &:checked {
      border-color: #540b0e;
    }
  }
`;
