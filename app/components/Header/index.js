/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import ILogo from '../../images/codemi-394x150.png';

function Header() {
  return (
    <Navbar>
    	<NavbarBrand>
    		<a href="#">
    			<img src={ILogo} alt="Codemi" />
    		</a>
    	</NavbarBrand>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
