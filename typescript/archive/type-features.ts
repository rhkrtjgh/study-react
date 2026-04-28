//======================타입 추론======================

//명시적인 변수의 초기화를 수행하면 타입 추론을 통해 자동적으로 타입이 결정됨
//const age = 10; 
//#깨달음 : 타입스크립트는 다른 파일에 같은 변수명이 있어도 체크해서 알려주네?
//검색 : 파일이 전역 스크립트로 취급되면 같은 전역 스코프를 공유해서 충돌을 알려줌
//typescript가 프로젝트 내 여러 ts 파일을 함께 분석하다 보니 같은 이름의 전역변수를 감지
export{};   //각 파일을 모듈로 만들어 독립 스코프로 처리

//원시코드 반환값
{
    
    const age = 10;
    //console.log(age.length);    //에러 발생 age는 number타입이므로 length속성이 없다.
    const user = {
        name:'Kwak',
        age: 28
    }
    //console.log(user.age.length);   //에러 발생 age는 number타입이므로 length속성이 없다.
    //age에 타입을 선언하지 않았지만 변수값을 number로 담아 추론됨
}

//함수의 반환값
{
    
    function getUser(){
        return {
            name: 'Kwak',
            age: 28
        }
    }

    const user = getUser();
    //console.log(user.age.length);//에러 발생 age는 number타입이므로 length속성이 없다.
}

//배열 값 추론
{
    const names = [ 'Kwak', 'Wonjoon', 'Minjoon'];
    //names.forEach(names) =>{ //forEach함수의 인자에 배열을 넣어 오류 발생
        //console.log(names.toUpperCase());
        
    //}
}

//window 객체 함수 추론
// {
//     window.confirm = () => { //window.confirm함수의 반환 타입은 boolean으로 타입스크립트가 알고 있어 자동 추론을 함
//         //console.log('confirm 함수');    //boolean을 리턴하지 않아 에러
//         return false;
//     }
// }

//타입스크립트는 정적 타입 언어지만 우수한 타입 추론이 있어 타입을 작성하는 복잡함을 크게 줄일 수 있다.


//======================타입 어서션======================

//검색 : TypeScript의 추론보다 개발자가 타입을 명확히 지정해서 컴파일러에게 알려주는 문법
//타입스크립트가 구체적인 타입을 알 수 없는 경우가 있다.
{
    //const myCanvas = document.getElementById('main_canvas');
    //console.log(myCanvas.width);
    //javascript에서는 에러, typescript에서는 컴파일 에러가 발생

    //개발자가 대상 ID를 가진 DOM노드가 HTMLElement 중에서도 HTMLCanvasElement라는 것을 알고 있다면 명시적으로 타입 지정 가능
    //const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

    //타입스크립트에서 타입 어서션을 인정하는 것은 대상이 되는 타입보다 구체적이거나 범용적인 타입으로 변환하는 경우
    //복잡한 어서션을 수행할때 표현하기 어려움
    //any 타입으로 1차 변환 후 원하는 타입으로 2차 변환하여 구현 가능
    //const result = (response as any) as User;

    //***타입 어서션은 실행 시에 에러를 일으킬 가능성이 있음
    //검색 : 그럼 왜 사용할까? -> 컴파일러보다 개발자가 더 정확히 아는 상황이 있기 때문
    //검증된 데이터처럼 확실한 경우에만 제한적으로 사용하는게 좋음

    //에시로 아래 코드는 컴파일 시에는 에러가 발생하지 않지만 실행 시에 에러가 발생한다.
    const foo: any = 'test';
    const bar: number = foo as number;
    


}


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

//======================인터페이스======================
//인터페이스는 타입 앨리어스와 비슷한 기능이지만 보다 확장성이 높은 열린 기능을 가지고 있다.
//클래스와 함께 많이 사용된다.

//좌표x와 y를 갖는 Point인터페이스를 작성하고 나중에 좌표z를 추가하는 예시
{
    interface Point{
        x:number;
        y:number;
    }

    function printPoint(point: Point){
        console.log(`x좌표는 ${point.x}입니다.`);
        console.log(`y좌표는 ${point.y}입니다.`);
        //console.log(`z좌표는 ${point.z}입니다.`); //객체에 z가 존재하지 않아 컴파일 시 에러발생
    }

    interface Point{
        z: number;
    }
    //인수의 객체에 z가 존재하지 않아 컴파일 시 에러 발생
    //printPoint({x:100, y:100});
    printPoint({x:100, y:100, z:200});

    //Point에 나중에 z를 추가한 것처럼 인터페이스를 확장할 수 있다.
    //타입 앨리어스를 사용하는 때는 나중에 같은 이름으로 타입을 정의할 수 없다.
}

