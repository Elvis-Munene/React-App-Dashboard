import React, { useState } from "react";

function SubmissionForm() {
  const[year,setYear] = useState("")
  const[Education,setEducation] = useState("")
  const[Health,setHealth] = useState("")
  const[Food,setFood] = useState("")
  const[clothing,setClothing] = useState("")

function HandleYear(event) {
  setYear(parseInt(event.target.value));
}

function HandleEducation(event) {
  setEducation(parseInt(event.target.value));
}

function HandleHealth(event) {

  setHealth(parseInt(event.target.value));
}
function HandleClothing(event) {

  setClothing(parseInt(event.target.value));
}
function HandleFood(event) {

  setFood(parseInt(event.target.value));
}
function HandleSubmit(event) {
  event.preventDefault();
  const data ={
    year:year,
    Education:Education,
    Health:Health,
    clothing:clothing,
    Food:Food,
  }
  fetch("https://safe-journey-19911.herokuapp.com/data",{
    method:"POST",
    headers:{ 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
console.log(data);
};

  return (
    <div name="submission">
      <form onSubmit={HandleSubmit}>
      <label>Year:
          <input type="text" name="Year" placeHolder="year" onChange={HandleYear}/>
        </label>
        <label>Education:
          <input type="text" name="Education Expenditure" placeHolder="Education" onChange={HandleEducation}/>
        </label>
        <label>Health:
          <input type="text" name="Health Expenditure" placeHolder="Health" onChange={HandleHealth}/>
        </label>
        <label>Clothing:
          <input type="text" name="Clothing Expenditure" placeHolder="Clothing" onChange={HandleClothing}/>
        </label>
        <label>Food:
          <input type="text" name="Food Expenditure" placeHolder="Food" onChange={HandleFood}/>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )

}


export default SubmissionForm;