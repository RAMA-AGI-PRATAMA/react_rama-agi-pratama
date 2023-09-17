import { useState } from 'react'
import NavbarComponent from './components/Navbar'
import BootstrapLogo from './assets/logo-bootstrap.png'
import FormPageComponent from './components/FormPage'
import DetailProductComponent from './components/DetailProduct'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavbarComponent></NavbarComponent>
        <img src={BootstrapLogo} className="logo" alt="Vite logo" />
        <FormPageComponent></FormPageComponent>
        <DetailProductComponent></DetailProductComponent>
      </div>
    </>
  )
}

export default App
