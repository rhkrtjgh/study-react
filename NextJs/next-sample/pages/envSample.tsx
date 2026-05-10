//환경변수 & 구성
//Next.js는 ㅐㄴ부적으로 환경 변수를 위한 .env파일을 처리할 수 있다.
//.env .env.local .env.${환경명} .env.${환경명}.local 형식의 파일들을 참조할 수 있다.
//.local이 붙은 것은 .gitignore에 추가되는 것을 의도한 것으로 API 키 등의 공개하고 싶지 않은 값을 저장하기 위해 사용한다.

import { NextPage } from 'next';
import Head from 'next/head';

const EnvSample: NextPage = (props) =>{
    //서버 사이드에서 화면을 그릴 때는 test1이 표시되고 클라이언트 사이드에서 다시 그릴 때는 undefined가 표시된다.
    console.log('process.env.TEST',process.env.TEST);
    //test2가 표시된다.
    console.log('process.env.NEXT_PUBLIC_TEST',process.env.NEXT_PUBLIC_TEST);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {/**서버 사이드에서 화면을 그릴 때는 test1로 표시되며 클라이언트 사이드에서 다시 그릴 때는 아무것도 표시되지 않는다. */}
                <p>{process.env.TEST}</p>
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    );
}

//getStaticProps는 항상 서버 사이드에서 실행되므로 모든 환경변수를 참조할 수 있다.
export const getStaticProps = async() =>{
    //test1이 표시된다
    console.log('process.env.TEST', process.env.TEST);
    //test2가 표시된다.
    console.log('process.env.NEXT_PUBLIC_TEST',process.env.NEXT_PUBLIC_TEST);

    return {
        props:{

        }
    }
}

export default EnvSample;
