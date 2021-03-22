import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Add from "./Add";
import Subtract from "./Subtract";
import Card from "./Card";
// import MultipleChoice from "./MultipleChoice";
import Discipline from "./Discipline";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    // this.state = {

    // }
  }

  
  

  render() {
    // const topCard = this.topNumber()
    // const bottomCard = this.bottomNumber();
    // const sum = topCard + bottomCard;
    // const diff = topCard - bottomCard;
    // console.log("SUM: ", sum)
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route path="/add" render={({match}) => <Discipline match={match} />} />
            <Route path="/subtract" render={({match}) => <Discipline match={match} />} />
          </Switch>
        </BrowserRouter>
        {/* <Card topNumber={topCard} bottomNumber={bottomCard} sum={sum} /> */}
      </div>
    );
  }
}

export default App;
