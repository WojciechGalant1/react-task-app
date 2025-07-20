import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AlertProvider } from './components/AlertProvider';


function App() {

  return (
    <>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AlertProvider>

    </>
  )
}

export default App


