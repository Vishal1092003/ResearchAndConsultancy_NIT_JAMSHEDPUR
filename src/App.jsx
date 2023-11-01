
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogoPage from './pages/LogoPage'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LogoPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
