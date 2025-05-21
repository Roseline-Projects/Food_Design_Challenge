import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx';
import DataPage from './components/DataPage.jsx';
import ApplicationPage from './components/ApplicationPage.jsx';
import StoresPage from './components/StoresPage.jsx';
import TransportationPage from './components/TransportationPage.jsx';
import NavBar from './components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
          <Route path="/about" element={<DataPage/>}></Route>
          <Route path="/application" element={<ApplicationPage/>}></Route>
          <Route path="/stores" element={<StoresPage/>}></Route>
          <Route path="/transportation" element={<TransportationPage/>}></Route>
        {/* <Route path="option/:optionType" element={<OptionPage />}/>
        <Route path='setup' element={<SetupPage />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)