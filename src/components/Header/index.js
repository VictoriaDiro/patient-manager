import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <header>
    <h1 className="text-header">{title}</h1>
  </header>
)

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;
