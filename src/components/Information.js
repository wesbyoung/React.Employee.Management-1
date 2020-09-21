import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        console.log("Hello");
        return (
            <div>
                <div className="card-header">Information</div>
                <ul id="information" className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Name</strong> <span id="name" className="float-right"></span></li>
                </ul>
            </div>
        )
    }
}
