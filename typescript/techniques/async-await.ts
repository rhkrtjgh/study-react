//======================Async & Await======================
//비동기 처리 API인 Promise의 간략한 구문에 해당하는 것이 Async/Await의 기능이다
//타입 스크립트라기보다는 ECMAScript 사양 범위에 해당한다.
// -> ECMAScript = 자바스크립트 언어의 공식 설계도 (언어 자체 기능으로 정의되어 있음)
//모든 자바스크립트 엔진이 동일하게 지원해야 하는 “표준 문법”


{
    //비동기 함수 정의 Promise : 나중에 값을 주는 객체
    function fetchFromServer(id: string): Promise<{success: boolean}> { //서버에서 데이터를 가져오는척..
        return new Promise(resolve => {
            setTimeout(() =>{
                resolve({success: true})
            },100)
        });
    }

    //비동기 처리를 포함하는 async function의 반환값 타입은 Promise이다.
    async function asyncFunc(): Promise<string>{
        //Promise한 값을 await하면 내용 추출한 것처럼 보임
        const result = await fetchFromServer('111');   //await → Promise 결과를 꺼냄
        return `result : ${result.success}`;
    }

    //await구문 사용하려면 async function 안에서 호출해야함
    (async() =>{
        const result = await asyncFunc();
        console.log(result);    //true  async 함수 = 무조건 Promise 반환
    })();

    asyncFunc().then(result => console.log(result));    //true  
}