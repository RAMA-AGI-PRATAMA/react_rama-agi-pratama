import { useState } from 'react'
import NavbarComponent from './components/Navbar'
import BootstrapLogo from './assets/logo-bootstrap.png'
import Article from './components/Article'
import DetailProductComponent from './components/DetailProduct'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavbarComponent></NavbarComponent>
        <img src={BootstrapLogo} className="logo" alt="Vite logo" />
        <h1>{Article.title.en}</h1>
        <p>{Article.description.en}</p>
         <DetailProductComponent></DetailProductComponent>
         <Button></Button>
      </div>
      
    </>
  )
}

export default App
