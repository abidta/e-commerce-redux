import './App.css'
import BannerComponent from './components/BannerComponent'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'
import MakeChips from './components/Chips/MakeChips'

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <BannerComponent />
      <MakeChips />
      <ProductList category={'watches'} />
      <ProductList category={'shoes'} />
      <ProductList category={'bags'} />
      <Footer />
    </div>
  )
}

export default App
