import React, { Fragment, useState } from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const NotesPage = (props) => {
  const [notesList, setNotesList] = useState([]);

  const addNoteHandler = (note) => {
    setNotesList((prevNotesList) => {
      return [...prevNotesList, note];
    });
  };

  return (
    <Fragment>
      <AddNote onAddNote={addNoteHandler} />
      <Notes notes={notesList} />
    </Fragment>
  );
};

export default NotesPage;
