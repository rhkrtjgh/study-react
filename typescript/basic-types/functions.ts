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
