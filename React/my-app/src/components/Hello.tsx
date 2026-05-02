//Hello는 클릭하면 얼럿을 나타내는 텍스트를 반환한다
const Hello = () =>{
    //클릭 시 호출되는 함수
    const onClick = () =>{
        alert('hello');
    }

    const text = 'Hello React';

    //텍스트를 자식으로 갖는 div요소를 반환한다.
    return (
        //div의 onClick에 클릭 시의 콜백 함수를 반환한다
        <div onClick={onClick}>
            {text}
            <span>Hello React!</span>
        </div>
    );
}
//외부로부터 Hello를 읽을 수 있게 export처리를 한다
export default Hello
