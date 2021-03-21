import React from "react";

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
        console.log(props)
    }

    render() {

        return(
            <div id="multi-choice-container">
                <button className="choice">{this.props.choiceA}</button>
                <button className="choice">{this.props.choiceB}</button>
                <button className="choice">{this.props.choiceC}</button>
                <button className="choice">{this.props.match.url[1] === "a" ? this.props.choiceDAddition : this.props.choiceDSubtraction }</button>
            </div>
        )
    }
}

export default MultipleChoice