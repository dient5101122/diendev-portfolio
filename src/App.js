import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <Header />
            <div className={cx('container')}></div>
        </div>
    );
}

export default App;
