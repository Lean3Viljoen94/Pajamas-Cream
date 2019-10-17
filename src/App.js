import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';

// Importing needed Components
import Header from "./Components/Header";
import Products from "./Components/Products";
import Landing from "./Components/Landing";
import Profile from './Components/Profile';


class NavLink extends Component {
  render() {
    var { className, activeClassName, to, exact, ...rest } = this.props;
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => {
          if (match) {
            return (
              <span style={{ display: "none" }}>{this.props.children}</span>
            );
          } else {
            return <Link className={className} to={to} {...rest} />;
          }
        }}
      />
    );
  }
}

// Writing the Components to the App using a Router
function App(props) {
  return (
    <div className="App">
      <Header name="Lea" loggedIn={true}/>
      <Router className="router">
        <div className='navbar'>
          <NavLink to="/Landing" className="navlink" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/Products" className="navlink" activeClassName="active">
            Product
          </NavLink>
          <NavLink to="/Profile" className="navlink" activeClassName="active">
            Profile
          </NavLink>
        </div>

        <Route exact={true} path="/Landing" component={Landing} />
        <Route path="/Products" component={Products} />
        <Route path="/Profile" component={Profile} />
      </Router>
    </div>
  );
}


export default App;
