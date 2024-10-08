import { EngineerTestFetch } from "./fetch/EngineerTestFetch"
import { PlantTestFetch } from "./fetch/PlantTestFetch"
import { PlantFilter } from "./fetch/PlantComponents/PlantFilter"

function App() {
  return (
    <>
      <EngineerTestFetch />
      <br/>
      <PlantFilter />
      <PlantTestFetch id={2012}/>
    </>
  )
}

export default App
