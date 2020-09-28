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
  light: true,
  counter: 713,
};

// 리듀서 함수 정의
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

// 스토어 생성
const store = createStore(reducer);

// redder 함수
const render = () => {
  const state = store.getState();
  const { light, counter } = state;

  if (light) {
    $light.style.background = 'green';
    $switch.innerText = '끄기';
  } else {
    $light.style.background = 'black';
    $switch.innerText = '켜기';
  }
  $counter.innerText = counter;
};

render();



