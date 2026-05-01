//======================인덱스 타입======================
//인덱스 타입을 사용하면 객체의 속성이 변할 때 모아서 타입을 정의할 수 있다.
//각 속성에 대응하는 타입을 정의할 수 없을 때 간단하게 기술할 수 있다.

{
    type SupportVersions = {
        [env: number]: boolean; //number: boolean 
    }

    //string의 속성에 정의한 경우 에러가 발생한다.
    let versions: SupportVersions = {
        102: false,
        103: false,
        104: true,
        //'v105': true  //number타입이 아니어서 에러
    }
}