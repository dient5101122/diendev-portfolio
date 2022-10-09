import classNames from 'classnames/bind';
import styles from './Portfolio3.module.scss';

const cx = classNames.bind(styles);

function Portfolio3(id3) {
    return (
        <div className={cx('padding-top-bottom', 'border-bottom-dashed')}>
            <div className={cx('row', 'sm-gutter')}>
                <div
                    className={cx('col', 'l-5', 'm-6', 'c-12')}
                    data-aos="zoom-in-right"
                >
                    <img
                        src={id3.id3.imgGif}
                        className={cx('portfolio-img')}
                        alt={id3.id3.name}
                    />
                </div>
                <div
                    className={cx('col', 'l-7', 'm-6', 'c-12')}
                    data-aos="zoom-in-left"
                >
                    <div className={cx('portfolio-project', 'margin-top-16')}>
                        <h3 className={cx('portfolio-project__name')}>
                            <a
                                href={id3.id3.linkLive}
                                target="_blank"
                                rel="noreferrer"
                                className={cx('portfolio-project-link')}
                            >
                                {id3.id3.name}
                            </a>
                        </h3>
                        <div className={cx('portfolio-project-desc')}>
                            {id3.id3.description}
                        </div>
                        <ul className={cx('portfolio-project__list')}>
                            <li className={cx('portfolio-project__item')}>
                                {id3.id3.teamSize}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id3.id3.frontEnd}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id3.id3.backEnd}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id3.id3.clones}
                            </li>
                        </ul>
                        <div className={cx('row')}>
                            <div
                                className={cx(
                                    'col',
                                    'l-12',
                                    'm-6',
                                    'c-6',
                                    'portfolio-project__link-item',
                                )}
                            >
                                <a
                                    href={id3.id3.linkLive}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('portfolio-project__link-ls')}
                                >
                                    Live
                                </a>
                            </div>
                            <div
                                className={cx(
                                    'col',
                                    'l-12',
                                    'm-6',
                                    'c-6',
                                    'portfolio-project__link-item',
                                )}
                            >
                                <a
                                    href={id3.id3.linkGit}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('portfolio-project__link-ls')}
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio3;
