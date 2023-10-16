import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookFinderContext } from "../context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add an error state
  const navigate = useNavigate();
  const { setIsAuth } = useContext(BookFinderContext);
  
  function handleLogin(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", {
        username: username,
        password: password,
      })
      .then(() => {
        console.log("Successfully logged in");
        setUsername('');
        setPassword('');
        setIsAuth(true); // Set the user as authenticated
        navigate('/list');
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Wrong username or password. Please try again.");
      });
  }
  
  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "5rem auto",
      }}
      noValidate
      autoComplete="off"
    >
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Username"
        placeholder="please insert your username"
        required
        fullWidth
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <TextField
        label="Password"
        required
        type="password"
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        Login
      </Button>
    </Box>
  );
}



