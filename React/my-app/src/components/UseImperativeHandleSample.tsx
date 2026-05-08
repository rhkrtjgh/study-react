import React, { useState, useRef, useImperativeHandle } from 'react'

const Child = React.forwardRef((props, ref) =>{
    const [ message, setMessage ] = useState<string | null >(null);

    //useimperativeHandle에서 부모의 ref로부터 참조할 수 있는 값을 지정
    useImperativeHandle(ref, ()=> ({
        showMessage: () =>{
            const date = new Date();
            const message = `Hello, it's ${date.toLocaleString()} now`;
            setMessage(message);
        }
    }))

    return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const Parent = () => {
    const childRef = useRef<{showMessage: ()=>void }>(null);
    const onClick = () =>{
        if(childRef.current !== null){
            //자식의 useImperativeHandle에서 지정한 값을 참조
            childRef.current.showMessage();
        }
    }

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef}></Child>
        </div>
    )
}

export default Parent;
//useImperativeHandle을 사용하여 컴포넌트 함수를 부모로부터 원하는 시점에 명시적으로 호출할 수 있다.
//하지만 부모 컴포넌트가 자식 컴포넌트에 의존하기 때문에 그렇게 자주 사용하지 않는다.
//많은 경우 props로 대응할 수 있고 message를 child가 저장하지 않고 parent가 가지고 있게 된다.