import React from 'react'
import {Doughnut} from "react-chartjs-2"

function Clothing({plotData}) {
    return (

        <div className='dona'>
            <h1>Clothing</h1>
            <Doughnut data={plotData}/>
        </div>
    )


}

export default Clothing;