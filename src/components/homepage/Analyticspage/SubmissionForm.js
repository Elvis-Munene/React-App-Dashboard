import React, { useState } from "react";

export default function SubmissionForm(props) {
  const [formData, setFormData] = useState({
    year:"",
    education: "",
    health: "",
    clothing: "",
    expenditure: "",
    correctindex: 0,
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Year:
          <input type="text" name="Year" placeHolder="year" value={formData.year} onChange={handleChange}/>
        </label>
        <label>Education:
          <input type="text" name="Education Expenditure" placeHolder="Education" value={formData.education} onChange={handleChange}/>
        </label>
        <label>Health:
          <input type="text" name="Health Expenditure" placeHolder="Health" value={formData.health} onChange={handleChange}/>
        </label>
        <label>Clothing:
          <input type="text" name="Clothing Expenditure" placeHolder="Clothing" value={formData.clothing} onChange={handleChange}/>
        </label>
        <label>Food:
          <input type="text" name="Food Expenditure" placeHolder="Food" value={formData.food} onChange={handleChange}/>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
