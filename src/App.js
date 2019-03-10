import React from "react";
import axios from "axios";
import { Container, Fade } from 'reactstrap';
import { CookiesProvider, withCookies } from 'react-cookie';
import Home from './components/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', fadeIn: false};
    this.handleChange = this.handleChange.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.formMarkup = this.formMarkup.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  loggedIn () {
    const { cookies } = this.props;
    const loggedInCookie = cookies.get('loggedIn');
    if(loggedInCookie === 'true') {
      return true;
    } else {
      return false;
    }
  }

  formMarkup () {

    const onSubmit = async (event) => {
      this.setState({fadeIn: false});
      event.preventDefault();
      try {
        await axios.get(`https://vxaew3az9d.execute-api.eu-central-1.amazonaws.com/production/?pass=${this.state.value}`);
        const { cookies } = this.props;
        cookies.set('loggedIn', 'true', { path: '/', maxAge: 10800}); // 3 hours then nullify
        window.location.reload();
      } catch(e) {
        this.setState({value: '', fadeIn: true});
      }
    };
  
    return (
      <div>
        <Container>
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
          <label>
            Password:
            <input type="text" name="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            Wrong password
        </Fade>
        </Container>
      </div>
    );
  }

  render() {
    return (
    <CookiesProvider>
      {this.loggedIn() ? <Home /> : this.formMarkup() }
    </CookiesProvider>
    );
  }
}

export default withCookies(App);
