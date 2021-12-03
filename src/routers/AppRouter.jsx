import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Login from '../components/login/Login';
import DashBoardRouter from './DashBoardRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter= ()  => {
    return (
        
      <BrowserRouter>
        <Routes>   
                <Route path="/login" element={
                    <PublicRoutes>
                        <Login />
                    </PublicRoutes>
                } />
                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashBoardRouter />
                    </PrivateRoutes>
                } />                  
        </Routes>
    </BrowserRouter>
    
  )
}

export default AppRouter;
/*
  <Route path="/*" element={
                    <PrivateRoutes>
                        <DashBoardRouter />
                    </PrivateRoutes> } />
 */