import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age = "10" />
      <PetInfo animal="Monkey" age = "29" />
    </div>
  )
}

export default App
