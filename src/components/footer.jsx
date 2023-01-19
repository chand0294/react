import React, { Component } from 'react';

class Footer extends Component {
    state = {
        fMessage: "Hello from Footer"
    }

    componentDidMount() {
        this.setState({ fMessage: this.props.fMessage });

        // this.setState(prevState => {
        //     return {
        //       ...prevState,
        //       fMessage: this.props.fMessage
        //     };
        //   });
        
    }

    render() {
        return (
            <div>{this.props.fMessage}</div>
        );
    }
}

export default Footer;