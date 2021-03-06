import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container className="py-3">
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={Cart} />
          <Route exact path="/login" component={Login} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
