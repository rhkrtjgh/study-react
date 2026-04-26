# study-react
리액트 학습 기록 저장소


## 학습내용 기록

## 2026-04-26 학습내용

# 리액트를 사용하는 이유
 모바일앱으로 발행이 쉬움
 앱처럼 뛰어난 UX
 일반 웹사이트보다 비즈니스적 강점

# 리액트에서 레이아웃 만들 때 사용하는 문법 3가지
JSX문법 1 
 Class 넣을 땐 className
JSX문법 2
 변수값을 사용항 때는 {} 중괄호 사용
 원래는 이렇게 사용함 document.querySelector('h4').innerHTML = post;
JSX문법 3
 style 정보 입력할 때 style={{이름 : '값'}}

# 중요한 데이터는 변수말고 state에 담습니다.

State문법을 사용하는 이유는?
  state는 갑자기 변경될 경우 Html전체가 자동 재렌더링이 됨!
State는 언제 사용할까?
  변동시에 자동으로 html에 반영되게 만들고 싶은 경우
  let [글제목,b] = useState('남자 코트 추천');
Destructuring 문법
  let a = num[0];
  let c = num[1];
  -> let [a,c] = [1,2];

