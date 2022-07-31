import React from 'react'
import {Doughnut} from "react-chartjs-2"

function Education({plotData}) {
    console.log(plotData);
    return (

        <div className='dona'>
            <h1>Donoughtchart</h1>
            <Doughnut data={plotData}/>
        </div>
    )


}

export default Education;