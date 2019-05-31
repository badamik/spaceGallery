import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import Topbar from 'components/widgets/Topbar/Topbar'

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <Topbar/>
    { children }
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
}

export default MainTemplate;