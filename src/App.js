import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Container>
        <Search />
      </Container>
    </Router>
  );
}

export default App;
