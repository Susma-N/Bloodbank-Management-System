import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Stack } from "@mui/material";
import "./LoginChoice.css";

const LoginChoice = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (choice === "donor") {
      navigate("/donor-login");
    } else if (choice === "patient") {
      navigate("/patient-login");
    }
  };

  return (
    <div className="background-container">
      <Container className="login-choice" maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom color="white">
          Select Your Login Type
        </Typography>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          className="button-container"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => handleChoice("donor")}
            className="login-button donor"
          >
            Donor Login
          </Button>
          <Typography variant="h6" color="white" className="or-text">
            OR
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleChoice("patient")}
            className="login-button patient" 
          >
            Patient Login
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginChoice;
