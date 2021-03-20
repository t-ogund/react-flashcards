import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
console.log(props)
        // this.state = {

        // }
    }

    render() {
        return(
            <div id="card">
                <div id="top-section">
                    <h2 id="top-number">4</h2>
                </div>
                <div id="operand-section">+</div>
                <div id="bottom-section">
                    <h2 id="bottom-number">4</h2>
                </div>
            </div>
        )
    }
}

export default Card