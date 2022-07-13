import './App.css';
import Download from './component/Download';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Search from './component/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
