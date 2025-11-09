import AllReminders from './views/AllReminders';
import OneReminder from './views/OneReminder';
import New from './views/New';
import Edit from './views/Edit';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    /// <BrowserRouter> basically plugged in here - see index.js file
    <div className="App">
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path='/' element={<AllReminders />} />
        <Route path='/:_id' element={<OneReminder />} />
        <Route path='/new' element={<New/>} />
        <Route path='/edit/:_id' element={<Edit />} />
      </Routes>
    </div>
    ///</BrowserRouter> basically plugged in here - see index.js file
  );
}

export default App;
