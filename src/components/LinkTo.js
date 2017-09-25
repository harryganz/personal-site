import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


function LinkTo({ to, className, push, children }) {
  return (
      <a 
        className={className}
        href={to}
        onClick={(e) => {
            e.preventDefault();
            push(to);
          }
        }
      >{children}</a>
    );
}        

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(null, mapDispatchToProps)(LinkTo);
