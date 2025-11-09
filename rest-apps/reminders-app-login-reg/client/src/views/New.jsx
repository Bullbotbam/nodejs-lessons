import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import handleChange from '../actions/handleChange';
import useAuth from '../actions/useAuth';


export default function New(props) {
    
    // Init state with a fresh/blank reminder object - based on our model from server folder
    const [reminder, setReminder] = useState({
        title:"",
        description: '',
        isDone: false,
        days: Date.now()
    });

    //Var access to useNav hook
    const navigate = useNavigate();

    // Actually auth the user to make sure they are allowed to access this page.
    useAuth()


    // called from submit button - sends state reminder obj to API - creating obj in db - navs home when done
    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/create`, reminder, { withCredentials: true } )
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate(`/`)
    }

    //exporting logic for modifying state Reminder obj - then setting state to that reminder
    // We do this to save time on repeating code - and its clearer to read
    const changeHandler = event => {
        setReminder(
            handleChange(reminder, event))
        
    }

    return (
        <div>
            {/* Ternary to gracefully await API data from state - loads when state is set */}
            {/* we really dont need this when creating a new reminder bc state has initial values - even tho blank */}
            { reminder ?
            <div>
                <input value={reminder.title} onChange={changeHandler} placeholder="Reminder title"name="title"/>
                <input value={reminder.description} onChange={changeHandler}  placeholder="Description" name="description"/>

            <br/>
            <button onClick={submitHandler}>Submit</button>
            </div>

            : <p>Loading reminder....</p>}

        </div>
    )
}