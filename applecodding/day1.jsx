

import './App.css'

function App() {
  
  let post = '강남 우동 맛집';
  
  //JSX문법 1 : Class 넣을 땐 className
  //JSX문법 2 : 변수값을 사용항 때는 {} 중괄호 사용
  //원래는 이렇게 사용함 document.querySelector('h4').innerHTML = post;
  //JSX문법 3 : style 정보 입력할 때 style={{이름 : '값'}}
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  )
}

export default App
