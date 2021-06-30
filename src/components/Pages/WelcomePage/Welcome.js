import React from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./Welcome.module.css";
import { WELCOME_CONTENT } from "../../../constants";
import { Link, useHistory } from 'react-router-dom';

const Welcome = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  }

  return (
    <Card className={classes.paragraph}>
      <h1>REACT NOTES</h1>
      <p>{WELCOME_CONTENT}</p>
      <Button>
        <Link className={classes.link} onClick={handleClick}>Log in</Link>
      </Button>
    </Card>
  );
};

export default Welcome;
