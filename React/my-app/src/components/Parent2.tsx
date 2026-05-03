//useCallback은 함수를 메모이제이션 하기 위한 훅이다.

import React, { useState, useCallback } from 'react'

type ButtonProps = {
    onClick: () => void;
}

const DecrementButton = (props: ButtonProps) =>{
    const { onClick } = props;

    console.log('DecrementButton이 다시 그려졌습니다.');

    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) =>{
    const { onClick } = props;

    console.log('IncrementButton이 다시 그려졌습니다.');

    return <button onClick={onClick}>Increment</button>
});

const DoubleButton = React.memo((props: ButtonProps) =>{
    const { onClick } = props;

    console.log('Double버튼이 다시 그려졌습니다.');

    return <button onClick={onClick}>Double</button>
});

export const Parent = () =>{
    const [ count, setCount ] = useState(0);

    const decrement = () =>{
        setCount((c) => c-1);
    }

    const increment = () =>{
        setCount((c) => c+1);
    }

    //useCallback을 사용해 함수를 메모이제이션 한다.
    const double = useCallback(() =>{
        setCount((c)=> c*2);
    },[]);  //두 번째 인수는 빈 배열이므로 useCallback은 항상 같은 함수를 반환한다.

    return (
        <div>
            <p>Count: {count}</p>
            {/** 컴포넌트에 함수를 전달한다. */}
            <DecrementButton onClick={decrement}></DecrementButton>
            {/** 메모이제이션된 컴포넌트에 함수를 전달한다. */}
            <IncrementButton onClick={increment}></IncrementButton>
            {/** 메모이제이션된 컴포넌트에 메모이제이션된 함수를 전달한다. */}
            <DoubleButton onClick={double}></DoubleButton>
        </div>
    )
}

export default Parent;