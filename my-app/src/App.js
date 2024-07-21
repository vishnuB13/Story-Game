import './App.css';
import Cards from './Components/Cards';
import MiddleComponent from './Components/MiddleComponent';
import BottomComponent from './Components/BottomComponent';

function App() {
  return (
    <div className="bg-[#172f35]">
      <Cards />
      <MiddleComponent />
      <BottomComponent />
    </div>
  );
}

export default App;
