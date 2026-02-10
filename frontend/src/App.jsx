import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import VisiterLayout from './layout/VisiterLayout'
import ShoppingList from './pages/ShoppingList'
import Category from './pages/Category'



function App() {
  return (
    <Routes >
      <Route element={<VisiterLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='/category' element={<Category />} />
      </Route>
    </Routes>
  )
}

export default App
