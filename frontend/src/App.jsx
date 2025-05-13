import { useState } from 'react'
import OptionPage from './components/OptionPage'
import { testCards } from './constants/TextConstants'

function App() {

  return (
    <div>
      <OptionPage pageType='ingredients' cards={testCards} />
    </div>
  )
}

export default App