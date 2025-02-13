import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate} from "react-router-dom";


const Login = ({setToken}) => {

  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  const [registerFirstNameInput, setRegisterFirstNameInput] = useState("");
  const [registerLastNameInput, setRegisterLastNameInput] = useState("");
  const [registerEmailInput, setRegisterEmailInput] = useState("");
  const [regisetrPasswordInput, setRegisterPasswordInput] = useState("");

  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  const loginUser = async(event) => {
   
    event.preventDefault();

      const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method:`POST`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: loginEmailInput,
          password: loginPasswordInput
        })
      });

      const data = await response.json();
      // check if the user successful login
      alert(data.message)
      
      if(data.token) {

        setToken(data.token);
        localStorage.setItem('token', data.token);

        navigate('/');
      } 

    }
  
 

  const registerUser = async(event) => {
    event.preventDefault();
    const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method:`POST`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: registerFirstNameInput,
        lastName: registerLastNameInput,
        email: registerEmailInput,
        password: regisetrPasswordInput
      })
    });
    const res = await response.json();
    console.log(res);
    localStorage.setItem('userEmail', registerEmailInput);
    localStorage.setItem('userFirstName', registerFirstNameInput);

    if(res.token) {

      setToken(res.token);
      localStorage.setItem('token', res.token);

      navigate('/');
    } 

  }

 
  return(
    <>

    <h2>Login</h2>

    <form onSubmit={loginUser}>

      <input placeholder='email' 
      onChange={(event) => {setLoginEmailInput(event.target.value)}}/>

      <input placeholder='password' 
      onChange={(event) => {setLoginPasswordInput(event.target.value)}}/>

      <button onClick={() => {setIsLoggingIn(false)}}>Login</button>

    </form>


    <div>
      <h2>Not a Member?</h2>
    </div>


    <form onSubmit={registerUser}>

      <input placeholder='First Name' value={registerFirstNameInput}
      onChange={(event) => {setRegisterFirstNameInput(event.target.value)}}/>

      <input placeholder='Last Name' value={registerLastNameInput}
      onChange={(event) => {setRegisterLastNameInput(event.target.value)}}/>

      <input placeholder='email'  value={registerEmailInput}
      onChange={(event) => {setRegisterEmailInput(event.target.value)}}/>

      <input placeholder='password'  value={regisetrPasswordInput}
      onChange={(event) => {setRegisterPasswordInput(event.target.value)}}/>

      <button onClick={() => { setIsLoggingIn(true) }}>Register</button>

</form>

    <div>
        <Link to='/'>Back to Book List</Link>
    </div>
    
    </>

   
  )
}


export default Login