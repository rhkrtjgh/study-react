//======================unknown======================
//unknown은 any와 같이 모든 값을 대입할 수 있는 타입이다.
//차이점은 대입된 값 상태 그대로는 임의의 함수나 속성으로 접근할 수 없다.
//typeof나 instanceof 등을 사용해 타입 안전한 상태를 만든 후 처리를 실행할 수 있다.
{
    const x: unknown = 123;
    const y: unknown = 'Hello';

    //함수나 속성에 접근할 경우 unknown 타입 그대로는 컴파일 시 에러 발생
    //console.log(x.toFixed(1));  //'x' is of type 'unknown'
    //console.log(y.toLowerCase());   //'y' is of type 'unknown'.

    //타입이 안전한 상황에서 함수나 속성에 접근하여 실행가능하다.
    if(typeof x === 'number'){
        console.log(x.toFixed(1));  //123.0
    }

    if(typeof y === 'string'){
        console.log(y.toLowerCase());   //hello
    }

    //내생각: 이러면 any를 쓰는것보다 unknown을 쓰는게 더 좋아 보이는데?
    //검색: 실제로 타입체크를 강제하는 unknown을 더 많이 쓴다고 함
}
//any로는 할 수 없었던 컴파일 시 에러를 사전에 감지할 수 있어 any를 사용하는 것보다 안전한 코드를 작성할 수 있다.
