import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification} from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
const SignUp = () => {
    
    const [email , setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [error, setError]=useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const[sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    if (error || error1) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }





    const handleEmail=(event)=>{
        setEmail(event.target.value);
       
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
const handleCreateUser= async(event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(email,password);
}
    const handleVerification=async()=>{
        await sendEmailVerification();
        alert('Sent email');
    }

    return (
        <div>
            <h1 className='text-center'>SignUp</h1>
           
            <form onSubmit={handleCreateUser}>
              
              <label>
                  Email:
                    <input onBlur={handleEmail} className='mb-2' type="email" name="Email" required /> 
              </label>
                <br></br>
                <label>
                    Password:
                    <input onBlur={handlePassword} className='mb-2' type="password" name="Password" required />
                </label>
                 <br></br>
                
                
                <input type="submit" value="register" />
            </form>
<Button onClick={handleVerification}>
                Verify email
</Button>

            <p> Already Have an Accont? <Link to='/login'> Please Login</Link></p>
        </div>
    );
};

export default SignUp;