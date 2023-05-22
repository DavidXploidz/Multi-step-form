import Aside from "./components/Aside"
import './App.css'
import YourInfo from "./components/YourInfo"
import useMulti from "./hooks/useMulti"
import SelectPlan from "./components/SelectPlan";
import PickAdds from "./components/PickAdds";
import Summary from "./components/Summary";

function App() {

  const { mostrarInfo, mostrarPlan, mostrarAdds, mostrarSummary } = useMulti();
 
  return (
    <main className="main contenedor">
      <Aside />
      <div>
        {mostrarInfo && (
          <YourInfo />
        )}
        {mostrarPlan && (
          <SelectPlan />
        )}
        {mostrarAdds && (
          <PickAdds />
        )}
        {mostrarSummary && (
          <Summary />
        )}
      </div>
    </main>
  )
}

export default App
