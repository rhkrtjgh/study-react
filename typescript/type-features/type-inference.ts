//======================타입 추론======================

//명시적인 변수의 초기화를 수행하면 타입 추론을 통해 자동적으로 타입이 결정됨
//const age = 10; 
//#깨달음 : 타입스크립트는 다른 파일에 같은 변수명이 있어도 체크해서 알려주네?
//검색 : 파일이 전역 스크립트로 취급되면 같은 전역 스코프를 공유해서 충돌을 알려줌
//typescript가 프로젝트 내 여러 ts 파일을 함께 분석하다 보니 같은 이름의 전역변수를 감지
export{};   //각 파일을 모듈로 만들어 독립 스코프로 처리

//원시코드 반환값
{
    
    const age = 10;
    //console.log(age.length);    //에러 발생 age는 number타입이므로 length속성이 없다.
    const user = {
        name:'Kwak',
        age: 28
    }
    //console.log(user.age.length);   //에러 발생 age는 number타입이므로 length속성이 없다.
    //age에 타입을 선언하지 않았지만 변수값을 number로 담아 추론됨
}

//함수의 반환값
{
    
    function getUser(){
        return {
            name: 'Kwak',
            age: 28
        }
    }

    const user = getUser();
    //console.log(user.age.length);//에러 발생 age는 number타입이므로 length속성이 없다.
}

//배열 값 추론
{
    const names = [ 'Kwak', 'Wonjoon', 'Minjoon'];
    //names.forEach(names) =>{ //forEach함수의 인자에 배열을 넣어 오류 발생
        //console.log(names.toUpperCase());
        
    //}
}

//window 객체 함수 추론
// {
//     window.confirm = () => { //window.confirm함수의 반환 타입은 boolean으로 타입스크립트가 알고 있어 자동 추론을 함
//         //console.log('confirm 함수');    //boolean을 리턴하지 않아 에러
//         return false;
//     }
// }

//타입스크립트는 정적 타입 언어지만 우수한 타입 추론이 있어 타입을 작성하는 복잡함을 크게 줄일 수 있다.