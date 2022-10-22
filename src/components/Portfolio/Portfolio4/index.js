import classNames from 'classnames/bind';
import styles from './Portfolio4.module.scss';

const cx = classNames.bind(styles);

function Portfolio4(id4) {
    function handlePreventDefault(e) {
        e.preventDefault();
    }

    return (
        <div className={cx('padding-top-bottom', 'border-bottom-dashed')}>
            <div className={cx('row', 'sm-gutter')}>
                <div
                    className={cx('col', 'l-7', 'm-6', 'c-12')}
                    data-aos="zoom-in-right"
                >
                    <div className={cx('portfolio-desc')}>
                        <h3 className={cx('portfolio-project')}>
                            <a
                                href={id4.id4.linkLive}
                                target="_blank"
                                rel="noreferrer"
                                className={cx('portfolio-project-link')}
                            >
                                {id4.id4.name}
                            </a>
                        </h3>
                        <div className={cx('portfolio-project-desc')}>
                            {id4.id4.description}
                        </div>
                        <ul className={cx('portfolio-project__list')}>
                            <li className={cx('portfolio-project__item')}>
                                {id4.id4.teamSize}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id4.id4.frontEnd}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id4.id4.backEnd}
                            </li>
                            <li className={cx('portfolio-project__item')}>
                                {id4.id4.clones}
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
                                    href={id4.id4.linkLive}
                                    rel="noreferrer"
                                    className={cx(
                                        'portfolio-project__link-ls',
                                        'folio-project__link-ls--preventDefault',
                                    )}
                                    onClick={handlePreventDefault}
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
                                    href={id4.id4.linkGit}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx(
                                        'portfolio-project__link-ls',
                                        'portfolio-project__link-ls-hover',
                                    )}
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={cx('col', 'l-5', 'm-6', 'c-12')}
                    data-aos="zoom-in-left"
                >
                    <img
                        src={id4.id4.imgGif}
                        alt={id4.id4.name}
                        className={cx('portfolio-img', 'margin-top-16')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio4;
