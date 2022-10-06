import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <Header />
            <div className={cx('container')}>
                <Home />
                <About />
                <Skill />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
