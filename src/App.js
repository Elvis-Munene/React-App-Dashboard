import Topbar from "./components/top-navigation/Topbar";
import Sidebar from "./components/side-bar/Sidebar";
import { useState, useEffect } from "react";

import Analysis from "./components/homepage/Analyticspage/Analysis";
import SubmissionForm from "./components/homepage/Analyticspage/SubmissionForm";
import Home from "./components/homepage/Home";

function App() {
  const [chartdata, setChartData] = useState();
  const [healthData, setHealthData] = useState();
  const [clothingData, setclothingData] = useState();
  const [foodData, setfoodData] = useState();
  const [analyze, setAnalyze] = useState();
  

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>
        setChartData({
          labels: data.map((pdata) => pdata.year),
          datasets: [
            {
              label: "EDUCATION",
              data: data.map((datap) => datap.Education),
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54,162,235,1)",
                "rgba(255,206,86,1)",
                "rgba(75,192,192,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        })
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>
        setHealthData({
          labels: data.map((pdata) => pdata.year),
          datasets: [
            {
              label: "Health",
              data: data.map((datap) => datap.Health),
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54,162,235,1)",
                "rgba(255,206,86,1)",
                "rgba(75,192,192,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        })
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>
        setclothingData({
          labels: data.map((pdata) => pdata.year),
          datasets: [
            {
              label: "Clothing",
              data: data.map((datap) => datap.clothing),
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54,162,235,1)",
                "rgba(255,206,86,1)",
                "rgba(75,192,192,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        })
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>
        setfoodData({
          labels: data.map((pdata) => pdata.year),
          datasets: [
            {
              label: "Food",
              data: data.map((datap) => datap.Food),
              backgroundColor: [
                "rgba(255,99,132,1)",
                "rgba(54,162,235,1)",
                "rgba(255,206,86,1)",
                "rgba(75,192,192,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
                "rgba(54,162,235,1)",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        })
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>
        setAnalyze({
          labels: data.map((pdata) => pdata.year),
          datasets: [
            {
              label: "EDUCATION",
              data: data.map((datap) => datap.Education),
              backgroundColor: "",
              borderColor: "blue",
              borderWidth: 2,
            },
            {
              label: "Health",
              data: data.map((datap) => datap.Health),
              backgroundColor: "",
              borderColor: "green",
              borderWidth: 2,
            },
            {
              label: "clothing",
              data: data.map((datap) => datap.clothing),
              backgroundColor:"",
              borderColor: "red",
              borderWidth: 2,
            },
            {
              label: "Food",
              data: data.map((datap) => datap.Food),
              backgroundColor: "",
              borderColor: "yellow",
              borderWidth: 2,
            }
          ],
          
        })
      );
  }, []);

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <Home plotData1={chartdata} plotData2={healthData}  plotData3={clothingData} plotData4={foodData} />
          <div className="Analysis">
          <Analysis plotData={analyze} style={{ width:700}}/>
          </div>
          <div className="forms">
            <SubmissionForm/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
