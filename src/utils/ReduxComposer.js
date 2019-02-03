class ReduxComposer {
  constructor(reducers = []) {
    this.reducers = reducers;
  }

  add(reducer, name = null) {
    this.reducers = {
      ...this.reducers,
      [name || reducer.name]: reducer,
    };
  }

  all() {
    return this.reducers;
  }
}

export default ReduxComposer;
