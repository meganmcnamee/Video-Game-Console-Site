import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Consoles from "./components/consoles"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

  return (
    <div className="container fluid">
      <Row>
    <Col><Consoles/></Col>
  </Row>
    </div>
  );
}

export default App;