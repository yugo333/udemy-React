import React ,{Component} from 'react'

//関数コンポーネント
const App=()=>(<Counter></Counter>)
//classコンポーネントでstateを使用
class Counter extends Component {
  constructor(props){
    super(props)
    this.state= {count:0}
  }

  handlePlusButton=()=>{
    // const currentCount= this.state.count
    // stateを更新setStateを使うと値が更新されるたびrenderされる
    this.setState({count: this.state.count +1})
  }
  handleMinusButton=()=>{
    this.setState({count: this.state.count -1})
  }

  render(){
    return (
      <>
        <div> count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    )
  }
}


export default App;
