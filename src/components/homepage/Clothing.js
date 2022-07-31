import React from 'react'
import {Bar} from "react-chartjs-2"

function Clothing({plotData}) {
    return (

        <div className='dona'>
            <h1>Clothing</h1>
            <Bar data={plotData}/>
        </div>
    )


}

export default Clothing;