import React from 'react'
import {Bar} from "react-chartjs-2"

function Food({plotData}) {
    return (

        <div className='dona'>
            <h1>Food</h1>
            <Bar data={plotData}/>
        </div>
    )


}

export default Food;