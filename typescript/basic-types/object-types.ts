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