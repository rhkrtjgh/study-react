import { useState, useEffect } from 'react'

//타이머가 호출되는 주기를 1초로 한다
const UPDATE_CYCLE = 1000;

//로컬 스토리지에서 사용하는 키
const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
    US = 'en-US',
    KR = 'ko-KR'
}

const getLocaleFromString = ( text: string) =>{
    switch (text){
        case Locale.US:
            return Locale.US;
        case Locale.KR:
            return Locale.KR;
        default:
            return Locale.US;
    }
}

const Clock = () =>{
    const [timestamp, setTimestamp] = useState(new Date());
    const [locale, setLocale] = useState(Locale.US);

    //타이머를 설정하기 위한 부가 작용
    useEffect(() =>{
        //타이머 셋
        const timer = setInterval(()=>{
            setTimestamp(new Date())
        },UPDATE_CYCLE)

        return () =>{
            clearInterval(timer);
        }
        //초기 그리시에만 실행한다.
    },[])

    //로컬 스토리지에서 값을 로딩
    useEffect(()=>{
        const savedLocale = localStorage.getItem(KEY_LOCALE);
        if(savedLocale !== null){
            setLocale(getLocaleFromString(savedLocale));
        }
    },[])

    //useEffect가 실행되기 직전 또는 언마운트시 클린업 함수가 실행됨
    //언마운트 시에 타이머를 해제하지 않으면 부모 컴포넌트에서 clock 컴포넌트를 호출하지 않게 되어 표시지되 않은 뒤에도 타이머가 계속 작동한다.
    //이는 버그나 메모리 누수의 원인이 된다.
    //그리기 함수 안에 직접 로컬 스토리지를 사용하면 그리기에 지연이 발생하게 되어 useEffect 안에서 로컬 스토리지를 사용한다.

    //locale이 바뀌었을 때 로컬 스토리지에 값을 저장
    useEffect(() =>{
        localStorage.setItem(KEY_LOCALE,locale);
        //의존 배열에 locale을 전달하고 변할 때마다 실행
    },[locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ko-KR">ko-KR</option>
                </select>
            </p>
        </div>
    )
}

//useLayoutEffect

//useEffect는 DOM이 업데이트되고 화면이 실제로 그려진 뒤에 실행되는데, useLayoutEffect는 DOM이 업데이트 된 후 화면에 실제로 그려지기 전에 실행된다.
//useLayoutEffect로 실행하는 처리는 동기적으로 실행되기 때문에 무거운 처리를 실행하면 화면 그리기가 지연될 수 있어 주의해야 한다.

useLayoutEffect(()=>{
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if(savedLocale !== null){
        setLocale(getLocaleFromString(savedLocale))
    }
}, [])




