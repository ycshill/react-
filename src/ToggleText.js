/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 18:37:54
 * @LastEditTime: 2019-09-29 20:28:34
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class ToggleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
  }

  toggleText = () => {
    const isShow = this.state.isShow;
    this.setState({
      isShow: !isShow
    })
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames='box-text'
          unmountOnExit
        >
          <p>
            展示的文字
          </p>
        </CSSTransition>
        <button onClick={this.toggleText}>切换展示</button>
      </div>
    );
  }
}

export default ToggleText;
