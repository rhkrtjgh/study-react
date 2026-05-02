//props에서는 부모로부터 자식의 컴포넌트로 임의의 데이터를 전달할 수 있고 또 다른 방법으로 Context가 있다.
//Context를 사용하면 데이터를 부모로부터 직접 전달하지 않아도 컴포넌트가 필요한 데이터를 참조할 수 있다.
//ex) 로그인한 사용자의 정보는 애플리케이션 안의 다양한 컴포넌트에서 참조할 수 있어 props보다 Context를 사용하는 것이 적합하다

//props를 사용할 때는 필요한 컴포넌트에 도달할 때까지 props를 사용해 전달해야 한다.
//props bucket relay : 완전히 동일한 데이터를 그대로 props로 전달하는 방법

import React from 'react'

//title을 전달하기 위해 Context를 작성한다
const TitleContext = React.createContext('');

//Title 컴포넌트 안에서 Context값을 참조한다.
const Title = () =>{
    //Consumer를 사용해, Context값을 참조한다.
    return (
        <TitleContext.Consumer>
            {/** Consumer 바로 아래 함수를 두고 Context값을 참조한다. */}
            {(title) =>{
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () =>{
    return (
        <div>
            {/** Header에서 Title로는 아무런 데이터를 전달하지 않는다. */}
            <Title></Title>
        </div>
    )
}

//Page 컴포넌트 안에서 Context에 값을 전달한다.
const Page = () =>{
    const title = 'React Book';

    //Provider를 사용해 Context에 값을 설정한다.
    //Provider 이하의 컴포넌트로부터 값을 참조할 수 있다.
    return (
        <TitleContext.Provider value={title}>
            <Header></Header>
        </TitleContext.Provider>
    )
}

export default Page;

//Provider는 중첩할 수 있고, 그 경우 Consumer에서 볼 때 가장 가까운 Provider의 데이터를 얻는다.
//useContext 훅을 사용하면 Consumer를 사용하지 않고 Context의 데이터를 참조할 수 있다.

