import React from 'react';
import 'components/Container.css';

function Container ({children, className}) {
  let classNames = "container";
  if (className) {
    classNames += " " + className;
  }

  return (
      <div className={classNames}>
        {children}
      </div>
    );
}

export default Container;
