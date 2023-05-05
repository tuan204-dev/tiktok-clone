import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header';
import Sidebar from './Sidebar/Sidebar';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          <h3 style={{textAlign: 'center'}}>Content</h3>
        </div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
