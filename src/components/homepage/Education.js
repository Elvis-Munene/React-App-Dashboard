import React from 'react'
import {Bar} from "react-chartjs-2"

function Education({plotData}) {
    return (

        <div className='dona'>
            <h1>Education</h1>
            <Bar data={plotData}/>
        </div>
    )


}

export default Education;