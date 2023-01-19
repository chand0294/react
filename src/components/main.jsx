import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import MainBody from './mainbody';

class Main extends Component {
    state = {
        msg: "Hello from Main"
    }

    display = (msg) => {
        this.setState({ msg: msg })
    }

    render() {
        return (
            <div>
                <Header hMessage = {this.state.msg}></Header>
                <MainBody onDisplay = { this.display}></MainBody>
                <Footer fMessage = {this.state.msg}></Footer>
            </div>
        );
    }
}

export default Main;