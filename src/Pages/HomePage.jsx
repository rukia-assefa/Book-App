import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
  const handleLoginNavigate=()=>{
    navigate("/login")
  }
  const handleSignupNavigate=()=>{
    navigate("/sign-up")
  }
  return (<>
        <h2>Welcome to the Book finder app</h2>
        <p>
        Welcome to Books website! To explore our booklist, please <b> sign up </b> or <b>login</b>. If you already have an account, simply click the 'Login' button."
        </p>
        <Button variant="contained" 
        sx={{marginRight:"1rem"}}
        onClick={handleLoginNavigate}
        >Log in </Button>
        <Button variant="outlined"
        onClick={handleSignupNavigate}

        >Sign up
        </Button>
        </>
  )
}

export default Home