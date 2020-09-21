import React, { Component } from 'react'
import Employees from '../components/Employees'

export default class Main extends Component {
    render() {
        // let employees = this.props.employees;
        // console.log(employees);

        return (
            <div className="row">
              <div className="card-deck">
                <div id="employees-container" className="card" style={{ width: "400px"}}>
                  <Employees employees={this.props.employees} />
                </div>
                <div id="information-container" className="card" style={{ width: "400px"}}>
                  
                </div>
                <div id="skills-container" className="card" style={{ width: "400px"}}>
                  <div className="card-header">Skills</div>
                  <ul id="skills" className="list-group list-group-flush">
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}
