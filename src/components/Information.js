import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        // console.log("Hello");
        console.log(this.props.attrName);
        console.log(this.props.attrValue);
        return (
            <li className="list-group-item"><strong>{this.props.attrName}</strong> <span id="name" className="float-right">{this.props.attrValue}</span></li>
        )
    }
}
