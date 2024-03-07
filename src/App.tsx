import "./App.css";
import ChartSwitcher from "./components/chart/chart";
import PageHeader from "./components/header/header";

function App() {
  return (
    <div className="App">
      <PageHeader />

      <ChartSwitcher />
    </div>
  );
}

export default App;
