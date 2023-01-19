import React, { Component } from 'react';
import Child from './child';

class Parent extends Component {
    state = {
        name: "Chandrakant",
        tableName : "Parent Table",
        // pname:"",
        family: [
            {
                name: "Avni",
                role: "Manager",
                address: "HYD"
            },
            {
                name: "Kaushal",
                role: "Learner",
                address: "HYD"
            }
        ]

    }

    updateName = ()=>{

        let pname = prompt("Enter the value");
        this.setState({ name: pname });
    }

    render() {
        return (
            <div>
                I am from Parent. 
                <div>
                    Table : {this.state.tableName}
                    <table border={5}>
                        <thead title='Parent Table'>
                            <tr>
                                <td>#</td><td>Name</td><td>Role</td><td>Address</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.family.map((member, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{member.name}</td>
                                        <td>{member.role}</td>
                                        <td>{member.address}</td>
                                    </tr>


                                )
                            }
                        </tbody>
                    </table>
                    <button onClick={() => this.updateName() }>Click to change parent name</button>
                    <Child parentName={this.state.name} parentFamily={this.state.family} ></Child>
                </div>
            </div>
        );
    }
}

export default Parent;