import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Trusted from './components/Trusted';
import Trustlogo from './components/Trustlogo';
import Trade from './components/Trade';
import Whitepaper from './components/Whitepaper';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Navbar />
          <Header />
          <Trusted />
          <Trustlogo />
          <Trade />
        </div>
        <Whitepaper />
      </div>
      <div className="container">
        <Testimonial />
        <Newsletter />
      </div>
      <Footer />
    </Router>
  );
}


export default App;
