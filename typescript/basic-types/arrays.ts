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