import './App.css';
import Footer from './Footer';
import Main_products from './Main_products.js';
import Main_slite from './Main_slite.js';
import Navber from './Navber.js';
import Related from './Related.js';
import Service from './Service.js';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Main_slite/>
      <Main_products/>
      <Service/>
      
      <Footer/>
    </div>
  );
}

export default App;
