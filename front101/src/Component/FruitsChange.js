import React, { useState } from 'react';
// 과일의 종류 가격 전달하기
// 버튼으로 과일 종류 변화주기
function FruitsChange(props) {
    const data =[
        {
            name:'오렌지',price:3000
        },
        {
            name:'망고',price:8000
        },
        {
            name:'레몬',price:7000
        },
        {
            name:'사과',price:100
        },
        {
            name:'오렌지',price:3000
        },
    ]
    const [selectedFruit, setSelectedFruit] = useState(data[0]);
    function changeFruit(e){
        const selectedFruitIndex = e.target.value;
        setSelectedFruit(data[selectedFruitIndex]);
    }
    return (
        <div>
            <h3>과일 종류 가격 전달하기</h3>
            <h3>버튼으로 과일 종류 변화주기</h3>
            <h3>선택한 과일: {selectedFruit.name}</h3>
            <h3>가격: {selectedFruit.price}</h3>
            <select onChange={changeFruit} value={data.indexOf(selectedFruit)}>
                {data.map((fruit, index) => (
                    <option value={index}>
                        {fruit.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FruitsChange;