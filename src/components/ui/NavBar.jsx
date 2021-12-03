import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const NavBar= ()  => {
    const navigate = useNavigate();

    const { user, dispatch } = useContext(AuthContext)

    const handleLogout = () => {

        dispatch({
            type: types.logout,
        })

        navigate('/login', {
            replace: true
        })
    }

  return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">

     <Link className="navbar-brand"
     to="/" >
     Home
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        <NavLink 
        className={ ({isActive}) => 'nav-item nav-link '+ (isActive && 'active')}
        to="marvel">
          DESCUENTOS
        </NavLink>

        <NavLink   className={ ({isActive}) => 'nav-item nav-link '+ (isActive && 'active')}  to="dc">
          LO MAS LLEVADO
        </NavLink>

        <NavLink   className={ ({isActive}) => 'nav-item nav-link '+ (isActive && 'active')} to="/search">
          SEARCH
        </NavLink>

      </div>
    </div>
              <div className="nabvar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                  <ul className="navbar-nav ml-auto">
                      <span className="nav-item nav-link text-info">
                          { user.name}
                      </span>
                      <button className="nav-item nav-link btn"
                          onClick={handleLogout}
                      >Logout</button>

                  </ul>
              </div>
  </div>
</nav>
  );
}
export default NavBar;