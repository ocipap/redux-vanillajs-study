import { createStore } from 'redux';

const $light = document.querySelector('.light');
const $switch = document.querySelector('#switch-btn');

const $counter = document.querySelector('.counter-heading');
const $plus = document.querySelector('#plus-btn');
const $minus = document.querySelector('#minus-btn');

// 엑션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 초깃값 설정
const initialState = {
  light: false,
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        light: !state.light,
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.diff,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}


