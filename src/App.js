import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Something from './views/Something';
import Blog from './views/Blog';
import Post from './components/Post';


export default class App extends Component {
  constructor() {
    // console.log("Constructed")
    super();

    this.state = {
      employees: [],
      employeeInformation: {}
    }
  }

  componentDidMount() {
    // console.log("Mounted")
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          employees: data
         })
      })
  }

  handleSelectEmployee = (empObj) => {
    this.setState({
      employeeInformation: empObj
    })
    // console.log(empObj);
  }

  render() {
    // console.log("Rendered")
    return (
      <div>
        <Header />

        <main>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Main employees={this.state.employees} handleSelectEmployee={this.handleSelectEmployee} employeeInformation={this.state.employeeInformation}  />} />
              <Route exact path="/something" render={() => <Something />} />
              <Route exact path="/blog" render={() => <Blog />} />
              <Route exact path="/blog/:postId" render={({ match }) => <Post match={match} />} />
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}