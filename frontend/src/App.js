import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BusinessScreen from './screens/BusinessScreen';
import PortGambleScreen from './screens/PortGambleScreen';
import KingstonScreen from './screens/KingstonScreen';
import PointNoPointScreen from './screens/PointNoPointScreen';
import PoulsboScreen from './screens/PoulsboScreen';
import DestinantionScreen from './screens/DestinantionScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/destinations' component={DestinantionScreen} exact />
          <Route path='/business' component={BusinessScreen} exact />
          <Route path='/portgamble' component={PortGambleScreen} exact />
          <Route path='/kingston' component={KingstonScreen} exact />
          <Route path='/pointnopoint' component={PointNoPointScreen} exact />
          <Route path='/poulsbo' component={PoulsboScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
