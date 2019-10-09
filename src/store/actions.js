import {INPUT_CHANGE, DELETE_ITEM, ADD_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes';
import axios from 'axios';

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (id) => ({
  type: DELETE_ITEM,
  value: id,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ca35680c98be737b0af814f/test').then(res => {
      console.log(res.data, 'dayin---');
      const data = res.data;
      const action = getListAction(data);
      dispatch(action)
    });
  }
};

export const getMyListAction = () => ({
  type: GET_MY_LIST,
})
