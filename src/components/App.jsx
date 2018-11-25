import React from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import HeaderContainer from './HeaderContainer';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList:[]
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>}/>
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}/>}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
