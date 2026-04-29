//======================Union 타입======================
//타입스크립트의 타입은 조합해서 사용할 수 있다.
//합집합을 의미하는 Union타입과 교집합을 의미하는 Intersection 타입이 있다.

{
    //변수나 인수 선언 시 Union 타입을 지정해 number 또는 string을 받을 수 있다
    function printId(id: number | string){
        console.log(id);
    }

    //number타입 정상 작동
    printId(11);
    //string타입도 정상 작동
    printId('11');
}

//타입 앨리어스로도 정의할 수 있다
{
    type Id = number | string;

    function printId(id: Id){
        console.log(id);
    }
}

//타입 앨리어스 사이에 새로운 타입을 정의할 수 있다.
{
    type Identity = {
        id: number | string;
        name: string;
    }

    type Contact = {
        name: string;
        email: string;
        phone: string;
    }

    //합집합을 통한 새로운 Union 타입을 정의한다.
    //Identity 또는 Contact 타입을 받을 수 있다.
    type IdentityOrContact = Identity | Contact;

    const id: IdentityOrContact = {
        id: '11',
        name: 'KwakSeoHo'
    }

    const contact: IdentityOrContact = {
        name: 'KwakSeoHo',
        email: 'wishstar1998@naver.com',
        phone: '01012345678'
    }
}

//======================Intersection 타입======================

//Intersection 타입은 여러 타입을 병합하여 하나로 만든 타입을 생성한다.
//Identity와 Contact 양쪽의 모든 속성이 병합된 타입 예시
{
    type Identity = {
        id: number | string;
        name: string;
    }

    type Contact = {
        name: string;
        email: string;
        phone: string;
    }

    type Employee = Identity & Contact;

    const employee: Employee = {
        id: '11',
        name: 'KwakSeoHo',
        email: 'wishstar1998@naver.com',
        phone: '01012345678'
    }
    //Contact 정보만 있어 에러 
    // const employeeContact: Employee = {
    //     id: '11',
    //     name: 'KwakSeoHo',
    //     email: 'wishstar1998@naver.com',
        
    // }

}