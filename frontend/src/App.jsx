import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import VisiterLayout from './layout/VisiterLayout'



function App() {
  return (
    <Routes >
      <Route element={<VisiterLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
