import React from 'react'
import {Bar} from "react-chartjs-2"

function Health({plotData}) {
    return (

        <div className='dona'>
            <h1>Health</h1>
            <Bar data={plotData}/>
        </div>
    )


}

export default Health;