import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PortGambleScreen from './screens/PortGambleScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/portgamble' component={PortGambleScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
