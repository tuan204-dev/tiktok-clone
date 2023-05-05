import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Layouts/components/Header/Header';

const HeaderOnly = props => {
  const {children} = props

  return (
    <>
      <Header/>
      {children}
    </>
  );
};

HeaderOnly.propTypes = {
  
};

export default HeaderOnly;