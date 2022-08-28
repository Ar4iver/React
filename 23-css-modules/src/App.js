import './App.css'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component heading</h1>
        <h2>heading in the App component</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  )
}

export default App