//인터페이스에서는 클래스의 작동 타입을 정의하고 implements를 사용해 클래스에 구현을 위임할 수 있다.
{
    interface Point {
        x: number;
        y: number;
        z?: number; //optional도 사용가능
    }

    //클래스가 인터페이스를 implements했을 때 z가 존재하지 않으면 컴파일 시 에러가 난다.
    //모든 항목을 필수로 구현해야 한다.
    class myPoint implements Point{
        x:number = 0;
        y:number = 1;
        z:number = 2;
    }
    //optional을 사용하여 아래 코드에서 에러는 발생하지 않는다.
    class friendPoint implements Point{
        x:number = 0;
        y:number = 1;
    }
}

//인터페이스에서는 extends를 사용해 다른 인터페이스를 확장할 수 있다.
{
    interface Colorful {
        color: string;
    }

    interface Circle {
        radius: number;
    }

    //여러 인터페이스를 상속하여 새로운 인터페이스를 정의할 수 있다.
    interface ColorfulCircle extends Colorful, Circle {

    }

    const cc: ColorfulCircle = {
        color: '빨강',  //Colorful
        radius: 10     //Circle
    }
    //클래스나 객체의 일부 속성이나 함수를 포함하는 일부 작동을 정의할 때는 인터페이스를 사용하는 것이 적합하다.
}

//======================클래스======================

//타입스크립트는 ES2015에서 javascript에 도입된 클래스 표기법에 타입을 붙일 수 있다
{
    class Point {
        x: number;
        y: number;

        //인수가 없는 경우의 초기값을 지정한다.
        constructor(x: number = 0, y: number = 0){
            this.x = x;
            this.y = y;
        }

        //반환값이 없는 함수를 정의할 때는 void를 지정한다.
        moveX(n: number): void {
            this.x += n;
        }

        moveY(n: number): void {
            this.y += n;
        }
    }

    const point = new Point();
    point.moveX(10);
    console.log(`${point.x}, ${point.y}`);  //10, 0

    //클래스는 extends를 사용해 다른 클래스를 상속할 수 있습니다.
    //Point 클래스를 상속
    class Point3D extends Point {
        z: number;

        constructor(x: number = 0, y: number = 0, z: number = 0) {
            //상속원의 생성자를 호출
            super(x,y);
            this.z = z;

        }

        moveZ(n: number): void {
            this.z += n;
        }
    }

    const point3D = new Point3D();
    //상속원의 메서드를 호출할 수 있다.
    point3D.moveX(10);
    point3D.moveZ(20);
    console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);    //10, 0, 20
}

//인터페이스에 implements를 사용해 클래스에 대한 구현을 강제할 수 있다.
{
    interface IUser {
        name: string;
        age: number;
        sayHello: () => string; //인수 없이 문자열을 반환한다.
    }

    class User implements IUser {
        name: string;
        age: number;

        constructor(){
            this.name = '';
            this.age = 0;
        }

        sayHello(): string{
            return `안녕하세요 저는 ${this.name}이며 ${this.age}살 입니다.`
        }
    }

    const user = new User();
    user.name = 'KwakSeoHo';
    user.age = 28;
    console.log(user.sayHello());   //안녕하세요 저는 KwakSeoHo이며 28살 입니다.
}

//접근 수정자
//타입스크립트의 클래스에서는 접근 수정자로 public, private, protected를 제공합니다
//접근 수정자를 부여하여 멤버나 메서드의 접근 범위를 제어할 수 있습니다.
//접근 수정자를 따로 지정하지 않을 경우 public으로 취급
{
    class BasePoint3D {
        public x: number;
        private y: number;
        protected z: number;

        constructor() {
            this.x = 1;
            this.y = 2;
            this.z = 3;
        }
    }

    //인터페이스화 했을 경우 접근 제어 예시
    const basePoint = new BasePoint3D();
    basePoint.x; // 정상
    //basePoint.y; // 컴파일 시 에러 발생 private여서 접근 불가
    //basePoint.z; // 컴파일 시 에러 발생 protected여서 접근 불가

    //클래스를 상속했을 때의 접근 제어 예시
    class ChildPoint extends BasePoint3D {
        constructor(){
            super();
            this.x; //정상
            //this.y; //컴파일 시 에러 발생 private여서 접근 불가
            this.z; //protected는 접근 가능하다.
        }
    }
}


