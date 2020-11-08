import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';
import { Navbar , Container , NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar id="navbar" expand="lg" >
        <Container>
        <Navbar.Brand href="#">Motivate-me</Navbar.Brand>
        </Container>
      </Navbar>
      <Quotes/>

      <div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand id="footer">
                      <p id="p-footer">
                      Developed by BK
                      </p>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    </div>
  );
}

export default App;
