import "./styles/index.scss"

import AcademicFitReport from "./components/academic-fit-report"
import AthleteData from "assets/data.json"

function App() {
  return (
    <div className="App">
      <AcademicFitReport athleteData={AthleteData.data[0]} />
    </div>
  )
}

export default App
