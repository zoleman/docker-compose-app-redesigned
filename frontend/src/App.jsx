import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import VisiterLayout from './layout/VisiterLayout'
import ShoppingListPage from './pages/ShoppingListPage'
import CategoryPage from './pages/CategoryPage'



function App() {
  return (
    <Routes >
      <Route element={<VisiterLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<ShoppingListPage />} />
        <Route path='/category' element={<CategoryPage />} />
      </Route>
    </Routes>
  )
}

export default App
