import React, { Component } from "react";
import "../css/editarea.css";
import Inputform from "./Inputform";
import _ from "../ulti";

let $ = new _().$;
let log = function(key) {
  return console.log(key);
};

export default class EditArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      // leftList：左边栏tab标签，便于以后的拓展
      leftList: []
    };
  }
  localKey = 0;

  // console.log($(".left-list"));
  // _.$(".left-list").appendChild(li);
  componentWillMount() {
    let list = [
      { title: "基本信息" },
      { title: "在校经历" },
      { title: "工作经历" },
      { title: "联系方式" }
    ];
    this.setState({ leftList: list });
  }

  selectList() {}

  render() {
    let items = this.state.leftList.map(item => item.title);
    let id = 1;
    let list = items.map((item, index) => {
      return (
        <li key={id++} className={index == 0 ? "active" : ""}>
          {item}
        </li>
      );
    });

    return (
      <div id="edit-area">
        <ul className="left-list">
          {list}
        </ul>
        <Inputform items={items} index={items[0]} />
      </div>
    );
  }
}
