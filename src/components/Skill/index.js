import classNames from 'classnames/bind';
import styles from './Skill.module.scss';

const cx = classNames.bind(styles);

function Skill() {
    return (
        <div id="skill" className={cx('skills', 'padding-top-bottom')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('skill')}>
                    <div className={cx('skill__title')}>
                        <h2 className={cx('skill__title-name', 'title__name')}>
                            skill
                        </h2>
                        <div className={cx('title__underline')}></div>
                    </div>
                    <div className={cx('row', 'sm-gutter')}>
                        <div
                            className={cx(
                                'col',
                                'l-3',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-html')}>
                                    <i
                                        className={cx('fa-brands', 'fa-html5')}
                                    ></i>
                                </span>
                                <span className={cx('skill__name')}>HTML</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-3',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-css')}>
                                    <i
                                        className={cx('fa-brands', 'fa-css3')}
                                    ></i>
                                </span>
                                <span className={cx('skill__name')}>CSS</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-3',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-javacript')}>
                                    <i className={cx('fa-brands', 'fa-js')}></i>
                                </span>
                                <span className={cx('skill__name')}>
                                    JavaScript
                                </span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-3',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-html')}>
                                    <i
                                        className={cx('fa-brands', 'fa-react')}
                                    ></i>
                                </span>
                                <span className={cx('skill__name')}>React</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
