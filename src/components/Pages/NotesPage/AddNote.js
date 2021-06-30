import React, { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./AddNote.module.css";
import { ADD_NOTE_PLACEHOLDER } from "../../../constants";

const AddNote = (props) => {
  const [noteContent, setNoteContent] = useState("");

  const addNoteHandler = (event) => {
    event.preventDefault();
    if (noteContent.length !== 0) {
      props.onAddNote(noteContent);
    } else {
      alert("Please enter note");
    }
    setNoteContent("");
  };

  const noteContentChangeHandler = (event) => {
    setNoteContent(event.target.value);
  };

  return (
    <Card className={classes.form}>
      <form>
        <label>Note</label>
        <div></div>
        <input
          placeholder={ADD_NOTE_PLACEHOLDER}
          onChange={noteContentChangeHandler}
          value={noteContent}
        ></input>
        <Button onClick={addNoteHandler}>Add Note</Button>
      </form>
    </Card>
  );
};

export default AddNote;
