import logo from './logo.svg';
import './App.css';
import Navbar from './components//Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
