import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    if (!firstName || !lastName || !email || !username || !password || !passwordConfirmation) {
      setError("Please fill out all the fields.");
      return;
    }

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    axios
      .post("http://localhost:3000/api/user/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
      })
      .then(() => {
        console.log("Successfully registered");
        navigate("/login");

        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
        // navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering:", error);
        // Handle registration error here
      });
  }

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
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
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TextField
        label="First Name"
        placeholder="Please insert your First Name"
        required
        fullWidth
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <TextField
        label="Last Name"
        placeholder="Please insert your Last Name"
        required
        fullWidth
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <TextField
        label="Email"
        placeholder="Please insert your email"
        required
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        label="Username"
        placeholder="Please insert your username"
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
      <TextField
        label="Confirm Password"
        required
        type="password"
        fullWidth
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        value={passwordConfirmation}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        Submit
      </Button>
    </Box>
  );
}
