import React from "react";

class MultipleChoice extends React.Component {
    constructor() {
        super();

        // this.state = {

        // }
    }

    render() {
        return(
            <div id="multi-choice-container">
                <button className="choice">1</button>
                <button className="choice">2</button>
                <button className="choice">3</button>
                <button className="choice">4</button>
            </div>
        )
    }
}

export default MultipleChoice