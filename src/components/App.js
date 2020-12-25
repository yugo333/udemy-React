import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

//classコンポーネントでstateを使用
class App extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div> count:{this.props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
//2パターンでかける
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
