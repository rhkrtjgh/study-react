//======================리터럴 타입======================
// | 로 데이터를 구분하는 리터럴 타입을 사용하면 정해진 문자열이나 수치만 대입할 수 있는 타입으로 제어할 수 있다.
//변수: 허용데이터1 | 허용데이터2

{
    let postStatus: 'draft' | 'published' | 'deleted';
    postStatus = 'draft';   //정상
    //postStatus = 3; //에러
    //postStatus = 'test'; //에러
}

//숫자에도 리터럴 타입을 쓸 수 있다
{
    function compare(a: string, b: string): -1 | 0 | 1{
        return a === b ? 0: a > b ? 1: -1;
    }
}