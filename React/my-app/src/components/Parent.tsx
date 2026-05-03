//useCallback과 useMemo - 메모리제이션 훅
//값이나 함수를 유지하고 불필요한 자식 요소의 렌더링이나 계산을 억제하기 위해 사용한다.
//리액트의 컴포넌트가 화면에 다시 그려지는 시점
//1. props나 내부 상태가 업데이트 됐을 때
//2. 컴포넌트 안에서 참조하는 context 값이 업데이트 됐을 때
//3. 부모 컴포넌트가 다시 그려졌을 때

import React, { memo, useState } from 'react'

type FizzProps = {
    isFizz: boolean;
}

// Fizz는 보통의 함수 컴포넌트
// isFizz가 true면 Fizz라고 표시하고 그 이외에는 표시하지 않는다.
// isFizz의 변화에 관계없이 부모가 다시 그려지면 Fizz도 다시 그려진다.
const Fizz = (props: FizzProps) =>{
    const { isFizz } = props;
    console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`);
    return <span>{isFizz? 'Fizz' : ''}</span>
}

//Buzz는 메모이제이션한 함수 컴포넌트
//isBuzz가 true면 Buzz라고 표시하고 그 이외에는 표시하지않음
//부모 컴포넌트가 다시 그려져도 isBuzz가 변화하지 않는 한 Buzz는 다시 그려지지 않는다.

type BuzzProps = {
    isBuzz: boolean;
    //props에 onclick을 추가
    onClick: () => void;
}
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props;
    console.log(`Buzz가 다시 그려졌습니다. isBuzz= ${isBuzz}`);

    return(
        <span>
            {isBuzz? 'Buzz' : ''}
        </span>
    )
});

export const Parent = () =>{
    const [ count, setCount ]= useState(1);
    const isFizz = count % 3;
    const isBuzz = count % 5;

    console.log(`Parent가 다시 그려졌습니다. count=${count}`);
    return(
        <div>
            <button onClick={()=>setCount((c) => c+1)}>+1</button>
            <p>{`현재카운트: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz}></Fizz>
                <Buzz isBuzz={isBuzz}></Buzz>
            </p>
        </div>
    )
}

export default Parent;