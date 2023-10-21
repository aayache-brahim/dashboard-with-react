import { useState } from 'react'
import { Button } from '@nextui-org/react'
import SideBare from './component/SideBare'
import Header from './component/Header'

function App() {

  return (
    <>
    <div className="container mx-auto">
      <SideBare/>
      <Header/>
    </div>
    </>
  )
}

export default App
