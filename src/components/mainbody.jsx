import React, { Component } from 'react';

class MainBody extends Component {
    state = { 
        message : "Hello from Main Body!"
     } 

    render() { 
        return (<div>
            <button onClick={ () => this.props.onDisplay(this.state.message)}>Button from Main Body</button>
        </div>);
    }
}
 
export default MainBody;