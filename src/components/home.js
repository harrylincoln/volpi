import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import NavBar from './navbar';
import {UCA, BrowserEx} from './works';

function Home() {
  return (
    <div>
    <Container>
      <Router>
        <div>
        <NavBar />
          <Route exact path="/" component={UCA} />
          <Route path="/browser-extension" component={BrowserEx} />
          {/* Desktop only */}
          <Row className="mt-1 d-none d-md-block pb-5">
            <Col>
              <hr className="thick"/>
              <h5>More projects</h5>
              <ul>
                <li>
                  <Link to="/">Universal Claim App</Link>
                </li>
                <li>
                  <Link to="/browser-extension">Browser Extension</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Router>
    </Container>
    </div>
  );
}

export default Home;