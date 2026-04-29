//======================enum 타입======================
//Enum은 javascript에는 없는 기능으로 타입스크립트에서 확장한 기능 중 하나이다.

{
    //javascript
    const Direction = {
        'Up': 0,
        'Down': 1,
        'Left': 2,
        'Right': 3
    }
}

{
    //typescript Enum
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    //enum Direction참조
    let direction: Direction = Direction.Left;
    console.log(direction);
    //2출력
    //특별히 값을 지정하지 않으면 정의된 순서대로 0부터 1씩 증가된 값으로 저장
}

{
    //문자열 기반 Enum타입을 사용할 때는 각 멤버를 상수로 초기화해야 함
    enum Direction {
        Up = 'UP',
        Down = 'DOWN',
        Left = 'LEFT',
        Right = 'RIGHT'
    }

    const value = 'DOWN';
    //문자열에서 Enum타입으로 변환한다
    const enumValue = value as Direction;

    if(enumValue === Direction.Down){
        console.log('Down is selected');
    }
}

//검색: 실무에서는 enum 대신 const object를 사용한다고 함
//enum사용을 안좋아하는 곳도 있다고 함

//장점
//관련 상수를 그룹화하기 좋음
//숫자/문자 값 관리 편함
//백엔드/java/C# 출신 개발자와 협업시 익숙함

//단점
//번들 크기 증가 가능
//런타임 객체 생성
//트리쉐이킹 불리한 경우
//Babel/strip 모드 호환 이슈
//** 그래서 union literal 많이 사용