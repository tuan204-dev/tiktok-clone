import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Popper from '~/components/Popper/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const data = [
  {
    avt: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1683630000&x-signature=uoABDwTg7%2Fo%2BsFS3qed9at8L%2F1s%3D',
    userId: 'tiger050794',
    username: 'Son Tung M-TP',
  },
  {
    avt: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1683630000&x-signature=uoABDwTg7%2Fo%2BsFS3qed9at8L%2F1s%3D',
    userId: 'tiger050794',
    username: 'Son Tung M-TP',
  },
  {
    avt: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1683630000&x-signature=uoABDwTg7%2Fo%2BsFS3qed9at8L%2F1s%3D',
    userId: 'tiger050794',
    username: 'Son Tung M-TP',
  },
  {
    avt: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1683630000&x-signature=uoABDwTg7%2Fo%2BsFS3qed9at8L%2F1s%3D',
    userId: 'tiger050794',
    username: 'Son Tung M-TP',
  },
  {
    avt: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d~c5_300x300.webp?x-expires=1683630000&x-signature=uoABDwTg7%2Fo%2BsFS3qed9at8L%2F1s%3D',
    userId: 'tiger050794',
    username: 'Son Tung M-TP',
  },
];

const Header = (props) => {
  const [searchResult, setSearchResult] = useState(data);
  const [searchSuggestionVisible, setSearchSuggestionVisible] = useState(true);
  const [profilePopupVisible, setProfilePopupVisible] = useState(false);
  const [clearBtnVisible, setClearBtnVisible] = useState(false);
  const [inputValue, setInputVale] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {}, 300);

    setClearBtnVisible(Boolean(inputValue));

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="" />
        </div>

        <div className={cx('search')}>
          <form action="#" className={cx('form')}>
            <input
              onFocus={() => setSearchSuggestionVisible(true)}
              onBlur={() => setSearchSuggestionVisible(false)}
              onChange={(e) => setInputVale(e.target.value)}
              value={inputValue}
              className={cx('search-input')}
              type="text"
              placeholder="Search"
              spellCheck={false}
            />

            <button
              className={cx({
                clear: true,
                hidden: !clearBtnVisible,
              })}
              onClick={() => setInputVale('')}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <div className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </div>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

          {searchSuggestionVisible && (
            <div className={cx('popper')}>
              <Popper searchResults={searchResult} isTitle={true} title="Accounts" />
            </div>
          )}
        </div>

        <div className={cx('action')}>
          <button className={cx('upload')}>
            <div className={cx('plus-icon')}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            Upload
          </button>
          <Tippy content="Message" animation={false}>
            <button className={cx('message')}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </Tippy>
          <Tippy content="Inbox" animation={false}>
            <button className={cx('notification')}>
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Tippy>
          <button
            onMouseEnter={() => setProfilePopupVisible(true)}
            onMouseLeave={() => setProfilePopupVisible(false)}
            className={cx('profile')}
          >
            <img
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/344198650_721179543138042_2742053356581880045_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gb5GSg5MS0AX-pmYlh&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCDAqzFT4PyUPDNIfI4bER-mwHgq0rFTHZsCFIrkr0MEQ&oe=645B032C"
              alt="avt"
            />

            <div className={cx('profile-popup')}>
              <Popper/>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
