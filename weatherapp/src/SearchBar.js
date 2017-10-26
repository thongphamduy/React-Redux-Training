import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        let username=this.refs.username.value
        this.props.userName(username)
        username=''
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your github name" ref="username" />
            </form>
          )
    }
}

export default SearchBar;
