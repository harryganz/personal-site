import React from 'react';

import Header from 'components/Header';
import Container from 'components/Container';

function DefaultLayout({children}) {
  return (
     <Container>
       <Header />
       <div className="content">
         { children }
       </div>
     </Container>
   );
}

export default DefaultLayout;
