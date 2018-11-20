import React from 'react';
import helpDeskImg from '../assets/images/helpDeskImg.jpg';


function HeaderImg(){
  return (
    <div>
      <style jsx>{`
          img {
            height: 200px;
            width: 450px;
            position: absolute;
            left: 35%;
            z-index: 1000;
          }
        `}</style>
      <img src={helpDeskImg}/>
    </div>
  );
}

export default HeaderImg;
