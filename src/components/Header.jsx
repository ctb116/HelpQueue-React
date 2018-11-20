import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  // var styleHeader = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  // };

    return (
      <div>
        <h1>Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
    );
  }

export default Header;
