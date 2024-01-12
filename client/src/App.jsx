import BannerComponent from './components/BannerComponent'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'
import MakeChips from './components/Chips/MakeChips'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <BannerComponent />
      <MakeChips />
      <ProductList category={'watches'} />
      <ProductList category={'shoes'} />
      <ProductList category={'bags'} />
      <Footer />
    </>
  )
}

export default App
