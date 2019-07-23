import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ExpandList extends Component {
  render() {
    const isExpanded = this.props.expanded;
    if (isExpanded) {
      return (
        <div className="expander">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      );
    }
    return <div />;
  }
}

export default ExpandList;
