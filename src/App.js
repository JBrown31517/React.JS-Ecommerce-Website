import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
