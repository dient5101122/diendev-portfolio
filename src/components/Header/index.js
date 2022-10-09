import {
    faBarsStaggered,
    faMoon,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Header.module.scss';
import Modal from '~/components/Modal';
import { category } from '~/data';

const cx = classNames.bind(styles);

const categorys = category;

const CategoryId = ({ category }) => (
    <li
        className={cx(
            'header__navbar-item',
            'header__navbar-item--separate',
            'hide-on-mobile-tablet',
        )}
    >
        <a
            href={`#` + category.idProp}
            className={cx('header__navbar-item-link')}
        >
            <span className={cx('header__navbar-figure')}>
                {category.categoryId + `.`}
            </span>
            {category.name}
        </a>
    </li>
);

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isClassName, setIsClassName] = useState(false);
    const [heightCurrent, setHeightCurrent] = useState(
        window.scrollY || document.documentElement.scrollTop,
    );

    const header = useRef();
    const headerMenu = useRef();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        (document.onscroll = () => {
            setHeightCurrent(
                window.scrollY || document.documentElement.scrollTop,
            );

            const headerHeight = header.current.offsetHeight;
            const newHeight = headerHeight - heightCurrent;

            let newHeaderHeight = newHeight > 0 ? newHeight : 0;

            if (newHeaderHeight < 40) {
                setIsClassName(true);
            } else {
                setIsClassName(false);
            }
        }),
        [],
    );

    const showModal = () => {
        setIsActive(true);
    };
    const className = 'headerbg--active';
    const diendev = '<DienDev/>';
    return (
        <header
            id="header"
            className={cx('header', { [className]: isClassName })}
            ref={header}
        >
            {/* Begin: nav */}
            <div className={cx('grid', 'wide')}>
                <nav className={cx('header__navbar')}>
                    <div className={cx('header__navbar-logo')}>
                        <a
                            href="#home"
                            className={cx('header__navbar-logo-link')}
                        >
                            {diendev}
                        </a>
                    </div>
                    <ul className={cx('header__navbar-list')}>
                        {categorys.map((category) => (
                            <CategoryId key={category.id} category={category} />
                        ))}
                        {isActive && <Modal handleClose={setIsActive} />}
                        <button
                            ref={headerMenu}
                            className={cx('header__menu-mobile', 'js-menu', {
                                [className]: isClassName,
                            })}
                            onClick={showModal}
                        >
                            <i className={cx()}>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </i>
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
                                    onChange={() => {
                                        document.body.classList.toggle(
                                            'dark-theme',
                                        );
                                    }}
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
