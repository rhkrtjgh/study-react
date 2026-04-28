//======================타입 정의======================
export{};   //각 파일을 모듈로 만들어 독립 스코프로 처리
function sayHello(firstName: string){   //인자값 타입을 String 으로 고정
    console.log('Hello '+ firstName);
}
//변수에 문자열만 받게 지정
let firstName:string = 'Hana';
//let firstName:string = 4; //에러 발생
let firstName2 = 4; //type을 지정하지 않아 Number타입도 가능
sayHello(firstName);

let age: number = 36;
//sayHello(age); //문자열 형식에 숫자를 담을 수 없음

const message = 'Hello!';

//message(); //문자열을 정의했는데 함수로 호출하여 오류 발생
// //his expression is not callable. 
// Type 'String' has no call signatures.

//느낌점 : 타입 변수를 지정하면 변수 타입이 혼동되는 실수를 막아주고 변수들의 타입정보를 직관적으로 볼 수 있어 좋은거 같다.