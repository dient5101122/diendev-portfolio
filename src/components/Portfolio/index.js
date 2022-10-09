import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';
import { portfolio } from '~/data';
import Portfolio1 from './Portfolio1';
import Portfolio2 from './Portfolio2';
import Portfolio3 from './Portfolio3';
import Portfolio4 from './Portfolio4';

const cx = classNames.bind(styles);

const products = portfolio;

const [id1, id2, id3, id4] = products;

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
                    <div className={cx('portfolio__title')} data-aos="zoom-in">
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
                    <Portfolio1 id1={id1} />
                    <Portfolio2 id2={id2} />
                    <Portfolio3 id3={id3} />
                    <Portfolio4 id4={id4} />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
