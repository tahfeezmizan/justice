import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import Sunglass from './components/Sunglass/Sunglass'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, 
  []);

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: '1500'},
  //   {id: 2, name: 'Samsung Watch', price: '1200'},
  //   {id: 3, name: 'Nokia Smart Watch', price: '1000'}
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      <Sunglass></Sunglass>

      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
