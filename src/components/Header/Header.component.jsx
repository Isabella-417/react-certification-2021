import React from 'react';
import {
  Nav,
  NavMenu,
  NavSearch,
  NavSearchContainer,
  NavProfile,
  NavTheme,
  NavProfilePic,
} from './Header.element';

const Header = () => {
  return (
    <Nav>
      <NavMenu>
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </NavMenu>
      <NavSearchContainer>
        <NavSearch placeholder="Search" type="text" required />
      </NavSearchContainer>

      <NavProfile>
        <NavTheme />
        <NavProfilePic>
          <svg
            className="MuiSvgIcon-root MuiAvatar-fallback"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </NavProfilePic>
      </NavProfile>
    </Nav>
  );
};

export default Header;
