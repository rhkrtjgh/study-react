//======================타입 정의======================

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

//======================변수======================

//변수 선언에는 var, let, const를 사용한다.
//변수명 뒤에 타입을 추가해 타입 애너테이션을 작성한다(생략가능)
var apple: string = "사과";
var sum: number = 4;
let temp = "temp";
let temp2 = 5;
const isTrue: boolean = true;

//let을 사용할 경우 블록 스코프로 선언되면 해당 블록 안에서만 사용이 가능하다.
function calc(isSum: boolean){
    let a = 100; //변수 a선언
    if(isSum){
        //변수 a가 선언된 블록 안이기 때문에 에러가 발생하지 않는다.
        let b = a+1;    //변수 b선언
        return b;
    }

    //console.log(b);   //변수b가 선언된 블록 밖이므로 오류 발생
}

//const는 값을 변경할 수 없는 상수를 선언한다.
//const 변수도 let과 같은 스코프 규칙을 가진다.
const num: number = 100;
//값을 재대입하면 컴파일러 에러가 된다.
//num = 200; //오류 발생


//======================원시 타입======================
//javaScript에서 자주 사용되는 원시 타입인 string(문자열), number(숫자), boolean(논리값)은 타입스크립트에 대응하는 타입이 있다.
//이 타입들은 typeof 연산자를 사용할 때 표시되는 이름과 같다.

let ageValue: number = 36;
let isDone: boolean = false;
let color: string = '파랑';

let myNumber: string = '200';
myNumber = '이백';
//myNumber = 200; //string타입에 number값을 대입하여 오류 발생


//======================배열======================

//배열에 타입을 지정할 때는 구성하는 타입과 [] 표기를 사용

const array: string[] = []; //string 배열 선언
array.push('abc');
//array.push(1); //string배열타입에 number값은 맞지 않아 오류 발생

// interface나 type alias 에도 대응가능하다.
// []를 사용하는 방법 외에도 Array<string>과 같은 제네릭으로 표기 가능

//여러 타입이 있는 배열일 경우에는 Union타입이나 tuple을 사용해 표기 가능
const mixedArray = ['foo',1];
const mixedArrayU: (string|number)[] = ['foo',1]; //Union타입
const mixedArrayT: [string,number] = ['foo',1];// 튜플

//======================객체 타입======================

//객체는 key와 value를 이용한 데이터 형식 인스턴스이다.
//타입스크립트는 키 이름과 값의 쌍을 지정하여 객체 타입을 정의할 수 있다.

//javaScript
const userJ = {
    name: 'Hana',
    age: 36
}

console.log(userJ.name);
console.log(userJ.age);
//typeScript
const userT:{name: string; age: number} = {
    name: 'kwak',
    age:28
}

console.log(userT.name);
console.log(userT.age);

//객체 타입은 일부 또는 모든 속성을 ?를 사용해 optional(선택 가능) 속성으로 지정 가능하다.
//optional속성으로 타입을 정의하면 해당 속성이 존재하지 않아도 문제없이 작동한다.

function printName(obj: {firstName: string; lastName?: string}){
    console.log('성 : ' +obj.firstName);
    console.log('이름 : '+obj.lastName);
}

//아래 두 호출 모두 정상 작동한다.
printName({firstName: 'Kwak'}); //성 : Kwak 이름 : undefined
printName({firstName:'Kwak', lastName: 'SeoHo'});//성 : Kwak 이름 : SeoHo


//======================any======================

//any타입은 모든 타입을 허용하는 타입이다
//특정한 값에 대해 타입 체크 구조를 적용하고 싶지 않을 때 사용한다.

let user: any = { firstName: 'Kwak'};
// 다음 행의 코드처럼 작성해도 모두 에러가 잡히지 않는다
//user.hello();
//user();
//user.age = 100;
//user = 'hello';

//다른 타입으로 대입해도 에러가 잡히지 않는다
//const n: number = user;

//any를 사용하면 타입 체크 기능이 작동하지 않게 되어 타입스크립트의 장점이 사라진다.
//javascript 프로젝트를 타입스크립트로 마이그레이션하는 과정이 아닌 한 기본적으로 any를 사용하지 않는 것이 바람직하다.



//======================함수======================

//타입스크립트의 함수에서는 인수와 반환값의 타입을 지정할 수 있다.
function sayHelloName(name: string):string{
    return `Hello ${name}`;
}

console.log('인사말 출력 : '+sayHelloName('kwakseoho'));

//optional인수도 정의할 수 있다. 인수명 뒤에 ?를 붙인다.
function sayHelloOptional(name: string, greeting?: string): string{
    return `${greeting} ${name}`;
}

//아래 코드 모두 문제없이 동작한다.
sayHelloOptional('Kwak');   //Kwak
sayHelloOptional('Kwak','Hello');   //Hello Kwak

//함수에서 인수를 정의할 때 기본값을 지정할 수 있다.
//함수를 호출할 때 인수를 지정하지 않으면 기본값이 설정된다.
function sayHelloDefault(name: string, greeting: string = 'Hello'): string{
    return `${greeting} ${name}`;
}

//아래 모두 문제없이 동작한다.
sayHelloDefault('Kwak');    //Hello Kwak
sayHelloDefault('Kwak', 'Hey'); //Hey Kwak

//인수나 반환값의 타입에 다양한 타입을 지정할 수 있다.
function printName2(firstName3: string, formatter: (name: string) => string){
    console.log(formatter(firstName3));
}

//'씨'를 뒤에 붙이는 이름 포맷 함수를 정의한다.
function formatName(name: string): string {
    return `${name} 씨`;
}

printName2('곽서호',formatName); //곽서호 씨

//화살표 함수의 타입 지정 방식
let sayHelloByArrow = (name: string) => {
    return `Hello ${name}`;
}

//타입스크립트는 인수에도 함수를 사용가능하다
//인수명은 실제 함수의 인수명과 대응할 필요는 없다.
//(인수명: 인수_타입) ==> 반환값_타입

//singBirds는 인수가 문자열이고 반환값이 배열인 함수를 인수로 받는다.
function genBirdsInfo(name: string): string[]{
    return name.split(',');
}
//함수 타입을 사용 (x:string) => string[]
function singBirds(birdInfo: (x: string) => string[]): string{
    return birdInfo('오리, 비둘기')[0] + '꽥꽥';
}

console.log(singBirds(genBirdsInfo))    //오리 꽥꽥
//console.log(singBirds('참새')); //함수타입이 아닌 string으로 타입이 맞지 않아 오류 발생
