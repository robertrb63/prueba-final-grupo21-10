import React from 'react';
import HeroList from '../hero/HeroList';


const MarvelProduct = () => {
    return (
        <div>
            <h2>GRANDES DESCUENTOS</h2>
            <hr />
            <HeroList publisher='Marvel Comics'/>
        </div>
    );
}
export default MarvelProduct;