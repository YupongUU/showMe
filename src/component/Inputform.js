import React, { Component } from "react";
import "../css/inputform.css";
let log = function(key) {
  return console.log(key);
};
export default class Inputform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultInput: {
        基本信息: ["姓名", "出生日期", "毕业学校", "居住地", "#自我介绍"],
        联系方式: ["QQ", "微信", "手机", "邮箱"],
        在校经历: ["职位", "#描述"],
        工作经历: ["职位", "项目名称", "项目简介"]
      },
      inputBox: {}
    };
  }

  componentWillMount() {
    let keys = this.props.items;
    let inputBox = this.state.inputBox;
    log(Object.getOwnPropertyNames(inputBox).length);
    if (!Object.getOwnPropertyNames(inputBox).length) {
      inputBox = this.state.defaultInput;
      this.setState({ inputBox: inputBox });
    }
  }
  addInputBox(key, value = []) {
    let inputBox = this.state.inputBox;
    if (inputBox[key]) {
      log("2");
      inputBox[key].push(value);
    } else {
      inputBox[key] = value;
    }
    this.setState({ inputBox: inputBox });
  }
  defaultSelect(index) {
    let inputBox = this.state.inputBox;
    for (let key in inputBox) {
      if (index == key) {
        let id = 1;
        log(index);
        return inputBox[key].map(item =>
          <li key={id++}>
            <p className="input-name">
              {item}
            </p>
            <input type="text" />
          </li>
        );
      }
    }
  }
  render() {
    log(this.state);

    return (
      <ul id="input-form">
        {this.defaultSelect(this.props.index)}
      </ul>
    );
  }
}
