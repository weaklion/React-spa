import React, { Component } from 'react';
import styles from './Newscontent.scss';
import classNames from 'classnames/bind';
import NewsBox from './NewsBox';

const cx = classNames.bind(styles);


class Newscontent extends Component {
constructor(props){
  super(props);
  this.state = {
    items: 1,
    loadingState : false
  };
}
displayItems(){
  var items=[] ;
  for(var i=0;i< this.state.items; i++){
    items.push( <NewsBox key={i}>
    
    </NewsBox>);
  }
  return items;
};

componentDidMount(){
  this.refs.isScroll.addEventListener("scroll", () => {
    if(
      this.refs.isScroll.scrollTop + this.refs.isScroll.clientHeight
      >= this.refs.isScroll.scrollHeight - 100
    ) {
      this.loadMoreItems();
    }
  });
}
loadMoreItems() {
  if(this.state.loadingState){
    return;
  }
  this.setState({ loadingState : true});
  setTimeout(() => {
    this.setState({ items: this.state.items + 4 , loadingState:false});
  },1000);
}

  render() {
    return (
      <div ref="isScroll" style={{ height: "100vh", overflow: "auto" }}>
      <div className={cx('news-box')}
      > 
      <header className={cx('news')}>
       <h2> News </h2>
    </header>
 
      {this.displayItems()}
    {this.state.loadingState
     ? <p className="loading">
     loading More Items..
     </p>
     : ""}
    
   {
     /*
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      <article className={cx('news_object')}>
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
      */
   }
      </div>
    </div>
    );
  }
}


export default Newscontent;