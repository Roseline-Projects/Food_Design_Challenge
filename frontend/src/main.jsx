import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import OptionPage from './components/OptionPage.jsx';
import './index.css'
import App from './App.jsx'
import SetupPage from './components/SetupPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="option/:optionType" element={<OptionPage />}/>
        <Route path='setup' element={<SetupPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
