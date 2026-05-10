import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponse = {
    name: string;
}

// /api/hello에서 호출될 때의 API 작동을 구현한다.
const data =  (req: NextApiRequest, res: NextApiResponse<HelloResponse>) =>{
    //상태 200으로 {name: Kwak SeoHo}를 반환한다
    res.status(200).json({ name: 'Kwak SeoHo'})
}

export default data;