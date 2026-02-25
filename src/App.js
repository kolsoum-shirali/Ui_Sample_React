import './App.css';
import HomePage from './pages/home/index'
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
function App() {
  return (
    <div className="App bg-Slate-100">
      <Header/>
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
