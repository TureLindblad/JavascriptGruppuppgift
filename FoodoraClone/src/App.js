import logo from './logo.svg';
import './App.css';
import BrowsingSection from './components/BrowsingPage';


function App() {
  
  return (
    <div className="App">
      Hello, world!
      <BrowsingSection isFood={true}/>
      <BrowsingSection isFood={false} isRestaurant={true}/>
    </div>
    
  );
}

export default App;