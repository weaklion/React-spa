//로컬 스토리지에 json 형태로 저장 /불러오기 /삭제 를 도와주는 헬퍼
const storage = {
    set: (key, object) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
        //v파라미터가 객체형식일시 자동으로 JSON.stringify 으로 바꿔줌.
        //일반문자열일시 그대로 넣어줌 .
    },
    get: (key) => {
    if(!localStorage) return null;
        //로컬스토라지가 없으면 null
    if(!localStorage[key]){
        return null;
    }
    
    try{
        const parsed = JSON.parse(localStorage[key]); //json으로 변환
        return parsed;
    } catch(e) {
        return localStorage[key];
    }
    },
    remove : (key) => {
        if(!localStorage) return null;

        if(localStorage[key]){
            localStorage.removeItem(key); //아이템 제거
        }
    }
    };

    export default storage;
