import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SearchScreen from '../components/search/SearchScreen';
import NavBar from '../components/ui/NavBar';
import MarvelProduct from '../components/marvel/MarvelProduct';
import DcDescuento from '../components/dc/DcDescuento';
import HeroScreen from '../components/hero/HeroScreen';


const DashBoardRouter= ()  => {
  return (

    <>
    <NavBar/>
    <div className="container mt-6">
              <Routes>

                  <Route path="dc" element={<DcDescuento />} />
                  <Route path="marvel" element={<MarvelProduct />} />
                 <Route path="search" element={<SearchScreen/>}/>
                  <Route path="/" element={<MarvelProduct />} />
                  <Route path="hero/:heroId" element={<HeroScreen />} />
    </Routes>
    </div>
        </>
    
  )
}

export default DashBoardRouter;