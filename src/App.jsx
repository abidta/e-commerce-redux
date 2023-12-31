import './App.css'
import BannerComponent from './components/BannerComponent'
import Chips from './components/Chips'
import Footer from './components/Footer'
import NavBar from './components/NavBAr'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="container m-auto">
      <NavBar />
      <BannerComponent />
      <Chips category={{name:'Watch'}}/>
      <Chips category={{name:'Bags'}}/>
      <Chips category={{name:'Shoes'}}/>
      <ProductList category={'watches'}/>
      <ProductList category={'shoes'}/>
      <ProductList category={'bags'}/>
      <Footer/>
    </div>
  )
}

export default App
