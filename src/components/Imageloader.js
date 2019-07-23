import React, { Component } from "react";
import Imagecard from "./Imagecard";

class Imageloader extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.images.map(imgcard => (
          <Imagecard key={imgcard.id} imgcard={imgcard} />
        ))}
      </div>
    );
  }
}

export default Imageloader;
