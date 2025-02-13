import { Link, Route,Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './component/HomePage.jsx'
import BookDetails from './component/BookDetails.jsx'
import Login from './component/Login.jsx'
import AccountDetails from './component/AccountDtails.jsx'



function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();


  return (
    <>
    <div>
     <Link to='/Login'>Login/Register?</Link>
    </div>

    <div>
     <Link to='/AccountDetails'>Your Account</Link>
    </div>

      <h1>Hello Beautiful Souls!</h1>

      <Routes>
        <Route path="/" element={<HomePage token={token}/>}/>
        <Route path="/BookDetails/:id" element={<BookDetails token={token}/>}/>
        <Route path="/Login" element={<Login setToken={setToken}/>}/>
        <Route path="/AccountDetails" element={<AccountDetails token={token}/>}/>
      </Routes>

    </>
  )
}

export default App
