import React from 'react';
import HeroList from '../heroes/HeroList';



const MarvelScreen = ()  => {
  return (
    <div>
        <h2>MarvelScreen</h2>
        <hr />
        <HeroList publisher='Dc Comics2'/>
    </div>
  );
}

export default MarvelScreen;