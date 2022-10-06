import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <div
            id="portfolio"
            className={cx(
                'portfolios',
                'padding-top-bottom',
                'margin-left-right-16',
            )}
        >
            <div className={cx('grid', 'wide')}>
                <div className={cx('portfolio')}>
                    <div className={cx('portfolio__title')}>
                        <h2
                            className={cx(
                                'portfolio__title-name',
                                'title__name',
                            )}
                        >
                            portfolio
                        </h2>
                        <div className={cx('title__underline')}></div>
                    </div>
                    <div
                        className={cx(
                            'padding-top-bottom',
                            'border-bottom-dashed',
                        )}
                    >
                        <div className={cx('row', 'sm-gutter')}>
                            <div className={cx('col', 'l-5', 'm-6', 'c-12')}>
                                <img
                                    src="https://media.giphy.com/media/2X8MYmmfEUszRt3uRx/giphy.gif"
                                    className={cx('portfolio-img')}
                                    alt="Todo app with redux"
                                />
                            </div>
                            <div className={cx('col', 'l-7', 'm-6', 'c-12')}>
                                <div
                                    className={cx(
                                        'portfolio-project',
                                        'margin-top-16',
                                    )}
                                >
                                    <h3
                                        className={cx(
                                            'portfolio-project__name',
                                        )}
                                    >
                                        <a
                                            href="https://diendev-todo-app.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx(
                                                'portfolio-project-link',
                                            )}
                                        >
                                            Todo app with redux
                                        </a>
                                    </h3>
                                    <div
                                        className={cx('portfolio-project-desc')}
                                    >
                                        Todo app use fake api so add function
                                        will not work on product environment.
                                        This project was built using React,
                                        Redux-toolkit.
                                    </div>
                                    <ul
                                        className={cx(
                                            'portfolio-project__list',
                                        )}
                                    >
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Team size: 1.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Front-End: React, Redux-toolkit.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Back-End: fake Api.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Clones: according to HoleTex.
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
                                                href="https://diendev-todo-app.netlify.app/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
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
                                                href="https://github.com/dien-dev/todo-app.git"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
                                            >
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            'padding-top-bottom',
                            'border-bottom-dashed',
                        )}
                    >
                        <div className={cx('row', 'sm-gutter')}>
                            <div className={cx('col', 'l-7', 'm-6', 'c-12')}>
                                <div className={cx('portfolio-desc')}>
                                    <h3 className={cx('portfolio-project')}>
                                        <a
                                            href="https://diendev-shopee.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx(
                                                'portfolio-project-link',
                                            )}
                                        >
                                            Shopee Product Page
                                        </a>
                                    </h3>
                                    <div
                                        className={cx('portfolio-project-desc')}
                                    >
                                        An E-commerce website to sell products
                                        of shopee partners. This project was
                                        built using HTML, CSS, Responsive.
                                    </div>
                                    <ul
                                        className={cx(
                                            'portfolio-project__list',
                                        )}
                                    >
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Team size: 1.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Front-End: HTML, CSS, Responsive.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Back-End: no process.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Clones: shopee.vn
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
                                                href="https://diendev-shopee.netlify.app/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
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
                                                href="https://github.com/dien-dev/shopee-products.git"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
                                            >
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col', 'l-5', 'm-6', 'c-12')}>
                                <img
                                    src="https://media.giphy.com/media/XYukwR4kjRxwdfearQ/giphy.gif"
                                    alt="Shopee Product Page"
                                    className={cx(
                                        'portfolio-img',
                                        'margin-top-16',
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            'padding-top-bottom border-bottom-dashed',
                        )}
                    >
                        <div className={cx('row sm-gutter')}>
                            <div className={cx('col', 'l-5', 'm-6', 'c-12')}>
                                <img
                                    src="https://media.giphy.com/media/07IXBOJIFrDqNF2iG1/giphy.gif"
                                    className={cx('portfolio-img')}
                                    alt="The Band"
                                />
                            </div>
                            <div className={cx('col', 'l-7', 'm-6', 'c-12')}>
                                <div
                                    className={cx(
                                        'portfolio-project',
                                        'margin-top-16',
                                    )}
                                >
                                    <h3
                                        className={cx(
                                            'portfolio-project__name',
                                        )}
                                    >
                                        <a
                                            href="https://diendev-the-band.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx(
                                                'portfolio-project-link',
                                            )}
                                        >
                                            The Band
                                        </a>
                                    </h3>
                                    <div
                                        className={cx('portfolio-project-desc')}
                                    >
                                        The band was built on the w3chool
                                        template. This project was built using
                                        HTML, CSS, JavaScript, Responsive.
                                    </div>
                                    <ul
                                        className={cx(
                                            'portfolio-project__list',
                                        )}
                                    >
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Team size: 1.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Front-End: HTML, CSS, JavaScript,
                                            Responsive.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Back-End: no process.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Clones:
                                            https://www.w3schools.com/w3css/tryw3css_templates_band.htm
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
                                                href="https://diendev-the-band.netlify.app/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
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
                                                href="https://github.com/dien-dev/web-the-band.git"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
                                            >
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            'padding-top-bottom',
                            'border-bottom-dashed',
                        )}
                    >
                        <div className={cx('row', 'sm-gutter')}>
                            <div className={cx('col', 'l-7', 'm-6', 'c-12')}>
                                <div className={cx('portfolio-desc')}>
                                    <h3 className={cx('portfolio-project')}>
                                        <a
                                            href="https://github.com/dien-dev/anime.git"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx(
                                                'portfolio-project-link',
                                            )}
                                        >
                                            Anime movies
                                        </a>
                                    </h3>
                                    <div
                                        className={cx('portfolio-project-desc')}
                                    >
                                        anime movies is a movie watching website
                                        with an integrated recommendation
                                        system.
                                    </div>
                                    <ul
                                        className={cx(
                                            'portfolio-project__list',
                                        )}
                                    >
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Team size: 2.
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Front-End: React
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Back-End: Python, Django framework
                                        </li>
                                        <li
                                            className={cx(
                                                'portfolio-project__item',
                                            )}
                                        >
                                            Clones: null
                                        </li>
                                    </ul>
                                    <div className={cx('row')}>
                                        <div
                                            className={cx(
                                                'col',
                                                'l-12',
                                                'm-6',
                                                'c-6',
                                                'portfolio-project__link-item--preventDefault',
                                            )}
                                        >
                                            <a
                                                href="#portfolio"
                                                target="_blank"
                                                onclick="event.preventDefault()"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                    'folio-project__link-ls--preventDefault',
                                                )}
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
                                                href="https://github.com/dien-dev/anime.git"
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    'portfolio-project__link-ls',
                                                )}
                                            >
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col', 'l-5', 'm-6', 'c-12')}>
                                <img
                                    src="https://media.giphy.com/media/lpJb1TaJAo0qPWr9d2/giphy.gif"
                                    className={cx(
                                        'portfolio-img',
                                        'margin-top-16',
                                    )}
                                    alt="Anime movies"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
