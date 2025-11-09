import React, { useState } from 'react';
import axios from 'axios';


function Register() {
    const [register, setRegister ] = useState({
        username: "",
        password: ""
    })

    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: register,
            withCredentials: true,
            url: "http://localhost:8080/user/register"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div>

            <h1>Register</h1>
        <input type="text" placeholder="Username" name="username" value={register.username} onChange={e => setRegister({...register, [e.target.name]: e.target.value})}  />
        <input type="text" placeholder="password" name="password" value={register.password} onChange={e => setRegister({...register, [e.target.name]: e.target.value})}  />
        <button onClick={submitHandler}>Submit</button>

        </div>
    )
}

export default Register