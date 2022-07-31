import Topbar from "./components/top-navigation/Topbar";
import Sidebar from "./components/side-bar/Sidebar";
import { useState, useEffect } from "react";
import Education from "../src/components/homepage/Education"

function App() {
  const [chartdata, setChartData] = useState();

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

  console.log(chartdata);
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">
          <div className="Doncontainer" style={{width:300}}>
          <Education plotData={chartdata}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
