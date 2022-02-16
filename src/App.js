import './App.css';
import Navbar from './navbar/Navbar';
import LandingPage from './landingpage/LandingPage';

function App() {
  return (
    <div>
      <Navbar>
        <LandingPage />
      </Navbar>
    </div>
  );
}

export default App;
