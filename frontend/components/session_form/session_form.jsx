import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = this.setState({username:'guest', password:'password'});
    this.props.demoLogin({user});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const EmailInput = () => {if (this.props.formType === 'signup') {
        return (
          <div id='email-input-container'>
            <br/>
            <label>Email
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
          </div>
      );
    } else {
      return <br/>;
    }
    };
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <span id="welcome-message">Welcome to Tempo</span>
          <br/>
          <span>Please {this.props.formType} or {this.navLink()}</span>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
              <EmailInput />
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
