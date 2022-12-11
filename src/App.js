import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Wrapper from './Wrapper';
import Header from './Header';
import Main from './Main';


import './css/basic.scss';



function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/sub01' element={<Magslide />} />
        <Route path='/sub02' element={<Store />} />*/}
      </Routes>
    </Wrapper>
  );
}

export default App;
