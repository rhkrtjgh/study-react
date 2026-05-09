//타입을 위해 도입
import { NextPage, GetStaticProps, NextPageContext } from 'next'
//Next.js의 내장 컴포넌트
import Head from 'next/head'

//페이지 컴포넌트의 props 타입 정의
type SSGProps = {
    message: string;
};

//SSG용 페이지 구현
//NextPage는 Next.js의 Pages용 타입
//NextPage<props>에서 props가 들어가는 Page임을 명시
//SSG는 getStataicProps가 반환한 props를 받을 수 있다.
//NextPage<SSGProps>는 Message: string만을 받아 생성된 페이지 타입
const SSG: NextPage<SSGProps> = (props) =>{
    
    const { message } = props;

    return (
        <div>
            {/** Head컴포넌트로 감싸면 그 요소는 head태그에 배치된다. */}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <main>
                <p>
                    이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
                </p>
                <p>{message}</p>
            </main>
        </div>
    );
};

//getStaticProps는 빌드 시 실행된다.
//GetStaticProps<SSGProps>는 SSGProps인수로 받는 getStaticProps타입
export const getStaticProps: GetStaticProps<SSGProps> = async (context) =>{
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 getStaticProps가 실행되었습니다.`;
    console.log(message);

    return {
        //여기에서 반환한 props를 기반으로 페이지 컴포넌트를 그린다.
        props:{
            message
        }
    };
};

//페이지 컴포넌트는 export default로 export한다
export default SSG;

//✓ Compiled successfully in 1285ms
//5/9/2026, 2:06:54 PM에 getStaticProps가 실행되었습니다.
//빌드를 실행하면 빌드 도중 console.log의 메시지가 실행된다.