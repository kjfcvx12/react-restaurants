import React, { createContext, useContext } from 'react';

const ReContext=createContext();

const ReContextPro = ({children}) => {

    const restaurants =
[ { id: 1, name: "맛있는 집", location: "서울", rating: 4.5, menu: "김치찌개, 불고기",
phone: "010-1111-2222" },
{ id: 2, name: "행복한 밥상", location: "부산", rating: 4.2, menu: "비빔밥, 된장찌개",
phone: "010-3333-4444" },
{ id: 3, name: "즐거운 식탁", location: "대구", rating: 4.8, menu: "삼겹살, 냉면",
phone:
"010-5555-6666" }, ];


    return (

            <ReContext.Provider value={restaurants}>
                {children}
            </ReContext.Provider>

    );
};

export const useRest=()=>useContext(ReContext);

export default ReContextPro;