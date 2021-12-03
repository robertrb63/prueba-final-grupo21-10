import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const Login = () => {

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)


    const handleLogin = () => {

        const action = {
            type: types.login,
            paylodad: { name: 'Roberto '}
        };

        dispatch(action);


            navigate('/', {
            replace: true
        });
    }
    return (
        <div className="container mt-6">

            <button className="btn btn-primary"
                onClick={handleLogin}>
                <h4>Home</h4></button>
        </div>
    );
}
export default Login;