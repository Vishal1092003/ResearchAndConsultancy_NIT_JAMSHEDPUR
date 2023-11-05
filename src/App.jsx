
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogoPage from './pages/LogoPage'
import Home from './pages/Home'
 import Profile from './components/Teacher/Profile'

  import "./components/Teacher/profile.scss"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LogoPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
