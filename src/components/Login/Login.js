import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login page</h1>
            <form action="" className="">
                <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input type="name" name='name' placeholder='Your name' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                </div>
                <input type="submit" className='btn-submit' />
            </form>
            <p>New to ema john <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;