import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      imageFile: null,
      imageUrl: ""
    };

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);

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
    if (this.props.formType === 'signup'){
      const file = this.state.imageFile;
      let formData = new FormData();

      formData.append("user[username]", this.state.username);
      formData.append("user[password]", this.state.password);
      formData.append("user[email]", this.state.email);

      if (file) {
        formData.append("user[profile_picture]", file);
      }
      this.props.processForm(formData);
    }  else {
      let user = this.state;
      this.props.processForm({user});}
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">SIGN UP</Link>;
    } else {
      return <Link to="/login">LOG IN</Link>;
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

  updateFile (e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>{
      this.setState({ imageUrl: fileReader.result, imageFile: file});

    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    let submit = this.props.formType === 'signup'? 'Sign Up' : 'Log In';
    let EmailInput = this.props.formType === 'signup' ?
      (
        <div id='email-input'>
          <br/>
          <input type="text"
            placeholder='Email'
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </div>
      ) : <br/>;

    let PictureInput = this.props.formType === 'signup' ?
      (
        <div id='profile-picture-input'>
          <br/>
          <img id='profile-picture-preview'
              src={this.state.imageUrl ? this.state.imageUrl : '/app/assets/images/no-user-image.gif'}/>
          <br/>
          <input id='profile-picture-button' type='file'
                 onChange={this.updateFile}
                 id='profile-picture'/>
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
            <span>Please {this.props.formType} or {this.navLink()}</span>
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
              {PictureInput}
            <br/>
            <input id='submit-form-button' type="submit"
              value={`${submit}`} />

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
