import { useEffect, useState } from 'react'
import NavbarComponent from './components/Navbar';
import BootstrapLogo from './assets/logo-bootstrap.png'
import Article from './components/Article'
import FormProduct from './components/FormProduct';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('Welcome');
  }, []);

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <img src={BootstrapLogo} className="logo" alt="Vite logo" />
      <h1>{Article.title.en}</h1>
      <p>{Article.description.en}</p>
      <FormProduct></FormProduct>
    </>
  )
}

export default App
