import React, { Component } from 'react';
import styles from './Card.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import storage from 'lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'redux/modules/user';
import SNS from './SNS';

const cx = classNames.bind(styles);


class Card extends Component {
_isMounted=false; 
//setState UnmountError(메모리 누수 방지)
  handleLogout = async () => {
    const { UserActions } = this.props;
    try{
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href= '/';
  }

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 스토라지에서 가져옴.
    if(!loggedInfo) return ; //로그인정보가 없을시 스탑
 
    const { UserActions }  = this.props;
    UserActions.setLoggedInfo(loggedInfo);
    try{
        await UserActions.checkStatus();
    } catch (e) {
         storage.remove('loggedInfo');
         window.location.href = '/auth/login?expired';
    }
    }
    componentDidMount(){
      this.initializeUserInfo();
      this._isMounted=true;
  }
  componentWillUnmount(){
    this._isMounted=false;
  }

  //set error shouldcomponentupdate 통해서 해결하기
  constructor(){
    super();

    this.state={
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event){
    event.preventDefault();
    if(this._isMounted){
    this.setState({  showMenu:true}, () =>{
      document.addEventListener('click',this.closeMenu);
    });
  }
}
  closeMenu(){
 if(this._isMounted){     
    this.setState({showMenu: false}, () => {
    document.removeEventListener('click',this.closeMenu);
  });
}
  }
  render() {
    const { user } = this.props;
    return (
      <div>
      <div className={this.state.showMenu ? 'close' : 'open'} onClick={this.showMenu}>
      <div className={cx('bar1')}></div>
      <div className={cx('bar2')}></div>
      <div className={cx('bar3')}></div>
      
      </div>
 {
   this.state.showMenu ? (
     <div className="menu"
     >
     <ul className="submenu">
    <li> { user.get('logged') ? <div onClick={this.handleLogout}>Logout</div> 
    :  <Link to='/Auth/Login/local'>Login</Link>}</li>
    <li><a href='https://en.wikipedia.org/wiki/Sia_(musician)'>About</a></li>
<<<<<<< HEAD
   <li>{ user.get('logged')?  <Link to='/News'>News</Link> : <Link to='/Auth/Login/local'>News</Link> } </li>
=======
   <li> { user.get('logged') ? <Link to='/News'>News</Link> : <Link to='/Auth/Login/local'>News</Link> } </li>
>>>>>>> 6e9146a8a924719343d0f4451e25c82f7280dbc5
    <li><Link to='/Discography'>Discography</Link></li>
    <li><SNS/></li>
 
    
     </ul>
      
     </div>
   ) : ( null ) 
 }
      </div>
    );
  }
}


export default connect(
  (state) => ({
    user: state.user
  }),
  (dispatch) => ({
      UserActions : bindActionCreators(userActions,dispatch)
  })
)(Card);