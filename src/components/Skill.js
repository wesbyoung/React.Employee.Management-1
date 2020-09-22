import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <li className="list-group-item"><strong style={{textTransform: 'capitalize'}}>{this.props.label}</strong> <span id="name" className="float-right">{this.props.labelText}</span></li>
        )
    }
}
