import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import SearchItem from '../SearchItem/SearchItem';

const cx = classNames.bind(styles);

const Popper = (props) => {
  const { searchResults, isTitle, title } = props;

  return (
    <div className={cx('wrapper')}>
      {isTitle && <h4 className={cx('popper-title')}>{title}</h4>}
      <ul className={cx('search-list')}>
        {searchResults.map((item, index) => {
          return (
            <li key={index}>
              <SearchItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Popper.propTypes = {
  searchResults: PropTypes.array,
  isTitle: PropTypes.bool,
  title: PropTypes.string,
};

Popper.defaultProps = {
  searchResults: [],
  isTitle: false,
  title: '',
};

export default Popper;
