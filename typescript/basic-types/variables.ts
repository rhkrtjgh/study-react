//======================변수======================

//변수 선언에는 var, let, const를 사용한다.
//변수명 뒤에 타입을 추가해 타입 애너테이션을 작성한다(생략가능)
var apple: string = "사과";
var sum: number = 4;
let temp = "temp";
let temp2 = 5;
const isTrue: boolean = true;

//let을 사용할 경우 블록 스코프로 선언되면 해당 블록 안에서만 사용이 가능하다.
function calc(isSum: boolean){
    let a = 100; //변수 a선언
    if(isSum){
        //변수 a가 선언된 블록 안이기 때문에 에러가 발생하지 않는다.
        let b = a+1;    //변수 b선언
        return b;
    }

    //console.log(b);   //변수b가 선언된 블록 밖이므로 오류 발생
}

//const는 값을 변경할 수 없는 상수를 선언한다.
//const 변수도 let과 같은 스코프 규칙을 가진다.
const num: number = 100;
//값을 재대입하면 컴파일러 에러가 된다.
//num = 200; //오류 발생