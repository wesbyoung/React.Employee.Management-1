import React, { Component } from 'react'
import Information from './Information';

export default class Employee extends Component {
    // handleClick = (emp) => {
    //     console.log(`Hello, ${emp.name}`);
    // }

    render() {
        const emp = this.props.emp

        return (
            <li onClick={() => <Information emp={emp} />} className="list-group-item">{emp.name}</li>
        )
    }
}
