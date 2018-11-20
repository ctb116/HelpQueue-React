import React from 'react';
import helpDeskImg from '../assets/images/helpDeskImg.jpg';


function HeaderImg(){
  return (
    <div>
      <style jsx>{`
          img {
            display: flex;
            justify-content: center;
            height: 200px;
            width: 450px;
          }
        `}</style>
      <img src={helpDeskImg}/>
    </div>
  );
}

export default HeaderImg;
