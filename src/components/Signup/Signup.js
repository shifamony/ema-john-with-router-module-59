import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    return (
        <div>
            <h1>Signup page</h1>
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
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='password' placeholder='Confirm Your password' required />
                </div>
                <input type="submit" className='btn-submit' />
            </form>
            <p>All ready have an account <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;