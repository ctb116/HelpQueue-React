import React from 'react';
import HeaderImg from './HeaderImg';
import NavBar from './NavBar';
import helpDeskBackground from '../assets/images/helpDeskBackground.jpg';

function HeaderContainer(){
  return (
    <div>
      <style jsx>{`
          img {
            height: 200px;
            width: 100%;
            display: flex;
            margin-left: 0px;
            margin-top: -8px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
        `}</style>
      <HeaderImg/>
      <img src={helpDeskBackground}/>
      <NavBar/>
    </div>
  );
}

export default HeaderContainer;
