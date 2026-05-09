//getStaticPaths를 사용한 여러 페이지의 SSG
//ssg.tsx파일에서 1개페이지의 SSG를 수행하는 방법에 관해 설명했다.
//페이지를 하나식 만들면 게시글 페이지와 같은 표시하는 데이터만 다른 페이지가 여럿인 경우에 대응할 수 없다.
//이런 경우 Next.js의 동적 라우팅 기능이 유용하다.
//경로 파라미터를 사용해 여러 페이지를 1개의 파일로 생성할 수 있다.
//[파라미터].tsx와 같이 []로 감싼 특별한 파일명
//getStaticProps에 맞춰 getStaticPaths를 사용한다.

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';    //next/router에서 useRouter라는 훅을 삽입한다.
import { ParsedUrlQuery } from 'querystring';

type PostProps = {
    id: string;
}

const Post: NextPage<PostProps> = (props) =>{
    const { id } = props;
    const router = useRouter();

    if(router.isFallback){
        //fallback 페이지용 표시를 반환한다.
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Net App</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <main>
                <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{`/posts/${id}에 대응하는 페이지입니다.`}</p>
            </main>
        </div>
    );
};

//getStaticPaths는 생성한 페이지의 경로 파라미터의 조합을 반환한다.
//이 파일은 pages/posts/[id].tsx이므로 경로 파라미터로서 id값을 반환해야 한다.
export const getStaticPaths: GetStaticPaths = async () =>{
    //각 페이지의 경로 파라미터를 모은 것
    const paths = [
        {
            params:{
                id:'1'
            }
        },
        {
            params:{
                id:'2'
            }
        },
        {
            params:{
                id:'3'
            }
        }
    ]

    //fallback을 false로 설정하면 paths에 정의된 페이지 외에는 404를 표시한다.
    return { paths, fallback: false};
};

//파라미터 타입을 정의
interface PostParams extends ParsedUrlQuery{
    id: string;
}

//getStaticPaths 실행 후에 각 경로에 대해 getStaticProps가 실행된다.
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async(context) =>{
    return {
        props:{
            id: context.params!['id']
        }
    };
};

export default Post;

//아래 url로만 접속 가능하다 ()
//http://localhost:3000/posts/1
//http://localhost:3000/posts/2
//http://localhost:3000/posts/3

//getStaticPath방식을 과거에는 많이 썼지만 현재는 App Router의 등장으로 잘 쓰지 않는다고 함.
//또한 SSG방식보다 ISR방식을 더 많이 쓰고 있음