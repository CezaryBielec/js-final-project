import React, { useState } from "react";
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from './Login.module.css';
import { useHistory } from "react-router-dom";

const LogInForm = (props) => {
  const history = useHistory();

  const [enteredLogin, setUserLogin] = useState('');
  const [enteredPassword, setUserPassword] = useState('');

  const userCredentials = {
    login: "login",
    password: "password"
  }

  const logInHandler = (event) => {
    event.preventDefault();
    if (enteredLogin.trim() === userCredentials.login && enteredPassword.trim() === userCredentials.password)
    {
      history.push('/notes');
    }
    else {
      alert('Wrong login or password!');
    }
  };

  const loginChangeHandler = event => {
    setUserLogin(event.target.value);
  }

  const passwordChangeHandler = event => {
    setUserPassword(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={logInHandler}>
        <label>Login</label>
        <input id="login" type="text" placeholder="login" onChange={loginChangeHandler} required></input>
        <label>Password</label>
        <input id="password" type="password" placeholder="password" onChange={passwordChangeHandler} required></input>
        <Button onClick={logInHandler}>Log in</Button>
      </form>
    </Card>
  );
};

export default LogInForm;
