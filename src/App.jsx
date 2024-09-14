import React from 'react'
import Home from './Component/Home'
import DataProvider from './Component/Context/DataProvider'

function App() {
  
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  )
}

export default App
