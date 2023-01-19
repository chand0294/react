import React, { Component } from 'react';

class Header extends Component {
    state = { 
        hMessage : "Hello from Header"
     } 

     componentDidMount(){
        this.setState({hMesage : this.props.hMessage})
     }
    render() { 
        return (<div>{this.props.hMessage}</div>);
    }
}
 
export default Header;