import React, { useState } from 'react'
import './App.css'
import BasketList from './components/BasketList'
import CardList from './components/CardList'
import Search from './components/Search'
import goods from './data/goods'

function App() {
  const [products, setProducts] = useState(goods)
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState([])

  return (
    <React.StrictMode>
      <div className="App">
        <Search value={search} />
        <CardList goods={products} />
    	  <BasketList order={order} />
      </div>
    </React.StrictMode>
  )
}

export default App
