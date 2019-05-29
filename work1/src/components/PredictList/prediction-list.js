import React, { Component} from 'react'
const PredictList =({predictList})=> {
   
        return ( 
            <>
                History
                <hr/>
                <ul>
                    {
                        predictList.map(
                            prediction=><li>{prediction}</li>
                        )
                    }
                </ul>
            </>
         );
}
 
export default PredictList;