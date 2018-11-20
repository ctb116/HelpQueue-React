import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div><style jsx>{`
      div {
        background-color: #a9b8c0;
        margin-top: -30px;
        padding-left: 15px;
      }
    `}</style>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default NavBar;
