//======================타입 가드======================
//타입스크립트에서 if문이나 switch문의 조건 분기에서 타입 체크를 수행할 때 조건 분기 블록 이후는 변수의 타입이 필터링되는 추론을 수행한다

{
    function addOne(value:number | string){
        if(typeof value === 'string'){
            return Number(value) +1;
        }
        return value +1;
    }

    console.log(addOne(10)) //11
    console.log(addOne('20'));  //21
}

//타입 가드 기능을 사용하면 실행 시 타입 어서션보다 안전하게 타입을 사용할 수 있다.
{
    //옵셔널 속성으로 info를 정의한다
    type User = {
        info?: {
            name: string;
            age: number;
        }
    }

    let response = {};
    //response는 JSON 형식의 API응답이 대입됐다고 가정하고 User에 타입 어서션을 한다.
    const user = (response as any) as User;

    //옵셔널 속성에 대한 타입 가드를 수행
    if(user.info){
        //옵셔널 속성 하위 속성에 접근해도 에러가 발생하지 않음
        console.log(user.info.name);
    }
}