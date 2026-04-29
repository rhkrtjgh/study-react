//======================never 타입======================
//never 타입은 절대로 발생하지 않는 값의 종류를 나타낸다.
//절대로 값이 반환되지 않는 반환값의 타입을 never로 정의할 수 있다.
//검색: 그럼 never과 void는 무슨 차이인가
// void : 반환값을 사용하지 않음, 함수가 끝나긴 끝남(undefined 반환 개념)
// never : 절대 반환자체가 안됨, 함수가 끝나지 않음 (정상 종료되지 않음)

//실무에서 예외 함수에 주로 사용한다
{
    function error(message: string): never{
        throw new Error(message);
    }
}

//Enum으로 정의한 각 페이지의 타입에 해당 타입에 대응하는 제목을 반환하는 함수 예시
{
    enum PageType {
        ViewProfile,
        EditProfile,
        ChangePassword
    }

    const getTitleText = (type: PageType) => {
        switch(type){
            case PageType.ViewProfile:
                return 'Setting';
            case PageType.EditProfile:
                return 'Edit Profile';
            case PageType.ChangePassword:
                return 'Change Password';
            default:
                //결코 일어나지 않을 일을 컴파일러에 전달하는 never타입에 대입
                //미래 Pagetype의 enum 타입에 상수가 새롭게 추가됐을때
                //컴파일 시 에러 발생하기 때문에 버그를 미리 방지하여 대응할 수 있다.
                const wrongType: never = type;
                throw new Error(`${wrongType} is not in PageType`);            
        }
    }
}