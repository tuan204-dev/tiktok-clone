import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { faPaperPlane, faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const Header = (props) => {
  const { children } = props;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="" />
        </div>

        <div className={cx('search')}>
          <form action="#" className={cx('form')}>
            <input className={cx('search-input')} type="text" placeholder="Search" spellCheck={false} />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <div className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </div>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div className={cx('action')}>
          <button className={cx('upload')}>
            <div className={cx('plus-icon')}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            Upload
          </button>
          <button className={cx('message')}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          <button className={cx('notification')}>
            <FontAwesomeIcon icon={faMessage} />
          </button>
          <button className={cx('profile')}>
            <img
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/344198650_721179543138042_2742053356581880045_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5gb5GSg5MS0AX-pmYlh&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCDAqzFT4PyUPDNIfI4bER-mwHgq0rFTHZsCFIrkr0MEQ&oe=645B032C"
              alt="avt"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
