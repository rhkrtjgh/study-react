//React Hooks(훅) : Hook을 통해 함수 컴포넌트 안의 상태나 라이프사이클을 다루기 위한 기능이다.
//훅의 도입으로 클래스 컴포넌트와 동등한 기능을 가진 함수 컴포넌트를 기술할 수 있게 됐다.
//컴포넌트 안의 상태와 로직을 훅으로 추출하여 컴포넌트 코드를 깔끔하게 유지할 수 있어 코드 재사용성을 높일 수 있다.

//useState와 useReducer - 상태 Hook
//컴포넌트는 내부 상태를 가지며 해당 상태의 변화에 따라 표시를 변경할 수 있다.

//useState : 상태를 다루기 위한 훅
//첫번째 인수에 현재 상태를 유지할 변수, 두번째 인수에 업데이트 함수를 입력 반환값은 배열이다.
// const [상태,업데이트 함수] = useState(초기 상태);
//업데이트 함수를 호출하면 상태가 바뀌고 훅이 있는 컴포넌트는 다시 그려진다.

import { useState } from 'react'

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props;
    //카운트를 유지하는 첫번째 상태를 useState()로 선언한다.
    //count가 현재 상태, setCount가 상태를 업데이트 하는 함수이다.
    const [ count, setCount ] = useState(initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count -1 )}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount +1 )}>+</button>
        </div>
    )
}

export default Counter;