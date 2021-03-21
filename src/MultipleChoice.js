import React from "react";

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
        console.log(props)
    }

    render() {

            const additionOptions = [
                this.props.choiceA,
                this.props.choiceB,
                this.props.choiceC,
                this.props.choiceDAddition,
            ]
            let uniqueAdditionOptions = [...new Set(additionOptions)]
            if (uniqueAdditionOptions.length < 4) {
                let replacementAdditionNumber = Math.floor(Math.random() * 20 + 1)
                if (!uniqueAdditionOptions.includes(replacementAdditionNumber)) {
                    uniqueAdditionOptions.push(replacementAdditionNumber)
                }
        }

        // Create a copy of the original array to be randomized
let shuffleAddition = [...uniqueAdditionOptions];

// Defining function returning random value from i to N
const getRandomValueAdd = (i, N) => Math.floor(Math.random() * (N - i) + i);

// Shuffle a pair of two elements at random position j
shuffleAddition.forEach( (elem, i, arr, j = getRandomValueAdd(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );

console.log(shuffleAddition);
// ['d', 'a', 'b', 'c']



        
            const subtractionOptions = [
                this.props.choiceA,
                this.props.choiceB,
                this.props.choiceC,
                this.props.choiceDSubtraction
            ]
            let uniqueSubtractionOptions = [...new Set(subtractionOptions)]
            if (uniqueSubtractionOptions.length < 4) {
                let replacementSubtractionNumber = Math.floor(Math.random() * 20 + 1)
                if (!uniqueSubtractionOptions.includes(replacementSubtractionNumber)) {
                    uniqueSubtractionOptions.push(replacementSubtractionNumber)
                }
        }

        // Create a copy of the original array to be randomized
let shuffleSubtraction = [...uniqueSubtractionOptions];

// Defining function returning random value from i to N
const getRandomValueSubtract = (i, N) => Math.floor(Math.random() * (N - i) + i);

// Shuffle a pair of two elements at random position j
shuffleSubtraction.forEach( (elem, i, arr, j = getRandomValueSubtract(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );

console.log(shuffleSubtraction);
// ['d', 'a', 'b', 'c']

        const shuffledAdditionOptions = shuffleAddition.map(optionAdd => <button className="choice">{optionAdd}</button>)
        const shuffledSubtractionOptions = shuffleSubtraction.map(optionSub => <button className="choice">{optionSub}</button>)

        


        return(
            <div id="multi-choice-container">
                { this.props.match.url[1] === "a" ? shuffledAdditionOptions : shuffledSubtractionOptions }
            </div>
        )
    }
}

export default MultipleChoice