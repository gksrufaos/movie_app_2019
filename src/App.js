import React from "react";

function Food({fav}){
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>hello!</h1>
      <Food fav="kimchi"/>
      <Food fav="chicken"/>
      <Food fav="ramen"/>
    </div>
  );
}

export default App;

/*
  컴포넌트에 property(props)에 value를 넣어서 Food의 컴포넌트로 넘김         
*/
