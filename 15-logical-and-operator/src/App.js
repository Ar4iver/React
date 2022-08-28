import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && <ResetButton onClick={resetCount} />}
    </div>
  )
}

export default App

/* Если нам необходимо в одном случае показать один блок JSX кода , а в другом случае показать другой блок,
 то подходит использование ТЕРНАРНОГО ОПЕРАТОРА
так же можно использовать двойной оператор НЕ вместо > 0 !! (!!count) */

// А если нужно показывать, либо скрывать определенный блок JSX кода, то подходит логический оператор И
