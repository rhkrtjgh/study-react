//======================원시 타입======================
//javaScript에서 자주 사용되는 원시 타입인 string(문자열), number(숫자), boolean(논리값)은 타입스크립트에 대응하는 타입이 있다.
//이 타입들은 typeof 연산자를 사용할 때 표시되는 이름과 같다.

let ageValue: number = 36;
let isDone: boolean = false;
let color: string = '파랑';

let myNumber: string = '200';
myNumber = '이백';
//myNumber = 200; //string타입에 number값을 대입하여 오류 발생