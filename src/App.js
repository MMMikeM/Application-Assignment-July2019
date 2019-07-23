import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navi.js";
import Contact from "./components/Contact.js";
import Imageloader from "./components/Imageloader";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import ExpandList from "./components/ExpandList";
import Axios from "axios";

const accessKey =
  "891191fcd3d803793f5c92b7ebe34ec37175f3b6337e1cae34f9b8dfc8212389";
const searchParam = "cameron";

class App extends Component {
  state = {
    images: [],
    expanded: false
  };

  callbackFunction = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  async componentDidMount() {
    const res = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${searchParam}&per_page=15&client_id=${accessKey}`
    );
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="Background ">
        <div className="Overlay">
          <div className="maingrid">
            <BrowserRouter>
              <Navi expandMe={this.callbackFunction} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <div className="content">
                        <ExpandList expanded={this.state.expanded} />
                        <Splash />
                        <Imageloader images={this.state.images} />
                      </div>
                    </Fragment>
                  )}
                />

                <Route
                  path="/Contact"
                  render={props => (
                    <Fragment>
                      <Contact />
                    </Fragment>
                  )}
                />
              </Switch>
              <Footer />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
