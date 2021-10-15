import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Header, Footer, Router } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;