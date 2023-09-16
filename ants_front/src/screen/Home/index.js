import { useState, useEffect, useContext } from 'react';
import { HeaderAtom } from '../../atoms/atomSample';
import { HomeContext, HomeProvider } from './HomeContext';
import { useRecoilState } from 'recoil';
import ImgSlide from '../../components/SlideImg';


export default function Home() {
    const { lotGridRows, setLotGridRows } = useContext(HomeContext); //모듈 전역 컨텍스트
    const [HeaderItem, setHeaderItem] = useRecoilState(HeaderAtom);
    const [item_sample, setItem_sample] = useState();

    const getItemSample = (item_sample) => {
        fetch(`/test/getItemSample?item_sample=${item_sample}`, { credentials: 'include' })
            .then((res) => res.json())
            .then((msg) => setItem_sample(msg))
            .catch(err => alert('Error' + err));
    }
    
    return (
        <div>
            Ants Front Tamplete{lotGridRows}
            <input type='text' onChange={(e) => { setLotGridRows(e.target.value) }} />
            <button onClick={() => getItemSample(item_sample)}>전송</button>
        </div>
    )
}