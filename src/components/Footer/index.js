import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid')}>
                <div className={cx('copyright')}>
                    © 2022 DienDev. All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
