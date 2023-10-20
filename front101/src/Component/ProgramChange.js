import React, { useState } from 'react';

function ProgramChange() {
    const [language,setLanguage] = useState('java');
    function changeLanguage(){
        const newLanguage=language==='java'?'python':'java';
        setLanguage(newLanguage);
    }
    return (
        <div>
            <h3>use State 상태값 전달하기2</h3>
            <h3 >{language}</h3>
            <button onClick={changeLanguage}> change language button</button>
        </div>
    );
}

export default ProgramChange;