// import { render } from "@testing-library/react";

import { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         <code>src/App.js</code>マンマンママンマンマ
//       </h1>
//       <div className='VVVV'>DIVDIV</div>
//       <input type="text" onClick={()=> {alert('まんままんま')}}/>
//       {/* 下記はdivタグがないとエラーになる。制約状一つに纏めないと動かない(labelはinputなどとセットで扱うため) */}
//     <div>
//     <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=> {alert('まんままんま')}}/>
//     </div>
//     {/* 上記では、一つに纏めないと出力できないのでdivを入れたが、divタグがブラウザーに表示されてしまう。それをしたくないときdivが嫌な時は下記 */}
//     {/* <React.Fragment> これを使うが<></>空白タグでも同じことが起きる*/}
//     <>
//     <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=> {alert('まんままんま')}}/>
//     </>
//     {/* </React.Fragment> */}
//     </div>
//   );
// }

//関数コンポーネント

const App=()=>{
  return(
    <>
    <Cat/>
    <Cat/>
    <Cat/>
    <Cat/>
    <Cat/>
    </>
  )
}
const Cat =()=>{
  return <div>MEEEEEEEEEEE!!!</div>
}
// class コンポーネント
// class App extends Component{
//   render(){
//     return(
//       <>
//       <div className='VVVV'>DIVDIVまんままんま</div>
//       <input type="text" onClick={()=> {alert('まんままんま')}}/>
//       </>
//     )
//   }
// }


export default App;
