import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('context  ', user)

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'><span className='text-red-700'>Awesome</span>Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email ?
                        <button onClick={handleSignOut} className='btn btn-sm l-2m'>Log Out</button>
                        :
                        <Link to='/login' className='btn btn-sm l-2m'>LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Header;