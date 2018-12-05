import React from 'react';
import PropTypes from 'prop-types';

function Error404(props){
  var styles = {
    paddingLeft: '50px',
  };

  return (
    <div>
      <h1>Opps! Page not found.</h1>
      <h2 style={styles}>{props.location.pathname}</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};


export default Error404;
