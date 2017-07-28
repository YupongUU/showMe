import React, { Component } from "react";
import "./css/App.css";
import _ from "./ulti";
import Editarea from "./component/Editarea";
import PreviewArea from "./component/Previewarea";
import TitleBar from "./component/Titlebar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Editarea />
        <PreviewArea />
      </div>
    );
  }
}

export default App;
