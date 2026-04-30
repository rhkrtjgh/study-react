//======================논-널 어서션 연산자======================
//타입 스크립트는 일반적으로 null일 가능성이 있는 객체에 대한 접근을 에러로 취급한다.
//null이 아님을 나타내고 싶을 때 Non-Null Assertion이라는 기능을 사용해 명시적으로 컴파일러에게 문제가 없음을 전달할 수 있다.
//논널로 나타낼 변수 등에 !를 붙인다.
{
    interface User{
        name: String;
        social?: {
            facebook: Boolean;
            twitter: Boolean;
        }
    }

    let user: User;

    user = {
        name: 'KwakSeoHo'
    }

    //!를 사용해 명시적으로 지정함으로써 컴파일 에러를 억제한다.
    function processUser(user?: User){
        let s = user!.name;
    }
}