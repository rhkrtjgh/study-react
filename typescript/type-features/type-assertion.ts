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