//이미지 표시
//Next.js는 빌트인 기능으로 이미지 성능을 최적화할 수 있다.
//이미지를 표시할 때는 next/image의 Image컴포넌트를 사용한다. img태그가 아닌 Image컴포넌트를 사용함으로써 이미지를 읽을 때 서버사이드에서 이미지를 최적화한다.
import { NextPage } from 'next';
import Image from 'next/image';
//이미지 파일을 임포트한다.
import food from '../public/images/food.jpeg';

const ImageSample: NextPage<void> = (props) =>{
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img태그로 표시한 경우</p>
            {/**일반적인 img태그를 사용해서 이미지를 표시한다. */}
            <img src="/images/food.jpeg" alt="" style={{width:650,height:500}}></img>
            <p>Image컴포넌트로 표시한 경우</p>
            <Image src={food} style={{width:650,height:500}}></Image>
            <p>Image로 표시한 경우는 사전에 그리기 영역이 확보된다.</p>
        </div>
    )
}

export default ImageSample;


//일반적인 이미지 태그를 사용할 경우
//<img src="/images/food.jpeg" alt="" style="width:650px;height:500px">

//Image컴포넌트로 표시한 경우
//<img loading="lazy" width="5712" height="4284" decoding="async" data-nimg="1" style="color:transparent;width:650px;height:500px" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.0gnj56.3o2lxg.jpeg&amp;w=3840&amp;q=75 1x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.0gnj56.3o2lxg.jpeg&amp;w=3840&amp;q=75">

//Image 컴포넌트를 사용하면 브라우저의 정보를 기반으로 최적화한 이미지를 제공한다.
//이미지를 로딩하는 동안에 이미지를 표시할 영역을 확보하기 때문에 레이아웃이 깨지는 것을 방지한다.

//Image 컴포넌트는 몇 가지 파라미터를 props에 전달할 수 있다.
//layout에는 뷰포트의 변화에 따라 이미지를 리사이즈할 것인지 설정할 수 있다. default는 intrinsic이다.
//intrinsic : 뷰포트가 이미지 크기보다 작을 때 뷰포트에 맞춰 리사이즈한 이미지를 표시한다.
//responsive : 뷰포트에 맞춰 리사이즈한 이미지를 표시한다.
//fixed : width와 height에 기반해 뷰포트의 크기에 관계없이 같은 사이즈 이미지를 표시한다.
//fill : 부모 요소에 맞춰서 이미지를 표시한다.