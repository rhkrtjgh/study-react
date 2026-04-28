//======================타입 앨리어스======================

//type alias는 타입 지정의 별명을 덧붙이는 기능
//타입을 정의 시 직접 인라인으로 표기하면 같은 타입을 여러 번 사용할 때 재사용하기가 좋지 않고 코드 기술이 복잡해지는 문제가 있음
//타입 앨리어스를 사용하면 타입정의에 이름을 붙일 수 있고 이름을 참조해 같은 타입을 여러 차례 재사용할 수 있다.
//type 키워드를 사용하여 지정
{
    //type 타입명 = 값;
    type name = string;
}

//x와 y 좌표 속성을 갖는 Point라는 타입 앨리어스를 정의한 예시
{
    type Point = {
        x: number;
        y: number;
    }

    function printPoint(point: Point){
        console.log(`x좌표는 ${point.x}입니다.`);
        console.log(`y좌표는 ${point.y}입니다.`);
    }

    printPoint({x:100, y:100});
    //타입이 맞아도 속성명이 다르면 에러
    //printPoint({z:100, t:100});
}

//함수 자체의 타입도 타입 앨리어스로 정의 가능
//타입 앨리어스를 사용하여 코드 기술이 단순하게 되어 가독성이 좋아짐
{
    type Formatter = (a: string) => string
    function printName(firstName: string, formatter: Formatter){
        console.log(formatter(firstName));
    }
}

//객체의 키 이름을 명시하지 않고 타입 앨리어스 정의(인덱스 타입)
//키 이름과 키 숫자가 미리 정해지지 않는 경우의 객체를 정의할 때 편리함
// {[] : 타입명}
{
    type Label = {
        [key: string]: string
    }

    const labels: Label = {
        topTitle: '톱 페이지의 제목입니다',
        topSubTitle: '톱 페이지의 하위 제목입니다.',
        topFeature1: '톱 페이지의 기능 1입니다.',
        topFeature2: '톱 페이지의 기능 2입니다.',
    }

    const foo: Label = {
        //message: 100 number타입으로 오류 발생
        message: '100'
    }
}