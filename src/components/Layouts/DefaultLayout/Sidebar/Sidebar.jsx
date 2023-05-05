import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'


const cx = classNames.bind(styles)

const Sidebar = props => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
};

Sidebar.propTypes = {
  
};

export default Sidebar;