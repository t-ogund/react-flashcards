import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Add from "./Add";
import Subtract from "./Subtract";
import Card from "./Card";
import MultipleChoice from "./MultipleChoice";
import Discipline from "./Discipline";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    // this.state = {

    // }
  }

  topNumber() {
    const top = Math.floor(Math.random() * 10) + 1;
    console.log(top)
    return top
  }
  bottomNumber() {
    const bottom = Math.floor(Math.random() * 10) + 1;
    console.log(bottom)
    return bottom
  }
  multipleChoice(top, bottom) {
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const c = Math.floor(Math.random() * 20) + 1;
    // const d = top + bottom;
    console.log("A: ", a, "B: ", b, "C: ", c)
    console.log(top)
      return `A: ${a} B: ${b} C: ${c}`;
  }
  

  render() {
    const topCard = this.topNumber()
    const bottomCard = this.bottomNumber();
    const sum = topCard + bottomCard;
    console.log("SUM: ", sum)
    this.multipleChoice();
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route path="/add" render={({match}) => <Discipline match={match} topNumberProp={topCard} bottomNumberProp={bottomCard} />} />
            <Route path="/subtract" render={({match}) => <Discipline match={match} topNumberProp={topCard} bottomNumberProp={bottomCard} />} />
          </Switch>
        </BrowserRouter>
        {/* <Card topNumber={topCard} bottomNumber={bottomCard} sum={sum} /> */}
        <MultipleChoice />
      </div>
    );
  }
}

export default App;
