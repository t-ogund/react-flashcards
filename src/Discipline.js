import React from "react";
import Card from "./Card";

class Discipline extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
        console.log(props)
        console.log(props.match.url)
    }

    render() {
        return(
            <React.Fragment>
            <h1>Let's Practice {this.props.match.url[1].toLowerCase() === "s" ? "Subtraction" : "Addition"}!</h1>
            <Card operand={this.props} topNumber={this.props.topNumberProp}  bottomNumber={this.props.bottomNumberProp} />
            </React.Fragment>
        )
    }

}

export default Discipline;