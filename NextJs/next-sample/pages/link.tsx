//Next.js에서는 애플리케이션 안의 다른 페이지로 이동하기 위한 link컴포넌트가 있다.
//Link 컴포넌트를 사용해 페이지를 이동하면 클라이언트 사이드에서 새로운 페이지를 그려 재빨리 이동할 수 있다.
//화면을 그리기 위해 필요한 데이터는 미리 비동기 방식으로 얻는다.

//Link 컴포넌트를 사용하기 위해 next/link에서 임포트한다.
import Link from 'next/link';

{
    /** /ssr로 이동하기 위한 링크를 작성한다. */
    <Link href="/ssr">
        <a>Go TO SSR</a>
    </Link>

    {/**쿼리 파라미터도 지정하는 경우 href문자열로 그대로 지정하는 방법 외에 객체를 사용하여 지정할 수 있다.*/}
    <Link href={{pathname: '/ssg', query:{keyword: 'hello'}}}>
        <a>GO TO SSG</a>
    </Link>
    {/** a 요소 대신 버튼 등을 사용하면 Link의 자식 컴포넌트에 onClick이 전달되어 콜백이 호출되면 페이지를 이동한다. */}

    <Link href="/ssg">
        {/** a 대신 버튼을 사용하면 onClick이 호출되는 시점에 이동한다. */}
        <button>Jump to SSG page</button>
    </Link>
}
//router 객체의 push메서드를 호출해서 페이지를 이동할 수 있다.
import { useRouter } from 'next/router';
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const onSubmit = () =>{
        // /ssr로 이동한다.
        router.push('/ssr');

        //문자열 대신 객체로 지정할 수 있다.
        // /ssg?keyword=hello로 이동한다.
        router.push({
            pathname: '/ssg',
            query: { keyword: 'hello'}
        });
    };

    //리로드를 수행하는 reload()
    router.reload();
    //페이지를 돌아가는 back()
    router.back();
    //이동 시작시의 이벤트를 구독한다.
    router.events.on('routeChangeStart',(url,{ shallow }) =>{
        //url에는 이동 대상지의 경로를 부여할 수 있다.
        //shallow는 얕은 라우팅의 경우에는 true가 된다.
    });

    //이동 완료시의 이벤트를 구독한다.
    router.events.off('routeChangeComplete',(url,{ shallow })=>{
        //url에는 이동 대상지의 경로를 부여할 수 있다.
        //shallow는 얕은 라우팅의 경우에는 true가 된다.
    })
}

