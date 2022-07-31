import React from 'react'
import {Line} from "react-chartjs-2"
import SubmissionForm from './SubmissionForm';

function Analysis({plotData}) {
    return (

        <div className='dona'>
            <h1>Analysis</h1>
            <Line data={plotData}/>
            <SubmissionForm/>
        </div>
        
    )


}

export default Analysis;