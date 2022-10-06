import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            {/* Begin: nav */}
            <div className={cx('grid', 'wide')}>
                <nav className={cx('header__navbar')}>
                    <div className={cx('header__navbar-logo')}>
                        <a
                            href="#home"
                            className={cx('header__navbar-logo-link')}
                        >
                            DienDev
                        </a>
                    </div>
                    <ul className={cx('header__navbar-list')}>
                        <li
                            className={cx(
                                'header__navbar-item',
                                'header__navbar-item--separate',
                                'hide-on-mobile-tablet',
                            )}
                        >
                            <a
                                href="#home"
                                className={cx('header__navbar-item-link')}
                            >
                                <span className={cx('header__navbar-figure')}>
                                    01.
                                </span>
                                Home
                            </a>
                        </li>
                        <li
                            className={cx(
                                'header__navbar-item',
                                'header__navbar-item--separate',
                                'hide-on-mobile-tablet',
                            )}
                        >
                            <a
                                href="#about"
                                className={cx('header__navbar-item-link')}
                            >
                                <span className={cx('header__navbar-figure')}>
                                    02.
                                </span>
                                About
                            </a>
                        </li>
                        <li
                            className={cx(
                                'header__navbar-item',
                                'header__navbar-item--separate',
                                'hide-on-mobile-tablet',
                            )}
                        >
                            <a
                                href="#skill"
                                className={cx('header__navbar-item-link')}
                            >
                                <span className={cx('header__navbar-figure')}>
                                    03.
                                </span>
                                Skill
                            </a>
                        </li>
                        <li
                            className={cx(
                                'header__navbar-item',
                                'header__navbar-item--separate',
                                'hide-on-mobile-tablet',
                            )}
                        >
                            <a
                                href="#portfolio"
                                className={cx('header__navbar-item-link')}
                            >
                                <span className={cx('header__navbar-figure')}>
                                    04.
                                </span>
                                Portfolio
                            </a>
                        </li>
                        <li
                            className={cx(
                                'header__navbar-item',
                                'hide-on-mobile-tablet',
                            )}
                        >
                            <a
                                href="#contact"
                                className={cx('header__navbar-item-link')}
                            >
                                <span className={cx('header__navbar-figure')}>
                                    05.
                                </span>
                                Contact
                            </a>
                        </li>
                        {/* mobile and tablet */}
                        <button
                            className={cx('header__menu-mobile', 'js-menu')}
                        >
                            <i
                                className={cx('fa-solid', 'fa-bars-staggered')}
                            ></i>
                        </button>
                        <div className={cx('toggle-theme')}>
                            <label
                                htmlFor="checkbox"
                                className={cx('toggl-border')}
                            >
                                <input
                                    type="checkbox"
                                    className={cx('toggle-checkbox')}
                                    id="checkbox"
                                />
                                <label
                                    htmlFor="checkbox"
                                    className={cx('toggle-label')}
                                >
                                    <i className={cx('theme-dark')}>
                                        <FontAwesomeIcon icon={faMoon} />
                                    </i>
                                    <i className={cx('theme-light')}>
                                        <FontAwesomeIcon icon={faSun} />
                                    </i>
                                    <div className={cx('toggle-ball')}></div>
                                </label>
                            </label>
                        </div>
                    </ul>
                </nav>
            </div>
            {/* end: nav */}
        </header>
    );
}

export default Header;
