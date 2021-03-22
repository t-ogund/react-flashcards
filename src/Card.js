import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNumber: null,
            bottomNumber: null,
        }
        console.log(props)
        this.topNumber = this.topNumber.bind(this);
    }

    componentDidMount() {
        this.setState({
            topNumber: Math.floor(Math.random() * 10 + 1),
            bottomNumber: Math.floor(Math.random() * 10 + 1),
        })
    }

    topNumber() {
        this.setState({
            topNumber: Math.floor(Math.random() * 10 + 1)
        })
    }
    bottomNumber() {
        this.setState({
            bottomNumber: Math.floor(Math.random() * 10 + 1)
        })
    }
    
    render() {
        let t
        let b
        if (this.state.topNumber > this.state.bottomNumber) {
            t = this.state.topNumber;
            b = this.state.bottomNumber;
        } else if (this.state.topNumber < this.state.bottomNumber) {
            t = this.state.bottomNumber;
            b = this.state.topNumber;
        } else {
            t = this.state.topNumber;
            b = this.state.bottomNumber;
        }

        const choice_1 = Math.floor(Math.random() * 20 + 1);
        const  choice_2 = Math.floor(Math.random() * 20 + 1);
        const choice_3 = Math.floor(Math.random() * 20 + 1);
        const choice_4 = this.props.operand.match.url[1].toLowerCase() === "a" ? this.state.topNumber + this.state.bottomNumber : this.state.topNumber - this.state.bottomNumber;

        const choiceNodeList = document.querySelectorAll(".choice");
        let choiceArray = Array.from(choiceNodeList);
        console.log(choiceArray);

        let uniqueAdditionOptions = [...new Set(choiceArray)]
            if (uniqueAdditionOptions.length < 4) {
                let replacementAdditionNumber = Math.floor(Math.random() * 20 + 1)
                // if (!uniqueAdditionOptions.includes(replacementAdditionNumber)) {
                //     uniqueAdditionOptions.push(replacementAdditionNumber)
                // }
        }
        console.log("CHOICE ARRAY: ", choiceArray)
        console.log("UNIQUE ADDITION OPTIONS: ", uniqueAdditionOptions)





        return(
            <React.Fragment>
            <div id="card">
                <div id="top-section">
                    <h2 id="top-number">{t}</h2>
                </div>
                <div id="operand-section">{this.props.operand.match.url[1].toLowerCase() === "s" ? "-" : "+"}</div>
                <div id="bottom-section">
                    <h2 id="bottom-number">{b}</h2>
                </div>
            </div>
            <div id="multi-choice-container">
                <button onClick={this.topNumber} className="choice">{choice_1}</button>
                <button className="choice">{choice_2}</button>
                <button className="choice">{choice_3}</button>
                <button className="choice">{choice_4}</button>
            </div>
            </React.Fragment>
        )
    }
}

export default Card