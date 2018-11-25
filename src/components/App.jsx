import React from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import HeaderContainer from './HeaderContainer';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx> {`
        body {
        background-image: -webkit-linear-gradient(28deg, #ffffff 80%, #c4d1d6 20%);
        min-height: 1000px;
        background-repeat: no-repeat;
        }
      `}</style>
      <HeaderContainer/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
