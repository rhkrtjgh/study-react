//======================옵셔널 체이닝======================
//옵셔널 체이닝을 사용하면 중첩된 객체의 속성이 존재하는가에 관한 조건 분기를 간단하게 기술할 수 있다
//옵셔널 체이닝 기능의 ?를 사용하면 null 또는 undefined가 될 수 있는 객체에 대해 안전하게 처리할 수 있다.
{
    //null이 될 수 있는 social이라는 속성의 타입을 정의
    interface User{
        name: String;
        social?: {
            facebook: Boolean;
            twitter: Boolean;
        }
    }

    let user: User;

    user = {
        name: 'KwakSeoHo',
        social: {
            facebook: true,
            twitter: true
        }
    }

    //true가 출력된다.
    console.log(user.social?.facebook);

    //social이 존재하지 않는 경우에도 정상
    user = {
        name: 'KwakSeoHo'
    }
    console.log(user.social?.facebook);
}