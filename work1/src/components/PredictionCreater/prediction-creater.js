import React, { Component } from 'react';
import './prediction-creater.css'
class PredictionCreater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPrediction: 'Not selected'
        }
    }
    getRandomPrediction() {
        const { prediction } = this.props
        const randInd = Math.floor(Math.random() * prediction.length)
        return prediction[randInd]
    }
    onClick = () => {
        const{addToList}=this.props
        const currentPrediction=this.getRandomPrediction()
        this.setState({
            currentPrediction: currentPrediction

        })
        addToList(currentPrediction)
    }
    render() {
        const { currentPrediction } = this.state
        return (
            <>
                <button onClick={this.onClick}>
                    Get a prediction
            </button>
                <br />
                Prediction:<span className='prediction'> {currentPrediction} </span>
            </>
        );
    }
}

export default PredictionCreater;