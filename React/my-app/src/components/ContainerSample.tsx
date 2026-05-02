import React from 'react'

type ContainerProps = {
    title: string;
    children: React.ReactNode;
}
//Container는 빨간색 배경의 박스 안에 제목과 자식 요소를 표시한다.
const Container = (props: ContainerProps) =>{
    const { title, children } = props;

    return (
        <div style={{background:"red"}}>
            <span>{title}</span>
            {/** props인 children을 삽입하면 이 컴포넌트의 시작 태그와 종료 태그로 감싼 요소를 표시한다. */}
            <div>{children}</div>
        </div>
    )
}
// const Container = (props: {title: string; children: React.ReactElement}) =>{
//     const { title, children } = props;

//     return (
//         <div style={{background:"red"}}>
//             <span>{title}</span>
//             {/** props인 children을 삽입하면 이 컴포넌트의 시작 태그와 종료 태그로 감싼 요소를 표시한다. */}
//             <div>{children}</div>
//         </div>
//     )
// }

const Parent = () =>{
    return (
        //Container를 사용할 때, 다른 요소를 감싸서 사용한다.
        <Container title="Hello">
            <p>이 부분이 배경색으로 둘러싸여 있다.</p>
        </Container>
    )
}

export default Parent;

//함수 컴포넌트와 클래스 컴포넌트
//리액트 16.8 부터 React Hooks가 도입되면서 함수 컴포넌트에서도 내부 상태나 라이프사이클을 다룰 수 있게 됐다.
//클래스 컴포넌트로만 표현할 수 있었던 컴포넌트를 함수 컴포넌트로도 기술할 수 있게 되어 함수 컴포넌트가 널리 쓰인다.

 //클래스 컴포넌트의 문제점
//1. 콜백 함수에서 props나 state에 참조하려면 사전에 this 콘텍스트를 바인드해야 한다.
//2. 라이프사이클을 다루는 메서드가 많아서 복잡하다.
//3. 상태가 함께 있어서 작동을 다른 컴포넌트와 공통화하기 어렵다.