import React from "react";


class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
          <div>
            {isLoggedIn && <p>приветики</p>} {/* true  - выполняется после && false - не выполняется */}
            {!isLoggedIn && <p>покасики</p>}
          </div>
        </div>
        
      );
    }
  }
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Войти
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Выйти
      </button>
    );
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  function UserGreeting(props) {
    return <h1>выйдите пожалуйста</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>войдите пожалуйста</h1>;
  }
  export default LoginControl;