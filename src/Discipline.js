import React from "react";
import Card from "./Card";
import MultipleChoice from "./MultipleChoice";

class Discipline extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
        console.log(props)
        console.log(props.match.url)
    }

    choiceA() {
        const a = Math.floor(Math.random() * 20) + 1;
        console.log(a)
        return a
      }
    
      choiceB( ){
        const b = Math.floor(Math.random() * 20) + 1;
        console.log(b)
        return b
      }
    
      choiceC( ){
        const c = Math.floor(Math.random() * 20) + 1;
        console.log(c)
        return c
      }

    render() {

        let t;
        let b;
        if (this.props.topNumberProp > this.props.bottomNumberProp) {
            t = this.props.topNumberProp;
            b = this.props.bottomNumberProp;
        } else if (this.props.topNumberProp < this.props.bottomNumberProp) {
                t = this.props.bottomNumberProp;
                b = this.props.topNumberProp;
            } else {
                t = this.props.topNumberProp;
                b = this.props.bottomNumberProp;
            }

        return(
            <React.Fragment>
                <h1>Let's Practice {this.props.match.url[1].toLowerCase() === "s" ? "Subtraction" : "Addition"}!</h1>
                <Card operand={this.props} topNumber={this.props.topNumberProp}  bottomNumber={this.props.bottomNumberProp} />
                <MultipleChoice 
                    choiceA={this.choiceA()} 
                    choiceB={this.choiceB()} 
                    choiceC={this.choiceC()} 
                    choiceDAddition={t + b} 
                    choiceDSubtraction={t - b} 
                    match={this.props.match} 
                />
            </React.Fragment>
        )
    }

}

export default Discipline;