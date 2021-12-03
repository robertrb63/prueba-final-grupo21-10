import React from 'react';
import HeroList from '../hero/HeroList';



const DcDescuento = () => {
    return (
        <div>
            <h2>LO MAS LLEVADO POR LOS CLIENTES</h2>
            <hr />  <hr />
            <HeroList publisher='DC Comics' />

        </div>
    );
}


export default DcDescuento;