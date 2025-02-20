/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../global/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet />
      <GlobalStyle />
      <>{children}</>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
