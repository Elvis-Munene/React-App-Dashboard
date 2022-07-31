import React from 'react'

export default function SubmissionForm() {
    // const {education,health,clothing,food} 
    
  return (

    <div>
        <form >
            <div>
                <input  type="text" name='Education Expenditure'/>
            </div>
            <div>
                <input type="text" name='Health Expenditure'/>
            </div>
            <div>
                <input type="text" name='Clothing Expenditure'/>
            </div>
            <div>
                <input type="text" name='Food Expenditure'/>
            </div>
            <button type="submit">submit</button>

        </form>

    </div>
  )
}
