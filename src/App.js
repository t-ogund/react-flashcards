import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Add from "./Add";
import Subtract from "./Subtract";
import Card from "./Card";
import MultipleChoice from "./MultipleChoice";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route path="/add" render={({match}) => <Add />} />
            <Route path="/subtract" render={({match}) => <Subtract />} />
          </Switch>
        </BrowserRouter>
        <Card topNumber="4" bottomNumber="8" />
        <MultipleChoice />
      </div>
    );
  }
}

export default App;
