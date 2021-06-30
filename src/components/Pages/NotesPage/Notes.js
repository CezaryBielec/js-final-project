import React, { Fragment } from "react";
import Card from "../../UI/Card";
import classes from "./Notes.module.css";

const Notes = (props) => {
  return (
    <Fragment>
      <ul>
        {props.notes.map((note) => (
          <Fragment>
            <br></br>
            <Card className={classes.notes}>{note}</Card>
            <br></br>
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};

export default Notes;
