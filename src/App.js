import React from 'react';
//import ReactRouter from 'react-router'
import AppointmentBody from './pages/appointment/appoint'
import HomeBody from './pages/homePage/home'
import InfoBody from './pages/personalInfo/info'
import RecordBody from './pages/record/record'
import logo from './logo.png';
import './App.css';

//App bar
function Logo() {
  return (
    <div className="Logo">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="Logo-name">
        智能会议室<br />
        管理系统
      </p>
    </div>
  );
}

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
    }
  }

  render() {
    return (
      <div className="Log-out">
        <div className="User">
          {this.state.userName}，您好
        </div>
        <button className="Logout">
          "注销"
        </button>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
    }
  }

  render() {
    let userName = this.state.userName;

    return (
      <div className="Header">
        <Logo />
        <Logout userName={userName} />
      </div>
    )
  }
}

//Content
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: this.props.pageNum,
    }
  }

  render() {
    switch (this.state.pageNum) {
      case 0:
        return (
          <HomeBody />
        );
      case 1:
        return (
          <AppointmentBody />
        );
      case 2:
        return (
          <RecordBody />
        );
      case 3:
        return (
          <InfoBody />
        );
      default:
        return null;
    }
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
    }
  }

  choosePage(i) {
    this.setState({
      pageNum: i,
    })
  }

  render() {
    return (
      <div className="Body">
        <div className="Menu">
          <button className="HomePage" onClick={() => this.choosePage(0)}>"首页"</button>
          <button className="Appoint" onClick={() => this.choosePage(1)}>"预约会议室"</button>
          <button className="Record" onClick={() => this.choosePage(2)}>"会议记录"</button>
          <button className="PersonalInfo" onClick={() => this.choosePage(3)}>"个人信息"</button>
        </div>
        <Content pageNum={this.state.pageNum} />
      </div>
    );
  }
}

//Portal
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;