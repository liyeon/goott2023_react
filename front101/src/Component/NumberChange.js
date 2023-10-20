import React, { useState } from 'react';

function NumberChange(props) {
    // let num='One';
    const [num,setNum] = useState('One');
    function changeNumber(){
        const newNum=num==='One'?'Two':'One';
        // alert(num);
        // document.getElementById('num').innerHTML=num;
        setNum(newNum);
    }
    return (
        <div>
            <h3>use State 상태값 전달하기 <br />props 속성값 전달하기</h3>
            <h3 >{num}</h3>
            <h3 >{props.val},{props.name}</h3>
            <button onClick={changeNumber}> change number button</button>
        </div>
    );
}

export default NumberChange;