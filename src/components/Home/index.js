import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faEnvelope,
    faSquarePhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div id="home" className={cx('home', 'padding-top-bottom')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('home__content')}>
                    <div className={cx('row', 'sm-gutter')}>
                        <div
                            className={cx('col', 'l-6', 'col-full')}
                            data-aos="fade-right"
                        >
                            <div className={cx('intro')}>
                                <h1 className={cx('intro__title')}>
                                    I'm a web developer
                                </h1>
                                <span className={cx('intro__description')}>
                                    I love building beautiful web experience
                                </span>
                                <div className={cx('intro__button')}>
                                    <a
                                        href="#about"
                                        className={cx('intro__btn')}
                                    >
                                        About me
                                    </a>
                                    <a
                                        href="#portfolio"
                                        className={cx('intro__btn')}
                                    >
                                        Portfolio
                                    </a>
                                </div>
                                <ul className={cx('intro__connect-list')}>
                                    <li className={cx('intro__connect-item')}>
                                        <a
                                            href="tel:+84 842270622"
                                            className={cx(
                                                'intro__connect-link',
                                            )}
                                        >
                                            <i className={cx()}>
                                                <FontAwesomeIcon
                                                    icon={faSquarePhoneFlip}
                                                />
                                            </i>
                                        </a>
                                    </li>
                                    <li className={cx('intro__connect-item')}>
                                        <a
                                            href="https://www.linkedin.com/in/dienpt/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx(
                                                'intro__connect-link',
                                            )}
                                        >
                                            <i className={cx()}>
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                />
                                            </i>
                                        </a>
                                    </li>
                                    <li className={cx('intro__connect-item')}>
                                        <a
                                            href="mailto:ptdien.developer@gmail.com"
                                            className={cx(
                                                'intro__connect-link',
                                            )}
                                        >
                                            <i className={cx('contact-icon')}>
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-6',
                                'col-full',
                                'avatar-on-mobile-tablet',
                            )}
                            data-aos="fade-left"
                        >
                            <div className={cx('intro__image')}>
                                <img
                                    src={images.dienDev}
                                    alt="DienDev"
                                    className={cx('intro__image-dd')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
