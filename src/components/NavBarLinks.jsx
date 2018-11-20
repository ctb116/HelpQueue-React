import React from 'react';
import { Link } from 'react-router-dom';

function NavBarLinks(){
  return (
    <div>
      <style jsx>{`
        div {
          margin-top: -42px;
          padding-right: 15px;
          position: absolute;
          right: 1%;
        }
      `}</style>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default NavBarLinks;
