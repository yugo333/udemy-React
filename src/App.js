// import { render } from "@testing-library/react";

//関数コンポーネント

const App=()=>{
  // ここで配列を指定しreturn内でmapで一つ一つ呼び出す
  const profiles=[
    {name:"taro",age:"28"},
    {name:"hana",age:"18"},
    {name:"NNNN"}
  ]
  return(
    <>
    {/* 波カッコ{}で囲わないとscriptかけない。profileの値を引用しmapで回しUser関数に渡す。keyとindexはエラー回避の為 */}
    {
    profiles.map((profile,index)=>{
    return <User name={profile.name} age={profile.age} key={index}/>
    })
  }
  {/* 下記の書き方か上記の書き方 */}
  {/* <User name={"taro"} age={"28"}/> */}
    </>
  )
}
const User =(props)=>{
  return <div>HI i'm {props.name},and {props.age}years old</div>
}
// default値を作ってあげる事で未設定でもレンダーできる
User.defaultProps={
  age:1
}


export default App;
