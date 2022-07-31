import React from 'react'
import {Doughnut} from "react-chartjs-2"

function Food({plotData}) {
    return (

        <div className='dona'>
            <h1>Food</h1>
            <Doughnut data={plotData}/>
        </div>
    )


}

export default Food;