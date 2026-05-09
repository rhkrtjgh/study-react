//SSR을 통한 페이지 구현
//SSR에서는 접근할 때마다 서버에서 페이지를 그리고 그 결과를 클라이언트에서 표시한다.
//SSG의 getStaticProps에 대해 SSR에서는 getServerSideProps를 정의한다.
//페이지를 그리기전에 getServerSideProps를 호출하고 이 함수가 반환한 props를 기반으로 페이지를 그린다.

import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
    message: string;
};

const SSR: NextPage<SSRProps> = (props) =>{
    const { message } = props;

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="favicon,ico"></link>
            </Head>
            <main>
                <p>
                    이 페이지는 서버 사이드 렌더링을 통해 접근 시에 서버에서 그려진 페이지입니다.
                </p>
                <p>{message}</p>
            </main>
        </div>
    );
};

//getServerSideProps는 페이지로의 요청이 있을 때마다 실행된다.
export const getServerSideProps: GetServerSideProps<SSRProps> = async() =>{
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됐습니다.`;
    console.log(message);

    return {
        props:{
            message
        }
    };
};

export default SSR;