import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './pages/main';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='
            container 
            d-flex 
            mt-2 
            justify-content-around'>
        <div className='col-3'>
          <Nav />
        </div>
        <div className='col-7 main'>
          <Main/>
        </div>
      </div>
    </div>
  );
};

export default App;