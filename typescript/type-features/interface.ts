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