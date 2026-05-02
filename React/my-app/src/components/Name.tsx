//리액트에서의 컴포넌트는 리액트 요소 또는 다른 컴포넌트를 조합한 것이다.
//페이지에 표시되는 UI의 일부를 추출한 것이라고 생각해도 좋다.
//컴포넌트로 구현한 내용은 최종적으로 브라우저에서 대응하는 HTML 태그 등으로 변환되어 표시된다.

//JSX상의 리액트 요소는 HTML과 거의 비슷하게 기술 및 사용할 수 있다.

//HTML 요소의 속성에 사용되는 class나 for은 자바스크립트에서 예약어에 해당하여 그대로 사용할 수 없다.
//JSX에서는 대신 className, htmlFor를 사용한다. onclick이나 onchange같은 경우 onClick, onChange 등 camelcase로 표현한다.

import React from 'react'

//이름을 입력하기 위한 텍스트 박스를 반환한다.
const Name = () =>{
    //input 요소의 onchange 이벤트에 대한 콜백 함수를 정의한다.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //입력된 텍스트를 콘솔에 표시한다
        console.log(e.target.value);
    }

    return (
        //style 객체의 키는 캐멀 케이스가 된다
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            {/** for 대신 htmlFor를 사용한다 */}
            <label htmlFor="name">이름</label>
            {/** class나 onchange대신 className이나 onChange를 사용한다. */}
            <input id="name" className="input-name" type="text" onChange={onChange}></input>
        </div>
    );
}

export default Name;