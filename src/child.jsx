import { Component } from 'react';

class Child extends Component {
    state = {
        family : [],
        tableName : "Child Table"
    }

    componentDidMount(){
        this.setState({family : this.props.parentFamily});
    }

    
    render() {
        return (
            <div className='child-container'> Hey, I am Child !
                <div>Parent name is {this.props.parentName}</div>
                <div>
                    {/* {this.setState({family : this.props.parentFamily})}       ### This should cause infinite recursive re-rendering so avoid it*/}
                    Table : {this.state.tableName}
                    <table border={2}>
                        <thead title='Child Table'>
                            <tr>
                                <td>#</td> <td>Name</td><td>Role</td><td>Address</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.family.map((member, index) =>
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