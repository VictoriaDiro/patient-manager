import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({title}) => (
  <header>
    <h1 className="text-header">{title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
