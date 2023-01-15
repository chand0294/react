import { Component } from 'react';

class Child extends Component {
    state = {}
    render() {
        return (
            <div>Hey, I am Child !
                <div>Parent name is {this.props.parentName}</div>
                <div>
                    <table border={2}>
                        <thead title='Child Table'>
                            <tr>
                                <td>#</td> <td>Name</td><td>Role</td><td>Address</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.parentFamily.map((member, index) =>
                                    <tr key={index}>
                                        <td >{index + 1}</td>
                                        <td>{member.name}</td>
                                        <td>{member.role}</td>
                                        <td>{member.address}</td>
                                    </tr>


                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Child;