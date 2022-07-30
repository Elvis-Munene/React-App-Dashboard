import Topbar from "./components/top-navigation/Topbar";
import Sidebar from "./components/side-bar/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">other pages</div>
      </div>
    </div>
  );
}

export default App;
