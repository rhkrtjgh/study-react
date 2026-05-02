//리액트에서 컴포넌트는 형태와 작동을 설정한 UI의 부품 단위로 리액트 요소나 다른 컴포넌트를 조합한 것을 반환한다.
//컴포넌트는 함수나 클래스를 사용하여 구현한다.

//이름 없는 함수로 컴포넌트를 정의하고 Text 변수에 대입한다.
const Text = (props: {content: string}) =>{
    //props로부터 content라는 값을 꺼낸다.
    const {content} = props;
    //props로 전달된 데이터를 표시한다.
    return <p className="text">{content}</p>
}

//정의한 컴포넌트를 Message라는 변수에 대입한다.
const Message = () =>{
    const content1 = 'This is parent component';
    const content2 = 'Message uses Text component';

    return (
        <div>
            {/** content라는 키로 컴포넌트에 데이터를 전달한다. */}
            <Text content={content1}></Text>
            <Text content={content2}></Text>
        </div>
    )
}

export default Message

//Text 컴포넌트에서는 p태그 안에 텍스트를 넣은 것을 표시한다.
//표시할 문자열을 외부하에 전달하는 방식을 사용하면 다양한 위치에서 컴포넌트를 사용할 수 있어 코드의 재사용성이 높아진다.
//컴포넌트에 외부에서 값을 전달할 때 props를 사용한다.
//props는 컴포넌트를 사용한 부모로부터 자식에게 한방향으로 전달되는 데이터다.
//props의 내용을 자식이 치환할 수 없고 치환 시 에러 발생한다.