import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import HeaderImg from './HeaderImg';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  // var masterStyle = {
  //     backgroundColor: 'blue',
  //     fontFamily: 'sans-serif',
  // };
  return (
    <div>
      <HeaderImg/>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
