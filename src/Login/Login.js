import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
   
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }


    return (
        <div className='container'>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSignIn}>

                <label>
                    Email:
                    <input onBlur={handleEmail} className='mb-2' type="email" name="Email" required />
                </label>
                <br></br>

                <label>
                    password:
                    <input onBlur={handlePassword} className='mb-2' type="password" name="Password" required />
                </label>
                <br></br>


                <input type="submit" value="Login" />
            </form>

            <p>{errorElement}</p>


            <p>New User? <Link to='/signup'> Please SignUp</Link></p>

            <Button onClick={() => signInWithGoogle()} variant='secondary'>SignIn With Google</Button>
        </div>
    );
};

export default Login;