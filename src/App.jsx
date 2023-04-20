import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import Cart from './pages/Cart'
import CandyInfo from './pages/CandyInfo'
import Header from './Components/Header'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fillStock } from './actions/candyActions'

function App() {
  const dispatch = useDispatch();
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    fetch('https://majazocom.github.io/Data/candies.json')
      .then(response => response.json())
      .then(data => setCandies(data))
  }, []);

  useEffect(() => {
    if (candies.length > 0) {
      dispatch(fillStock(candies));
    }
  }, [candies])

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path='/candyinfo/:id' element={<CandyInfo />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
