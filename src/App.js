import Topbar from "./components/top-navigation/Topbar";
import Sidebar from "./components/side-bar/Sidebar";
import { useState, useEffect } from "react";
import Education from "../src/components/homepage/Education";
import Health from "../src/components/homepage/Health";
import Clothing from "./components/homepage/Clothing";
import Food from "../src/components/homepage/Food";
import Analysis from "./components/homepage/Analyticspage/Analysis";
import SubmissionForm from "./components/homepage/Analyticspage/SubmissionForm";

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
          <div className="charts">
            <div className="Doncontainer" style={{ width: 200 }}>
              <Education plotData={chartdata} />
            </div>
            <div className="Healthcontainer" style={{ width: 200 }}>
              <Health plotData={healthData} />
            </div>
            <div className="clothingcontainer" style={{ width: 200 }}>
              <Clothing plotData={clothingData} />
            </div>
            <div className="foodcontainer" style={{ width: 200 }}>
              <Food plotData={foodData} />
            </div>
          </div>
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
