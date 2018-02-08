import React from 'react';
import './styles.less';
import Series from '../Series';

const Home = () => (
  <div className='home'>
    <header>
      <div className="logo">
        <img src="img/logo.svg"/>
      </div>
    </header>
    <Series />
  </div>
);

export default Home;
