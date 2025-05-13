import { useState } from 'react'
import LandingPage from './components/LandingPage'
import OptionPage from './components/OptionPage'
import { testCards } from './constants/TextConstants'

function App() {

  return (
    <div>
      <LandingPage/>
      <OptionPage pageType='ingredients' cards={testCards} />
    </div>
  )
}

export default App