import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate();
  const navigateToUsers = ()=>{
    navigate('/Users.js');
  };
  return (
    <section class="respond">
      <div class='bg'>
      <Navbar/>
      <h1>WELCOME TO ONE WORLD</h1>
      <p class= 'message'>Get connected, Make the world a smaller place.</p>
      <p class= 'message'>One World, One Nation.</p>
      <button class='button' onClick={navigateToUsers}>Get Started</button>
      </div>
    </section>
  );
}

export default App;
