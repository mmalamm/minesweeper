import createStore from "./store/createStore";

export default class MineSweeper {
  constructor() {
    this.store = createStore();
  }

  getState() {
    return this.store.getState();
  }

  getMinefield() {
    // selector to unify clicks with board
    return this.getState().board;
  }
}
