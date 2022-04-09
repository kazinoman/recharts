import "./App.css";

import BarCharts from "./components/charts/barCharts";
import LineCharts from "./components/charts/lineCharts";

function App() {
  return (
    <div className="App">
      <h1>Recharts practice</h1>
      <BarCharts />
      <LineCharts />
    </div>
  );
}

export default App;
