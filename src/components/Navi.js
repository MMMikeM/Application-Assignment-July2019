import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

class Navi extends Component {
  toggleExpand = () => {
    this.props.expandMe();
  };

  render() {
    return (
      <div className="navbar">
        <FaBars onClick={this.toggleExpand} />
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    );
  }
}

export default Navi;