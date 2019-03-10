import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import NavBar from './navbar';
import {Me, UCA, BrowserEx, Orange} from './works';

function Home() {
  return (
    <div>
    <Container>
      <Router>
        <div>
        <NavBar />
        <Route exact path="/" component={Me} />
        <Route exact path="/universal-claim-app" component={UCA} />
        <Route path="/browser-extension" component={BrowserEx} />
        <Route path="/orange-cash" component={Orange} />
          {/* Desktop only */}
          <Row className="mt-1 d-none d-md-block pb-5">
            <Col>
              <hr className="thick"/>
              <h5 className="work">Work</h5>
              <ul className="work-list">
                <li className="work-link">
                  <Link to="/universal-claim-app">Universal Claim App</Link>
                </li>
                <li className="work-link">
                  <Link to="/browser-extension">Browser Extension</Link>
                </li>
                <li className="work-link">
                  <Link to="/orange-cash">Orange Cash</Link>
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