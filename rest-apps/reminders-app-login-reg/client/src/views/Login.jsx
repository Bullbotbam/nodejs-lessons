import axios from 'axios';
import React, { useState } from 'react'


function Login() {
    const [login, setLogin ] = useState({
        username: "",
        password: ""
    })

    const LoginHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: login,
            withCredentials: true,
            url: "http://localhost:8080/user/login"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const AuthUser = (e) => {
        e.preventDefault();
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/user/auth"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div>

            <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" value={login.username} onChange={e => setLogin({...login, [e.target.name]: e.target.value})}  />
        <input type="text" placeholder="password" name="password" value={login.password} onChange={e => setLogin({...login, [e.target.name]: e.target.value})}  />
        <button onClick={LoginHandler}>Submit</button>

        <div>
            <h1>Auth the User:</h1>
            <button onClick={AuthUser}>Auth</button>
        </div>

        </div>
    )
}

export default Login