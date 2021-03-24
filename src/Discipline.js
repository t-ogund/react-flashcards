import React from "react";
import Card from "./Card";
// import MultipleChoice from "./MultipleChoice";

class Discipline extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.match.url)
    }
    
    render() {
        return(
            <React.Fragment>
                <h1>Let's Practice {this.props.match.url[1].toLowerCase() === "s" ? "Subtraction" : "Addition"}!</h1>
                <Card operand={this.props} />
            </React.Fragment>
        )
    }

}

export default Discipline;