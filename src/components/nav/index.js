import { Link } from 'react-router-dom';
import * as React from 'react';

// Styles
import { StyledHeader, StyledLink, StyledLogo } from './styles';

// image
import logo from './images/logo.svg';
// Types
// import { BasketItem, LoyaltyUser } from 'koala-sdk-js';

const Nav = () => (
  <StyledHeader>
    <StyledLogo>
      <Link to="/" href="/">
        <a>
          <img src={logo} alt="Veggie Grill" />
        </a>
      </Link>
    </StyledLogo>
    <StyledLink>
      <Link to="/" href="/">
        <a>
          HOME
        </a>
      </Link>
    </StyledLink>
    <StyledLink>
      <Link to="/faq" href="/faq">
        <a>
          FAQ PAGE
        </a>
      </Link>
    </StyledLink>
  </StyledHeader>
);

export default Nav;
