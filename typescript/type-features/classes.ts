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