import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DealiooDetails from './pages/DealiooDetails'
import ProjectDetails from './pages/ProjectDetails'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/dealioo" element={<DealiooDetails />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
