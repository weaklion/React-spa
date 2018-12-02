import React from 'react';
import styles from './AuthWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthWrapper = ({children}) =>(
    <div className={cx('page')}>
    <div className={cx('Positioner')}>
    <div className={cx('Contents')}>
    {children}
    </div>
    </div>
    </div>

);
export default AuthWrapper;