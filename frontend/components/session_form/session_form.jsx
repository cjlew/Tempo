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
    this.setState({username:'guest', password:'password'}, () => {
      let user = this.state;
      this.props.demoLogin({user});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
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

    let EmailInput = this.props.formType === 'signup' ?
      (
        <div id='email-input'>
          <br/>
          <br/>
          <input type="text"
            placeholder='Email'
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </div>
      ) : <br/>;


    return (
      <div className="login-form-container">
        <Link to="/" className="splash-header-link">
          <h1>Tempo</h1>
        </Link>
        <div id='border-line'></div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div id='session-form-welcome'>
            <span id="welcome-message">Welcome to Tempo</span>
            <br/>
            <span >Please {this.props.formType} or {this.navLink()}</span>
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div id='username-input'>

                <br/>
                <input type="text"
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />

            </div>
            <br/>
            <div id='password-input'>

                <br/>
                <input type="password"
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />

            </div>
              {EmailInput}
            <br/>
            <input id='submit-form-button' type="submit" value={`${this.props.formType.toUpperCase()}`} />
            <br/>
          </div>
        </form>
          <form onSubmit={this.handleDemoLogin}>
            <input id='submit-form-button' type='submit' value='Demo Login' />
          </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
