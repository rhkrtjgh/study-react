import { useReducer } from 'react'

//reducer가 받은 action 타입을 정의한다.
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

//현재 상태와 action에 기반해 다음 상태를 반환한다.
const reducer = (currentCount: number, action: Action) =>{
    switch (action){
        case 'INCREMENT':
            return currentCount +1;
        case 'DECREMENT':
            return currentCount -1;
        case 'DOUBLE':
            return currentCount *2;
        case 'RESET':
            return 0;
        default:
            return currentCount;
    }
}

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps) =>{
    const { initialValue } = props;
    const [ count, dispatch ] = useReducer(reducer, initialValue);
    return (
        <div>
            <p>Count: {count}</p>
            {/** dispatch함수에 action을 전달해 상태를 업데이트한다. */}
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counter;

//버튼이 클릭되면 dispatch 함수를 사용해 action을 트리거한다. 
//setState()에 비해 상태 업데이트를 호출하는 방법은 구체적인 상태에 의존하지 않아 코드를 간단하게 유지가능하다.