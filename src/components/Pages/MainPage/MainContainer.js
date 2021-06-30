import React, { Fragment} from "react";
import Welcome from "../WelcomePage/Welcome"
import LogInForm from "../LoginPage/LogInForm";
import { Route, Redirect } from "react-router-dom";
import NotesPage from "../NotesPage/NotesPage";

const MainContainer = (props) => {
  return (
    <Fragment>
      <Redirect from="/" to="/welcome" />
      <Route path="/welcome" component={Welcome}/>
      <Route path="/login" component={LogInForm}/>
      <Route path="/notes" component={NotesPage}/>
    </Fragment>
  );
};

export default MainContainer;
