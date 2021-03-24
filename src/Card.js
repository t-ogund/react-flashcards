import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNumber: Math.floor(Math.random() * 10 + 1),
            bottomNumber: Math.floor(Math.random() * 10 + 1),
            score: 0
        }
        console.log(props)
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log(e.target.textContent == this.state.topNumber + this.state.bottomNumber);
        if (this.props.operand.match.url[1].toLowerCase() === "a") {
            if (e.target.textContent == this.state.topNumber + this.state.bottomNumber) {
                this.setState({
                    topNumber: Math.floor(Math.random() * 10 + 1),
                    bottomNumber: Math.floor(Math.random() * 10 + 1),
                    score: this.state.score += 1
                })
            } else {
                console.log("Try again...");
            }
        } else {
            let topSubtract;
            let bottomSubtract;
            if (this.state.topNumber > this.state.bottomNumber) {
                topSubtract = this.state.topNumber;
                bottomSubtract = this.state.bottomNumber;
            } else if (this.state.topNumber < this.state.bottomNumber) {
                topSubtract = this.state.bottomNumber;
                bottomSubtract = this.state.topNumber;
            } else {
                topSubtract = this.state.topNumber;
                bottomSubtract = this.state.bottomNumber;
            }
            let cycleTop
            let cycleBottom
            if (this.state.topNumber > this.state.bottomNumber) {
                cycleTop = this.state.topNumber;
                cycleBottom = this.state.bottomNumber
            } else if (this.state.topNumber < this.state.bottomNumber) {
                cycleTop = this.state.bottomNumber;
                cycleBottom = this.state.topNumber;
            } else {
                cycleTop = this.state.topNumber;
                cycleBottom = this.state.bottomNumber;
            }
            if (e.target.textContent == cycleTop - cycleBottom) {
                this.setState({
                    topNumber: Math.floor(Math.random() * 10 + 1),
                    bottomNumber: Math.floor(Math.random() * 10 + 1),
                    score: this.state.score += 1
                })
            } else {
                console.log("Try again...")
            }
        }
        
       
        
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
        const choice_2 = Math.floor(Math.random() * 20 + 1);
        const choice_3 = Math.floor(Math.random() * 20 + 1);
        let choice_4 = this.props.operand.match.url[1].toLowerCase() === "a" ? t + b : t - b;

        const choiceArray = [choice_1, choice_2, choice_3, choice_4]

        //random
        // Create a copy of the original array to be randomized
let shuffledOptions = [...choiceArray];

// Defining function returning random value from i to N
const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

// Shuffle a pair of two elements at random position j
shuffledOptions.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
console.log("CHOICE ARRAY: ", choiceArray)
console.log("SHUFFLED OPTIONS: ", shuffledOptions);
// ['d', 'a', 'b', 'c']


const finalOption = shuffledOptions.map(multiOption => <button className="choice" onClick={this.handleClick}>{multiOption}</button>)


        return(
            <React.Fragment>
            <div id="card-score-container">
                <div id="card">
                    <div id="top-section">
                        <h2 id="top-number">{t}</h2>
                    </div>
                    <div id="operand-section">{this.props.operand.match.url[1].toLowerCase() === "s" ? "-" : "+"}</div>
                    <div id="bottom-section">
                        <h2 id="bottom-number">{b}</h2>
                    </div>
                </div>
                <div id="score-box">
                    <h3>Score: {this.state.score}</h3>
                </div>
            </div>
            <div id="multi-choice-container">
                {/* <button onClick={this.topNumber} className="choice">{choice_1}</button>
                <button className="choice">{choice_2}</button>
                <button className="choice">{choice_3}</button>
                <button className="choice">{choice_4}</button> */}
                {finalOption}
                
            </div>
            </React.Fragment>
        )
    }
}

export default Card