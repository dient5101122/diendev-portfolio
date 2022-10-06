import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <div
            id="about"
            className={cx(
                'about',
                'padding-top-bottom',
                'margin-left-right-16',
            )}
        >
            <div className={cx('grid', 'wide')}>
                <div className={cx('about__content', 'l-o-1')}>
                    <div className={cx('about-title')}>
                        <h2 className={cx('about-title__name', 'title__name')}>
                            About me
                        </h2>
                        <div className={cx('title__underline')}></div>
                    </div>
                    <div className={cx('row', 'sm-gutter')}>
                        <div className={cx('col', 'l-7')}>
                            <h3 className={cx('about-me')}>Get To Know Me!</h3>
                            <div className={cx('about-me__description')}>
                                My name is Dien.
                                <br />
                                I started learning how to code in January 2020
                                and spent most of my day experimenting with
                                HTML, CSS and JavaScript, React.
                                <br />I enjoy coding and the challenge of
                                learning something new everyday. My goal is to
                                pursue a career in the field of front-end and
                                even is full-stack development.
                            </div>
                        </div>
                        <div className={cx('col', 'l-5')}>
                            <h3 className={cx('education')}>Education</h3>
                            <div className={cx('education__desc')}>
                                <div className={cx('education__times')}>
                                    2018-2022
                                </div>
                                <h4 className={cx('education__university')}>
                                    Computer science engineer - Can Tho
                                    University of Technology
                                </h4>
                                <div className={cx('education__times')}>
                                    2022
                                </div>
                                <h4 className={cx('education__university')}>
                                    <a
                                        href="https://drive.google.com/drive/folders/1mpns5u_2V2pSfuqbhWammEEgxsdmAqwp?usp=sharing"
                                        className={cx('contact__me')}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Certificate
                                    </a>{' '}
                                    of online learning at F8
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
