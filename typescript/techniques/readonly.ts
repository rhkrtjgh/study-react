//======================readonly======================
//타입스크립트에서는 타입 앨리어스, 인터페이스, 클래스에 대해 readonly 속성을 지정할 수 있다
//readonly가 지정된 속성은 변경할 수 없다.
{
    type User = {
        readonly name: string;
        readonly gender: string;
    }

    let user: User = {
        name: 'KwakSeoHo',
        gender: 'Male'
    }

    //readonly 속성이기 때문에 아래 대입을 수행하면 에러 발생함
    //user.gender = 'Female'; //Cannot assign to 'gender' because it is a read-only property.
}

//자바스크립트에 재대입 불가 기능으로 const가 있으나 용도가 다름
//const는 변수의 대입에 대해 수행
//readonly는 객체나 클래스의 속성에 대해 수행하는 선언이다.
//제네릭 타입에서 Readonly타입이 가능하다

//Readonly 타입에 타입 앨리어스를 지정하면 모든 속성이 변경 불가능한 타입이 됨
{
    type User = {
        name: string;
        gender: string;
    }

    type UserReadonly = Readonly<User>;

    let user: User = {
        name:'KwakSeoHo',
        gender: 'Male'
    }
    let userReadonly: UserReadonly = {
        name: 'KwakSeoHo',
        gender: 'Male'
    }

    user.name = 'KSH';  //대입 가능
    //userReadonly.name = 'KSH'   //변경 불가 에러 발생
}