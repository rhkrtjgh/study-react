//커스텀 훅과 useDebugValue
//훅을 사용하는 함수를 새롭게 정의하고 함수 컴포넌트의 톱레벨에서 호출할 수 있다.
//이런 함수들을 구현하여 여러 훅을 조합한 커스텀 훅을 구현할 수 있다.
//훅을 더 유연하게 사용하고 싶을 때 커스텀 훅을 사용한다.
import React, { useState, useCallback, useDebugValue } from 'react'

//input용으로 콜백과 현재의 입력 내용을 모은 훅
const useInput = () =>{
    //현재 입력값을 저장하는 훅
    const [state, setState] = useState('');

    //input이 변화하면 훅 안의 상황을 업데이트한다.
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
        setState(e.target.value);
    },[])

    //디버그용으로 값을 출력한다.
    //값은 개발자 도구의 Components 탭에 표시된다.
    useDebugValue(`input: ${state}`);

    //현재 입력 내용과 콜백함수만 반환한다.
    return [ state, onChange ] as const;
}

const Input = () =>{
    const [text, onChangeText] = useInput();
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText}></input>
            <p>Input: {text}</p>
        </div>
    )
}

export default Input;

//커스텀 훅을 정의하면 함수 컴포넌트 안에서 훅 정의가 모여 있는 코드가 깔끔하게 정리된다.
//여러 컴포넌트에서 사용되도록 로직을 공유할 수 있다.