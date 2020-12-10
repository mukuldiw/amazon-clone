import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import {auth} from "./firebase"
// import { useStateValue } from './StateProvider';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
                    />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input  type="text" value={email}
                    onChange={e => setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    <input type="password" value={password}
                    onChange={e => setPassword(e.target.value) }/>

                    <button className="login__signInButton" type="submit"
                    onClick={signIn}
                    >Sign In</button>

                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>

                </form>
            </div>
        </div>
    )
}

export default Login
