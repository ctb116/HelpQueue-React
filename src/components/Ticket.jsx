import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style global jsx> {`
        body {
        background-color: #013A6B;
        background-image: -webkit-linear-gradient(28deg, #ffffff 80%, #c4d1d6 20%);
        background-repeat: no-repeat;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
