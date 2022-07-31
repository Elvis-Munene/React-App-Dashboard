import React from 'react'
import {Line} from "react-chartjs-2"


function Analysis({plotData}) {
    return (

        <div className='dona'>
            <h1>Analysis</h1>
            <Line data={plotData}/>
        </div>
        
    )


}

export default Analysis;