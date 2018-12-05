import React from 'react';
import HeaderContainer from './HeaderContainer';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render(){
    return (
      <div>
        <HeaderContainer/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl />} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
                    onTicketSelection={this.handleChangingSelectedTicket}
                    selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  masterTicketList: state
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
