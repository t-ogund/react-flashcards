import React from "react";

class Discipline extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
        console.log(props.match.url)
    }

    render() {
        return(
            <h1>Let's Practice {this.props.match.url[1].toLowerCase() === "s" ? "Subtraction" : "Addition"}!</h1>
        )
    }

}

export default Discipline;