

import './App.css'

function App() {
  
  let post = '강남 우동 맛집';
  
  let [글제목,b] = useState('남자 코트 추천');  //State문법
  let [글제목,b] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']); //배열로 처리가능
    
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>4월 26일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>4월 26일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>4월 26일 발행</p>
      </div>
      <h4>{ post }</h4>
    </div>
  )
}

export default App
