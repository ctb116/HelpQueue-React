import React from 'react';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import HeaderContainer from './HeaderContainer';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <HeaderContainer/>

      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
