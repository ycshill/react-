/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 14:47:22
 * @LastEditTime: 2019-09-29 17:41:14
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // 将要废弃
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps---ListItem');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text !== this.props.text) {
      return true;
    }else {
      return false;
    }
  }

  render() {
    const { text, deleteItem } = this.props;
    return (
      <li onClick={deleteItem}>{text}</li>
     );
  }

}

ListItem.propTypes = {
  text: PropTypes.string,
  deleteItem: PropTypes.func
};

ListItem.defaultProps = {
  text: '我是测试'
}

export default ListItem;
