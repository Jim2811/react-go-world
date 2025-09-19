import { Suspense } from 'react'
import './App.css'
import Countries from './assets/Countries/Countries'

const loadAllCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(r => r.json())
function App() {

  return (
    <>
     <Suspense fallback={<p>Loading Countries...</p>}>
      <Countries loadAllCountries ={loadAllCountries}></Countries>
     </Suspense>
    </>
  )
}

export default App
