import './App.css';
import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import SimpleCart from './components/cart/simplecart';
import ViewCategories from '../src/components/storefront/categories.js'
import ViewProducts from '../src/components/storefront/products.js';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <SimpleCart/>
      <ViewCategories/>
      <ViewProducts/>
      <Footer/>
   
    </div>
  );
}



export default App;
