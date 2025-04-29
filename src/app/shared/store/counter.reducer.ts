import { createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: any) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state: any) => {
    return {
      ...state,
      counter: 0
    };
  }),
  on(customIncrement, (state:any,action) => {
    return {
      ...state,
      counter: action.action === "add" ? state.counter+action.value : state.counter-action.value
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
