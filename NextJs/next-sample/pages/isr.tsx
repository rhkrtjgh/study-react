//ISR을 통한 페이지 구현
//SSG의 응용으로 페이지 수명을 설정할 수 있고 수명을 지난 페이지에 대해 최신정보로 재생성을 시도하고 정적 페이지를 전송하면서 정보를 업데이트할 수 있다.

import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ISRProps = {
    message: string;
};

//ISRProps를 받는 NextPage타입
const ISR: NextPage<ISRProps> = (props) =>{
    const { message } = props;

    const router = useRouter();

    if(router.isFallback){
        //fallback용 페이지를 반환한다.
        return <div>Loading...</div>;
    };

    return (
        <div>
            <Head>
                <title>Create next App</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <main>
                <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{message}</p>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps<ISRProps> = async(context)=>{
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 이 페이지의 getStaticProps가 실행됐습니다.`;

    return {
        props:{
            message
        },
        //페이지의 유효 기간을 초 단위로 지정한다.
        revalidate:60
    };
};

export default ISR;

//메인 페이지 캐싱에 최적화
//검색: 인기 검색어, 재고 수량 등 바로 실시간일 필요는 없는 것들을 처리할 때 좋다고 함 