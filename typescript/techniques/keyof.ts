//======================keyof 연산자======================
// 객체 타입의 key들만 뽑아서 유니온 타입으로 만들어주는 기능
//타입에 대해 keyof 연산자를 사용하면 해당 타입이 가진 각 속성의 타입의 Union타입을 반환한다.
{
    type User = {
        name: string;
        age: number;
    }

    type UserKeys = keyof User; //type UserKeys = "name" | "age";
}


//객체에 존재하는 키를 사용해 무언가의 함수 처리를 수행하고자 할때 안전하게 구현할 수 있다
{
    interface User {
        name: string;
        age: number;
        email: string;
    }
    type UserKey = keyof User;

    const key1: UserKey = 'name';
    //const key2: UserKey = 'phone';  //phone은 없으므로 에러 발생

    function getProperty<T,K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }

    const user: User = {
        name: 'KwakSeoHo',
        age: 36,
        email: 'test@naver.com'
    }

    //name은 타입의 키로 존재하기 때문에 string타입의 값을 반환
    const userName = getProperty(user,'name');
    console.log(userName);  //KwakSeoHo
    console.log(getProperty(user,'age'));  //36
    console.log(getProperty(user,'email'));  //test@naver.com

    //gender는 객체의 키로 존재하지 않아 에러 발생
    //const userGender = getProperty(user,'gender');
}


