import React from 'react'
import Home from './components/Home'
import DataProvider, { DataContext } from './context/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App