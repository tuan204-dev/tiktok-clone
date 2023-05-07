import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const SearchItem = props => {
  const { item } = props

  return (
    <div className={cx('wrapper')}>
      <div className={cx('avt')}>
        <img src={item.avt} alt={item.username} />
      </div>
      <div className={cx('info')}>
        <div className={cx('user-id')}>
          <p>{item.userId}</p>
          <FontAwesomeIcon className={cx('check-mark')} icon={faCheckCircle}/>
        </div>
        <span className={cx('user-name')}>{item.username}</span>
      </div>
    </div>
  );
};

SearchItem.propTypes = {
  
};

export default SearchItem;