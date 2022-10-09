import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { category } from '~/data';

const cx = classNames.bind(styles);

const categorys = category;

const CategoryId = ({ category }) => (
    <li className={cx('header__menu-item', 'js-header__menu-item')}>
        <a href={`#` + category.idProp} className={cx('header__menu-link')}>
            <span className={cx('header__navbar-figure')}>
                {category.categoryId + `.`}
            </span>
            {category.name}
        </a>
    </li>
);

function Modal({ handleClose }) {
    return (
        <div className={cx('modal', 'js-modal')}>
            <div className={cx('modal__body')}>
                <div
                    className={cx('close', 'js-close')}
                    onClick={() => handleClose(false)}
                >
                    <i className={cx('close-x')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </i>
                </div>
                <ul
                    className={cx('header__list')}
                    onClick={() => handleClose(false)}
                >
                    {categorys.map((category) => (
                        <CategoryId key={category.id} category={category} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Modal;
