import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
console.log(props)
        // this.state = {
        //     operand: "+"
        // }
    }
    
    render() {
        let t;
        let b;
        if (this.props.topNumber > this.props.bottomNumber) {
            t = this.props.topNumber;
            b = this.props.bottomNumber;
        } else if (this.props.topNumber < this.props.bottomNumber) {
                t = this.props.bottomNumber;
                b = this.props.topNumber;
            } else {
                t = this.props.topNumber;
                b = this.props.bottomNumber;
            }
        


        return(
            <div id="card">
                <div id="top-section">
                    <h2 id="top-number">{t}</h2>
                </div>
                <div id="operand-section">{this.props.operand.match.url[1].toLowerCase() === "s" ? "-" : "+"}</div>
                <div id="bottom-section">
                    <h2 id="bottom-number">{b}</h2>
                </div>
            </div>
        )
    }
}

export default Card