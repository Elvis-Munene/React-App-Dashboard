import React from 'react'
import {Doughnut} from "react-chartjs-2"

function Health({plotData}) {
    return (

        <div className='dona'>
            <h1>Health</h1>
            <Doughnut data={plotData}/>
        </div>
    )


}

export default Health;