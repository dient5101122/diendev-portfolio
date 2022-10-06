import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div id="contact" className={cx('contact', 'padding-top-bottom')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('contact__title')}>
                    <h2 className={cx('contact__title', 'title__name')}>
                        Contact
                    </h2>
                    <div className={cx('title__underline')}></div>
                </div>
                <div className={cx('row', 'sm-gutter')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('contact__info-frame')}>
                            <div className={cx('contact__info-list')}>
                                <p className={cx('contact-p')}>
                                    <i className={cx('contact-icon')}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </i>
                                    Address: Ho Chi Minh City, Vietnam
                                </p>
                                <p className={cx('contact-p')}>
                                    <i className={cx('contact-icon')}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </i>
                                    Phone:{' '}
                                    <a
                                        className={cx('contact__me')}
                                        href="tel:+84 842270622"
                                    >
                                        +84 84 227 0622
                                    </a>
                                </p>
                                <p className={cx('contact-p')}>
                                    <i className={cx('contact-icon')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i>
                                    Email:
                                    <a
                                        className={cx('contact__me')}
                                        href="mailto:ptdien.developer@gmail.com"
                                    >
                                        ptdien.developer@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
