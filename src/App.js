import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import users from './users.json';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: users,
    };
  }

  makeKey = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 50; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  renderListItems = () => {
    return this.state.userInfo.map((item) => (
      <ListItem key={this.makeKey()} name={item} user={users} />
    ));
  };


  render() {
    return (
      <div className="App">
      {this.renderListItems()}
      </div>
    )
  }
}