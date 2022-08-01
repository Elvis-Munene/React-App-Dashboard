import React from 'react'
import Education from "./Education";
import Health from "./Health";
import Clothing from "./Clothing";
import Food from "./Food";

export default function Home({plotData1, plotData2, plotData3, plotData4}) {
  return (
    <div name="home" className="charts">
    <div className="Doncontainer" style={{ width: 200 }}>
      <Education  plotData={plotData1}/>
    </div>
    <div className="Healthcontainer" style={{ width: 200 }}>
      <Health   plotData={plotData2}/>
    </div>
    <div className="clothingcontainer" style={{ width: 200 }}>
      <Clothing   plotData={plotData3}/>
    </div>
    <div className="foodcontainer" style={{ width: 200 }}>
      <Food  plotData={plotData4}/>
    </div>
  </div>
  )
}
