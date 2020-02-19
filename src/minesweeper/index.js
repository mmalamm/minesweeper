import createStore from "./store/createStore";
import { minefieldSelector } from "./store/selectors";

export default class MineSweeper {
  constructor() {
    this.store = createStore();
  }

  getState() {
    return this.store.getState();
  }

  flagCell = payload => {
    this.store.dispatch({
      type: "FLAG",
      payload
    });
  };

  clickCell = payload => {
    this.store.dispatch({
      type: "CLICK",
      payload
    });
  };

  getStatus = () => {
    return this.getState().status
  }

  subscribe(callback) {
    const unsubscribe = this.store.subscribe(_ => {
      const state = this.getState();
      callback({ ...state });
    });
    return unsubscribe;
  }

  getMinefield() {
    // selector to unify clicks and flags with display board
    return minefieldSelector(this.getState());
  }
}
