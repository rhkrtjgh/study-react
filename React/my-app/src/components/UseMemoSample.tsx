//useMemo에서는 값을 메모이제이션한다.
//첫번째 인수는 값을 생성하는 함수, 두 번째 인수에는 의존 배열을 전달한다.
//컴포넌트를 그릴 때 의존 배열을 비교하고, 값이 다를 경우 함수를 실행하고 결과를 새로운 값으로 메모에 저장한다.
//의존 배열의 값이 모두 같으면 함수를 실행하지 않고 메모된 값을 반환한다.

import React, {useState, useMemo} from 'react'

const UseMemoSample = () =>{
    //text는 현재의 텍스트 박스 내용을 저장한다.
    const [ text, setText ] = useState('');
    //items는 문자열 리스트를 저장한다.
    const [ items, setItems ] = useState<string[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
    }

    //버튼을 클릭했을 때 호출되는 함수
    const onClickButton = () =>{
        setItems((prevItems) =>{
            //현재의 입력값을 items에 추가, 이때 새로운 배열을 작성해서 저장한다.
            return [...prevItems, text];    //배열을 펼쳐서 새 배열안에 넣기 위함 && React의 상태 불변성을 지키기 위함
        });

        //텍스트 박스 안의 값을 비운다.
        setText('');
    }

    //numberOfCharacters1은 다시 그릴 때마다 items.reduce를 실행해서 결과를 얻는다.
    const numberOfCharacters1 = items.reduce((sub,item) => sub + item.length,0);
    //numbnerOfCharacters2는 useMemo를 사용해 items가 업데이트되는 시점에 items.reduce를 실행해서 결과를 얻는다.
    const numberOfCharacters2 = useMemo(()=>{
        return items.reduce((sub,item) => sub + item.length, 0);
    },[items]);

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput}></input>
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item,index) =>(<p key={index}>{item}</p>))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1}</p>
                <p>Total Number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )

}

export default UseMemoSample;