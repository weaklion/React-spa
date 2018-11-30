import React from 'react';
import styles from './NewsBox.scss';
import classNames from 'classnames/bind';
import christmas from '../../image/album/SIA_Everyday-is-christmas.jpg';
import news1 from '../../image/092118_SIA_OC_ASIN_US_CL_1x1.jpg';
import news3 from '../../image/121117_Sia_Snowman_Ellen_IG_V2b+(1).jpg';
import news2 from '../../image/CROP+-+Facetune_13-07-2018-13-26-47.png';


const cx = classNames.bind(styles);

const NewsBox = ({key}) => (
  <div>
    <article className={cx('news_object')} key={key}>
    <div className={cx('news_title')}><h5>'Everyday Is Christmas' + 3 New Songs - Out Today!</h5></div>
    <div className={cx('news_thumbnail')}>
    <img src={christmas} className={cx('news_image')} alt="news_image"></img>
    </div>
    <div className={cx('news_content')}>
    The most wonderful time of the year is coming! To make your holiday <br/>extra special Everyday Is Christmas is out today with three new bonus tracks, 
    <br/>including "Sing For My Life," "My Old Santa Claus,"<br></br>  a cover of Perry Como's "Round and Round." 
    <br/>Stream/download in all your fave places or head to Target to get the exclusive CD for someone on your nice list. - Team Sia
    </div>
    <div className={cx('news_detail')}> </div>
    </article>
    <article className={cx('news_object')} key={key}>
    <div className={cx('news_title')}><h5>'NEW SONG: "STEP BY STEP" OUT EXCLUSIVELY ON AMAZON MUSIC!
!</h5></div>
    <div className={cx('news_thumbnail')}>
    <img src={news1} className={cx('news_image')} alt="news_image"></img>
    </div>
    <div className={cx('news_content')}>
    It's a good day for a new song! Listen to “Step By Step” exclusively on Amazon Music 🎀- Team Sia
    </div>
    <div className={cx('news_detail')}> </div>
    </article>
    <article className={cx('news_object')} key={key}>
    <div className={cx('news_title')}><h5>'SIA HALLOWEEN WIGS - AVAILABLE NOW!'</h5></div>
    <div className={cx('news_thumbnail')}>
    <img src={news2} className={cx('news_image')} alt="news_image"></img>
    </div>
    <div className={cx('news_content')}>
    Halloween will be here before you know it! This year Team Sia's got you covered with the first official Sia wig & its own black bow available now in the webstore 🎃 👻  All Sia proceeds will be donated to The Trevor Project ❤ - Team Sia
    </div>
    <div className={cx('news_detail')}> </div>
    </article>
    <article className={cx('news_object')} key={key}>
    <div className={cx('news_title')}><h5>'SIA'S PERFORMING "SNOWMAN" ON THE ELLEN SHOW THIS WEDNESDAY!</h5></div>
    <div className={cx('news_thumbnail')}>
    <img src={news3} className={cx('news_image')} alt="news_image"></img>
    </div>
    <div className={cx('news_content')}>
    Sia's bringing the Christmas spirit to The Ellen Degeneres Show this Wednesday with Snowman ️💫⛄️ find out when to watch & check your local listings - Team Sia
    </div>
    <div className={cx('news_detail')}> </div>
    </article>
    </div>
);

export default NewsBox;