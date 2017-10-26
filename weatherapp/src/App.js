import React, { Component } from 'react';
import Profile from './Profile'
import SearchBar from './SearchBar'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      userName: 'hesmaili',
      avatarUlr: "",
    }
    this.getUserData=this.getUserData.bind(this)
  }

  getUserData(username){
    fetch(`https://api.github.com/users/${username}`)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data)
        this.setState({
          userName: data.login,
          avatarUlr: data.avatar_url,
        })
      }).catch((error) => console.log('Oops! . There Is A Problem') )
  }
  
  render() {
    return (
      <div>
          <SearchBar userName={this.getUserData}/>
          <Profile userName={this.state.userName} avatar={this.state.avatarUlr}/>
      </div>
    )
  }
}

export default App;
