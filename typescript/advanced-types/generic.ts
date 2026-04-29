//======================제네릭 타입======================

//제네릭은 클래스와 함수에 대해 그 안에서 사용하는 타입을 추상화해 구체적인 타입을 지정할 수 있는 기능이다.
//범용적인 클래스나 함수를 정의할 때 편리하다

//임의의 타입의 배열과 호출 시 배열을 순서대로 꺼내는 함수를 가진 클래스 예시
{
    class Queue<T> {
        //내부에서 T 타입의 배열을 초기화
        private array: T[] = [];

        //T타입의 값을 배열에 추가
        push(item: T){
            this.array.push(item);
        }

        // T타입 배열의 첫번째 값을 꺼낸다
        pop(): T | undefined{
            return this.array.shift();
        }
    }

    const queue = new Queue<number>();  //숫자 타입을 다루는 큐를 생성
    queue.push(111);
    queue.push(112);
    //queue.push('foo'); number타입이 아니므로 에러

    //let str = 'bar';
    //str = queue.pop();  //str은 number타입이 아니므로 에러
    let num:number | undefined = 4; //union타입인데 예습해서 써봄
    num = queue.pop();  //str은 number타입이 아니므로 에러
}

//제네릭 타입은 바깥쪽에서 지정해 작동하는 클래스를 기술할 때 편리하다