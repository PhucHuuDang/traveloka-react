import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import styles from './ServiceStyles.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)


function IncludeServices() {
    return ( 
            <div className={cx('App')}>

            </div>
     );
}

export default IncludeServices;