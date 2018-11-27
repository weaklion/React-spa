import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Card from '../Card';



const cx = classNames.bind(styles);

const Header = () => (
 <header className={cx('header')} >
 
 <div className={cx('header-content')}>
 <section className={cx('logo')} >
 <Link to="/">Sia</Link>
 </section>
 <section className={cx('menubar')}>
 <Card/>
 </section>
 </div>

 </header>
 
);


export default Header;