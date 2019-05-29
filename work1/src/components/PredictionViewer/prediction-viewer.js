import React, { Component} from 'react'
import PredictionCreater from '../PredictionCreater'
import PredictList from'../PredictList'
class PredictionViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    addToList=(prediction)=>{
        this.setState((prevState)=>{
            const{predictList}=prevState
            return{
                predictList:[...predictList ,prediction]
            }
        })
    }
    render() { 
        const {predictions}=this.props
        const{predictList}=this.state
        return (
            <>
            <PredictionCreater predictions={predictions} addToList={this.addToList}/>
            <hr/>
            <PredictList predictList={predictList}/>
            </>
          );
    }
}
 
export default PredictionViewer;