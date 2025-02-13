import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate} from "react-router-dom";


const AccountDetails = ({token}) => {

  console.log(token);

  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || {});
  const [userFirstName, setUserFirstName] = useState(localStorage.getItem("userFirstName") || {});


  return(
    <>

    {token === null ? alert(`PLEASE LOGIN FIRST`) : 
      <>
        <h2>Your Account</h2>
        
          <p>Name: {userFirstName}</p>
          <p>Email: {userEmail}</p>
      
      
      </>
    }   
    
    
     <Link to='/'>Back to Book List</Link>
    </>

  )
}


export default AccountDetails