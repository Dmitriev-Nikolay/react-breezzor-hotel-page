import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Header, Footer, Router } from './components';

const App = () => {
  return (
    // <div className="wrapper">
      <BrowserRouter>
        <Header />
        {/* <div className="content">
          <div className="container"> */}
            <Router />
          {/* </div>
        </div> */}
        <Footer />
      </BrowserRouter>
    // </div>
  );
};

export default App;