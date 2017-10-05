import React from 'react';

import 'components/TwoColumnGrid.css';

function TwoColumnGrid({ children }) {
  let n = Math.floor(children.length/2);

  return (
    <div className="flex flex-two-col">
      <div className="flex-grow">
        { children.slice(0, n) }
      </div>
      <div className="flex-grow">
        { children.slice(n) }
      </div>
    </div>
  );
}

export default TwoColumnGrid;

