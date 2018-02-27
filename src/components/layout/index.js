import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../nav';

// styles
import { StyledContent } from './styles';

const Layout = (props) => (
  <div>
    <Nav />
    <StyledContent>
      {props.children}
    </StyledContent>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;