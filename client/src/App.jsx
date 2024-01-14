import BannerComponent from './components/BannerComponent'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import MakeChips from './components/Chips/MakeChips'
import './App.css'
import ProductContainer from './components/ProductList/ProductContainer'

function App() {
  return (
    <>
    
      <NavBar />
      <BannerComponent />
      <MakeChips />
      <ProductContainer/>
      <Footer />
    </>
  )
}

export default App
