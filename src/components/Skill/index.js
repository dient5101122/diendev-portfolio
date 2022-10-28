import {
    faCss3,
    faHtml5,
    faJs,
    faPython,
    faReact,
    faUikit,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Skill.module.scss';

const cx = classNames.bind(styles);

function Skill() {
    return (
        <div id="skill" className={cx('skills', 'padding-top-bottom')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('skill')}>
                    <div className={cx('skill__title')} data-aos="zoom-in">
                        <h2 className={cx('skill__title-name', 'title__name')}>
                            skill
                        </h2>
                        <div className={cx('title__underline')}></div>
                    </div>
                    <div
                        className={cx('row', 'sm-gutter', 'margin-rl-16')}
                        data-aos="flip-down"
                    >
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-html')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faHtml5} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>HTML</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-css')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faCss3} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>CSS</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-javaScript')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faJs} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>
                                    JavaScript
                                </span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27-pc',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-react')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faReact} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>React</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27-pc',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-materialUI')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faUikit} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>MUI</span>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'col',
                                'l-4',
                                'm-6',
                                'c-6',
                                'margin-t27-pc',
                                'margin-t27',
                            )}
                        >
                            <div className={cx('skill__logo')}>
                                <span className={cx('skill__logo-python')}>
                                    <i className={cx()}>
                                        <FontAwesomeIcon icon={faPython} />
                                    </i>
                                </span>
                                <span className={cx('skill__name')}>
                                    Python
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
